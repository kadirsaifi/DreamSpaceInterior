import React from "react";
import "./Bedroom.css";
import Footer from "../../footer/Footer";

const Bedroom = () => {
  return (
    <>
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
            src="https://centuryply.com/blogimage/bedroom_1.png"
            alt="Modern Bedroom Design"
          />
        </div>
      </div>

      {/* Gallery Section */}
      <div className="bedroom-gallery">
        <h2>Our Recent Bedroom Projects</h2>
        <div className="gallery-grid">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS48NTEINIEDVDbk7mDIrV-iCfILQWtjG1-Bg&s" alt="Bedroom 1" />
          <img src="https://www.craftedbeds.co.uk/cdn/shop/articles/c6229643564835.57f4204983b16.jpg?v=1654414798" alt="Bedroom 2" />
          <img src="https://assets-news.housing.com/news/wp-content/uploads/2022/11/25102931/image7-64.png" alt="Bedroom 3" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnt1QrpuJ8x0ZVch9GVRkVyZLdhuvjFsEWLQ&s" alt="Bedroom 4" />
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Bedroom;
