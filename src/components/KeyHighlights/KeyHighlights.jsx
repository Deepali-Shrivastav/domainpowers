'use client';
import React from 'react';
import { highlights } from '../../data/highlights';
import { motion } from 'framer-motion';
import './KeyHighlights.css';
import { FaCheckCircle } from 'react-icons/fa';

const KeyHighlights = () => {
  return (
    <section className="key-highlights">
      <div className="container">
        <div className="section-title">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why Industry Leaders Choose Us
          </motion.h2>
          <div className="underline"></div>
        </div>
        <div className="grid-3">
          {highlights.map((item, index) => (
            <motion.div 
              key={item.id} 
              className="highlight-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
            >
              <div className="highlight-icon-wrapper">
                <FaCheckCircle className="highlight-icon" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyHighlights;
