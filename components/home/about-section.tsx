"use client"

import { motion } from "framer-motion"
import { FaUsers, FaShieldAlt, FaHeart, FaMagic, FaBullseye, FaClock, FaAward } from "react-icons/fa"
import Link from "next/link"
import StatsSection from "../common/stats-section"
import LuxuryBackground from "@/components/ui/luxury-background"
import LuxuryCard from "@/components/ui/luxury-card"
import SectionHeader from "@/components/ui/section-header"
import LuxuryButton from "@/components/ui/luxury-button"
import QuoteCard from "@/components/ui/quote-card"

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

  return (
    <LuxuryBackground
      variant="light"
      className="py-32"
    >

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        {/* <SectionHeader
          title="קי האוס אילת – סוכנות נדל&quot;ן בצד שלכם"
          subtitle="אנחנו לא רק מוצאים לך נכס – אנחנו מלווים אותך בדרך לבית הנכון. KeyHouse היא סוכנות נדל&quot;ן מובילה באילת, שנולדה מתוך תשוקה אמיתית לעזור לאנשים להגשים חלומות."
          className="mb-20"
        /> */}

        {/* About Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <LuxuryCard
            className="overflow-hidden p-4 sm:p-8 lg:p-12 xl:p-16"
            backgroundStyle={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, #fafafa 50%, rgba(199,157,42,0.03) 100%)"
            }}
            hoverable={false}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Content */}
              <div className="space-y-6 lg:space-y-10">
                <div>
                  <h3 className="text-4xl lg:text-5xl font-serif font-bold leading-tight mb-6" style={{ color: "rgba(25,39,74,0.97)" }}>
                    קצת עלינו
                  </h3>
                  <div className="flex items-center gap-6 mb-6 lg:mb-10">
                    <div className="h-1.5 w-20 rounded-full" style={{ background: "linear-gradient(90deg, #c79d2a 0%, rgba(199,157,42,0.3) 100%)" }} />
                    <div className="h-px flex-1 opacity-20" style={{ backgroundColor: "rgba(25,39,74,0.97)" }} />
                  </div>
                </div>

                {/* Image on mobile - appears after title */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="relative group lg:hidden"
                >
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                    <div className="relative bg-white p-4 rounded-3xl">
                      <img
                        src="/images/rotem5.jpg"
                        alt="רותם ושירז - צוות KeyHouse"
                        className="w-full h-[280px] sm:h-[350px] object-cover rounded-2xl transition-all duration-500 group-hover:scale-[1.02]"
                        style={{
                          boxShadow: "0 25px 60px rgba(25,39,74,0.2), inset 0 1px 0 rgba(255,255,255,0.6)",
                          objectPosition: "top"
                        }}
                      />
                      <div className="absolute inset-4 rounded-2xl bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                  </div>
                </motion.div>

                <div className="space-y-8 lg:space-y-8">
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-xl lg:text-2xl leading-loose lg:leading-relaxed font-semibold"
                    style={{ color: "rgba(25,39,74,0.97)" }}
                  >
                    סניף אילת הוקם בשנת 2013 במטרה לעזור ללקוחותינו למקסם את הרווח ולהגשים חלומות דרך עסקאות נדל&quot;ן.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-xl lg:text-2xl leading-loose lg:leading-relaxed"
                    style={{ color: "rgba(25,39,74,0.85)" }}
                  >
                    אנו מספקים תוצאות מוכחות ורווחיות תוך חדשנות ויצירתיות בלתי מתפשרת. אנו מתמחים במכירה, קניה, השכרה וניהול נכסים ומה שמייחד אותנו זאת הגישה האנושית, השקיפות והמחויבות המלאה להצלחה שלך!
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="text-lg lg:text-xl leading-loose lg:leading-relaxed"
                    style={{ color: "rgba(25,39,74,0.8)" }}
                  >
                    עם ניסיון של למעלה מעשור בשוק האילתי, אנחנו מכירים כל פינה בעיר ויודעים בדיוק איך למצוא את הנכס המושלם עבורך. הצוות המקצועי שלנו משלב ידע מעמיק בשוק המקומי עם גישה ושירות אישי ברמה הגבוהה ביותר.
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                >
                  <QuoteCard align="center">
                    &quot;שקיפות והקשבה לצרכים של הלקוח, הנסיון המתאים, ומקצועיות - אלו הדברים שהופכים אותנו לסוכנות שהלקוחות שלה חוזרים אליה&quot;
                  </QuoteCard>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4 sm:gap-5 pt-6 items-center sm:items-start"
                >
                  <LuxuryButton variant="secondary" href="/about" size="large">
                    המשך לקרוא עלינו
                  </LuxuryButton>
                  <LuxuryButton href="/contact" size="large">
                    דבר איתנו
                  </LuxuryButton>
                </motion.div>
              </div>

              {/* Image on desktop - appears beside text */}
              <div className="relative group hidden lg:block">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <div className="relative bg-white p-6 rounded-3xl">
                    <img
                      src="/images/rotem5.jpg"
                      alt="רותם ושירז - צוות KeyHouse"
                      className="w-full h-[750px] object-cover rounded-2xl transition-all duration-500 group-hover:scale-[1.02]"
                      style={{
                        boxShadow: "0 25px 60px rgba(25,39,74,0.2), inset 0 1px 0 rgba(255,255,255,0.6)",
                        objectPosition: "top"
                      }}
                    />
                    <div className="absolute inset-6 rounded-2xl bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
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
      </div>
    </LuxuryBackground>
  )
}
