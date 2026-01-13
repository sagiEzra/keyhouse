"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaChevronRight, FaChevronLeft, FaStar } from "react-icons/fa"
import LuxuryBackground from "@/components/ui/luxury-background"
import SectionHeader from "@/components/ui/section-header"

export default function TestimonialsCarousel() {
  const testimonials = [
    {
      id: 1,
      name: "איגור דורנב ויעל טל",
      role: "יעוץ במכירת נכס",
      content:
        "רוצים להמליץ בחום על רותם קהלון, ה-מתווכת באילת. רותם מלווה אותנו מזה מספר שנים בניהול נכסינו. בזכותה, תהליך שלרוב מרתיע, מורכב ומעורר כאב ראש לא קטן, הופך לרגוע, ברור ובטוח. רותם הפגינה בקיאות, מקצועיות ונחישות, לצד רגישות, זמינות, הבנה, והתחשבות בצרכינו. כל אלה תרמו למכירת נכס תוך פרק זמן קצר, ולשביעות רצונם של שני הצדדים. לסיכום, ממליצים בלב שלם לכל מי שמחפש מתווכת אמינה, מקצועית, ואכפתית באמת.",
      rating: 5,
    },
    {
      id: 2,
      name: "ליאת צור",
      role: "מכירת דירה",
      content:
        "פגשתי אישה מדהימה עם נכונות לעזור בכל בקשתי לתווך הדירה , נעימה סבלנית ומיקצועית , משרה בטחון שבחרתי נכון עם בעלי הבית ששכרתי ❤️\nממליצה בחום והמון אהבה שהיא תלווה אותכם בתהליך עד לכדי דיוק מלא למבוקשכם ,\nתודה רבה יקרה השירות שלך מדהים 🙏",
      rating: 5,
    },
    {
      id: 3,
      name: "ויקטוריה זנטי",
      role: "יעוץ ברכישת נכס",
      content:
        "חיפשתי דירה להשכרה במשך זמן רב עבור אימא שלי שבשל היותה מוגבלת פיזית היה קשה יותר למצוא דירה מתאימה. רותם ליוותה אותנו במקצועיות, דיוק ורגישות לאורך כל התהליך עד לחתימת החוזה וגם לאחריו. היינו כל כך מרוצים שרצינו להוסיף כסף על השירות אך היא סירבה. כמובן שאם אני בעתיד אצטרך או מישהו ממקורבי אמליץ על רותם באופן חד משמעי.",
      rating: 5,
    },
    {
      id: 4,
      name: "משפחת כהן",
      role: "מכירת דירה",
      content:
        "רותם ליוותה אותנו במכירת הדירה במקצועיות, סבלנות ואכפתיות. תמיד הייתה זמינה לכל שאלה ודאגה שהכל יתבצע בצורה חלקה. ממליצים עליה בחום!",
      rating: 5,
    },
    {
      id: 5,
      name: "אלינה פ.",
      role: "רכישת דירה",
      content:
        "רותם עזרה לנו למצוא את הדירה המושלמת. השירות היה אישי, מקצועי ומלא אכפתיות. תודה רבה על הכל!",
      rating: 5,
    },
    {
      id: 6,
      name: "אורית לוי",
      role: "מכירת נכס",
      content:
        "רותם ליוותה אותנו במכירת הנכס במקצועיות רבה, עם המון סבלנות והבנה. תמיד הייתה זמינה ונתנה מענה מהיר לכל שאלה. ממליצה עליה מכל הלב!",
      rating: 5,
    },
    {
      id: 7,
      name: "יוסי בן דוד",
      role: "רכישת דירה",
      content:
        "רותם עזרה לי למצוא דירה בדיוק לפי הצרכים שלי. השירות היה מקצועי, אמין ואדיב. תודה רבה!",
      rating: 5,
    },
    {
      id: 8,
      name: "מרינה ש.",
      role: "יעוץ במכירת נכס",
      content:
        "רותם נתנה לנו שירות יוצא דופן במכירת הדירה. תמיד הייתה זמינה, מקצועית ואכפתית. ממליצים עליה בחום!",
      rating: 5,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('left')
  const [mounted, setMounted] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Responsive cards per view
  const getCardsPerView = () => {
    if (typeof window === 'undefined') return 1
    if (window.innerWidth >= 1024) return 3 // Desktop: 3 cards
    if (window.innerWidth >= 768) return 2  // Tablet: 2 cards
    return 1 // Mobile: 1 card
  }

  const [cardsPerView, setCardsPerView] = useState(1) // Start with 1 to match SSR

  // Handle mounting and window resize
  useEffect(() => {
    setMounted(true)
    setCardsPerView(getCardsPerView())

    const handleResize = () => {
      const newCardsPerView = getCardsPerView()
      if (newCardsPerView !== cardsPerView) {
        setCardsPerView(newCardsPerView)
        // Reset to first slide when view changes to prevent index issues
        setCurrentIndex(0)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [cardsPerView])

  const maxIndex = Math.max(0, testimonials.length - cardsPerView)

  const nextSlide = useCallback(() => {
    if (isTransitioning) return
    setSlideDirection('left')
    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1
      return nextIndex > maxIndex ? 0 : nextIndex
    })
  }, [maxIndex, isTransitioning])

  const prevSlide = useCallback(() => {
    if (isTransitioning) return
    setSlideDirection('right')
    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => {
      const prevIdx = prevIndex - 1
      return prevIdx < 0 ? maxIndex : prevIdx
    })
  }, [maxIndex, isTransitioning])

  // Auto-scroll functionality
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(nextSlide, 5000)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPaused, nextSlide])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        prevSlide()
      } else if (event.key === 'ArrowRight') {
        event.preventDefault()
        nextSlide()
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('keydown', handleKeyDown)
      return () => container.removeEventListener('keydown', handleKeyDown)
    }
  }, [nextSlide, prevSlide])

  const handleMouseEnter = () => {
    setIsPaused(true)
  }

  const handleMouseLeave = () => {
    setIsPaused(false)
  }

  const handleTransitionEnd = () => {
    setIsTransitioning(false)
  }

  // Enhanced touch handling (like videos-carousel)
  const touchStartX = useRef<number | null>(null)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current !== null) {
      const dx = e.changedTouches[0].clientX - touchStartX.current
      if (Math.abs(dx) > 50) {
        if (dx > 0) prevSlide()
        else nextSlide()
      }
    }
    touchStartX.current = null
  }

  // Get visible testimonials for current slide
  const getVisibleTestimonials = () => {
    const visibleTestimonials = []
    for (let i = 0; i < cardsPerView; i++) {
      const index = (currentIndex + i) % testimonials.length
      visibleTestimonials.push(testimonials[index])
    }
    return visibleTestimonials
  }

  return (
    <LuxuryBackground variant="light" className="py-32">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader
          title="מה הלקוחות שלנו אומרים"
          subtitle="אנו גאים בשירות שאנו מעניקים ובחוויה שאנו יוצרים עבור לקוחותינו. הנה כמה מהחוויות שלקוחותינו שיתפו איתנו."
          className="mb-20"
        />

        <div
          ref={containerRef}
          className="relative mx-auto max-w-7xl"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          tabIndex={0}
          role="region"
          aria-label="מחזור עדויות לקוחות"
          aria-live="polite"
        >
          {/* Multi-card carousel container */}
          <div className="overflow-visible"
               style={{ background: "transparent" }}>
            {mounted ? (
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={currentIndex}
                  className="flex gap-4 md:gap-6 py-8"
                  style={{ background: "transparent" }}
                  initial={{ 
                    x: slideDirection === 'left' ? '100%' : '-100%',
                    opacity: 0
                  }}
                  animate={{ 
                    x: 0,
                    opacity: 1
                  }}
                  exit={{ 
                    x: slideDirection === 'left' ? '-100%' : '100%',
                    opacity: 0
                  }}
                  transition={{ 
                    type: "spring",
                    stiffness: 150,
                    damping: 20,
                    duration: 0.1
                  }}
                  onAnimationComplete={handleTransitionEnd}
                >
                  {getVisibleTestimonials().map((testimonial, index) => (
                    <div
                      key={`${testimonial.id}-${currentIndex}-${index}`}
                      className={`flex-shrink-0 ${
                        cardsPerView === 1 ? 'w-full' : 
                        cardsPerView === 2 ? 'w-[calc(50%-0.75rem)]' : 
                        'w-[calc(33.333%-1rem)]'
                      }`}
                    >
                      <div className="h-full group cursor-default relative">
                        {/* Multi-layered glow effect */}
                        <div className="absolute -inset-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ zIndex: -1 }}>
                          <div className="absolute inset-0 rounded-3xl"
                               style={{
                                 background: "radial-gradient(ellipse 120% 120% at 50% 50%, rgba(199,157,42,0.15) 0%, rgba(199,157,42,0.08) 35%, transparent 70%)",
                                 filter: "blur(20px)"
                               }} />
                          <div className="absolute inset-2 rounded-3xl"
                               style={{
                                 background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(35,33,74,0.08) 0%, rgba(35,33,74,0.04) 40%, transparent 70%)",
                                 filter: "blur(15px)"
                               }} />
                          <div className="absolute inset-4 rounded-3xl"
                               style={{
                                 background: "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(255,255,255,0.3) 0%, transparent 60%)",
                                 filter: "blur(10px)"
                               }} />
                        </div>
                        
                        {/* Main card */}
                        <div
                          className="relative h-full rounded-3xl bg-gradient-to-br from-white via-white to-gray-50/30 shadow-2xl border backdrop-blur-xl p-8 lg:p-10 flex flex-col transition-all duration-500 group-hover:shadow-3xl group-hover:-translate-y-1"
                          style={{
                            borderColor: "rgba(35,33,74,0.12)",
                            background: "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, #fafafa 50%, rgba(199,157,42,0.02) 100%)",
                            boxShadow: "0 20px 40px rgba(35,33,74,0.08), 0 8px 25px rgba(35,33,74,0.06), inset 0 1px 0 rgba(255,255,255,0.7)",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = "0 30px 60px rgba(35,33,74,0.12), 0 15px 40px rgba(35,33,74,0.08), 0 4px 20px rgba(199,157,42,0.1), inset 0 1px 0 rgba(255,255,255,0.8)"
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = "0 20px 40px rgba(35,33,74,0.08), 0 8px 25px rgba(35,33,74,0.06), inset 0 1px 0 rgba(255,255,255,0.7)"
                          }}
                        >
                          {/* Quote icon - fixed position */}
                          <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                            <svg width="40" height="32" viewBox="0 0 40 32" fill="currentColor" style={{ color: "rgba(25,39,74,0.97)" }}>
                              <path d="M0 16C0 7.163 7.163 0 16 0v8c-4.418 0-8 3.582-8 8v8H0V16zM24 16c0-8.837 7.163-16 16-16v8c-4.418 0-8 3.582-8 8v8H24V16z"/>
                            </svg>
                          </div>

                          {/* Rating stars with enhanced styling */}
                          <div className="mb-6 flex justify-center">
                            <div className="flex items-center gap-1 px-4 py-2 rounded-full group-hover:bg-opacity-20 transition-all duration-300" 
                                 style={{ backgroundColor: "rgba(199,157,42,0.1)" }}
                                 onMouseEnter={(e) => {
                                   e.currentTarget.style.backgroundColor = "rgba(199,157,42,0.2)"
                                 }}
                                 onMouseLeave={(e) => {
                                   e.currentTarget.style.backgroundColor = "rgba(199,157,42,0.1)"
                                 }}>
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <FaStar 
                                  key={i} 
                                  className="h-4 w-4 lg:h-5 lg:w-5 drop-shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:brightness-110" 
                                  style={{
                                    color: "#c79d2a",
                                    filter: "drop-shadow(0 1px 2px rgba(199,157,42,0.3))"
                                  }} 
                                />
                              ))}
                            </div>
                          </div>
                          
                          {/* Content with enhanced typography */}
                          <div className="flex-grow flex flex-col">
                            <div className="relative mb-8 flex-grow">
                              {/* Background pattern */}
                              <div className="absolute inset-0 opacity-5"
                                   style={{
                                     backgroundImage: "radial-gradient(circle at 1px 1px, #23214a 1px, transparent 0)",
                                     backgroundSize: "24px 24px"
                                   }} />
                              
                              <p className="relative text-base lg:text-lg leading-relaxed text-center font-medium"
                                 style={{
                                   color: "rgba(25,39,74,0.97)",
                                   lineHeight: "1.8",
                                   textShadow: "0 1px 2px rgba(25,39,74,0.1)"
                                 }}>
                                <span className="text-2xl lg:text-3xl leading-none" style={{ color: "#c79d2a" }}>"</span>
                                {testimonial.content.length > 200 ? `${testimonial.content.substring(0, 200)}...` : testimonial.content}
                                <span className="text-2xl lg:text-3xl leading-none" style={{ color: "#c79d2a" }}>"</span>
                              </p>
                            </div>
                            
                            {/* Author info with enhanced design */}
                            <div className="text-center relative">
                              {/* Decorative line */}
                              <div className="flex items-center justify-center mb-4">
                                <div className="h-px flex-grow max-w-12" style={{ backgroundColor: "rgba(25,39,74,0.2)" }} />
                                <div className="mx-4 w-2 h-2 rounded-full" style={{ backgroundColor: "#c79d2a" }} />
                                <div className="h-px flex-grow max-w-12" style={{ backgroundColor: "rgba(25,39,74,0.2)" }} />
                              </div>

                              {/* Name with enhanced styling */}
                              <h3 className="text-xl lg:text-2xl font-bold mb-2 transition-all duration-300"
                                  style={{
                                    color: "rgba(25,39,74,0.97)",
                                    textShadow: "0 2px 4px rgba(25,39,74,0.1)"
                                  }}>
                                {testimonial.name}
                              </h3>
                            </div>
                          </div>

                          {/* Bottom accent */}
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 rounded-full opacity-30 group-hover:opacity-80 group-hover:w-20 transition-all duration-500"
                               style={{ backgroundColor: "#c79d2a" }} />
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            ) : (
              // SSR fallback - show first testimonial only with enhanced design
              <div className="flex py-8" style={{ background: "transparent" }}>
                <div className="w-full">
                  <div className="h-full group cursor-default relative">
                    {/* Multi-layered glow effect */}
                    <div className="absolute -inset-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ zIndex: -1 }}>
                      <div className="absolute inset-0 rounded-3xl"
                           style={{
                             background: "radial-gradient(ellipse 120% 120% at 50% 50%, rgba(199,157,42,0.15) 0%, rgba(199,157,42,0.08) 35%, transparent 70%)",
                             filter: "blur(20px)"
                           }} />
                      <div className="absolute inset-2 rounded-3xl"
                           style={{
                             background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(35,33,74,0.08) 0%, rgba(35,33,74,0.04) 40%, transparent 70%)",
                             filter: "blur(15px)"
                           }} />
                      <div className="absolute inset-4 rounded-3xl"
                           style={{
                             background: "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(255,255,255,0.3) 0%, transparent 60%)",
                             filter: "blur(10px)"
                           }} />
                    </div>

                    {/* Main card */}
                    <div
                      className="relative h-full rounded-3xl bg-gradient-to-br from-white via-white to-gray-50/30 shadow-2xl border backdrop-blur-xl p-8 lg:p-10 flex flex-col transition-all duration-500 group-hover:shadow-3xl group-hover:-translate-y-1"
                      style={{
                        borderColor: "rgba(35,33,74,0.12)",
                        background: "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, #fafafa 50%, rgba(199,157,42,0.02) 100%)",
                        boxShadow: "0 20px 40px rgba(35,33,74,0.08), 0 8px 25px rgba(35,33,74,0.06), inset 0 1px 0 rgba(255,255,255,0.7)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = "0 30px 60px rgba(35,33,74,0.12), 0 15px 40px rgba(35,33,74,0.08), 0 4px 20px rgba(199,157,42,0.1), inset 0 1px 0 rgba(255,255,255,0.8)"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = "0 20px 40px rgba(35,33,74,0.08), 0 8px 25px rgba(35,33,74,0.06), inset 0 1px 0 rgba(255,255,255,0.7)"
                      }}
                    >
                      {/* Quote icon */}
                      <div className="absolute top-6 right-6 opacity-10">
                        <svg width="40" height="32" viewBox="0 0 40 32" fill="currentColor" style={{ color: "rgba(25,39,74,0.97)" }}>
                          <path d="M0 16C0 7.163 7.163 0 16 0v8c-4.418 0-8 3.582-8 8v8H0V16zM24 16c0-8.837 7.163-16 16-16v8c-4.418 0-8 3.582-8 8v8H24V16z"/>
                        </svg>
                      </div>

                      {/* Rating stars with enhanced styling */}
                      <div className="mb-6 flex justify-center">
                        <div className="flex items-center gap-1 px-4 py-2 rounded-full"
                             style={{ backgroundColor: "rgba(199,157,42,0.1)" }}>
                          {[...Array(testimonials[0].rating)].map((_, i) => (
                            <FaStar
                              key={i}
                              className="h-4 w-4 lg:h-5 lg:w-5 drop-shadow-sm"
                              style={{
                                color: "#c79d2a",
                                filter: "drop-shadow(0 1px 2px rgba(199,157,42,0.3))"
                              }} 
                            />
                          ))}
                        </div>
                      </div>
                      
                      {/* Content with enhanced typography */}
                      <div className="flex-grow flex flex-col">
                        <div className="relative mb-8 flex-grow">
                          {/* Background pattern */}
                          <div className="absolute inset-0 opacity-5"
                               style={{
                                 backgroundImage: "radial-gradient(circle at 1px 1px, #23214a 1px, transparent 0)",
                                 backgroundSize: "24px 24px"
                               }} />
                          
                          <p className="relative text-base lg:text-lg leading-relaxed text-center font-medium"
                             style={{
                               color: "rgba(25,39,74,0.97)",
                               lineHeight: "1.8",
                               textShadow: "0 1px 2px rgba(25,39,74,0.1)"
                             }}>
                            <span className="text-2xl lg:text-3xl leading-none" style={{ color: "#c79d2a" }}>"</span>
                            {testimonials[0].content.length > 200 ? `${testimonials[0].content.substring(0, 200)}...` : testimonials[0].content}
                            <span className="text-2xl lg:text-3xl leading-none" style={{ color: "#c79d2a" }}>"</span>
                          </p>
                        </div>
                        
                        {/* Author info with enhanced design */}
                        <div className="text-center relative">
                          {/* Decorative line */}
                          <div className="flex items-center justify-center mb-4">
                            <div className="h-px flex-grow max-w-12" style={{ backgroundColor: "rgba(25,39,74,0.2)" }} />
                            <div className="mx-4 w-2 h-2 rounded-full" style={{ backgroundColor: "#c79d2a" }} />
                            <div className="h-px flex-grow max-w-12" style={{ backgroundColor: "rgba(25,39,74,0.2)" }} />
                          </div>

                          {/* Name with enhanced styling */}
                          <h3 className="text-xl lg:text-2xl font-bold mb-2"
                              style={{
                                color: "rgba(25,39,74,0.97)",
                                textShadow: "0 2px 4px rgba(25,39,74,0.1)"
                              }}>
                            {testimonials[0].name}
                          </h3>
                        </div>
                      </div>

                      {/* Bottom accent */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 rounded-full opacity-30"
                           style={{ backgroundColor: "#c79d2a" }} />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Luxury Navigation arrows (desktop only) - styled like videos carousel */}
          {mounted && (
            <>
              <button
                onClick={prevSlide}
                disabled={isTransitioning}
                className="group hidden md:flex absolute right-[-50px] top-1/2 -translate-y-1/2 w-14 h-14 items-center justify-center rounded-full transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-[#c79d2a]/50 focus:ring-offset-4 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,249,255,0.98) 100%)",
                  border: "1px solid rgba(25,39,74,0.1)",
                  boxShadow: "0 20px 40px rgba(25,39,74,0.15), 0 8px 20px rgba(25,39,74,0.08), inset 0 1px 0 rgba(255,255,255,0.6)",
                  color: "rgba(25,39,74,0.97)"
                }}
                aria-label="עדות קודמת"
              >
                {/* Button glow effect */}
                <div className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                     style={{
                       background: "linear-gradient(135deg, rgba(199,157,42,0.1) 0%, rgba(25,39,74,0.05) 100%)",
                       filter: "blur(15px)"
                     }} />
                <FaChevronRight className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
              </button>
              <button
                onClick={nextSlide}
                disabled={isTransitioning}
                className="group hidden md:flex absolute left-[-50px] top-1/2 -translate-y-1/2 w-14 h-14 items-center justify-center rounded-full transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-[#c79d2a]/50 focus:ring-offset-4 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,249,255,0.98) 100%)",
                  border: "1px solid rgba(25,39,74,0.1)",
                  boxShadow: "0 20px 40px rgba(25,39,74,0.15), 0 8px 20px rgba(25,39,74,0.08), inset 0 1px 0 rgba(255,255,255,0.6)",
                  color: "rgba(25,39,74,0.97)"
                }}
                aria-label="עדות הבאה"
              >
                {/* Button glow effect */}
                <div className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                     style={{
                       background: "linear-gradient(135deg, rgba(199,157,42,0.1) 0%, rgba(25,39,74,0.05) 100%)",
                       filter: "blur(15px)"
                     }} />
                <FaChevronLeft className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
              </button>
            </>
          )}

          {/* Luxury pagination indicators - styled like videos carousel */}
          {mounted && maxIndex > 0 && (
            <div className="mt-10 flex justify-center gap-3">
              {Array.from({ length: maxIndex + 1 }, (_, index) => {
                const isActive = index === currentIndex
                return (
                  <button
                    key={index}
                    onClick={() => {
                      if (!isTransitioning && index !== currentIndex) {
                        setSlideDirection(index > currentIndex ? 'left' : 'right')
                        setIsTransitioning(true)
                        setCurrentIndex(index)
                      }
                    }}
                    disabled={isTransitioning}
                    className={`relative transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-[#c79d2a]/50 focus:ring-offset-2 rounded-full ${
                      isActive ? "w-10 h-4 md:w-8 md:h-3" : "w-4 h-4 md:w-3 md:h-3"
                    }`}
                    aria-label={`עבור לעדות ${index + 1}`}
                  >
                    {/* Background with luxury styling */}
                    <div
                      className={`absolute inset-0 rounded-full transition-all duration-500 ${
                        isActive ? "opacity-100" : "opacity-40 hover:opacity-70"
                      }`}
                      style={{
                        background: isActive
                          ? "linear-gradient(90deg, #c79d2a 0%, rgba(199,157,42,0.8) 100%)"
                          : "rgba(25,39,74,0.97)",
                        boxShadow: isActive
                          ? "0 4px 12px rgba(199,157,42,0.4), 0 2px 6px rgba(199,157,42,0.2)"
                          : "0 2px 8px rgba(25,39,74,0.2)",
                      }}
                    />

                    {/* Inner highlight */}
                    {isActive && (
                      <div
                        className="absolute inset-0 rounded-full opacity-20"
                        style={{
                          background: "linear-gradient(135deg, rgba(255,255,255,0.6) 0%, transparent 100%)",
                        }}
                      />
                    )}
                  </button>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </LuxuryBackground>
  )
}
