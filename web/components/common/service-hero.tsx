"use client"

import { motion } from "framer-motion"

interface ServiceHeroProps {
  title: string
  subtitle: string
  image: string
  imageAlt: string
}

export default function ServiceHero({ title, subtitle, image, imageAlt }: ServiceHeroProps) {
  return (
    <section className="relative min-h-[70vh] overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={image || "/placeholder.svg"} alt={imageAlt} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-900/70 to-blue-900/80" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto flex min-h-[70vh] flex-col items-center justify-center px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="mb-6 font-serif text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mx-auto mb-10 max-w-3xl text-xl text-blue-100 md:text-2xl">{subtitle}</p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 text-lg font-medium text-white shadow-lg transition-all duration-300 hover:shadow-xl">
              <span className="relative z-10">דבר איתנו עוד היום</span>
              <span className="absolute inset-0 -z-10 translate-y-full bg-gradient-to-r from-yellow-400 to-yellow-500 transition-transform duration-300 group-hover:translate-y-0"></span>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}
