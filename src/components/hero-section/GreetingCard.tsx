export default function GreetingCard() {
  return (
    <div className='flex flex-col'>
      <h1 className='text-4xl sm:text-4xl font-medium pb-2'>
        Greeting,
        <br />
        I&apos;m Hyun Park
      </h1>
      <p className='pb-10 text-sm'>Software Engineer</p>
      <p className='text-center md:text-left leading-5'>
        Hi, I&apos;m Hyun — a software engineer with a passion for building
        thoughtful, user-focused digital solutions. From crafting clean,
        responsive interfaces to developing robust backend features, I enjoy
        solving problems and bringing ideas to life through code. Welcome to my
        portfolio — feel free to explore my work!
      </p>
    </div>
  );
}
