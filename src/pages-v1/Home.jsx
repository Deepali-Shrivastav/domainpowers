import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero/Hero';
import ProductsBand from '../components/ProductsBand/ProductsBand';
import KeyHighlights from '../components/KeyHighlights/KeyHighlights';
import About from '../components/About/About';
import StatsCount from '../components/Stats/StatsCount';
import OurProducts from '../components/OurProducts/OurProducts';
import OurServices from '../components/OurServices/OurServices';
import TechnicalSpecs from '../components/TechSpecs/TechnicalSpecs';
import ltContactorImg from '../assets/images/DP_LT CONTACTOR APFC PANEL.png';
import softStarterImg from '../assets/images/soft_starter.png';
import htIcogImg from '../assets/images/ht_icog.png';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const galleryItems = [
    { img: ltContactorImg, title: "LT Panel Installation" },
    { img: htIcogImg, title: "HT Panel Engineering" },
    { img: softStarterImg, title: "Power Quality Audit" }
  ];

  return (
    <>
      <Helmet>
        <title>Domain Powers – APFC Panel Manufacturer | LT & HT APFC Panels India</title>
        <meta name="description" content="Domain Powers is India's leading APFC Panel Manufacturer. Specialists in LT & HT APFC Panels, Hybrid APFC, and Power Quality improvement solutions. CPRI Approved." />
      </Helmet>
      
      <Hero />
      <ProductsBand />
      <div className="section-light">
        <KeyHighlights />
      </div>
      <About />
      <StatsCount />
      <OurProducts />
      <TechnicalSpecs />
      <div className="section-light">
        <OurServices />
      </div>
      
      {/* Short Gallery/Latest Work Preview */}
      <section className="gallery-preview section-light">
        <div className="container">
          <div className="section-title">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Latest Engineering Projects
            </motion.h2>
            <div className="underline"></div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              A snapshot of our specialized APFC installations and power management solutions across pan-India sites.
            </motion.p>
          </div>
          <div className="grid-3" style={{ marginBottom: '60px' }}>
            {galleryItems.map((item, index) => (
              <motion.div 
                key={index}
                className="industrial-card"
                style={{ padding: '0', height: '350px', overflow: 'hidden', border: 'none' }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div style={{ position: 'relative', height: '100%', width: '100%' }}>
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
                  />
                  <div style={{ 
                    position: 'absolute', 
                    bottom: '0', 
                    left: '0', 
                    width: '100%', 
                    padding: '20px', 
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)',
                    color: 'white'
                  }}>
                    <p style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>{item.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link to="/gallery" className="btn btn-outline">Explore Full Gallery</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
