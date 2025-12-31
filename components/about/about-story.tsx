"use client"

import { motion } from "framer-motion"
import LuxuryBackground from "@/components/ui/luxury-background"
import ProfileSection from "@/components/ui/profile-section"
import QuoteCard from "@/components/ui/quote-card"
import LuxuryCard from "@/components/ui/luxury-card"

export default function AboutStory() {
  return (
    <LuxuryBackground variant="light" className="py-24">

      <div className="container mx-auto px-6 relative z-10">
        {/* Rotem Kahlon Section */}
        <ProfileSection
          name="רותם קהלון"
          title="בעלת המשרד"
          imageSrc="/images/rotem5.jpg"
          imageAlt="רותם קהלון - בעלת המשרד"
          quote={
            <QuoteCard>
              "אני מאמינה שעסקת נדלן היא אחת ההחלטות הכלכליות והחשובות בחיים. המשימה שלי היא להפוך את התהליך לפשוט, נעים ומוצלח עבור כל לקוח"
            </QuoteCard>
          }
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <p className="font-medium text-xl">
              ילידת אילת, יועצת נדלן בכירה ומגשרת
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="leading-relaxed"
          >
            עם ניסיון ומוניטין עשיר, רותם ליוותה מאות עסקאות מוצלחות, וצברה ידע רב בשביל להפוך את העסקה שלך לקלה, פשוטה ומוצלחת יותר. לקוחותיה הרבים שחוזרים וממליצים, הם העדות הטובה ביותר להצלחתה.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="leading-relaxed"
          >
            רותם גילתה שהיא נהנית לא רק מהצד העסקי של הנדל"ן, אלא בעיקר מהקשר האנושי לעזור לאנשים בתהליכי קניה ומכירה, לפשט את התהליך ולראות את השמחה בעיניים כשהעסקה נסגרת.
          </motion.p>
        </ProfileSection>

        {/* Shiraz Kahlon Section */}
        <ProfileSection
          name="שירז קהלון"
          title="יועצת נדלן"
          imageSrc="/images/image33.png"
          imageAlt="שירז קהלון - יועצת נדלן"
          reverse={true}
          quote={
            <QuoteCard align="left">
              "בשבילי כל עסקה היא לא רק מכירה – אלא הזדמנות להגשים חלום עבור הלקוח"
            </QuoteCard>
          }
        >
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="leading-relaxed"
          >
            מביאה איתה אנרגיה צעירה וחיובית עם רקע בשיווק ותקשורת, מצטיינת בקשר אישי עם לקוחות, בהקשבה לצרכים שלהם וביכולת להבין בדיוק מה חשוב להם.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="leading-relaxed"
          >
            שילוב של חריצות, סבלנות ואכפתיות אמיתית, שירז מלווה כל לקוח לאורך הדרך עם חיוך ויחס אישי. היא מתעדכנת ולומדת כל הזמן את שוק המקומי, מביאה פתרונות יצירתיים וחשיבה מחוץ לקופסה עם מקצועיות וסטנדרטים גבוהים של שירות כדי להתאים לכל אחד את העסקה המושלמת עבורו.
          </motion.p>
        </ProfileSection>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <LuxuryCard >
            <p className="text-xl leading-relaxed mb-8" style={{ color: "rgba(25,39,74,0.97)" }}>
              כיום קי האוס היא אחת מסוכנויות הנדל"ן המובילות באילת, עם צוות מקצועי ומסור שחולק את אותה תשוקה ומחויבות לשירות מעולה. אנו גאים להיות חלק מהרגעים המשמעותיים בחיי לקוחותינו, ולהפוך את החלום למציאות.
            </p>

            {/* Decorative divider */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-20 opacity-30" style={{ backgroundColor: "rgba(25,39,74,0.97)" }} />
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#c79d2a" }} />
              <div className="h-px w-20 opacity-30" style={{ backgroundColor: "rgba(25,39,74,0.97)" }} />
            </div>
          </LuxuryCard>
        </motion.div>
      </div>
    </LuxuryBackground>
  )
}
