import React from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '../data'

export default function Experience() {
  const experiences = portfolioData.experience

  return (
    <section id="experience">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Expérience Professionnelle
        </motion.h2>
        
        {experiences.map((exp, index) => (
          <motion.div 
            key={index} 
            className="experience-item"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="experience-header">
              <h3>{exp.title}</h3>
              <span className="experience-date">{exp.startDate} - {exp.endDate}</span>
            </div>
            
            <p className="experience-company">{exp.company} • {exp.location}</p>
            
            <h4>Contexte</h4>
            <p>{exp.context}</p>
            
            <h4>Missions Principales</h4>
            <ul className="mission-list">
              {exp.missions.map((mission, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  viewport={{ once: true }}
                >
                  {mission}
                </motion.li>
              ))}
            </ul>
            
            <h4>Autonomie</h4>
            <p>{exp.autonomy}</p>
            
            <h4>Interactions Professionnelles</h4>
            <p>{exp.teamInteraction}</p>
            
            <h4>Technologies Utilisées</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
              {exp.technologiesUsed.map((tech, i) => (
                <motion.span 
                  key={i} 
                  className="tech-tag"
                  whileHover={{ scale: 1.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
            
            <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid var(--border)' }} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}


