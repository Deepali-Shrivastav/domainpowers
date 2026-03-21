'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaPhoneAlt, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { categorizedProducts, products } from '../../data/products';
const logo = "/assets/images/domain_powers.logo.png";
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const menuItems = [
    { name: 'Home', path: '/' },
    { 
      name: 'Products', 
      path: '/products',
      dropdown: true 
    },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link href="/" className="logo" onClick={closeMenu}>
          <img src={logo} alt="Domain Powers Logo" className="logo-img" />
        </Link>

        {/* Desktop Menu */}
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          {menuItems.map((item) => (
            <li 
              key={item.name} 
              className={item.dropdown ? 'dropdown-trigger' : ''}
              onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
              onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
            >
              <Link 
                href={item.path} 
                className={`${pathname === item.path ? 'active' : ''} ${item.dropdown ? 'has-dropdown' : ''}`}
                onClick={(e) => {
                  if (item.dropdown && window.innerWidth <= 992) {
                    e.preventDefault();
                    setActiveDropdown(activeDropdown === item.name ? null : item.name);
                  } else {
                    closeMenu();
                  }
                }}
              >
                {item.name} {item.dropdown && <FaChevronDown className={`dropdown-icon ${activeDropdown === item.name ? 'rotated' : ''}`} />}
              </Link>

              {item.dropdown && (
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div 
                      className="mega-dropdown"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <div className="dropdown-grid single-col">
                        <div className="dropdown-column">
                          <h4>APFC Solutions</h4>
                          <ul>
                            {products.map(product => (
                              <li key={product.id}>
                                <Link href={`/product/${product.id}`} onClick={closeMenu}>
                                  {product.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </li>
          ))}
          
          <li className="nav-cta-mobile">
            <a href="tel:+919960612396" className="btn btn-primary">
              <FaPhoneAlt /> +91 9960612396
            </a>
          </li>
        </ul>

        <div className="nav-right">
          <a href="tel:+919960612396" className="nav-cta btn btn-primary">
            <FaPhoneAlt /> +91 9960612396
          </a>
          
          <button className="mobile-menu-btn" onClick={toggleMenu} style={{ color: isScrolled ? 'var(--primary-black)' : 'white' }}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
