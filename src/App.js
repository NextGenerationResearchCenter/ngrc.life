import { BrowserRouter as Router } from 'react-router-dom';

import NavBar from './components/NavBar';
import Hero from './sections/Hero';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import Section from './sections/Section';
import Vision from './sections/Vision';
// import CtaNews from './sections/CtaNews';
import Test from './sections/Test';
import Separator from './sections/Separator1';

function App() {
  return (
    <Router>
      <NavBar />
      <Hero />
      <Test />
      {/* <Section /> */}
      {/* <Separator /> */}
      {/* <CtaNews /> */}
      {/* <Vision /> */}
      <Contact />

      <Footer />
    </Router>
  );
}

export default App;
