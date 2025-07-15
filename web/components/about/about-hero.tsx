"use client"

import { motion } from "framer-motion"

export default function AboutHero() {
  return (
    <section
      className="relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-20"
      style={{
        background: "linear-gradient(135deg, #23214a 0%, #23214a 100%)",
      }}
    >
      {/* Decorative gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute left-1/2 top-1/4 w-[70vw] h-[50vw] max-w-4xl -translate-x-1/2 rounded-full blur-3xl opacity-30"
          style={{
            background: "linear-gradient(135deg, #f1c23b40 0%, #f1c23b20 50%, transparent 100%)",
          }}
        />
        <div
          className="absolute right-0 bottom-0 w-1/3 h-1/3 blur-2xl opacity-20"
          style={{
            background: "linear-gradient(45deg, #f1c23b60 0%, transparent 100%)",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-16 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="mb-6 font-serif text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl drop-shadow-2xl">
            מהשקעה אישית לתשוקה של שליחות
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-blue-100 md:text-2xl font-medium drop-shadow-lg">
            סיפור ההצלחה שלנו בנדל"ן
          </p>
          <div
            className="mx-auto h-2 w-24 rounded-full"
            style={{
              background: "linear-gradient(90deg, #f1c23b 0%, #fff 100%)",
              boxShadow: "0 2px 12px #f1c23b55",
            }}
          />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}
