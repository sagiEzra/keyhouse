"use client"

import { ReactNode } from "react"

interface LuxuryBackgroundProps {
  children: ReactNode
  variant?: "light" | "dark" | "hero"
  className?: string
  style?: React.CSSProperties
  backgroundImage?: string
  imageAlt?: string
  overlayOpacity?: number
}

export default function LuxuryBackground({
  children,
  variant = "light",
  className = "",
  style = {},
  backgroundImage,
  imageAlt = "",
  overlayOpacity = 0.65
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
        ...(!backgroundImage && getBackgroundStyle()),
        ...style
      }}
    >
      {/* Background Image (if provided) */}
      {backgroundImage && (
        <>
          <div className="absolute inset-0 z-0">
            <img
              src={backgroundImage}
              alt={imageAlt}
              className="h-full w-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, rgba(25,39,74,${overlayOpacity}) 0%, rgba(26,39,86,${overlayOpacity * 0.9}) 35%, rgba(45,74,142,${overlayOpacity * 0.85}) 65%, rgba(25,39,74,${overlayOpacity}) 100%)`,
              }}
            />
          </div>
        </>
      )}

      {children}

      {/* Bottom gradient for hero sections */}
      {variant === "hero" && (
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white via-white/60 to-transparent pointer-events-none"></div>
      )}
    </section>
  )
}