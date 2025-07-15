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
    <section
      className="relative min-h-[95vh] md:min-h-[110vh] flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #23214a 0%, #23214a 100%)",
      }}
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <iframe
            className="absolute top-0 left-0 w-[177.77vh] h-[100vh] md:w-[100vw] md:h-[56.25vw] md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2"
            src="https://www.youtube.com/embed/TzMDVInxbRw?autoplay=1&mute=1&loop=1&start=33&playlist=TzMDVInxbRw&controls=0&showinfo=0&rel=0&modestbranding=1"
            title="KeyHouse Hero Video"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, #23214a70 0%, #23214a40 50%, #23214a70 100%)",
          }}
        />
      </div>

      {/* Decorative gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-1/2 top-1/4 w-[70vw] h-[50vw] max-w-4xl -translate-x-1/2 rounded-full blur-3xl opacity-30"
          style={{
            background: "linear-gradient(135deg, #f1c23b40 0%, #f1c23b20 50%, transparent 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-6"
        >
          <img src="/images/logoNoBg.png" alt="KeyHouse Logo" className="mx-auto h-40 md:h-56 w-auto drop-shadow-2xl" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mb-16 text-3xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight text-white drop-shadow-2xl"
        >
          המומחים שלך בנדל״ן באילת
          </motion.h1>

        {/* <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 1, delay: 1.0 }}
          className="mb-12 text-xl md:text-2xl font-medium text-blue-100 max-w-3xl mx-auto drop-shadow-lg"
        >
          מומחים במכירה, קנייה וניהול נכסים באילת עם ליווי אישי ומקצועי
        </motion.p> */}

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <a
            href="#services-grid"
            className="group relative overflow-hidden rounded-full px-10 py-4 text-lg md:text-xl font-bold text-white shadow-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#f1c23b55] hover:scale-105 active:scale-95"
            style={{
              background: "linear-gradient(90deg, #23214a 0%, #23214a 100%)",
              // focusRingColor: "#f1c23b55",
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLAnchorElement).style.background =
                "linear-gradient(90deg, #f1c23b 0%, #f1c23b 100%)"
              ;(e.currentTarget as HTMLAnchorElement).style.color = "#23214a"
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLAnchorElement).style.background =
                "linear-gradient(90deg, #23214a 0%, #23214a 100%)"
              ;(e.currentTarget as HTMLAnchorElement).style.color = "#ffffff"
            }}
            aria-label="השירותים שלנו"
          >
            <span className="relative z-10 transition-colors duration-300">השירותים שלנו</span>
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-12"
        >
          <div className="flex flex-col items-center">
            <span className="mb-2 text-sm font-light text-white/80">גלול למטה</span>
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
