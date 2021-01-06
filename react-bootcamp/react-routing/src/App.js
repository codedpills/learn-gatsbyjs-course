import {BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact'
import About from './components/About'
import Services from './components/Services'
import ServiceDetails from './components/ServiceDetails';

function App() {
  return (
    <Router>
      <div>
        <NavLink to="/">Home</NavLink>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
      <Route exact path="/services" component={Services} />
      <Route path="/services/:name" component={ServiceDetails} />
      <Route exact path="/" component={Home} />
    </Router>
  );
}

export default App;
