'use client';
import React from 'react';
import { motion } from 'framer-motion';
import './StatsCount.css';

const StatsCount = () => {
  const stats = [
    { number: "25+", label: "Years of Engineering Excellence" },
    { number: "5200+", label: "Successful Installations" },
    { number: "2000+", label: "Happy Industrial Clients" },
    { number: "100%", label: "CPRI Compliance" }
  ];

  return (
    <section className="stats-count section-dark">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="stat-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <h2 className="stat-number">{stat.number}</h2>
              <div className="stat-divider"></div>
              <p className="stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCount;
