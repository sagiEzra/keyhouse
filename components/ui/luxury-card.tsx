"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface LuxuryCardProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  hoverable?: boolean
  glowColor?: string
  borderColor?: string
  backgroundStyle?: React.CSSProperties
}

export default function LuxuryCard({
  children,
  className = "",
  onClick,
  hoverable = true,
  glowColor = "rgba(199,157,42,0.15)",
  borderColor = "rgba(25,39,74,0.1)",
  backgroundStyle = {}
}: LuxuryCardProps) {
  return (
    <div className={`group relative ${className}`} onClick={onClick}>
      {/* Multi-layered glow effect - better fade out */}
      {hoverable && (
        <>
          {/* Outermost glow layer */}
          <div
            className="absolute -inset-8 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse at center, ${glowColor} 0%, transparent 70%)`,
              filter: "blur(30px)",
              zIndex: -3
            }}
          />
          {/* Middle glow layer */}
          <div
            className="absolute -inset-6 rounded-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-600 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse at center, ${glowColor} 0%, transparent 60%)`,
              filter: "blur(20px)",
              zIndex: -2
            }}
          />
          {/* Inner glow layer */}
          <div
            className="absolute -inset-3 rounded-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse at center, ${glowColor} 0%, transparent 50%)`,
              filter: "blur(12px)",
              zIndex: -1
            }}
          />
        </>
      )}

      {/* Main card */}
      <div
        className={`relative bg-gradient-to-br from-white via-white to-gray-50/30 rounded-3xl p-8 lg:p-10 shadow-xl border backdrop-blur-xl transition-all duration-500 ${
          hoverable ? 'group-hover:shadow-2xl group-hover:-translate-y-1' : ''
        }`}
        style={{
          borderColor,
          boxShadow: "0 20px 40px rgba(25,39,74,0.08), 0 8px 20px rgba(25,39,74,0.05), inset 0 1px 0 rgba(255,255,255,0.6)",
          ...backgroundStyle
        }}
      >
        {children}

        {/* Bottom accent line */}
        <div
          className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 rounded-full opacity-30 transition-all duration-500 ${
            hoverable ? 'group-hover:opacity-80 group-hover:w-20' : ''
          }`}
          style={{ backgroundColor: "#c79d2a" }}
        />
      </div>
    </div>
  )
}