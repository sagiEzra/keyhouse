"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaChevronRight, FaChevronLeft, FaPlayCircle } from "react-icons/fa"
import LuxuryBackground from "@/components/ui/luxury-background"
import SectionHeader from "@/components/ui/section-header"

// Example YouTube Shorts testimonials data
const videoTestimonials = [
  {
    id: 1,
    name: "לקוח מרוצה 1",
    title: "",
    avatar: "/images/profile1.jpg",
    youtubeId: "Prr3mX1hHO8",
    quote: "הצוות היה מקצועי, אדיב, וזמין לכל שאלה. ממליץ בחום!",
  },
  {
    id: 2,
    name: "לקוח מרוצה 2",
    title: "",
    avatar: "/images/rotem1.jpg",
    youtubeId: "tzf_zunNucI",
    quote: "הרגשתי בטוחה לאורך כל התהליך. תודה על הליווי המסור!",
  },
  {
    id: 3,
    name: "לקוח מרוצה 3",
    title: "",
    avatar: "/images/rotem2.jpg",
    youtubeId: "pP5i5Ohnm5I",
    quote: "השירות היה מהיר, אמין ומקצועי. חוויה מצוינת!",
  },
  {
    id: 4,
    name: "לקוח מרוצה 4",
    title: "",
    avatar: "/images/rotem3.jpg",
    youtubeId: "35SMArYLrvo",
    quote: "המלצתי לכל החברים שלי! צוות מנצח.",
  },
  {
    id: 5,
    name: "לקוח מרוצה 5",
    title: "",
    avatar: "/images/rotem4.jpg",
    youtubeId: "KSvreJ8I5Ag",
    quote: "שירות יוצא דופן!",
  },
]

export default function VideosCarousel() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Responsive slides count with luxury breakpoints
  const [slidesToShow, setSlidesToShow] = useState(3)
  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth
      if (width < 768) {
        setSlidesToShow(1) // Mobile: 1 video
      } else if (width < 1024) {
        setSlidesToShow(2) // Tablet: 2 videos
      } else {
        setSlidesToShow(3) // Desktop: 3 videos
      }
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Auto-scroll with luxury timing
  useEffect(() => {
    if (!isPaused && !isTransitioning) {
      intervalRef.current = setInterval(() => {
        next()
      }, 5000) // 5-second intervals like testimonials
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isPaused, isTransitioning])

  // Luxury navigation with transition state
  const next = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrent((prev) => (prev + 1) % videoTestimonials.length)
    setTimeout(() => setIsTransitioning(false), 600)
  }
  
  const prev = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrent((prev) => (prev - 1 + videoTestimonials.length) % videoTestimonials.length)
    setTimeout(() => setIsTransitioning(false), 600)
  }

  // Enhanced touch handling
  const touchStartX = useRef<number | null>(null)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current !== null) {
      const dx = e.changedTouches[0].clientX - touchStartX.current
      if (Math.abs(dx) > 50) {
        if (dx > 0) prev()
        else next()
      }
    }
    touchStartX.current = null
  }

  // Calculate visible slides for luxury display
  const getVisibleVideos = () => {
    const videos = []
    for (let i = 0; i < slidesToShow; i++) {
      const index = (current + i) % videoTestimonials.length
      videos.push({ ...videoTestimonials[index], displayIndex: i })
    }
    return videos
  }

  const maxIndex = Math.max(0, videoTestimonials.length - slidesToShow)

  return (
    <LuxuryBackground variant="light" className="py-32">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader
          title="לקוחות מספרים בוידאו"
          subtitle="צפו בלקוחות מרוצים משתפים את החוויה שלהם איתנו"
          className="mb-20"
        />
        <div
          className="relative mx-auto max-w-6xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait">
            <div className="flex gap-6 justify-center items-stretch">
              {getVisibleVideos().map((video, idx) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group cursor-default relative flex-1 min-w-0 max-w-sm"
                >
                  {/* Multi-layered glow effect */}
                  <div
                    className="absolute -inset-6 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background: "radial-gradient(ellipse at center, rgba(199,157,42,0.2) 0%, transparent 70%)",
                      filter: "blur(25px)",
                      zIndex: -3
                    }}
                  />
                  <div
                    className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-600 pointer-events-none"
                    style={{
                      background: "radial-gradient(ellipse at center, rgba(199,157,42,0.15) 0%, transparent 60%)",
                      filter: "blur(15px)",
                      zIndex: -2
                    }}
                  />
                  <div
                    className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: "radial-gradient(ellipse at center, rgba(199,157,42,0.1) 0%, transparent 50%)",
                      filter: "blur(8px)",
                      zIndex: -1
                    }}
                  />

                  {/* Main card */}
                  <div 
                    className="relative h-full bg-gradient-to-br from-white via-white to-gray-50/30 rounded-3xl p-5 shadow-xl border backdrop-blur-xl transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-1 flex flex-col items-center"
                    style={{
                      borderColor: "rgba(25,39,74,0.1)",
                      boxShadow: "0 15px 30px rgba(25,39,74,0.08), 0 6px 15px rgba(25,39,74,0.05), inset 0 1px 0 rgba(255,255,255,0.6)",
                    }}
                  >
                    {/* Video container with luxury styling */}
                    <div className="relative w-full aspect-[9/16] max-h-[350px] md:max-h-[500px] rounded-2xl overflow-hidden mb-5 group/video shadow-lg">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-10 pointer-events-none opacity-0 group-hover/video:opacity-100 transition-opacity duration-300" />
                      <iframe
                        src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0&modestbranding=1&autoplay=0&playsinline=1`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        title={`וידאו המלצה ${video.id}`}
                        className="w-full h-full absolute inset-0 rounded-2xl border-none transition-all duration-500 group-hover/video:scale-[1.02]"
                        style={{
                          boxShadow: "0 10px 30px rgba(25,39,74,0.15), inset 0 1px 0 rgba(255,255,255,0.3)"
                        }}
                      />
                    </div>

                    {/* Content section */}
                    <div className="flex flex-col items-center text-center space-y-3 flex-1">
                      <div className="flex items-center gap-3">
                        <div className="text-center">
                          <div className="font-serif font-bold text-xl text-[rgba(25,39,74,0.97)] mb-1">{video.name}</div>
                          {video.title && (
                            <div className="text-[#c79d2a] text-sm font-medium">{video.title}</div>
                          )}
                        </div>
                      </div>
                      
                      {/* Quote with luxury styling */}
                      <div className="relative">
                        <div className="absolute -top-2 -right-2 text-4xl opacity-10 font-serif select-none pointer-events-none text-[#c79d2a]">
                          "
                        </div>
                        <blockquote className="italic text-[rgba(25,39,74,0.97)] text-base md:text-lg font-medium leading-relaxed">
                          "{video.quote}"
                        </blockquote>
                      </div>
                    </div>

                    {/* Bottom accent line */}
                    <div 
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 rounded-full opacity-30 group-hover:opacity-80 group-hover:w-20 transition-all duration-500"
                      style={{ backgroundColor: "#c79d2a" }} 
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
          </div>
          {/* Luxury Navigation arrows (desktop only) */}
          <button
            onClick={prev}
            disabled={isTransitioning}
            className="group hidden md:flex absolute right-[-50px] top-1/2 -translate-y-1/2 w-14 h-14 items-center justify-center rounded-full transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-[#c79d2a]/50 focus:ring-offset-4 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,249,255,0.98) 100%)",
              border: "1px solid rgba(25,39,74,0.1)",
              boxShadow: "0 20px 40px rgba(25,39,74,0.15), 0 8px 20px rgba(25,39,74,0.08), inset 0 1px 0 rgba(255,255,255,0.6)",
              color: "rgba(25,39,74,0.97)"
            }}
            aria-label="הקודם"
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
            onClick={next}
            disabled={isTransitioning}
            className="group hidden md:flex absolute left-[-50px] top-1/2 -translate-y-1/2 w-14 h-14 items-center justify-center rounded-full transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-[#c79d2a]/50 focus:ring-offset-4 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,249,255,0.98) 100%)",
              border: "1px solid rgba(25,39,74,0.1)",
              boxShadow: "0 20px 40px rgba(25,39,74,0.15), 0 8px 20px rgba(25,39,74,0.08), inset 0 1px 0 rgba(255,255,255,0.6)",
              color: "rgba(25,39,74,0.97)"
            }}
            aria-label="הבא"
          >
            {/* Button glow effect */}
            <div className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                 style={{
                   background: "linear-gradient(135deg, rgba(199,157,42,0.1) 0%, rgba(25,39,74,0.05) 100%)",
                   filter: "blur(15px)"
                 }} />
            <FaChevronLeft className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
          </button>
          {/* Luxury pagination indicators */}
          <div className="mt-10 flex justify-center gap-3">
            {videoTestimonials.map((_, idx) => {
              const isActive = getVisibleVideos().some(video => video.id === videoTestimonials[idx].id)
              return (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`relative transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-[#c79d2a]/50 focus:ring-offset-2 rounded-full ${
                    isActive ? "w-8 h-3" : "w-3 h-3"
                  }`}
                  aria-label={`עבור לוידאו ${idx + 1}`}
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
        </div>
      <div/>
    </LuxuryBackground>
  )
}
