"use client"

import { motion } from "framer-motion"
import LuxuryButton from "@/components/ui/luxury-button"
import { businessStaticData } from "../../config"

interface CTASectionProps {
  title: string
  description: string
  buttonText: string
}

export default function CTASection({ title, description, buttonText }: CTASectionProps) {
  return (
    <section className="relative py-32 overflow-hidden"
             style={{
               background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, #fafafa 50%, rgba(199,157,42,0.03) 100%)"
             }}>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl p-10 md:p-16"
          style={{
            background: "linear-gradient(135deg, rgba(25,39,74,0.97) 0%, rgba(26,39,86,0.95) 35%, rgba(45,74,142,0.93) 65%, rgba(25,39,74,0.97) 100%)",
            boxShadow: "0 25px 60px rgba(25,39,74,0.25), inset 0 1px 0 rgba(255,255,255,0.1)",
            border: "1px solid rgba(199,157,42,0.2)"
          }}
        >
          {/* Inner decorative glow */}
          <div className="absolute inset-0 pointer-events-none opacity-30">
            <div className="absolute top-1/2 left-1/2 w-[600px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
                 style={{ background: "radial-gradient(circle, rgba(199,157,42,0.15) 0%, transparent 70%)" }} />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-between gap-10 text-center md:flex-row md:text-right">
            <div className="md:max-w-2xl">
              <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight"
                  style={{ textShadow: "0 4px 20px rgba(0,0,0,0.3), 0 2px 10px rgba(199,157,42,0.2)" }}>
                {title}
              </h2>
              <p className="text-xl md:text-2xl leading-relaxed"
                 style={{
                   color: "rgba(255,255,255,0.95)",
                   textShadow: "0 2px 10px rgba(0,0,0,0.2)"
                 }}>
                {description}
              </p>
            </div>

            <div className="flex-shrink-0">
              <LuxuryButton
                href={businessStaticData.rotemPhone.callLink}
                size="large"
              >
                {buttonText}
              </LuxuryButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
