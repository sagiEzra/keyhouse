"use client"

import { motion } from "framer-motion"
import { FaUsers, FaShieldAlt, FaHeart, FaMagic, FaBullseye, FaClock, FaAward } from "react-icons/fa"

export default function ValuesSection() {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section
      className="py-20 relative overflow-hidden"
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

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2
            className="mb-4 font-serif text-3xl font-bold md:text-4xl tracking-tight drop-shadow-xl"
            style={{ color: "#23214a" }}
          >
            הערכים שלנו
          </h2>
          <p className="mx-auto max-w-3xl text-lg font-medium" style={{ color: "#23214a" }}>
            אנחנו לא רק מוכרים נכסים - אנחנו בונים אמון ומלווים חלומות. הערכים שלנו מנחים אותנו בכל צעד בדרך.
          </p>
          <div
            className="mx-auto mt-6 h-1 w-28 rounded-full"
            style={{
              background: "linear-gradient(90deg, #f1c23b 0%, #fff 100%)",
              boxShadow: "0 2px 12px #f1c23b55",
            }}
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group flex flex-col rounded-xl bg-white/90 p-8 shadow-xl border backdrop-blur-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              style={{
                borderColor: "#23214a33",
                boxShadow: "0 4px 24px 0 #23214a14, 0 1.5px 8px 0 #23214a08",
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px 0 #f1c23b80, 0 1.5px 8px 0 #f1c23b40"
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 24px 0 #23214a14, 0 1.5px 8px 0 #23214a08"
              }}
            >
              <div
                className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/70 shadow-lg border-4 transition-all duration-300 group-hover:scale-110"
                style={{ borderColor: "#f1c23b" }}
              >
                {value.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold" style={{ color: "#23214a" }}>
                {value.title}
              </h3>
              <p style={{ color: "#23214a" }}>{value.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-16 max-w-3xl rounded-2xl p-8 text-center shadow-2xl md:p-12 border backdrop-blur-xl"
          style={{
            background: "linear-gradient(90deg, #23214ad9 0%, #23214aeb 100%)",
            borderColor: "#23214a33",
          }}
        >
          <h3 className="mb-6 text-2xl font-bold text-white md:text-3xl drop-shadow-lg">
            "אנחנו לא מוכרים נכסים – אנחנו בונים אמון, מלווים חלום."
          </h3>
          <p className="mb-8 text-lg text-blue-100 font-medium">
            זו לא רק סיסמה עבורנו, אלא דרך חיים. אנחנו מאמינים שכאשר אתם בוחרים ב-KeyHouse, אתם בוחרים בשותף אמיתי לדרך,
            שרואה מעבר לעסקה הנוכחית ומחויב להצלחה שלכם לאורך זמן.
          </p>
          <div
            className="mx-auto h-2 w-24 rounded-full"
            style={{
              background: "linear-gradient(90deg, #f1c23b 0%, #fff 100%)",
              boxShadow: "0 2px 12px #f1c23b55",
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}
