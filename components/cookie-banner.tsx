import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import LuxuryButton from "./ui/luxury-button"

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  advertising: boolean
  functional: boolean
  consentGiven: boolean
  timestamp: string
}

interface CookieBannerProps {
  onOpenPreferences: () => void
}

export default function CookieBanner({ onOpenPreferences }: CookieBannerProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const checkConsent = () => {
      const savedConsent = localStorage.getItem('cookieConsent')
      if (!savedConsent) {
        // Small delay for better UX
        setTimeout(() => setIsVisible(true), 1000)
      } else {
        setIsVisible(false)
      }
    }

    checkConsent()

    // Listen for storage changes (when preferences are saved from modal)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'cookieConsent') {
        setIsVisible(false)
      }
    }

    // Listen for custom event when consent is saved
    const handleConsentSaved = () => {
      setIsVisible(false)
    }

    window.addEventListener('storage', handleStorageChange)
    window.addEventListener('cookieConsentSaved', handleConsentSaved)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('cookieConsentSaved', handleConsentSaved)
    }
  }, [])

  const handleAcceptAll = () => {
    const preferences: CookiePreferences = {
      necessary: true,
      analytics: true,
      advertising: true,
      functional: true,
      consentGiven: true,
      timestamp: new Date().toISOString()
    }
    localStorage.setItem('cookieConsent', JSON.stringify(preferences))
    setIsVisible(false)
  }

  const handleRejectAll = () => {
    const preferences: CookiePreferences = {
      necessary: true, // Always true
      analytics: false,
      advertising: false,
      functional: false,
      consentGiven: true,
      timestamp: new Date().toISOString()
    }
    localStorage.setItem('cookieConsent', JSON.stringify(preferences))
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          dir="rtl"
          className="fixed bottom-6 right-6 z-[9999] w-[95%] max-w-md"
        >
          <div
            className="relative overflow-hidden rounded-3xl p-6 shadow-2xl backdrop-blur-xl"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(248,249,255,0.95) 50%, rgba(255,255,255,0.98) 100%)",
              boxShadow: "0 25px 50px rgba(25,39,74,0.2), 0 10px 25px rgba(25,39,74,0.15), inset 0 1px 0 rgba(255,255,255,0.6)",
              border: "1px solid rgba(25,39,74,0.1)"
            }}
          >
            {/* Decorative glow effect */}
            <div
              className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-30 pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(199,157,42,0.3) 0%, transparent 70%)",
                filter: "blur(40px)"
              }}
            />

            {/* Content */}
            <div className="relative z-10">
              <div className="mb-4">
                <h3 className="font-serif text-2xl font-bold mb-2" style={{ color: "rgba(25,39,74,0.97)" }}>
                  🍪 קובצי Cookie
                </h3>
                <p className="text-base leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                  אנחנו משתמשים בעוגיות כדי לשפר את חווית הגלישה שלך ולספק שירותים מותאמים אישית.
                </p>
              </div>

              {/* Buttons */}
              <div className="space-y-3 mb-4">
                {/* Accept All - Full Width */}
                <button
                  onClick={handleAcceptAll}
                  className="w-full rounded-2xl px-4 py-3 text-base font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                  style={{
                    background: "linear-gradient(135deg, #c79d2a 0%, rgba(199,157,42,0.85) 100%)",
                    color: "#ffffff",
                    boxShadow: "0 8px 20px rgba(199,157,42,0.3), inset 0 1px 0 rgba(255,255,255,0.2)"
                  }}
                >
                  קבל הכל
                </button>

                {/* Reject All & Manage Preferences - Same Row */}
                <div className="flex gap-3">
                  <button
                    onClick={handleRejectAll}
                    className="flex-1 rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                    style={{
                      background: "linear-gradient(135deg, rgba(25,39,74,0.08) 0%, rgba(25,39,74,0.04) 100%)",
                      color: "rgba(25,39,74,0.97)",
                      boxShadow: "0 8px 20px rgba(25,39,74,0.1), inset 0 1px 0 rgba(255,255,255,0.6)",
                      border: "1px solid rgba(25,39,74,0.15)"
                    }}
                  >
                    דחה הכל
                  </button>
                  <button
                    onClick={onOpenPreferences}
                    className="flex-1 rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                    style={{
                      background: "linear-gradient(135deg, rgba(199,157,42,0.12) 0%, rgba(199,157,42,0.06) 100%)",
                      color: "rgba(25,39,74,0.97)",
                      boxShadow: "0 8px 20px rgba(199,157,42,0.15), inset 0 1px 0 rgba(255,255,255,0.6)",
                      border: "1px solid rgba(199,157,42,0.3)"
                    }}
                  >
                    ניהול העדפות
                  </button>
                </div>
              </div>

              {/* Footer link */}
              <div className="text-center pt-3 border-t" style={{ borderColor: "rgba(25,39,74,0.1)" }}>
                <Link
                  href="/terms"
                  className="text-sm transition-colors duration-300 hover:text-[#c79d2a] underline"
                  style={{ color: "rgba(25,39,74,0.6)" }}
                >
                  תקנון ותנאי שימוש
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
