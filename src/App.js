import { BrowserRouter as Router } from 'react-router-dom';

import NavBar from './components/NavBar';
import Hero from './sections/Hero';

function App() {
  return (
    <Router>
      <NavBar />
      <Hero />
    </Router>
  );
}

export default App;
