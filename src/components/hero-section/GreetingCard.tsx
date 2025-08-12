export default function GreetingCard() {
  return (
    <div className='py-10 flex flex-col'>
      <h1 className='text-3xl md:text-5xl font-medium pb-2 font-museo'>
        Greeting,
        <br />
        I&apos;m Hyun Park
      </h1>
      <p className='pl-1 pb-14 md:pb-10 text-sm text-gray-600 dark:text-gray-300'>
        Software Engineer
      </p>
      <p className='text-center md:text-left leading-5 text-text-primary'>
        Hi, I&apos;m Hyun — a software engineer with a passion for building
        thoughtful, user-focused digital solutions. From crafting clean,
        responsive interfaces to developing robust backend features, I enjoy
        solving problems and bringing ideas to life through code. Welcome to my
        portfolio — feel free to explore my work!
      </p>
    </div>
  );
}
