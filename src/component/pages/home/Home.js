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
        "https://th.bing.com/th/id/R.b115204c2cc97fb5cfc273ce1532c823?rik=G9DGtK1UbH2Xdw&riu=http%3a%2f%2fjonathanlepapillon.j.o.pic.centerblog.net%2fo%2fcf9c4719.jpg&ehk=lSuH5fpHB5zHrpPUDW3ZQ0wdawRaBlB%2fyE8zzMN%2fwfI%3d&risl=&pid=ImgRaw&r=0",
      link: "#",
    },
    {
      id: 2,
      title: "Luxury Bedroom",
      description: "Comfortable and elegant bedroom interiors.",
      image:
        "https://th.bing.com/th/id/R.b115204c2cc97fb5cfc273ce1532c823?rik=G9DGtK1UbH2Xdw&riu=http%3a%2f%2fjonathanlepapillon.j.o.pic.centerblog.net%2fo%2fcf9c4719.jpg&ehk=lSuH5fpHB5zHrpPUDW3ZQ0wdawRaBlB%2fyE8zzMN%2fwfI%3d&risl=&pid=ImgRaw&r=0",
      link: "#",
    },
    {
      id: 3,
      title: "Living Room",
      description: "Aesthetic and cozy living room setups.",
      image:
        "https://th.bing.com/th/id/R.b115204c2cc97fb5cfc273ce1532c823?rik=G9DGtK1UbH2Xdw&riu=http%3a%2f%2fjonathanlepapillon.j.o.pic.centerblog.net%2fo%2fcf9c4719.jpg&ehk=lSuH5fpHB5zHrpPUDW3ZQ0wdawRaBlB%2fyE8zzMN%2fwfI%3d&risl=&pid=ImgRaw&r=0",
      link: "#",
    },
    {
      id: 4,
      title: "Office Space",
      description: "Professional and creative office interiors.",
      image:
        "https://th.bing.com/th/id/R.b115204c2cc97fb5cfc273ce1532c823?rik=G9DGtK1UbH2Xdw&riu=http%3a%2f%2fjonathanlepapillon.j.o.pic.centerblog.net%2fo%2fcf9c4719.jpg&ehk=lSuH5fpHB5zHrpPUDW3ZQ0wdawRaBlB%2fyE8zzMN%2fwfI%3d&risl=&pid=ImgRaw&r=0",
      link: "#",
    },
    {
      id: 5,
      title: "Kids Room",
      description: "Playful and vibrant kids’ room interiors.",
      image:
        "https://th.bing.com/th/id/R.b115204c2cc97fb5cfc273ce1532c823?rik=G9DGtK1UbH2Xdw&riu=http%3a%2f%2fjonathanlepapillon.j.o.pic.centerblog.net%2fo%2fcf9c4719.jpg&ehk=lSuH5fpHB5zHrpPUDW3ZQ0wdawRaBlB%2fyE8zzMN%2fwfI%3d&risl=&pid=ImgRaw&r=0",
      link: "#",
    },
    {
      id: 6,
      title: "Dining Area",
      description: "Modern dining area with elegant designs.",
      image:
        "https://th.bing.com/th/id/R.b115204c2cc97fb5cfc273ce1532c823?rik=G9DGtK1UbH2Xdw&riu=http%3a%2f%2fjonathanlepapillon.j.o.pic.centerblog.net%2fo%2fcf9c4719.jpg&ehk=lSuH5fpHB5zHrpPUDW3ZQ0wdawRaBlB%2fyE8zzMN%2fwfI%3d&risl=&pid=ImgRaw&r=0",
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
