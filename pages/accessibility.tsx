import Head from "next/head"
import { motion } from "framer-motion"
import LuxuryBackground from "@/components/ui/luxury-background"
import SectionHeader from "@/components/ui/section-header"
import LuxuryCard from "@/components/ui/luxury-card"

export default function AccessibilityPage() {
  return (
    <>
      <Head>
        <title>הצהרת נגישות | KeyHouse נדל״ן</title>
        <meta name="description" content="הצהרת נגישות של KeyHouse - אנו מחויבים להנגשת האתר לכלל הגולשים" />
      </Head>

      <LuxuryBackground variant="light" className="py-32">
        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
          <SectionHeader
            title="הצהרת נגישות"
            subtitle="אנו מחויבים להנגשת האתר לכלל הגולשים ולשיפורו התמידי עבור אנשים עם מוגבלויות"
            className="mb-20"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <LuxuryCard className="p-8 lg:p-12">
              {/* מבוא */}
              <h2 className="text-3xl font-serif font-bold mb-6" style={{ color: "rgba(25,39,74,0.97)" }}>
                מבוא
              </h2>
              <p className="text-lg leading-relaxed mb-12" style={{ color: "rgba(25,39,74,0.85)" }}>
                אנו רואים חשיבות עליונה וערכית להנגשת האתר לכלל הגולשים ברחבי האינטרנט ובשיפורו התמידי למען גולשים עם מוגבלויות למיניהן. לכן, אנו עושים את מירב המאמצים בהנגשת האתר על מנת להנגיש אותו עבור אנשים עם מוגבלות.
              </p>

              {/* נגישות האתר */}
              <div className="border-t pt-12 mb-12" style={{ borderColor: "rgba(25,39,74,0.1)" }}>
                <h2 className="text-3xl font-serif font-bold mb-6" style={{ color: "rgba(25,39,74,0.97)" }}>
                  נגישות האתר
                </h2>
                <p className="text-lg leading-relaxed mb-4" style={{ color: "rgba(25,39,74,0.85)" }}>
                  על מנת שנוכל לספק חוויה טובה נגישה ככל הניתן, עשינו את ההתאמות הנדרשות באתר, ואת מירב המאמצים בכדי לעמוד בכללי הנגישות ככל שניתן בהתאם לעקרונות תקן הנגישות בישראל, תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), תשע"ג-2013 (סימן ג': שירותי האינטרנט).
                </p>
                <p className="text-lg leading-relaxed font-medium" style={{ color: "rgba(25,39,74,0.9)" }}>
                  האתר מותאם לדרישות הנגישות תקן 5568 ברמה AA על פי הנחיות WCAG 2.1.
                </p>
              </div>

              {/* התאמות נגישות */}
              <div className="border-t pt-12 mb-12" style={{ borderColor: "rgba(25,39,74,0.1)" }}>
                <h2 className="text-3xl font-serif font-bold mb-8" style={{ color: "rgba(25,39,74,0.97)" }}>
                  התאמות נגישות שבוצעו באתר
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-3 h-3 rounded-full mt-2"
                         style={{ backgroundColor: "#c79d2a" }} />
                    <div>
                      <h3 className="text-xl font-bold mb-2" style={{ color: "rgba(25,39,74,0.97)" }}>
                        תמיכה בניווט מקלדת
                      </h3>
                      <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.85)" }}>
                        האתר מאפשר ניווט בעזרת מקלדת לרוב האלמנטים האינטראקטיביים.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-3 h-3 rounded-full mt-2"
                         style={{ backgroundColor: "#c79d2a" }} />
                    <div>
                      <h3 className="text-xl font-bold mb-2" style={{ color: "rgba(25,39,74,0.97)" }}>
                        תאימות לדפדפנים
                      </h3>
                      <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.85)" }}>
                        האתר מותאם לדפדפנים הנפוצים.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-3 h-3 rounded-full mt-2"
                         style={{ backgroundColor: "#c79d2a" }} />
                    <div>
                      <h3 className="text-xl font-bold mb-2" style={{ color: "rgba(25,39,74,0.97)" }}>
                        תמיכה בניידים
                      </h3>
                      <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.85)" }}>
                        האתר מותאם לשימוש בטלפון הסלולרי.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-3 h-3 rounded-full mt-2"
                         style={{ backgroundColor: "#c79d2a" }} />
                    <div>
                      <h3 className="text-xl font-bold mb-2" style={{ color: "rgba(25,39,74,0.97)" }}>
                        תצוגה רספונסיבית
                      </h3>
                      <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.85)" }}>
                        האתר מותאם לתצוגה תואמת ממגוון מסכים ורזולוציות.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-3 h-3 rounded-full mt-2"
                         style={{ backgroundColor: "#c79d2a" }} />
                    <div>
                      <h3 className="text-xl font-bold mb-2" style={{ color: "rgba(25,39,74,0.97)" }}>
                        ניווט פשוט וברור
                      </h3>
                      <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.85)" }}>
                        רוב אמצעי הניווט באתר פשוטים וברורים.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-3 h-3 rounded-full mt-2"
                         style={{ backgroundColor: "#c79d2a" }} />
                    <div>
                      <h3 className="text-xl font-bold mb-2" style={{ color: "rgba(25,39,74,0.97)" }}>
                        מבנה היררכי
                      </h3>
                      <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.85)" }}>
                        רוב תכני האתר כתובים באופן ברור, מסודר והיררכי, שמאפשר למשתמשים להכיר את מבנה הדף בצורה נגישה.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-3 h-3 rounded-full mt-2"
                         style={{ backgroundColor: "#c79d2a" }} />
                    <div>
                      <h3 className="text-xl font-bold mb-2" style={{ color: "rgba(25,39,74,0.97)" }}>
                        שפה פשוטה וברורה
                      </h3>
                      <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.85)" }}>
                        רוב תוכן האתר כתוב בשפה פשוטה וברורה.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-3 h-3 rounded-full mt-2"
                         style={{ backgroundColor: "#c79d2a" }} />
                    <div>
                      <h3 className="text-xl font-bold mb-2" style={{ color: "rgba(25,39,74,0.97)" }}>
                        תיאור חלופי לתמונות
                      </h3>
                      <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.85)" }}>
                        רוב התמונות באתר כוללות טקסט חלופי (ALT) המתאר את תוכנן.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-3 h-3 rounded-full mt-2"
                         style={{ backgroundColor: "#c79d2a" }} />
                    <div>
                      <h3 className="text-xl font-bold mb-2" style={{ color: "rgba(25,39,74,0.97)" }}>
                        התאמות ניגודיות
                      </h3>
                      <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.85)" }}>
                        האתר עוצב כך שיאפשר קריאה נוחה לכלל המשתמשים, תוך הקפדה על ניגודיות מתאימה בין צבעי הרקע והטקסט.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* יצירת קשר */}
              <div className="border-t pt-12 mb-12" style={{ borderColor: "rgba(25,39,74,0.1)" }}>
                <div className="p-8 rounded-2xl"
                     style={{
                       background: "linear-gradient(135deg, rgba(199,157,42,0.08) 0%, rgba(255,255,255,0.95) 50%, rgba(199,157,42,0.05) 100%)"
                     }}>
                  <h2 className="text-3xl font-serif font-bold mb-6" style={{ color: "rgba(25,39,74,0.97)" }}>
                    יצירת קשר
                  </h2>
                  <p className="text-lg leading-relaxed mb-6" style={{ color: "rgba(25,39,74,0.85)" }}>
                    במידה ונתקלתם בבעיה או שיש לכם שאלות לגבי הנגישות באתר, אתם מוזמנים ליצור עמנו קשר באמצעות הפרטים הבאים של רכז הנגישות באתר:
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-lg" style={{ color: "rgba(25,39,74,0.97)" }}>שם:</span>
                      <span className="text-lg" style={{ color: "rgba(25,39,74,0.85)" }}>שגיא עזרא</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-lg" style={{ color: "rgba(25,39,74,0.97)" }}>טלפון:</span>
                      <a href="tel:+972534244489" className="text-lg transition-colors duration-300 hover:text-[#c79d2a]" style={{ color: "rgba(25,39,74,0.85)" }}>
                        053-4244489
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-lg" style={{ color: "rgba(25,39,74,0.97)" }}>מייל:</span>
                      <a href="mailto:sagiezra0@gmail.com" className="text-lg transition-colors duration-300 hover:text-[#c79d2a]" style={{ color: "rgba(25,39,74,0.85)" }}>
                        sagiezra0@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="border-t pt-6" style={{ borderColor: "rgba(25,39,74,0.15)" }}>
                    <p className="text-lg leading-relaxed mb-4 font-medium" style={{ color: "rgba(25,39,74,0.9)" }}>
                      בכדי שאוכל לטפל בבעיה בצורה הטובה ביותר, אבקש לצרף פרטים מלאים:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <span className="text-[#c79d2a] mt-1">•</span>
                        <span className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.85)" }}>תיאור של הבעיה הנ״ל</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#c79d2a] mt-1">•</span>
                        <span className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.85)" }}>מהי הפעולה שניסיתם לבצע</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#c79d2a] mt-1">•</span>
                        <span className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.85)" }}>קישור לדף בו גלשתם</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#c79d2a] mt-1">•</span>
                        <span className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.85)" }}>סוג הדפדפן וגרסתו</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#c79d2a] mt-1">•</span>
                        <span className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.85)" }}>מערכת הפעלה</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#c79d2a] mt-1">•</span>
                        <span className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.85)" }}>סוג הטכנולוגיה המסייעת (במידה והשתמשתם)</span>
                      </li>
                    </ul>
                    <p className="text-lg leading-relaxed mt-6 font-medium" style={{ color: "rgba(25,39,74,0.9)" }}>
                      אני אעשה ככל שאוכל כדי להנגיש את האתר בצורה המיטבית ולענות לפניות בצורה המקצועית והמהירה ביותר.
                    </p>
                  </div>
                </div>
              </div>

              {/* עדכון הצהרת נגישות */}
              <div className="border-t pt-12 mb-12" style={{ borderColor: "rgba(25,39,74,0.1)" }}>
                <h2 className="text-3xl font-serif font-bold mb-6" style={{ color: "rgba(25,39,74,0.97)" }}>
                  עדכון הצהרת נגישות
                </h2>
                <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.85)" }}>
                  הצהרה זו עודכנה לאחרונה בתאריך <span className="font-bold">17/11/25</span>. אנו ממשיכים לשפר את נגישות האתר ונשמח לקבל את משובכם.
                </p>
              </div>

              {/* Contact Section */}
              <div className="border-t pt-12" style={{ borderColor: "rgba(25,39,74,0.1)" }}>
                <div className="p-8 rounded-2xl"
                     style={{
                       background: "linear-gradient(135deg, rgba(199,157,42,0.08) 0%, rgba(255,255,255,0.95) 50%, rgba(199,157,42,0.05) 100%)"
                     }}>
                  <h2 className="text-3xl font-serif font-bold mb-6" style={{ color: "rgba(25,39,74,0.97)" }}>
                    שאלות נוספות?
                  </h2>
                  <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.85)" }}>
                    לכל שאלה או בירור נוסף בנוגע להצהרת הנגישות, אנא{" "}
                    <a
                      href="/contact"
                      className="font-bold transition-colors duration-300 hover:opacity-80"
                      style={{ color: "#c79d2a" }}
                    >
                      צרו איתנו קשר
                    </a>
                    .
                  </p>
                </div>
              </div>
            </LuxuryCard>
          </motion.div>
        </div>
      </LuxuryBackground>
    </>
  )
}
