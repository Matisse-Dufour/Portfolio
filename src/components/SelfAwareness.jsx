import React from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '../data'

export default function SelfAwareness() {
  const { strengths, improvements, growth, needsForEvolution } = portfolioData.selfAwareness

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <section>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Analyse Réflexive : Connaissance et Conscience de Soi
        </motion.h2>
        
        <motion.p 
          style={{ fontSize: '1.1rem', marginBottom: '2rem', color: 'var(--text-light)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Cette section synthétise mes apprentissages professionnels, mes points forts, mes axes d'amélioration et mes besoins pour continuer à évoluer.
        </motion.p>

        <motion.div
          className="self-aware-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="self-aware-card strengths"
            variants={itemVariants}
            whileHover={{ y: -8 }}
          >
            <h3>Mes Points Forts</h3>
            <ul className="self-aware-list">
              {strengths.map((strength, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  {strength}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="self-aware-card improvements"
            variants={itemVariants}
            whileHover={{ y: -8 }}
          >
            <h3>Axes d'Amélioration</h3>
            <ul className="self-aware-list">
              {improvements.map((improvement, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  {improvement}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="self-aware-card growth"
            variants={itemVariants}
            whileHover={{ y: -8 }}
          >
            <h3>Apprentissages & Découvertes</h3>
            <ul className="self-aware-list">
              {growth.map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div 
          className="card" 
          style={{ marginTop: '2rem', background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(245, 158, 11, 0.1) 100%)', borderLeft: '4px solid var(--primary)' }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3>Besoins pour Continuer à Évoluer</h3>
          <ul className="self-aware-list">
            {needsForEvolution.map((need, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                viewport={{ once: true }}
              >
                {need}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}


