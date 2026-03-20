import React from 'react'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import Services from './components/Services'
import Skills from './components/Skills'
import Contact from './components/Contact'
import About from './components/About'
import Footer from './components/Footer'
const App = () => {
  return (
    <div>
      <NavBar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
