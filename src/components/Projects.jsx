import { motion } from 'framer-motion'
import Section from './ui/Section'
import SectionTitle from './ui/SectionTitle'
import Button from './ui/Button'
import ProjectCard from './ui/ProjectCard'
import mockup4 from '../assets/mockup/Design sem nome (4).png'
import mockup5 from '../assets/mockup/Design sem nome (5).png'
import mockup6 from '../assets/mockup/Design sem nome (6).png'

export default function Projects() {
  const projects = [
    {
      image: mockup4, // Restored original image
      title: 'Banco Digital White-Label',
      description: 'Solução completa de banco digital com conta, cartão, pagamentos e PIX integrados.',
      tags: ['Fintech', 'React', 'Node.js'],
    },
    {
      image: mockup6, // Restored original image
      title: 'Plataforma Médica',
      description: 'Sistema de telemedicina com agendamento, consultas virtuais e prontuário eletrônico.',
      tags: ['Healthcare', 'React Native', 'Backend'],
    },
    {
      image: mockup5, // Restored original image
      title: 'Marketplace de Serviços',
      description: 'Plataforma conectando prestadores de serviço com clientes, com pagamento integrado.',
      tags: ['Marketplace', 'Web App', 'Stripe'],
    }
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

  return (
    <Section id="projetos" bgColor="bg-white">
      <SectionTitle
        subtitle="NOSSO PORTFÓLIO"
        title="Tecnologia aplicada a diferentes negócios"
        description="Desenvolvemos soluções para diferentes mercados, transformando ideias em produtos reais"
      />

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project, idx) => (
          <ProjectCard
            key={project.title}
            image={project.image}
            title={project.title}
            description={project.description}
            tags={project.tags}
            index={idx}
          />
        ))}
      </motion.div>

      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Button
          variant="primary"
          size="lg"
          onClick={() => document.querySelector('#cases')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Ver todos os projetos
        </Button>
      </motion.div>
    </Section>
  )
}
