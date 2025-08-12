import {
  FaThLarge as LayoutGrid,
  FaWrench as Wrench,
  FaChartBar as BarChart,
  FaDollarSign as DollarSign,
} from "react-icons/fa"
import ServiceHero from "../components/common/service-hero"
import Header from "../components/header"
import ServiceSection from "../components/common/service-section"
import StatsSection from "../components/common/stats-section"
import CTASection from "../components/common/cta-section"

export default function PropertyManagementPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-white">

      <ServiceHero
        title="השקעת בנדל״ן? עכשיו תן לנו לנהל את זה כמו שצריך"
        subtitle="ניהול נכסים מקצועי שמשמר את ערך הנכס ומקסם את התשואה שלך"
        image="/images/properties-card.jpg"
        imageAlt="ניהול נכסים עם KeyHouse"
      />

      <ServiceSection
        title="ניהול מקצה לקצה"
        description="אנחנו מטפלים בכל ההיבטים של ניהול הנכס שלך, מפרסום הנכס ומציאת שוכרים איכותיים, דרך גבייה ותחזוקה שוטפת, ועד לטיפול בכל בעיה שעלולה להתעורר. כל זאת תוך שמירה על שקיפות מלאה מולך כבעלים."
        icon={<LayoutGrid className="h-8 w-8" />}
        image="/images/full-management.jpg"
        imageAlt="ניהול נכסים מקצה לקצה"
      >
        <ul className="mt-6 space-y-3" style={{ color: "#23214a" }}>
          <li className="flex items-start">
            <span className="mr-2" style={{ color: "#f1c23b" }}>
              ✓
            </span>
            <span>פרסום הנכס בפלטפורמות הרלוונטיות</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2" style={{ color: "#f1c23b" }}>
              ✓
            </span>
            <span>סינון ובחירת שוכרים איכותיים</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2" style={{ color: "#f1c23b" }}>
              ✓
            </span>
            <span>חוזי שכירות מקצועיים ומקיפים</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2" style={{ color: "#f1c23b" }}>
              ✓
            </span>
            <span>גבייה שוטפת ודיווח מסודר</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2" style={{ color: "#f1c23b" }}>
              ✓
            </span>
            <span>טיפול בפניות שוכרים ובעיות שוטפות</span>
          </li>
        </ul>
      </ServiceSection>

      <ServiceSection
        title="שמירה על הנכס וההשקעה"
        description="הנכס שלך הוא השקעה יקרה, ואנחנו מתייחסים אליו בהתאם. אנחנו מבצעים בדיקות תקופתיות, מטפלים בתחזוקה שוטפת ומתקנים תקלות במהירות וביעילות, כדי לשמור על ערך הנכס שלך לאורך זמן."
        icon={<Wrench className="h-8 w-8" />}
        image="/images/property-maintenance.jpg"
        imageAlt="שמירה על נכסים"
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
            איך אנחנו שומרים על הנכס שלך?
          </h3>
          <ul className="space-y-3" style={{ color: "#23214a" }}>
            <li className="flex items-start">
              <span className="mr-2 font-bold" style={{ color: "#f1c23b" }}>
                1.
              </span>
              <span>בדיקות תקופתיות של מצב הנכס</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold" style={{ color: "#f1c23b" }}>
                2.
              </span>
              <span>תחזוקה מונעת למניעת נזקים עתידיים</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold" style={{ color: "#f1c23b" }}>
                3.
              </span>
              <span>טיפול מהיר בתקלות ובעיות</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-bold" style={{ color: "#f1c23b" }}>
                4.
              </span>
              <span>עבודה עם בעלי מקצוע מהימנים ואיכותיים</span>
            </li>
          </ul>
        </div>
      </ServiceSection>

      <ServiceSection
        title="שקט נפשי וביצועים"
        description="עם שירות ניהול הנכסים שלנו, אתה יכול להיות רגוע ולדעת שהנכס שלך בידיים טובות. אנחנו מספקים דו״חות חודשיים, עדכונים שוטפים ומענה זמין לכל שאלה או בקשה, כך שתמיד תהיה מעודכן במצב הנכס וההשקעה שלך."
        icon={<BarChart className="h-8 w-8" />}
        image="/images/peace-of-mind.jpg"
        imageAlt="שקט נפשי בניהול נכסים"
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
              דו״חות חודשיים
            </h4>
            <p style={{ color: "#23214a" }}>דו״חות מפורטים על הכנסות, הוצאות ופעילות בנכס.</p>
          </div>
          <div
            className="rounded-xl bg-white/90 p-5 shadow-xl border backdrop-blur-xl transition-all duration-300 hover:-translate-y-1"
            style={{
              borderColor: "#23214a33",
              boxShadow: "0 4px 24px 0 #23214a14, 0 1.5px 8px 0 #23214a08",
            }}
          >
            <h4 className="mb-2 font-bold" style={{ color: "#23214a" }}>
              עדכונים שוטפים
            </h4>
            <p style={{ color: "#23214a" }}>עדכונים על כל אירוע משמעותי הקשור לנכס.</p>
          </div>
          <div
            className="rounded-xl bg-white/90 p-5 shadow-xl border backdrop-blur-xl transition-all duration-300 hover:-translate-y-1"
            style={{
              borderColor: "#23214a33",
              boxShadow: "0 4px 24px 0 #23214a14, 0 1.5px 8px 0 #23214a08",
            }}
          >
            <h4 className="mb-2 font-bold" style={{ color: "#23214a" }}>
              מענה זמין
            </h4>
            <p style={{ color: "#23214a" }}>צוות זמין לכל שאלה או בקשה שלך כבעלים.</p>
          </div>
          <div
            className="rounded-xl bg-white/90 p-5 shadow-xl border backdrop-blur-xl transition-all duration-300 hover:-translate-y-1"
            style={{
              borderColor: "#23214a33",
              boxShadow: "0 4px 24px 0 #23214a14, 0 1.5px 8px 0 #23214a08",
            }}
          >
            <h4 className="mb-2 font-bold" style={{ color: "#23214a" }}>
              ניהול מרחוק
            </h4>
            <p style={{ color: "#23214a" }}>ניהול מלא של הנכס גם אם אתה לא נמצא באזור.</p>
          </div>
        </div>
      </ServiceSection>

      <ServiceSection
        title="למה איתנו זה משתלם"
        description="ניהול נכסים עם KeyHouse הוא לא רק נוח - הוא גם משתלם כלכלית. אנחנו מבטיחים שהנכס שלך יניב את התשואה המקסימלית, תוך מזעור הוצאות וסיכונים. עם הניסיון והמומחיות שלנו, אתה יכול להיות בטוח שההשקעה שלך בידיים הטובות ביותר."
        icon={<DollarSign className="h-8 w-8" />}
        image="/images/profitable-investment.jpg"
        imageAlt="השקעה משתלמת"
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
            <h3 className="text-xl font-bold text-white">חיסכון בזמן ובכסף</h3>
            <p className="mt-2 text-blue-100">
              אנחנו חוסכים לך את הזמן והמאמץ הכרוכים בניהול נכס, ומבטיחים שהנכס שלך יתופעל ביעילות מקסימלית.
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
              אין שוכרים בעייתיים, אין נזקים מיותרים, אין כאב ראש
            </h3>
            <p className="mt-2" style={{ color: "#23214a" }}>
              הניסיון שלנו מאפשר לנו לבחור שוכרים איכותיים, למנוע נזקים ולטפל בבעיות במהירות וביעילות, כך שאתה יכול
              להיות רגוע.
            </p>
          </div>
        </div>
      </ServiceSection>

      <StatsSection
        title="למה לבחור בשירותי ניהול הנכסים שלנו?"
        description="הנתונים מדברים בעד עצמם - אנחנו מביאים תוצאות"
        stats={[
          { value: 98, label: "תפוסה ממוצעת בנכסים שבניהולנו", type: 'precentage' },
          { value: 24, label: "שעות מקסימום לטיפול בתקלות" },
          { value: 15, label: "עלייה ממוצעת בתשואה לאחר שנה של ניהול", type: 'precentage' },
          { value: 0, label: "ימי עיכוב בתשלומים לבעלי הנכסים" },
        ]}
      />

      <CTASection
        title="תן לנכס שלך לעבוד - אנחנו נדאג לכל השאר"
        description="צוות המומחים שלנו כאן כדי לנהל את הנכס שלך בצורה המקצועית והיעילה ביותר."
        buttonText="דבר איתנו עוד היום"
      />
    </main>
  )
}
