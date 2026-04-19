import React from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '../data'

export default function SoftSkills() {
  const softSkills = portfolioData.softSkills

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
          Compétences Comportementales (Soft Skills)
        </motion.h2>
        
        {softSkills.map((skillGroup, groupIndex) => (
          <div key={groupIndex}>
            <motion.h3 
              style={{ marginTop: '2rem', marginBottom: '1.5rem', color: 'var(--primary)' }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {skillGroup.category}
            </motion.h3>
            
            <motion.div
              className="softskills-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skillGroup.skills.map((skill, skillIndex) => (
                <motion.div 
                  key={skillIndex} 
                  className="softskill-card"
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                >
                  <h3>{skill.title}</h3>
                  <p>{skill.description}</p>
                  <div className="context">
                    <strong>Contexte professionnel :</strong><br />
                    {skill.context}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}


