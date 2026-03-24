import { motion } from 'framer-motion'

export default function Section({
  children,
  className = '',
  id = '',
  bgColor = 'bg-white',
  padding = 'py-3xl px-md md:px-lg lg:px-2xl',
  ...props
}) {
  return (
    <motion.section
      id={id}
      className={`w-full ${bgColor} ${padding} ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.1 }}
      {...props}
    >
      <div className="container">
        {children}
      </div>
    </motion.section>
  )
}
