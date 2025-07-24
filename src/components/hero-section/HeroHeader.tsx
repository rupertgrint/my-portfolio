'use client';

import { cn } from '@/utils/cn';
import { useEffect, useState } from 'react';
import { IoMoon, IoSunny } from 'react-icons/io5';

export default function HeroHeader() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <header className='flex items-center justify-between w-full py-4'>
      <span></span>
      <button
        aria-label='Toggle Dark Mode'
        onClick={() => setDarkMode((prev) => !prev)}
        className={cn(
          `text-md bg-transparent hover:opacity-70 border-none transition cursor-pointer dark:text-white`
        )}
      >
        {darkMode ? <IoSunny /> : <IoMoon />}
      </button>
    </header>
  );
}
