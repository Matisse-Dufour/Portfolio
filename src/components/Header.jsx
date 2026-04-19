import React, { useContext } from 'react'
import { Moon, Sun, Menu } from 'lucide-react'
import { ThemeContext } from '../App'

export default function Header() {
  const { isDark, setIsDark } = useContext(ThemeContext)
  const [isOpen, setIsOpen] = React.useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <header>
      <nav>
        <h1>Matisse Dufour</h1>
        <ul className="nav-menu" style={{ display: isOpen ? 'flex' : 'flex' }}>
          <li><a onClick={() => scrollToSection('#about')}>À Propos</a></li>
          <li><a onClick={() => scrollToSection('#timeline')}>Timeline</a></li>
          <li><a onClick={() => scrollToSection('#experience')}>Expérience</a></li>
          <li><a onClick={() => scrollToSection('#skills')}>Compétences</a></li>
          <li><a onClick={() => scrollToSection('#projects')}>Projets</a></li>
          <li><a onClick={() => scrollToSection('#contact')}>Contact</a></li>
        </ul>
        <button 
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            color: 'var(--text)',
            transition: 'all 0.3s ease'
          }}
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </nav>
    </header>
  )
}


