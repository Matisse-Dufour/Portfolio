import React from 'react'
import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const skillsData = [
  { name: 'Python', level: 90 },
  { name: 'C#', level: 80 },
  { name: 'React', level: 70 },
  { name: 'SQL', level: 75 },
  { name: 'Gitlab', level: 85 },
]


export default function Achievements() {
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
          Réalisations & Progression
        </motion.h2>

        {/* Stats */}
        <motion.div
          className="achievements-stats"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem',
          }}
        >
          <motion.div variants={itemVariants} className="stat-card">
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--primary)' }}>9+</div>
            <p style={{ fontSize: '1rem', color: 'var(--text-light)' }}>Mois d'alternance</p>
          </motion.div>
          <motion.div variants={itemVariants} className="stat-card">
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--secondary)' }}>15+</div>
            <p style={{ fontSize: '1rem', color: 'var(--text-light)' }}>Compétences maîtrisées</p>
          </motion.div>
          <motion.div variants={itemVariants} className="stat-card">
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--accent)' }}>5+</div>
            <p style={{ fontSize: '1rem', color: 'var(--text-light)' }}>Projets livrés</p>
          </motion.div>
          <motion.div variants={itemVariants} className="stat-card">
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#8b5cf6' }}>100%</div>
            <p style={{ fontSize: '1rem', color: 'var(--text-light)' }}>Engagement</p>
          </motion.div>
        </motion.div>

        {/* Charts */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            marginBottom: '3rem',
          }}
        >
          <div className="card" style={{ padding: '2rem' }}>
            <h3>Niveau de Maîtrise par Technologie</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={skillsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="name" stroke="var(--text-light)" />
                <YAxis stroke="var(--text-light)" />
                <Tooltip
                  contentStyle={{ background: 'var(--bg-light)', border: '1px solid var(--border)' }}
                  cursor={{ fill: 'rgba(37, 99, 235, 0.1)' }}
                />
                <Bar dataKey="level" fill="var(--primary)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Highlights */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
          }}
        >
          <motion.div variants={itemVariants} className="card" style={{ borderLeft: '4px solid var(--primary)' }}>
            <h3>Performance</h3>
            <p>Livraison de tous les projets dans les délais avec une qualité élevée</p>
          </motion.div>
          <motion.div variants={itemVariants} className="card" style={{ borderLeft: '4px solid var(--secondary)' }}>
            <h3>Innovations</h3>
            <p>Proposition et implémentation de 3+ améliorations de processus</p>
          </motion.div>
          <motion.div variants={itemVariants} className="card" style={{ borderLeft: '4px solid var(--accent)' }}>
            <h3>Collaboration</h3>
            <p>Travail efficace en équipe avec excellentes retours de collègues</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

