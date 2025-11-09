import React, { useState, useEffect, useRef } from 'react';
import './about.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const features = [
    {
      icon: "🏆",
      title: "Industry Experience",
      description: "Over 10 years of excellence in facility management services"
    },
    {
      icon: "🔧",
      title: "Comprehensive Solutions",
      description: "End-to-end services from manpower to real estate management"
    },
    {
      icon: "⭐",
      title: "Quality Assurance",
      description: "98% client satisfaction rate with proven track record"
    },
    {
      icon: "🚀",
      title: "Innovation Driven",
      description: "Continuous improvement with latest technologies and practices"
    }
  ];

  const milestones = [
    { year: "2010", event: "Company Founded" },
    { year: "2013", event: "100+ Projects Completed" },
    { year: "2016", event: "Pan-India Operations" },
    { year: "2020", event: "500+ Happy Clients" },
    { year: "2024", event: "Industry Leader" }
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
    <section id="about" className="about" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <span className="badge-icon">ℹ️</span>
            <span className="badge-text">About Us</span>
          </div>
          <h2 className="section-title">
            Your Trusted Partner in 
            <span className="highlight"> Facility Management</span>
          </h2>
          <p className="section-subtitle">
            Delivering excellence in comprehensive business solutions since 2010
          </p>
        </div>

        <div className="about-content">
          {/* Main Content */}
          <div className="about-main">
            <div className="content-grid">
              {/* Text Content */}
              <div className="text-content">
                <div className="description-section">
                  <h3 className="content-title">
                    Transforming Businesses with Reliable Solutions
                  </h3>
                  <div className="description-text">
                    <p>
                      <strong>Vinayak Facility & Management Services</strong> has been 
                      at the forefront of providing comprehensive business solutions 
                      for over a decade. We understand that every business has unique 
                      requirements, and we tailor our services to meet those specific needs.
                    </p>
                    <p>
                      Our commitment to <strong>quality, reliability, and innovation</strong> 
                      has made us the preferred choice for 500+ clients across India. 
                      From manpower supply to real estate management, we deliver 
                      end-to-end solutions that drive business growth.
                    </p>
                  </div>
                </div>

                {/* Key Features */}
                <div className="features-section">
                  <h4 className="features-title">Why Choose Us?</h4>
                  <div className="features-grid">
                    {features.map((feature, index) => (
                      <div 
                        key={index} 
                        className={`feature-card ${isVisible ? 'animate' : ''}`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="feature-icon">{feature.icon}</div>
                        <h5 className="feature-title">{feature.title}</h5>
                        <p className="feature-description">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Visual Content */}
              <div className="visual-content">
                <div className="image-container">
                  <div className="main-image">
                    <div className="image-placeholder">
                      <span className="placeholder-icon">🏢</span>
                      <span className="placeholder-text">Professional Excellence</span>
                    </div>
                  </div>
                  
                  {/* Achievement Badges */}
                  <div className="achievement-badges">
                    <div className="badge-item experience">
                      <span className="badge-number">10+</span>
                      <span className="badge-label">Years Experience</span>
                    </div>
                    <div className="badge-item clients">
                      <span className="badge-number">500+</span>
                      <span className="badge-label">Happy Clients</span>
                    </div>
                    <div className="badge-item projects">
                      <span className="badge-number">1000+</span>
                      <span className="badge-label">Projects Done</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="mission-vision">
              <div className="mission-card">
                <div className="card-icon">🎯</div>
                <h4 className="card-title">Our Mission</h4>
                <p className="card-description">
                  To deliver exceptional facility management services that empower 
                  businesses to focus on their core operations while we handle their 
                  infrastructure needs with professionalism and efficiency.
                </p>
              </div>
              
              <div className="vision-card">
                <div className="card-icon">🔭</div>
                <h4 className="card-title">Our Vision</h4>
                <p className="card-description">
                  To become the most trusted and innovative facility management partner 
                  in India, setting new standards in quality, reliability, and customer 
                  satisfaction.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="timeline-section">
              <h3 className="timeline-title">Our Journey</h3>
              <div className="timeline">
                {milestones.map((milestone, index) => (
                  <div 
                    key={index} 
                    className={`timeline-item ${isVisible ? 'animate' : ''}`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <div className="timeline-year">{milestone.year}</div>
                      <div className="timeline-event">{milestone.event}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="about-cta">
              <div className="cta-content">
                <h3 className="cta-title">Ready to Transform Your Business?</h3>
                <p className="cta-description">
                  Let's discuss how our comprehensive facility management solutions 
                  can help your business grow and succeed.
                </p>
                <div className="cta-buttons">
                  <button className="cta-btn primary">
                    <span className="btn-icon">📞</span>
                    <span className="btn-text">Get Free Consultation</span>
                  </button>
                  <button className="cta-btn secondary">
                    <span className="btn-icon">📧</span>
                    <span className="btn-text">Contact Us</span>
                  </button>
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