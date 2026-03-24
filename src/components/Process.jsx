import { motion } from 'framer-motion'
import Section from './ui/Section'
import SectionTitle from './ui/SectionTitle'

const steps = [
  {
    number: '01',
    title: 'Remote Squad',
    description:
      'Time dedicado e multidisciplinar trabalhando remotamente com total transparência e comunicação constante.',
  },
  {
    number: '02',
    title: 'Backlog Definition',
    description:
      'Definimos e priorizamos todas as funcionalidades e requisitos do projeto de forma clara e objetiva.',
  },
  {
    number: '03',
    title: 'Sprints',
    description:
      'Ciclos de desenvolvimento curtos (1-2 semanas) com entregas contínuas e revisões periódicas.',
  },
  {
    number: '04',
    title: 'Sustentação',
    description:
      'Suporte contínuo após o lançamento, garantindo estabilidade, atualizações e melhorias constantes.',
  },
]

export default function Process() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <Section bgColor="bg-white">
      <SectionTitle
        subtitle="METODOLOGIA"
        title="Como conduzimos os projetos?"
        description="Nossa metodologia ágil garante entregas de qualidade com total visibilidade para o cliente em cada etapa."
      />

      <motion.div
        className="relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid md:grid-cols-4 gap-6 md:gap-4">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              className="relative"
              variants={itemVariants}
            >
              {/* Connector line (desktop only) */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-1 bg-gradient-to-r from-primary to-transparent" />
              )}

              {/* Card */}
              <div className="relative z-10 p-8 rounded-xl bg-gradient-to-br from-background to-background/50 border-2 border-primary/20 hover:border-primary transition-all duration-300 group text-center md:text-left">
                <motion.div
                  className="inline-flex md:flex items-center justify-center md:justify-start gap-4 mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg group-hover:blur-xl transition-all" />
                    <div className="relative w-16 h-16 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-display font-bold text-xl">
                      {step.number}
                    </div>
                  </div>
                </motion.div>

                <h3 className="font-display font-bold text-xl text-darkText mb-3">
                  {step.title}
                </h3>
                <p className="text-lightText text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  )
}
