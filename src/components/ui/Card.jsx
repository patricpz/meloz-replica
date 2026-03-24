import { motion } from 'framer-motion'

export default function Card({
  children,
  className = '',
  hoverable = true,
  image,
  title,
  description,
  ...props
}) {
  if (image || title) {
    return (
      <motion.div
        className={`rounded-lg overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 ${className}`}
        whileHover={hoverable ? { translateY: -8 } : {}}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        {...props}
      >
        {image && (
          <div className="overflow-hidden h-64">
            <motion.img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
              whileHover={hoverable ? { scale: 1.05 } : {}}
              transition={{ duration: 0.4 }}
            />
          </div>
        )}
        {(title || description) && (
          <div className="p-lg lg:p-2xl">
            {title && (
              <h3 className="font-display text-xl font-bold text-darkText mb-md">
                {title}
              </h3>
            )}
            {description && (
              <p className="text-lightText text-base leading-relaxed">
                {description}
              </p>
            )}
          </div>
        )}
      </motion.div>
    )
  }

  return (
    <motion.div
      className={`rounded-lg bg-white shadow-lg hover:shadow-2xl transition-all duration-300 ${className}`}
      whileHover={hoverable ? { translateY: -8 } : {}}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
