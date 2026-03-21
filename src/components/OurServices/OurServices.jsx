'use client';
import React from 'react';
import { services } from '../../data/services';
import { motion } from 'framer-motion';
import './OurServices.css';
import { FaSearchPlus, FaChargingStation, FaChartLine, FaBolt } from 'react-icons/fa';

const iconMap = {
  FaSearchPlus: <FaSearchPlus />,
  FaChargingStation: <FaChargingStation />,
  FaChartLine: <FaChartLine />,
  FaBolt: <FaBolt />
};

const OurServices = () => {
  return (
    <section className="our-services">
      <div className="container">
        <div className="section-title">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>
          <div className="underline"></div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Comprehensive power quality and energy management consulting with over 25 years of field expertise.
          </motion.p>
        </div>
        <div className="grid-4">
          {services.map((service, index) => (
            <motion.div 
              key={service.id} 
              className="service-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <div className="service-icon">{iconMap[service.icon]}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
