import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo / About */}
        <div className="footer-about">
          <h2>Dream Space Interior</h2>
          <p>
            Crafting unique and stylish spaces that reflect your personality.
            Turning ideas into inspiring designs.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/portfolio">Portfolio</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: Dreamspaceinteriordesigner9@gmail.com</p>
          <p>Phone: +91 8923654224, +91 9917101834</p>
          <p>Location: Delhi,Uttrakhand</p>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/dreamspaceinteriordesigner?igsh=MTA0ajV6OWRmemR1cw== ">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Abdul Kadir. All Rights Reserved.</p>
      </div>
      <a href="/" className="back-to-top">
        <i className="fa-solid fa-arrow-up"></i>
      </a>
    </footer>
  );
}

export default Footer;
