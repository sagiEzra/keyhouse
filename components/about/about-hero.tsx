"use client"

import { motion } from "framer-motion"
import LuxuryBackground from "@/components/ui/luxury-background"

export default function AboutHero() {
  return (
    <LuxuryBackground
      variant="hero"
      className="flex items-center justify-center"
    >

      <div className="container relative z-10 mx-auto px-6 py-20 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="mb-8 font-serif text-5xl font-extrabold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
            <span className="block mb-4" style={{ 
              textShadow: "0 4px 20px rgba(0,0,0,0.3), 0 2px 10px rgba(199,157,42,0.2)" 
            }}>
              הכירו את...
            </span>
            <span 
              className="block bg-gradient-to-l from-white via-gray-0 to-white bg-clip-text text-transparent"
              style={{ 
                textShadow: "0 4px 20px rgba(0,0,0,0.4)" 
              }}
            >
              סוכנות נדל"ן - קי האוס
            </span>
          </h1>
          
          <motion.p 
            className="mx-auto mb-10 max-w-4xl text-xl text-blue-100 md:text-2xl font-light leading-relaxed"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            החזון, האנשים והערכים שמאחורי סוכנות הנדל"ן המובילה באילת
          </motion.p>
          
          <motion.div
            className="mx-auto h-1.5 w-32 rounded-full"
            style={{
              background: "linear-gradient(90deg, #c79d2a 0%, rgba(199,157,42,0.3) 50%, #c79d2a 100%)",
              boxShadow: "0 4px 20px rgba(199,157,42,0.4), 0 2px 10px rgba(199,157,42,0.2)",
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          />
        </motion.div>
      </div>

    </LuxuryBackground>
  )
}
