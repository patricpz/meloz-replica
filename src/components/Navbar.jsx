import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from './ui/Button'
import logoMeloz from '../assets/logo/h02.png'

const WHATSAPP = 'https://api.whatsapp.com/send?phone=5519996509154'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Cases de Sucesso', href: '#cases' },
    { label: 'Contato', href: '#contato' },
  ]

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  }

  const menuVariants = {
    closed: { opacity: 0, height: 0 },
    open: { opacity: 1, height: 'auto' },
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-lg py-md'
          : 'bg-white/95 backdrop-blur-md shadow-sm py-md md:bg-transparent md:backdrop-blur-none md:shadow-none md:py-lg'
      }`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          className="flex items-center gap-md font-display font-bold text-2xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            src={logoMeloz}
            alt="Meloz"
            className="h-10 md:h-12 transition-all duration-300"
          />
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2xl">
          {links.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary text-darkText`}
              whileHover={{ color: '#F20734' }}
            >
              {link.label}
            </motion.a>
          ))}
          <Button
            variant="primary"
            size="md"
            onClick={() => window.open(WHATSAPP, '_blank')}
          >
            Solicitar Proposta
          </Button>
        </nav>

        {/* Mobile Hamburger */}
        <motion.button
          className={`md:hidden flex flex-col gap-1 bg-transparent border-none cursor-pointer p-sm`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          whileTap={{ scale: 0.9 }}
        >
          <motion.span
            className={`block w-6 h-0.5 origin-center transition-colors ${
              scrolled ? 'bg-darkText' : 'bg-darkText md:bg-white'
            }`}
            animate={
              menuOpen
                ? { rotate: 45, y: 8 }
                : { rotate: 0, y: 0 }
            }
          />
          <motion.span
            className={`block w-6 h-0.5 origin-center transition-colors ${
              scrolled ? 'bg-darkText' : 'bg-darkText md:bg-white'
            }`}
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
          />
          <motion.span
            className={`block w-6 h-0.5 origin-center transition-colors ${
              scrolled ? 'bg-darkText' : 'bg-darkText md:bg-white'
            }`}
            animate={
              menuOpen
                ? { rotate: -45, y: -8 }
                : { rotate: 0, y: 0 }
            }
          />
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ duration: 0.3 }}
          >
            <div className="container flex flex-col gap-md py-lg">
              {links.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="text-darkText font-medium hover:text-primary transition-colors py-md border-b border-background last:border-b-0"
                  onClick={() => setMenuOpen(false)}
                  whileHover={{ paddingLeft: 8 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <Button
                variant="primary"
                size="md"
                className="w-full mt-md"
                onClick={() => {
                  window.open(WHATSAPP, '_blank')
                  setMenuOpen(false)
                }}
              >
                Solicitar Proposta
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
