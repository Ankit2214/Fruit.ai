// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Services</h1>
      <div className="services-container">
        <Link to="/chatbot" className="service-card">
          <h2>Chatbot</h2>
          <p>Ask me anything! Explore our chatbot service.</p>
        </Link>
        <Link to="/translator" className="service-card">
          <h2>Translator</h2>
          <p>Translate text into various regional languages.</p>
        </Link>
        <Link to="/faq" className="service-card">
          <h2>FAQ</h2>
          <p>Explore frequently asked questions about our service.</p>
        </Link>
        <Link to="/about" className="service-card">
          <h2>About Us</h2>
          <p>Learn more about us and our services.</p>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
