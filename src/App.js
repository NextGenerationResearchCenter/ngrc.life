import { BrowserRouter as Router } from 'react-router-dom';

import NavBar from './components/NavBar';
import Hero from './sections/Hero';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import Test from './sections/Test';
// import Section from './sections/Section';
// import Testomomials from './sections/Testomomials';

function App() {
  return (
    <Router>
      <NavBar />
      <Hero />
      <Test />
      {/* <Section /> */}
      {/* <Testomomials /> */}
      <Contact />

      <Footer />
    </Router>
  );
}

export default App;
