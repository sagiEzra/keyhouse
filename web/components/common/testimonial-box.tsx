"use client"

import { motion } from "framer-motion"
import { FaStar as Star } from "react-icons/fa"

interface TestimonialBoxProps {
  quote: string
  author: string
  role: string
  image?: string
  rating?: number
}

export default function TestimonialBox({ quote, author, role, image, rating = 5 }: TestimonialBoxProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
    >
      <div className="mb-4 flex">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="mb-6 text-lg italic text-gray-700">"{quote}"</p>
      <div className="flex items-center">
        {image && (
          <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
            <img src={image || "/placeholder.svg"} alt={author} className="h-full w-full object-cover" />
          </div>
        )}
        <div>
          <h4 className="font-bold text-gray-900">{author}</h4>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
    </motion.div>
  )
}
