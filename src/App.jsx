import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BannerDigitalBank from './components/BannerDigitalBank'
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
        <Hero />
        <BannerDigitalBank />
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
