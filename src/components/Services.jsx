import { motion } from 'framer-motion'
import Section from './ui/Section'
import SectionTitle from './ui/SectionTitle'

const services = [
  {
    icon: (
      <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: 'Aplicações Web',
    description:
      'Desenvolvemos aplicações web robustas, escaláveis e de alta performance, adaptadas às necessidades do seu negócio.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: 'Desenvolvimento de Softwares',
    description:
      'Criamos soluções de software multiplataforma para atender desde startups até grandes corporações.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    title: 'Desenvolvimento de Apps Mobile',
    description:
      'Apps nativos e híbridos para Android e iOS, com foco em usabilidade e experiência do usuário.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    title: 'Consultoria em TI',
    description:
      'Orientamos sua empresa na digitalização de processos, escolha de tecnologias e tomada de decisões estratégicas.',
  },
]

export default function Services() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <Section id="servicos" bgColor="bg-gradient-to-b from-background to-white">
      <SectionTitle
        subtitle="SERVIÇOS"
        title="Nossos Serviços"
        description="Oferecemos soluções completas em tecnologia para transformar o seu negócio digital."
      />

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {services.map((service) => (
          <motion.div
            key={service.title}
            className="relative group p-8 rounded-xl bg-white border-2 border-primary/10 hover:border-primary shadow-lg hover:shadow-2xl transition-all duration-300"
            variants={itemVariants}
            whileHover={{ translateY: -8 }}
          >
            {/* Background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Content */}
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <div className="w-8 h-8 text-primary">
                  {service.icon}
                </div>
              </div>

              <h3 className="font-display font-bold text-lg text-darkText mb-4">
                {service.title}
              </h3>

              <p className="text-lightText text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Decorative line */}
              <div className="mt-6 h-1 w-12 bg-gradient-to-r from-primary to-secondary rounded-full group-hover:w-full transition-all duration-300" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
