import React from 'react';
import './Navbar.css'; // Yeh line zaroori hai
import { FaPaw } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <FaPaw className="logo-icon" />
        <span>PawTrack</span>
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/map" className="nav-link">Map</Link>
        <Link to="/report" className="nav-link">Report</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;