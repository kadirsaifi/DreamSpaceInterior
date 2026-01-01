import React from "react";
import "./LivingRoom.css";
import Footer from "../../footer/Footer";

const LivingRoom = () => {
  return (
    <>
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
            src="https://www.customfurnish.com/blogs/wp-content/uploads/2025/05/Living_-3-3.webp"
            alt="Living Room Design"
          />
        </div>
      </div>

      {/* Gallery Section */}
      <div className="livingroom-gallery">
        <h2>Our Recent Living Room Projects</h2>
        <div className="gallery-grid">
          <img src="https://cdn.decorilla.com/images/2400/6439f248-5392-43fa-ab41-68619d334d47/Our-Real-Living-RoombrDesign-Makeovers.jpg?cv=1" alt="Living Room 1" />
          <img src="https://images.prismic.io/luxdeco-dev/MDE5YThjMjktNTU3OS00ZmZhLTk1ODAtMzI3YTE2ZDQ3ZGE0_how_to_decorate_a_large_living_room_-_large_lounge_room_decorating_ideas_-_luxdeco.com_3.jpg?auto=compress,format&w=1200&q=100" alt="Living Room 2" />
          <img src="https://cdn.shopify.com/s/files/1/0558/6413/1764/files/BlogThumbnail_Living_Room_Interior_Design_1024x1024.webp?v=1730203967" alt="Living Room 3" />
          <img src="https://cdn.home-designing.com/wp-content/uploads/2023/08/ribbed-living-room-rug-1024x512.jpg" alt="Living Room 4" />
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default LivingRoom;
