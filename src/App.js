import { BrowserRouter as Router } from 'react-router-dom';

import NavBar from './components/NavBar';
import Hero from './sections/Hero';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <NavBar />
      <Hero />
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
