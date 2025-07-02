import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
      fontSize: {
        xxs: ['0.625rem', '0.875rem'],
        '1.5xl': ['1.375rem', '1.875rem'],
      },
      colors: {
        background: '#f9f9f9',
        foreground: '#000000',
        white: '#ffffff',
        gray: {
          'medium-dark': '#666666',
          'medium-light': '#CCCCCC',
        },
        red: {
          DEFAULT: '#E63946',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
} satisfies Config;
