import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import BackgroundVideo from "../navbar/bedroom.mp4";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <div className="video-container">
        <video autoPlay loop muted className="background-video">
          <source src={BackgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Optional overlay content */}
        <div className="overlay-content">
          <h1>
            Welcome to <br />
            Dream Space Interior Designer
          </h1>
          <p>This is a sample text over the video.</p>
        </div>
      </div>
      <nav className="navbar">
        <h2 className="logo">Dream-Space-Interior</h2>

        {/* Desktop / Mobile menu */}
        <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
          <li>
            <Link to="/" onClick={() => setIsMobile(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsMobile(false)}>
              About
            </Link>
          </li>

          {/* Services Dropdown */}
          <li
            className="services"
            onClick={isMobile ? toggleDropdown : undefined}
            onMouseEnter={!isMobile ? () => setDropdownOpen(true) : undefined}
            onMouseLeave={!isMobile ? () => setDropdownOpen(false) : undefined}
          >
            Services
            <ul className={`dropdown ${dropdownOpen ? "show" : ""}`}>
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>SEO</li>
            </ul>
          </li>

          <li>
            <Link to="/contact" onClick={() => setIsMobile(false)}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Hamburger Menu */}
        <button
          className="mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? "✖" : "☰"}
        </button>
      </nav>
    </>
  );
};

export default Navbar;
