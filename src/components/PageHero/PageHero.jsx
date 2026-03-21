'use client';
import React from 'react';
import { motion } from 'framer-motion';

const PageHero = ({ title, subtitle }) => (
  <section className="page-hero">
    <div className="container">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {title}
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {subtitle}
      </motion.p>
    </div>
  </section>
);

export default PageHero;
