'use client';
import React from 'react';
import { motion } from 'framer-motion';
import './TechnicalSpecs.css';
import { FaMicrochip, FaShieldAlt, FaNetworkWired, FaTools } from 'react-icons/fa';

const TechnicalSpecs = () => {
  const specs = [
    {
      title: "Control & Monitoring",
      icon: <FaMicrochip />,
      features: ["Microprocessor Intelligent Relays", "RS-485 / MODBUS / GSM Comms", "Real-time Power Quality Monitoring"]
    },
    {
      title: "Switching Technologies",
      icon: <FaNetworkWired />,
      features: ["Thyristorized Switching (Zero Inrush)", "Vacuum / SF6 HT Contactors", "Capacitor-duty LT Contactors"]
    },
    {
      title: "Capacitor Technology",
      icon: <FaShieldAlt />,
      features: ["APP / MPP Self-healing Capacitors", "Detuned Reactors (5.67% / 7%)", "Harmonic Mitigation Systems"]
    },
    {
      title: "Enclosure & Safety",
      icon: <FaTools />,
      features: ["IP42 – IP55 Protection Ratings", "CPRI / IEC 61439 Compliance", "Compact Modular Design"]
    }
  ];

  return (
    <section className="tech-specs">
      <div className="container">
        <div className="section-title">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Technical Excellence
          </motion.h2>
          <div className="underline"></div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Precision components for maximum reliability and power factor optimization (PF 0.98–0.99).
          </motion.p>
        </div>
        <div className="grid-2">
          {specs.map((spec, index) => (
            <motion.div 
              key={index} 
              className="spec-item industrial-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="spec-header">
                <span className="spec-icon">{spec.icon}</span>
                <h3>{spec.title}</h3>
              </div>
              <ul className="spec-list">
                {spec.features.map((f, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (index * 0.1) + (i * 0.05) }}
                  >
                    <span>▹</span> {f}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecs;
