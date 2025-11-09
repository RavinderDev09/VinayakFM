import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './hero.css';

const Hero = () => {
  const [currentService, setCurrentService] = useState(0);
  
  const services = [
    {
      name: "Manpower Supply",
      icon: "👥",
      stats: "5000+ Workers",
      color: "#667eea"
    },
    {
      name: "Placement Services", 
      icon: "🎯",
      stats: "95% Success Rate",
      color: "#f093fb"
    },
    {
      name: "Housekeeping",
      icon: "🏠", 
      stats: "24/7 Support",
      color: "#4facfe"
    },
    {
      name: "Horticulture",
      icon: "🌿",
      stats: "100+ Projects", 
      color: "#43e97b"
    },
    {
      name: "Building Maintenance",
      icon: "🔧",
      stats: "50+ Buildings",
      color: "#ff9a9e"
    },
    {
      name: "Real Estate", 
      icon: "🏘️",
      stats: "₹50Cr+ Portfolio",
      color: "#a8edea"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <section className="hero">
      {/* Animated Background */}
      <div className="hero-bg">
        <div className="gradient-bg"></div>
        <div className="floating-elements">
          <div className="element el-1"></div>
          <div className="element el-2"></div>
          <div className="element el-3"></div>
          <div className="element el-4"></div>
        </div>
      </div>

      <div className="container">
        <div className="hero-grid">
          {/* Left Content */}
          <div className="hero-content">
            <div className="content-wrapper">
              {/* Badge */}
              <div className="premium-badge">
                <span className="badge-dot"></span>
                <span>Industry Leader Since 2010</span>
              </div>

              {/* Main Heading */}
              <h1 className="main-heading">
                <span className="heading-line">Premium</span>
                <span className="heading-line accent">Facility Solutions</span>
                <span className="heading-line">For Your Business</span>
              </h1>

              {/* Description */}
              <p className="hero-description">
                Complete facility management and manpower solutions trusted by 
                <strong> 500+ businesses</strong> across India. From staffing to real estate, 
                we provide end-to-end services with unmatched reliability.
              </p>

              {/* Animated Service Showcase */}
              <div className="service-showcase">
                <div className="service-display">
                  <div 
                    className="service-icon-large"
                    style={{ backgroundColor: services[currentService].color }}
                  >
                    {services[currentService].icon}
                  </div>
                  <div className="service-info">
                    <h3>{services[currentService].name}</h3>
                    <p>{services[currentService].stats}</p>
                  </div>
                </div>
                <div className="service-dots">
                  {services.map((_, index) => (
                    <button
                      key={index}
                      className={`dot ${index === currentService ? 'active' : ''}`}
                      onClick={() => setCurrentService(index)}
                      style={{ '--dot-color': services[index].color }}
                    />
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="cta-section">
                <Link to="/services" className="cta-btn primary">
                  <span className="btn-content">
                    <span className="btn-icon">⚡</span>
                    Explore Our Services
                  </span>
                  <div className="btn-shine"></div>
                </Link>
                <Link to="/contact" className="cta-btn secondary">
                  <span className="btn-content">
                    <span className="btn-icon">💬</span>
                    Get Free Consultation
                  </span>
                </Link>
              </div>

              {/* Stats */}
              <div className="stats-preview">
                <div className="stat">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Happy Clients</div>
                </div>
                <div className="stat">
                  <div className="stat-number">10+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">Support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hero-visual">
            <div className="visual-container">
              {/* Main Service Card */}
              <div className="main-service-card">
                <div className="card-glow" style={{ background: services[currentService].color }}></div>
                <div className="card-content">
                  <div className="card-icon" style={{ color: services[currentService].color }}>
                    {services[currentService].icon}
                  </div>
                  <h4>{services[currentService].name}</h4>
                  <p>{services[currentService].stats}</p>
                </div>
              </div>

              {/* Floating Service Items */}
              <div className="floating-services">
                {services.map((service, index) => (
                  <div 
                    key={index}
                    className={`service-item ${index === currentService ? 'active' : ''}`}
                    style={{ 
                      '--service-color': service.color,
                      '--delay': `${index * 0.5}s`
                    }}
                    onClick={() => setCurrentService(index)}
                  >
                    <div className="item-icon" style={{ background: service.color }}>
                      {service.icon}
                    </div>
                    <span>{service.name}</span>
                  </div>
                ))}
              </div>

              {/* Decorative Elements */}
              <div className="decorative-circles">
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
                <div className="circle circle-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="modern-scroll-indicator">
        <div className="scroll-line">
          <div className="scroll-progress"></div>
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;