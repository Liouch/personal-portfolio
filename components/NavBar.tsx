import Link from 'next/link';
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
          {NAVBAR_ITEMS.map((item) => (
            <NavBarItem url={item.url} key={item.url}>
              <span className='mr-3'>{item.title}</span>
            </NavBarItem>
          ))}
          <button onClick={toggleTheme}>
            {theme === 'light' ? <FiMoon /> : <FiSun />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
