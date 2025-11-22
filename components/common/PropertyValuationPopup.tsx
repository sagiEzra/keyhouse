"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { motion, AnimatePresence } from "framer-motion"
import { FaTimes } from "react-icons/fa"
import LuxuryButton from "@/components/ui/luxury-button"

const POPUP_STORAGE_KEY = "propertyValuationPopupLastShown"
const POPUP_DELAY_MS = 5000 // 5 seconds
const POPUP_COOLDOWN_MS = 24 * 60 * 60 * 1000 // 24 hours

export function PropertyValuationPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Don't show popup if already on the valuation page
    if (router.pathname === "/property-valuation") {
      return
    }

    // Check localStorage for last shown timestamp
    const lastShown = localStorage.getItem(POPUP_STORAGE_KEY)
    const now = Date.now()

    // Determine if we should show the popup
    const shouldShow = !lastShown || (now - parseInt(lastShown, 10) >= POPUP_COOLDOWN_MS)

    if (shouldShow) {
      // Show popup after delay
      const timer = setTimeout(() => {
        setIsVisible(true)
        // Update localStorage
        localStorage.setItem(POPUP_STORAGE_KEY, now.toString())
      }, POPUP_DELAY_MS)

      return () => clearTimeout(timer)
    }
  }, [router.pathname])

  const handleClose = () => {
    setIsVisible(false)
  }

  const handleNavigate = () => {
    setIsVisible(false)
    router.push("/property-valuation")
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -20, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -20, y: 20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed z-[9999] bottom-6 left-6 w-[320px] md:w-[360px]"
        >
          <div
            className="relative rounded-2xl p-6 shadow-2xl"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(248,249,255,0.95) 50%, rgba(255,255,255,0.98) 100%)",
              boxShadow: "0 25px 50px rgba(25,39,74,0.25), 0 10px 25px rgba(25,39,74,0.15), inset 0 1px 0 rgba(255,255,255,0.6)",
              border: "1px solid rgba(25,39,74,0.1)"
            }}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-3 left-3 p-1.5 rounded-full transition-all duration-300 hover:bg-gray-100"
              aria-label="סגור"
              style={{ color: "rgba(25,39,74,0.6)" }}
            >
              <FaTimes className="h-4 w-4" />
            </button>

            {/* Content */}
            <div className="text-center pt-2">
              {/* Decorative gold accent */}
              <div
                className="w-12 h-1 mx-auto mb-4 rounded-full"
                style={{
                  background: "linear-gradient(90deg, #c79d2a 0%, rgba(199,157,42,0.8) 100%)",
                  boxShadow: "0 2px 8px rgba(199,157,42,0.4)"
                }}
              />

              <h3
                className="text-xl font-serif font-bold mb-3 leading-snug"
                style={{ color: "rgba(25,39,74,0.97)" }}
              >
                רוצה לדעת בכמה אפשר למכור את הבית שלך?
              </h3>

              <p
                className="text-base leading-relaxed mb-5"
                style={{ color: "rgba(25,39,74,0.8)" }}
              >
                קבל הערכת שווי שוק ללא עלות וללא התחייבות (לא שמאות)
              </p>

              <LuxuryButton onClick={handleNavigate} className="w-full justify-center">
                קבל הערכת שווי עכשיו
              </LuxuryButton>

              <button
                onClick={handleClose}
                className="mt-3 text-sm underline transition-colors duration-300 hover:text-[#c79d2a]"
                style={{ color: "rgba(25,39,74,0.6)" }}
              >
                אולי מאוחר יותר
              </button>
            </div>

            {/* Decorative element */}
            <div
              className="absolute -bottom-3 -right-3 w-16 h-16 rounded-full blur-xl opacity-10 pointer-events-none"
              style={{ background: "linear-gradient(135deg, #c79d2a 0%, rgba(199,157,42,0.8) 100%)" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
