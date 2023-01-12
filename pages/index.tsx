import Image from 'next/image';
import { Inter } from '@next/font/google';
import Layout from '../components/Layout';
import ProfilePic from '../public/Profile.png';
import SocialNetworkInfo from '../components/SocialNetworkInfo';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
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
                I&apos;m a front-end developer speciliazed in React / Next /
                TypeScript based in Málaga, Spain. Always learning and
                improving. Never let the comfort zone ruin you.
              </p>
            </div>
          </section>
          <SocialNetworkInfo className='flex items-center justify-evenly max-w-xs sm:max-w-sm md:max-w-md mx-auto py-4' />
        </div>
      </Layout>
    </>
  );
}
