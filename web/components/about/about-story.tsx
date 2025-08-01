"use client"

import { motion } from "framer-motion"

export default function AboutStory() {
  return (
    <section
      className="relative py-28 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #23214a0d 0%, #fff 50%, #f1c23b0d 100%)",
      }}
    >
      {/* Decorative gradient blobs */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[60vw] h-[40vw] rounded-full blur-3xl opacity-60"
        style={{
          background: "linear-gradient(135deg, #23214a4d 0%, #23214a1a 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 w-1/3 h-1/3 blur-2xl opacity-40"
        style={{
          background: "linear-gradient(45deg, #f1c23b60 0%, transparent 100%)",
        }}
      />

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-2"
          >
            <h2
              className="mb-10 text-center font-serif text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-xl"
              style={{ color: "#23214a" }}
            >
              הסיפור שלנו
            </h2>

            <div className="mx-auto max-w-4xl">
              <div
                className="my-16 flex flex-col items-center gap-12 md:flex-row md:items-start bg-white/90 rounded-3xl shadow-2xl p-10 backdrop-blur-xl border transition-all duration-300"
                style={{
                  borderColor: "#23214a33",
                  boxShadow: "0 4px 24px 0 #23214a14, 0 1.5px 8px 0 #23214a08",
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 64px 0 #23214a15"
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 4px 24px 0 #23214a14, 0 1.5px 8px 0 #23214a08"
                }}
              >
                <div
                  className="w-full max-w-sm flex-shrink-0 overflow-hidden rounded-2xl shadow-xl md:w-1/3 border-4 transition-transform duration-500 hover:scale-105"
                  style={{ borderColor: "#f1c23b" }}
                >
                  <img
                    src="/images/rotem5.jpg"
                    alt="רותם כהן - מייסדת KeyHouse"
                    className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="flex-1 text-lg md:text-xl leading-relaxed font-medium" style={{ color: "#23214a" }}>
                  <p className="mb-8">
                    הסיפור של{" "}
                    <span className="font-bold" style={{ color: "#f1c23b" }}>
                      KeyHouse
                    </span>{" "}
                    מתחיל לפני יותר מעשור, כאשר רותם כהן, המייסדת שלנו, חיפשה דירה להשקעה באילת. מה שהתחיל כחיפוש אישי,
                    הפך במהרה לתשוקה אמיתית לעולם הנדל"ן ולאפשרויות הרבות שהוא מציע.
                  </p>
                  <p className="mb-8">
                    רותם גילתה שהיא נהנית לא רק מהצד העסקי של הנדל"ן, אלא בעיקר מהקשר האנושי – לעזור לאנשים למצוא את
                    הבית המושלם, ללוות אותם בתהליך המורכב, ולראות את השמחה בעיניהם כשהם מקבלים את המפתחות לנכס החדש
                    שלהם.
                  </p>
                </div>
              </div>

              <div
                className="relative mx-auto max-w-3xl rounded-3xl bg-white/90 shadow-xl p-10 md:p-14 border backdrop-blur-xl transition-all duration-300"
                style={{
                  borderColor: "#23214a33",
                  boxShadow: "0 4px 24px 0 #23214a14, 0 1.5px 8px 0 #23214a08",
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 64px 0 #23214a18"
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 4px 24px 0 #23214a14, 0 1.5px 8px 0 #23214a08"
                }}
              >
                <div className="space-y-8">
                  <p className="text-lg md:text-xl leading-relaxed font-medium" style={{ color: "#23214a" }}>
                    עם ניסיון של מעל 12 שנה כיועצת נדל"ן, רותם ליוותה עשרות רבות של עסקאות מוצלחות, וצברה מוניטין של
                    מקצועיות, אמינות ויושרה. לקוחותיה הרבים, שהפכו ברובם ללקוחות חוזרים וממליצים נלהבים, הם העדות הטובה
                    ביותר להצלחתה.
                  </p>

                  <div className="flex items-center gap-4">
                    <div
                      className="w-1 h-12 rounded-full"
                      style={{ background: "linear-gradient(to bottom, #f1c23b 0%, #f1c23b80 100%)" }}
                    />
                    <p className="text-lg md:text-xl leading-relaxed font-medium" style={{ color: "#23214a" }}>
                      ב-2015, רותם החליטה להקים את{" "}
                      <span className="font-bold" style={{ color: "#f1c23b" }}>
                        KeyHouse
                      </span>
                      , סוכנות נדל"ן שתשקף את הערכים והחזון שלה: שירות אישי ברמה הגבוהה ביותר, שקיפות מלאה, והתאמה
                      מדויקת בין הלקוח לנכס המושלם עבורו.
                    </p>
                  </div>

                  <div className="relative my-8">
                    <blockquote
                      className="border-r-4 bg-white/80 font-medium italic p-8 rounded-2xl shadow-lg text-lg md:text-xl mb-4"
                      style={{
                        borderColor: "#f1c23b",
                        color: "#23214a",
                      }}
                    >
                      <span className="text-3xl absolute -top-6 right-8 select-none" style={{ color: "#f1c23b" }}>
                        "
                      </span>
                      אני מאמינה שמציאת בית היא אחת ההחלטות החשובות בחיים. המשימה שלי היא להפוך את התהליך לפשוט, נעים
                      ומוצלח עבור כל לקוח.
                      <footer className="mt-4 text-base md:text-lg font-normal text-left" style={{ color: "#f1c23b" }}>
                        — רותם כהן, מייסדת KeyHouse
                      </footer>
                    </blockquote>
                  </div>

                  <div className="flex items-center gap-4">
                    <div
                      className="w-1 h-12 rounded-full"
                      style={{ background: "linear-gradient(to bottom, #f1c23b 0%, #f1c23b80 100%)" }}
                    />
                    <p className="text-lg md:text-xl leading-relaxed font-medium" style={{ color: "#23214a" }}>
                      כיום,{" "}
                      <span className="font-bold" style={{ color: "#f1c23b" }}>
                        KeyHouse
                      </span>{" "}
                      היא אחת מסוכנויות הנדל"ן המובילות באילת, עם צוות מקצועי ומסור שחולק את אותה תשוקה ומחויבות לשירות
                      מעולה. אנו גאים להיות חלק מהרגעים המשמעותיים בחיי לקוחותינו, ולהפוך את חלום הבית המושלם למציאות.
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
