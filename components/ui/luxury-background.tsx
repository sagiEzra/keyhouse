"use client"

import { ReactNode } from "react"

interface LuxuryBackgroundProps {
  children: ReactNode
  variant?: "light" | "dark" | "hero"
  className?: string
  style?: React.CSSProperties
}

export default function LuxuryBackground({
  children,
  variant = "light",
  className = "",
  style = {}
}: LuxuryBackgroundProps) {
  const getBackgroundStyle = () => {
    switch (variant) {
      case "dark":
        return {
          background: "linear-gradient(135deg, rgba(25,39,74,0.97) 0%, #1a2756 35%, #2d4a8e 65%, rgba(35,52,94,0.95) 100%)",
        }
      case "hero":
        return {
          background: "linear-gradient(135deg, rgba(25,39,74,0.97) 0%, #1a2756 35%, #2d4a8e 65%, rgba(35,52,94,0.95) 100%)",
        }
      case "light":
      default:
        return {
          background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, #fafafa 50%, rgba(241,194,59,0.03) 100%)",
        }
    }
  }

  return (
    <section
      className={`relative overflow-hidden ${variant === "hero" ? "pt-24 md:pt-28 pb-12" : ""} ${className}`}
      style={{
        ...getBackgroundStyle(),
        ...style
      }}
    >
      {children}

      {/* Bottom gradient for hero sections */}
      {variant === "hero" && (
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white via-white/60 to-transparent pointer-events-none"></div>
      )}
    </section>
  )
}