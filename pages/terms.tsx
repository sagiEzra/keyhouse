import SEOHead from "@/components/seo/SEOHead"
import LuxuryBackground from "@/components/ui/luxury-background"
import SectionHeader from "@/components/ui/section-header"
import LuxuryCard from "@/components/ui/luxury-card"
import { motion } from "framer-motion"
import { businessStaticData } from "@/config"

export default function TermsPage() {
  return (
    <>
      <SEOHead
        title="תקנון ותנאי שימוש | קי האוס נדל״ן אילת"
        description="תקנון ותנאי שימוש באתר קי האוס אילת - סוכנות נדל״ן באילת. קראו את התנאים המלאים לשימוש בשירותי האתר."
        canonical="/terms"
        noindex={true}
      />

      <LuxuryBackground variant="light" className="py-32" id="main-content">
        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
          <SectionHeader
            title="תקנון ותנאי שימוש"
            subtitle="תקנון זה מגדיר את כללי השימוש באתר KeyHouse Eilat ומטרתו להגן על זכויות הקניין הרוחני של החברה, להגביל אחריות, ולהבהיר את התחייבויות המשתמשים. גלישה ושימוש באתר מהווים הסכמה מלאה, בלתי חוזרת וללא תנאי לכל הוראות התקנון."
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <LuxuryCard className="p-8 lg:p-12">
              {/* Important Notice */}
              <div className="p-6 rounded-2xl mb-12 border-r-4"
                   style={{
                     backgroundColor: "rgba(199,157,42,0.05)",
                     borderColor: "#c79d2a"
                   }}>
                <p className="text-lg leading-relaxed font-bold" style={{ color: "rgba(25,39,74,0.97)" }}>
                  חשוב לקרוא!
                </p>
                <p className="text-lg leading-relaxed mt-2" style={{ color: "rgba(25,39,74,0.85)" }}>
                  תקנון זה מהווה הסכם משפטי מחייב בינך לבין KeyHouse Eilat. השימוש באתר מעיד על הסכמתך לכל התנאים המפורטים להלן. אם אינך מסכים לתנאים אלו, אנא הימנע משימוש באתר.
                </p>
              </div>

              {/* Section 1 */}
              <h2 className="text-3xl font-serif font-bold mb-6" style={{ color: "rgba(25,39,74,0.97)" }}>
                1. הגדרות ומונחים
              </h2>
              <div className="space-y-6 mb-12">
                <div>
                  <h3 className="font-bold text-xl mb-2" style={{ color: "rgba(25,39,74,0.97)" }}>
                    "החברה" / "אנחנו" / "שלנו"
                  </h3>
                  <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                    KeyHouse Eilat (קי-האוס אילת), סוכנות נדל״ן מורשית, הממוקמת ב{businessStaticData.location}.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-2" style={{ color: "rgba(25,39,74,0.97)" }}>
                    "האתר"
                  </h3>
                  <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                    אתר האינטרנט של KeyHouse Eilat, לרבות כל דפיו, תכניו, שירותיו, ופונקציונליות, הזמין בכתובת הנוכחית ובכל כתובת עתידית שתחליף אותה.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-2" style={{ color: "rgba(25,39,74,0.97)" }}>
                    "משתמש" / "אתה" / "שלך"
                  </h3>
                  <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                    כל אדם או גוף משפטי המבקר, גולש, או עושה שימוש כלשהו בשירותי האתר.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-2" style={{ color: "rgba(25,39,74,0.97)" }}>
                    "שירותים"
                  </h3>
                  <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                    מכלול השירותים המוצעים באתר, לרבות: מידע על נכסי נדל״ן, הערכות שווי, טפסי יצירת קשר, תוכן מקצועי, וכל שירות אחר הזמין באתר.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-2" style={{ color: "rgba(25,39,74,0.97)" }}>
                    "תוכן"
                  </h3>
                  <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                    כל המידע, הטקסטים, התמונות, הגרפיקה, הסרטונים, הלוגואים, העיצובים, קוד המקור, מאגרי המידע, והחומרים האחרים המופיעים באתר.
                  </p>
                </div>
              </div>

              {/* Section 2 */}
              <div className="border-t pt-12 mb-12" style={{ borderColor: "rgba(25,39,74,0.1)" }}>
                <h2 className="text-3xl font-serif font-bold mb-6" style={{ color: "rgba(25,39,74,0.97)" }}>
                  2. מטרת האתר ותחולת התקנון
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-xl mb-3" style={{ color: "rgba(25,39,74,0.97)" }}>
                      2.1 מטרת האתר
                    </h3>
                    <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                      האתר נועד לספק מידע תדמיתי על החברה ושירותיה, להציג נכסי נדל״ן עדכניים, לאפשר יצירת קשר ראשוני עם הסוכנות, ולספק תוכן מקצועי בנושאי נדל״ן באילת. האתר הוא כלי מידע ושיווק בלבד ואינו מהווה פלטפורמת מכירות או חוזה מחייב.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-xl mb-3" style={{ color: "rgba(25,39,74,0.97)" }}>
                      2.2 תחולת התקנון
                    </h3>
                    <p className="text-lg leading-relaxed mb-3" style={{ color: "rgba(25,39,74,0.8)" }}>
                      תקנון זה חל על כל שימוש באתר, בין באמצעות מחשב, מכשיר נייד, או כל אמצעי אחר. התקנון מחייב כל משתמש מרגע כניסתו לאתר.
                    </p>
                    <p className="text-lg leading-relaxed font-bold" style={{ color: "#c79d2a" }}>
                      המשך גלישה באתר מהווה הסכמה מפורשת ובלתי מסויגת לכל תנאי התקנון.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-xl mb-3" style={{ color: "rgba(25,39,74,0.97)" }}>
                      2.3 קשר עם מדיניות הפרטיות
                    </h3>
                    <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                      תקנון זה משלים את{" "}
                      <a href="/privacy" className="font-bold transition-colors duration-300 hover:opacity-80" style={{ color: "#c79d2a" }}>
                        מדיניות הפרטיות
                      </a>
                      {" "}של האתר. יש לקרוא את שני המסמכים יחד כדי להבין את מכלול הזכויות והחובות.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div className="border-t pt-12 mb-12" style={{ borderColor: "rgba(25,39,74,0.1)" }}>
                <h2 className="text-3xl font-serif font-bold mb-6" style={{ color: "rgba(25,39,74,0.97)" }}>
                  3. תנאי שימוש בשירותי האתר
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-xl mb-3" style={{ color: "rgba(25,39,74,0.97)" }}>
                      3.1 שימוש מותר
                    </h3>
                    <p className="text-lg leading-relaxed mb-3" style={{ color: "rgba(25,39,74,0.8)" }}>
                      השימוש באתר מותר למטרות הבאות בלבד:
                    </p>
                    <ul className="space-y-2 mr-6">
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        ✓ צפייה במידע על נכסים ושירותי נדל״ן המוצעים על ידי החברה
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        ✓ יצירת קשר עם החברה באמצעות הטפסים או WhatsApp
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        ✓ קריאת תוכן מקצועי ומידע על שוק הנדל״ן
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        ✓ שימוש אישי ופרטי בלבד, ללא מטרות מסחריות
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-xl mb-3" style={{ color: "rgba(25,39,74,0.97)" }}>
                      3.2 שימושים אסורים - איסורים קטגוריים
                    </h3>
                    <p className="text-lg leading-relaxed mb-3" style={{ color: "rgba(25,39,74,0.8)" }}>
                      חל איסור מוחלט על:
                    </p>
                    <ul className="space-y-3 mr-6">
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        <span className="font-bold">העתקה ושכפול:</span> העתקה, שכפול, הפצה, פרסום, או הצגה פומבית של תוכן האתר (כולו או חלקו) ללא אישור מפורש בכתב מהחברה
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        <span className="font-bold">שימוש מסחרי:</span> שימוש במידע, תמונות, או תוכן האתר למטרות מסחריות, שיווקיות, או עסקיות ללא רשות
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        <span className="font-bold">גרידה וסריקה אוטומטית (Scraping):</span> שימוש ברובוטים, סורקים אוטומטיים, או כלים טכנולוגיים לאיסוף מידע מהאתר
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        <span className="font-bold">פעולות פגיעה:</span> כל פעולה העלולה לפגוע בתפקוד האתר, לשבש שירותיו, או להפריע לגישת משתמשים אחרים
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        <span className="font-bold">פריצה והאקינג:</span> ניסיון לפרוץ, לעקוף מערכות אבטחה, או לגשת למידע לא מורשה
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        <span className="font-bold">הטעיה:</span> מסירת פרטים כוזבים, מטעים או לא מדויק בטפסים
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        <span className="font-bold">ספאם ופרסום:</span> שליחת דיוור זבל, פרסום לא רצוי, או ניסיונות שיווק דרך האתר
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        <span className="font-bold">פעילות בלתי חוקית:</span> כל שימוש באתר למטרות בלתי חוקיות, לרבות הונאה, הלבנת הון, או כל עבירה פלילית אחרת
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-xl mb-3" style={{ color: "rgba(25,39,74,0.97)" }}>
                      3.3 מסירת מידע בטפסים
                    </h3>
                    <p className="text-lg leading-relaxed mb-3" style={{ color: "rgba(25,39,74,0.8)" }}>
                      בעת מילוי טפסי יצירת קשר, הערכת שווי, או כל טופס אחר:
                    </p>
                    <ul className="space-y-2 mr-6">
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        אתה מתחייב למסור פרטים מדויקים, מלאים, ועדכניים
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        אתה מאשר שאתה בעל הפרטים או שקיבלת אישור למסור אותם
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        סימון תיבת ההסכמה לדיוור מהווה אישור מפורש לקבלת דברי פרסומת (כהגדרתם בחוק התקשורת)
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        ניתן לבטל הסכמה זו בכל עת (ראה{" "}
                        <a href="/privacy" className="font-bold transition-colors duration-300 hover:opacity-80" style={{ color: "#c79d2a" }}>
                          מדיניות הפרטיות
                        </a>
                        )
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-xl mb-3" style={{ color: "rgba(25,39,74,0.97)" }}>
                      3.4 גיל מינימלי
                    </h3>
                    <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                      השירותים באתר מיועדים לבגירים מעל גיל 18. אין להשתמש בשירותי האתר אם אינך מעל גיל 18 ללא אישור הורה או אפוטרופוס.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 4 */}
              <div className="border-t pt-12 mb-12" style={{ borderColor: "rgba(25,39,74,0.1)" }}>
                <h2 className="text-3xl font-serif font-bold mb-6" style={{ color: "rgba(25,39,74,0.97)" }}>
                  4. קניין רוחני וזכויות יוצרים
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-xl mb-3" style={{ color: "rgba(25,39,74,0.97)" }}>
                      4.1 בעלות על התוכן
                    </h3>
                    <p className="text-lg leading-relaxed mb-3" style={{ color: "rgba(25,39,74,0.8)" }}>
                      כל זכויות הקניין הרוחני באתר ובתכניו, לרבות:
                    </p>
                    <ul className="space-y-2 mr-6">
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        • <span className="font-bold">זכויות יוצרים:</span> בטקסטים, מאמרים, תיאורי נכסים, ותכני מקצוע
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        • <span className="font-bold">סימני מסחר:</span> הלוגו "KeyHouse", שמות מסחריים, וסלוגנים
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        • <span className="font-bold">תמונות וויזואליה:</span> צילומי נכסים, תמונות, גרפיקות, וסרטונים
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        • <span className="font-bold">עיצוב ופיתוח:</span> עיצוב האתר, ממשק המשתמש, קוד המקור, ומבנה המידע
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        • <span className="font-bold">מאגרי מידע:</span> אוסף המידע על נכסים, לקוחות, ומידע אחר
                      </li>
                    </ul>
                    <p className="text-lg leading-relaxed mt-4 font-bold" style={{ color: "rgba(25,39,74,0.97)" }}>
                      הן קניינה הבלעדי והמלא של KeyHouse Eilat או של צדדים שלישיים שהעניקו לחברה רשיון שימוש.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-xl mb-3" style={{ color: "rgba(25,39,74,0.97)" }}>
                      4.2 הגבלות שימוש בקניין הרוחני
                    </h3>
                    <p className="text-lg leading-relaxed mb-3" style={{ color: "rgba(25,39,74,0.8)" }}>
                      אין להשתמש בתוכן האתר, כולו או חלקו, ללא קבלת הסכמה מראש ובכתב מהחברה. באופן ספציפי, חל איסור על:
                    </p>
                    <ul className="space-y-2 mr-6">
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        שכפול או העתקה של תמונות נכסים לשימוש באתרים אחרים
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        שימוש בטקסטים, תיאורים, או מידע מקצועי ללא ציון מקור
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        שימוש בלוגו או בסימני המסחר של החברה
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        יצירת עבודות נגזרות מהתוכן או התאמתו ללא אישור
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        הסרה, שינוי, או טשטוש של סימני זכויות יוצרים או סימני מסחר
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-xl mb-3" style={{ color: "rgba(25,39,74,0.97)" }}>
                      4.3 אכיפה משפטית
                    </h3>
                    <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                      החברה שומרת לעצמה את הזכות לנקוט כל אמצעי משפטי, אזרחי או פלילי, נגד כל מפר זכויות הקניין הרוחני שלה, ולתבוע פיצוי מלא על כל נזק שייגרם לה כתוצאה מהפרה כאמור.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 5 */}
              <div className="border-t pt-12 mb-12" style={{ borderColor: "rgba(25,39,74,0.1)" }}>
                <h2 className="text-3xl font-serif font-bold mb-6" style={{ color: "rgba(25,39,74,0.97)" }}>
                  5. אופי המידע ומגבלות האחריות המקצועית
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-xl mb-3" style={{ color: "rgba(25,39,74,0.97)" }}>
                      5.1 מידע כללי בלבד
                    </h3>
                    <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                      כל המידע המוצג באתר, לרבות תיאורי נכסים, מחירים, הערכות שווי, וניתוחי שוק, מוצג למטרות מידע כללי בלבד. המידע אינו מהווה:
                    </p>
                    <ul className="space-y-2 mr-6 mt-3">
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        ✗ ייעוץ משפטי, פיננסי, או השקעתי
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        ✗ חוות דעת מקצועית או שמאית מחייבת
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        ✗ המלצה לביצוע עסקה מסוימת
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        ✗ הצעה מחייבת לרכישה, מכירה, או השכרת נכס
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        ✗ התחייבות לתוצאה כלשהי
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-xl mb-3" style={{ color: "rgba(25,39,74,0.97)" }}>
                      5.2 הערכות שווי ונתוני נכסים
                    </h3>
                    <p className="text-lg leading-relaxed mb-3" style={{ color: "rgba(25,39,74,0.8)" }}>
                      הערכות שווי נכסים המוצעות באתר (באמצעות טפסים או תקשורת אחרת):
                    </p>
                    <ul className="space-y-2 mr-6">
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        • הן הערכות ראשוניות ומשוערות בלבד
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        • אינן מהוות חוות דעת שמאית רשמית או מחייבת
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        • עשויות להשתנות בהתאם לבדיקה פיזית של הנכס, תנאי שוק, ומשתנים נוספים
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        • לא ניתן להסתמך עליהן כבסיס בלעדי לקבלת החלטות עסקיות או משפטיות
                      </li>
                    </ul>
                    <p className="text-lg leading-relaxed mt-4 font-bold" style={{ color: "#c79d2a" }}>
                      לצורך הערכת שווי רשמית ומדויקת, יש לבצע שמאות נכס מקצועית על ידי שמאי מוסמך.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-xl mb-3" style={{ color: "rgba(25,39,74,0.97)" }}>
                      5.3 דיוק המידע ועדכניות
                    </h3>
                    <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                      החברה משקיעה מאמצים לוודא שהמידע באתר מדויק ועדכני. עם זאת:
                    </p>
                    <ul className="space-y-2 mr-6 mt-3">
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        איננו מתחייבים שהמידע יהיה נכון, מלא, או עדכני בכל עת
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        נכסים עשויים להימכר או להשתנות ללא עדכון מיידי באתר
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        מחירים, מפרטים, וזמינות עשויים להשתנות ללא הודעה מוקדמת
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        יתכנו שגיאות טיפוגרפיות, אי-דיוקים טכניים, או פערים במידע
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-xl mb-3" style={{ color: "rgba(25,39,74,0.97)" }}>
                      5.4 אחריות המשתמש
                    </h3>
                    <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                      המשתמש מודע ומסכים שכל החלטה שיקבל על בסיס המידע באתר היא באחריותו הבלעדית והמלאה. מומלץ בחום:
                    </p>
                    <ul className="space-y-2 mr-6 mt-3">
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        לאמת מידע עם החברה באופן ישיר לפני קבלת החלטות
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        להיוועץ בעורך דין, יועץ מס, ויועצים מקצועיים אחרים
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        לבצע בדיקת נאותות (Due Diligence) מקיפה לפני עסקת נדל״ן
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        לבצע ביקור פיזי ובדיקת מצב הנכס לפני כל התחייבות
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 6 */}
              <div className="border-t pt-12 mb-12" style={{ borderColor: "rgba(25,39,74,0.1)" }}>
                <h2 className="text-3xl font-serif font-bold mb-6" style={{ color: "rgba(25,39,74,0.97)" }}>
                  6. הגבלת אחריות וכתב ויתור
                </h2>

                <div className="p-6 rounded-2xl mb-6 border-r-4"
                     style={{
                       backgroundColor: "rgba(239, 68, 68, 0.05)",
                       borderColor: "#ef4444"
                     }}>
                  <p className="text-lg leading-relaxed font-bold" style={{ color: "rgba(25,39,74,0.97)" }}>
                    חשוב במיוחד - אנא קרא בעיון!
                  </p>
                  <p className="text-lg leading-relaxed mt-2" style={{ color: "rgba(25,39,74,0.85)" }}>
                    סעיף זה מגביל את אחריות החברה ומכיל כתב ויתור על טענות. קריאתו חיונית להבנת זכויותיך וחובותיך.
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-xl mb-3" style={{ color: "rgba(25,39,74,0.97)" }}>
                      6.1 אספקת האתר "כמות שהוא" (As-Is)
                    </h3>
                    <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                      האתר והשירותים מוצעים "כמות שהם" (As-Is) וללא כל אחריות מכל סוג, מפורשת או משתמעת. החברה לא מתחייבת ואינה אחראית ל:
                    </p>
                    <ul className="space-y-2 mr-6 mt-3">
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        • דיוק, שלמות, או עדכניות המידע
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        • תקינות תפקודית של האתר או היעדר תקלות
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        • זמינות רציפה וללא הפסקות
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        • היעדר וירוסים, תוכנות זדוניות, או קוד מזיק
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        • התאמה לצרכים או ציפיות ספציפיות של המשתמש
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-xl mb-3" style={{ color: "rgba(25,39,74,0.97)" }}>
                      6.2 היקף הגבלת האחריות
                    </h3>
                    <p className="text-lg leading-relaxed mb-3" style={{ color: "rgba(25,39,74,0.8)" }}>
                      במידה המרבית שמותרת על פי דין, החברה, בעליה, מנהליה, עובדיה, סוכניה, או נציגיה לא יישאו באחריות לכל נזק מכל סוג שהוא, לרבות:
                    </p>
                    <ul className="space-y-2 mr-6">
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        <span className="font-bold">נזקים ישירים:</span> אובדן כספי, הפסד עסקי, נזק לרכוש
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        <span className="font-bold">נזקים עקיפים:</span> אובדן רווחים, הכנסות, הזדמנויות עסקיות, מוניטין
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        <span className="font-bold">נזקים תוצאתיים:</span> כל נזק שנגרם כתוצאה משימוש או אי-יכולת להשתמש באתר
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        <span className="font-bold">נזק רגשי או נפשי:</span> עוגמת נפש, כאב וסבל, אכזבה
                      </li>
                    </ul>
                    <p className="text-lg leading-relaxed mt-4 font-bold" style={{ color: "#c79d2a" }}>
                      אחריות זו מוגבלת גם אם החברה קיבלה הודעה מוקדמת על אפשרות התרחשות נזקים כאמור.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-xl mb-3" style={{ color: "rgba(25,39,74,0.97)" }}>
                      6.3 זמינות האתר ותקלות
                    </h3>
                    <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                      החברה אינה מתחייבת לזמינות רציפה של האתר. האתר עשוי להיות לא זמין עקב:
                    </p>
                    <ul className="space-y-2 mr-6 mt-3">
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        עבודות תחזוקה מתוכננות או דחופות
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        תקלות טכניות או כשלים בשרתים
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        מתקפות סייבר, האקינג, או פעילות זדונית של צדדים שלישיים
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        כוח עליון (אסונות טבע, מלחמות, השבתות תשתיות)
                      </li>
                    </ul>
                    <p className="text-lg leading-relaxed mt-3" style={{ color: "rgba(25,39,74,0.8)" }}>
                      החברה לא תישא באחריות לכל נזק הנובע מאי-זמינות האתר, אובדן מידע, או תקלות טכניות.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-xl mb-3" style={{ color: "rgba(25,39,74,0.97)" }}>
                      6.4 קישורים לאתרים חיצוניים
                    </h3>
                    <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                      האתר עשוי לכלול קישורים לאתרים חיצוניים (למשל: רשתות חברתיות, אתרי ממשלה, בנקים). החברה אינה אחראית לתכנים, למדיניות פרטיות, או לזמינות של אתרים אלו. שימוש באתרים חיצוניים הוא באחריות המשתמש הבלעדית.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-xl mb-3" style={{ color: "rgba(25,39,74,0.97)" }}>
                      6.5 מגבלת אחריות כספית מקסימלית
                    </h3>
                    <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                      במידה ובית משפט יקבע שהחברה אחראית לנזק כלשהו הנובע משימוש באתר (חרף הכתובים לעיל), אחריות החברה תוגבל לסכום של 100 ₪ (מאה שקלים חדשים) בלבד.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 7 */}
              <div className="border-t pt-12 mb-12" style={{ borderColor: "rgba(25,39,74,0.1)" }}>
                <h2 className="text-3xl font-serif font-bold mb-6" style={{ color: "rgba(25,39,74,0.97)" }}>
                  7. שיפוי (Indemnification)
                </h2>
                <p className="text-lg leading-relaxed mb-4" style={{ color: "rgba(25,39,74,0.8)" }}>
                  המשתמש מתחייב לשפות, להגן, ולפצות את KeyHouse Eilat, בעליה, מנהליה, עובדיה, סוכניה, נציגיה, ספקיה, ושותפיה העסקיים, בגין:
                </p>
                <ul className="space-y-3 mr-6">
                  <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                    <span className="font-bold">הפרת התקנון:</span> כל נזק, הפסד, או הוצאה שייגרמו עקב הפרה של תנאי תקנון זה על ידי המשתמש
                  </li>
                  <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                    <span className="font-bold">הפרת חוק:</span> כל תביעה, דרישה, או הליך משפטי הנובעים משימוש בלתי חוקי באתר
                  </li>
                  <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                    <span className="font-bold">הפרת זכויות צד שלישי:</span> פגיעה בזכויות קניין רוחני, פרטיות, או זכויות אחרות של צדדים שלישיים
                  </li>
                  <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                    <span className="font-bold">מידע כוזב:</span> נזק שנגרם עקב מסירת מידע שגוי, מטעה, או כוזב בטפסים
                  </li>
                </ul>
                <p className="text-lg leading-relaxed mt-6" style={{ color: "rgba(25,39,74,0.8)" }}>
                  השיפוי כולל כיסוי מלא של הוצאות משפט, שכר טרחת עורכי דין, הוצאות משפטיות, ופיצויים שיפסקו על ידי בית משפט או ששולמו במסגרת הסדר פשרה.
                </p>
              </div>

              {/* Section 8 */}
              <div className="border-t pt-12 mb-12" style={{ borderColor: "rgba(25,39,74,0.1)" }}>
                <h2 className="text-3xl font-serif font-bold mb-6" style={{ color: "rgba(25,39,74,0.97)" }}>
                  8. שינויים בתקנון ובאתר
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-xl mb-3" style={{ color: "rgba(25,39,74,0.97)" }}>
                      8.1 זכות לשינוי התקנון
                    </h3>
                    <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                      החברה שומרת לעצמה את הזכות לעדכן, לשנות, או לתקן תקנון זה בכל עת, ללא הודעה מוקדמת. שינויים ייכנסו לתוקף מיד עם פרסומם באתר.
                    </p>
                    <p className="text-lg leading-relaxed mt-3 font-bold" style={{ color: "#c79d2a" }}>
                      אחריות המשתמש לבדוק את התקנון מעת לעת. המשך שימוש באתר לאחר שינוי התקנון מהווה הסכמה לשינויים.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-xl mb-3" style={{ color: "rgba(25,39,74,0.97)" }}>
                      8.2 שינויים באתר ובשירותים
                    </h3>
                    <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                      החברה רשאית בכל עת:
                    </p>
                    <ul className="space-y-2 mr-6 mt-3">
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        לשנות, להוסיף, או להסיר תכנים, תכונות, או שירותים מהאתר
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        לשנות את מבנה, עיצוב, או ממשק המשתמש של האתר
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        להפסיק את פעילות האתר באופן זמני או קבוע
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        להגביל גישה לחלקים מסוימים באתר
                      </li>
                    </ul>
                    <p className="text-lg leading-relaxed mt-3" style={{ color: "rgba(25,39,74,0.8)" }}>
                      כל זאת ללא הודעה מוקדמת וללא כל אחריות או חבות כלפי המשתמשים.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-xl mb-3" style={{ color: "rgba(25,39,74,0.97)" }}>
                      8.3 תאריך עדכון
                    </h3>
                    <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                      תאריך העדכון האחרון של התקנון מופיע בראש מסמך זה. יש לבדוק תאריך זה באופן תקופתי.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 9 */}
              <div className="border-t pt-12 mb-12" style={{ borderColor: "rgba(25,39,74,0.1)" }}>
                <h2 className="text-3xl font-serif font-bold mb-6" style={{ color: "rgba(25,39,74,0.97)" }}>
                  9. סמכות שיפוט, דין חל, ופתרון סכסוכים
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-xl mb-3" style={{ color: "rgba(25,39,74,0.97)" }}>
                      9.1 דין חל
                    </h3>
                    <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                      תקנון זה וכל הנובע ממנו או קשור אליו יפורש ויחול עליו הדין הישראלי בלבד, ללא תחולת כללי ברירת הדין הבין-לאומי.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-xl mb-3" style={{ color: "rgba(25,39,74,0.97)" }}>
                      9.2 סמכות שיפוט בלעדית
                    </h3>
                    <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                      סמכות השיפוט הבלעדית והייחודית לכל עניין, תביעה, או מחלוקת הנובעים משימוש באתר, מתקנון זה, או מהקשר בין המשתמש לחברה, נתונה אך ורק לבתי המשפט המוסמכים בעיר אילת או במחוז דרום, מדינת ישראל.
                    </p>
                    <p className="text-lg leading-relaxed mt-3 font-bold" style={{ color: "#c79d2a" }}>
                      המשתמש מוותר בזאת באופן בלתי חוזר על כל טענה בדבר חוסר סמכות, פורום לא נוח, או כל טענה דומה.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-xl mb-3" style={{ color: "rgba(25,39,74,0.97)" }}>
                      9.3 פתרון סכסוכים
                    </h3>
                    <p className="text-lg leading-relaxed mb-3" style={{ color: "rgba(25,39,74,0.8)" }}>
                      במקרה של מחלוקת או סכסוך:
                    </p>
                    <ul className="space-y-2 mr-6">
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        <span className="font-bold">שלב 1:</span> יש לפנות תחילה אל החברה בכתב (דוא״ל או מכתב רשום) ולתאר את המחלוקת
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        <span className="font-bold">שלב 2:</span> החברה תשקול את הפנייה ותשיב תוך 30 יום
                      </li>
                      <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                        <span className="font-bold">שלב 3:</span> במידה והצדדים לא הגיעו להסכמה, ניתן לפנות להליכים משפטיים בבתי המשפט כאמור לעיל
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-xl mb-3" style={{ color: "rgba(25,39,74,0.97)" }}>
                      9.4 ויתור על תביעות ייצוגיות
                    </h3>
                    <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                      במידה המרבית המותרת על פי חוק, המשתמש מוותר על זכותו להגיש או להצטרף לתביעה ייצוגית, תביעה קבוצתית, או כל הליך משפטי קולקטיבי נגד החברה הנובע משימוש באתר.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 10 */}
              <div className="border-t pt-12 mb-12" style={{ borderColor: "rgba(25,39,74,0.1)" }}>
                <h2 className="text-3xl font-serif font-bold mb-6" style={{ color: "rgba(25,39,74,0.97)" }}>
                  10. הוראות כלליות ומשפטיות
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-xl mb-3" style={{ color: "rgba(25,39,74,0.97)" }}>
                      10.1 הסכם שלם
                    </h3>
                    <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                      תקנון זה ו<a href="/privacy" className="font-bold transition-colors duration-300 hover:opacity-80" style={{ color: "#c79d2a" }}>מדיניות הפרטיות</a> מהווים יחד את ההסכם המלא והמקיף בין המשתמש לחברה בנוגע לשימוש באתר, ומבטלים כל הסכם, הבנה, או מצג קודמים, בכתב או בעל-פה.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-xl mb-3" style={{ color: "rgba(25,39,74,0.97)" }}>
                      10.2 ניתוק הוראות (Severability)
                    </h3>
                    <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                      אם הוראה כלשהי בתקנון זה תימצא בלתי חוקית, בלתי תקפה, או בלתי אכיפה על ידי בית משפט מוסמך, ההוראה תבוטל או תצומצם למינימום הנדרש, ושאר הוראות התקנון יישארו בתוקפן המלא.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-xl mb-3" style={{ color: "rgba(25,39,74,0.97)" }}>
                      10.3 אי-ויתור (Non-Waiver)
                    </h3>
                    <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                      אי-אכיפה או ויתור זמני של החברה על זכות או הוראה מהוראות תקנון זה לא יהוו ויתור על אותה זכות או הוראה בעתיד, ולא ימנעו את החברה מלאכוף אותה בעתיד.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-xl mb-3" style={{ color: "rgba(25,39,74,0.97)" }}>
                      10.4 איסור העברת זכויות
                    </h3>
                    <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                      המשתמש אינו רשאי להעביר, למסור, או להמחות את זכויותיו או חובותיו על פי תקנון זה לצד שלישי. החברה רשאית להעביר את זכויותיה וחובותיה על פי תקנון זה לכל צד שלישי ללא צורך בהסכמת המשתמש.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-xl mb-3" style={{ color: "rgba(25,39,74,0.97)" }}>
                      10.5 כותרות
                    </h3>
                    <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                      כותרות הסעיפים בתקנון זה הן למטרות נוחות בלבד ואין להן משמעות משפטית או פרשנית.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-xl mb-3" style={{ color: "rgba(25,39,74,0.97)" }}>
                      10.6 שפה ותרגום
                    </h3>
                    <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                      תקנון זה נכתב בעברית. במקרה של תרגום לשפות אחרות, הנוסח העברי הוא הקובע והמחייב.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 11 */}
              <div className="border-t pt-12 mb-12" style={{ borderColor: "rgba(25,39,74,0.1)" }}>
                <h2 className="text-3xl font-serif font-bold mb-6" style={{ color: "rgba(25,39,74,0.97)" }}>
                  11. חסימת משתמשים והפסקת שירות
                </h2>
                <p className="text-lg leading-relaxed mb-4" style={{ color: "rgba(25,39,74,0.8)" }}>
                  החברה שומרת לעצמה את הזכות, על פי שיקול דעתה הבלעדי וללא צורך במתן הסבר או הודעה מוקדמת:
                </p>
                <ul className="space-y-3 mr-6">
                  <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                    לחסום גישה של משתמש לאתר (באמצעות חסימת IP, חסימת חשבון, או כל אמצעי טכני אחר)
                  </li>
                  <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                    להסיר תוכן שהועלה על ידי משתמש (אם קיימת אפשרות העלאת תוכן)
                  </li>
                  <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                    לסרב לספק שירות למשתמש מסוים
                  </li>
                  <li className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                    למחוק מידע או תוכן שהועבר על ידי משתמש
                  </li>
                </ul>
                <p className="text-lg leading-relaxed mt-6" style={{ color: "rgba(25,39,74,0.8)" }}>
                  זכויות אלו יופעלו במיוחד (אך לא רק) במקרים של הפרת תקנון זה, שימוש בלתי חוקי, התנהגות פוגענית, ניסיונות פריצה או נזק לאתר, או כל פעולה שהחברה רואה כפוגעת באינטרסים שלה או של משתמשים אחרים.
                </p>
              </div>

              {/* Contact Section */}
              <div className="border-t pt-12" style={{ borderColor: "rgba(25,39,74,0.1)" }}>
                <div className="p-8 rounded-2xl"
                     style={{
                       background: "linear-gradient(135deg, rgba(199,157,42,0.08) 0%, rgba(255,255,255,0.95) 50%, rgba(199,157,42,0.05) 100%)"
                     }}>
                  <h2 className="text-3xl font-serif font-bold mb-6" style={{ color: "rgba(25,39,74,0.97)" }}>
                    יצירת קשר בנושא התקנון
                  </h2>
                  <p className="text-lg leading-relaxed mb-6" style={{ color: "rgba(25,39,74,0.85)" }}>
                    לכל שאלה, בירור, או הבהרה בנוגע לתקנון זה ולתנאי השימוש באתר, אנא צור איתנו קשר:
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
                      לשאלות נוספות או לקביעת פגישה,{" "}
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
