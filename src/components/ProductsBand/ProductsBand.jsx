'use client';
import React from 'react';
import { categorizedProducts, products } from '../../data/products';
import { motion } from 'framer-motion';
import './ProductsBand.css';

const ProductsBand = () => {

  return (
    <section className="products-band section-dark">
      <div className="container">
        <div className="single-column-center">
          <motion.div 
            className="product-column"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3>APFC SOLUTIONS</h3>
            <div className="underline-left" style={{ margin: '20px auto' }}></div>
            <ul className="product-list horizontal-list">
              {products.map((product, index) => (
                <motion.li 
                  key={product.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {product.name}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductsBand;
