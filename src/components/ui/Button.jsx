import { motion } from 'framer-motion'

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  const baseClasses = 'inline-flex items-center justify-center gap-md font-semibold rounded-full transition-all duration-300 cursor-pointer no-underline'

  const variants = {
    primary: 'bg-primary text-white hover:opacity-90 active:scale-95 shadow-lg hover:shadow-xl',
    outline: 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary',
    secondary: 'bg-secondary text-white hover:opacity-90 active:scale-95 shadow-lg hover:shadow-xl',
    ghost: 'bg-transparent text-darkText hover:bg-background hover:text-primary',
  }

  const sizes = {
    sm: 'px-md py-sm text-sm',
    md: 'px-lg py-md text-base',
    lg: 'px-2xl py-lg text-lg',
  }

  const variantClass = variants[variant] || variants.primary
  const sizeClass = sizes[size] || sizes.md

  return (
    <motion.button
      className={`${baseClasses} ${variantClass} ${sizeClass} ${className}`}
      whileHover={{ translateY: -2 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}
