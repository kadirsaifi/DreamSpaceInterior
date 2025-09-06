import React, { useEffect, useState } from "react";
import BackgroundVideo from "../home/bedroom.mp4";
import "./Home.css";
import Footer from "../footer/Footer";

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
  const portfolioItems = [
    {
      id: 1,
      title: "Project One",
      image:
        "https://th.bing.com/th/id/R.53955f7478ad999934c4ee9271abc669?rik=5GKG2inWVB%2bIuA&pid=ImgRaw&r=0",
    },
    {
      id: 2,
      title: "Project Two",
      image:
        "https://th.bing.com/th/id/R.53955f7478ad999934c4ee9271abc669?rik=5GKG2inWVB%2bIuA&pid=ImgRaw&r=0",
    },
    {
      id: 3,
      title: "Project Three",
      image:
        "https://th.bing.com/th/id/R.53955f7478ad999934c4ee9271abc669?rik=5GKG2inWVB%2bIuA&pid=ImgRaw&r=0",
    },
    {
      id: 4,
      title: "Project Four",
      image:
        "https://th.bing.com/th/id/R.53955f7478ad999934c4ee9271abc669?rik=5GKG2inWVB%2bIuA&pid=ImgRaw&r=0",
    },
    {
      id: 5,
      title: "Project Five",
      image:
        "https://th.bing.com/th/id/R.53955f7478ad999934c4ee9271abc669?rik=5GKG2inWVB%2bIuA&pid=ImgRaw&r=0",
    },
    {
      id: 6,
      title: "Project Six",
      image:
        "https://th.bing.com/th/id/R.53955f7478ad999934c4ee9271abc669?rik=5GKG2inWVB%2bIuA&pid=ImgRaw&r=0",
    },
    {
      id: 7,
      title: "Project Seven",
      image:
        "https://th.bing.com/th/id/R.53955f7478ad999934c4ee9271abc669?rik=5GKG2inWVB%2bIuA&pid=ImgRaw&r=0",
    },
    {
      id: 8,
      title: "Project Eight",
      image:
        "https://th.bing.com/th/id/R.53955f7478ad999934c4ee9271abc669?rik=5GKG2inWVB%2bIuA&pid=ImgRaw&r=0",
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
            Dream Space Interior Designer
          </h1>
          <p>This is a sample text over the video.</p>
        </div>
      </div>
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
      <section className="portfolio">
        <h2 className="portfolio-title">My Portfolio</h2>
        <div className="portfolio-grid">
          {portfolioItems.map((item) => (
            <div className="portfolio-card" key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className="overlay">
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
