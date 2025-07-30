'use client';

export default function Footer() {
  return (
    <footer className='flex flex-col items-center mt-16 border-t py-10 px-2 md:px-10 border-gray-400'>
      <div className='flex flex-col md:flex-row items-center justify-center pb-20'>
        <p className='pr-2 pb-2 md:pb-0 font-museo text-sm md:text-lg font-bold '>
          Let’s connect! — open to collabs:
        </p>
        <a
          href='mailto:hyun.heather.park@gmail.com'
          className='text-text-primary text-sm hover:underline'
        >
          hyun.heather.park@gmail.com
        </a>
      </div>
      <div className='text-xs text-text-primary'>Last updated: July 2025</div>
    </footer>
  );
}
