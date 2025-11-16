"use client"

import { motion } from "framer-motion"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  alignment?: "left" | "center" | "right"
  titleSize?: "large" | "medium" | "small"
  showAccentLine?: boolean
  className?: string
}

export default function SectionHeader({
  title,
  subtitle,
  alignment = "center",
  titleSize = "large",
  showAccentLine = true,
  className = ""
}: SectionHeaderProps) {
  const getTitleClasses = () => {
    const baseClasses = "font-serif font-bold tracking-tight"
    const colorClasses = "rgba(25,39,74,0.97)"

    switch (titleSize) {
      case "large":
        return `${baseClasses} text-5xl md:text-6xl mb-6`
      case "medium":
        return `${baseClasses} text-4xl md:text-5xl mb-4`
      case "small":
        return `${baseClasses} text-3xl md:text-4xl mb-4`
      default:
        return `${baseClasses} text-5xl md:text-6xl mb-6`
    }
  }

  const getAlignmentClasses = () => {
    switch (alignment) {
      case "left":
        return "text-left"
      case "right":
        return "text-right"
      case "center":
      default:
        return "text-center"
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`${getAlignmentClasses()} ${className}`}
    >
      <h2
        className={getTitleClasses()}
        style={{ color: "rgba(25,39,74,0.97)" }}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`${alignment === 'center' ? 'mx-auto' : alignment === 'right' ? 'mr-0 ml-auto' : 'ml-0'} max-w-4xl text-xl leading-relaxed font-light`}
          style={{ color: "rgba(25,39,74,0.97)" }}
        >
          {subtitle}
        </p>
      )}

      {showAccentLine && (
        <div
          className={`${alignment === 'center' ? 'mx-auto' : alignment === 'right' ? 'mr-0 ml-auto' : 'ml-0'} mt-8 h-1.5 w-32 rounded-full`}
          style={{
            background: "linear-gradient(90deg, #c79d2a 0%, rgba(199,157,42,0.3) 50%, #c79d2a 100%)",
            boxShadow: "0 4px 20px rgba(199,157,42,0.3)",
          }}
        />
      )}
    </motion.div>
  )
}