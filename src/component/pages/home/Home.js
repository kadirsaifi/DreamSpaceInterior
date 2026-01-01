import React, { useEffect, useState } from "react";
import BackgroundVideo from "../home/bedroom.mp4";
import "./Home.css";
import Footer from "../footer/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Home() {
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    handovers: 0,
  });

  useEffect(() => {
    let projects = 0;
    let clients = 0;
    let handovers = 0;

    const interval = setInterval(() => {
      if (projects < 120) {
        projects += 2;
      }
      if (clients < 80) {
        clients += 1;
      }
      if (handovers < 95) {
        handovers += 1;
      }
      setCounts({ projects, clients, handovers });

      if (projects >= 120 && clients >= 80 && handovers >= 95) {
        clearInterval(interval);
      }
    }, 40);
    return () => clearInterval(interval);
  }, []);
  const cardsData = [
    {
      id: 1,
      title: "Modern Kitchen",
      description: "Stylish modular kitchen designs for your dream home.",
      image:
        "https://www.decorilla.com/online-decorating/wp-content/uploads/2016/02/Online-interior-designer-kitchen.jpg",
      link: "#",
    },
    {
      id: 2,
      title: "Luxury Bedroom",
      description: "Comfortable and elegant bedroom interiors.",
      image:
        "https://evolveartisanal.com/wp-content/uploads/2021/07/1_The-Wooden-Rhapsody-Modern-Bedroom-Interior-Design.jpg",
      link: "#",
    },
    {
      id: 3,
      title: "Living Room",
      description: "Aesthetic and cozy living room setups.",
      image:
        "https://cdn-bnokp.nitrocdn.com/QNoeDwCprhACHQcnEmHgXDhDpbEOlRHH/assets/images/optimized/rev-14b648d/www.decorilla.com/online-decorating/wp-content/uploads/2024/07/Expert-decorating-for-a-small-living-room-by-Decorilla-2048x1365.jpg",
      link: "#",
    },
    {
      id: 4,
      title: "Office Space",
      description: "Professional and creative office interiors.",
      image:
        "https://riverislandinterior.ae/wp-content/uploads/2024/02/Best-Interior-Design-For-offices-in-dubai-1.webp",
      link: "#",
    },
    {
      id: 5,
      title: "Kids Room",
      description: "Playful and vibrant kids’ room interiors.",
      image:
        "https://res.cloudinary.com/dw4e01qx8/f_auto,q_auto/images/nogffazg4dloy8gkpqyr",
      link: "#",
    },
    {
      id: 6,
      title: "Dining Area",
      description: "Modern dining area with elegant designs.",
      image:
        "https://www.luxxu.net/blog/wp-content/uploads/2022/05/dining-room-interior-design-in-neo-classical-style.jpg",
      link: "#",
    },
  ];
  const features = [
    {
      id: 1,
      icon: "fa-solid fa-house-chimney",
      title: "2 Homes Delivered Every Month*",
      description:
        "Experience the joy of two new homes delivered every month with our expert interior designs. Elevate your living spaces with Inaaya Interior.",
    },
    {
      id: 2,
      icon: "fa-solid fa-face-smile",
      title: "100+ Happy Hand Over",
      description:
        "Discover 100+ Happy Hand Over* at Inaaya Interior. Elevate your space with our curated collection of joyous handcrafted creations.",
    },
    {
      id: 3,
      icon: "fa-solid fa-wallet",
      title: "Budget Friendly Cost",
      description:
        "Budget-friendly costs for your interior needs at Inaaya Interior. Quality meets affordability for your perfect space.",
    },
    {
      id: 4,
      icon: "fa-solid fa-headset",
      title: "24/7 Support",
      description:
        "Get round-the-clock support for all your interior design needs at Inaaya Interior. Expert help whenever you need it, 24/7.",
    },
  ];
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
            Dream Space Interior
          </h1>
          <p>This is a sample text over the video.</p>
        </div>
      </div>
      <section className="coming-soon">
        <div className="coming-soon-content">
          <span className="highlight-bar"></span>
          <h2>
            Recent<span className="city">Works</span>
          </h2>
        </div>
      </section>
      <div className="cards-container">
        {cardsData.map((card) => (
          <div className="card" key={card.id}>
            <img src={card.image} alt={card.title} className="card-img" />
            <div className="card-content">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <a href={card.link} className="btn">
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
      <section className="features-section">
        <h2 className="features-title">Why Choose Interior?</h2>
        <div className="features-container">
          {features.map((feature) => (
            <div className="feature-card" key={feature.id}>
              <i className={`feature-icon ${feature.icon}`}></i>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-card">
            <h2>{counts.projects}+</h2>
            <p>Projects Completed</p>
          </div>
          <div className="stat-card">
            <h2>{counts.clients}+</h2>
            <p>Happy Clients</p>
          </div>
          <div className="stat-card">
            <h2>{counts.handovers}+</h2>
            <p>Successful Handovers</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
