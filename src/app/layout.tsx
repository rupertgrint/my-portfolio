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
  title: 'Hyun Heather Park | Software Engineer Portfolio',
  description:
    'Portfolio of Hyun Heather Park (also known as Hyun Park) — showcasing projects, skills, and experience as a front-end and full-stack software engineer. Built with Next.js, TypeScript, and Tailwind CSS.',
  icons: {
    icon: '/icon.png',
  },
  openGraph: {
    title: 'Hyun Heather Park | Software Engineer Portfolio',
    description:
      'Explore the work of Hyun Heather Park (Hyun Park) — a front-end and full-stack software engineer with projects built using Next.js, TypeScript, and Tailwind CSS.',
    url: 'https://hyunpark.dev',
    siteName: 'Hyun Heather Park Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Hyun Heather Park Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
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
