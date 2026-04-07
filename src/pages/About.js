import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaBuilding, FaGraduationCap, FaUserTie, FaHistory, FaGlobe, FaChalkboardTeacher, FaMapMarkerAlt } from 'react-icons/fa';
import './About.css';

// Import your profile image
import profileImage from '../assets/images/73695.jpg';

const About = () => {
  const [profile] = useState({
    name: 'Prof. Ashish Ranjan',
    title: 'Professor',
    department: 'Department of Education (CIE)',
    institution: 'University of Delhi',
    email: 'ashishofcie@yahoo.com',
    location: 'Delhi, India',
    bio: 'Prof. Ashish Ranjan is a distinguished academician at the University of Delhi, specializing in Social Science Education and the Pedagogy of History. With over two decades of experience, he has significantly contributed to historical research, documentation studies, and global educational discourse through extensive international engagements.',
    education: [
      {
        degree: 'Ph.D. in Education',
        institution: 'University of Delhi',
        year: '2005',
        details: 'Focused on Pedagogy of History and Social Science Education.'
      },
      {
        degree: 'M.Ed.',
        institution: 'University of Delhi',
        year: '1998'
      },
      {
        degree: 'M.A. in History',
        institution: 'University of Delhi',
        year: '1996'
      }
    ],
    journey: [
      {
        year: '2015 - Present',
        role: 'Professor',
        organization: 'CIE, University of Delhi',
        desc: 'Leading advanced research in Social Science Education and supervising doctoral candidates.'
      },
      {
        year: '2012 - 2015',
        role: 'Associate Professor',
        organization: 'CIE, University of Delhi',
        desc: 'Focused on curriculum development and pedagogical innovations in History.'
      },
      {
        year: '2005 - 2012',
        role: 'Assistant Professor',
        organization: 'Aditi Mahavidyalaya, University of Delhi',
        desc: 'Instructional leadership and foundational research in educational theory.'
      }
    ],
    memberships: [
      'Comparative Education Society of India (CESI)',
      'Indian Association of Teacher Educators (IATE)',
      'Global Educational Research Association (GERA)',
      'International Association for the Advancement of Curriculum Studies (IAACS)'
    ],
    awards: [
      'International Research Fellowship (2018)',
      'Distinguished Academician Award (2021)',
      'Excellence in Teaching Citation (2019)'
    ]
  });

  return (
    <div className="about-premium">
      <div className="bg-mesh"></div>
      
      {/* Layered Profile Hero */}
      <section className="profile-layered-hero">
        <div className="section-container">
          <div className="hero-flex-layout">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="photo-stack"
            >
              <div className="stack-bg"></div>
              <div className="stack-glass"></div>
              <img src={profileImage} alt={profile.name} className="profile-img-main" />
              <div className="experience-tag">
                <FaHistory />
                <span>20+ Years</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="profile-info-premium"
            >
              <div className="profile-label">Expert Academician</div>
              <h1 className="name-display">{profile.name}</h1>
              <p className="title-display">{profile.title} at {profile.institution}</p>
              
              <div className="contact-pills">
                <div className="contact-pill">
                  <FaEnvelope /> {profile.email}
                </div>
                <div className="contact-pill">
                  <FaMapMarkerAlt /> {profile.location}
                </div>
              </div>

              <div className="bio-container-premium">
                <p>{profile.bio}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modern Vertical Timeline */}
      <section className="journey-section">
        <div className="section-container">
          <div className="premium-header-left">
            <h2 className="title-gradient">Professional Journey</h2>
            <div className="header-line"></div>
          </div>
          
          <div className="vertical-timeline">
            {profile.journey.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="timeline-item-premium"
              >
                <div className="item-marker">
                  <div className="marker-dot"></div>
                  <div className="marker-line"></div>
                </div>
                <div className="item-content-premium">
                  <div className="item-year">{item.year}</div>
                  <h3 className="item-role">{item.role}</h3>
                  <div className="item-org">
                    <FaBuilding /> {item.organization}
                  </div>
                  <p className="item-desc">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Grid for Academic Foundation & Honors */}
      <section className="foundations-section">
        <div className="section-container">
          <div className="foundations-grid">
            {/* Education */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="foundation-card"
            >
              <div className="card-header-premium">
                <FaGraduationCap />
                <h3>Education</h3>
              </div>
              <div className="edu-stack">
                {profile.education.map((edu, idx) => (
                  <div key={idx} className="edu-entry">
                    <div className="edu-meta">
                      <span className="edu-year">{edu.year}</span>
                      <span className="edu-inst">{edu.institution}</span>
                    </div>
                    <h4>{edu.degree}</h4>
                    {edu.details && <p>{edu.details}</p>}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Memberships & Awards */}
            <div className="double-sub-grid">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="foundation-card sub-card"
              >
                <div className="card-header-premium">
                  <FaGlobe />
                  <h3>Memberships</h3>
                </div>
                <ul className="premium-list">
                  {profile.memberships.map((m, i) => (
                    <li key={i}>{m}</li>
                  ))}
                </ul>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="foundation-card sub-card"
              >
                <div className="card-header-premium">
                  <FaChalkboardTeacher />
                  <h3>Honors & Awards</h3>
                </div>
                <ul className="premium-list">
                  {profile.awards.map((a, i) => (
                    <li key={i}>{a}</li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;