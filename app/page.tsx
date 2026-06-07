import Hero from './components/Hero';
import WhyFiiFit from './components/WhyFiiFit';
import FounderStory from './components/FounderStory';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FreeTrial from './components/FreeTrial';

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <WhyFiiFit />
      <FounderStory />
      <Testimonials />
      <FreeTrial />
      <Pricing />
    </main>
  );
}
