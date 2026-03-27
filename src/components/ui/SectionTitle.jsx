import { motion } from 'framer-motion'

export default function SectionTitle({
  title,
  description,
  subtitle,
  align = 'center',
  className = '',
}) {
  const alignClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }

  return (
    <motion.div
      className={`mb-3xl ${alignClass[align]} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {subtitle && (
        <p className="text-primary font-accent text-sm font-bold uppercase tracking-wider mb-md">
          {subtitle}
        </p>
      )}
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-darkText mb-md leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-lightText text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  )
}
