import React from 'react';
import './Navbar.css'; // Create a separate CSS file for better styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#home">Real Estate Co</a> {/* Replace this with an actual logo if needed */}
      </div>
      <div className="navbar-links">
        <a href="#home">Home</a>
        <a href="#listings">Listings</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
