"use client"

import { motion } from "framer-motion"
import { FaPhone as Phone } from "react-icons/fa"

interface CTASectionProps {
  title: string
  description: string
  buttonText: string
}

export default function CTASection({ title, description, buttonText }: CTASectionProps) {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 shadow-xl md:p-12"
        >
          <div className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-right">
            <div className="md:max-w-2xl">
              <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">{title}</h2>
              <p className="text-lg text-blue-100">{description}</p>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="tel:+972501234567"
                className="flex items-center gap-2 rounded-full bg-white px-8 py-4 font-medium text-blue-600 shadow-md transition-all hover:bg-yellow-400 hover:text-blue-800"
              >
                <Phone className="h-5 w-5" />
                <span>{buttonText}</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
