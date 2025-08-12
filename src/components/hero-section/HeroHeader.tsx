'use client';

import { cn } from '@/utils/cn';
import { useTheme } from 'next-themes';
import { IoMoon, IoSunny } from 'react-icons/io5';

export default function HeroHeader() {
  const { theme, setTheme } = useTheme();

  return (
    <header className='flex items-center justify-end w-full py-4'>
      <button
        aria-label='Toggle Dark Mode'
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className={cn(
          `text-md bg-transparent hover:opacity-70 border-none transition cursor-pointer dark:text-white`
        )}
      >
        {theme === 'dark' ? <IoSunny /> : <IoMoon />}
      </button>
    </header>
  );
}
