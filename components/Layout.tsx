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
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
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
