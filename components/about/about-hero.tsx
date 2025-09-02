"use client"

import { motion } from "framer-motion"

export default function AboutHero() {
  return (
    <section
      className="relative flex min-h-[50vh] items-center justify-center overflow-hidden pt-20"
      style={{
        background: "linear-gradient(135deg, #23214a 0%, #2d2b5a 50%, #23214a 100%)",
      }}
    >
      {/* Enhanced decorative elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Main gradient orb */}
        <div
          className="absolute left-1/2 top-1/3 w-[80vw] h-[60vw] max-w-5xl -translate-x-1/2 rounded-full blur-3xl opacity-20"
          style={{
            background: "radial-gradient(circle, #f1c23b40 0%, #f1c23b20 30%, transparent 70%)",
          }}
        />
        {/* Secondary accent */}
        <div
          className="absolute right-0 top-0 w-1/2 h-1/2 blur-2xl opacity-15"
          style={{
            background: "linear-gradient(225deg, #f1c23b60 0%, transparent 70%)",
          }}
        />
        {/* Left accent */}
        <div
          className="absolute left-0 bottom-0 w-1/3 h-1/3 blur-2xl opacity-10"
          style={{
            background: "linear-gradient(45deg, #f1c23b40 0%, transparent 100%)",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 py-20 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="mb-8 font-serif text-5xl font-extrabold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
            <span className="block mb-4" style={{ 
              textShadow: "0 4px 20px rgba(0,0,0,0.3), 0 2px 10px rgba(241,194,59,0.2)" 
            }}>
              הכירו את
            </span>
            <span 
              className="block bg-gradient-to-l from-white via-gray-100 to-white bg-clip-text text-transparent"
              style={{ 
                textShadow: "0 4px 20px rgba(0,0,0,0.4)" 
              }}
            >
              קי האוס
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
              background: "linear-gradient(90deg, #f1c23b 0%, rgba(241,194,59,0.3) 50%, #f1c23b 100%)",
              boxShadow: "0 4px 20px rgba(241,194,59,0.4), 0 2px 10px rgba(241,194,59,0.2)",
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          />
        </motion.div>
      </div>

      {/* Enhanced bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/60 to-transparent"></div>
    </section>
  )
}
