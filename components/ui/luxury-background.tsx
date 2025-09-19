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

  const getDecorationElements = () => {
    if (variant === "dark" || variant === "hero") {
      return (
        <>
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
        </>
      )
    }

    return (
      <>
        <div
          className="absolute top-1/4 left-1/4 w-64 h-32 rounded-full opacity-2"
          style={{ background: "linear-gradient(45deg, rgba(25,39,74,0.03) 0%, transparent 100%)" }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-48 h-24 rounded-full opacity-2"
          style={{ background: "linear-gradient(135deg, rgba(199,157,42,0.03) 0%, transparent 100%)" }}
        />
        <div
          className="absolute top-1/2 right-1/6 w-2 h-32 rounded-full opacity-3"
          style={{ background: "linear-gradient(180deg, rgba(199,157,42,0.03) 0%, transparent 100%)" }}
        />
      </>
    )
  }

  return (
    <section
      className={`relative overflow-hidden ${className}`}
      style={{
        ...getBackgroundStyle(),
        ...style
      }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {getDecorationElements()}
      </div>

      {children}

      {/* Bottom gradient for hero sections */}
      {variant === "hero" && (
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white via-white/60 to-transparent"></div>
      )}
    </section>
  )
}