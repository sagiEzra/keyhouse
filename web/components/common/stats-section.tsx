"use client"

import { motion } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { useInView } from "framer-motion"

interface Stat {
  value: number
  label: string
  type?: 'number' | 'precentage' | '+'
}

interface StatsSectionProps {
  title: string
  description: string
  stats: Stat[]
}

// Counting animation hook
function useCountUp(target: number, inView: boolean, duration = 1600) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return
    let start = 0
    const startTime = performance.now()
    function animate(now: number) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const value = Math.floor(progress * (target - start) + start)
      setCount(value)
      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(target)
      }
    }
    requestAnimationFrame(animate)
    // Only run once per inView
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, target])
  return count
}

export default function StatsSection({ title, description, stats }: StatsSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #23214a0d 0%, #fff 50%, #f1c23b0d 100%)",
      }}
    >
      {/* Decorative gradients */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[60vw] h-[40vw] rounded-full blur-3xl opacity-60"
        style={{
          background: "linear-gradient(135deg, #23214a4d 0%, #23214a1a 100%)",
        }}
      />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2
            className="mb-4 font-serif text-3xl font-bold md:text-4xl tracking-tight drop-shadow-xl"
            style={{ color: "#23214a" }}
          >
            {title}
          </h2>
          <p className="mx-auto max-w-3xl text-lg font-medium" style={{ color: "#23214a" }}>
            {description}
          </p>
          <div
            className="mx-auto mt-6 h-1 w-28 rounded-full"
            style={{
              background: "linear-gradient(90deg, #f1c23b 0%, #fff 100%)",
              boxShadow: "0 2px 12px #f1c23b55",
            }}
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, index) => {
            const ref = useRef<HTMLDivElement>(null)
            const inView = useInView(ref, { once: true })
            const animatedValue = useCountUp(stat.value, inView)
            return (
              <motion.div
                key={index}
                ref={ref}
                variants={itemVariants}
                className="rounded-xl bg-white/90 p-8 text-center shadow-xl border backdrop-blur-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                style={{
                  borderColor: "#23214a33",
                  boxShadow: "0 4px 24px 0 #23214a14, 0 1.5px 8px 0 #23214a08",
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px 0 #f1c23b80, 0 1.5px 8px 0 #f1c23b40"
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 24px 0 #23214a14, 0 1.5px 8px 0 #23214a08"
                }}
              >
                <div className="mb-4 text-4xl font-bold" style={{ color: "#f1c23b" }}>
                  {stat.type === 'precentage'
                    ? `${animatedValue}%`
                    : stat.type === '+'
                    ? `+${animatedValue}`
                    : animatedValue}
                </div>
                <div className="font-medium" style={{ color: "#23214a" }}>
                  {stat.label}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
