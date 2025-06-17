"use client"

import { motion } from "framer-motion"

export default function AboutHero() {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-gradient-to-b from-blue-900 to-blue-800 pt-20">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] bg-repeat opacity-10"></div>
        <div className="h-full w-full bg-gradient-to-b from-blue-900/80 to-blue-800"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 py-16 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="mb-6 font-serif text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
            מהשקעה אישית לתשוקה של שליחות
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-blue-100 md:text-2xl">סיפור ההצלחה שלנו בנדל"ן</p>
          <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500"></div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}
