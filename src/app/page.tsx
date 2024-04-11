import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import { LeftHero } from '../components/Hero/Left';
import { RightHero } from '../components/Hero/Right';
import { Navbar } from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero>
        <LeftHero />
        <RightHero />
      </Hero>
      <Footer />
    </div>
  );
}
