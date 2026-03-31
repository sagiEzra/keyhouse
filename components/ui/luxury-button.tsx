"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ReactNode } from "react"

interface LuxuryButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: "primary" | "secondary" | "admin"
  size?: "small" | "medium" | "large"
  className?: string
  disabled?: boolean
  type?: "button" | "submit" | "reset"
}

export default function LuxuryButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "medium",
  className = "",
  disabled = false,
  type = "button"
}: LuxuryButtonProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return {
          background: "linear-gradient(135deg, rgba(25,39,74,0.97) 0%, rgba(29,42,86,0.95) 100%)",
          boxShadow: "0 15px 35px rgba(25,39,74,0.3), 0 5px 15px rgba(25,39,74,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
          border: "1px solid rgba(199,157,42,0.3)",
          color: "#ffffff",
          glowColor: "rgba(199,157,42,0.3)"
        }
      case "secondary":
        return {
          background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,249,255,0.9) 100%)",
          boxShadow: "0 15px 35px rgba(25,39,74,0.2), 0 5px 15px rgba(25,39,74,0.1), inset 0 1px 0 rgba(255,255,255,0.6)",
          border: "1px solid rgba(25,39,74,0.2)",
          color: "rgba(25,39,74,0.97)",
          glowColor: "rgba(25,39,74,0.15)"
        }
      case "admin":
        return {
          background: "linear-gradient(135deg, rgba(80,80,80,0.95) 0%, rgba(60,60,60,0.98) 100%)",
          boxShadow: "0 15px 35px rgba(60,60,60,0.4), 0 5px 15px rgba(60,60,60,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
          border: "1px solid rgba(120,120,120,0.3)",
          color: "#ffffff",
          glowColor: "rgba(120,120,120,0.3)"
        }
      default:
        return {
          background: "linear-gradient(135deg, rgba(25,39,74,0.97) 0%, rgba(29,42,86,0.95) 100%)",
          boxShadow: "0 15px 35px rgba(25,39,74,0.3), 0 5px 15px rgba(25,39,74,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
          border: "1px solid rgba(199,157,42,0.3)",
          color: "#ffffff",
          glowColor: "rgba(199,157,42,0.3)"
        }
    }
  }

  const getSizeClasses = () => {
    switch (size) {
      case "small":
        return "px-4 py-2 text-sm"
      case "large":
        return "px-8 py-4 text-lg"
      case "medium":
      default:
        return "px-6 py-3 text-base"
    }
  }

  const variantStyles = getVariantStyles()

  const getFocusRingColor = () => {
    switch (variant) {
      case "primary":
        return "focus:ring-[#c79d2a]"
      case "secondary":
        return "focus:ring-[rgba(25,39,74,0.5)]"
      case "admin":
        return "focus:ring-[rgba(120,120,120,0.5)]"
      default:
        return "focus:ring-[#c79d2a]"
    }
  }

  const buttonElement = (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative"
    >
      {/* Button glow effect */}
      <div
        className="absolute -inset-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${variantStyles.glowColor} 0%, rgba(25,39,74,0.1) 100%)`,
          filter: "blur(20px)"
        }}
      />

      <button
        onClick={onClick}
        disabled={disabled}
        type={type}
        className={`relative flex items-center gap-3 rounded-full font-serif font-semibold transition-all duration-500 overflow-hidden focus:outline-none focus:ring-4 focus:ring-opacity-50 ${getFocusRingColor()} ${getSizeClasses()} ${className} ${
          disabled ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        style={{
          background: variantStyles.background,
          boxShadow: variantStyles.boxShadow,
          border: variantStyles.border,
          color: variantStyles.color,
          backdropFilter: "blur(20px)",
          outlineColor: variant === "primary" ? "rgba(199,157,42,0.8)" : "rgba(25,39,74,0.8)"
        }}
        onMouseEnter={(e) => {
          if (disabled) return
          const target = e.currentTarget
          if (variant === "primary") {
            target.style.background = "linear-gradient(135deg, #c79d2a 0%, rgba(199,157,42,0.8) 100%)"
            target.style.color = "rgba(25,39,74,0.97)"
            target.style.boxShadow = "0 20px 40px rgba(199,157,42,0.4), 0 8px 20px rgba(199,157,42,0.3), inset 0 1px 0 rgba(255,255,255,0.4)"
          } else if (variant === "secondary") {
            target.style.background = "linear-gradient(135deg, rgba(25,39,74,0.1) 0%, rgba(25,39,74,0.05) 100%)"
            target.style.boxShadow = "0 20px 40px rgba(25,39,74,0.15), 0 8px 20px rgba(25,39,74,0.1), inset 0 1px 0 rgba(255,255,255,0.8)"
          } else if (variant === "admin") {
            target.style.background = "linear-gradient(135deg, rgba(100,100,100,0.98) 0%, rgba(80,80,80,1) 100%)"
            target.style.boxShadow = "0 20px 40px rgba(80,80,80,0.5), 0 8px 20px rgba(80,80,80,0.4), inset 0 1px 0 rgba(255,255,255,0.2)"
          }
        }}
        onMouseLeave={(e) => {
          if (disabled) return
          const target = e.currentTarget
          target.style.background = variantStyles.background
          target.style.color = variantStyles.color
          target.style.boxShadow = variantStyles.boxShadow
        }}
      >
        {/* Background shimmer effect */}
        <div
          className="absolute inset-0 -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-700 opacity-20"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)"
          }}
        />

        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      </button>
    </motion.div>
  )

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {buttonElement}
      </Link>
    )
  }

  return buttonElement
}