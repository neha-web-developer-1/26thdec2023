import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Link } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Add from './pages/Add'; // only for demo

import FetchData from './Apidata/FetchData';
import Users from './Apidata/Users';
import FetchData2 from './ApiUser_Detail/FetchData2';
import Users2 from './ApiUser_Detail/Users2';



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
        <li className='nav-item'>
        <div className="dropdown">
  <Link to={"/#"} className='nav-link'>Dropdown menu</Link>
  <div className='dropdown-x-menu'>      {/* css style app.css me di gyi hai*/}
    <Link to ={"/"} className='nav-link'>Home</Link>
    <Link to ={"/about"} className='nav-link'>About Us</Link>
    <Link to ={"/services"} className='nav-link'>Services</Link>
    

  </div>
</div>

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
        {/* for dynamic rout/url : <Route path="/about:page" element={<About />}></Route>*/}
        <Route path="/services" element={<Services />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      </Router>
      {/* <Add /> only for demo */}
{/* <FetchData />
    <Users /> */}
    <FetchData2 />
    <Users2 />
    </div>











    
    
  );
}
/* react-router   npm install  i react-router-dom@latest*/


export default App;
