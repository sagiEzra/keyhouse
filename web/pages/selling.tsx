import { FaBullseye as Target, FaChartLine as TrendingUp, FaShieldAlt as Shield } from "react-icons/fa"
import ServiceHero from "../components/common/service-hero"
import Header from "../components/header"
import ServiceSection from "../components/common/service-section"
import StatsSection from "../components/common/stats-section"
import CTASection from "../components/common/cta-section"

export default function SellingPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-white">
      <Header />

      <ServiceHero
        title="למכור את הנכס שלך, בלי דאגות"
        subtitle="עם מי שמבינים איך עושים את זה נכון - מקצועיות, שקיפות ותוצאות"
        image="/images/selling-hero.jpg"
        imageAlt="מכירת נכס עם KeyHouse"
      />

      <ServiceSection
        title="שיווק מדויק שמוכר"
        description="אנחנו לא סתם מפרסמים את הנכס שלך - אנחנו בונים אסטרטגיית שיווק מותאמת אישית שמביאה תוצאות. מהצילום המקצועי, דרך הטקסטים המשכנעים ועד לפרסום הממוקד - אנחנו יודעים איך להציג את הנכס שלך בצורה הטובה ביותר ולהביא את הקונים הנכונים."
        icon={<Target className="h-8 w-8" />}
        image="/images/marketing-property.jpg"
        imageAlt="שיווק נכסים מקצועי"
      >
        <ul className="mt-6 space-y-3" style={{ color: "#23214a" }}>
          <li className="flex items-start">
            <span className="mr-2" style={{ color: "#f1c23b" }}>
              ✓
            </span>
            <span>צילום מקצועי שמדגיש את היתרונות של הנכס</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2" style={{ color: "#f1c23b" }}>
              ✓
            </span>
            <span>טקסטים שיווקיים שמושכים את תשומת הלב</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2" style={{ color: "#f1c23b" }}>
              ✓
            </span>
            <span>פרסום ממוקד בפלטפורמות הנכונות</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2" style={{ color: "#f1c23b" }}>
              ✓
            </span>
            <span>חיסכון בזמן והתעסקות - אנחנו עושים הכל בשבילך</span>
          </li>
        </ul>
      </ServiceSection>

      <ServiceSection
        title="תמחור שממקסם רווח"
        description="התמחור הנכון הוא אחד הגורמים המשמעותיים ביותר בהצלחת מכירת נכס. עם ניסיון של מעל לעשור בשוק הנדל״ן באילת, אנחנו יודעים בדיוק איך לתמחר את הנכס שלך כדי למקסם את הרווח שלך ולמכור במהירות האופטימלית."
        icon={<TrendingUp className="h-8 w-8" />}
        image="/images/pricing-property.jpg"
        imageAlt="תמחור נכסים מקצועי"
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
            איך אנחנו קובעים את המחיר הנכון?
          </h3>
          <ul className="space-y-3" style={{ color: "#23214a" }}>
            <li className="flex items-start">
              <span className="mr-2 font-bold" style={{ color: "#f1c23b" }}>
                1.
              </span>
              <span>ניתוח מעמיק של שוק הנדל״ן המקומי</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold" style={{ color: "#f1c23b" }}>
                2.
              </span>
              <span>השוואה לעסקאות דומות שבוצעו לאחרונה</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold" style={{ color: "#f1c23b" }}>
                3.
              </span>
              <span>הערכת היתרונות והחסרונות הייחודיים של הנכס</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold" style={{ color: "#f1c23b" }}>
                4.
              </span>
              <span>התחשבות במגמות השוק ובתחזיות עתידיות</span>
            </li>
          </ul>
        </div>
      </ServiceSection>

      <ServiceSection
        title="ליווי מלא לאורך כל הדרך"
        description="אנחנו לא רק מוצאים קונה לנכס שלך - אנחנו מלווים אותך לאורך כל התהליך, מהרגע הראשון ועד לחתימה על החוזה ומסירת המפתחות. הניסיון שלנו מבטיח שתקבל את הליווי המקצועי ביותר, תוך שמירה על האינטרסים שלך בכל שלב."
        icon={<Shield className="h-8 w-8" />}
        image="/images/full-support.jpg"
        imageAlt="ליווי מלא במכירת נכס"
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
              ניהול משא ומתן מקצועי
            </h4>
            <p style={{ color: "#23214a" }}>אנחנו יודעים איך לנהל משא ומתן שישיג עבורך את התנאים הטובים ביותר.</p>
          </div>
          <div
            className="rounded-xl bg-white/90 p-5 shadow-xl border backdrop-blur-xl transition-all duration-300 hover:-translate-y-1"
            style={{
              borderColor: "#23214a33",
              boxShadow: "0 4px 24px 0 #23214a14, 0 1.5px 8px 0 #23214a08",
            }}
          >
            <h4 className="mb-2 font-bold" style={{ color: "#23214a" }}>
              טיפול בבירוקרטיה
            </h4>
            <p style={{ color: "#23214a" }}>אנחנו מטפלים בכל הניירת והבירוקרטיה כדי לחסוך לך זמן וכאבי ראש.</p>
          </div>
          <div
            className="rounded-xl bg-white/90 p-5 shadow-xl border backdrop-blur-xl transition-all duration-300 hover:-translate-y-1"
            style={{
              borderColor: "#23214a33",
              boxShadow: "0 4px 24px 0 #23214a14, 0 1.5px 8px 0 #23214a08",
            }}
          >
            <h4 className="mb-2 font-bold" style={{ color: "#23214a" }}>
              הגנה משפטית
            </h4>
            <p style={{ color: "#23214a" }}>אנחנו עובדים עם עורכי דין מנוסים שמבטיחים שהאינטרסים שלך מוגנים.</p>
          </div>
          <div
            className="rounded-xl bg-white/90 p-5 shadow-xl border backdrop-blur-xl transition-all duration-300 hover:-translate-y-1"
            style={{
              borderColor: "#23214a33",
              boxShadow: "0 4px 24px 0 #23214a14, 0 1.5px 8px 0 #23214a08",
            }}
          >
            <h4 className="mb-2 font-bold" style={{ color: "#23214a" }}>
              שקיפות מלאה
            </h4>
            <p style={{ color: "#23214a" }}>אתה תמיד תהיה מעודכן בכל התפתחות ותקבל דיווחים שוטפים על התקדמות התהליך.</p>
          </div>
        </div>
      </ServiceSection>

      <StatsSection
        title="למה למכור איתנו?"
        description="הנתונים מדברים בעד עצמם - אנחנו מביאים תוצאות"
        stats={[
          { value: 87, label: "מהנכסים נמכרים במחיר גבוה ממחיר השוק הממוצע", type: 'precentage' },
          { value: 45, label: "ימים בממוצע למכירת נכס" },
          { value: 98, label: "שביעות רצון לקוחות", type: 'precentage' },
          { value: 350, label: "עסקאות מוצלחות", type: '+' },
        ]}
      />

      <CTASection
        title="רוצה למכור את הנכס שלך בראש שקט וברווח גבוה?"
        description="צוות המומחים שלנו כאן כדי ללוות אותך בכל שלב בדרך למכירה מוצלחת."
        buttonText="דבר איתנו עוד היום"
      />
    </main>
  )
}
