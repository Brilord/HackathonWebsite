import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Optional: Create this file for custom styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link> {/* Add link to the Contact page */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

