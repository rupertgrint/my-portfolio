import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
        },
        gray: {
          dark: '#0F0E0E',
          'medium-dark': 'var(--gray-medium-dark)',
          'medium-light': '#CCCCCC',
        },
      },
      fontFamily: {
        sans: ['var(--font-satoshi)', 'sans-serif'],
        museo: ['var(--font-museo)'],
      },
      fontSize: {
        xxs: ['0.625rem', '0.875rem'],
        '1.5xl': ['1.375rem', '1.875rem'],
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
