"use client"

import { motion } from "framer-motion"
import { FaPhone as Phone } from "react-icons/fa"
import { businessStaticData } from "../../config"

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
          className="overflow-hidden rounded-3xl p-8 shadow-2xl md:p-12 border backdrop-blur-xl"
          style={{
            background: "linear-gradient(90deg, #23214ad9 0%, #23214aeb 100%)",
            borderColor: "#23214a33",
          }}
        >
          <div className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-right">
            <div className="md:max-w-2xl">
              <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl drop-shadow-lg">{title}</h2>
              <p className="text-lg text-blue-100 font-medium">{description}</p>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href={businessStaticData.phone.callLink}
                className="flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105"
                style={{
                  color: "#23214a",
                  background: "linear-gradient(90deg, #fff 0%, #f1c23b22 100%)",
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLAnchorElement).style.background =
                    "linear-gradient(90deg, #f1c23b 0%, #f1c23b 100%)"
                  ;(e.currentTarget as HTMLAnchorElement).style.color = "#23214a"
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLAnchorElement).style.background =
                    "linear-gradient(90deg, #fff 0%, #f1c23b22 100%)"
                  ;(e.currentTarget as HTMLAnchorElement).style.color = "#23214a"
                }}
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
