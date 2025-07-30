"use client"

import { motion } from "framer-motion"
import { FaBuilding, FaUsers, FaAward, FaHandshake, FaShieldAlt, FaBullseye, FaClock, FaMagic } from "react-icons/fa"
import Link from "next/link"

// Currently not used, why? remove it?
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
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 py-24 overflow-hidden">
      {/* Decorative gradients */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[60vw] h-[40vw] rounded-full bg-gradient-to-br from-blue-300/30 via-blue-100/10 to-transparent blur-3xl opacity-60" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-200/30 to-transparent blur-2xl" />

      <div className="container mx-auto px-4">
        {/* Headline & Emotional Copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-serif text-4xl md:text-5xl font-extrabold text-blue-900 tracking-tight drop-shadow-xl">
            ✨ עלינו – KeyHouse
          </h2>
          <p className="mx-auto max-w-2xl text-xl md:text-2xl text-blue-800 font-semibold mb-4">
            אנחנו לא רק מוצאים לך נכס – אנחנו מלווים אותך בדרך לבית הנכון.
          </p>
          <p className="mx-auto max-w-3xl text-lg md:text-xl text-blue-900 font-medium">
            KeyHouse היא סוכנות נדל"ן מובילה באילת, שנולדה מתוך תשוקה אמיתית לעזור לאנשים להגשים חלומות. עם ניסיון של מעל לעשור ועשרות עסקאות מוצלחות, אנו מתמחים בהתאמה מדויקת בין אנשים לנכסים. מה שמייחד אותנו הוא הגישה האנושית, השקיפות והמחויבות המלאה להצלחת הלקוח – מהמפגש הראשון ועד המסירה.
          </p>
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
              transition: { staggerChildren: 0.18 },
            },
          }}
          className="mb-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
              }}
              className="group rounded-2xl bg-white/90 p-7 shadow-xl border border-blue-100/60 backdrop-blur-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 transition-all duration-300 group-hover:bg-blue-100 mx-auto shadow">
                {value.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold text-blue-900 text-center">{value.title}</h3>
              <p className="text-blue-800 text-center text-base md:text-lg">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Rotem Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="flex flex-col md:flex-row items-center justify-between gap-10 rounded-3xl bg-gradient-to-r from-blue-600/90 to-blue-800/90 p-10 md:p-14 shadow-2xl border border-blue-200/40 backdrop-blur-xl"
        >
          <div className="flex-1 text-center md:text-right">
            <h3 className="mb-3 text-2xl md:text-3xl font-bold text-white">👩‍💼 רותם קהלון – מייסדת ומנהלת KeyHouse</h3>
            <p className="mb-4 text-lg md:text-xl text-blue-100 font-medium">
              במשך מעל לעשור, רותם ליוותה עשרות לקוחות במקצועיות ובאנושיות, כשהחזון שלה ברור:
            </p>
            <blockquote className="border-r-4 border-blue-300 bg-blue-50/20 text-white font-semibold italic p-6 rounded-2xl shadow-lg text-lg md:text-xl mb-4">
              "ליצור חוויית נדל&quot;ן אישית, פשוטה ומדויקת – בלי פשרות."
            </blockquote>
            <p className="text-blue-100 text-base md:text-lg">
              צוות הסוכנות הוקם כדי לשקף את הערכים שלה: הקשבה, התאמה מושלמת, ושירות שלא מתפשר.
            </p>
            <div className="mt-8">
              <Link
                href="/about"
                className="inline-block rounded-full bg-white/90 px-8 py-3 text-blue-800 font-bold text-lg shadow-md hover:bg-blue-100 hover:text-blue-900 transition-all duration-200"
              >
                המשך לקרוא עלינו
              </Link>
            </div>
          </div>
          <div className="h-40 w-40 overflow-hidden rounded-full border-4 border-white shadow-2xl md:h-52 md:w-52 flex-shrink-0 transition-transform duration-500 hover:scale-105">
            <img
              src="/images/rotem2.jpg"
              alt="רותם קהלון - מייסדת KeyHouse"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}