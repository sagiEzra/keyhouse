"use client"

import { motion } from "framer-motion"

interface ValuationDisclaimerProps {
  className?: string
  delay?: number
}

/**
 * Reusable disclaimer component for property valuation disclaimers
 * Used on property-valuation page and selling page
 */
export default function ValuationDisclaimer({
  className = "",
  delay = 0.5
}: ValuationDisclaimerProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className={`mt-8 text-center ${className}`}
    >
      <p className="text-sm leading-relaxed" style={{ color: "rgba(25,39,74,0.6)" }}>
        * ההערכה מתבססת על ניתוח שוק השוואתי של מתווכת מוסמכת בעלת רישיון מטעם משרד המשפטים ואינה מתיימרת להיות הערכת שמאות מקצועית
      </p>
    </motion.div>
  )
}
