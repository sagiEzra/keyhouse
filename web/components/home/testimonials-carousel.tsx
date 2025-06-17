"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaChevronRight, FaChevronLeft, FaStar } from "react-icons/fa"

export default function TestimonialsCarousel() {
  const testimonials = [
    {
      id: 1,
      name: "דניאל לוי",
      role: "רכש דירת 4 חדרים",
      content:
        "רותם וצוות KeyHouse היו מדהימים לאורך כל תהליך הרכישה. הם הבינו בדיוק מה אנחנו מחפשים והציגו בפנינו אפשרויות שהתאימו לצרכים ולתקציב שלנו. מקצועיות ברמה הגבוהה ביותר!",
      rating: 5,
      image: "/images/testimonial-1.jpg",
    },
    {
      id: 2,
      name: "מיכל ושלומי כהן",
      role: "רכשו וילה בשכונת שחמון",
      content:
        "לאחר חיפוש ארוך מצאנו את KeyHouse והם עזרו לנו למצוא את בית החלומות שלנו. השירות היה אישי, מקצועי וסבלני. רותם ליוותה אותנו בכל שלב והפכה את התהליך המורכב לפשוט ונעים.",
      rating: 5,
      image: "/images/testimonial-2.jpg",
    },
    {
      id: 3,
      name: "אורי גולדשטיין",
      role: "משקיע נדל״ן",
      content:
        "כמשקיע נדל״ן, אני מעריך מאוד את המקצועיות והידע של צוות KeyHouse. הם עזרו לי לאתר הזדמנויות השקעה מצוינות באילת והתהליך היה יעיל ומהיר. ממליץ בחום!",
      rating: 5,
      image: "/images/testimonial-3.jpg",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(nextSlide, 5000)
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPaused])

  const handleMouseEnter = () => {
    setIsPaused(true)
  }

  const handleMouseLeave = () => {
    setIsPaused(false)
  }

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 font-serif text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">מה הלקוחות שלנו אומרים</h2>
          <p className="mx-auto max-w-3xl text-lg md:text-xl text-gray-600">
            אנו גאים בשירות שאנו מעניקים ובחוויה שאנו יוצרים עבור לקוחותינו. הנה כמה מהחוויות שלקוחותינו שיתפו איתנו.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-5xl" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row"
              >
                <div className="h-64 w-full md:h-auto md:w-2/5">
                  <img
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-6 md:p-10">
                  <div>
                    <div className="mb-4 flex">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <FaStar key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="mb-6 text-lg text-gray-700 md:text-xl">"{testimonials[currentIndex].content}"</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{testimonials[currentIndex].name}</h3>
                    <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md transition-all hover:bg-blue-50 md:right-0 md:-translate-x-1/2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="הקודם"
          >
            <FaChevronRight className="h-6 w-6 text-blue-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md transition-all hover:bg-blue-50 md:left-0 md:translate-x-1/2"
            aria-label="הבא"
          >
            <FaChevronLeft className="h-6 w-6 text-blue-600" />
          </button>

          {/* Indicators */}
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 w-2.5 rounded-full transition-all ${
                  index === currentIndex ? "bg-blue-600 w-6" : "bg-gray-300"
                }`}
                aria-label={`עבור לעדות ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
