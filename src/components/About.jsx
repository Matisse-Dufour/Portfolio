import React from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '../data'

export default function About() {
  const { title, intro, bio, professionalIdentity, targetRole, shortTermGoals } = portfolioData.about

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="about">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>
        <div className="about-content">
          <motion.div 
            className="about-text"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 variants={itemVariants}>{intro}</motion.h3>
            {bio.map((paragraph, index) => (
              <motion.p key={index} variants={itemVariants}>{paragraph}</motion.p>
            ))}
          </motion.div>
          <motion.div 
            className="about-sidebar"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              variants={itemVariants}
              className="card"
              whileHover={{ y: -8 }}
            >
              <h4>Identité Professionnelle</h4>
              <p>{professionalIdentity}</p>
              
              <h4 style={{ marginTop: '1.5rem' }}>Poste Visé</h4>
              <p>{targetRole}</p>
              
              <h4 style={{ marginTop: '1.5rem' }}>Objectifs Court Terme</h4>
              <p>{shortTermGoals}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


