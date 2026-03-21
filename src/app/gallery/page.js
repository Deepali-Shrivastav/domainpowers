'use client';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import PageHero from '../../components/PageHero/PageHero';

const GalleryPage = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  const images = [
    "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1498084393753-b411ce9470b3?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1558441331-2445c23f65e5?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1534394416979-994191632731?auto=format&fit=crop&q=80&w=800"
  ];

  return (
    <div className="gallery-page">
      <PageHero title="Project Gallery" subtitle="A showcase of our world-class industrial installations across India." />
      <section style={{ padding: '100px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' }}>
            {images.map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', cursor: 'pointer' }}
              >
                <img src={img} alt={`Work ${idx}`} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
