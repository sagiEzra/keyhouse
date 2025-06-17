"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7
    }
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-[95vh] md:min-h-[110vh] flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <iframe
            className="absolute top-0 left-0 w-[177.77vh] h-[100vh] md:w-[100vw] md:h-[56.25vw] md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2"
            src="https://www.youtube.com/embed/hWpR5nddwR4?autoplay=1&mute=1&loop=1&playlist=hWpR5nddwR4&controls=0&showinfo=0&rel=0&modestbranding=1"
            title="KeyHouse Hero Video"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-10"
        >
          <img
            src="/images/logoNoBg.png"
            alt="KeyHouse Logo"
            className="mx-auto h-40 md:h-56 w-auto"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mb-16 text-3xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight text-white drop-shadow-xl"
        >
          למצוא את הבית המושלם שלך באילת מתחיל כאן!
        </motion.h1>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
            <a
              href="#services-grid"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[#23214a] to-[#23214a] px-10 py-4 text-lg md:text-xl font-bold text-white shadow-xl transition-all duration-300
                hover:from-[#f1c23b] hover:to-[#f1c23b]  hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#8a6d2b] focus:ring-offset-2
                hover:scale-105 active:scale-95"
              aria-label="השירותים שלנו"
            >
              <span className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                <span className="absolute inset-0 -z-10 translate-y-full bg-gradient-to-r from-[#c5a259] to-[#b89a4e] transition-transform duration-300 group-hover:translate-y-0 rounded-full" />
              </span>
              <span className="relative z-10 transition-colors duration-200">
                השירותים שלנו
              </span>
            </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <div className="flex flex-col items-center">
            <span className="mb-2 mt-8 text-sm font-light text-white">גלול למטה</span>
            <div className="h-14 w-8 rounded-full border-2 border-white/30 p-1">
              <motion.div
                className="h-3 w-3 rounded-full bg-white"
                animate={{
                  y: [0, 20, 0],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  )
}
