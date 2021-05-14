import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase';

import NavBar from './components/NavBar';
import Hero from './sections/Hero';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import About from './sections/About';
import News from './sections/News';
// import Section from './sections/Section';
// import Testomomials from './sections/Testomomials';

function App() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
    } else {
      firebase
        .auth()
        .signInAnonymously()
        .then((res) => console.log(res))
        .catch((error) => console.error(error));
    }
  });
  return (
    <Router>
      <NavBar />
      <Hero />
      <About />
      <News />
      {/* <Section /> */}
      {/* <Testomomials /> */}
      <Contact />

      <Footer />
    </Router>
  );
}

export default App;
