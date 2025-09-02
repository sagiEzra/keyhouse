"use client"

import { motion } from "framer-motion"

export default function AboutStory() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, #fafafa 50%, rgba(241,194,59,0.03) 100%)",
      }}
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl opacity-5"
          style={{ background: "radial-gradient(circle, #23214a 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full blur-3xl opacity-4"
          style={{ background: "radial-gradient(circle, #f1c23b 0%, transparent 70%)" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Rotem Kahlon Section - Large image left, text right */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
            {/* Large Image - Left Side */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                {/* Background glow effect */}
                <div className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                     style={{
                       background: "linear-gradient(135deg, rgba(241,194,59,0.2) 0%, rgba(35,33,74,0.1) 100%)",
                       filter: "blur(20px)",
                       zIndex: -1
                     }} />
                
                {/* Main image container */}
                <div className="relative bg-white p-4 rounded-3xl">
                  <img
                    src="/images/rotem5.jpg"
                    alt="רותם קהלון - בעלת המשרד"
                    className="w-full h-[600px] lg:h-[700px] object-cover rounded-2xl transition-all duration-500 group-hover:scale-[1.02]"
                    style={{
                      boxShadow: "0 20px 50px rgba(35,33,74,0.15), inset 0 1px 0 rgba(255,255,255,0.6)"
                    }}
                  />
                  
                  {/* Image overlay gradient */}
                  <div className="absolute inset-4 rounded-2xl bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                     style={{ background: "linear-gradient(135deg, #f1c23b 0%, #e6b84f 100%)" }} />
                <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full opacity-15 group-hover:opacity-30 transition-opacity duration-500"
                     style={{ background: "linear-gradient(135deg, #23214a 0%, #2d2b5a 100%)" }} />
              </div>
            </div>

            {/* Content - Right Side */}
            <div className="flex flex-col justify-center space-y-8">
              {/* Title */}
              <div className="space-y-4">
                <h2 className="text-5xl lg:text-6xl font-serif font-bold leading-tight"
                    style={{ color: "#23214a" }}>
                  רותם קהלון
                </h2>
                <div className="flex items-center gap-4">
                  <div className="h-1 w-16 rounded-full"
                       style={{ background: "linear-gradient(90deg, #f1c23b 0%, rgba(241,194,59,0.3) 100%)" }} />
                  <p className="text-2xl font-medium" style={{ color: "#f1c23b" }}>
                    בעלת המשרד
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-8 text-lg leading-relaxed" style={{ color: "#23214a" }}>
                <div className="relative">
                  {/* Quote decoration */}
                  <div className="absolute -top-4 -right-6 text-6xl opacity-10 font-serif select-none"
                       style={{ color: "#f1c23b" }}>
                    "
                  </div>
                  
                  <p className="font-medium text-xl">
                    ילידת אילת, יועצת נדלן ומתווכת
                  </p>
                </div>

                <p className="leading-relaxed">
                  עם ניסיון ומוניטין עשיר, רותם ליוותה מאות עסקאות מוצלחות, וצברה ידע רב בשביל להפוך את העסקה שלך לקלה, פשוטה ומוצלחת יותר. לקוחותיה הרבים שחוזרים וממליצים, הם העדות הטובה ביותר להצלחתה.
                </p>

                <p className="leading-relaxed">
                  רותם גילתה שהיא נהנית לא רק מהצד העסקי של הנדל"ן, אלא בעיקר מהקשר האנושי לעזור לאנשים בתהליכי קניה ומכירה, לפשט את התהליך ולראות את השמחה בעיניים כשהעסקה נסגרת.
                </p>

                {/* Quote section */}
                <div className="relative">
                  <div className="bg-gradient-to-l from-white via-gray-50 to-white p-8 rounded-2xl border-r-4 shadow-lg"
                       style={{ borderColor: "#f1c23b", boxShadow: "0 10px 30px rgba(35,33,74,0.08)" }}>
                    <p className="text-xl italic font-medium leading-relaxed mb-4">
                      "אני מאמינה שעסקת נדלן היא אחת ההחלטות הכלכליות והחשובות בחיים. המשימה שלי היא להפוך את התהליך לפשוט, נעים ומוצלח עבור כל לקוח"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Shiraz Kahlon Section - Mirrored layout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-32"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
            {/* Content - Left Side */}
            <div className="flex flex-col justify-center space-y-8 lg:order-1">
              {/* Title */}
              <div className="space-y-4">
                <h2 className="text-5xl lg:text-6xl font-serif font-bold leading-tight"
                    style={{ color: "#23214a" }}>
                  שירז קהלון
                </h2>
                <div className="flex items-center gap-4">
                  <div className="h-1 w-16 rounded-full"
                       style={{ background: "linear-gradient(90deg, #f1c23b 0%, rgba(241,194,59,0.3) 100%)" }} />
                  <p className="text-2xl font-medium" style={{ color: "#f1c23b" }}>
                    יועצת נדלן
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-8 text-lg leading-relaxed" style={{ color: "#23214a" }}>
                <p className="leading-relaxed">
                  מביאה איתה אנרגיה צעירה וחיובית עם רקע בשיווק ותקשורת, מצטיינת בקשר אישי עם לקוחות, בהקשבה לצרכים שלהם וביכולת להבין בדיוק מה חשוב להם.
                </p>

                <p className="leading-relaxed">
                  שילוב של חריצות, סבלנות ואכפתיות אמיתית, שירז מלווה כל לקוח לאורך הדרך עם חיוך ויחס אישי. היא מתעדכנת ולומדת כל הזמן את שוק המקומי, מביאה פתרונות יצירתיים וחשיבה מחוץ לקופסה עם מקצועיות וסטנדרטים גבוהים של שירות כדי להתאים לכל אחד את העסקה המושלמת עבורו.
                </p>

                {/* Quote section */}
                <div className="relative">
                  <div className="bg-gradient-to-r from-white via-gray-50 to-white p-8 rounded-2xl border-l-4 shadow-lg"
                       style={{ borderColor: "#f1c23b", boxShadow: "0 10px 30px rgba(35,33,74,0.08)" }}>
                    <p className="text-xl italic font-medium leading-relaxed mb-4">
                      "בשבילי כל עסקה היא לא רק מכירה – אלא הזדמנות להגשים חלום עבור הלקוח"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Large Image - Right Side */}
            <div className="relative group lg:order-2">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                {/* Background glow effect */}
                <div className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                     style={{
                       background: "linear-gradient(225deg, rgba(241,194,59,0.2) 0%, rgba(35,33,74,0.1) 100%)",
                       filter: "blur(20px)",
                       zIndex: -1
                     }} />
                
                {/* Main image container */}
                <div className="relative bg-white p-4 rounded-3xl">
                  <img
                    src="/images/image33.png"
                    alt="שירז קהלון - יועצת נדלן"
                    className="w-full h-[600px] lg:h-[700px] object-cover rounded-2xl transition-all duration-500 group-hover:scale-[1.02]"
                    style={{
                      boxShadow: "0 20px 50px rgba(35,33,74,0.15), inset 0 1px 0 rgba(255,255,255,0.6)"
                    }}
                  />
                  
                  {/* Image overlay gradient */}
                  <div className="absolute inset-4 rounded-2xl bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* Decorative elements - mirrored */}
                <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                     style={{ background: "linear-gradient(225deg, #f1c23b 0%, #e6b84f 100%)" }} />
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full opacity-15 group-hover:opacity-30 transition-opacity duration-500"
                     style={{ background: "linear-gradient(225deg, #23214a 0%, #2d2b5a 100%)" }} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-white via-gray-50 to-white p-12 rounded-3xl shadow-xl border"
               style={{ borderColor: "rgba(35,33,74,0.1)", boxShadow: "0 25px 50px rgba(35,33,74,0.08)" }}>
            <p className="text-xl leading-relaxed mb-8" style={{ color: "#23214a" }}>
              כיום קי האוס היא אחת מסוכנויות הנדל"ן המובילות באילת, עם צוות מקצועי ומסור שחולק את אותה תשוקה ומחויבות לשירות מעולה. אנו גאים להיות חלק מהרגעים המשמעותיים בחיי לקוחותינו, ולהפוך את חלום למציאות.
            </p>
            
            {/* Decorative divider */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-20 opacity-30" style={{ backgroundColor: "#23214a" }} />
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#f1c23b" }} />
              <div className="h-px w-20 opacity-30" style={{ backgroundColor: "#23214a" }} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
