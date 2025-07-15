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
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, #23214a80 0%, #23214a70 50%, #23214a80 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto flex min-h-[70vh] flex-col items-center justify-center px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="mb-6 font-serif text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl drop-shadow-xl">
            {title}
          </h1>
          <p className="mx-auto mb-10 max-w-3xl text-xl text-blue-100 md:text-2xl font-medium drop-shadow-lg">
            {subtitle}
          </p>
          <div
            className="mx-auto h-2 w-32 rounded-full"
            style={{
              background: "linear-gradient(90deg, #f1c23b 0%, #fff 100%)",
              boxShadow: "0 2px 12px #f1c23b55",
            }}
          />
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}
