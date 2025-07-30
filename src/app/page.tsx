import AboutMe from '@/components/about-me-section/AboutMe';
import Footer from '@/components/footer-section/Footer';
import HeroSection from '@/components/hero-section/HeroSection';
import ProjectSection from '@/components/project-section/ProjectSection';

export default function Home() {
  return (
    <div className='max-w-screen-xl mx-auto px-6 py-6'>
      <HeroSection />
      <AboutMe />
      <ProjectSection />
      <Footer />
    </div>
  );
}
