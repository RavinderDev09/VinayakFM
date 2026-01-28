// components/About/About.js
import React, { useState, useEffect, useRef } from 'react';
import './about.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [counters, setCounters] = useState({
    clients: 0,
    placements: 0,
    properties: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Start counters when section becomes visible
          startCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const startCounters = () => {
    const targetValues = { clients: 500, placements: 1000, properties: 50 };
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepValues = {
      clients: targetValues.clients / steps,
      placements: targetValues.placements / steps,
      properties: targetValues.properties / steps
    };

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setCounters({
        clients: Math.min(Math.floor(stepValues.clients * currentStep), targetValues.clients),
        placements: Math.min(Math.floor(stepValues.placements * currentStep), targetValues.placements),
        properties: Math.min(Math.floor(stepValues.properties * currentStep), targetValues.properties)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, duration / steps);
  };

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="container">
        <div className="about-content">
          <div className={`about-text ${isVisible ? 'visible' : ''}`}>
            <h2 className="section-title">About Us</h2>
            <div className="about-description">
              <p>
                <strong>Vinayak Facility & Management Services</strong> is a premier service provider 
                with expertise in multiple domains. We pride ourselves on delivering exceptional quality 
                and reliability across all our service verticals.
              </p>
              <p>
                With years of industry experience, our team of professionals is dedicated to 
                understanding your unique requirements and providing customized solutions that 
                exceed expectations. We believe in building long-term relationships with our 
                clients based on trust, transparency, and outstanding service delivery.
              </p>
              <p>
                Our commitment to excellence, combined with our innovative approach and 
                customer-centric philosophy, makes us the preferred choice for businesses 
                seeking comprehensive facility and management solutions.
              </p>
            </div>
            
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">{counters.clients}+</div>
                <div className="stat-label">Happy Clients</div>
                <div className="stat-bar">
                  <div className="stat-progress" style={{width: '100%'}}></div>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-number">{counters.placements}+</div>
                <div className="stat-label">Successful Placements</div>
                <div className="stat-bar">
                  <div className="stat-progress" style={{width: '100%'}}></div>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-number">{counters.properties}+</div>
                <div className="stat-label">Properties Managed</div>
                <div className="stat-bar">
                  <div className="stat-progress" style={{width: '100%'}}></div>
                </div>
              </div>
            </div>
            
            <div className="about-features">
              <div className="feature">
                <div className="feature-icon">🎯</div>
                <div className="feature-content">
                  <h4>Mission</h4>
                  <p>To deliver exceptional services that empower businesses and enhance operational efficiency.</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">👁️</div>
                <div className="feature-content">
                  <h4>Vision</h4>
                  <p>To be the most trusted partner for comprehensive business solutions nationwide.</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">💎</div>
                <div className="feature-content">
                  <h4>Values</h4>
                  <p>Integrity, Excellence, Innovation, and Customer-Centric approach in everything we do.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`about-visual ${isVisible ? 'visible' : ''}`}>
            <div className="visual-container">
              <div className="floating-element element-1">
                <div className="element-icon">👥</div>
                <span>Manpower</span>
              </div>
              <div className="floating-element element-2">
                <div className="element-icon">🏢</div>
                <span>Real Estate</span>
              </div>
              <div className="floating-element element-3">
                <div className="element-icon">💼</div>
                <span>Placement</span>
              </div>
              <div className="floating-element element-4">
                <div className="element-icon">🔧</div>
                <span>Maintenance</span>
              </div>
              <div className="main-circle">
                <div className="circle-content">
                  <div className="circle-icon">🏆</div>
                  <span>Trusted Partner</span>
                </div>
                <div className="circle-rings">
                  <div className="ring ring-1"></div>
                  <div className="ring ring-2"></div>
                  <div className="ring ring-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;



