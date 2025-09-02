"use client"

import { motion } from "framer-motion"
import { FaUsers, FaShieldAlt, FaHeart, FaMagic, FaBullseye, FaClock, FaAward } from "react-icons/fa"

export default function ValuesSection() {
  const values = [
    {
      icon: <FaUsers className="h-10 w-10" style={{ color: "#23214a" }} />,
      title: "ליווי אישי",
      description: "יחס חם, הקשבה אמיתית ופתרונות מותאמים אישית – הלקוח הוא הסיפור.",
    },
    {
      icon: <FaAward className="h-10 w-10" style={{ color: "#23214a" }} />,
      title: "ניסיון מוכח",
      description: "מעל עשור של פעילות בשוק האילתי עם עסקאות מוצלחות רבות, תוצאות בשטח, והכי חשוב - לקוחות מרוצים.",
    },
    {
      icon: <FaShieldAlt className="h-10 w-10" style={{ color: "#23214a" }} />,
      title: "שקיפות ואמינות",
      description: "מחויבים לשקיפות ואמינות מוחלטת בכל שלבי העסקה, ללא הפתעות או מידע חסר.",
    },
    {
      icon: <FaMagic className="h-10 w-10" style={{ color: "#23214a" }} />,
      title: "מצוינות בשירות",
      description: "חותרים למצוינות בכל היבט של השירות שלנו, מהפגישה הראשונה ועד לאחר סגירת העסקה.",
    },
    {
      icon: <FaBullseye className="h-10 w-10" style={{ color: "#23214a" }} />,
      title: "התאמה מדויקת",
      description: "מתמחים במציאת ההתאמה המושלמת בין הלקוח לנכס, תוך הבנה מעמיקה של הצרכים והרצונות.",
    },
    {
      icon: <FaClock className="h-10 w-10" style={{ color: "#23214a" }} />,
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
      className="py-32 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, #f8f9ff 50%, rgba(241,194,59,0.02) 100%)",
      }}
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-40 right-20 w-96 h-96 rounded-full blur-3xl opacity-4"
          style={{ background: "radial-gradient(circle, #23214a 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-40 left-20 w-80 h-80 rounded-full blur-3xl opacity-3"
          style={{ background: "radial-gradient(circle, #f1c23b 0%, transparent 70%)" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2
            className="mb-6 font-serif text-5xl font-bold md:text-6xl tracking-tight"
            style={{ color: "#23214a" }}
          >
            הערכים שלנו
          </h2>
          <p className="mx-auto max-w-4xl text-xl leading-relaxed font-light" style={{ color: "#23214a" }}>
            אנחנו לא רק מוכרים נכסים - אנחנו בונים אמון ומלווים חלומות. הערכים שלנו מנחים אותנו בכל צעד בדרך.
          </p>
          <div
            className="mx-auto mt-8 h-1.5 w-32 rounded-full"
            style={{
              background: "linear-gradient(90deg, #f1c23b 0%, rgba(241,194,59,0.3) 50%, #f1c23b 100%)",
              boxShadow: "0 4px 20px rgba(241,194,59,0.3)",
            }}
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-20"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              {/* Outer glow effect */}
              <div className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                   style={{
                     background: "linear-gradient(135deg, rgba(241,194,59,0.15) 0%, rgba(35,33,74,0.08) 100%)",
                     filter: "blur(20px)",
                     zIndex: -1
                   }} />

              {/* Main card */}
              <div
                className="relative h-full bg-gradient-to-br from-white via-white to-gray-50/30 rounded-3xl p-10 shadow-xl border backdrop-blur-xl transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2"
                style={{
                  borderColor: "rgba(35,33,74,0.1)",
                  boxShadow: "0 20px 40px rgba(35,33,74,0.08), 0 8px 20px rgba(35,33,74,0.05), inset 0 1px 0 rgba(255,255,255,0.6)",
                }}
              >
                {/* Icon container with enhanced styling */}
                <div className="relative mb-8">
                  <div
                    className="flex h-20 w-20 items-center justify-center rounded-2xl shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                    style={{ 
                      background: "linear-gradient(135deg, rgba(241,194,59,0.1) 0%, rgba(255,255,255,0.9) 100%)",
                      border: "2px solid rgba(241,194,59,0.3)",
                      boxShadow: "0 8px 25px rgba(241,194,59,0.2)"
                    }}
                  >
                    {value.icon}
                  </div>
                  
                  {/* Decorative accent */}
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                       style={{ backgroundColor: "#f1c23b" }} />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold leading-tight transition-colors duration-300" style={{ color: "#23214a" }}>
                    {value.title}
                  </h3>
                  <p className="text-lg leading-relaxed" style={{ color: "#23214a", opacity: 0.8 }}>
                    {value.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 rounded-full opacity-30 group-hover:opacity-80 group-hover:w-20 transition-all duration-500"
                     style={{ backgroundColor: "#f1c23b" }} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Premium closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto max-w-5xl"
        >
          <div className="relative group">
            {/* Background glow effect */}
            <div className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                 style={{
                   background: "linear-gradient(135deg, rgba(35,33,74,0.1) 0%, rgba(241,194,59,0.1) 100%)",
                   filter: "blur(25px)",
                   zIndex: -1
                 }} />

            {/* Main content card */}
            <div
              className="relative text-center p-12 md:p-16 rounded-3xl shadow-2xl border overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(35,33,74,0.95) 0%, #23214a 50%, rgba(35,33,74,0.98) 100%)",
                borderColor: "rgba(241,194,59,0.2)",
                boxShadow: "0 30px 60px rgba(35,33,74,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
              }}
            >
              {/* Decorative background pattern */}
              <div className="absolute inset-0 opacity-5 pointer-events-none"
                   style={{
                     backgroundImage: "radial-gradient(circle at 2px 2px, rgba(241,194,59,0.8) 1px, transparent 0)",
                     backgroundSize: "40px 40px"
                   }} />

              {/* Quote decoration */}
              <div className="absolute top-8 right-8 text-6xl opacity-20 font-serif select-none text-white">
                "
              </div>

              <div className="relative z-10">
                <h3 className="mb-8 text-3xl md:text-4xl font-bold text-white leading-tight">
                  <span className="block mb-2">"אנחנו לא מוכרים נכסים</span>
                  <span className="block" style={{ color: "#f1c23b" }}>– אנחנו בונים אמון, מלווים חלום"</span>
                </h3>
                
                <div className="max-w-3xl mx-auto mb-8">
                  <p className="text-xl text-blue-100 leading-relaxed font-light">
                    זו לא רק סיסמה עבורנו, אלא דרך חיים. אנחנו מאמינים שכאשר אתם בוחרים ב-KeyHouse, אתם בוחרים בשותף אמיתי לדרך, שרואה מעבר לעסקה הנוכחית ומחויב להצלחה שלכם לאורך זמן.
                  </p>
                </div>

                {/* Decorative elements */}
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="h-px w-20 opacity-40" style={{ backgroundColor: "#f1c23b" }} />
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#f1c23b" }} />
                  <div className="h-px w-20 opacity-40" style={{ backgroundColor: "#f1c23b" }} />
                </div>

                <div
                  className="mx-auto h-2 w-32 rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #f1c23b 0%, rgba(241,194,59,0.4) 50%, #f1c23b 100%)",
                    boxShadow: "0 4px 20px rgba(241,194,59,0.4)",
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
