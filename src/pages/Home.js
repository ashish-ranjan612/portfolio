import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaGraduationCap, FaBook, FaChalkboardTeacher, FaUserTie } from 'react-icons/fa';
import './Home.css';


import profileImage from '../assets/images/73695.jpg';

const Home = () => {
  const [profile] = useState({
    name: 'Prof. Ashish Ranjan',
    title: 'Professor',
    department: 'Department of Education (CIE)',
    institution: 'University of Delhi',
    researchInterests: [
      'Social Science Education',
      'Pedagogy of History',
      'Historical Research and Documentation Studies',
      'Public Policy on Education',
      'Comparative and International Education'
    ]
  });

  const stats = [
    { number: '20+', label: 'Years Experience', path: '/about' },
    { number: '35+', label: 'Publications', path: '/publications' },
    { number: '05', label: 'Books Edited', path: '/publications' },
    { number: '10+', label: 'Global Visits', path: '/about' }
  ];

  const quickLinks = [
    { 
      icon: <FaUserTie />, 
      title: 'About', 
      path: '/about', 
      desc: 'Explore the journey and professional achievements.' 
    },
    { 
      icon: <FaBook />, 
      title: 'Research', 
      path: '/research', 
      desc: 'Deep dive into scholarly projects and impact areas.' 
    },
    { 
      icon: <FaChalkboardTeacher />, 
      title: 'Teaching', 
      path: '/teaching', 
      desc: 'Nurturing future educators through pedagogy.' 
    }
  ];

  return (
    <div className="home-premium">
      <div className="bg-mesh"></div>
      
      {/* Asymmetrical Hero Section */}
      <section className="hero-split">
        <div className="container-hero">
          <div className="hero-grid-premium">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="hero-text-card"
            >
              <div className="hero-label">Department of Education (CIE)</div>
              <h1 className="hero-main-title">
                {profile.name}
              </h1>
              <p className="hero-tagline">
                Shaping the future of <span>Social Science Education</span> & <span>Pedagogy of History</span> at the University of Delhi.
              </p>
              
              <div className="hero-actions">
                <Link to="/about" className="btn-premium">
                  Profile <FaArrowRight />
                </Link>
                <Link to="/research" className="btn-secondary-premium">
                  Research
                </Link>
              </div>
            </motion.div>

            {/* Right Image - Simplified */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="hero-visual"
            >
              <div className="simple-frame">
                <img src={profileImage} alt={profile.name} className="main-photo" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Floating Stats Bar */}
      <section className="floating-stats-section">
        <div className="section-container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="stats-glass-bar"
          >
            {stats.map((stat, index) => (
              <div key={index} className="stat-node">
                <div className="stat-val">{stat.number}</div>
                <div className="stat-txt">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modern Interests Grid */}
      <section className="interests-premium">
        <div className="section-container">
          <div className="premium-header">
            <h2 className="title-gradient">Research Specializations</h2>
            <p>Advancing educational discourse through specialized academic inquiry.</p>
          </div>
          <div className="interests-masonry">
            {profile.researchInterests.map((interest, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="interest-pill"
              >
                <div className="pill-dot"></div>
                <span>{interest}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Quick Access */}
      <section className="portfolio-access">
        <div className="section-container">
          <div className="access-grid">
            {quickLinks.map((link, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="access-card"
              >
                <div className="access-icon">{link.icon}</div>
                <h3>{link.title}</h3>
                <p>{link.desc}</p>
                <Link to={link.path} className="access-btn">
                  Explore <FaArrowRight />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
