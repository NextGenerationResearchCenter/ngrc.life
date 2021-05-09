import { BrowserRouter as Router } from 'react-router-dom';

import NavBar from './components/NavBar';
import Hero from './sections/Hero';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import AboutNews from './sections/AboutNews';
// import Section from './sections/Section';
// import Testomomials from './sections/Testomomials';

function App() {
  return (
    <Router>
      <NavBar />
      <Hero />
      <AboutNews />
      {/* <Section /> */}
      {/* <Testomomials /> */}
      <Contact />

      <Footer />
    </Router>
  );
}

export default App;
