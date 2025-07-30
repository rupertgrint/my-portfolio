import GreetingCard from './GreetingCard';
import TechStackCard from './TechStackCard';
import IconNav from './IconNav';

export default function HeroCard() {
  return (
    <div className='flex flex-col md:flex-row md:justify-center items-center align-center min-h-screen gap-4 md:gap-10 px-10 py-2'>
      <div className='md:basis-3/5 flex flex-col gap-4 md:gap-6 items-center md:items-start'>
        <GreetingCard />
        <IconNav />
      </div>
      <div className='md:basis-2/5 md:pl-6 lg:pl-10'>
        <TechStackCard />
      </div>
    </div>
  );
}
