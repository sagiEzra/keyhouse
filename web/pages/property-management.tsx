
import { FaThLarge as LayoutGrid, FaWrench as Wrench, FaChartBar as BarChart, FaDollarSign as DollarSign } from "react-icons/fa"
import ServiceHero from "../components/common/service-hero"
import Header from "../components/header"
import ServiceSection from "../components/common/service-section"
import StatsSection from "../components/common/stats-section"
import TestimonialBox from "../components/common/testimonial-box"
import CTASection from "../components/common/cta-section"


export default function PropertyManagementPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-white">
      <Header />

      <ServiceHero
        title="השקעת בנדל״ן? עכשיו תן לנו לנהל את זה כמו שצריך"
        subtitle="ניהול נכסים מקצועי שמשמר את ערך הנכס ומקסם את התשואה שלך"
        image="/images/property-management-hero.jpg"
        imageAlt="ניהול נכסים עם KeyHouse"
      />

      <ServiceSection
        title="ניהול מקצה לקצה"
        description="אנחנו מטפלים בכל ההיבטים של ניהול הנכס שלך, מפרסום הנכס ומציאת שוכרים איכותיים, דרך גבייה ותחזוקה שוטפת, ועד לטיפול בכל בעיה שעלולה להתעורר. כל זאת תוך שמירה על שקיפות מלאה מולך כבעלים."
        icon={<LayoutGrid className="h-8 w-8" />}
        image="/images/full-management.jpg"
        imageAlt="ניהול נכסים מקצה לקצה"
      >
        <ul className="mt-6 space-y-3 text-gray-600">
          <li className="flex items-start">
            <span className="mr-2 text-blue-600">✓</span>
            <span>פרסום הנכס בפלטפורמות הרלוונטיות</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-blue-600">✓</span>
            <span>סינון ובחירת שוכרים איכותיים</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-blue-600">✓</span>
            <span>חוזי שכירות מקצועיים ומקיפים</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-blue-600">✓</span>
            <span>גבייה שוטפת ודיווח מסודר</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-blue-600">✓</span>
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
        <div className="mt-6 rounded-xl bg-blue-50 p-6">
          <h3 className="mb-3 text-xl font-bold text-gray-900">איך אנחנו שומרים על הנכס שלך?</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="mr-2 text-blue-600">1.</span>
              <span>בדיקות תקופתיות של מצב הנכס</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-blue-600">2.</span>
              <span>תחזוקה מונעת למניעת נזקים עתידיים</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-blue-600">3.</span>
              <span>טיפול מהיר בתקלות ובעיות</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-blue-600">4.</span>
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
          <div className="rounded-xl bg-white p-5 shadow-md">
            <h4 className="mb-2 font-bold text-gray-900">דו״חות חודשיים</h4>
            <p className="text-gray-600">דו״חות מפורטים על הכנסות, הוצאות ופעילות בנכס.</p>
          </div>
          <div className="rounded-xl bg-white p-5 shadow-md">
            <h4 className="mb-2 font-bold text-gray-900">עדכונים שוטפים</h4>
            <p className="text-gray-600">עדכונים על כל אירוע משמעותי הקשור לנכס.</p>
          </div>
          <div className="rounded-xl bg-white p-5 shadow-md">
            <h4 className="mb-2 font-bold text-gray-900">מענה זמין</h4>
            <p className="text-gray-600">צוות זמין לכל שאלה או בקשה שלך כבעלים.</p>
          </div>
          <div className="rounded-xl bg-white p-5 shadow-md">
            <h4 className="mb-2 font-bold text-gray-900">ניהול מרחוק</h4>
            <p className="text-gray-600">ניהול מלא של הנכס גם אם אתה לא נמצא באזור.</p>
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
          <div className="mb-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 p-4 text-white">
            <h3 className="text-xl font-bold">חיסכון בזמן ובכסף</h3>
            <p className="mt-2">
              אנחנו חוסכים לך את הזמן והמאמץ הכרוכים בניהול נכס, ומבטיחים שהנכס שלך יתופעל ביעילות מקסימלית.
            </p>
          </div>
          <div className="rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-500 p-4 text-blue-900">
            <h3 className="text-xl font-bold">אין שוכרים בעייתיים, אין נזקים מיותרים, אין כאב ראש</h3>
            <p className="mt-2">
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
          { value: "98%", label: "תפוסה ממוצעת בנכסים שבניהולנו" },
          { value: "24", label: "שעות מקסימום לטיפול בתקלות" },
          { value: "15%", label: "עלייה ממוצעת בתשואה לאחר שנה של ניהול" },
          { value: "0", label: "ימי עיכוב בתשלומים לבעלי הנכסים" },
        ]}
      />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">לקוחות מספרים</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <TestimonialBox
              quote="מאז שהעברתי את הנכס לניהול של KeyHouse, אני ישן טוב בלילה. הם מטפלים בכל, מוצאים שוכרים איכותיים, ודואגים שהכל יתנהל על הצד הטוב ביותר. התשואה שלי עלתה והדאגות ירדו."
              author="יוסי לוי"
              role="בעל דירת 3 חדרים להשקעה"
              image="/images/testimonial-investor-1.jpg"
            />
            <TestimonialBox
              quote="כמשקיעה שגרה בתל אביב, חיפשתי מישהו אמין שינהל את הנכס שלי באילת. KeyHouse הם הרבה יותר ממנהלי נכסים - הם שותפים אמיתיים להצלחה של ההשקעה שלי."
              author="רונית כהן"
              role="בעלת 2 דירות להשקעה"
              image="/images/testimonial-investor-2.jpg"
            />
            <TestimonialBox
              quote="המקצועיות והיסודיות של צוות KeyHouse מרשימה. הם מטפלים בכל פרט, מתקשרים באופן ברור ושקוף, ותמיד זמינים לכל שאלה. ההשקעה שלי בידיים הטובות ביותר."
              author="דוד גולדשטיין"
              role="בעל מספר נכסים להשקעה באילת"
              image="/images/testimonial-investor-3.jpg"
            />
          </div>
        </div>
      </section>

      <CTASection
        title="תן לנכס שלך לעבוד - אנחנו נדאג לכל השאר"
        description="צוות המומחים שלנו כאן כדי לנהל את הנכס שלך בצורה המקצועית והיעילה ביותר."
        buttonText="דבר איתנו עוד היום"
      />
    </main>
  )
}
