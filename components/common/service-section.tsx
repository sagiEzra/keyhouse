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
}

export default function ServiceSection({
  title,
  description,
  icon,
  image,
  imageAlt,
  reverse = false,
  children,
}: ServiceSectionProps) {
  return (
    <section
      className="py-16 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #23214a0d 0%, #fff 50%, #23214a1a 100%)",
      }}
    >
      {/* Decorative gradients */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[60vw] h-[40vw] rounded-full blur-3xl opacity-40"
        style={{
          background: "linear-gradient(135deg, #23214a4d 0%, #23214a1a 100%)",
        }}
      />

      <div className="container mx-auto px-4">
        <div className={`flex flex-col items-center gap-12 lg:flex-row ${reverse ? "lg:flex-row-reverse" : ""}`}>
          <motion.div
            initial={{ opacity: 0, x: reverse ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="flex items-center gap-4">
              <div
                className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-white/70 shadow-lg border-4 transition-all duration-300 hover:scale-110"
                style={{ borderColor: "#f1c23b", color: "#23214a" }}
              >
                {icon}
              </div>
              <h2 className="text-2xl font-bold md:text-3xl" style={{ color: "#23214a" }}>
                {title}
              </h2>
            </div>
            <p className="mt-6 text-lg leading-relaxed font-medium" style={{ color: "#23214a" }}>
              {description}
            </p>
            {children && <div className="mt-6">{children}</div>}
          </motion.div>

          {image && (
            <motion.div
              initial={{ opacity: 0, x: reverse ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2"
            >
              <div
                className="overflow-hidden rounded-2xl shadow-2xl border-4 transition-transform duration-250 hover:scale-105"
                style={{ borderColor: "#f1c23b33" }}
              >
                <img src={image || "/placeholder.svg"} alt={imageAlt || title} className="h-full w-full object-cover" />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
