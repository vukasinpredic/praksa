import React from 'react';
import './NAvbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#prikaz" className="nav-link">Prikaz</a>
      <a href="#todo" className="nav-link">Todo</a>
      <a href="#calculator" className="nav-link">Calculator</a>
    </nav>
  );
};

export default Navbar;
