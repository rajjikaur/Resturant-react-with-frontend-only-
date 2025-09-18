import React from "react";
import "./Contact.css";
import { FaPhoneAlt, FaEnvelope, FaUser, FaPaperPlane } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact-section">
      <h2 className="contact-title">📩 Contact Us</h2>
      
      <div className="contact-wrapper">
        
        {/* Left Info Panel */}
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>We’d love to hear from you! Reach out to us anytime.</p>
          <p><FaPhoneAlt className="contact-icon"/> <b>9818320989</b></p>
          <p><FaEnvelope className="contact-icon"/> <b>rajneetkaurannu10@gmail.com</b></p>
        </div>
        
        {/* Right Form Panel */}
        <form className="contact-form">
          <div className="input-box">
            <FaUser className="input-icon"/>
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="input-box">
            <FaEnvelope className="input-icon"/>
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="input-box">
            <textarea placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button type="submit" className="contact-btn">
            <FaPaperPlane /> Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
