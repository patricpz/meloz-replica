import { motion } from 'framer-motion'
import Section from './ui/Section'

export default function Differentials() {
  const differentials = [
    'Experiência em produtos digitais',
    'Visão de negócio',
    'Soluções escaláveis',
    'Experiência financeira',
    'Desenvolvimento sob medida',
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
    },
  }

  return (
    <Section id="diferenciais" bgColor="bg-gradient-to-r from-background to-white">
      <motion.div
        className="max-w-2xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="space-y-4" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {differentials.map((diff, idx) => (
            <motion.div
              key={idx}
              className="flex items-center gap-4 p-4 rounded-lg bg-white shadow-lg hover:shadow-xl border border-transparent hover:border-primary/30 transition-all duration-300 group"
              variants={itemVariants}
              whileHover={{ paddingLeft: 24 }}
            >
              <span className="text-2xl text-primary font-bold">→</span>
              <span className="text-lg font-medium text-darkText group-hover:text-primary transition-colors">
                {diff}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  )
}
