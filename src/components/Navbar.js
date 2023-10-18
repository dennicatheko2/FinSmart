// src/components/Navbar.js
import React from 'react';
import './styles.css'; 
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/records" className="nav-link">Records</Link></li>
        <li><Link to="/records" className="nav-link">Templates</Link></li>
        {/* Add more navigation items for other sections of your app */}
      </ul>
    </nav>
  );
};

export default Navbar;
