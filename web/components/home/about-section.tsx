"use client"

import { motion } from "framer-motion"
import { FaEye , FaUsers, FaAward, FaHandshake } from "react-icons/fa"
import Link from "next/link"

export default function AboutSection() {
  const values = [
    {
      icon: <FaAward className="h-9 w-9" style={{ color: "#23214a" }} />,
      title: "ניסיון מוכח",
      description: "מעל עשור של פעילות בשוק האילתי עם עשרות עסקאות מוצלחות ותוצאות בשטח.",
    },
    {
      icon: <FaUsers className="h-9 w-9" style={{ color: "#23214a" }} />,
      title: "ליווי אישי",
      description: "יחס חם, הקשבה אמיתית ופתרונות מותאמים אישית – הלקוח הוא הסיפור.",
    },
    {
      icon: <FaHandshake className="h-9 w-9" style={{ color: "#23214a" }} />,
      title: "שירות מקצועי מקיף",
      description: "היכרות שוק עמוקה, מכירים כל הזדמנות, תמחור ושיווק מדויקים – ליווי מלא עד להצלחה.",
    },
    {
      icon: <FaEye className="h-9 w-9" style={{ color: "#23214a" }} />,
      title: "אמינות ושקיפות",
      description: "מחויבות לשירות איכותי, אמינות מלאה ושקיפות מוחלטת – תמיד.",
    },
  ]

  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #23214a0d 0%, #fff 50%, #23214a1a 100%)",
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
        className="pointer-events-none absolute bottom-0 right-0 w-1/3 h-1/3 blur-2xl"
        style={{
          background: "linear-gradient(45deg, #23214a4d 0%, transparent 100%)",
        }}
      />

      <div className="container mx-auto px-4">
        {/* Headline & Emotional Copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2
            className="mb-6 text-4xl md:text-5xl  tracking-tight drop-shadow-xl"
            style={{ color: "#23214a" }}
          >
            קי האוס אילת – סוכנות נדל"ן בצד שלכם
          </h2>
          <span
          className="inline-block h-2 w-32 mb-6 rounded-full"
          style={{
            background: "linear-gradient(90deg, #f1c23b 0%, #fff 100%)",
            boxShadow: "0 2px 12px #f1c23b55",
          }}
        />
          <p
            className="mx-auto max-w-2xl text-xl md:text-2xl font-semibold mb-6 leading-relaxed"
            style={{ color: "#23214a" }}
          >
            הדרך לעסקת נדל״ן משתלמת, עם ליווי מקצועי ויחס אישי – משלב ההתעניינות ועד להשלמת העסקה.
          </p>
          <p
            className="mx-auto max-w-3xl text-lg md:text-xl font-medium leading-relaxed"
            style={{ color: "#23214a" }}
          >
            מומחים בליווי עסקאות נדל״ן – מכירה, קנייה, השכרה, ניהול נכסים וייעוץ השקעות.<br className="hidden md:block" />
            מעניקים ייעוץ אישי, חיבורים לאנשי מקצוע מובילים ודגש על רווחיות, ביטחון ושקט נפשי ללקוח.
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
              className="group rounded-2xl bg-white/90 p-7 shadow-xl border backdrop-blur-xl transition-all duration-300 hover:-translate-y-2"
              style={{
                borderColor: "#23214a33",
                boxShadow:
                  "0 4px 24px 0 #23214a14, 0 1.5px 8px 0 #23214a08",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 8px 32px 0 #f1c23b80, 0 1.5px 8px 0 #f1c23b40";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 4px 24px 0 #23214a14, 0 1.5px 8px 0 #23214a08";
              }}
            >
              <div
                className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/70 shadow-lg border-4 mx-auto transition-all duration-300 group-hover:bg-yellow-50 group-hover:scale-110"
                style={{ borderColor: "#f1c23b" }}
              >
                {value.icon}
              </div>
              <h3
                className="mb-2 text-xl font-bold text-center"
                style={{ color: "#23214a" }}
              >
                {value.title}
              </h3>
              <p
                className="text-center text-base md:text-lg"
                style={{ color: "#23214a" }}
              >
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Rotem Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="flex flex-col md:flex-row items-center justify-between gap-10 rounded-3xl p-10 md:p-14 shadow-2xl border backdrop-blur-xl"
          style={{
            background: "linear-gradient(90deg, #23214ad9 0%, #23214aeb 100%)",
            borderColor: "#23214a33",
          }}
        >
          <div className="flex-1 text-center md:text-right">
            <h3
              className="mb-3 text-2xl md:text-3xl font-bold"
              style={{ color: "#fff" }}
            >
              רותם קהלון – מייסדת ומנהלת KeyHouse
            </h3>
            <p
              className="mb-4 text-lg md:text-xl font-medium"
              style={{ color: "#e0e0f0" }}
            >
              מעל 12 שנה של ליווי עשרות לקוחות במקצועיות ובאנושיות, עם חזון ברור:
            </p>
            <blockquote
              className="border-r-4 bg-blue-50/20 font-semibold italic p-6 rounded-2xl shadow-lg text-lg md:text-xl mb-4"
              style={{
                borderColor: "#23214a99",
                background: "#23214a0d",
                color: "#fff",
              }}
            >
              "ליצור חוויית נדל&quot;ן אישית, פשוטה ומדויקת – בלי פשרות."
            </blockquote>
            <p
              className="text-base md:text-lg"
              style={{ color: "#e0e0f0" }}
            >
              צוות הסוכנות הוקם כדי לשקף את הערכים שלנו: הקשבה, התאמה מושלמת, ושירות שלא מתפשר.
            </p>
            <div className="mt-8">
              <Link
                href="/about"
                className="inline-block rounded-full bg-white/90 px-8 py-3 font-bold text-lg shadow-md transition-all duration-200 hover:bg-yellow-100 hover:text-[#23214a] hover:scale-105"
                style={{ color: "#23214a" }}
              >
                המשך לקרוא עלינו
              </Link>
            </div>
          </div>
          <div className="h-60 w-40 overflow-hidden rounded-3xl border-4 shadow-2xl md:h-80 md:w-52 flex-shrink-0 transition-transform duration-500 hover:scale-105 flex items-center justify-center bg-white"
            style={{ borderColor: "#fff" }}
          >
            <img
              src="/images/rotem2.jpg"
              alt="רותם קהלון - מייסדת KeyHouse"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}