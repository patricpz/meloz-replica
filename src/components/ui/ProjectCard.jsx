import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function ProjectImageCarousel({ images, title, interval = 5000 }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, interval)
    return () => clearInterval(id)
  }, [images.length, interval])

  return (
    <>
      {images.map((src, idx) => (
        <motion.img
          key={src}
          src={src}
          alt={`${title} — imagem ${idx + 1}`}
          className="absolute inset-0 w-full h-full object-contain object-center"
          initial={false}
          animate={{ opacity: idx === current ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          loading={idx === 0 ? 'eager' : 'lazy'}
        />
      ))}
    </>
  )
}

export default function ProjectCard({
  image,
  images,
  title,
  description,
  tags,
  index,
}) {
  const gallery = images?.length ? images : image ? [image] : []

  return (
    <motion.div
      className="group relative rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ translateY: -8 }}
    >
      {/* Image Container */}
      <div className="relative h-64 md:h-72 overflow-hidden bg-background">
        {gallery.length > 1 ? (
          <div className="absolute inset-0">
            <ProjectImageCarousel images={gallery} title={title} interval={5000} />
          </div>
        ) : gallery.length === 1 ? (
          <img
            src={gallery[0]}
            alt={title}
            className="h-full w-full object-contain object-center"
            loading="lazy"
          />
        ) : null}
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <h3 className="font-display font-bold text-xl text-darkText mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-lightText text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Arrow */}
        {/* <motion.div
          className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all"
          whileHover={{ x: 4 }}
        >
          <span>Saiba mais</span>
          <span>→</span>
        </motion.div> */}
      </div>
    </motion.div>
  )
}
