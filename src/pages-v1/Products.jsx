import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import './Products.css';
import ltThyristorImg from '../assets/images/DP_LT THYRISTOR APFC PANEL 2.png';

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="products-page">
      <Helmet>
        <title>Industrial APFC Solutions | Engineering Catalog | Domain Powers</title>
        <meta name="description" content="Explore our technical range of LT/HT APFC panels, RTPFC solutions, and high-performance capacitor banks. Precision engineering for industrial power excellence." />
      </Helmet>

      {/* Hero Section */}
      <section className="page-hero" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url(${ltThyristorImg})` }}>
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Engineering Catalog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Advanced Power Quality & Reactive Power Compensation Solutions.
          </motion.p>
        </div>
      </section>

      {/* Product Grid Listing */}
      <section className="products-grid-listing">
        <div className="container">
          <div className="product-listing-grid">
            {products.map((product, index) => (
              <motion.div 
                key={product.id}
                className="product-grid-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/product/${product.id}`} className="card-inner">
                  <div className="product-card-img">
                    <img src={product.image} alt={product.name} />
                    <div className="card-badge">{product.category}</div>
                  </div>
                  <div className="product-card-info">
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <span className="view-link">Technical Deep-Dive →</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="products-cta">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2>Bespoke Engineering Solutions</h2>
            <p>Our experts specialized in custom site-specific design for optimized Power Factor (0.99) and Harmonic filtration.</p>
            <div className="cta-btns">
               <Link to="/contact" className="btn btn-primary">Schedule Site Audit</Link>
               <Link to="/contact" className="btn btn-outline-white">Technical Inquiry</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;
