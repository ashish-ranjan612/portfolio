import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGoogle, FaGraduationCap, FaUniversity } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-section-header">
            <FaUniversity className="section-icon" />
            <h3>Contact Information</h3>
          </div>
          <div className="footer-contact">
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <div>
                <p>ashishofcie@yahoo.com</p>
                <p>aranjan@cie.du.ac.in</p>
              </div>
            </div>

            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <p>Department of Education (CIE)<br />University of Delhi<br />Delhi-110007, India</p>
            </div>
          </div>
        </div>

        <div className="footer-section">
          <div className="footer-section-header">
            <FaGraduationCap className="section-icon" />
            <h3>Academic Portfolio</h3>
          </div>
          <div className="footer-links">
            <a href="/about">Academic Profile</a>
            <a href="/research">Research Projects</a>
            <a href="/publications">Publications</a>
            <a href="/teaching">Teaching Portfolio</a>
          </div>
        </div>

        <div className="footer-section">
          <div className="footer-section-header">
            <FaLinkedin className="section-icon" />
            <h3>Connect & Collaborate</h3>
          </div>
          <div className="footer-social">
            <span className="social-link">Ph: 011-27667030</span>
          </div>
          <div className="footer-info">
            <p>For academic collaborations, research discussions, or professional inquiries.</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {new Date().getFullYear()} Professor Ashish Ranjan - University of Delhi. All rights reserved.</p>
          <p className="footer-credits">Academic Portfolio</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;