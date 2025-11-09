// components/Hero.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './hero.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "VINAYAK FACILITY & MANAGEMENT SERVICES",
      subtitle: "Your Trusted Partner in Comprehensive Business Solutions",
      highlight: "One Stop for All Your Business Needs",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      image: "💼"
    },
    {
      title: "Premium Manpower Solutions",
      subtitle: "Skilled Workforce for Every Industry Requirement",
      highlight: "5000+ Successful Placements",
      background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      image: "👥"
    },
    {
      title: "Complete Facility Management",
      subtitle: "From Housekeeping to Real Estate - We Handle It All",
      highlight: "24/7 Support Services",
      background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      image: "🏢"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section 
      className="hero" 
      style={{ background: slides[currentSlide].background }}
    >
      <div className="hero-particles" id="particles-js"></div>
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span>🏆 Trusted Since 2010</span>
          </div>
          <h1 className="hero-title">
            {slides[currentSlide].title}
          </h1>
          <p className="hero-subtitle">
            {slides[currentSlide].subtitle}
          </p>
          <div className="hero-highlight">
            <span>✨ {slides[currentSlide].highlight}</span>
          </div>
          <div className="hero-buttons">
            <Link to="/services" className="btn btn-primary">
              <span className="btn-icon">🚀</span>
              Explore Services
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              <span className="btn-icon">📞</span>
              Get Instant Quote
            </Link>
          </div>
          <div className="hero-features">
            <div className="feature-item">
              <span className="feature-icon">✅</span>
              <span>100% Reliable</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">⚡</span>
              <span>Quick Response</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">💰</span>
              <span>Best Price Guarantee</span>
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="floating-card manpower">
            <span className="card-icon">👥</span>
            <span>Manpower</span>
          </div>
          <div className="floating-card placement">
            <span className="card-icon">🎯</span>
            <span>Placement</span>
          </div>
          <div className="floating-card housekeeping">
            <span className="card-icon">🏠</span>
            <span>Housekeeping</span>
          </div>
          <div className="floating-card horticulture">
            <span className="card-icon">🌿</span>
            <span>Horticulture</span>
          </div>
          <div className="floating-card maintenance">
            <span className="card-icon">🔧</span>
            <span>Maintenance</span>
          </div>
          <div className="floating-card realestate">
            <span className="card-icon">🏘️</span>
            <span>Real Estate</span>
          </div>
        </div>

        <div className="slide-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;