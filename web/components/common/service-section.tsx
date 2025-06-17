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
    <section className="py-16">
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
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                {icon}
              </div>
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">{title}</h2>
            </div>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">{description}</p>
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
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <img src={image || "/placeholder.svg"} alt={imageAlt || title} className="h-full w-full object-cover" />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
