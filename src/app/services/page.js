'use client';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import OurServices from '../../components/OurServices/OurServices';
import TechnicalSpecs from '../../components/TechSpecs/TechnicalSpecs';
import PageHero from '../../components/PageHero/PageHero';

const ServicesPage = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <div className="services-page">
      <PageHero 
        title="Industrial Services" 
        subtitle="End-to-end power quality consultancy, installation, and maintenance services based on 25+ years of expertise." 
      />
      <OurServices />
      <TechnicalSpecs />
      
      <section style={{ padding: '100px 0', background: 'white' }}>
        <div className="container">
          <div className="grid-2 align-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary-black)', marginBottom: '20px' }}>Site Audit & Consultancy</h2>
              <div className="underline-left"></div>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
                We provide professional on-site audits to measure harmonic distortion, power factor fluctuations, and load profiles. 
                Our experts analyze the data to design a custom APFC solution that guarantees maximum efficiency and ROI.
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['Harmonic Analysis', 'Load Study & Optimization', 'Return on Investment (ROI) Projection', 'System Health Checks'].map(item => (
                   <li key={item} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 600 }}>
                     <span style={{ color: 'var(--primary-red)' }}>✓</span> {item}
                   </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }}
            >
              <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" alt="Audit" style={{ width: '100%', display: 'block' }} />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
