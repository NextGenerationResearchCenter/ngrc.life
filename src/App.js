import { BrowserRouter as Router } from 'react-router-dom';

import NavBar from './components/NavBar';
import Hero from './sections/Hero';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import Section from './sections/Section';
import Vision from './sections/Vision';
// import CtaNews from './sections/CtaNews';
import Test from './sections/Test';

function App() {
  return (
    <Router>
      <NavBar />
      <Hero />
      <Test />
      {/* <CtaNews /> */}
      <Vision />
      <Contact />
      <Section />
      <Footer />
    </Router>
  );
}

export default App;
