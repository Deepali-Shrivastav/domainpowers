import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import OurServices from '../components/OurServices/OurServices';
import TechnicalSpecs from '../components/TechSpecs/TechnicalSpecs';

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

export const ServicesPage = () => {
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

export const GalleryPage = () => {
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

export const ContactPage = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <div className="contact-page">
      <PageHero title="Contact Our Experts" subtitle="Get technical support or a customized quote for your industrial needs." />
      <section style={{ padding: '100px 0', background: 'var(--off-white)' }}>
        <div className="container">
          <div className="grid-2">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              style={{ padding: '60px', background: 'white', borderRadius: '8px', boxShadow: '0 30px 60px rgba(0,0,0,0.05)' }}
            >
              <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '10px' }}>Send Enquery</h3>
              <p style={{ color: '#666', marginBottom: '40px' }}>Fill out the form below for a rapid response from our technical team.</p>
              <form onSubmit={e => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <input type="text" placeholder="Full Name" style={{ padding: '18px', borderRadius: '4px', border: '1px solid #eee', background: '#fafafa' }} />
                <input type="email" placeholder="Email Address" style={{ padding: '18px', borderRadius: '4px', border: '1px solid #eee', background: '#fafafa' }} />
                <input type="text" placeholder="Company Name" style={{ padding: '18px', borderRadius: '4px', border: '1px solid #eee', background: '#fafafa' }} />
                <textarea placeholder="Tell us about your requirements" rows="6" style={{ padding: '18px', borderRadius: '4px', border: '1px solid #eee', background: '#fafafa' }}></textarea>
                <button className="btn btn-primary" style={{ padding: '20px' }}>Submit Request</button>
              </form>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              style={{ padding: '60px' }}
            >
              <div style={{ marginBottom: '40px' }}>
                <h4 style={{ color: 'var(--primary-red)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem', marginBottom: '15px' }}>Headquarters</h4>
                <p style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--primary-black)', lineHeight: 1.4 }}>
                  Gat No. 123, Spine Road,<br />
                  Chikhali, Pune - 411062,<br />
                  Maharashtra, India
                </p>
              </div>
              
              <div style={{ marginBottom: '40px' }}>
                <h4 style={{ color: 'var(--primary-red)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem', marginBottom: '15px' }}>Direct Support</h4>
                <p style={{ fontSize: '1.2rem', fontWeight: 600 }}>Phone: +91 9960612396</p>
                <p style={{ fontSize: '1.2rem', fontWeight: 600 }}>Email: contact@domainpowers.com</p>
              </div>
              
              <div style={{ padding: '30px', background: 'var(--primary-black)', color: 'white', borderRadius: '8px' }}>
                <h4 style={{ color: 'var(--primary-red)', marginBottom: '15px' }}>Service Hours</h4>
                <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                <p>Emergency Support: 24 / 7 Available</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

