import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
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
            <i className="fa-solid fa-caret-down"></i> Services
            <ul className={`dropdown ${dropdownOpen ? "show" : ""}`}>
              <li>
                <Link
                  style={{ color: "black" }}
                  to="/kitchen"
                  onClick={() => setIsMobile(false)}
                >
                  Moduler Kitchen
                </Link>
              </li>
              <li>
                <Link to="/livingroom" onClick={() => setIsMobile(false)}>
                  living Room
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/bedroom" onClick={() => setIsMobile(false)}>
                  Bedroom
                </Link>
              </li>
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
