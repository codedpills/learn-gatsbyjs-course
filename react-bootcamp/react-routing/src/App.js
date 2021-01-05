import {BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact'
import About from './components/About'
import Services from './components/Services'

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
      <Route path="/services" component={Services} />
      <Route exact path="/" component={Home} />
    </Router>
  );
}

export default App;
