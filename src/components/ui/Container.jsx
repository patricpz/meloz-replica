import { motion } from 'framer-motion'

export default function Container({ children, className = '' }) {
  return (
    <div className={`max-w-7xl mx-auto px-md md:px-lg lg:px-2xl ${className}`}>
      {children}
    </div>
  )
}
