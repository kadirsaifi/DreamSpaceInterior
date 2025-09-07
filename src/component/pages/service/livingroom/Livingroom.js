import React from "react";
import "./LivingRoom.css";

const LivingRoom = () => {
  return (
    <section className="livingroom-page">
      {/* Hero Section */}
      <div className="livingroom-hero">
        <h1>Elegant Living Room Designs</h1>
        <p>
          Create a warm, stylish, and inviting space with our modern living room
          interior solutions.
        </p>
      </div>

      {/* About Section */}
      <div className="livingroom-container">
        {/* Left Content */}
        <div className="livingroom-text">
          <h2>Transform Your Living Space</h2>
          <p>
            The living room is where life happens — a place for relaxation,
            conversations, and cherished moments with family and friends. At{" "}
            <b>Dream Space Interiors</b>, we design living rooms that balance
            aesthetics, comfort, and functionality, giving your home a timeless
            elegance.
          </p>

          <ul>
            <li>✔ Modern & contemporary layouts</li>
            <li>✔ Customized furniture arrangements</li>
            <li>✔ Accent walls & statement lighting</li>
            <li>✔ Smart space utilization</li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="livingroom-image">
          <img
            src="https://via.placeholder.com/500x400"
            alt="Living Room Design"
          />
        </div>
      </div>

      {/* Gallery Section */}
      <div className="livingroom-gallery">
        <h2>Our Recent Living Room Projects</h2>
        <div className="gallery-grid">
          <img src="https://via.placeholder.com/400x300" alt="Living Room 1" />
          <img src="https://via.placeholder.com/400x300" alt="Living Room 2" />
          <img src="https://via.placeholder.com/400x300" alt="Living Room 3" />
          <img src="https://via.placeholder.com/400x300" alt="Living Room 4" />
        </div>
      </div>
    </section>
  );
};

export default LivingRoom;
