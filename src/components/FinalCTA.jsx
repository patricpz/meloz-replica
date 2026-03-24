import { motion } from 'framer-motion'
import Button from './ui/Button'

const WHATSAPP = 'https://api.whatsapp.com/send?phone=5519996509154'

export default function FinalCTA() {
  return (
    <section
      id="fale-com-especialista"
      className="relative min-h-[500px] w-full bg-gradient-to-r from-secondary to-primary overflow-hidden flex items-center py-16 md:py-24"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <motion.div
        className="container relative z-10 text-center text-white max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="font-display text-5xl md:text-6xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Pronto para transformar sua ideia em tecnologia?
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Se sua empresa quer criar um novo produto digital, a Meloz pode ajudar.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => window.open(WHATSAPP, '_blank')}
            className="bg-white text-primary hover:bg-gray-100"
          >
            Falar com especialista
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Enviar mensagem
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
