"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaChevronRight, FaChevronLeft, FaStar } from "react-icons/fa"

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
    <section
      className="py-20 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #23214a0d 0%, #fff 60%, #f1c23b0d 100%)" }}
    >
      {/* Decorative gradients */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[60vw] h-[40vw] rounded-full blur-3xl opacity-60"
        style={{
          background: "linear-gradient(135deg, #23214a4d 0%, #23214a1a 100%)",
        }}
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
            מה הלקוחות שלנו אומרים
          </h2>
          <p className="mx-auto max-w-3xl text-lg md:text-xl font-semibold" style={{ color: "#23214a" }}>
            אנו גאים בשירות שאנו מעניקים ובחוויה שאנו יוצרים עבור לקוחותינו. הנה כמה מהחוויות שלקוחותינו שיתפו איתנו.
          </p>
          <div
            className="mx-auto mt-6 h-1 w-28 rounded-full"
            style={{
              background: "linear-gradient(90deg, #f1c23b 0%, #fff 100%)",
              boxShadow: "0 2px 12px #f1c23b55",
            }}
          />
        </motion.div>

        <div className="relative mx-auto max-w-4xl" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div
            className="overflow-hidden rounded-2xl bg-white/90 shadow-2xl border backdrop-blur-xl"
            style={{ borderColor: "#23214a22" }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="p-8 md:p-12 text-center"
              >
                <div className="mb-6 flex justify-center">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <FaStar key={i} className="h-6 w-6 mx-1" style={{ color: "#f1c23b" }} />
                  ))}
                </div>
                <p className="mb-8 text-xl md:text-2xl font-medium leading-relaxed italic" style={{ color: "#23214a" }}>
                  "{testimonials[currentIndex].content}"
                </p>
                <div>
                  <h3 className="text-2xl font-bol mb-2" style={{ color: "#23214a" }}>
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-lg font-medium" style={{ color: "#f1c23b" }}>
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-xl border transition-all duration-300 hover:scale-110 md:right-0 md:-translate-x-1/2 focus:outline-none focus:ring-2 focus:ring-[#f1c23b]"
            style={{
              borderColor: "#23214a22",
              color: "#23214a",
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLButtonElement).style.backgroundColor = "#f1c23b22"
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255, 255, 255, 0.9)"
            }}
            aria-label="הקודם"
          >
            <FaChevronRight className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-xl border transition-all duration-300 hover:scale-110 md:left-0 md:translate-x-1/2 focus:outline-none focus:ring-2 focus:ring-[#f1c23b]"
            style={{
              borderColor: "#23214a22",
              color: "#23214a",
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLButtonElement).style.backgroundColor = "#f1c23b22"
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255, 255, 255, 0.9)"
            }}
            aria-label="הבא"
          >
            <FaChevronLeft className="h-6 w-6" />
          </button>

          {/* Indicators */}
          <div className="mt-8 flex justify-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "w-8" : "w-3"}`}
                style={{
                  backgroundColor: index === currentIndex ? "#f1c23b" : "#23214a33",
                }}
                aria-label={`עבור לעדות ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
