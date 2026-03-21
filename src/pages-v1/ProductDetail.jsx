import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { products } from '../data/products';
import { FaCheckCircle, FaQuestionCircle, FaIndustry, FaDownload, FaEnvelope } from 'react-icons/fa';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="container" style={{ padding: '200px 0', textAlign: 'center' }}>
        <h2>Product not found</h2>
        <Link to="/products" className="btn btn-primary" style={{ marginTop: '20px' }}>Back to Products</Link>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="product-detail-page">
      <Helmet>
        <title>{product.name} | {product.fullName} | Domain Powers</title>
        <meta name="description" content={product.description} />
      </Helmet>

      {/* Hero Section */}
      <section className="product-hero">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero-content"
          >
            <span className="category-badge">{product.category}</span>
            <h1>{product.name}</h1>
            <p className="full-name">{product.fullName}</p>
          </motion.div>
        </div>
      </section>

      <section className="product-main-content">
        <div className="container">
          <div className="product-grid">
            {/* Left side: Image & Quick Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="product-visuals"
            >
              <div className="sticky-box">
                <div className="product-image-container">
                  {product.image ? (
                    <img src={product.image} alt={product.name} />
                  ) : (
                    <div className="image-placeholder">
                      <FaIndustry size={60} />
                      <p>Technical Image Coming Soon</p>
                    </div>
                  )}
                </div>
                <div className="quick-actions">
                  <button className="btn btn-primary w-full">
                    <FaDownload /> Download Data Sheet
                  </button>
                  <button className="btn btn-outline w-full">
                    <FaEnvelope /> Request Technical Quote
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Right side: Detailed Specs */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="product-info"
            >
              <motion.div variants={itemVariants} className="info-section">
                <h3>Product Overview</h3>
                <div className="underline-left"></div>
                <p className="description-text">{product.fullDescription}</p>
              </motion.div>

              <motion.div variants={itemVariants} className="info-section">
                <h3>Key Features</h3>
                <div className="underline-left"></div>
                <ul className="features-list">
                  {product.keyFeatures.map((feature, index) => (
                    <li key={index}><FaCheckCircle className="icon" /> {feature}</li>
                  ))}
                </ul>
              </motion.div>

              {product.technicalHighlights && (
                <motion.div variants={itemVariants} className="info-section technical-specs">
                  <h3>Technical Highlights</h3>
                  <div className="underline-left"></div>
                  <div className="specs-table">
                    {product.technicalHighlights.map((highlight, index) => (
                      <div key={index} className="spec-row">
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits & Applications */}
      <section className="benefits-applications">
        <div className="container">
          <div className="grid-2">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-dark"
            >
              <h3>Product Benefits</h3>
              <div className="underline-left"></div>
              <ul className="benefit-items">
                {product.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card-light"
            >
              <h3>Industrial Applications</h3>
              <div className="underline-left"></div>
              <div className="app-grid">
                {product.applications.map((app, index) => (
                  <div key={index} className="app-item">
                    <FaIndustry className="icon" />
                    <span>{app}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      {product.faqs && (
        <section className="product-faqs">
          <div className="container">
            <div className="section-title text-center">
              <h2>Technical FAQs</h2>
              <div className="underline"></div>
            </div>
            <div className="faq-grid">
              {product.faqs.map((faq, index) => (
                <motion.div 
                  key={index} 
                  className="faq-item"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <h4><FaQuestionCircle className="icon" /> {faq.q}</h4>
                  <p>{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="product-cta-final">
        <div className="container">
          <div className="cta-box">
            <h2>Ready to Optimize your Power Quality?</h2>
            <p>Consult with our engineers to find the ideal {product.name} configuration for your load profile.</p>
            <Link to="/contact" className="btn btn-primary">Get Consultation</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
