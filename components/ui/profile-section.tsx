"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface ProfileSectionProps {
  name: string
  title: string
  imageSrc: string
  imageAlt: string
  children: ReactNode
  quote?: ReactNode
  reverse?: boolean
  className?: string
}

export default function ProfileSection({
  name,
  title,
  imageSrc,
  imageAlt,
  children,
  quote,
  reverse = false,
  className = ""
}: ProfileSectionProps) {
  const imageContent = (
    <div className="relative group">
      <div className="relative overflow-hidden rounded-3xl shadow-2xl">
        {/* Multi-layered background glow effect */}
        <div
          className="absolute -inset-8 rounded-3xl opacity-0 group-hover:opacity-15 transition-opacity duration-700 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, rgba(199,157,42,0.3) 0%, transparent 70%)",
            filter: "blur(40px)",
            zIndex: -3
          }}
        />
        <div
          className="absolute -inset-6 rounded-3xl opacity-0 group-hover:opacity-25 transition-opacity duration-600 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, rgba(199,157,42,0.2) 0%, transparent 60%)",
            filter: "blur(25px)",
            zIndex: -2
          }}
        />
        <div
          className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
          style={{
            background: reverse
              ? "radial-gradient(ellipse at center, rgba(199,157,42,0.15) 0%, transparent 50%)"
              : "radial-gradient(ellipse at center, rgba(199,157,42,0.15) 0%, transparent 50%)",
            filter: "blur(15px)",
            zIndex: -1
          }}
        />

        {/* Main image container */}
        <div className="relative bg-white p-4 rounded-3xl">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-[350px] sm:h-[450px] lg:h-[700px] object-cover rounded-2xl transition-all duration-500 group-hover:scale-[1.02]"
            style={{
              boxShadow: "0 20px 50px rgba(25,39,74,0.15), inset 0 1px 0 rgba(255,255,255,0.6)",
              objectPosition: "top"
            }}
          />

          {/* Image overlay gradient */}
          <div className="absolute inset-4 rounded-2xl bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>
      </div>
    </div>
  )

  const contentSection = (
    <div className="flex flex-col justify-center space-y-10">
      {/* Title */}
      <div className="space-y-6">
        <h2
          className="text-5xl lg:text-6xl font-serif font-bold leading-tight"
          style={{ color: "rgba(25,39,74,0.97)" }}
        >
          {name}
        </h2>
        <div className="flex items-center gap-6">
          <div
            className="h-1.5 w-20 rounded-full"
            style={{ background: "linear-gradient(90deg, #c79d2a 0%, rgba(199,157,42,0.3) 100%)" }}
          />
          <p className="text-2xl lg:text-3xl font-semibold" style={{ color: "#c79d2a" }}>
            {title}
          </p>
        </div>
      </div>

      {/* Image on mobile - appears after title and role */}
      <div className="lg:hidden">
        {imageContent}
      </div>

      {/* Content */}
      <div className="space-y-8 text-lg lg:text-xl leading-relaxed" style={{ color: "rgba(25,39,74,0.85)" }}>
        {children}

        {/* Quote section */}
        {quote && quote}
      </div>
    </div>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`mb-32 ${className}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
        {reverse ? (
          <>
            <div className="lg:order-1">{contentSection}</div>
            <div className="lg:order-2 hidden lg:block">{imageContent}</div>
          </>
        ) : (
          <>
            <div className="hidden lg:block">{imageContent}</div>
            {contentSection}
          </>
        )}
      </div>
    </motion.div>
  )
}