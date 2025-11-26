"use client"

import { motion } from "framer-motion"
import { FaUsers, FaShieldAlt, FaHeart, FaMagic, FaBullseye, FaClock, FaAward } from "react-icons/fa"
import LuxuryBackground from "@/components/ui/luxury-background"
import LuxuryCard from "@/components/ui/luxury-card"
import SectionHeader from "@/components/ui/section-header"

export default function ValuesSection() {
  const values = [
    {
      icon: <FaUsers className="h-10 w-10" style={{ color: "rgba(25,39,74,0.97)" }} />,
      title: "ליווי אישי",
      description: "יחס חם, הקשבה אמיתית ופתרונות מותאמים אישית – הלקוח הוא הסיפור.",
    },
    {
      icon: <FaAward className="h-10 w-10" style={{ color: "rgba(25,39,74,0.97)" }} />,
      title: "ניסיון מוכח",
      description: "מעל עשור של פעילות בשוק האילתי עם עסקאות מוצלחות רבות, תוצאות בשטח, והכי חשוב - לקוחות מרוצים.",
    },
    {
      icon: <FaShieldAlt className="h-10 w-10" style={{ color: "rgba(25,39,74,0.97)" }} />,
      title: "שקיפות ואמינות",
      description: "מחויבים לשקיפות ואמינות מוחלטת בכל שלבי העסקה, ללא הפתעות או מידע חסר.",
    },
    {
      icon: <FaMagic className="h-10 w-10" style={{ color: "rgba(25,39,74,0.97)" }} />,
      title: "מצוינות בשירות",
      description: "חותרים למצוינות בכל היבט של השירות שלנו, מהפגישה הראשונה וגם לאחר סגירת העסקה.",
    },
    {
      icon: <FaBullseye className="h-10 w-10" style={{ color: "rgba(25,39,74,0.97)" }} />,
      title: "התאמה מדויקת",
      description: "מתמחים במציאת ההתאמה המושלמת בין הלקוח לנכס, תוך הבנה מעמיקה של הצרכים והרצונות.",
    },
    {
      icon: <FaClock className="h-10 w-10" style={{ color: "rgba(25,39,74,0.97)" }} />,
      title: "זמינות ומהירות",
      description: 'מחויבים לזמינות גבוהה ולמענה מהיר, כי אנחנו מבינים את חשיבות הזמן בעסקאות נדל"ן.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <LuxuryBackground
      variant="light"
      className="py-32"
      style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, #f8f9ff 50%, rgba(241,194,59,0.02) 100%)",
      }}
    >

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader
          title="הערכים שלנו"
          subtitle="אנחנו לא רק מוכרים נכסים - אנחנו בונים אמון ומלווים חלומות. הערכים שלנו מנחים אותנו בכל צעד בדרך."
          className="mb-20"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-20"
        >
          {values.map((value, index) => (
            <motion.div key={index} variants={itemVariants}>
              <LuxuryCard className="grid h-full">
                {/* Icon container with enhanced styling */}
                <div className="relative mb-8">
                  <div
                    className="flex h-20 w-20 items-center justify-center rounded-2xl shadow-lg transition-all duration-500 group-hover:scale-110"
                    style={{
                      background: "linear-gradient(135deg, rgba(199,157,42,0.1) 0%, rgba(255,255,255,0.9) 100%)",
                      border: "2px solid rgba(199,157,42,0.3)",
                      boxShadow: "0 8px 25px rgba(199,157,42,0.2)"
                    }}
                  >
                    {value.icon}
                  </div>

                  {/* Decorative accent */}
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                       style={{ backgroundColor: "#c79d2a" }} />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold leading-tight transition-colors duration-300" style={{ color: "rgba(25,39,74,0.97)" }}>
                    {value.title}
                  </h3>
                  <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.97)", opacity: 0.8 }}>
                    {value.description}
                  </p>
                </div>
              </LuxuryCard>
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
          <LuxuryCard
            className="text-center p-12 md:p-16 overflow-hidden"
            backgroundStyle={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, #fafafa 35%, #f8f9ff 65%, rgba(255,255,255,0.95) 100%)",
            }}
            borderColor="rgba(199,157,42,0.3)"
          >
            {/* Decorative background pattern */}
            <div className="absolute inset-0 opacity-3 pointer-events-none"
                 style={{
                   backgroundImage: "radial-gradient(circle at 2px 2px, rgba(199,157,42,0.4) 1px, transparent 0)",
                   backgroundSize: "40px 40px"
                 }} />

            {/* Quote decoration */}
            <div className="absolute top-8 right-8 text-6xl opacity-15 font-serif select-none" style={{ color: "#c79d2a" }}>
              "
            </div>

            <div className="relative z-10">
              <h3 className="mb-8 text-3xl md:text-4xl font-bold leading-tight" style={{ color: "rgba(25,39,74,0.97)" }}>
                <span className="block mb-2">"אנחנו לא מוכרים נכסים</span>
                <span className="block" style={{ color: "#c79d2a" }}>אנחנו בונים אמון, מלווים חלום"</span>
              </h3>

              <div className="max-w-3xl mx-auto mb-8">
                <p className="text-xl leading-relaxed font-light" style={{ color: "rgba(25,39,74,0.85)" }}>
                  זו לא רק סיסמה עבורנו, אלא דרך חיים. אנחנו מאמינים שכאשר אתם בוחרים ב-KeyHouse, אתם בוחרים בשותף אמיתי לדרך, שרואה מעבר לעסקה הנוכחית ומחויב להצלחה שלכם לאורך זמן.
                </p>
              </div>

              {/* Decorative elements */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px w-20 opacity-40" style={{ backgroundColor: "#c79d2a" }} />
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#c79d2a" }} />
                <div className="h-px w-20 opacity-40" style={{ backgroundColor: "#c79d2a" }} />
              </div>
              
            </div>
          </LuxuryCard>
        </motion.div>
      </div>
    </LuxuryBackground>
  )
}
