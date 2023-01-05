import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

export type NavBarItemProps = {
  url: string;
  children: React.ReactNode;
};
export const NAVBAR_ITEMS = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Projects',
    url: '/projects',
  },
];

const NavBarItem = ({ url, children }: NavBarItemProps) => {
  return <Link href={url}>{children}</Link>;
};

const NavBar = () => {
  const [theme, setTheme] = useState<string>('light');
  const router = useRouter();
  const toggleTheme = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
  };

  return (
    <nav className='sticky h-20 w-full shadow-md shadow-gray-300'>
      <div className='flex justify-between items-center w-full h-full px-8 md:px-20'>
        <NavBarItem url='/'>
          <span>Liou Wang</span>
        </NavBarItem>
        <div className='flex items-center'>
          {NAVBAR_ITEMS.map((item) => {
            const activeLink = router.asPath === item.url ? 'font-bold' : '';
            return (
              <NavBarItem url={item.url} key={item.title}>
                <span
                  className={`relative mr-3 ${activeLink} before:content-[''] before:absolute before:-z-10
                  before:bottom-0 before:left-0 before:right-0 before:scale-x-0 
                  before:border-b-4 before:border-b-[var(--feather)] before:origin-[center_right]
                  before:transition-transform before:ease-in before:duration-200 hover:before:scale-x-100 hover:before:origin-[center_left]`}
                >
                  {item.title}
                </span>
              </NavBarItem>
            );
          })}
          <button onClick={toggleTheme}>
            {theme === 'light' ? <FiMoon /> : <FiSun />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
