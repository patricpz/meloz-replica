import { motion } from 'framer-motion'
import Section from './ui/Section'
import SectionTitle from './ui/SectionTitle'
import ProjectCard from './ui/ProjectCard'
import banco1 from '../assets/mockup/banco_1.png'
import banco2 from '../assets/mockup/banco_2.png'
import banco3 from '../assets/mockup/banco_3.png'
import banco4 from '../assets/mockup/banco_4.png'
import banco6 from '../assets/mockup/banco_6.png'
import medico1 from '../assets/mockup/medico_1.png'

const bancoDigitalImages = [banco1, banco2, banco3, banco4, banco6]

export default function Projects() {
  const projects = [
    {
      images: bancoDigitalImages,
      title: 'Banco Digital White-Label',
      description: 'Solução completa de banco digital com conta, cartão, pagamentos e PIX integrados.',
      tags: ['Fintech', 'React', 'Node.js'],
    },
    {
      image: medico1,
      title: 'Plataforma Médica',
      description: 'Sistema de telemedicina com agendamento, consultas virtuais e prontuário eletrônico.',
      tags: ['Healthcare', 'React Native', 'Backend'],
    },
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
        className="grid grid-cols-1 gap-6 md:grid-cols-6 md:gap-8 mb-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project, idx) => (
          <div
            key={project.title}
            className={
              idx === 0
                ? 'md:col-span-3 lg:col-span-2 lg:col-start-2'
                : 'md:col-span-3 lg:col-span-2 lg:col-start-4'
            }
          >
            <ProjectCard
              image={project.image}
              images={project.images}
              title={project.title}
              description={project.description}
              tags={project.tags}
              index={idx}
            />
          </div>
        ))}
      </motion.div>

      {/* <motion.div
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
      </motion.div> */}
    </Section>
  )
}
