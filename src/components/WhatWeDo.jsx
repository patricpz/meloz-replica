import { motion } from 'framer-motion'
import Section from './ui/Section'

export default function WhatWeDo() {
  const features = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M3 10V8.5a2.5 2.5 0 0 1 2.5-2.5h13A2.5 2.5 0 0 1 21 8.5V10" stroke="currentColor" strokeWidth="1.5"/>
          <rect x="3" y="10" width="18" height="9" rx="2" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M7 14h2m2 0h2m2 0h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      label: 'Banco digital',
      description: 'Permita que sua empresa ofereça serviços financeiros com sua própria marca. Conta digital, cartões, pagamentos, PIX e outras soluções que podem gerar novas fontes de receita e fortalecer o relacionamento com seus clientes.',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <rect x="6" y="2" width="12" height="20" rx="3" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="12" cy="18" r="1" fill="currentColor"/>
        </svg>
      ),
      label: 'Aplicativos mobile',
      description: 'Criamos aplicativos mobile para empresas que querem oferecer serviços digitais modernos, conectando clientes e negócios em uma única experiência.',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="7" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M7 17v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      ),
      label: 'Plataformas digitais',
      description: 'Desenvolvemos sistemas completos para diferentes modelos de negócio, como marketplaces, logística, saúde e plataformas de serviços.',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <circle cx="6" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="18" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M9 12h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      label: 'Integrações tecnológicas',
      description: 'Integramos diferentes sistemas e tecnologias para que sua empresa opere com mais eficiência e conectividade.',
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <Section id="o-que-fazemos" bgColor="bg-white">
      <motion.div
        className="max-w-4xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display text-5xl md:text-6xl font-bold text-darkText mb-6 leading-tight">
          Tecnologia que transforma ideias em produtos reais
        </h2>
        <p className="text-lg text-lightText leading-relaxed mb-12">
          A Meloz desenvolve soluções digitais para empresas que querem inovar.<br className="hidden md:block" />
          Criamos aplicativos, plataformas e bancos digitais completos, conectando tecnologia, experiência e crescimento de negócio.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {features.map((feature) => (
          <motion.div
            key={feature.label}
            className="p-8 rounded-lg border-2 border-primary/10 hover:border-primary bg-white hover:bg-primary/5 transition-all duration-300 group"
            variants={itemVariants}
            whileHover={{ translateY: -4 }}
          >
            <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
              {feature.icon}
            </div>
            <h3 className="font-display font-semibold text-lg text-darkText mb-3">
              {feature.label}
            </h3>
            <p className="text-sm text-lightText leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
