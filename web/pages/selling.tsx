import { FaBullseye as Target, FaChartLine as TrendingUp, FaShieldAlt as Shield } from "react-icons/fa"
import ServiceHero from "../components/common/service-hero"
import Header from "../components/header"
import ServiceSection from "../components/common/service-section"
import StatsSection from "../components/common/stats-section"
import TestimonialBox from "../components/common/testimonial-box"
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
        <ul className="mt-6 space-y-3 text-gray-600">
          <li className="flex items-start">
            <span className="mr-2 text-blue-600">✓</span>
            <span>צילום מקצועי שמדגיש את היתרונות של הנכס</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-blue-600">✓</span>
            <span>טקסטים שיווקיים שמושכים את תשומת הלב</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-blue-600">✓</span>
            <span>פרסום ממוקד בפלטפורמות הנכונות</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-blue-600">✓</span>
            <span>חיסכון בזמן והתעסקות - אנחנו עושים הכל בשבילך</span>
          </li>
        </ul>
      </ServiceSection>

      <ServiceSection
        title="תמחור שממקסם רווח"
        description="התמחור הנכון הוא אחד הגורמים המשמעותיים ביותר בהצלחת מכירת נכס. עם ניסיון של מעל 12 שנים בשוק הנדל״ן באילת, אנחנו יודעים בדיוק איך לתמחר את הנכס שלך כדי למקסם את הרווח שלך ולמכור במהירות האופטימלית."
        icon={<TrendingUp className="h-8 w-8" />}
        image="/images/pricing-property.jpg"
        imageAlt="תמחור נכסים מקצועי"
        reverse={true}
      >
        <div className="mt-6 rounded-xl bg-blue-50 p-6">
          <h3 className="mb-3 text-xl font-bold text-gray-900">איך אנחנו קובעים את המחיר הנכון?</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="mr-2 text-blue-600">1.</span>
              <span>ניתוח מעמיק של שוק הנדל״ן המקומי</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-blue-600">2.</span>
              <span>השוואה לעסקאות דומות שבוצעו לאחרונה</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-blue-600">3.</span>
              <span>הערכת היתרונות והחסרונות הייחודיים של הנכס</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-blue-600">4.</span>
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
          <div className="rounded-xl bg-white p-5 shadow-md">
            <h4 className="mb-2 font-bold text-gray-900">ניהול משא ומתן מקצועי</h4>
            <p className="text-gray-600">אנחנו יודעים איך לנהל משא ומתן שישיג עבורך את התנאים הטובים ביותר.</p>
          </div>
          <div className="rounded-xl bg-white p-5 shadow-md">
            <h4 className="mb-2 font-bold text-gray-900">טיפול בבירוקרטיה</h4>
            <p className="text-gray-600">אנחנו מטפלים בכל הניירת והבירוקרטיה כדי לחסוך לך זמן וכאבי ראש.</p>
          </div>
          <div className="rounded-xl bg-white p-5 shadow-md">
            <h4 className="mb-2 font-bold text-gray-900">הגנה משפטית</h4>
            <p className="text-gray-600">אנחנו עובדים עם עורכי דין מנוסים שמבטיחים שהאינטרסים שלך מוגנים.</p>
          </div>
          <div className="rounded-xl bg-white p-5 shadow-md">
            <h4 className="mb-2 font-bold text-gray-900">שקיפות מלאה</h4>
            <p className="text-gray-600">אתה תמיד תהיה מעודכן בכל התפתחות ותקבל דיווחים שוטפים על התקדמות התהליך.</p>
          </div>
        </div>
      </ServiceSection>

      <StatsSection
        title="למה למכור איתנו?"
        description="הנתונים מדברים בעד עצמם - אנחנו מביאים תוצאות"
        stats={[
          { value: "87%", label: "מהנכסים נמכרים במחיר גבוה ממחיר השוק הממוצע" },
          { value: "45", label: "ימים בממוצע למכירת נכס" },
          { value: "98%", label: "שביעות רצון לקוחות" },
          { value: "350+", label: "עסקאות מוצלחות" },
        ]}
      />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">לקוחות מספרים</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <TestimonialBox
              quote="רותם וצוות KeyHouse היו מדהימים לאורך כל תהליך המכירה. הם הצליחו למכור את הדירה שלי במחיר גבוה ממה שציפיתי ובזמן קצר. מקצועיות ברמה הגבוהה ביותר!"
              author="דניאל לוי"
              role="מכר דירת 4 חדרים בשכונת אלמוג"
              image="/images/testimonial-1.jpg"
            />
            <TestimonialBox
              quote="אחרי שהדירה שלי הייתה בשוק כמעט שנה עם סוכן אחר, KeyHouse הצליחו למכור אותה תוך חודשיים ובמחיר טוב. ההבדל היה בשיווק המקצועי והנגישות שלהם לקונים פוטנציאליים."
              author="מיכל כהן"
              role="מכרה דירת 3 חדרים במרכז העיר"
              image="/images/testimonial-2.jpg"
            />
            <TestimonialBox
              quote="הליווי המקצועי של KeyHouse היה מעל ומעבר למצופה. הם טיפלו בכל הפרטים הקטנים, ניהלו משא ומתן מצוין, והפכו את תהליך המכירה לפשוט ונטול דאגות."
              author="אורי גולדשטיין"
              role="מכר וילה בשכונת שחמון"
              image="/images/testimonial-3.jpg"
            />
          </div>
        </div>
      </section>

      <CTASection
        title="רוצה למכור את הנכס שלך בראש שקט וברווח גבוה?"
        description="צוות המומחים שלנו כאן כדי ללוות אותך בכל שלב בדרך למכירה מוצלחת."
        buttonText="דבר איתנו עוד היום"
      />
    </main>
  )
}
