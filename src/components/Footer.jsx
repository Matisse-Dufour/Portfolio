import React from 'react'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <motion.div 
        className="footer-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="footer-socials">
          <motion.a 
            href="https://github.com/Matisse-Dufour"
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            GitHub
          </motion.a>
          <motion.a 
            href="https://www.linkedin.com/in/matisse-dufour-1390852b1/"
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            LinkedIn
          </motion.a>
          <motion.a 
            href="mailto:matisse.dufour2@gmail.com"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            Email
          </motion.a>
        </div>
        <p>&copy; {currentYear} Matisse Dufour. Portfolio personnel - BUT3 Informatique</p>
      </motion.div>
    </footer>
  )
}


