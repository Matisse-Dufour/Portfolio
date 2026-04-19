import React from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '../data'

export default function HardSkills() {
  const { languages, frameworks, practices } = portfolioData.hardSkills

  const SkillCategory = ({ category }) => (
    <motion.div 
      className="skill-category"
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h3>{category.title}</h3>
      {category.skills.map((skill, index) => (
        <motion.div 
          key={index} 
          className="skill-item"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          viewport={{ once: true }}
        >
          <div className="skill-name">
            <span>{skill.name}</span>
            <span className="skill-level">{skill.level}</span>
          </div>
          <div className="skill-bar">
            <motion.div 
              className="skill-progress"
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.percentage}%` }}
              transition={{ duration: 1, delay: 0.2 + index * 0.05 }}
              viewport={{ once: true }}
            />
          </div>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-light)', marginTop: '0.25rem' }}>
            {skill.context}
          </p>
        </motion.div>
      ))}
    </motion.div>
  )

  return (
    <section id="skills">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Compétences Techniques (Hard Skills)
        </motion.h2>
        
        <div className="skills-grid">
          <SkillCategory category={languages} />
          <SkillCategory category={frameworks} />
          <SkillCategory category={practices} />
        </div>
      </div>
    </section>
  )
}


