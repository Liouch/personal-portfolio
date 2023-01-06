import React, { useState, useEffect } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from 'next-themes';

const ThemeToggler = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const toggleTheme = resolvedTheme === 'light' ? 'dark' : 'light';
    setTheme(toggleTheme);
  };

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <button onClick={toggleTheme}>
      {resolvedTheme === 'light' ? <FiMoon /> : <FiSun />}
    </button>
  );
};

export default ThemeToggler;
