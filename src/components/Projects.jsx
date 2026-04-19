import React from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '../data'

export default function Projects() {
  const projects = portfolioData.projects

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
    <section id="projects">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Projets Significatifs
        </motion.h2>
        
        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -12 }}
            >
              <div className="project-header">
                <h3>{project.title}</h3>
              </div>
              <div className="project-description">
                <p>{project.description}</p>
                
                <h4 style={{ marginTop: '1rem', marginBottom: '0.5rem', color: 'var(--accent)' }}>
                  Réalisations
                </h4>
                <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                  {project.achievements.map((achievement, i) => (
                    <li key={i} style={{ paddingLeft: '1.5rem', position: 'relative', marginBottom: '0.5rem' }}>
                      <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>✓</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
                
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


