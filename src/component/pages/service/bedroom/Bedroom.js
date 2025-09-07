import React from "react";
import "./Bedroom.css";

const Bedroom = () => {
  return (
    <section className="bedroom-page">
      {/* Hero Section */}
      <div className="bedroom-hero">
        <h1>Modern Bedroom Designs</h1>
        <p>
          Experience comfort, elegance, and modern aesthetics with our exclusive
          bedroom designs crafted to suit your lifestyle.
        </p>
      </div>

      {/* Bedroom Content */}
      <div className="bedroom-container">
        {/* Left Content */}
        <div className="bedroom-text">
          <h2>Transform Your Bedroom</h2>
          <p>
            Your bedroom is more than just a place to sleep — it’s a personal
            retreat. At <b>Dream Space Interiors</b>, we design modern bedrooms
            with a balance of luxury, comfort, and functionality. From
            minimalistic to luxurious styles, our expert team customizes every
            detail to reflect your personality.
          </p>

          <ul>
            <li>✔ Customized wardrobes and smart storage</li>
            <li>✔ Elegant lighting concepts</li>
            <li>✔ Modern furniture arrangements</li>
            <li>✔ Soothing color palettes</li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="bedroom-image">
          <img
            src="https://via.placeholder.com/500x400"
            alt="Modern Bedroom Design"
          />
        </div>
      </div>

      {/* Gallery Section */}
      <div className="bedroom-gallery">
        <h2>Our Recent Bedroom Projects</h2>
        <div className="gallery-grid">
          <img src="https://via.placeholder.com/400x300" alt="Bedroom 1" />
          <img src="https://via.placeholder.com/400x300" alt="Bedroom 2" />
          <img src="https://via.placeholder.com/400x300" alt="Bedroom 3" />
          <img src="https://via.placeholder.com/400x300" alt="Bedroom 4" />
        </div>
      </div>
    </section>
  );
};

export default Bedroom;
