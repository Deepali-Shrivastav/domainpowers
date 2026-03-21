'use client';
import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
const apfcImg = "/assets/images/APFC_PANEL.png";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="grid-2 align-center">
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="image-frame">
              <img src={apfcImg} alt="Industrial Panel" />
              <div className="exp-badge">
                <span className="years">25+</span>
                <span className="text">Years of Engineering Excellence</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="section-title-left">
              <h2>Get To Know Us</h2>
              <div className="underline-left"></div>
            </div>
            <p className="main-desc">
              Domain Powers is one of India’s emerging leaders in the field of power factor correction and energy management, 
              specializing in LT and HT APFC Panels engineered for industrial reliability and performance.
            </p>
            <p>
              Our expertise lies in designing and manufacturing Automatic Power Factor Correction (APFC) Panels for both low-tension (LT - 415V) and high-tension (HT - 11kV to 36kV) applications. 
              Each system is built using microprocessor-based intelligent relays (RS-485/MODBUS), self-healing capacitor banks, and advanced protection circuits.
            </p>
            <p>
              Driven by innovation and backed by deep industry knowledge, Domain Powers offers custom-engineered APFC solutions designed to maintain unity power factor (PF 0.98–0.99), 
              reduce demand charges, and eliminate utility penalties.
            </p>
            <div className="about-features">
              {[
                "CPRI / IEC 61439 Approved",
                "Make in India (Class-I Supplier)",
                "5200+ Projects Completed",
                "PAN-India Service Network"
              ].map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="feature-item"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <span className="check">✓</span> {feature}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
