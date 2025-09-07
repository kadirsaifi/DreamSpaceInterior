import React from "react";
import "./Kitchen.css";

const Kitchen = () => {
  return (
    <section className="kitchen-page">
      {/* Hero Section */}
      <div className="kitchen-hero">
        <h1>Modern Modular Kitchen Designs</h1>
        <p>
          Stylish, functional, and innovative modular kitchens tailored for
          modern living.
        </p>
      </div>

      {/* About Section */}
      <div className="kitchen-container">
        {/* Left Image */}
        <div className="kitchen-image">
          <img
            src="https://via.placeholder.com/500x400"
            alt="Modular Kitchen"
          />
        </div>

        {/* Right Content */}
        <div className="kitchen-text">
          <h2>Why Choose Our Modular Kitchens?</h2>
          <p>
            A kitchen is the heart of every home. At{" "}
            <b>Dream Space Interiors</b>, we specialize in designing modern
            modular kitchens that maximize space, enhance functionality, and
            reflect elegance. From smart storage to premium finishes, we bring
            innovation and style to your kitchen space.
          </p>

          <ul>
            <li>✔ Ergonomic designs for easy workflow</li>
            <li>✔ Premium finishes and materials</li>
            <li>✔ Smart storage solutions</li>
            <li>✔ Custom layouts: L-shape, U-shape, Island & more</li>
          </ul>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="kitchen-gallery">
        <h2>Our Recent Kitchen Projects</h2>
        <div className="gallery-grid">
          <img src="https://via.placeholder.com/400x300" alt="Kitchen 1" />
          <img src="https://via.placeholder.com/400x300" alt="Kitchen 2" />
          <img src="https://via.placeholder.com/400x300" alt="Kitchen 3" />
          <img src="https://via.placeholder.com/400x300" alt="Kitchen 4" />
        </div>
      </div>
    </section>
  );
};

export default Kitchen;
