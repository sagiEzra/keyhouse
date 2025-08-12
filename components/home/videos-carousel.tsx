"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaChevronRight, FaChevronLeft, FaPlayCircle } from "react-icons/fa"

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
  const [playing, setPlaying] = useState<number | null>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const visibleCount = typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 3

  // Responsive visible count
  const [slidesToShow, setSlidesToShow] = useState(3)
  useEffect(() => {
    function handleResize() {
      setSlidesToShow(window.innerWidth < 768 ? 1 : 3)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Auto-scroll
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % videoTestimonials.length)
      }, 6000)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isPaused])

  // Navigation
  const next = () => setCurrent((prev) => (prev + 1) % videoTestimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + videoTestimonials.length) % videoTestimonials.length)

  // Swiping (touch events)
  const touchStartX = useRef<number | null>(null)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current !== null) {
      const dx = e.changedTouches[0].clientX - touchStartX.current
      if (dx > 50) prev()
      else if (dx < -50) next()
    }
    touchStartX.current = null
  }

  // Play video on click
  const handlePlay = (idx: number) => setPlaying(idx)
  const handlePause = () => setPlaying(null)

  // Calculate visible slides
  const getVisibleSlides = () => {
    const slides = []
    for (let i = 0; i < slidesToShow; i++) {
      slides.push((current + i) % videoTestimonials.length)
    }
    return slides
  }

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #23214a0d 0%, #fff 60%, #f1c23b0d 100%)" }}
    >
      {/* Decorative gradients */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[60vw] h-[40vw] rounded-full blur-3xl opacity-60"
        style={{ background: "linear-gradient(135deg, #23214a4d 0%, #23214a1a 100%)" }}
      />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h2
            className="mb-4 font-serif text-3xl md:text-5xl font-extrabold tracking-tight drop-shadow-xl"
            style={{ color: "#23214a" }}
          >
            לקוחות מספרים בוידאו
          </h2>
          <p className="mx-auto max-w-3xl text-lg md:text-xl font-semibold" style={{ color: "#23214a" }}>
            צפו בלקוחות מרוצים משתפים את החוויה שלהם איתנו
          </p>
          <div
            className="mx-auto mt-6 h-1 w-28 rounded-full"
            style={{ background: "linear-gradient(90deg, #f1c23b 0%, #fff 100%)", boxShadow: "0 2px 12px #f1c23b55" }}
          />
        </motion.div>
        <div
          className="relative mx-auto max-w-6xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="flex gap-8 justify-center items-stretch">
            {getVisibleSlides().map((idx) => {
              const t = videoTestimonials[idx]
              return (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{ duration: 0 }}
                  className="flex-1 min-w-0 max-w-sm bg-white/90 border rounded-2xl shadow-xl backdrop-blur-xl flex flex-col items-center p-6 relative transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                  style={{ borderColor: "#23214a22" }}
                >
                  <div className="relative w-full aspect-[9/16] max-h-[350px] md:max-h-[500px] rounded-xl overflow-hidden mb-4 group">
                    <iframe
                      src={`https://www.youtube.com/embed/${t.youtubeId}?rel=0&modestbranding=1&autoplay=0&playsinline=1`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      title={`וידאו המלצה ${t.id}`}
                      className="w-full h-full absolute inset-0 rounded-xl border-none"
                    />
                  </div>
                  {/* <div className="flex items-center gap-3 mb-2">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-12 h-12 rounded-full border-2 border-[#f1c23b] object-cover shadow"
                    />
                    <div className="text-right">
                      <div className="font-bold text-lg text-[#23214a]">{t.name}</div>
                      {t.title && <div className="text-[#f1c23b] text-sm font-medium">{t.title}</div>}
                    </div>
                  </div>
                  <blockquote className="italic text-[#23214a] text-base md:text-lg font-medium text-center mt-2">
                    "{t.quote}"
                  </blockquote> */}
                </motion.div>
              )
            })}
          </div>
          {/* Navigation arrows (desktop only) */}
          <button
            onClick={prev}
            className="hidden md:flex absolute right-[-30px] top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-xl border transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#f1c23b]"
            style={{ borderColor: "#23214a22", color: "#23214a" }}
            aria-label="הקודם"
          >
            <FaChevronRight className="h-6 w-6" />
          </button>
          <button
            onClick={next}
            className="hidden md:flex absolute left-[-30px] top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-xl border transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#f1c23b]"
            style={{ borderColor: "#23214a22", color: "#23214a" }}
            aria-label="הבא"
          >
            <FaChevronLeft className="h-6 w-6" />
          </button>
          {/* Pagination indicators */}
          <div className="mt-8 flex justify-center gap-3">
            {videoTestimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-3 rounded-full transition-all duration-300 ${getVisibleSlides().includes(idx) ? "w-8" : "w-3"}`}
                style={{ backgroundColor: getVisibleSlides().includes(idx) ? "#f1c23b" : "#23214a33" }}
                aria-label={`עבור לוידאו ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
