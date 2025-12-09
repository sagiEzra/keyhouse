import Head from "next/head"
import LuxuryBackground from "@/components/ui/luxury-background"
import SectionHeader from "@/components/ui/section-header"
import LuxuryCard from "@/components/ui/luxury-card"
import { motion } from "framer-motion"
import { businessStaticData } from "@/config"

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>מדיניות פרטיות | KeyHouse נדל״ן אילת</title>
        <meta
          name="description"
          content="מדיניות פרטיות של קי-האוס אילת - מידע על איסוף, שימוש והגנה על המידע האישי שלך בהתאם לחוק הגנת הפרטיות."
        />
      </Head>

      <LuxuryBackground variant="light" className="py-32">
        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
          <SectionHeader
            title="מדיניות פרטיות"
            subtitle="ברוכים הבאים לאתר קי-האוס אילת. מדיניות פרטיות זו מפרטת את סוגי המידע שאנו אוספים מהמשתמשים באתר, את אופן השימוש בו, ואת האופן שבו אנו מגינים על המידע האישי שלך, בהתאם לחוק הגנת הפרטיות התשמ״א-1981 ותקנותיו."
            className="mb-12"
          />

          {/* Last Updated */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <p className="text-base" style={{ color: "rgba(25,39,74,0.7)" }}>
              תאריך עדכון אחרון: 9 בדצמבר 2025
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <LuxuryCard className="p-8 lg:p-12">
              {/* Section 1 */}
              <h2 className="text-3xl font-serif font-bold mb-6" style={{ color: "rgba(25,39,74,0.97)" }}>
                1. איסוף וסוגי המידע
              </h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "rgba(25,39,74,0.8)" }}>
                החברה אוספת מידע אישי בשתי דרכים עיקריות:
              </p>

              <div className="space-y-6 mb-12">
                <div>
                  <h3 className="font-bold text-xl mb-4" style={{ color: "rgba(25,39,74,0.97)" }}>
                    א. מידע הנמסר על ידי המשתמשים (מידע אקטיבי)
                  </h3>
                  <p className="text-lg leading-relaxed mb-4" style={{ color: "rgba(25,39,74,0.8)" }}>
                    מידע זה נמסר על ידך באופן יזום באמצעות טפסי יצירת קשר או טפסי הערכת שווי נכס:
                  </p>
                  <ul className="space-y-3 mr-6">
                    <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                      <span className="font-bold">פרטי זיהוי וקשר:</span> שם מלא, כתובת דוא"ל, מספר טלפון.
                    </li>
                    <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                      <span className="font-bold">פרטי נכס:</span> פרטים אודות הנכס שבבעלותך (כגון מיקום, גודל, מאפיינים), הנמסרים לצורך הערכת שווי.
                    </li>
                    <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                      <span className="font-bold">הסכמה לדיוור:</span> תיבת סימון המאשרת קבלת דיוור, עדכונים, ומסרים שיווקיים מהחברה.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-4" style={{ color: "rgba(25,39,74,0.97)" }}>
                    ב. מידע הנאסף באופן אוטומטי (מידע פסיבי)
                  </h3>
                  <p className="text-lg leading-relaxed mb-4" style={{ color: "rgba(25,39,74,0.8)" }}>
                    כלי האנליטיקה (כגון Google Analytics) ואחרים שאנו עשויים לשלב בעתיד אוספים מידע סטטיסטי ואנונימי, כולל:
                  </p>
                  <ul className="space-y-3 mr-6">
                    <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                      כתובת IP, סוג הדפדפן, מערכת הפעלה.
                    </li>
                    <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                      זמן השהייה באתר, דפים בהם צפית, ודרכי הגישה לאתר.
                    </li>
                    <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                      שימוש ב"עוגיות" (Cookies) – ראה סעיף 4.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 2 */}
              <div className="border-t pt-12 mb-12" style={{ borderColor: "rgba(25,39,74,0.1)" }}>
                <h2 className="text-3xl font-serif font-bold mb-6" style={{ color: "rgba(25,39,74,0.97)" }}>
                  2. מטרות איסוף המידע
                </h2>
                <p className="text-lg leading-relaxed mb-6" style={{ color: "rgba(25,39,74,0.8)" }}>
                  השימוש במידע שנאסף נועד למטרות הבאות:
                </p>
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                    <span className="font-bold">מתן שירות:</span> ליצירת קשר עמך, מתן הערכת שווי הנכס שביקשת, וטיפול בפניותיך.
                  </p>
                  <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                    <span className="font-bold">דיוור שיווקי:</span> שליחת ניוזלטר, עדכונים, הצעות שירותים ומידע על נכסים רלוונטיים (רק בכפוף להסכמתך המפורשת).
                  </p>
                  <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                    <span className="font-bold">תפעול ושיפור האתר:</span> ניתוח הרגלי הגלישה והתנועה באתר כדי לשפר את חווית המשתמש והשירותים המוצעים.
                  </p>
                  <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                    <span className="font-bold">עמידה בחוק:</span> ציות לדרישות משפטיות ורגולטוריות.
                  </p>
                </div>
              </div>

              {/* Section 3 */}
              <div className="border-t pt-12 mb-12" style={{ borderColor: "rgba(25,39,74,0.1)" }}>
                <h2 className="text-3xl font-serif font-bold mb-6" style={{ color: "rgba(25,39,74,0.97)" }}>
                  3. העברת מידע לצדדים שלישיים
                </h2>
                <p className="text-lg leading-relaxed mb-6" style={{ color: "rgba(25,39,74,0.8)" }}>
                  החברה אינה מוכרת או משכירה מידע אישי. אנו עשויים להעביר מידע לצדדים שלישיים רק בנסיבות הבאות:
                </p>
                <ul className="space-y-3 mr-6">
                  <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                    לספקי שירותים חיצוניים (כגון שירותי אירוח, שירותי דיוור, ספקי אנליטיקה) הנדרשים לצורך תפעול האתר והעסק.
                  </li>
                  <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                    אם נדרש על פי חוק, צו בית משפט או רשות מוסמכת.
                  </li>
                  <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                    במקרה של מיזוג, רכישה או שינוי מבני בחברה.
                  </li>
                </ul>
              </div>

              {/* Section 4 */}
              <div className="border-t pt-12 mb-12" style={{ borderColor: "rgba(25,39,74,0.1)" }}>
                <h2 className="text-3xl font-serif font-bold mb-6" style={{ color: "rgba(25,39,74,0.97)" }}>
                  4. עוגיות (Cookies)
                </h2>
                <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                  האתר משתמש בקבצי "עוגיות" (Cookies) כדי להבטיח את תפקודו התקין ולצורך איסוף נתונים סטטיסטיים (כמפורט בסעיף 1.ב). אם אינך מעוניין בקבצי קוקיז, באפשרותך לשנות את הגדרות הדפדפן שלך או לסרב לקבלתם באמצעות באנר הקוקיז המופיע בכניסה לאתר.
                </p>
              </div>

              {/* Section 5 */}
              <div className="border-t pt-12 mb-12" style={{ borderColor: "rgba(25,39,74,0.1)" }}>
                <h2 className="text-3xl font-serif font-bold mb-6" style={{ color: "rgba(25,39,74,0.97)" }}>
                  5. זכויות המשתמש
                </h2>
                <p className="text-lg leading-relaxed mb-6" style={{ color: "rgba(25,39,74,0.8)" }}>
                  בהתאם לחוק, עומדות לך הזכויות הבאות:
                </p>
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                    <span className="font-bold">זכות עיון:</span> לבקש לעיין במידע האישי שנשמר עליך.
                  </p>
                  <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                    <span className="font-bold">זכות תיקון ומחיקה:</span> לבקש לתקן מידע שאינו נכון, או לבקש למחוק מידע אישי (בכפוף לכל דין).
                  </p>
                  <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                    <span className="font-bold">הסרה מרשימת הדיוור:</span> בכל עת תוכל להסיר את עצמך מרשימת הדיוור באמצעות קישור "הסר" המופיע בתחתית כל דיוור שיווקי, או על ידי פנייה ישירה אלינו.
                  </p>
                </div>
              </div>

              {/* Section 6 - Contact */}
              <div className="border-t pt-12" style={{ borderColor: "rgba(25,39,74,0.1)" }}>
                <div className="p-8 rounded-2xl"
                     style={{
                       background: "linear-gradient(135deg, rgba(199,157,42,0.08) 0%, rgba(255,255,255,0.95) 50%, rgba(199,157,42,0.05) 100%)"
                     }}>
                  <h2 className="text-3xl font-serif font-bold mb-6" style={{ color: "rgba(25,39,74,0.97)" }}>
                    6. יצירת קשר בנושאי פרטיות
                  </h2>
                  <p className="text-lg leading-relaxed mb-6" style={{ color: "rgba(25,39,74,0.85)" }}>
                    לכל שאלה, בקשה לעיון, תיקון או מחיקה של מידע אישי, אנא פנה אלינו:
                  </p>

                  <div className="space-y-3">
                    <p className="text-lg font-bold" style={{ color: "rgba(25,39,74,0.97)" }}>
                      קי-האוס אילת (Key-House Eilat)
                    </p>
                    <p className="text-lg" style={{ color: "rgba(25,39,74,0.85)" }}>
                      <span className="font-bold">דוא"ל:</span>{" "}
                      <a
                        href={businessStaticData.social.emailLink}
                        className="transition-colors duration-300 hover:opacity-80"
                        style={{ color: "#c79d2a" }}
                      >
                        {businessStaticData.social.email}
                      </a>
                    </p>
                    <p className="text-lg" style={{ color: "rgba(25,39,74,0.85)" }}>
                      <span className="font-bold">טלפון:</span>{" "}
                      <a
                        href={`tel:+${businessStaticData.phone.israelNumber}`}
                        className="transition-colors duration-300 hover:opacity-80"
                        style={{ color: "#c79d2a" }}
                      >
                        {businessStaticData.phone.numberToDisplay}
                      </a>
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t" style={{ borderColor: "rgba(25,39,74,0.15)" }}>
                    <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.85)" }}>
                      אנו מחויבים להגן על פרטיותך ולשמור על המידע שלך בצורה מאובטחת. לכל שאלה נוספת,{" "}
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
              </div>
            </LuxuryCard>
          </motion.div>
        </div>
      </LuxuryBackground>
    </>
  )
}
