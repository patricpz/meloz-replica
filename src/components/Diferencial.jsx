import { motion } from 'framer-motion'
import Section from './ui/Section'

export default function Diferencial() {
  return (
    <Section id="diferencial" bgColor="bg-white">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display text-5xl md:text-6xl font-bold text-darkText mb-6 leading-tight">
          Mais que desenvolvimento.<br />Construção de negócios digitais.
        </h2>
        <p className="text-xl text-lightText leading-relaxed">
          A Meloz combina tecnologia, experiência e infraestrutura financeira para criar soluções que geram crescimento real.
        </p>
      </motion.div>
    </Section>
  )
}
