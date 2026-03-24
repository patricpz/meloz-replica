import { motion } from 'framer-motion'

export default function Badge({ children, variant = 'primary', className = '' }) {
  const variants = {
    primary: 'bg-primary/10 text-primary',
    secondary: 'bg-secondary/10 text-secondary',
    success: 'bg-green-100 text-green-700',
    outline: 'border-2 border-primary text-primary',
  }

  return (
    <motion.span
      className={`inline-flex items-center gap-sm px-md py-sm rounded-full text-xs font-bold uppercase tracking-wider ${variants[variant]} ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.span>
  )
}
