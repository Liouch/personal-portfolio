import Image from 'next/image';
import Layout from '../components/Layout';
import ProfilePic from '../public/Profile.png';
import SocialNetworkInfo from '../components/SocialNetworkInfo';
import Timeline from '../components/Timeline';
import { GetStaticProps } from 'next';
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
        <div className='w-36 sm:w-60 mx-auto'>
          <Image
            src={ProfilePic}
            alt='profile picture'
            width={275}
            height={275}
            placeholder='blur'
            className='rounded-full border-solid border-4 border-[var(--feather)]'
          />
        </div>
        <section className='mt-6 sm:mt-10 text-center'>
          <h1>Liou Wang</h1>
          <div className='my-4'>
            <p>
              Front-end developer speciliazed in React / Next / TypeScript based
              in Málaga, Spain. Always learning and improving. Never let the
              comfort zone ruin you.
            </p>
          </div>
        </section>

        <div className='flex flex-col items-center justify-center gap-4'>
          <h3 className='text-center'>
            What I&apos;ve been interested in lately...!
          </h3>

          <Timeline bookmarks={bookmarks} />
        </div>
        <SocialNetworkInfo className='flex items-center justify-evenly max-w-xs sm:max-w-sm md:max-w-md mx-auto py-4 mt-10' />
      </div>
    </Layout>
  );
}
