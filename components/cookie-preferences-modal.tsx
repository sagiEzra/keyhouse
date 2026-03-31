import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa"

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  advertising: boolean
  functional: boolean
  consentGiven: boolean
  timestamp: string
}

interface CookieCategory {
  id: keyof Omit<CookiePreferences, 'consentGiven' | 'timestamp'>
  title: string
  description: string
  alwaysEnabled?: boolean
}

interface CookiePreferencesModalProps {
  isOpen: boolean
  onClose: () => void
}

const cookieCategories: CookieCategory[] = [
  {
    id: 'necessary',
    title: 'קובצי Cookie הכרחיים לחלוטין',
    description: 'קובצי Cookie הכרחיים נדרשים כדי לאפשר את התכונות הבסיסיות של אתר זה, כגון מתן כניסה מאובטחת או התאמת העדפות ההסכמה שלך. קובצי Cookie אלה אינם מאחסנים נתונים המאפשרים זיהוי אישי.',
    alwaysEnabled: true
  },
  {
    id: 'analytics',
    title: 'עוגיות אנליטיקה',
    description: 'קובצי Cookie אנליטיים משמשים להבנת האופן שבו מבקרים מקיימים אינטראקציה עם האתר. קובצי Cookie אלה עוזרים לספק מידע על מדדים כגון מספר המבקרים, שיעור הנטישה, מקור התנועה וכו\'.'
  },
  {
    id: 'advertising',
    title: 'עוגיות פרסום',
    description: 'קובצי Cookie של פרסום משמשים כדי לספק למבקרים פרסומות מותאמות אישית המבוססות על הדפים שבהם ביקרתם בעבר ולנתח את יעילות קמפייני הפרסום.'
  },
  {
    id: 'functional',
    title: 'עוגיות פונקציונליות',
    description: 'קובצי Cookie פונקציונליים מסייעים בביצוע פונקציות מסוימות כמו שיתוף תוכן האתר בפלטפורמות מדיה חברתית, איסוף משוב ותכונות אחרות של צד שלישי.'
  }
]

export default function CookiePreferencesModal({ isOpen, onClose }: CookiePreferencesModalProps) {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    advertising: false,
    functional: false,
    consentGiven: false,
    timestamp: ''
  })
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set())

  useEffect(() => {
    // Load saved preferences
    const saved = localStorage.getItem('cookieConsent')
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        setPreferences(parsed)
      } catch (e) {
        console.error('Failed to parse cookie preferences', e)
      }
    }
  }, [isOpen])

  const toggleCategory = (categoryId: keyof Omit<CookiePreferences, 'consentGiven' | 'timestamp'>) => {
    if (categoryId === 'necessary') return // Can't toggle necessary cookies
    setPreferences(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }))
  }

  const toggleExpanded = (categoryId: string) => {
    setExpandedCategories(prev => {
      const newSet = new Set(prev)
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId)
      } else {
        newSet.add(categoryId)
      }
      return newSet
    })
  }

  const handleAcceptAll = () => {
    const newPreferences: CookiePreferences = {
      necessary: true,
      analytics: true,
      advertising: true,
      functional: true,
      consentGiven: true,
      timestamp: new Date().toISOString()
    }
    localStorage.setItem('cookieConsent', JSON.stringify(newPreferences))

    // Dispatch event to notify banner to close
    window.dispatchEvent(new CustomEvent('cookieConsentSaved'))

    onClose()
  }

  const handleRejectAll = () => {
    const newPreferences: CookiePreferences = {
      necessary: true,
      analytics: false,
      advertising: false,
      functional: false,
      consentGiven: true,
      timestamp: new Date().toISOString()
    }
    localStorage.setItem('cookieConsent', JSON.stringify(newPreferences))

    // Dispatch event to notify banner to close
    window.dispatchEvent(new CustomEvent('cookieConsentSaved'))

    onClose()
  }

  const handleSavePreferences = () => {
    const newPreferences: CookiePreferences = {
      ...preferences,
      consentGiven: true,
      timestamp: new Date().toISOString()
    }
    localStorage.setItem('cookieConsent', JSON.stringify(newPreferences))

    // Dispatch event to notify banner to close
    window.dispatchEvent(new CustomEvent('cookieConsentSaved'))

    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-[10000] backdrop-blur-md"
            style={{ backgroundColor: "rgba(25,39,74,0.6)" }}
          />

          {/* Modal Container - Fixed positioning and centering */}
          <div className="fixed inset-0 z-[10001] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              dir="rtl"
              className="relative w-full max-w-3xl max-h-[90vh] overflow-hidden rounded-3xl"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(248,249,255,0.95) 50%, rgba(255,255,255,0.98) 100%)",
                boxShadow: "0 30px 60px rgba(25,39,74,0.3), 0 15px 30px rgba(25,39,74,0.2), inset 0 1px 0 rgba(255,255,255,0.6)",
                border: "1px solid rgba(25,39,74,0.15)"
              }}
            >
              {/* Decorative glow */}
              <div
                className="absolute -top-32 -left-32 w-64 h-64 rounded-full opacity-20 pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(199,157,42,0.4) 0%, transparent 70%)",
                  filter: "blur(60px)"
                }}
              />

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-6 left-6 z-10 flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:rotate-90"
                style={{
                  background: "linear-gradient(135deg, rgba(25,39,74,0.08) 0%, rgba(25,39,74,0.04) 100%)",
                  color: "rgba(25,39,74,0.97)",
                  boxShadow: "0 8px 20px rgba(25,39,74,0.15), inset 0 1px 0 rgba(255,255,255,0.6)",
                  border: "1px solid rgba(25,39,74,0.1)"
                }}
                aria-label="סגור"
              >
                <FaTimes className="h-5 w-5" />
              </button>

              {/* Scrollable content */}
              <div className="relative overflow-y-auto max-h-[90vh] p-8 lg:p-12">
                {/* Header */}
                <div className="mb-8">
                  <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-4" style={{ color: "rgba(25,39,74,0.97)" }}>
                    ניהול העדפות Cookie
                  </h2>
                  <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                    ניתן לנהל את העדפות העוגיות שלך כאן. בחר אילו סוגי עוגיות תרצה לאפשר באתר.
                  </p>
                </div>

                {/* Cookie categories */}
                <div className="space-y-4 mb-8">
                  {cookieCategories.map((category, index) => (
                    <motion.div
                      key={category.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="overflow-hidden rounded-2xl"
                      style={{
                        background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,249,255,0.9) 100%)",
                        boxShadow: "0 8px 20px rgba(25,39,74,0.08), inset 0 1px 0 rgba(255,255,255,0.6)",
                        border: "1px solid rgba(25,39,74,0.1)"
                      }}
                    >
                      <div className="p-6">
                        {/* Category header */}
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex-1">
                            <h3 className="font-serif text-xl font-bold mb-1" style={{ color: "rgba(25,39,74,0.97)" }}>
                              {category.title}
                            </h3>
                            {category.alwaysEnabled && (
                              <span className="text-sm font-medium" style={{ color: "rgba(199,157,42,0.9)" }}>
                                תמיד מופעלים
                              </span>
                            )}
                          </div>

                          {/* Toggle switch */}
                          <div className="flex items-center gap-4">
                            <button
                              onClick={() => toggleExpanded(category.id)}
                              className="flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
                              style={{
                                background: "linear-gradient(135deg, rgba(25,39,74,0.08) 0%, rgba(25,39,74,0.04) 100%)",
                                color: "rgba(25,39,74,0.97)",
                                boxShadow: "0 4px 12px rgba(25,39,74,0.1)"
                              }}
                              aria-label={expandedCategories.has(category.id) ? 'סגור' : 'פתח פירוט'}
                            >
                              {expandedCategories.has(category.id) ? (
                                <FaChevronUp className="h-4 w-4" />
                              ) : (
                                <FaChevronDown className="h-4 w-4" />
                              )}
                            </button>

                            <button
                              onClick={() => toggleCategory(category.id)}
                              disabled={category.alwaysEnabled}
                              className={`relative h-8 w-16 rounded-full transition-all duration-300 ${
                                category.alwaysEnabled ? 'cursor-not-allowed opacity-50' : 'hover:scale-105'
                              }`}
                              style={{
                                background: preferences[category.id]
                                  ? "linear-gradient(135deg, #c79d2a 0%, rgba(199,157,42,0.85) 100%)"
                                  : "linear-gradient(135deg, rgba(25,39,74,0.15) 0%, rgba(25,39,74,0.1) 100%)",
                                boxShadow: preferences[category.id]
                                  ? "0 4px 12px rgba(199,157,42,0.3), inset 0 1px 0 rgba(255,255,255,0.2)"
                                  : "0 4px 12px rgba(25,39,74,0.1), inset 0 1px 0 rgba(255,255,255,0.3)"
                              }}
                              aria-label={`${preferences[category.id] ? 'כבה' : 'הפעל'} ${category.title}`}
                            >
                              <motion.div
                                animate={{ x: preferences[category.id] ? -28 : 0 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="absolute right-1 top-1 h-6 w-6 rounded-full bg-white shadow-lg"
                              />
                            </button>
                          </div>
                        </div>

                        {/* Expandable description */}
                        <AnimatePresence>
                          {expandedCategories.has(category.id) && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="pt-3 mt-3 border-t" style={{ borderColor: "rgba(25,39,74,0.1)" }}>
                                <p className="text-base leading-relaxed" style={{ color: "rgba(25,39,74,0.75)" }}>
                                  {category.description}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="space-y-3 pt-6 border-t" style={{ borderColor: "rgba(25,39,74,0.15)" }}>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={handleAcceptAll}
                      className="rounded-2xl px-6 py-4 text-base font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                      style={{
                        background: "linear-gradient(135deg, #c79d2a 0%, rgba(199,157,42,0.85) 100%)",
                        color: "#ffffff",
                        boxShadow: "0 8px 20px rgba(199,157,42,0.3), inset 0 1px 0 rgba(255,255,255,0.2)"
                      }}
                    >
                      קבל הכל
                    </button>
                    <button
                      onClick={handleRejectAll}
                      className="rounded-2xl px-6 py-4 text-base font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                      style={{
                        background: "linear-gradient(135deg, rgba(25,39,74,0.08) 0%, rgba(25,39,74,0.04) 100%)",
                        color: "rgba(25,39,74,0.97)",
                        boxShadow: "0 8px 20px rgba(25,39,74,0.1), inset 0 1px 0 rgba(255,255,255,0.6)",
                        border: "1px solid rgba(25,39,74,0.15)"
                      }}
                    >
                      דחה הכל
                    </button>
                  </div>

                  <button
                    onClick={handleSavePreferences}
                    className="w-full rounded-2xl px-6 py-4 text-base font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                    style={{
                      background: "linear-gradient(135deg, rgba(199,157,42,0.12) 0%, rgba(199,157,42,0.06) 100%)",
                      color: "rgba(25,39,74,0.97)",
                      boxShadow: "0 8px 20px rgba(199,157,42,0.15), inset 0 1px 0 rgba(255,255,255,0.6)",
                      border: "1px solid rgba(199,157,42,0.3)"
                    }}
                  >
                    שמירת העדפות
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
