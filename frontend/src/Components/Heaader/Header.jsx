import React from 'react';
import './Header.css'; // Assuming you have a CSS file for styling
//import logo from '../assets/logo.png'; // Assuming the logo is in src/assets/

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo">
          <img src={logo} alt="MindBridge Logo" className="logo-img" />
          <span className="logo-text">MIND BRIDGE</span>
        </div>

        {/* Navigation Links */}
        <nav className="nav-links">
          <a href="/" className="nav-link">Home</a>
          <a href="/community" className="nav-link">Community</a>
          <a href="/about" className="nav-link">About</a>
        </nav>

        {/* Wanna Talk Button */}
        <button className="talk-button">WANNA TALK!</button>
      </div>
    </header>
  );
};

export default Header;