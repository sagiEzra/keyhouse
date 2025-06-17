import ServiceHero from "../components/common/service-hero"
import Header from "../components/header"
import ServiceSection from "../components/common/service-section"
import StatsSection from "../components/common/stats-section"
import TestimonialBox from "../components/common/testimonial-box"
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
        <ul className="mt-6 space-y-3 text-gray-600">
          <li className="flex items-start">
            <span className="mr-2 text-blue-600">✓</span>
            <span>בדיקת היסטוריית הנכס ומצבו המשפטי</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-blue-600">✓</span>
            <span>ניתוח מקצועי של מצב הנכס ועלויות תחזוקה צפויות</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-blue-600">✓</span>
            <span>בדיקת התאמת הנכס לצרכים ולתקציב שלך</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-blue-600">✓</span>
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
        <div className="mt-6 rounded-xl bg-blue-50 p-6">
          <h3 className="mb-3 text-xl font-bold text-gray-900">איך אנחנו מוצאים את הנכס המושלם עבורך?</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="mr-2 text-blue-600">1.</span>
              <span>פגישת ייעוץ מעמיקה להבנת הצרכים והרצונות שלך</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-blue-600">2.</span>
              <span>ניתוח השוק ואיתור הזדמנויות שמתאימות לקריטריונים שלך</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-blue-600">3.</span>
              <span>סינון ראשוני של נכסים כדי לחסוך לך זמן וכאבי ראש</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-blue-600">4.</span>
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
          <div className="rounded-xl bg-white p-5 shadow-md">
            <h4 className="mb-2 font-bold text-gray-900">חיסכון בזמן</h4>
            <p className="text-gray-600">אנחנו מסננים עבורך את הנכסים ומציגים רק את אלה שבאמת מתאימים לך.</p>
          </div>
          <div className="rounded-xl bg-white p-5 shadow-md">
            <h4 className="mb-2 font-bold text-gray-900">חיסכון בכסף</h4>
            <p className="text-gray-600">הניסיון שלנו במשא ומתן מבטיח שתקבל את המחיר הטוב ביותר עבור הנכס.</p>
          </div>
          <div className="rounded-xl bg-white p-5 shadow-md">
            <h4 className="mb-2 font-bold text-gray-900">הימנעות מטעויות</h4>
            <p className="text-gray-600">אנחנו מזהים בעיות פוטנציאליות מראש ומונעים טעויות יקרות.</p>
          </div>
          <div className="rounded-xl bg-white p-5 shadow-md">
            <h4 className="mb-2 font-bold text-gray-900">ליווי מקצה לקצה</h4>
            <p className="text-gray-600">מהחיפוש הראשוני ועד לקבלת המפתחות - אנחנו איתך בכל שלב.</p>
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
          <div className="mb-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 p-4 text-white">
            <h3 className="text-xl font-bold">אנשים של אנשים - דואגים קודם כל לך</h3>
            <p className="mt-2">
              אנחנו מאמינים שמאחורי כל עסקת נדל״ן עומדים אנשים עם חלומות, צרכים ורצונות. המחויבות שלנו היא קודם כל אליך
              ולאינטרסים שלך.
            </p>
          </div>
          <div className="rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-500 p-4 text-blue-900">
            <h3 className="text-xl font-bold">ניסיון, קשרים ומוניטין</h3>
            <p className="mt-2">
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

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">לקוחות מספרים</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <TestimonialBox
              quote="הליווי של KeyHouse בתהליך הרכישה היה מעל ומעבר. הם הבינו בדיוק מה אנחנו מחפשים והציגו בפנינו אפשרויות שהתאימו לצרכים ולתקציב שלנו. מקצועיות ברמה הגבוהה ביותר!"
              author="משפחת לוי"
              role="רכשו דירת 4 חדרים בשכונת אלמוג"
              image="/images/testimonial-family.jpg"
            />
            <TestimonialBox
              quote="כמשקיע נדל״ן, אני מעריך מאוד את המקצועיות והידע של צוות KeyHouse. הם עזרו לי לאתר הזדמנויות השקעה מצוינות באילת והתהליך היה יעיל ומהיר. ממליץ בחום!"
              author="אורי גולדשטיין"
              role="משקיע נדל״ן"
              image="/images/testimonial-3.jpg"
            />
            <TestimonialBox
              quote="אחרי חיפוש ארוך מצאנו את KeyHouse והם עזרו לנו למצוא את בית החלומות שלנו. השירות היה אישי, מקצועי וסבלני. רותם ליוותה אותנו בכל שלב והפכה את התהליך המורכב לפשוט ונעים."
              author="מיכל ושלומי כהן"
              role="רכשו וילה בשכונת שחמון"
              image="/images/testimonial-couple.jpg"
            />
          </div>
        </div>
      </section>

      <CTASection
        title="הדרך לקנייה נכונה מתחילה בליווי הנכון"
        description="צוות המומחים שלנו כאן כדי לעזור לך למצוא את הנכס המושלם ולהוביל אותך לעסקה מוצלחת."
        buttonText="דבר איתנו"
      />
    </main>
  )
}
