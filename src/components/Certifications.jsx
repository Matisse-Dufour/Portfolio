import React from 'react'
import { motion } from 'framer-motion'
import { Award, Users, Zap } from 'lucide-react'

const certifications = [
  {
    title: 'BUT Informatique 3ème année',
    issuer: 'IUT de Lille',
    date: '2026 (En cours)',
    icon: Award,
    color: 'var(--primary)',
  },
  {
    title: "Diplôme d'ingénieur informatique",
    issuer: 'IMT Nord Europe - Lille',
    date: '2026 (Prochainement 🤞)',
    icon: Zap,
    color: 'var(--secondary)',
  },
]

export default function Certifications() {
  return (
    <section>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Formations
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
              },
            },
          }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
          }}
        >
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                whileHover={{ y: -8 }}
                className="card"
              >
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <div style={{
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '50%',
                    background: `${cert.color}20`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '1rem',
                  }}>
                    <IconComponent size={24} color={cert.color} />
                  </div>
                  <h3 style={{ margin: 0 }}>{cert.title}</h3>
                </div>
                <p style={{ color: cert.color, fontWeight: '600', marginBottom: '0.5rem' }}>
                  {cert.issuer}
                </p>
                <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>
                  {cert.date}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

