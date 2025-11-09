// components/LoadingSpinner.js
import React from 'react';
import "./loading.css";

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <div className="spinner-container">
        {/* Animated Logo */}
        <div className="logo-animation">
          <div className="logo-circle">
            <span className="logo-icon">🏢</span>
          </div>
          <div className="logo-text">
            <h2>VINAYAK FACILITY</h2>
            <p>Management Services</p>
          </div>
        </div>

        {/* Main Spinner */}
        <div className="spinner-wrapper">
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="spinner-center"></div>
        </div>

        {/* Loading Text with Animation */}
        <div className="loading-text">
          <span className="loading-dots">
            <span>L</span>
            <span>o</span>
            <span>a</span>
            <span>d</span>
            <span>i</span>
            <span>n</span>
            <span>g</span>
            <span className="dot">.</span>
            <span className="dot">.</span>
            <span className="dot">.</span>
          </span>
        </div>

        {/* Service Icons Floating Around */}
        <div className="floating-services">
          <div className="service-bubble" style={{ '--delay': '0s' }}>
            <span>👥</span>
          </div>
          <div className="service-bubble" style={{ '--delay': '0.5s' }}>
            <span>🎯</span>
          </div>
          <div className="service-bubble" style={{ '--delay': '1s' }}>
            <span>🏠</span>
          </div>
          <div className="service-bubble" style={{ '--delay': '1.5s' }}>
            <span>🌿</span>
          </div>
          <div className="service-bubble" style={{ '--delay': '2s' }}>
            <span>🔧</span>
          </div>
          <div className="service-bubble" style={{ '--delay': '2.5s' }}>
            <span>🏘️</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="progress-container">
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
          <div className="progress-text">Initializing Services...</div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;