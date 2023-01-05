import Head from 'next/head';
import NavBar from './NavBar';

export type LayoutProps = {
  children: React.ReactNode;
  home?: boolean;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        {/* Move Title out*/}
        <meta name='og:title' content='Liou Wang - Front-end Developer' />
        <title>Liou Wang - Front-end Developer</title>
        <meta
          name='description'
          content='Liou Wang is a Frontend Developer (React / NextJs / TypeScript)'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <header>
        <NavBar />
      </header>
      <main className='w-4/5 md:w-3/5 mx-auto mt-10'>{children}</main>
    </>
  );
};

export default Layout;
