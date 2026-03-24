import { motion } from 'framer-motion'
import Section from './ui/Section'
import SectionTitle from './ui/SectionTitle'
import Card from './ui/Card'

export default function Solutions() {
  const solutions = [
    {
      title: 'Banco digital',
      description:
        'Permita que sua empresa ofereça serviços financeiros com sua própria marca. Conta digital, cartões, pagamentos, PIX e outras soluções que podem gerar novas fontes de receita e fortalecer o relacionamento com seus clientes.',
      icon: '🏦',
    },
    {
      title: 'Aplicativos',
      description:
        'Criamos aplicativos mobile para empresas que querem oferecer serviços digitais modernos, conectando clientes e negócios em uma única experiência.',
      icon: '📱',
    },
    {
      title: 'Plataformas digitais',
      description:
        'Desenvolvemos sistemas completos para diferentes modelos de negócio, como marketplaces, logística, saúde e plataformas de serviços.',
      icon: '💻',
    },
    {
      title: 'Integrações',
      description:
        'Integramos diferentes sistemas e tecnologias para que sua empresa opere com mais eficiência e conectividade.',
      icon: '🔗',
    },
  ]

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
    <Section id="solucoes" bgColor="bg-gradient-to-b from-background to-white">
      <SectionTitle
        subtitle="SOLUÇÕES"
        title="Nossas soluções"
        description="Tecnologia para construir novos produtos digitais que geram crescimento e inovação"
      />

      <motion.div
        className="grid md:grid-cols-2 gap-8 lg:gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {solutions.map((solution, idx) => (
          <motion.div
            key={solution.title}
            variants={itemVariants}
          >
            <Card
              className="h-full p-8 md:p-10"
              hoverable={true}
            >
              <div className="text-5xl mb-4">{solution.icon}</div>
              <h3 className="font-display text-2xl font-bold text-darkText mb-4">
                {solution.title}
              </h3>
              <p className="text-lightText text-base leading-relaxed">
                {solution.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
