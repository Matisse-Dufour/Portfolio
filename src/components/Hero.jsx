import React from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '../data'

export default function Hero() {
  const { title, subtitle, tagline } = portfolioData.hero

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section className="hero">
      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 
          variants={itemVariants}
          style={{ animation: 'fadeInUp 0.8s ease-out' }}
        >
          {title}
        </motion.h2>
        <motion.p 
          className="hero-subtitle"
          variants={itemVariants}
          style={{ animation: 'fadeInUp 0.8s ease-out 0.2s both' }}
        >
          {subtitle}
        </motion.p>
        <motion.p 
          variants={itemVariants}
          style={{ animation: 'fadeInUp 0.8s ease-out 0.4s both' }}
        >
          {tagline}
        </motion.p>
        <motion.div 
          className="cta-buttons"
          variants={itemVariants}
          style={{ animation: 'fadeInUp 0.8s ease-out 0.6s both' }}
        >
          <motion.button 
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Voir mon expérience
          </motion.button>
          <motion.button 
            className="btn btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Télécharger CV
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}


