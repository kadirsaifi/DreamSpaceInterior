import React from "react";
import "./Kitchen.css";
import Footer from "../../footer/Footer";

const Kitchen = () => {
  return (
    <>
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
            src="https://www.decorilla.com/online-decorating/wp-content/uploads/2016/02/Online-interior-designer-kitchen.jpg"
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
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYaFqDpN1JoTaOE9Cpq7Pk9UJYSZTvIX_WzA&s" alt="Kitchen 1" />
          <img src="https://media.designcafe.com/wp-content/uploads/2021/09/27162134/kitchen-cabinet-dimensions.jpg" alt="Kitchen 2" />
          <img src="https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/1-2025-1736068988-NDPD1/jfm-1736069001-9OxTK/kitchen-1736069015-B2aEs/kit-01-1741331976-clHbr.png" alt="Kitchen 3" />
          <img src="https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/amj-2023-1678081565-AJpiy/kitchen-1678169970-j7P48/d-inki-amj2023-141-1678369598-tAMlJ/15-6-1678369604-NiorN.jpg" alt="Kitchen 4" />
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Kitchen;
