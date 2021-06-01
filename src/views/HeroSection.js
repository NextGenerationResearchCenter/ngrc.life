import Hero from '../sections/Hero';
import Contact from '../sections/Contact';
import About from '../sections/About';
import News from '../sections/News';

export default function HeroSection() {
  return (
    <div>
      <Hero />
      <About />
      <News />
      {/* <Section /> */}
      {/* <Testomomials /> */}
      <Contact />
    </div>
  );
}
