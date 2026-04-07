import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFileAlt, FaSearch, FaFilter, FaBookOpen, FaQuoteLeft } from 'react-icons/fa';
import './Publications.css';

const publicationsData = [
  {
    _id: '1',
    title: 'Ideology and Curriculum: Exploring from the Critical Perspective',
    type: 'Journal',
    authors: 'Ashish Ranjan',
    journal: 'Global Education, Society and Development',
    year: 2010,
    volume: '1 (4)',
    pages: '85-90',
  },
  {
    _id: '2',
    title: 'Decoding the Field of Comparative Education in South Asia',
    type: 'Journal',
    authors: 'Ashish Ranjan',
    journal: 'IJBEMR',
    year: 2010,
    volume: '1 (1)',
    pages: '203-218',
  },
  {
    _id: '3',
    title: 'Gandhi aur Stri Vimarsh',
    type: 'Journal',
    authors: 'Salil Mishra & Ashish Ranjan',
    journal: 'Teacher Support (NCTE)',
    year: 2015,
    volume: '4(2)',
    pages: '69-77',
  },
  {
    _id: '4',
    title: 'History Curriculum of CBSE, CISCE and IB: A Comparative Study',
    type: 'Journal',
    authors: 'Ashish Ranjan',
    journal: 'Vaak Sudha',
    year: 2016,
    volume: '1(1)',
    pages: '207-222',
  },
  {
    _id: '5',
    title: 'Historical Imagination in School Children: Remembering Collingwood',
    type: 'Journal',
    authors: 'Ashish Ranjan',
    journal: 'Vaak Sudha',
    year: 2016,
    volume: '1(2)',
    pages: '309-314',
  },
  {
    _id: '6',
    title: 'Bordering and Rebordering of Minds: A Comparative Study of History Curriculum of India and Pakistan',
    type: 'Journal',
    authors: 'Ashish Ranjan',
    journal: 'MERI Journal of Education',
    year: 2017,
    volume: '12 (1)',
    pages: '25-38',
  },
  {
    _id: '7',
    title: 'Doing History: Perspectives from the Field',
    type: 'Journal',
    authors: 'Ashish Ranjan',
    journal: 'IJMALE',
    year: 2017,
    volume: '3(2)',
    pages: '157-161',
  },
  {
    _id: '8',
    title: 'Travelling to School: Comparative and International Perspectives',
    type: 'Journal',
    authors: 'Ashish Ranjan',
    journal: 'IJMALE',
    year: 2018,
    volume: '4 (2)',
    pages: '188-192',
  },
  {
    _id: '9',
    title: 'Paathyacharyaa-Moolyaankan: Ek Aalochanaatmak Pariprekshya',
    type: 'Journal',
    authors: 'Ashish Ranjan',
    journal: 'Journal of Arts, Culture, Philosophy, Religion, Language and Literature',
    year: 2020,
    volume: '4(2)',
    pages: '100-104',
  },
  {
    _id: '10',
    title: 'Streaming live from classrooms: Autonomy or Accountability for Delhi School Teachers',
    type: 'Journal',
    authors: 'Ashish Ranjan',
    journal: 'Global Thought',
    year: 2021,
    volume: '5(19)',
    pages: '162-170',
  },
  {
    _id: '11',
    title: 'Teaching of Social Science: History, Context and Challenges',
    type: 'Book Chapter',
    authors: 'Salil Mishra & Ashish Ranjan',
    journal: 'Contemporary Trends in Education',
    year: 2012,
  },
  {
    _id: '12',
    title: 'Reflective Engagement with the Field of Education: Experiences from the University of Delhi',
    type: 'Book Chapter',
    authors: 'Ashish Ranjan & Vikas Beniwal',
    journal: 'School Internship Practices in India',
    year: 2020,
  },
  {
    _id: '13',
    title: 'Construction of Historical Imagination: A Resource Book for Teacher Educators',
    type: 'Book',
    authors: 'Ashish Ranjan',
    year: 2016,
  },
  {
    _id: '14',
    title: 'Contemporary Issues in Education',
    type: 'Book',
    authors: 'Ashish Ranjan',
    year: 2018,
  }
];

const Publications = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredPubs = publicationsData.filter(pub => {
    const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         pub.authors.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'All' || pub.type === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="publications-page">
      <section className="publications-hero">
        <div className="section-container">
          <div className="hero-content">
            <h1 className="page-title">Scholarly Works</h1>
            <p className="page-subtitle">A collection of research articles, books, and chapters contributing to the discourse of education.</p>
          </div>
        </div>
      </section>

      <section className="publications-list-section">
        <div className="section-container">
          <div className="controls-row">
            <div className="search-wrapper">
              <FaSearch className="search-icon" />
              <input 
                type="text" 
                placeholder="Search by title or keyword..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="filter-wrapper">
              <button 
                className={activeFilter === 'All' ? 'active' : ''} 
                onClick={() => setActiveFilter('All')}
              >All</button>
              <button 
                className={activeFilter === 'Journal' ? 'active' : ''} 
                onClick={() => setActiveFilter('Journal')}
              >Journals</button>
              <button 
                className={activeFilter === 'Book' ? 'active' : ''} 
                onClick={() => setActiveFilter('Book')}
              >Books</button>
            </div>
          </div>

          <div className="publications-grid">
            {filteredPubs.map((pub, index) => (
              <motion.div 
                key={pub._id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="pub-card"
              >
                <FaQuoteLeft className="quote-icon" />
                <div className="pub-type-badge">{pub.type}</div>
                <h3 className="pub-title">{pub.title}</h3>
                <p className="pub-authors">{pub.authors}</p>
                <div className="pub-footer">
                  <span className="pub-journal">{pub.journal || 'Independent Publication'}</span>
                  <span className="pub-year">{pub.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Publications;