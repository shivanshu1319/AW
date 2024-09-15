import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Fruit.ai</h1>
      <p>Your personal health manager for fruit-related information.</p>
      <div className="services-container">
        <Link to="/chatbot" className="service-card">
          <div className="card-content">
            <h2>Chatbot</h2>
            <p className="main-text">Interact with our intelligent chatbot for fruit information.</p>
          </div>
        </Link>
        <Link to="/translator" className="service-card">
          <div className="card-content">
            <h2>Translator</h2>
            <p className="main-text">Translate fruit-related information into multiple languages.</p>
          </div>
        </Link>
        <Link to="/faq" className="service-card">
          <div className="card-content">
            <h2>FAQ</h2>
            <p className="main-text">Find answers to frequently asked questions about fruits.</p>
          </div>
        </Link>
        <Link to="/about" className="service-card">
          <div className="card-content">
            <h2>About</h2>
            <p className="main-text">Learn more about Fruit.ai and our mission.</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
