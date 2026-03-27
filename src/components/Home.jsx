import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import bannerHero from '../assets/Banner 1.jpg'
import bannerDigital from '../assets/Banner 2.jpg'
import bannerMobile from '../assets/mockup/banner_mobile.png'

function BackgroundCarousel({ images, interval = 5000 }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [nextIndex, setNextIndex] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length)
        setNextIndex((prev) => (prev + 1) % images.length)
        setIsTransitioning(false)
      }, 600)
    }, interval)

    return () => clearInterval(timer)
  }, [interval, images.length])

  return (
    <div className="absolute inset-0 overflow-hidden bg-gray-100"> {/* Adicionado um fundo neutro caso a imagem não preencha tudo */}
      {/* Current Image */}
      <motion.img
        src={images[currentIndex]}
        alt="Background"
        className="absolute inset-0 w-full h-full object-contain" 
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* Next Image */}
      <motion.img
        src={images[nextIndex]}
        alt="Background Next"
        className="absolute inset-0 w-full h-full object-contain"
        initial={{ opacity: 0 }}
        animate={{ opacity: isTransitioning ? 1 : 0 }}
        transition={{ duration: 0.6 }}
      />
    </div>
  )
}

export default function Home() {
  const backgroundImages = [bannerHero, bannerDigital]

  return (
    <section className="relative min-h-[100svh] w-full mx-auto overflow-hidden pt-20 md:pt-28 lg:pt-32">
      {/* Background Carousel for Desktop */}
      <div className="absolute inset-0 hidden md:block">
        <BackgroundCarousel images={backgroundImages} interval={5000} />
      </div>

      {/* Banner for Mobile */}
      <div className="absolute inset-0 block md:hidden">
        <img
          src={bannerMobile}
          alt="Mobile Banner"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Wave SVG */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-24 md:h-32 z-20">
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
