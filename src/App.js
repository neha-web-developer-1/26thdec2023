import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Link } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

//navigation
function App() {
  return (
    <div classNameName="App">
      <Router>
      <header>
      <div classNameName='container'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to='/' className='nav-link'>Home</Link>
        </li>
        <li className="nav-item">
          <Link  to="/about" className="nav-link">About Us</Link>  {/* In link par component load karna hai*/}
        </li>
        <li className="nav-item">
          <Link to='/services' className="nav-link">Services</Link>
        </li>
        <li className="nav-item">
          <Link to ="/contact" className="nav-link">Contact Us</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

      </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      </Router>
    </div>
    
  );
}
/* react-router   npm install  i react-router-dom@latest*/


export default App;
