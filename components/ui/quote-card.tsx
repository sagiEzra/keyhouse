"use client"

import { ReactNode } from "react"

interface QuoteCardProps {
  children: ReactNode
  author?: string
  position?: string
  align?: "left" | "right" | "center"
  variant?: "subtle" | "emphasized"
  className?: string
}

export default function QuoteCard({
  children,
  author,
  position,
  align = "right",
  variant = "subtle",
  className = ""
}: QuoteCardProps) {
  const getBorderDirection = () => {
    switch (align) {
      case "left":
        return "border-l-4"
      case "center":
        return "border-b-4"
      case "right":
      default:
        return "border-r-4"
    }
  }

  const getGradientDirection = () => {
    switch (align) {
      case "left":
        return "bg-gradient-to-r from-white via-gray-50 to-white"
      case "center":
        return "bg-gradient-to-t from-white via-gray-50 to-white"
      case "right":
      default:
        return "bg-gradient-to-l from-white via-gray-50 to-white"
    }
  }

  return (
    <div className={`relative ${className}`}>
      {variant === "emphasized" && (
        <>
          {/* Quote decoration */}
          <div
            className={`absolute ${align === 'right' ? '-top-4 -right-6' : align === 'left' ? '-top-4 -left-6' : '-top-4 left-1/2 -translate-x-1/2'} text-6xl opacity-10 font-serif select-none`}
            style={{ color: "#c79d2a" }}
          >
            "
          </div>
        </>
      )}

      <div
        className={`${getGradientDirection()} p-8 rounded-2xl ${getBorderDirection()} shadow-lg`}
        style={{
          borderColor: "#c79d2a",
          boxShadow: "0 10px 30px rgba(25,39,74,0.08)"
        }}
      >
        <div className="text-xl italic font-medium leading-relaxed mb-4" style={{ color: "rgba(25,39,74,0.97)" }}>
          {children}
        </div>

        {(author || position) && (
          <div className="flex items-center justify-end gap-2 text-sm opacity-70" style={{ color: "rgba(25,39,74,0.97)" }}>
            {author && <span className="font-medium">{author}</span>}
            {author && position && <span>•</span>}
            {position && <span>{position}</span>}
          </div>
        )}
      </div>
    </div>
  )
}