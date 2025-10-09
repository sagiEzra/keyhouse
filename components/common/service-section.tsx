"use client"

import type React from "react"
import { motion } from "framer-motion"

interface ServiceSectionProps {
  title: string
  description: string
  icon: React.ReactNode
  image?: string
  imageAlt?: string
  reverse?: boolean
  children?: React.ReactNode
  variant?: "light" | "white"
}

export default function ServiceSection({
  title,
  description,
  icon,
  image,
  imageAlt,
  reverse = false,
  children,
  variant = "light"
}: ServiceSectionProps) {
  const getBackgroundStyle = () => {
    if (variant === "white") {
      return { background: "#ffffff" }
    }
    return {
      background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, #fafafa 50%, rgba(241,194,59,0.03) 100%)"
    }
  }

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={getBackgroundStyle()}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className={`flex flex-col items-center gap-12 lg:gap-16 lg:flex-row ${reverse ? "lg:flex-row-reverse" : ""}`}>
          <motion.div
            initial={{ opacity: 0, x: reverse ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <div className="flex items-center gap-4 mb-6">
              <div
                className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl shadow-lg transition-all duration-500 group hover:scale-110 hover:rotate-6"
                style={{
                  background: "linear-gradient(135deg, rgba(199,157,42,0.1) 0%, rgba(255,255,255,0.9) 100%)",
                  border: "2px solid rgba(199,157,42,0.3)",
                  boxShadow: "0 8px 25px rgba(199,157,42,0.2)",
                  color: "rgba(25,39,74,0.97)"
                }}
              >
                {icon}
              </div>
              <h2
                className="text-3xl font-serif font-bold md:text-4xl"
                style={{ color: "rgba(25,39,74,0.97)" }}
              >
                {title}
              </h2>
            </div>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "rgba(25,39,74,0.85)" }}
            >
              {description}
            </p>
            {children && <div className="mt-6">{children}</div>}
          </motion.div>

          {image && (
            <motion.div
              initial={{ opacity: 0, x: reverse ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full lg:w-1/2"
            >
              <div className="relative group">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  {/* Glow effect */}
                  <div
                    className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: "linear-gradient(135deg, rgba(199,157,42,0.3) 0%, rgba(25,39,74,0.2) 100%)",
                      filter: "blur(20px)"
                    }}
                  />
                  {/* White frame */}
                  <div className="relative bg-white p-4 rounded-3xl">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={imageAlt || title}
                      className="w-full h-[400px] object-cover rounded-2xl transition-all duration-500 group-hover:scale-[1.02]"
                      style={{
                        boxShadow: "0 20px 50px rgba(25,39,74,0.15), inset 0 1px 0 rgba(255,255,255,0.6)"
                      }}
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-4 rounded-2xl bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
