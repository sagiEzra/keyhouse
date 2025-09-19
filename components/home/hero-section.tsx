"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import LuxuryButton from "@/components/ui/luxury-button"

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
        background: "linear-gradient(135deg, rgba(25,39,74,0.97) 0%, #1a2756 35%, #2d4a8e 65%, rgba(35,52,94,0.95) 100%)",
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
            background: "linear-gradient(to bottom, rgba(25,39,74,0.7) 0%, rgba(25,39,74,0.4) 50%, rgba(25,39,74,0.7) 100%)",
          }}
        />
      </div>

      {/* Enhanced decorative elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Main gradient orb */}
        <div
          className="absolute left-1/2 top-1/3 w-[80vw] h-[60vw] max-w-5xl -translate-x-1/2 rounded-full blur-3xl opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(199,157,42,0.25) 0%, rgba(199,157,42,0.125) 30%, transparent 70%)",
          }}
        />
        {/* Secondary accent */}
        <div
          className="absolute right-0 top-0 w-1/2 h-1/2 blur-2xl opacity-15"
          style={{
            background: "linear-gradient(225deg, rgba(199,157,42,0.375) 0%, transparent 70%)"
          }}
        />
        {/* Left accent */}
        <div
          className="absolute left-0 bottom-0 w-1/3 h-1/3 blur-2xl opacity-10"
          style={{
            background: "linear-gradient(45deg, rgba(199,157,42,0.25) 0%, transparent 100%)"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="mb-8 relative"
        >
          {/* Logo glow effect */}
          <div
            className="absolute -inset-8 rounded-full opacity-40 blur-3xl"
            style={{
              background: "radial-gradient(circle, rgba(199,157,42,0.3) 0%, transparent 70%)"
            }}
          />
          <img
            src="/images/logoNoBg.png"
            alt="KeyHouse Logo"
            className="relative mx-auto h-40 md:h-56 w-auto"
            style={{
              filter: "drop-shadow(0 8px 32px rgba(0,0,0,0.4)) drop-shadow(0 4px 16px rgba(199,157,42,0.3))"
            }}
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="mb-8 font-serif text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-white"
          style={{
            textShadow: "0 4px 20px rgba(0,0,0,0.3), 0 2px 10px rgba(199,157,42,0.2)"
          }}
        >
          <span className="block mb-4">
            ברוכים הבאים ל...
          </span>
          <span
            className="block bg-gradient-to-l from-white via-gray-0 to-white bg-clip-text text-transparent"
            style={{
              textShadow: "0 4px 20px rgba(0,0,0,0.4)"
            }}
          >
            סוכנות נדל&quot;ן - קי האוס אילת
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="mx-auto mb-10 max-w-4xl text-xl text-blue-100 md:text-2xl font-light leading-relaxed"
          style={{ textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}
        >
          החזון, האנשים והערכים שמאחורי סוכנות הנדל&quot;ן המובילה באילת
        </motion.p>

        <motion.div
          className="mx-auto h-1.5 w-32 rounded-full"
          style={{
            background: "linear-gradient(90deg, #c79d2a 0%, rgba(199,157,42,0.3) 50%, #c79d2a 100%)",
            boxShadow: "0 4px 20px rgba(199,157,42,0.4), 0 2px 10px rgba(199,157,42,0.2)",
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isLoaded ? 1 : 0 }}
          transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
          transition={{ duration: 1, delay: 1.4, ease: "easeOut" }}
          className="mt-16"
        >
          <a href="#services-grid">
            <LuxuryButton size="large">
              השירותים שלנו
            </LuxuryButton>
          </a>
        </motion.div>
      </div>

      {/* Enhanced bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white via-white/60 to-transparent"></div>
    </section>
  )
}
