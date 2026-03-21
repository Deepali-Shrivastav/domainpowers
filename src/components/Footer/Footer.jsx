import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
const logo = "/assets/images/domain_powers.logo.png";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col about-col">
            <Link href="/" className="footer-logo">
              <img src={logo} alt="Domain Powers" style={{ height: '60px', width: 'auto', marginBottom: '20px' }} />
            </Link>
            <p className="footer-desc">
              India's specialized leader in power factor correction and harmonic filtration since 1996. 
              Delivering high-performance LT & HT engineering solutions.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon"><FaFacebookF /></a>
              <a href="#" className="social-icon"><FaTwitter /></a>
              <a href="#" className="social-icon"><FaLinkedinIn /></a>
              <a href="#" className="social-icon"><FaYoutube /></a>
            </div>
          </div>

          <div className="footer-col">
            <h3>Our Solutions</h3>
            <ul className="footer-links">
              <li><Link href="/products#1">LT APFC Panels</Link></li>
              <li><Link href="/products#3">HT APFC Panels</Link></li>
              <li><Link href="/products#4">Hybrid Systems</Link></li>
              <li><Link href="/products#8">Motor Starters</Link></li>
              <li><Link href="/products#5">Distribution Centers</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Company</h3>
            <ul className="footer-links">
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Quote Request</Link></li>
              <li><Link href="/contact">Site Visit</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Contact Support</h3>
            <ul className="contact-list">
              <li>
                <FaMapMarkerAlt className="c-icon" />
                <span>Chikhali, Pune, Maharashtra, India</span>
              </li>
              <li>
                <FaPhoneAlt className="c-icon" />
                <a href="tel:+919960612396">+91 9960612396</a>
              </li>
              <li>
                <FaEnvelope className="c-icon" />
                <a href="mailto:contact@domainpowers.com">contact@domainpowers.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Domain Powers. Engineering Excellence. | CPRI Approved | ISO 9001:2015</p>
          <div className="bottom-links">
            <a href="#">Security Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
