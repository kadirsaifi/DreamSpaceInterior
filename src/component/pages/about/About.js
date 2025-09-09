import React from "react";
import "./About.css";
import img from "../images/1.webp";
import Footer from "../footer/Footer";
import imgs from "../images/4.jpg";

const About = () => {
  return (
    <>
      <section className="about-page">
        <div className="about-hero">
          <img src={img} alt="About Us" className="about-hero-image" />
          <div className="about-hero-text">
            <h1>About Dream Space Interiors</h1>
            <p>Designing spaces that inspire comfort, elegance, and style.</p>
          </div>
        </div>

        {/* Story Section */}
        <div className="about-container">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              At <strong>Dream Space Interior</strong>, we believe every space
              tells a story. With a blend of creativity, innovation, and
              functionality, we transform houses into dream homes and offices
              into inspiring workspaces. Over the years, we’ve completed more
              than 100 projects for satisfied clients across the UAE.
            </p>
          </div>
        </div>
        <img src={imgs} alt="About Us" className="about-hero-image" />
        {/* Mission & Vision */}
        <div className="mission-vision">
          <div className="mv-card">
            <h3>Our Mission</h3>
            <p>
              To deliver high-quality, functional, and aesthetic designs that
              enhance lifestyles and business environments.
            </p>
          </div>
          <div className="mv-card">
            <h3>Our Vision</h3>
            <p>
              To be recognized as a leading interior design company, creating
              spaces that combine elegance with practicality.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="why-us">
          <h2>Why Choose Us?</h2>
          <div className="why-grid">
            <div className="why-card">🏗️ 100+ Projects Completed</div>
            <div className="why-card">😊 80+ Happy Clients</div>
            <div className="why-card">🎨 Unique & Creative Designs</div>
            <div className="why-card">⏱️ On-Time Handover</div>
          </div>
        </div>

        {/* CTA */}
        <div className="about-cta">
          <h2>Let’s Create Your Dream Space Together</h2>
          <a href="/contact" className="cta-btn">
            Contact Us
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
