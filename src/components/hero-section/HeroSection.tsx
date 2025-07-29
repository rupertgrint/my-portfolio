import HeroCard from './HeroCard';
import HeroHeader from './HeroHeader';

export default function HeroSection() {
  return (
    <div className='px-4'>
      <HeroHeader />
      <HeroCard />
    </div>
  );
}
