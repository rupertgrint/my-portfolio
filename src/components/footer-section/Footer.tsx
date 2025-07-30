'use client';

export default function Footer() {
  return (
    <footer className='flex flex-col items-center mt-16 border-t py-10 px-10 border-gray-400'>
      <div className='flex items-center text-md font-bold text-lg pb-20'>
        <p className='pr-2'>Let’s connect! — open to collabs:</p>
        <a
          href='mailto:hyun.heather.park@gmail.com'
          className='text-text-primary font-normal text-sm hover:underline'
        >
          hyun.heather.park@gmail.com
        </a>
      </div>
      <div className='text-xs text-text-primary'>Last updated: July 2025</div>
    </footer>
  );
}
