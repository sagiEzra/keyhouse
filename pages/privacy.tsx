import SEOHead from "@/components/seo/SEOHead"
import LuxuryBackground from "@/components/ui/luxury-background"
import SectionHeader from "@/components/ui/section-header"
import LuxuryCard from "@/components/ui/luxury-card"
import { motion } from "framer-motion"
import { businessStaticData } from "@/config"

export default function PrivacyPage() {
  return (
    <>
      <SEOHead
        title="מדיניות פרטיות | קי האוס נדל״ן אילת"
        description="מדיניות פרטיות של קי האוס אילת - מידע מפורט על איסוף, שימוש והגנה על המידע האישי שלך בהתאם לתיקון 13 לחוק הגנת הפרטיות."
        canonical="/privacy"
        noindex={true}
      />

      <LuxuryBackground variant="light" className="py-32" id="main-content">
        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
          <SectionHeader
            title="מדיניות פרטיות"
            subtitle="ברוכים הבאים לאתר KeyHouse Eilat. מדיניות פרטיות זו מפרטת באופן מלא ושקוף את סוגי המידע שאנו אוספים, את אופן השימוש בו, ואת הזכויות העומדות לרשותך, בהתאם לחוק הגנת הפרטיות התשמ״א-1981, תיקון 13 (תשפ״ד-2024), ותקנות אבטחת מידע התשע״ז-2017."
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
              תאריך עדכון אחרון: 1 בינואר 2026
            </p>
            <p className="text-base mt-2" style={{ color: "rgba(25,39,74,0.7)" }}>
              (תואם לתיקון 13 לחוק הגנת הפרטיות, שנכנס לתוקף ב-14 באוגוסט 2025)
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <LuxuryCard hoverable={false} className="p-8 lg:p-12">
              {/* Section 1 */}
              <h2 className="text-3xl font-serif font-bold mb-6" style={{ color: "rgba(25,39,74,0.97)" }}>
                1. מי אנחנו ומידע כללי
              </h2>
              <div className="space-y-4 mb-12">
                <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                  <span className="font-bold">שם העסק:</span> KeyHouse Eilat (קי-האוס אילת), סוכנות נדל״ן מורשית
                </p>
                <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                  <span className="font-bold">מיקום:</span> {businessStaticData.location}
                </p>
                <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                  <span className="font-bold">דוא״ל:</span>{" "}
                  <a
                    href={businessStaticData.rotemSocial.emailLink}
                    className="transition-colors duration-300 hover:opacity-80"
                    style={{ color: "#c79d2a" }}
                  >
                    {businessStaticData.rotemSocial.email}
                  </a>
                </p>
                <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                  <span className="font-bold">טלפון:</span>{" "}
                  <a
                    href={businessStaticData.rotemPhone.callLink}
                    className="transition-colors duration-300 hover:opacity-80"
                    style={{ color: "#c79d2a" }}
                  >
                    {businessStaticData.rotemPhone.numberToDisplay}
                  </a>
                </p>
                <p className="text-lg leading-relaxed mt-6" style={{ color: "rgba(25,39,74,0.8)" }}>
                  אנו מחויבים להגן על פרטיותך ועל המידע האישי שלך. מדיניות זו תסביר לך בפירוט אילו נתונים אנו אוספים, כיצד אנו משתמשים בהם, עם מי אנו משתפים אותם, ומהן הזכויות העומדות לרשותך.
                </p>
              </div>

              {/* Section 2 */}
              <div className="border-t pt-12 mb-12" style={{ borderColor: "rgba(25,39,74,0.1)" }}>
                <h2 className="text-3xl font-serif font-bold mb-6" style={{ color: "rgba(25,39,74,0.97)" }}>
                  2. איזה מידע אנחנו אוספים?
                </h2>

                <div className="space-y-8">
                  {/* 2.1 */}
                  <div>
                    <h3 className="font-bold text-xl mb-4" style={{ color: "rgba(25,39,74,0.97)" }}>
                      2.1 מידע שאתה מוסר לנו באופן ישיר (מידע אקטיבי)
                    </h3>
                    <p className="text-lg leading-relaxed mb-4" style={{ color: "rgba(25,39,74,0.8)" }}>
                      כאשר אתה משתמש בטפסי יצירת קשר, טפסי הערכת שווי נכס, או פונה אלינו דרך WhatsApp, אנו אוספים:
                    </p>
                    <ul className="space-y-3 mr-6">
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        <span className="font-bold">פרטי זיהוי וקשר:</span> שם מלא, כתובת דוא״ל, מספר טלפון נייד
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        <span className="font-bold">תוכן הפנייה:</span> הנושא שבגללו פנית, שאלות, בקשות למידע על נכסים
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        <span className="font-bold">פרטי נכס:</span> במקרה של בקשת הערכת שווי - מיקום הנכס, גודל, מאפיינים, מצב הנכס
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        <span className="font-bold">העדפות דיוור:</span> הסכמתך לקבלת ניוזלטר, עדכונים שיווקיים, ומידע על נכסים חדשים
                      </li>
                    </ul>
                  </div>

                  {/* 2.2 */}
                  <div>
                    <h3 className="font-bold text-xl mb-4" style={{ color: "rgba(25,39,74,0.97)" }}>
                      2.2 מידע שנאסף באופן אוטומטי (מידע פסיבי)
                    </h3>
                    <p className="text-lg leading-relaxed mb-4" style={{ color: "rgba(25,39,74,0.8)" }}>
                      כאשר אתה גולש באתר, אנו עשויים לאסוף באופן אוטומטי מידע טכני וסטטיסטי:
                    </p>
                    <ul className="space-y-3 mr-6">
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        <span className="font-bold">נתוני גלישה:</span> כתובת IP, סוג דפדפן, מערכת הפעלה, רזולוציית מסך
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        <span className="font-bold">התנהגות באתר:</span> דפים שצפית בהם, משך הזמן בכל דף, לחיצות, גלילה
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        <span className="font-bold">מקור הגעה:</span> מאיפה הגעת לאתר (חיפוש Google, רשתות חברתיות, כניסה ישירה)
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        <span className="font-bold">מיקום גיאוגרפי כללי:</span> עיר ומדינה (לא מיקום מדויק) על בסיס כתובת IP
                      </li>
                    </ul>
                  </div>

                  {/* 2.3 */}
                  <div>
                    <h3 className="font-bold text-xl mb-4" style={{ color: "rgba(25,39,74,0.97)" }}>
                      2.3 Cookies (עוגיות) וטכנולוגיות מעקב
                    </h3>
                    <p className="text-lg leading-relaxed mb-4" style={{ color: "rgba(25,39,74,0.8)" }}>
                      האתר משתמש בקבצי Cookies - קבצי טקסט קטנים המאוחסנים במכשירך:
                    </p>
                    <ul className="space-y-3 mr-6">
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        <span className="font-bold">Cookies הכרחיים:</span> נדרשים לתפקוד תקין של האתר (זיכרון העדפות שפה, אבטחה)
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        <span className="font-bold">Cookies אנליטיים:</span> עוזרים לנו להבין כיצד מבקרים משתמשים באתר (Google Analytics, Firebase)
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        <span className="font-bold">Cookies שיווקיים:</span> משמשים למעקב אחר ביקורים באתר לצורכי פרסום ממוקד (במידה וקיימים)
                      </li>
                    </ul>
                    <p className="text-lg leading-relaxed mt-4" style={{ color: "rgba(25,39,74,0.8)" }}>
                      באפשרותך לנהל את העדפות ה-Cookies שלך באמצעות באנר הקוקיז המופיע בכניסה לאתר, או דרך הגדרות הדפדפן שלך.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div className="border-t pt-12 mb-12" style={{ borderColor: "rgba(25,39,74,0.1)" }}>
                <h2 className="text-3xl font-serif font-bold mb-6" style={{ color: "rgba(25,39,74,0.97)" }}>
                  3. למה אנחנו משתמשים במידע שלך?
                </h2>
                <p className="text-lg leading-relaxed mb-6" style={{ color: "rgba(25,39,74,0.8)" }}>
                  המידע שאנו אוספים משמש אותנו למטרות הבאות בלבד:
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-xl mb-3" style={{ color: "rgba(25,39,74,0.97)" }}>
                      3.1 מתן שירות ותקשורת
                    </h3>
                    <ul className="space-y-2 mr-6">
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        מענה לפניות ושאלות שנשלחו דרך טפסי יצירת קשר או WhatsApp
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        אספקת הערכות שווי נכס ומידע מקצועי על נדל״ן
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        תיאום פגישות וסיורי נכסים
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        עדכונים על מצב עסקאות קיימות
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-xl mb-3" style={{ color: "rgba(25,39,74,0.97)" }}>
                      3.2 דיוור שיווקי ופרסום (בכפוף להסכמתך המפורשת בלבד)
                    </h3>
                    <ul className="space-y-2 mr-6">
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        שליחת ניוזלטר חודשי עם עדכוני שוק הנדל״ן באילת
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        הצעות על נכסים חדשים המתאימים להעדפות שציינת
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        מידע על מבצעים, אירועים, וסמינרים בנושא נדל״ן
                      </li>
                    </ul>
                    <p className="text-lg leading-relaxed mt-3 font-bold" style={{ color: "#c79d2a" }}>
                      חשוב: לא נשלח לך דיוור שיווקי אלא אם סימנת במפורש את תיבת ההסכמה לכך. תוכל לבטל את הסכמתך בכל עת.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-xl mb-3" style={{ color: "rgba(25,39,74,0.97)" }}>
                      3.3 שיפור האתר וניתוח סטטיסטי
                    </h3>
                    <ul className="space-y-2 mr-6">
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        ניתוח דפוסי גלישה כדי לשפר את חווית המשתמש
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        זיהוי בעיות טכניות ותקלות באתר
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        הבנת אילו תכנים ונכסים מעניינים את המבקרים
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-xl mb-3" style={{ color: "rgba(25,39,74,0.97)" }}>
                      3.4 עמידה בדרישות חוק ומניעת הונאות
                    </h3>
                    <ul className="space-y-2 mr-6">
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        ציות לחוקי הגנת הפרטיות, חוקי איסור הלבנת הון, ודיני נדל״ן
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        מניעת שימוש לרעה באתר, ספאם, והונאות
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        אבטחת מידע והגנה על זכויות משתמשים
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 4 */}
              <div className="border-t pt-12 mb-12" style={{ borderColor: "rgba(25,39,74,0.1)" }}>
                <h2 className="text-3xl font-serif font-bold mb-6" style={{ color: "rgba(25,39,74,0.97)" }}>
                  4. עם מי אנחנו משתפים את המידע שלך?
                </h2>
                <p className="text-lg leading-relaxed mb-6 font-bold" style={{ color: "rgba(25,39,74,0.97)" }}>
                  אנו לא מוכרים או משכירים מידע אישי לצדדים שלישיים. נקודה.
                </p>
                <p className="text-lg leading-relaxed mb-6" style={{ color: "rgba(25,39,74,0.8)" }}>
                  עם זאת, אנו עשויים לשתף מידע במקרים המפורטים להלן:
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-xl mb-3" style={{ color: "rgba(25,39,74,0.97)" }}>
                      4.1 ספקי שירותים חיצוניים (Data Processors)
                    </h3>
                    <p className="text-lg leading-relaxed mb-3" style={{ color: "rgba(25,39,74,0.8)" }}>
                      אנו משתמשים בספקי שירות חיצוניים שמסייעים לנו בתפעול האתר והעסק:
                    </p>
                    <ul className="space-y-3 mr-6">
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        <span className="font-bold">Google Firebase ו-Google Analytics:</span> לאחסון נתוני נכסים וניתוח תנועה באתר. Google מחויבת לתקני GDPR ולחוק הגנת הפרטיות הישראלי.
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        <span className="font-bold">שירותי אירוח (Hosting):</span> שרתי האתר ממוקמים אצל ספקי אירוח המקיימים תקני אבטחת מידע.
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        <span className="font-bold">מערכות דיוור:</span> במידה ונרשמת לניוזלטר, פרטיך יאוחסנו במערכת ניהול דיוור מאובטחת.
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        <span className="font-bold">WhatsApp (Meta):</span> כאשר יוצרים קשר דרך WhatsApp, השיחה כפופה למדיניות הפרטיות של Meta/WhatsApp.
                      </li>
                    </ul>
                    <p className="text-lg leading-relaxed mt-4" style={{ color: "rgba(25,39,74,0.8)" }}>
                      כל הספקים הללו פועלים על פי הוראותינו בלבד ומחויבים לשמור על סודיות המידע.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-xl mb-3" style={{ color: "rgba(25,39,74,0.97)" }}>
                      4.2 דרישות חוק
                    </h3>
                    <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                      אנו עשויים לחשוף מידע אישי אם נדרש על פי חוק, צו שיפוטי, דרישה של רשות מוסמכת (משטרה, רשות מיסים), או לצורך הגנה על זכויותינו המשפטיות.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-xl mb-3" style={{ color: "rgba(25,39,74,0.97)" }}>
                      4.3 מיזוג או רכישה עסקית
                    </h3>
                    <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                      במקרה של מיזוג, רכישה, או מכירת נכסי החברה, מידע אישי עשוי להיות מועבר לגוף הרוכש, בכפוף לאותן התחייבויות פרטיות.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-xl mb-3" style={{ color: "rgba(25,39,74,0.97)" }}>
                      4.4 העברת מידע מחוץ לישראל
                    </h3>
                    <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                      חלק מהשירותים (Google Firebase, Google Analytics) מאוחסנים בשרתים מחוץ לישראל. החברות הללו מחויבות לתקנות GDPR האירופיות ולהחלטת ה-EU Adequacy לישראל, המבטיחות רמת הגנה גבוהה.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 5 */}
              <div className="border-t pt-12 mb-12" style={{ borderColor: "rgba(25,39,74,0.1)" }}>
                <h2 className="text-3xl font-serif font-bold mb-6" style={{ color: "rgba(25,39,74,0.97)" }}>
                  5. אבטחת המידע - איך אנחנו מגינים עליך?
                </h2>
                <p className="text-lg leading-relaxed mb-6" style={{ color: "rgba(25,39,74,0.8)" }}>
                  אנו נוקטים באמצעי אבטחה טכניים וארגוניים מתקדמים כדי להגן על המידע שלך:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full flex-shrink-0"
                         style={{ background: "linear-gradient(135deg, rgba(199,157,42,0.15) 0%, rgba(199,157,42,0.05) 100%)" }}>
                      <span className="text-2xl">🔒</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2" style={{ color: "rgba(25,39,74,0.97)" }}>
                        הצפנת SSL/TLS
                      </h3>
                      <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        כל התקשורת עם האתר מוצפנת באמצעות פרוטוקול HTTPS
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full flex-shrink-0"
                         style={{ background: "linear-gradient(135deg, rgba(199,157,42,0.15) 0%, rgba(199,157,42,0.05) 100%)" }}>
                      <span className="text-2xl">🛡️</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2" style={{ color: "rgba(25,39,74,0.97)" }}>
                        שרתים מאובטחים
                      </h3>
                      <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        נתונים מאוחסנים בשרתים מאובטחים עם גישה מוגבלת ומבוקרת
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full flex-shrink-0"
                         style={{ background: "linear-gradient(135deg, rgba(199,157,42,0.15) 0%, rgba(199,157,42,0.05) 100%)" }}>
                      <span className="text-2xl">👥</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2" style={{ color: "rgba(25,39,74,0.97)" }}>
                        הגבלת גישה פנימית
                      </h3>
                      <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        רק עובדים מורשים שזקוקים למידע למטרות עבודתם יכולים לגשת אליו
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full flex-shrink-0"
                         style={{ background: "linear-gradient(135deg, rgba(199,157,42,0.15) 0%, rgba(199,157,42,0.05) 100%)" }}>
                      <span className="text-2xl">🔄</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2" style={{ color: "rgba(25,39,74,0.97)" }}>
                        גיבויים ועדכונים
                      </h3>
                      <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        גיבויים שוטפים של המידע ועדכונים קבועים של מערכות האבטחה
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-lg leading-relaxed mt-6" style={{ color: "rgba(25,39,74,0.8)" }}>
                  למרות מאמצינו, אף שיטת העברה או אחסון אינה בטוחה ב-100%. במקרה של חשד להפרת אבטחה, נודיע לך בהתאם לדרישות החוק.
                </p>
              </div>

              {/* Section 6 - User Rights */}
              <div className="border-t pt-12 mb-12" style={{ borderColor: "rgba(25,39,74,0.1)" }}>
                <h2 className="text-3xl font-serif font-bold mb-6" style={{ color: "rgba(25,39,74,0.97)" }}>
                  6. הזכויות שלך
                </h2>
                <p className="text-lg leading-relaxed mb-8" style={{ color: "rgba(25,39,74,0.8)" }}>
                  בהתאם לתיקון 13 לחוק הגנת הפרטיות, עומדות לך הזכויות הבאות:
                </p>

                <div className="space-y-6">

                  {/* 6.1 */}
                  <div className="p-6 rounded-2xl border-r-4"
                       style={{
                         backgroundColor: "rgba(199,157,42,0.03)",
                         borderColor: "#c79d2a"
                       }}>
                    <h3 className="font-bold text-xl mb-3" style={{ color: "rgba(25,39,74,0.97)" }}>
                      6.1 זכות להסרה מרשימת דיוור (Right to Object to Marketing)
                    </h3>
                    <p className="text-lg leading-relaxed mb-3" style={{ color: "rgba(25,39,74,0.8)" }}>
                      בכל עת תוכל להפסיק לקבל דיוור שיווקי:
                    </p>
                    <ul className="space-y-2 mr-6">
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        📧 לחיצה על קישור "הסר מרשימת התפוצה" בתחתית כל מייל
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        ✉️ שליחת מייל ל-{businessStaticData.rotemSocial.email}
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        📞 שיחה ל-{businessStaticData.rotemPhone.numberToDisplay}
                      </li>
                    </ul>
                    <p className="text-lg leading-relaxed mt-3 font-bold" style={{ color: "#c79d2a" }}>
                      ההסרה תבוצע תוך זמן סביר
                    </p>
                  </div>

                  {/* 6.2 */}
                  <div className="p-6 rounded-2xl border-r-4"
                       style={{
                         backgroundColor: "rgba(199,157,42,0.03)",
                         borderColor: "#c79d2a"
                       }}>
                    <h3 className="font-bold text-xl mb-3" style={{ color: "rgba(25,39,74,0.97)" }}>
                      6.2 זכות להתנגד לעיבוד (Right to Object)
                    </h3>
                    <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                      תוכל להתנגד לעיבוד מידע במקרים מסוימים, למשל אם העיבוד פוגע בפרטיותך או אינו חוקי.
                    </p>
                  </div>

                </div>

                <div className="mt-8 p-6 rounded-2xl"
                     style={{
                       background: "linear-gradient(135deg, rgba(25,39,74,0.05) 0%, rgba(199,157,42,0.03) 100%)"
                     }}>
                  <h3 className="font-bold text-xl mb-3" style={{ color: "rgba(25,39,74,0.97)" }}>
                    איך מממשים את הזכויות?
                  </h3>
                  <p className="text-lg leading-relaxed mb-4" style={{ color: "rgba(25,39,74,0.8)" }}>
                    כדי לממש את זכויותיך, פנה אלינו בכתב באחת מהדרכים הבאות:
                  </p>
                  <div className="space-y-2">
                    <p className="text-lg" style={{ color: "rgba(25,39,74,0.85)" }}>
                      📧 דוא״ל:{" "}
                      <a href={businessStaticData.rotemSocial.emailLink} className="font-bold transition-colors duration-300 hover:opacity-80" style={{ color: "#c79d2a" }}>
                        {businessStaticData.rotemSocial.email}
                      </a>
                    </p>
                    <p className="text-lg" style={{ color: "rgba(25,39,74,0.85)" }}>
                      📞 טלפון:{" "}
                      <a href={businessStaticData.rotemPhone.callLink} className="font-bold transition-colors duration-300 hover:opacity-80" style={{ color: "#c79d2a" }}>
                        {businessStaticData.rotemPhone.numberToDisplay}
                      </a>
                    </p>
                    <p className="text-lg" style={{ color: "rgba(25,39,74,0.85)" }}>
                      📍 כתובת: {businessStaticData.location}
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed mt-4" style={{ color: "rgba(25,39,74,0.8)" }}>
                    נדרש לצרף אסמכתא לזיהוי (עותק ת.ז.) כדי לוודא שאתה אכן בעל המידע.
                  </p>
                </div>
              </div>

              {/* Section 7 */}
              <div className="border-t pt-12 mb-12" style={{ borderColor: "rgba(25,39,74,0.1)" }}>
                <h2 className="text-3xl font-serif font-bold mb-6" style={{ color: "rgba(25,39,74,0.97)" }}>
                  7. קישורים לאתרים חיצוניים
                </h2>
                <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                  האתר עשוי להכיל קישורים לאתרים חיצוניים (למשל, רשתות חברתיות, אתרי נדל״ן ממשלתיים). איננו אחראים על מדיניות הפרטיות של אתרים אלו ומומלץ לקרוא את התנאים שלהם בנפרד.
                </p>
              </div>

              {/* Section 8 */}
              <div className="border-t pt-12 mb-12" style={{ borderColor: "rgba(25,39,74,0.1)" }}>
                <h2 className="text-3xl font-serif font-bold mb-6" style={{ color: "rgba(25,39,74,0.97)" }}>
                  8. שינויים במדיניות הפרטיות
                </h2>
                <p className="text-lg leading-relaxed mb-4" style={{ color: "rgba(25,39,74,0.8)" }}>
                  אנו שומרים לעצמנו את הזכות לעדכן מדיניות זו מעת לעת, בהתאם לשינויים בחוק או בשירותים שלנו.
                </p>
                <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                  <span className="font-bold">תאריך עדכון אחרון:</span> תמיד תוכל לראות בראש המדיניות מתי עודכנה לאחרונה.
                </p>
              </div>

              {/* Contact Section */}
              <div className="border-t pt-12" style={{ borderColor: "rgba(25,39,74,0.1)" }}>
                <div className="p-8 rounded-2xl"
                     style={{
                       background: "linear-gradient(135deg, rgba(199,157,42,0.08) 0%, rgba(255,255,255,0.95) 50%, rgba(199,157,42,0.05) 100%)"
                     }}>
                  <h2 className="text-3xl font-serif font-bold mb-6" style={{ color: "rgba(25,39,74,0.97)" }}>
                    יצירת קשר בנושאי פרטיות
                  </h2>
                  <p className="text-lg leading-relaxed mb-6" style={{ color: "rgba(25,39,74,0.85)" }}>
                    לכל שאלה, בקשה לעיון, תיקון, מחיקה, או כל נושא אחר הקשור לפרטיות ולמידע האישי שלך - אנא צור איתנו קשר:
                  </p>

                  <div className="space-y-4 mb-6">
                    <p className="text-lg font-bold" style={{ color: "rgba(25,39,74,0.97)" }}>
                      KeyHouse Eilat (קי-האוס אילת)
                    </p>
                    <p className="text-lg" style={{ color: "rgba(25,39,74,0.85)" }}>
                      <span className="font-bold">דוא״ל:</span>{" "}
                      <a
                        href={businessStaticData.rotemSocial.emailLink}
                        className="transition-colors duration-300 hover:opacity-80"
                        style={{ color: "#c79d2a" }}
                      >
                        {businessStaticData.rotemSocial.email}
                      </a>
                    </p>
                    <p className="text-lg" style={{ color: "rgba(25,39,74,0.85)" }}>
                      <span className="font-bold">טלפון:</span>{" "}
                      <a
                        href={businessStaticData.rotemPhone.callLink}
                        className="transition-colors duration-300 hover:opacity-80"
                        style={{ color: "#c79d2a" }}
                      >
                        {businessStaticData.rotemPhone.numberToDisplay}
                      </a>
                    </p>
                    <p className="text-lg" style={{ color: "rgba(25,39,74,0.85)" }}>
                      <span className="font-bold">כתובת:</span> {businessStaticData.location}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t" style={{ borderColor: "rgba(25,39,74,0.15)" }}>
                    <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.85)" }}>
                      אנו מחויבים להגן על פרטיותך ולכבד את זכויותיך. לכל שאלה נוספת,{" "}
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
