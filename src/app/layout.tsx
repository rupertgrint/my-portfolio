import type { Metadata } from 'next';
import './globals.css';
import { MuseoModerno } from 'next/font/google';
import localFont from 'next/font/local';

const museoModerno = MuseoModerno({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-museo',
});

const satoshi = localFont({
  src: [
    {
      path: '../../public/fonts/Satoshi/Satoshi-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Satoshi/Satoshi-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-satoshi',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Hyun Park Portfolio',
  description: 'Created by Hyun Heather Park',
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${museoModerno.variable} ${satoshi.variable}`}>
      <body>{children}</body>
    </html>
  );
}
