import React, { useState } from "react";
import emailjs from '@emailjs/browser';

const Hero = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAppModalOpen, setIsAppModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openAppModal = () => {
    setIsAppModalOpen(true);
  };

  const closeAppModal = () => {
    setIsAppModalOpen(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // EmailJS configuration - Using environment variables
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
    const toEmail = process.env.REACT_APP_TO_EMAIL;
    
    // Debug logging
    console.log('EmailJS Config:', {
      serviceId,
      templateId, 
      publicKey: publicKey ? 'Present' : 'Missing',
      toEmail: toEmail ? 'Present' : 'Missing'
    });
    
    // Check if all required config is present
    if (!serviceId || !templateId || !publicKey || !toEmail) {
      alert('EmailJS configuration is missing. Please check your .env file.');
      console.error('Missing EmailJS configuration:', {
        serviceId: !!serviceId,
        templateId: !!templateId,
        publicKey: !!publicKey,
        toEmail: !!toEmail
      });
      return;
    }
    
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone_number: formData.phone,
      to_email: toEmail,
      message: `New job posting enquiry received:
      
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Date: ${new Date().toLocaleString()}
      
Please contact this person for job posting requirements.`
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        alert("Thank you for your enquiry! We'll get back to you soon.");
        setFormData({
          name: "",
          email: "",
          phone: ""
        });
        closeModal();
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        console.error('Error details:', {
          serviceId,
          templateId,
          publicKey: publicKey ? 'Present' : 'Missing',
          error: error.text || error.message || error
        });
        alert(`Sorry, there was an error sending your enquiry: ${error.text || error.message || 'Unknown error'}. Please try again.`);
      });
  };

  return (
    <>
      <section className="hero" id="hero">
        <div className="hero-content">
          <h1>RIVET</h1>
          <p className="subtitle">Riveting the Play of Core Industry.</p>
          <p className="desc">
            India's only job portal for Civil, Mechanical, Electrical and core engineering professionals.
          </p>
          <a href="#workforce" className="cta">Explore our services</a>
          <div className="ratings">
            <div className="rating-avatars">
              <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&h=150&fit=crop&crop=face&auto=format&q=80" alt="user" />
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face&auto=format&q=80" alt="user" />
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face&auto=format&q=80" alt="user" />
            </div>
            <span>★★★★★ From 200+ ratings</span>
          </div>
        </div>
        
        <div className="hero-enquiry-form">
          <div className="enquiry-content">
            <h3>Post JOB for Core Sector</h3>
            <p>Fill out the form below and our team will contact you within 24 hours.</p>
            
            <form onSubmit={handleSubmit} className="enquiry-form inline-form">
              <div className="form-group">
                <label htmlFor="inline-name">Full Name *</label>
                <input
                  type="text"
                  id="inline-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="inline-email">Email Address *</label>
                <input
                  type="email"
                  id="inline-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                />
              </div>

              <div className="form-group">
                <label htmlFor="inline-phone">Phone Number *</label>
                <input
                  type="tel"
                  id="inline-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="form-actions">
                <button type="submit" className="submit-btn">
                  Submit Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="hero-buttons">
          <button className="hero-btn" onClick={openModal}>📋 POST A JOB</button>
          <button className="hero-btn secondary" onClick={openAppModal}>👀 LOOKING FOR NEXT JOB</button>
        </div>
      </section>
      
      {isModalOpen && (
        <div className="enquiry-overlay" onClick={closeModal}>
          <div className="enquiry-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>×</button>
            <div className="enquiry-content">
              <h2>Post JOB for Core Sector</h2>
              <p>Fill out the form below and our team will contact you within 24 hours.</p>
              
              <form onSubmit={handleSubmit} className="enquiry-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="form-actions">
                  <button type="submit" className="submit-btn">
                    Submit Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      
      {isAppModalOpen && (
        <div className="enquiry-overlay" onClick={closeAppModal}>
          <div className="enquiry-modal app-download-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeAppModal}>×</button>
            <div className="enquiry-content app-download-content">
              <img src="/rivet-logo.png" alt="RIVET Logo" className="app-logo-img" />
              <h2>Find Next Job</h2>
              <h3>Download RIVET App</h3>
              <p>Access thousands of core engineering jobs on-the-go. Get instant notifications for new opportunities, apply with one tap, and track your applications from anywhere.</p>
              
              <div className="app-features">
                <div className="feature-item">✓ Apply to jobs instantly</div>
                <div className="feature-item">✓ Get real-time job alerts</div>
                <div className="feature-item">✓ Track application status</div>
                <div className="feature-item">✓ Direct employer communication</div>
              </div>
              
              <div className="app-store-buttons">
                <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="official-store-btn">
                  <img src="/google-play-badge.svg" alt="Get it on Google Play" className="store-badge" />
                </a>
                <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="official-store-btn">
                  <img src="/app-store-badge.svg" alt="Download on the App Store" className="store-badge" />
                </a>
              </div>
              
              <button className="close-modal-btn" onClick={closeAppModal}>
                Maybe Later
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero; 