import React from "react";

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">RIVET</div>
    <ul className="navbar-links">
      <li><a href="#hero">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#workforce">Services</a></li>
      <li><a href="#testimonials">Blog</a></li>
    </ul>
    <div className="navbar-contact-info">
      <span className="phone">📞 +91 89566 19631</span>
      <a href="#contact" className="navbar-contact">Contact</a>
    </div>
  </nav>
);

export default Navbar; 