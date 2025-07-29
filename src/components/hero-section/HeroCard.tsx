import GreetingCard from './GreetingCard';
import TechStackCard from './TechStackCard';
import IconNav from './IconNav';

export default function HeroCard() {
  return (
    <div className='flex flex-col md:flex-row items-center align-center min-h-screen gap-10'>
      <div className='md:basis-3/5 flex flex-col gap-6'>
        <GreetingCard />
        <IconNav />
      </div>
      <div className='md:basis-2/5'>
        <TechStackCard />
      </div>
    </div>
  );
}
