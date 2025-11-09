// components/Services.js
import React, { useState, useRef, useEffect } from 'react';
import './services.css';

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const services = [
    {
      id: 1,
      title: "Manpower Supply",
      icon: "👥",
      description: "Comprehensive workforce solutions tailored to your industry needs",
      features: [
        "Skilled & Unskilled Labor Supply",
        "Technical Staff & Professionals",
        "Administrative & Support Staff",
        "Industry-Specialized Workforce",
        "Temporary & Permanent Staffing"
      ],
      stats: "5000+ Workers Placed",
      color: "#667eea"
    },
    {
      id: 2,
      title: "Placement Services",
      icon: "🎯",
      description: "Strategic recruitment and talent acquisition solutions",
      features: [
        "Executive Search & Headhunting",
        "Bulk Recruitment Solutions",
        "Campus Placement Drives",
        "Background Verification",
        "HR Consulting Services"
      ],
      stats: "95% Success Rate",
      color: "#f093fb"
    },
    {
      id: 3,
      title: "Housekeeping",
      icon: "🏠",
      description: "Professional cleaning and maintenance services",
      features: [
        "Residential & Commercial Cleaning",
        "Deep Cleaning Services",
        "Sanitization & Disinfection",
        "Regular Maintenance Contracts",
        "Special Event Cleaning"
      ],
      stats: "24/7 Available",
      color: "#4facfe"
    },
    {
      id: 4,
      title: "Horticulture",
      icon: "🌿",
      description: "Expert landscaping and garden maintenance solutions",
      features: [
        "Landscape Design & Development",
        "Regular Garden Maintenance",
        "Irrigation System Installation",
        "Seasonal Plant Rotation",
        "Commercial Landscape Management"
      ],
      stats: "100+ Projects",
      color: "#43e97b"
    },
    {
      id: 5,
      title: "Building Maintenance",
      icon: "🏢",
      description: "Complete facility management and maintenance services",
      features: [
        "Preventive Maintenance Programs",
        "Emergency Repair Services",
        "HVAC & Electrical Maintenance",
        "Plumbing & Carpentry Works",
        "Facility Management Contracts"
      ],
      stats: "50+ Buildings Managed",
      color: "#ff9a9e"
    },
    {
      id: 6,
      title: "Real Estate",
      icon: "🏘️",
      description: "End-to-end property solutions and consultancy",
      features: [
        "Property Sales & Purchases",
        "Rental Property Management",
        "Commercial Leasing",
        "Property Valuation",
        "Real Estate Consultation"
      ],
      stats: "₹50Cr+ Portfolio",
      color: "#a8edea"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="services" ref={sectionRef}>
      <div className="container">
        <div className={`section-header ${isVisible ? 'animate' : ''}`}>
          <h2>Our Premium Services</h2>
          <p>Comprehensive solutions for all your business and facility management needs</p>
        </div>

        <div className="services-container">
          <div className="services-nav">
            {services.map((service, index) => (
              <button
                key={service.id}
                className={`service-nav-item ${activeService === index ? 'active' : ''}`}
                onClick={() => setActiveService(index)}
                style={{
                  '--service-color': service.color
                }}
              >
                <span className="nav-icon">{service.icon}</span>
                <span className="nav-title">{service.title}</span>
              </button>
            ))}
          </div>

          <div className="services-content">
            <div className="service-details">
              <div className="service-header">
                <div 
                  className="service-icon"
                  style={{ backgroundColor: services[activeService].color }}
                >
                  {services[activeService].icon}
                </div>
                <div>
                  <h3>{services[activeService].title}</h3>
                  <p>{services[activeService].description}</p>
                  <div className="service-stats">
                    {services[activeService].stats}
                  </div>
                </div>
              </div>
              
              <div className="service-features">
                <h4>What We Offer:</h4>
                <ul>
                  {services[activeService].features.map((feature, index) => (
                    <li key={index}>
                      <span className="feature-check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="service-actions">
                <button className="btn btn-primary">
                  Get Quote
                </button>
                <button className="btn btn-secondary">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;