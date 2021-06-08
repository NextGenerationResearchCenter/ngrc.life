import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import firebase from 'firebase';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HeroSection from './views/HeroSection';
import ResearchCenter from './views/ResearchCenter';
import smoothscroll from 'smoothscroll-polyfill';

function App() {
  smoothscroll.polyfill();
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
      <Switch>
        <Route path='/' exact component={HeroSection} />
        <Route path='/research-center' component={ResearchCenter} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
