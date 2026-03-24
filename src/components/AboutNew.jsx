import { motion } from 'framer-motion'
import Section from './ui/Section'
import SectionTitle from './ui/SectionTitle'

export default function AboutNew() {
  const highlights = [
    { label: '+15 projetos', value: '15+' },
    { label: '+4 anos de mercado', value: '4+' },
    { label: 'Experiência em banco digital', value: '✓' },
    { label: 'Time com +10 anos', value: '10+' },
  ]

  const segments = [
    'Financeiro',
    'Saúde',
    'Educação',
    'Logística',
    'TI',
  ]

  const highlightVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <Section id="sobre" bgColor="bg-gradient-to-b from-white to-background">
      <SectionTitle
        subtitle="SOBRE MELOZ"
        title="Tecnologia para empresas em crescimento"
        description="Empresa especializada em soluções digitais e infraestrutura financeira com mais de 4 anos de experiência"
      />

      {/* Highlights Grid */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {highlights.map((item, idx) => (
          <motion.div
            key={idx}
            className="relative p-6 md:p-8 rounded-xl bg-white shadow-lg border border-primary/10 hover:border-primary/30 transition-all duration-300"
            variants={highlightVariants}
            whileHover={{ translateY: -4, boxShadow: '0 20px 25px rgb(242, 7, 52, 0.1)' }}
          >
            <motion.div
              className="text-3xl md:text-4xl font-bold text-primary mb-2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {item.value}
            </motion.div>
            <p className="text-lightText text-sm font-medium">{item.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Segments */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-lightText font-medium mb-6">Experiência em múltiplos segmentos:</p>
        <motion.div
          className="flex flex-wrap justify-center gap-3 md:gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {segments.map((segment) => (
            <motion.span
              key={segment}
              className="px-6 py-3 bg-primary/10 text-primary rounded-full font-medium text-sm md:text-base border border-primary/20 hover:border-primary hover:bg-primary/20 transition-all duration-300"
              variants={highlightVariants}
              whileHover={{ scale: 1.05 }}
            >
              {segment}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  )
}
