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
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998]"
            onClick={handleClose}
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20, x: "-50%" }}
            animate={{ opacity: 1, scale: 1, y: "-50%", x: "-50%" }}
            exit={{ opacity: 0, scale: 0.9, y: 20, x: "-50%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed z-[9999] w-[90%] max-w-lg"
            style={{
              top: "50%",
              left: "50%"
            }}
          >
            <div
              className="relative rounded-3xl p-8 md:p-10 shadow-2xl"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(248,249,255,0.95) 50%, rgba(255,255,255,0.98) 100%)",
                boxShadow: "0 25px 50px rgba(25,39,74,0.2), 0 10px 25px rgba(25,39,74,0.15), inset 0 1px 0 rgba(255,255,255,0.6)",
                border: "1px solid rgba(25,39,74,0.1)"
              }}
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 left-4 p-2 rounded-full transition-all duration-300 hover:bg-gray-100"
                aria-label="סגור"
                style={{ color: "rgba(25,39,74,0.6)" }}
              >
                <FaTimes className="h-5 w-5" />
              </button>

              {/* Content */}
              <div className="text-center">
                {/* Decorative gold accent */}
                <div
                  className="w-16 h-1 mx-auto mb-6 rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #c79d2a 0%, rgba(199,157,42,0.8) 100%)",
                    boxShadow: "0 2px 8px rgba(199,157,42,0.4)"
                  }}
                />

                <h2
                  className="text-3xl md:text-4xl font-serif font-bold mb-4 leading-tight"
                  style={{ color: "rgba(25,39,74,0.97)" }}
                >
                  רוצה לדעת מה השווי של הנכס שלך?
                </h2>

                <p
                  className="text-lg md:text-xl leading-relaxed mb-8"
                  style={{ color: "rgba(25,39,74,0.8)" }}
                >
                  קבל הערכת שווי מקצועית ללא עלות וללא התחייבות
                </p>

                <LuxuryButton size="large" onClick={handleNavigate} className="w-full justify-center">
                  קבל הערכת שווי עכשיו
                </LuxuryButton>

                <button
                  onClick={handleClose}
                  className="mt-4 text-base underline transition-colors duration-300 hover:text-[#c79d2a]"
                  style={{ color: "rgba(25,39,74,0.6)" }}
                >
                  אולי מאוחר יותר
                </button>
              </div>

              {/* Decorative elements */}
              <div
                className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full blur-2xl opacity-10 pointer-events-none"
                style={{ background: "linear-gradient(135deg, #c79d2a 0%, rgba(199,157,42,0.8) 100%)" }}
              />
              <div
                className="absolute -top-4 -left-4 w-20 h-20 rounded-full blur-2xl opacity-10 pointer-events-none"
                style={{ background: "linear-gradient(135deg, rgba(25,39,74,0.97) 0%, rgba(29,42,86,0.95) 100%)" }}
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
