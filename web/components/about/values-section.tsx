"use client"

import { motion } from "framer-motion"
import { FaUsers, FaShieldAlt, FaHeart, FaMagic, FaBullseye, FaClock } from "react-icons/fa"

export default function ValuesSection() {
  const values = [
    {
      icon: <FaUsers className="h-8 w-8 text-blue-600" />,
      title: "אנחנו אנשים של אנשים",
      description: "שמים את הלקוח במרכז ומתאימים את השירות לצרכים האישיים שלו.",
    },
    {
      icon: <FaShieldAlt className="h-8 w-8 text-blue-600" />,
      title: "שקיפות ואמינות",
      description: "מחויבים לשקיפות מלאה בכל שלבי העסקה, ללא הפתעות או מידע חסר.",
    },
    {
      icon: <FaHeart className="h-8 w-8 text-blue-600" />,
      title: "תשוקה אמיתית",
      description: "אנחנו אוהבים את מה שאנחנו עושים, וזה ניכר בכל אינטראקציה עם לקוחותינו.",
    },
    {
      icon: <FaMagic className="h-8 w-8 text-blue-600" />,
      title: "מצוינות בשירות",
      description: "חותרים למצוינות בכל היבט של השירות שלנו, מהפגישה הראשונה ועד לאחר סגירת העסקה.",
    },
    {
      icon: <FaBullseye className="h-8 w-8 text-blue-600" />,
      title: "התאמה מדויקת",
      description: "מתמחים במציאת ההתאמה המושלמת בין הלקוח לנכס, תוך הבנה מעמיקה של הצרכים והרצונות.",
    },
    {
      icon: <FaClock className="h-8 w-8 text-blue-600" />,
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
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-serif text-3xl font-bold text-gray-900 md:text-4xl">הערכים שלנו</h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            אנחנו לא רק מוכרים נכסים - אנחנו בונים אמון ומלווים חלומות. הערכים שלנו מנחים אותנו בכל צעד בדרך.
          </p>
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
              className="group flex flex-col rounded-xl bg-white p-8 shadow-md transition-all duration-300 hover:shadow-xl"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 transition-all duration-300 group-hover:bg-blue-100">
                {value.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-16 max-w-3xl rounded-2xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-center shadow-xl md:p-12"
        >
          <h3 className="mb-6 text-2xl font-bold text-white md:text-3xl">
            "אנחנו לא מוכרים נכסים – אנחנו בונים אמון, מלווים חלום."
          </h3>
          <p className="mb-8 text-lg text-blue-100">
            זו לא רק סיסמה עבורנו, אלא דרך חיים. אנחנו מאמינים שכאשר אתם בוחרים ב-KeyHouse, אתם בוחרים בשותף אמיתי לדרך,
            שרואה מעבר לעסקה הנוכחית ומחויב להצלחה שלכם לאורך זמן.
          </p>
          <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500"></div>
        </motion.div>
      </div>
    </section>
  )
}
