import Head from "next/head"
import LuxuryBackground from "@/components/ui/luxury-background"
import SectionHeader from "@/components/ui/section-header"
import LuxuryCard from "@/components/ui/luxury-card"
import { motion } from "framer-motion"

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>תקנון ותנאי שימוש | KeyHouse נדל״ן אילת</title>
        <meta
          name="description"
          content="תקנון ותנאי שימוש באתר קי-האוס אילת - סוכנות נדל״ן באילת. קראו את התנאים לשימוש בשירותי האתר."
        />
      </Head>

      <LuxuryBackground variant="light" className="py-32">
        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
          <SectionHeader
            title="תקנון ותנאי שימוש"
            subtitle="תקנון זה מגדיר את כללי השימוש באתר קי-האוס אילת ומטרתו להגן על זכויות הקניין הרוחני של החברה ולגבול את אחריותה. גלישה ושימוש באתר מהווים הסכמה מלאה, בלתי חוזרת וללא תנאי לכל הוראות התקנון."
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
                1. הגדרות וכללי
              </h2>
              <div className="space-y-4 mb-12">
                <div>
                  <h3 className="font-bold text-lg mb-2" style={{ color: "rgba(25,39,74,0.97)" }}>
                    החברה:
                  </h3>
                  <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                    קי-האוס אילת, סוכנות נדל"ן בע"מ.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2" style={{ color: "rgba(25,39,74,0.97)" }}>
                    האתר:
                  </h3>
                  <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                    אתר האינטרנט של קי-האוס אילת המשמש כבמה להצגת מידע ושירותי החברה.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2" style={{ color: "rgba(25,39,74,0.97)" }}>
                    משתמש:
                  </h3>
                  <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                    כל אדם המבקר או משתמש בשירותי האתר.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2" style={{ color: "rgba(25,39,74,0.97)" }}>
                    מטרת האתר:
                  </h3>
                  <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                    האתר נועד לספק מידע תדמיתי, פרטים על נכסים רלוונטיים, ומאפשר יצירת קשר ראשוני עם צוות הסוכנות.
                  </p>
                </div>
              </div>

              {/* Section 2 */}
              <div className="border-t pt-12 mb-12" style={{ borderColor: "rgba(25,39,74,0.1)" }}>
                <h2 className="text-3xl font-serif font-bold mb-6" style={{ color: "rgba(25,39,74,0.97)" }}>
                  2. תנאי שימוש בשירותי האתר
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-lg mb-2" style={{ color: "rgba(25,39,74,0.97)" }}>
                      שימוש אישי ולא מסחרי:
                    </h3>
                    <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                      השימוש באתר מותר למטרות אישיות ופרטיות בלבד. חל איסור מוחלט להעתיק, להציג, להפיץ או למכור את המידע הכלול באתר ללא אישור מפורש מראש ובכתב מהחברה.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2" style={{ color: "rgba(25,39,74,0.97)" }}>
                      יצירת קשר ודיוור:
                    </h3>
                    <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                      השימוש בטפסי יצירת הקשר והערכת השווי דורש מסירת פרטים מדויקים ומלאים. סימון תיבת ההסכמה לדיוור מהווה אישור לקבלת דברי פרסומת (ניוזלטרים, הצעות שירות, מידע שיווקי) באמצעי תקשורת שונים.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2" style={{ color: "rgba(25,39,74,0.97)" }}>
                      איסור פעולות:
                    </h3>
                    <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                      חל איסור לבצע באתר כל פעולה שתשבש את פעולתו, תפגע בתוכניו או בשימוש בו על ידי משתמשים אחרים.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div className="border-t pt-12 mb-12" style={{ borderColor: "rgba(25,39,74,0.1)" }}>
                <h2 className="text-3xl font-serif font-bold mb-6" style={{ color: "rgba(25,39,74,0.97)" }}>
                  3. קניין רוחני וזכויות יוצרים
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-lg mb-2" style={{ color: "rgba(25,39,74,0.97)" }}>
                      בעלות בלעדית:
                    </h3>
                    <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                      כל התכנים המופיעים באתר, לרבות טקסטים, תמונות, גרפיקה, קוד, עיצובים, מאגרי מידע, וכל חומר גלם אחר – הם קניינה הרוחני הבלעדי של קי-האוס אילת או ניתנה לה זכות שימוש בהם.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2" style={{ color: "rgba(25,39,74,0.97)" }}>
                      הגבלת שימוש בתוכן:
                    </h3>
                    <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                      אין להשתמש בתוכן האתר, כולו או חלקו, ללא קבלת הסכמה מראש ובכתב מהחברה.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 4 */}
              <div className="border-t pt-12 mb-12" style={{ borderColor: "rgba(25,39,74,0.1)" }}>
                <h2 className="text-3xl font-serif font-bold mb-6" style={{ color: "rgba(25,39,74,0.97)" }}>
                  4. היעדר אחריות מקצועית והגבלת אחריות
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-lg mb-2" style={{ color: "rgba(25,39,74,0.97)" }}>
                      הערכות שווי ונתוני נכסים:
                    </h3>
                    <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                      כל מידע אודות נכסים, מחירים או הערכות שווי המופיעים באתר או נמסרים בעקבות מילוי טופס – הוא הערכה ראשונית בלבד ואינו מהווה חוות דעת מקצועית או התחייבות.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2" style={{ color: "rgba(25,39,74,0.97)" }}>
                      מידע כללי בלבד:
                    </h3>
                    <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                      התכנים באתר הם בגדר מידע כללי בלבד ואין לראות בהם תחליף לייעוץ מקצועי, פיננסי או משפטי. החלטות המתקבלות על סמך מידע זה הן באחריות המשתמש בלבד.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2" style={{ color: "rgba(25,39,74,0.97)" }}>
                      היקף האחריות:
                    </h3>
                    <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                      החברה לא תישא בכל אחריות, ישירה או עקיפה, לנזק, אובדן או הפסד שייגרמו למשתמש או לצד שלישי כלשהו כתוצאה משימוש באתר או הסתמכות על המידע המופיע בו.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2" style={{ color: "rgba(25,39,74,0.97)" }}>
                      זמינות האתר:
                    </h3>
                    <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                      החברה אינה מתחייבת לזמינות רציפה של האתר ואינה אחראית לכל נזק עקב כשלים טכניים או תקלות.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 5 */}
              <div className="border-t pt-12 mb-12" style={{ borderColor: "rgba(25,39,74,0.1)" }}>
                <h2 className="text-3xl font-serif font-bold mb-6" style={{ color: "rgba(25,39,74,0.97)" }}>
                  5. שיפוי
                </h2>
                <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                  המשתמש מתחייב לשפות את קי-האוס אילת, עובדיה, מנהליה או מי מטעמה, בגין כל נזק, הפסד, אובדן רווח או הוצאה (לרבות שכר טרחת עורך דין והוצאות משפטיות) שייגרמו להם עקב הפרה של תנאי שימוש אלה על ידי המשתמש.
                </p>
              </div>

              {/* Section 6 */}
              <div className="border-t pt-12 mb-12" style={{ borderColor: "rgba(25,39,74,0.1)" }}>
                <h2 className="text-3xl font-serif font-bold mb-6" style={{ color: "rgba(25,39,74,0.97)" }}>
                  6. שינוי תקנון וסמכות שיפוט
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-lg mb-2" style={{ color: "rgba(25,39,74,0.97)" }}>
                      שינוי:
                    </h3>
                    <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                      החברה שומרת את הזכות לעדכן את תנאי התקנון מעת לעת ללא הודעה מוקדמת. הנוסח המחייב הוא הנוסח המעודכן המפורסם באתר.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2" style={{ color: "rgba(25,39,74,0.97)" }}>
                      סמכות שיפוט:
                    </h3>
                    <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                      הדין החל על תקנון זה וכל הנובע ממנו הוא הדין הישראלי בלבד. סמכות השיפוט הבלעדית לכל עניין הנובע מהשימוש באתר או מהתקנון נתונה לבית המשפט המוסמך באילת או במחוז דרום בישראל.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Section */}
              <div className="border-t pt-12" style={{ borderColor: "rgba(25,39,74,0.1)" }}>
                <div className="p-8 rounded-2xl"
                     style={{
                       background: "linear-gradient(135deg, rgba(199,157,42,0.08) 0%, rgba(255,255,255,0.95) 50%, rgba(199,157,42,0.05) 100%)"
                     }}>
                  <h2 className="text-3xl font-serif font-bold mb-6" style={{ color: "rgba(25,39,74,0.97)" }}>
                    יצירת קשר
                  </h2>
                  <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.85)" }}>
                    לכל שאלה או בירור בנוגע לתקנון זה, אנא{" "}
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
