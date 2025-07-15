import ServiceHero from "../components/common/service-hero"
import Header from "../components/header"
import ServiceSection from "../components/common/service-section"
import StatsSection from "../components/common/stats-section"
import CTASection from "../components/common/cta-section"

import { FaShieldAlt as ShieldCheck, FaSearch as Search, FaClock as Clock, FaAward as Award } from "react-icons/fa"

export default function BuyingPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-white">
      <Header />

      <ServiceHero
        title="הדרך החכמה לקנות נכס"
        subtitle="עם ליווי שמגן עליך, משלב החלום ועד המפתח"
        image="/images/buying-hero.jpg"
        imageAlt="קניית נכס עם KeyHouse"
      />

      <ServiceSection
        title="קנייה בטוחה וחכמה"
        description="רכישת נכס היא אחת ההחלטות הפיננסיות המשמעותיות ביותר בחיים, ואנחנו כאן כדי להבטיח שתעשה את זה נכון. הליווי המקצועי שלנו מבטיח שלא תיפול בפח ותקבל את הנכס המתאים ביותר עבורך, במחיר הוגן ובתנאים הטובים ביותר."
        icon={<ShieldCheck className="h-8 w-8" />}
        image="/images/safe-buying.jpg"
        imageAlt="קנייה בטוחה של נכס"
      >
        <ul className="mt-6 space-y-3" style={{ color: "#23214a" }}>
          <li className="flex items-start">
            <span className="mr-2" style={{ color: "#f1c23b" }}>
              ✓
            </span>
            <span>בדיקת היסטוריית הנכס ומצבו המשפטי</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2" style={{ color: "#f1c23b" }}>
              ✓
            </span>
            <span>ניתוח מקצועי של מצב הנכס ועלויות תחזוקה צפויות</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2" style={{ color: "#f1c23b" }}>
              ✓
            </span>
            <span>בדיקת התאמת הנכס לצרכים ולתקציב שלך</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2" style={{ color: "#f1c23b" }}>
              ✓
            </span>
            <span>ליווי משפטי מקצועי לאורך כל התהליך</span>
          </li>
        </ul>
      </ServiceSection>

      <ServiceSection
        title="התאמה מדויקת לצרכים שלך"
        description="אנחנו לא מבזבזים את הזמן שלך על נכסים שלא רלוונטיים עבורך. תהליך העבודה שלנו מתחיל בהבנה מעמיקה של הצרכים, הרצונות והתקציב שלך, ורק אז אנחנו מתחילים לחפש את הנכס המושלם עבורך."
        icon={<Search className="h-8 w-8" />}
        image="/images/perfect-match.jpg"
        imageAlt="התאמה מדויקת של נכס"
        reverse={true}
      >
        <div
          className="mt-6 rounded-xl p-6 shadow-lg border backdrop-blur-xl"
          style={{
            background: "linear-gradient(135deg, #23214a0d 0%, #fff 50%, #23214a1a 100%)",
            borderColor: "#23214a33",
          }}
        >
          <h3 className="mb-3 text-xl font-bold" style={{ color: "#23214a" }}>
            איך אנחנו מוצאים את הנכס המושלם עבורך?
          </h3>
          <ul className="space-y-3" style={{ color: "#23214a" }}>
            <li className="flex items-start">
              <span className="mr-2 font-bold" style={{ color: "#f1c23b" }}>
                1.
              </span>
              <span>פגישת ייעוץ מעמיקה להבנת הצרכים והרצונות שלך</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold" style={{ color: "#f1c23b" }}>
                2.
              </span>
              <span>ניתוח השוק ואיתור הזדמנויות שמתאימות לקריטריונים שלך</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold" style={{ color: "#f1c23b" }}>
                3.
              </span>
              <span>סינון ראשוני של נכסים כדי לחסוך לך זמן וכאבי ראש</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold" style={{ color: "#f1c23b" }}>
                4.
              </span>
              <span>ליווי בסיורים בנכסים והסבר מקצועי על היתרונות והחסרונות</span>
            </li>
          </ul>
        </div>
      </ServiceSection>

      <ServiceSection
        title="תהליך יעיל וחסכוני"
        description="אנחנו יודעים שהזמן שלך יקר, ולכן אנחנו עובדים בצורה יעילה ומדויקת כדי לחסוך לך זמן, כסף וכאבי ראש. התהליך שלנו מתוכנן כך שתוכל להגיע להחלטה מושכלת במהירות האפשרית, מבלי להתפשר על איכות."
        icon={<Clock className="h-8 w-8" />}
        image="/images/efficient-process.jpg"
        imageAlt="תהליך יעיל לקניית נכס"
      >
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div
            className="rounded-xl bg-white/90 p-5 shadow-xl border backdrop-blur-xl transition-all duration-300 hover:-translate-y-1"
            style={{
              borderColor: "#23214a33",
              boxShadow: "0 4px 24px 0 #23214a14, 0 1.5px 8px 0 #23214a08",
            }}
          >
            <h4 className="mb-2 font-bold" style={{ color: "#23214a" }}>
              חיסכון בזמן
            </h4>
            <p style={{ color: "#23214a" }}>אנחנו מסננים עבורך את הנכסים ומציגים רק את אלה שבאמת מתאימים לך.</p>
          </div>
          <div
            className="rounded-xl bg-white/90 p-5 shadow-xl border backdrop-blur-xl transition-all duration-300 hover:-translate-y-1"
            style={{
              borderColor: "#23214a33",
              boxShadow: "0 4px 24px 0 #23214a14, 0 1.5px 8px 0 #23214a08",
            }}
          >
            <h4 className="mb-2 font-bold" style={{ color: "#23214a" }}>
              חיסכון בכסף
            </h4>
            <p style={{ color: "#23214a" }}>הניסיון שלנו במשא ומתן מבטיח שתקבל את המחיר הטוב ביותר עבור הנכס.</p>
          </div>
          <div
            className="rounded-xl bg-white/90 p-5 shadow-xl border backdrop-blur-xl transition-all duration-300 hover:-translate-y-1"
            style={{
              borderColor: "#23214a33",
              boxShadow: "0 4px 24px 0 #23214a14, 0 1.5px 8px 0 #23214a08",
            }}
          >
            <h4 className="mb-2 font-bold" style={{ color: "#23214a" }}>
              הימנעות מטעויות
            </h4>
            <p style={{ color: "#23214a" }}>אנחנו מזהים בעיות פוטנציאליות מראש ומונעים טעויות יקרות.</p>
          </div>
          <div
            className="rounded-xl bg-white/90 p-5 shadow-xl border backdrop-blur-xl transition-all duration-300 hover:-translate-y-1"
            style={{
              borderColor: "#23214a33",
              boxShadow: "0 4px 24px 0 #23214a14, 0 1.5px 8px 0 #23214a08",
            }}
          >
            <h4 className="mb-2 font-bold" style={{ color: "#23214a" }}>
              ליווי מקצה לקצה
            </h4>
            <p style={{ color: "#23214a" }}>מהחיפוש הראשוני ועד לקבלת המפתחות - אנחנו איתך בכל שלב.</p>
          </div>
        </div>
      </ServiceSection>

      <ServiceSection
        title="למה איתנו זה אחרת"
        description="ב-KeyHouse אנחנו לא סתם סוכני נדל״ן - אנחנו שותפים אמיתיים בדרך שלך לרכישת הנכס המושלם. הניסיון, הקשרים והמוניטין שלנו, יחד עם הגישה האישית והמחויבות ללקוח, הופכים אותנו לבחירה המושלמת עבורך."
        icon={<Award className="h-8 w-8" />}
        image="/images/why-us.jpg"
        imageAlt="למה לבחור ב-KeyHouse"
        reverse={true}
      >
        <div className="mt-6">
          <div
            className="mb-4 rounded-xl p-4 shadow-lg border backdrop-blur-xl"
            style={{
              background: "linear-gradient(90deg, #23214ad9 0%, #23214aeb 100%)",
              borderColor: "#23214a33",
            }}
          >
            <h3 className="text-xl font-bold text-white">אנשים של אנשים - דואגים קודם כל לך</h3>
            <p className="mt-2 text-blue-100">
              אנחנו מאמינים שמאחורי כל עסקת נדל״ן עומדים אנשים עם חלומות, צרכים ורצונות. המחויבות שלנו היא קודם כל אליך
              ולאינטרסים שלך.
            </p>
          </div>
          <div
            className="rounded-xl p-4 shadow-lg border backdrop-blur-xl"
            style={{
              background: "linear-gradient(90deg, #f1c23b 0%, #f1c23b 100%)",
              borderColor: "#f1c23b33",
            }}
          >
            <h3 className="text-xl font-bold" style={{ color: "#23214a" }}>
              ניסיון, קשרים ומוניטין
            </h3>
            <p className="mt-2" style={{ color: "#23214a" }}>
              עם ניסיון של מעל 12 שנים בשוק הנדל״ן באילת, רשת קשרים ענפה ומוניטין מוכח, אנחנו יכולים להציע לך הזדמנויות
              ושירותים שלא תמצא במקום אחר.
            </p>
          </div>
        </div>
      </ServiceSection>

      <StatsSection
        title="למה לקנות איתנו?"
        description="הנתונים מדברים בעד עצמם - אנחנו מביאים תוצאות"
        stats={[
          { value: "93%", label: "מהלקוחות שלנו מוצאים את הנכס המושלם תוך 60 יום" },
          { value: "15%", label: "חיסכון ממוצע במחיר הרכישה הודות למשא ומתן שלנו" },
          { value: "98%", label: "שביעות רצון לקוחות" },
          { value: "0", label: "עסקאות שהסתיימו בהליכים משפטיים" },
        ]}
      />

      <CTASection
        title="הדרך לקנייה נכונה מתחילה בליווי הנכון"
        description="צוות המומחים שלנו כאן כדי לעזור לך למצוא את הנכס המושלם ולהוביל אותך לעסקה מוצלחת."
        buttonText="דבר איתנו"
      />
    </main>
  )
}
