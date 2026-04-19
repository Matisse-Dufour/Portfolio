import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const timelineEvents = [
  {
    date: 'Avril 2025 - Août 2025',
    title: 'Stage chez Vallourec',
    description: "Proposition d'alternance reçue après un stage réussi",
    color: 'var(--secondary)',
  },
  {
    date: 'Août 2025',
    title: 'Début de mon alternance chez Vallourec',
    description: "Découverte de mes missions et intégration dans l'équipe",
    color: 'var(--primary)',
  },
  {
    date: 'Décembre 2025',
    title: 'Premier résultat',
    description: "Application de mesures d'épaisseur de revêtement à l'aide de machine learning mise en production",
    color: 'var(--accent)',
  },
  {
    date: 'Janvier 2026',
    title: 'Expansion des Responsabilités',
    description: 'Prise en charge de nouveaux projets et mentoring',
    color: 'var(--primary)',
  },
  {
    date: 'Mars 2026',
    title: 'Amélioration Process',
    description: 'Implémentation d\'optimisations significatives sur beaucoup d\'applications',
    color: 'var(--secondary)',
  },
  {
    date: 'Avril 2026',
    title: 'Portfolio & Réflexion',
    description: 'Création du portfolio et analyse des apprentissages',
    color: 'var(--accent)',
  },
]

export default function Timeline() {
  return (
    <section id="timeline">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Timeline de Mon Parcours
        </motion.h2>

        <div style={{
          position: 'relative',
          paddingTop: '2rem',
          paddingBottom: '2rem',
        }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '2px',
            height: '100%',
            background: 'linear-gradient(180deg, var(--primary), var(--secondary), var(--accent))',
            top: 0,
          }} />

          {/* Timeline items */}
          <div style={{ position: 'relative' }}>
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{
                  display: 'flex',
                  marginBottom: '3rem',
                  alignItems: 'center',
                  justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
                }}
              >
                {/* Content */}
                <div style={{
                  width: 'calc(50% - 2rem)',
                  textAlign: index % 2 === 0 ? 'right' : 'left',
                }}>
                  {index % 2 === 0 ? (
                    <div className="card" style={{
                      borderLeft: `4px solid ${event.color}`,
                      animation: 'fadeInUp 0.6s ease-out forwards',
                    }}>
                      <p style={{ color: event.color, fontWeight: 'bold', fontSize: '0.9rem' }}>
                        {event.date}
                      </p>
                      <h3 style={{ margin: '0.5rem 0' }}>{event.title}</h3>
                      <p style={{ color: 'var(--text-light)' }}>{event.description}</p>
                    </div>
                  ) : null}
                </div>

                {/* Dot */}
                <div style={{
                  width: '4rem',
                  display: 'flex',
                  justifyContent: 'center',
                  zIndex: 10,
                }}>
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    style={{
                      width: '2rem',
                      height: '2rem',
                      background: event.color,
                      borderRadius: '50%',
                      border: '3px solid var(--bg)',
                      cursor: 'pointer',
                    }}
                  />
                </div>

                {/* Content */}
                <div style={{
                  width: 'calc(50% - 2rem)',
                  textAlign: index % 2 === 0 ? 'left' : 'right',
                }}>
                  {index % 2 !== 0 ? (
                    <div className="card" style={{
                      borderLeft: `4px solid ${event.color}`,
                      animation: 'fadeInUp 0.6s ease-out forwards',
                    }}>
                      <p style={{ color: event.color, fontWeight: 'bold', fontSize: '0.9rem' }}>
                        {event.date}
                      </p>
                      <h3 style={{ margin: '0.5rem 0' }}>{event.title}</h3>
                      <p style={{ color: 'var(--text-light)' }}>{event.description}</p>
                    </div>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

