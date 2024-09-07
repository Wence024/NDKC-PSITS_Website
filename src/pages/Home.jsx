import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Our Club</h1>
        <p className="hero-subtitle">
          Empowering the next generation of IT professionals
        </p>
        <div className="hero-buttons">
          <Link to="/about">About</Link>
        </div>
      </div>
      <div className="hero-image-placeholder"></div>
    </div>
  );
}

export default Home;
