import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar = () => {
  return (
    <nav className="navigation-bar">
      <div className="logo">Acadamic HUB</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Resources</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/login">Login</Link></li>
        {/* Add more navigation links here */}
      </ul>
    </nav>
  );
};

export default NavigationBar;
