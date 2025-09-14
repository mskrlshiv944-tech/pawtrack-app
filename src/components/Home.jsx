import React from 'react';
import './Home.css';
import { FaMapMarkerAlt, FaSyringe, FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      {/* Background Blobs */}
      <div className="background-blob blob1"></div>
      <div className="background-blob blob2"></div>

      <header className="hero-section">
        <div className="hero-content">
          <h1 className="main-heading">Safeguard Streets, Welfare for Paws</h1>
          <p>Empowering communities with cutting-edge tech to protect strays and ensure safety.</p>
          <Link to="/map" className="explore-btn">Explore Map</Link>
        </div>
      </header>

      <main className="features-section">
        <h2 className="section-heading">Our Features</h2>
        <div className="features-grid">
          
          {/* Card 1: Feeding Points */}
          <Link to="/map" state={{ filter: 'feeding_point' }} className="feature-card">
            <div 
              className="card-background" 
              style={{ backgroundImage: `url(https://images.pexels.com/photos/4588035/pexels-photo-4588035.jpeg)` }}
            ></div>
            <div className="card-overlay"></div>
            <div className="card-content">
              <FaMapMarkerAlt className="feature-icon" />
              <span>Feeding Points</span>
            </div>
          </Link>

          {/* Card 2: Vaccination Status */}
          <Link to="/map" state={{ filter: 'dog_location' }} className="feature-card">
            <div 
              className="card-background" 
              style={{ backgroundImage: `url(https://images.pexels.com/photos/6235116/pexels-photo-6235116.jpeg)` }}
            ></div>
            <div className="card-overlay"></div>
            <div className="card-content">
              <FaSyringe className="feature-icon" />
              <span>Vaccination Status</span>
            </div>
          </Link>
          
          {/* Card 3: Report Dog */}
          <Link to="/report" className="feature-card">
            <div 
              className="card-background" 
              style={{ backgroundImage: `url(https://images.pexels.com/photos/179221/pexels-photo-179221.jpeg)` }}
            ></div>
            <div className="card-overlay"></div>
            <div className="card-content">
              <FaExclamationTriangle className="feature-icon" />
              <span>Report Aggressive Dog</span>
            </div>
          </Link>

        </div>
      </main>

      <footer className="footer">
        <p>❤️ Built with Love for Dog Welfare | © 2025 PawTrack</p>
      </footer>
    </div>
  );
};

export default Home;