"use client"

import { motion } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { useInView } from "framer-motion"
import LuxuryBackground from "@/components/ui/luxury-background"
import LuxuryCard from "@/components/ui/luxury-card"
import SectionHeader from "@/components/ui/section-header"

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

  // Determine grid layout based on number of stats
  const getGridClasses = () => {
    const count = stats.length
    // Mobile always 1 column, tablet 2 columns
    let classes = "grid gap-8 md:grid-cols-2"

    // Desktop: adapt based on count
    if (count === 2) {
      classes += " lg:grid-cols-2 lg:max-w-3xl lg:mx-auto"
    } else if (count === 3) {
      classes += " lg:grid-cols-3 lg:max-w-5xl lg:mx-auto"
    } else {
      // 4 or more: full width with 4 columns (default behavior)
      classes += " lg:grid-cols-4"
    }

    return classes
  }

  return (
    <LuxuryBackground
      variant="light"
      className="py-24"
    >

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader
          title={title}
          subtitle={description}
          className="mb-20"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={getGridClasses()}
        >
          {stats.map((stat, index) => {
            const ref = useRef<HTMLDivElement>(null)
            const inView = useInView(ref, { once: true })
            const animatedValue = useCountUp(stat.value, inView)
            return (
              <motion.div key={index} variants={itemVariants} ref={ref}>
                <LuxuryCard className="grid text-center h-full">
                  {/* Animated stat value */}
                  <div className="mb-4 text-5xl md:text-4xl lg:text-5xl font-serif font-bold transition-colors duration-300" style={{ color: "#c79d2a" }}>
                    {stat.type === 'precentage'
                      ? `${animatedValue}%`
                      : stat.type === '+'
                      ? `+${animatedValue}`
                      : animatedValue}
                  </div>

                  {/* Label */}
                  <div className="text-lg font-medium leading-relaxed" style={{ color: "rgba(25,39,74,0.97)" }}>
                    {stat.label}
                  </div>
                </LuxuryCard>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </LuxuryBackground>
  )
}
