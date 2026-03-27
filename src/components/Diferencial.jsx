import { motion } from 'framer-motion'
import bannerDiferencial from '../assets/Banner 2.jpg'

export default function Diferencial() {
  return (
    <motion.section
      id="diferencial"
      className="w-full relative overflow-hidden py-3xl px-md md:px-lg lg:px-2xl"
      style={{
        backgroundImage: `url(${bannerDiferencial})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Overlay para legibilidade */}
      <div className="absolute inset-0 bg-white/85 backdrop-blur-sm" style={{ zIndex: 1 }} />

      {/* Content */}
      <div className="container relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold text-darkText mb-4 md:mb-6 leading-tight">
            <span className="block">Mais que desenvolvimento.</span>
            <span className="block">Construção de negócios digitais.</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-lightText leading-relaxed">
            A Meloz combina tecnologia, experiência e infraestrutura financeira para criar soluções que geram crescimento real.
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}
