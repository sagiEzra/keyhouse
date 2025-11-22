"use client"

import { motion } from "framer-motion"

interface ServiceHeroProps {
  title: string
  subtitle: string
  image: string
  imageAlt: string
  overlayOpacity?: number
}

export default function ServiceHero({ title, subtitle, image, imageAlt, overlayOpacity = 0.6 }: ServiceHeroProps) {
  return (
    <section className="relative overflow-hidden pt-24 md:pt-28">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={image || "/placeholder.svg"} alt={imageAlt} className="h-full w-full object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, rgba(25,39,74,${overlayOpacity}) 0%, rgba(26,39,86,${overlayOpacity * 0.9}) 35%, rgba(45,74,142,${overlayOpacity * 0.85}) 65%, rgba(25,39,74,${overlayOpacity}) 100%)`,
          }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto flex flex-col items-center justify-center px-6 py-20 pb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1
            className="mb-6 font-serif text-5xl font-extrabold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl"
            style={{
              textShadow: "0 4px 20px rgba(0,0,0,0.3), 0 2px 10px rgba(199,157,42,0.2)"
            }}
          >
            {title}
          </h1>

          <motion.p
            className="mx-auto mb-10 max-w-3xl text-xl leading-relaxed md:text-2xl"
            style={{
              color: "rgba(255,255,255,0.95)",
              textShadow: "0 2px 10px rgba(0,0,0,0.2)"
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {subtitle}
          </motion.p>

          <motion.div
            className="mx-auto h-1.5 w-32 rounded-full"
            style={{
              background: "linear-gradient(90deg, #c79d2a 0%, rgba(199,157,42,0.3) 50%, #c79d2a 100%)",
              boxShadow: "0 4px 20px rgba(199,157,42,0.4)",
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          />
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white via-white/60 to-transparent z-[2]"></div>
    </section>
  )
}
