import type { Metadata } from 'next';
import './globals.css';
import { MuseoModerno } from 'next/font/google';

const museoModerno = MuseoModerno({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-museo',
});

export const metadata: Metadata = {
  title: 'Hyun Park Portfolio',
  description: 'Created by Hyun Heather Park',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={museoModerno.variable}>
      <body>{children}</body>
    </html>
  );
}
