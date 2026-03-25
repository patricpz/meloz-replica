import { motion } from 'framer-motion'
import Button from './ui/Button'
import Badge from './ui/Badge'
import bannerDigital from '../assets/Banner 2.jpg'

const WHATSAPP = 'https://api.whatsapp.com/send?phone=5519996509154'

export default function BannerDigitalBank() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  }

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-br from-primary via-primary to-secondary overflow-hidden pt-24 md:pt-32" id="digital-bank">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-white/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-white/20 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-12 md:py-24">
        <motion.div
          className="grid md:grid-cols-2 gap-8 md:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <motion.div className="text-white space-y-6 md:space-y-8">
            <motion.div variants={itemVariants}>
              <Badge variant="outline" className="border-white text-white">
                Banco digital
              </Badge>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h1 className="font-display text-5xl md:text-6xl xl:text-7xl font-bold leading-tight">
                Crie seu próprio banco digital
              </h1>
            </motion.div>

            <motion.p
              className="text-lg md:text-xl text-white/90 leading-relaxed max-w-lg"
              variants={itemVariants}
            >
              Conta digital, cartões, pagamentos e serviços financeiros com a sua marca. Uma nova forma de gerar receita e fortalecer o relacionamento com seus clientes.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              variants={itemVariants}
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => window.open(WHATSAPP, '_blank')}
              >
                Falar com um especialista
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.querySelector('#solucoes')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver soluções
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div animate={floatingAnimation}>
              <img
                src={bannerDigital}
                alt="Banco digital Meloz"
                className="w-full max-w-md drop-shadow-2xl rounded-lg object-cover"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Wave SVG */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-24 md:h-32">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            fill="#FFFFFF"
            d="M0,40L60,45C120,50,240,60,360,60C480,60,600,50,720,45C840,40,960,40,1080,45C1200,50,1320,60,1380,65L1440,70L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  )
}
