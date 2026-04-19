import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin } from 'lucide-react'

export default function Contact() {

  return (
    <section id="contact">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Parlons Ensemble
        </motion.h2>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '3rem',
        }}>
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            style={{ maxWidth: '400px' }}
          >
            <div className="card">
              <div style={{ marginTop: '1.5rem' }}>
                <motion.a
                  whileHover={{ x: 10 }}
                  href="mailto:matisse.dufour2@gmail.com"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '1rem',
                    textDecoration: 'none',
                    color: 'var(--text)',
                    fontWeight: '500',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Mail size={20} color="var(--primary)" />
                  matisse.dufour2@gmail.com
                </motion.a>

                <motion.a
                  whileHover={{ x: 10 }}
                  href="https://github.com/Matisse-Dufour"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '1rem',
                    textDecoration: 'none',
                    color: 'var(--text)',
                    fontWeight: '500',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Github size={20} color="var(--secondary)" />
                  GitHub
                </motion.a>

                <motion.a
                  whileHover={{ x: 10 }}
                  href="https://www.linkedin.com/in/matisse-dufour-1390852b1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    textDecoration: 'none',
                    color: 'var(--text)',
                    fontWeight: '500',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Linkedin size={20} color="var(--accent)" />
                  LinkedIn
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

