"use client"

import { motion } from "framer-motion"

export default function AboutStory() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 py-28 overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[60vw] h-[40vw] rounded-full bg-gradient-to-br from-blue-300/30 via-blue-100/10 to-transparent blur-3xl opacity-60" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-200/30 to-transparent blur-2xl" />

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-2"
          >
            <h2 className="mb-10 text-center font-serif text-4xl md:text-5xl font-extrabold text-blue-900 tracking-tight drop-shadow-xl">
              הסיפור שלנו
            </h2>

            <div className="mx-auto max-w-4xl">
              <div className="my-16 flex flex-col items-center gap-12 md:flex-row md:items-start bg-white/90 rounded-3xl shadow-2xl p-10 backdrop-blur-xl border border-blue-100/60 transition-shadow duration-300 hover:shadow-[0_8px_64px_0_rgba(30,64,175,0.15)]">
                <div className="w-full max-w-sm flex-shrink-0 overflow-hidden rounded-2xl shadow-xl md:w-1/3 border-4 border-blue-100/60 transition-transform duration-500 hover:scale-105">
                  <img
                    src="/images/rotem3.jpg"
                    alt="רותם כהן - מייסדת KeyHouse"
                    className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="flex-1 text-blue-900 text-lg md:text-xl leading-relaxed font-medium">
                  <p className="mb-8">
                    הסיפור של <span className="font-bold text-blue-700">KeyHouse</span> מתחיל לפני יותר מעשור, כאשר רותם כהן, המייסדת שלנו, חיפשה דירה להשקעה באילת. מה שהתחיל כחיפוש אישי, הפך במהרה לתשוקה אמיתית לעולם הנדל"ן ולאפשרויות הרבות שהוא מציע.
                  </p>
                  <p className="mb-8">
                    רותם גילתה שהיא נהנית לא רק מהצד העסקי של הנדל"ן, אלא בעיקר מהקשר האנושי – לעזור לאנשים למצוא את הבית המושלם, ללוות אותם בתהליך המורכב, ולראות את השמחה בעיניהם כשהם מקבלים את המפתחות לנכס החדש שלהם.
                  </p>
                </div>
              </div>

                <div className="relative mx-auto max-w-3xl rounded-3xl bg-white/80 shadow-xl p-10 md:p-14 border border-blue-100/60 backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_8px_64px_0_rgba(30,64,175,0.18)]">
                  <div className="space-y-8">
                    <p className="text-black text-lg md:text-xl leading-relaxed font-medium">
                      עם ניסיון של מעל 12 שנה כיועצת נדל"ן, רותם ליוותה עשרות רבות של עסקאות מוצלחות, וצברה מוניטין של מקצועיות, אמינות ויושרה. לקוחותיה הרבים, שהפכו ברובם ללקוחות חוזרים וממליצים נלהבים, הם העדות הטובה ביותר להצלחתה.
                    </p>

                    <div className="flex items-center gap-4">
                      <div className="w-1 h-12 bg-gradient-to-b from-blue-300 to-blue-100 rounded-full" />
                      <p className="text-black text-lg md:text-xl leading-relaxed font-medium">
                        ב-2015, רותם החליטה להקים את <span className="font-bold text-blue-700">KeyHouse</span>, סוכנות נדל"ן שתשקף את הערכים והחזון שלה: שירות אישי ברמה הגבוהה ביותר, שקיפות מלאה, והתאמה מדויקת בין הלקוח לנכס המושלם עבורו.
                      </p>
                    </div>

                    <div className="relative my-8">
                      <blockquote className="border-r-4 border-blue-400 bg-blue-50/80 text-black font-medium italic p-8 rounded-2xl shadow-lg text-lg md:text-xl">
                        <span className="text-3xl text-blue-300 absolute -top-6 right-8 select-none">“</span>
                        אני מאמינה שמציאת בית היא אחת ההחלטות החשובות בחיים. המשימה שלי היא להפוך את התהליך לפשוט, נעים ומוצלח עבור כל לקוח.
                        <footer className="mt-4 text-base md:text-lg font-normal text-blue-600 text-left">
                          — רותם כהן, מייסדת KeyHouse
                        </footer>
                      </blockquote>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-1 h-12 bg-gradient-to-b from-blue-300 to-blue-100 rounded-full" />
                      <p className="text-black text-lg md:text-xl leading-relaxed font-medium">
                        כיום, <span className="font-bold text-blue-700">KeyHouse</span> היא אחת מסוכנויות הנדל"ן המובילות באילת, עם צוות מקצועי ומסור שחולק את אותה תשוקה ומחויבות לשירות מעולה. אנו גאים להיות חלק מהרגעים המשמעותיים בחיי לקוחותינו, ולהפוך את חלום הבית המושלם למציאות.
                      </p>
                    </div>
                  </div>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}