// components/Contact/Contact.js
import React, { useState, useEffect, useRef } from 'react';
import './contact.css';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
  const node = sectionRef.current; // capture ref once
  if (!node) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    },
    { threshold: 0.3 }
  );

  observer.observe(node);

  // cleanup safely using the stored node reference
  return () => {
    observer.unobserve(node);
  };
}, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="container">
        <h2 className={`section-title ${isVisible ? 'visible' : ''}`}>Get In Touch</h2>
        <p className={`contact-subtitle ${isVisible ? 'visible' : ''}`}>
          Ready to transform your business? Let's discuss how we can help you achieve your goals.
        </p>
        
        <div className="contact-content">
          <div className={`contact-info ${isVisible ? 'visible' : ''}`}>
            <h3>Contact Information</h3>
            <p className="info-description">
              Reach out to us through any of the following channels. Our team is ready to 
              assist you with your queries and requirements.
            </p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">📞</div>
                <div className="method-content">
                  <h4>Phone</h4>
                  <p>+91 98183 30179</p>
                  <p>+91 XXXXX XXXXX</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">✉️</div>
                <div className="method-content">
                  <h4>Email</h4>
                  <p>vinayak.facility04@gmail.com</p>
                  <p>support@vinayakfacility.com</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">📍</div>
                <div className="method-content">
                  <h4>Address</h4>
                  <p>Sector 18, village Sarhaul, Mother dairy wali gali opposite Orient Craft ltd</p>
                  <p> Gurugram, Haryana - 400001</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">🕒</div>
                <div className="method-content">
                  <h4>Business Hours</h4>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="social-links">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <a href="https://example.com" className="social-icon">📘</a>
                <a href="https://example.com" className="social-icon">📷</a>
                <a href="https://example.com" className="social-icon">🐦</a>
                <a href="https://example.com" className="social-icon">💼</a>
              </div>
            </div>
          </div>
          
          <div className={`contact-form-container ${isVisible ? 'visible' : ''}`}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                />
                <div className="input-icon">👤</div>
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your email address"
                />
                <div className="input-icon">📧</div>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter the subject"
                />
                <div className="input-icon">📝</div>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  placeholder="Tell us about your requirements..."
                ></textarea>
                <div className="input-icon">💬</div>
              </div>
              
              <button 
                type="submit" 
                className={`btn-primary submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Sending Message...
                  </>
                ) : (
                  <>
                    Send Message
                    <span className="btn-icon">🚀</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;