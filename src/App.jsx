import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import HardSkills from './components/HardSkills'
import SoftSkills from './components/SoftSkills'
import SelfAwareness from './components/SelfAwareness'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Timeline from './components/Timeline'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

export const ThemeContext = React.createContext()

function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
             window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false
  })

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark-mode')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark-mode')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <div className="App">
        <Header />
        <Hero />
        <main className="container">
          <About />
          <Timeline />
          <Experience />
          <HardSkills />
          <Achievements />
          <SoftSkills />
          <SelfAwareness />
          <Projects />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  )
}

export default App


