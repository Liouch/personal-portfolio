import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Layout>
        <title>Liou Wang - Front-end Developer</title>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eius
          repellendus temporibus debitis officiis expedita necessitatibus vel,
          officia facere deserunt nihil quae, nesciunt ullam molestiae aliquid
          consequatur laboriosam. Totam, excepturi!
        </p>
      </Layout>
    </>
  );
}
