"use client"

import { motion } from "framer-motion"
import { FaUsers, FaShieldAlt, FaHeart, FaMagic, FaBullseye, FaClock, FaAward } from "react-icons/fa"
import Link from "next/link"
import StatsSection from "../common/stats-section"
import LuxuryBackground from "@/components/ui/luxury-background"
import LuxuryCard from "@/components/ui/luxury-card"
import SectionHeader from "@/components/ui/section-header"
import ProfileSection from "@/components/ui/profile-section"
import LuxuryButton from "@/components/ui/luxury-button"

export default function AboutSection() {
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
      description: "חותרים למצוינות בכל היבט של השירות שלנו, מהפגישה הראשונה ועד לאחר סגירת העסקה.",
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

  return (
    <LuxuryBackground
      variant="light"
      className="py-32"
    >

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <SectionHeader
          title="קי האוס אילת – סוכנות נדל&quot;ן בצד שלכם"
          subtitle="אנחנו לא רק מוצאים לך נכס – אנחנו מלווים אותך בדרך לבית הנכון. KeyHouse היא סוכנות נדל&quot;ן מובילה באילת, שנולדה מתוך תשוקה אמיתית לעזור לאנשים להגשים חלומות."
          className="mb-20"
        />

        {/* About Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto mb-28"
        >
          <LuxuryCard
            className="overflow-hidden"
            backgroundStyle={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, #fafafa 50%, rgba(199,157,42,0.03) 100%)"
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl lg:text-4xl font-serif font-bold leading-tight mb-4" style={{ color: "rgba(25,39,74,0.97)" }}>
                    קצת עלינו
                  </h3>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="h-1 w-16 rounded-full" style={{ background: "linear-gradient(90deg, #c79d2a 0%, rgba(199,157,42,0.3) 100%)" }} />
                    <div className="h-px flex-1 opacity-20" style={{ backgroundColor: "rgba(25,39,74,0.97)" }} />
                  </div>
                </div>

                <div className="space-y-6">
                  <p className="text-lg lg:text-xl leading-relaxed font-medium" style={{ color: "rgba(25,39,74,0.97)" }}>
                    סניף אילת הוקם בשנת 2013 במטרה לעזור ללקוחותינו למקסם את הרווח ולהגשים חלומות דרך עסקאות נדל&quot;ן.
                  </p>

                  <p className="text-lg lg:text-xl leading-relaxed" style={{ color: "rgba(25,39,74,0.97)" }}>
                    אנו מספקים תוצאות מוכחות ורווחיות תוך חדשנות ויצירתיות בלתי מתפשרת. אנו מתמחים במכירה, קניה, השכרה וניהול נכסים ומה שמייחד אותנו זאת הגישה האנושית, השקיפות והמחויבות המלאה להצלחה שלך!
                  </p>
                </div>

                <div className="bg-gradient-to-l from-white via-gray-50 to-white p-6 rounded-2xl border-r-4 shadow-lg"
                     style={{ borderColor: "#c79d2a", boxShadow: "0 10px 30px rgba(25,39,74,0.08)" }}>
                  <p className="text-lg italic font-medium leading-relaxed text-center" style={{ color: "rgba(25,39,74,0.97)" }}>
                    &quot;מחויבים להפוך כל חלום נדל&quot;ן למציאות מוחשית&quot;
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <LuxuryButton variant="secondary" href="/about">
                    המשך לקרוא עלינו
                  </LuxuryButton>
                  <LuxuryButton href="/contact">
                    דבר איתנו
                  </LuxuryButton>
                </div>
              </div>

              {/* Image */}
              <div className="relative group">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <div className="relative bg-white p-4 rounded-3xl">
                    <img
                      src="/images/rotem-shiraz.jpg"
                      alt="רותם ושירז - צוות KeyHouse"
                      className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl transition-all duration-500 group-hover:scale-[1.02]"
                      style={{
                        boxShadow: "0 20px 50px rgba(25,39,74,0.15), inset 0 1px 0 rgba(255,255,255,0.6)"
                      }}
                    />
                    <div className="absolute inset-4 rounded-2xl bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                       style={{ background: "linear-gradient(135deg, #c79d2a 0%, rgba(199,157,42,0.8) 100%)" }} />
                  <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full opacity-15 group-hover:opacity-30 transition-opacity duration-500"
                       style={{ background: "linear-gradient(135deg, rgba(25,39,74,0.97) 0%, rgba(29,42,86,0.95) 100%)" }} />
                </div>
              </div>
            </div>
          </LuxuryCard>
        </motion.div>

        {/* Values Cards - Using LuxuryCard Component */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <LuxuryCard className="h-full">
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
      </div>
    </LuxuryBackground>
  )
}
