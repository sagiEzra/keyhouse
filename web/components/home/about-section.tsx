"use client"

import { motion } from "framer-motion"
import { FaUsers, FaShieldAlt, FaHeart, FaMagic, FaBullseye, FaClock, FaAward } from "react-icons/fa"
import Link from "next/link"
import StatsSection from "../common/stats-section"

export default function AboutSection() {
  const values = [
    {
      icon: <FaUsers className="h-9 w-9" style={{ color: "#23214a" }} />,
      title: "ליווי אישי",
      description: "יחס חם, הקשבה אמיתית ופתרונות מותאמים אישית – הלקוח הוא הסיפור.",
    },
    {
      icon: <FaAward className="h-9 w-9" style={{ color: "#23214a" }} />,
      title: "ניסיון מוכח",
      description: "מעל עשור של פעילות בשוק האילתי עם עסקאות מוצלחות רבות, תוצאות בשטח, והכי חשוב - לקוחות מרוצים.",
    },
    {
      icon: <FaShieldAlt className="h-9 w-9" style={{ color: "#23214a" }} />,
      title: "שקיפות ואמינות",
      description: "מחויבים לשקיפות ואמינות מוחלטת בכל שלבי העסקה, ללא הפתעות או מידע חסר.",
    },
    {
      icon: <FaMagic className="h-9 w-9" style={{ color: "#23214a" }} />,
      title: "מצוינות בשירות",
      description: "חותרים למצוינות בכל היבט של השירות שלנו, מהפגישה הראשונה ועד לאחר סגירת העסקה.",
    },
    {
      icon: <FaBullseye className="h-9 w-9" style={{ color: "#23214a" }} />,
      title: "התאמה מדויקת",
      description: "מתמחים במציאת ההתאמה המושלמת בין הלקוח לנכס, תוך הבנה מעמיקה של הצרכים והרצונות.",
    },
    {
      icon: <FaClock className="h-9 w-9" style={{ color: "#23214a" }} />,
      title: "זמינות ומהירות",
      description: 'מחויבים לזמינות גבוהה ולמענה מהיר, כי אנחנו מבינים את חשיבות הזמן בעסקאות נדל"ן.',
    },
  ]

  return (
    <section
      className="relative py-28 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #23214a0d 0%, #fff 50%, #f1c23b0d 100%)",
      }}
    >
      {/* Decorative gradients */}
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
        {/* Headline & Emotional Copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2
            className="mb-6 font-serif text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-xl"
            style={{ color: "#23214a" }}
          >
            קי האוס אילת – סוכנות נדל"ן בצד שלכם
          </h2>
          <p className="mx-auto max-w-2xl text-xl md:text-2xl font-semibold mb-6" style={{ color: "#23214a" }}>
            אנחנו לא רק מוצאים לך נכס – אנחנו מלווים אותך בדרך לבית הנכון.
          </p>
          <p className="mx-auto max-w-4xl text-lg md:text-xl font-medium leading-relaxed" style={{ color: "#23214a" }}>
            KeyHouse היא סוכנות נדל"ן מובילה באילת, שנולדה מתוך תשוקה אמיתית לעזור לאנשים להגשים חלומות. עם ניסיון של
            מעל לעשור ועשרות עסקאות מוצלחות, אנו מתמחים בהתאמה מדויקת בין אנשים לנכסים. מה שמייחד אותנו הוא הגישה
            האנושית, השקיפות והמחויבות המלאה להצלחת הלקוח – מהמפגש הראשון ועד המסירה.
          </p>
          <div
            className="mx-auto mt-8 h-2 w-32 rounded-full"
            style={{
              background: "linear-gradient(90deg, #f1c23b 0%, #fff 100%)",
              boxShadow: "0 2px 12px #f1c23b55",
            }}
          />
        </motion.div>

        {/* Values Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="mb-24 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
              }}
              className="group rounded-2xl bg-white/90 p-6 shadow-xl border backdrop-blur-xl transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
              style={{
                borderColor: "#23214a33",
                boxShadow: "0 4px 24px 0 #23214a14, 0 1.5px 8px 0 #23214a08",
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 40px 0 #f1c23b80, 0 2px 12px 0 #f1c23b40"
                ;(e.currentTarget as HTMLDivElement).style.borderColor = "#f1c23b80"
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 24px 0 #23214a14, 0 1.5px 8px 0 #23214a08"
                ;(e.currentTarget as HTMLDivElement).style.borderColor = "#23214a33"
              }}
            >
              <div
                className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/70 shadow-lg border-4 mx-auto transition-all duration-300 group-hover:bg-yellow-50 group-hover:scale-110"
                style={{ borderColor: "#f1c23b" }}
              >
                {value.icon}
              </div>
              <h3 className="mb-4 text-xl md:text-2xl font-bold text-center" style={{ color: "#23214a" }}>
                {value.title}
              </h3>
              <p className="text-center text-base md:text-lg leading-relaxed font-medium" style={{ color: "#23214a" }}>
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Rotem Card - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-10 rounded-2xl p-8 md:p-12 shadow-2xl border backdrop-blur-xl max-w-6xl mx-auto my-16 bg-white/70"
          style={{
            background: "linear-gradient(120deg, #fff 60%, #f1c23b0d 100%)",
            borderWidth: "1px",
            borderColor: "#23214a22",
            boxShadow: "0 10px 40px 0 #23214a22, 0 2px 12px 0 #23214a22",
          }}
        >
          <div className="flex-1 text-center lg:text-right px-4">
            <h3 className="mb-3 text-2xl md:text-3xl font-bold text-[#23214a] drop-shadow tracking-tight">
              רותם קהלון - מייסדת KeyHouse ויועצת נדל"ן
            </h3>
            <p className="mb-4 text-base md:text-lg text-[#23214a] font-medium leading-relaxed">
              במשך יותר מעשור, רותם ליוותה מאות לקוחות במקצועיות ובאנושיות, כשהחזון שלה ברור:
            </p>
            <blockquote
              className="border-r-4 bg-[#f1c23b0d] text-[#23214a] font-semibold italic p-5 rounded-xl shadow text-lg md:text-xl mb-4 backdrop-blur-sm relative"
              style={{
                borderColor: "#f1c23b",
              }}
            >
              <span className="text-3xl absolute -top-2 right-4 select-none" style={{ color: "#f1c23b" }}>
                "
              </span>
              "ליצור חוויית נדל\"ן אישית, פשוטה ומדויקת – בלי פשרות."
            </blockquote>
            <p className="text-[#23214a] text-base md:text-lg font-medium mb-6 leading-relaxed">
              צוות הסוכנות הוקם כדי לשקף את הערכים שלה: הקשבה, התאמה מושלמת, ושירות שלא מתפשר.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mt-4">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/about"
                  className="inline-block rounded-full bg-white px-7 py-2 font-bold text-base md:text-lg shadow transition-all duration-300 hover:shadow-lg border border-[#23214a22]"
                  style={{ color: "#23214a" }}
                >
                  המשך לקרוא עלינו
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/contact"
                  className="inline-block rounded-full border-2 border-[#23214a] bg-[#23214a] px-7 py-2 font-bold text-base md:text-lg text-white shadow transition-all duration-300 hover:bg-[#f1c23b] hover:text-[#23214a] hover:shadow-xl hover:border-[#f1c23b]"
                  style={{}}
                >
                  בואו נכיר
                </Link>
              </motion.div>
            </div>
          </div>
          <div
            className="h-64 w-44 lg:h-80 lg:w-72 overflow-hidden rounded-2xl shadow-2xl flex-shrink-0 flex items-center justify-center bg-white"
            style={{
              boxShadow: "0 12px 40px 0 #23214a33, 0 2px 12px 0 #23214a18",
            }}
          >
            <img
              src="/images/rotem2.jpg"
              alt="רותם קהלון - מייסדת KeyHouse"
              className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105"
              style={{ borderRadius: '1rem' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
