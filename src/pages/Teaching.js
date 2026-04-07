import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaMicrophone, FaCalendar, FaGlobe, FaGraduationCap, FaMapMarkerAlt } from 'react-icons/fa';
import './Teaching.css';

const courses = [
  {
    _id: '1',
    courseName: 'Pedagogy of History',
    program: 'B.Ed.',
    description: 'Focuses on the methods and strategies for teaching history at the school level.',
    focus: 'History Pedagogy, Curriculum Analysis'
  },
  {
    _id: '2',
    courseName: 'Issues in Comparative and International Education',
    program: 'M.Ed.',
    description: 'A comprehensive study of educational systems across the globe.',
    focus: 'Global Education Policy, Comparative Research'
  },
  {
    _id: '3',
    courseName: 'Perspectives in History and History of Education',
    program: 'M.Ed.',
    description: 'Historical foundations of education systems and pedagogical thought.',
    focus: 'Educational History, Philosophical Foundations'
  }
];

const conferences = [
  {
    _id: '1',
    title: 'History Curriculum of Bangladesh, India and Pakistan: A Comparative Study',
    venue: 'Hawaii, USA',
    date: '2010',
    type: 'International Conference'
  },
  {
    _id: '2',
    title: 'Re-imagining History Curriculum of India and Pakistan',
    venue: 'Istanbul, Turkey',
    date: '2010',
    type: 'International Conference'
  },
  {
    _id: '3',
    title: 'Restoring the Marginalised Voices in History Curriculum',
    venue: 'Buenos Aires, Argentina',
    date: '2013',
    type: 'World Congress'
  },
  {
    _id: '4',
    title: 'National and International Curricula in History',
    venue: 'Beijing, China',
    date: '2016',
    type: 'International Conference'
  }
];

const Teaching = () => {
  const [activeTab, setActiveTab] = useState('courses');

  return (
    <div className="teaching-page">
      <section className="teaching-hero">
        <div className="section-container">
          <div className="hero-content">
            <h1 className="page-title">Instruction & Engagement</h1>
            <p className="page-subtitle">Nurturing the next generation of educators through pedagogical excellence.</p>
          </div>
        </div>
      </section>

      <section className="teaching-tabs-section">
        <div className="section-container">
          <div className="tabs-navigation">
            <button 
              className={activeTab === 'courses' ? 'active' : ''} 
              onClick={() => setActiveTab('courses')}
            >
              <FaBook /> Academic Courses
            </button>
            <button 
              className={activeTab === 'conferences' ? 'active' : ''} 
              onClick={() => setActiveTab('conferences')}
            >
              <FaMicrophone /> Global Engagements
            </button>
          </div>

          <div className="tabs-content">
            {activeTab === 'courses' ? (
              <div className="courses-grid">
                {courses.map((course, index) => (
                  <motion.div 
                    key={course._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="course-card-premium"
                  >
                    <div className="course-badge">{course.program}</div>
                    <h3>{course.courseName}</h3>
                    <p>{course.description}</p>
                    <div className="course-footer">
                      <FaGraduationCap /> <span>{course.focus}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="conferences-grid-premium">
                {conferences.map((conf, index) => (
                  <motion.div 
                    key={conf._id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="conference-card-premium"
                  >
                    <div className="conf-type">{conf.type}</div>
                    <h3>{conf.title}</h3>
                    <div className="conf-meta">
                      <div className="meta-item">
                        <FaMapMarkerAlt /> <span>{conf.venue}</span>
                      </div>
                      <div className="meta-item">
                        <FaCalendar /> <span>{conf.date}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teaching;