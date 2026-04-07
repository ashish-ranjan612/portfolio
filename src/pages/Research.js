import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFlask, FaCalendar, FaUsers, FaDollarSign, FaGraduationCap } from 'react-icons/fa';
import './Research.css';

const researchData = [
  {
    _id: '1',
    title: 'Mentoring : A Tool for Teacher Development',
    description: 'A major collaborative research project under the UK-India Education and Research Initiative (UKIERI), focusing on mentoring as a tool for professional development of teachers.',
    status: 'Completed',
    year: '2011',
    funding: 'UK-India Education and Research Initiative (UKIERI)',
    duration: '2007-2011',
    collaborators: ['University of Delhi', 'The Open University, UK'],
    keywords: ['Mentoring', 'Teacher Development', 'Collaboration', 'UK-India Research']
  },
  {
    _id: '2',
    title: 'School Experience Programme : Context, Concerns and Challenges',
    description: 'A research project investigating the various dimensions of school experience programmes in teacher education, identifying systemic challenges and proposing reforms.',
    status: 'Completed',
    year: '2015',
    funding: 'IASE-MHRD',
    duration: '2014-2015',
    collaborators: ['IASE, Department of Education, University of Delhi'],
    keywords: ['School Experience', 'Teacher Training', 'Curriculum Reform']
  },
  {
    _id: '3',
    title: 'Construction of Historical Imagination and Understanding in School Children',
    description: 'Exploring how children perceive and construct historical narratives, with a focus on pedagogical strategies to foster historical thinking.',
    status: 'Completed',
    year: '2016',
    funding: 'Research & Development Grant, University of Delhi',
    duration: '2015-2016',
    collaborators: ['University of Delhi'],
    keywords: ['Historical Imagination', 'Pedagogy', 'Cognitive Development']
  },
  {
    _id: '4',
    title: 'Teacher Education: Issues & Challenges',
    description: 'An analytical study of the current landscape of teacher education in India, addressing critical gaps between policy and practice.',
    status: 'Completed',
    year: '2016',
    funding: 'IASE-MHRD',
    duration: '2015-2016',
    collaborators: ['IASE, University of Delhi'],
    keywords: ['Teacher Education', 'Policy Analysis', 'Higher Education']
  },
  {
    _id: '5',
    title: 'Education System in Select Countries : A Comparative Study',
    description: 'A comparative analysis of education systems across different national contexts, focusing on curriculum design and administrative structures.',
    status: 'Completed',
    year: '2021',
    funding: 'IASE-MHRD',
    duration: '2020-2021',
    collaborators: ['Department of Education, University of Delhi'],
    keywords: ['Comparative Education', 'International Policy', 'Global Trends']
  }
];

const Research = () => {
  const [research] = useState(researchData);

  return (
    <div className="research-page">
      <section className="research-hero">
        <div className="section-container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero-content"
          >
            <div className="info-badge">Scholarly Impact</div>
            <h1 className="page-title">Research Projects</h1>
            <p className="page-subtitle">
              Advancing the boundaries of Social Science Education and Comparative Pedagogy through evidence-based inquiry.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="research-grid-section">
        <div className="section-container">
          <div className="research-grid">
            {research.map((project, index) => (
              <motion.div
                key={project._id || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="research-card"
              >
                <div className="card-top">
                  <div className="status-badge">{project.status}</div>
                  <span className="project-year">{project.year}</span>
                </div>
                
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-meta-grid">
                  <div className="meta-item">
                    <FaDollarSign />
                    <div>
                      <label>Funding</label>
                      <span>{project.funding}</span>
                    </div>
                  </div>
                  <div className="meta-item">
                    <FaCalendar />
                    <div>
                      <label>Duration</label>
                      <span>{project.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="keywords-flex">
                  {project.keywords.map((tag, idx) => (
                    <span key={idx} className="keyword-tag">#{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;