import { motion } from 'framer-motion'
import Section from './ui/Section'
import SectionTitle from './ui/SectionTitle'

const testimonials = [
  {
    quote:
      'Meloz é um excelente software house, comunica com frequência e transparência. Eles entregaram o projeto antes do prazo previsto e com uma qualidade excepcional. Recomendo fortemente para qualquer empresa que precise de soluções tecnológicas.',
    name: 'Roger Miranda Coelho',
    role: 'CEO & Fundador',
    company: 'TechVentures',
    initials: 'RC',
  },
  {
    quote:
      'A Meloz foi extremamente profissional desde o começo. O processo de desenvolvimento foi ágil e transparente, com reuniões frequentes de alinhamento. O produto final superou todas as expectativas da nossa equipe.',
    name: 'Marcos Nazareth Souza',
    role: 'Diretor de Tecnologia',
    company: 'InovaGroup',
    initials: 'MN',
  },
  {
    quote:
      'Contratamos a Meloz para desenvolver nossa plataforma de e-commerce e ficamos impressionados com a qualidade e velocidade de entrega. O suporte pós-lançamento também é excelente.',
    name: 'Fernanda Lima',
    role: 'COO',
    company: 'Commerce Plus',
    initials: 'FL',
  },
]

export default function Cases() {
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
    <Section id="cases" bgColor="bg-white">
      <SectionTitle
        subtitle="DEPOIMENTOS"
        title="Cases de Sucesso"
        description="O que nossos clientes dizem sobre o trabalho realizado pela equipe Meloz."
      />

      <motion.div
        className="grid md:grid-cols-3 gap-8 lg:gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.name}
            className="relative p-8 lg:p-10 rounded-xl bg-gradient-to-br from-white to-background border-2 border-primary/10 hover:border-primary shadow-lg hover:shadow-2xl transition-all duration-300 group"
            variants={itemVariants}
            whileHover={{ translateY: -8 }}
          >
            {/* Quote mark */}
            <motion.div
              className="absolute -top-4 -left-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary text-3xl font-display font-bold group-hover:bg-primary/20 transition-colors"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              viewport={{ once: true }}
            >
              "
            </motion.div>

            {/* Quote */}
            <p className="text-lightText text-base leading-relaxed mb-8 italic">
              {testimonial.quote}
            </p>

            {/* Divider */}
            <div className="h-1 w-12 bg-gradient-to-r from-primary to-secondary rounded-full mb-6 group-hover:w-full transition-all duration-300" />

            {/* Author */}
            <div className="flex items-center gap-4">
              <motion.div
                className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-display font-bold text-lg"
                whileHover={{ scale: 1.1 }}
              >
                {testimonial.initials}
              </motion.div>
              <div>
                <p className="font-display font-bold text-darkText">{testimonial.name}</p>
                <p className="text-lightText text-sm">
                  {testimonial.role} · {testimonial.company}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
