'use client';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import PageHero from '../../components/PageHero/PageHero';

const ContactPage = () => {
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

export default ContactPage;
