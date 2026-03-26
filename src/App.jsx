import Navbar from './components/Navbar'
import Home from './components/Home'
import WhatWeDo from './components/WhatWeDo'
import Solutions from './components/Solutions'
import Projects from './components/Projects'
import Diferencial from './components/Diferencial'
import FinalCTA from './components/FinalCTA'
import AboutNew from './components/AboutNew'
import Differentials from './components/Differentials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <WhatWeDo />
        <Solutions />
        <Projects />
        <Diferencial />
        <FinalCTA />
        <AboutNew />
        <Differentials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
