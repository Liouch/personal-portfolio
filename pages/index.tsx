import { GetStaticProps } from 'next';
import Description from '../components/Description';
import Layout from '../components/Layout';
import ProfilePic from '../components/ProfilePic';
import SocialNetworkInfo from '../components/SocialNetworkInfo';
import Timeline from '../components/Timeline';
import { Bookmark } from '../types/types';

type HomeProps = {
  bookmarks: Bookmark[];
};

const apiUrl = process.env.NEXT_API_URL;
const apiKey = process.env.NEXT_API_KEY;

export const getStaticProps: GetStaticProps = async () => {
  if (!apiUrl || !apiKey) {
    console.error('API URL or API Key is not defined');
    return {
      props: { bookmarks: [] },
      revalidate: 86400, // Revalidate every 24 hours
    };
  }

  const headers = {
    'Content-Type': 'application/json',
    'X-Access-Key': apiKey,
  };
  const response = await fetch(apiUrl, {
    method: 'GET',
    headers,
  });

  if (!response.ok) {
    console.error(
      'Failed to fetch data from API: ' + response.status + response.statusText
    );
    return {
      props: { bookmarks: [] },
      revalidate: 60, // Revalidate every 1 hour
    };
  }
  const data = await response.json();

  const bookmarks = (data?.record?.bookmarks ?? []).reverse();

  return {
    props: { bookmarks },
    revalidate: 86400, // Revalidate every 24 hours
  };
};

export default function Home({ bookmarks }: HomeProps) {
  return (
    <Layout>
      <div>
        <ProfilePic />
        <Description />
        <Timeline
          bookmarks={bookmarks}
          title="What I've been interested in lately...!"
        />
        <SocialNetworkInfo />
      </div>
    </Layout>
  );
}
