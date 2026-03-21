'use client';
import React from 'react';
import Slider from 'react-slick';
import Link from 'next/link';
import { motion } from 'framer-motion';
import './Hero.css';

const hero1 = "/assets/images/hero1.png";
const hero2 = "/assets/images/hero2.jpg";
const hero3 = "/assets/images/hero3.png";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    fade: true,
    pauseOnHover: false
  };

  const slides = [
    {
      id: 1,
      title: "India's Leading APFC Panel Manufacturer",
      subtitle: "Precision-engineered LT & HT power factor correction solutions designed for industrial excellence.",
      cta: "Explore Our Range",
      link: "/products",
      bg: hero1
    },
    {
      id: 2,
      title: "Optimization Through Precision",
      subtitle: "Smart power quality monitoring and zero-inrush reactive power management systems.",
      cta: "Technical Consultancy",
      link: "/contact",
      bg: hero2
    },
    {
      id: 3,
      title: "Engineers For A Better Future",
      subtitle: "CPRI Approved & ISO 9001:2015 Certified manufacturing excellence with 25+ years of experience.",
      cta: "Contact Our Experts",
      link: "/contact",
      bg: hero3
    }
  ];

  return (
    <div className="hero">
      <Slider {...settings}>
        {slides.map(slide => (
          <div key={slide.id} className="slide-item">
            <div className="scanline"></div>
            <div className="overlay"></div>
            <div className="slide-bg" style={{ backgroundImage: `url("${slide.bg}")` }}></div>
            <div className="container slide-content">
              <motion.div 
                className="text-content"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.5, duration: 0.8 }}
                >
                  {slide.subtitle}
                </motion.p>
                <motion.div 
                  className="hero-btns"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  <Link href={slide.link} className="btn btn-primary">{slide.cta}</Link>
                  <Link href="/contact" className="btn btn-outline-white">Consult Experts</Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Experience Badge from PDF */}
      <motion.div 
        className="experience-badge-floating"
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 1, duration: 1, type: "spring" }}
      >
        <div className="badge-content">
          <span className="number">25</span>
          <div className="badge-text">
            <p>Years of Trust</p>
            <p>& Experience</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
