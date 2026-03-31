import { FaBullseye as Target, FaChartLine as TrendingUp, FaShieldAlt as Shield } from "react-icons/fa"
import ServiceHero from "../components/common/service-hero"
import ServiceSection from "../components/common/service-section"
import StatsSection from "../components/common/stats-section"
import CTASection from "../components/common/cta-section"
import { PropertyValuationPopup } from "../components/common/PropertyValuationPopup"
import ValuationDisclaimer from "@/components/ui/valuation-disclaimer"
import {
  ChecklistContent,
  NumberedStepsCard,
  FeatureGrid
} from "../components/common/service-section-children"
import SEOHead from "@/components/seo/SEOHead"
import { MultipleStructuredData } from "@/components/seo/StructuredData"

export default function SellingPage() {
  return (
    <>
      <SEOHead
        title="מכירת דירה באילת | שיווק נכסים מקצועי | קי האוס"
        description="רוצים למכור דירה באילת? נשווק את הנכס שלכם בצורה המקצועית ביותר. צילום מקצועי, חשיפה מקסימלית, משא ומתן וליווי מלא. קבלו את המחיר הטוב ביותר לנכס שלכם."
        canonical="/selling"
        keywords={[
          'מכירת דירה באילת',
          'שיווק נכסים אילת',
          'תיווך אילת',
          'מכירת נכס באילת',
          'שמאות אילת',
          'תמחור נכס',
          'צילום נכס מקצועי',
          'מכירת דירה מהירה'
        ]}
      />

      <MultipleStructuredData
        schemas={[
          {
            type: 'BreadcrumbList',
            data: {
              items: [
                { name: 'דף הבית', url: '/' },
                { name: 'מכירת דירה', url: '/selling' }
              ]
            }
          },
          {
            type: 'WebPage',
            data: {
              name: 'מכירת דירה באילת - שיווק מקצועי מלא',
              url: '/selling',
              description: 'שירותי שיווק ומכירה מקצועיים לנכסים באילת'
            }
          }
        ]}
      />

      <main id="main-content" dir="rtl" className="min-h-screen bg-white">
      <PropertyValuationPopup />

      <ServiceHero
        title="למכור את הנכס שלך בלי דאגות"
        subtitle="עם ליווי אישי, אסטרטגיית שיווק חכמה - ותוצאות שמדברות בעד עצמן"
        image="/images/homeServices/selling.png"
        imageAlt="מכירת נכס עם KeyHouse"
      />

      <ServiceSection
        title="שיווק מדויק שמבדל את הנכס שלך"
        description="אנחנו לא סתם מפרסמים את הנכס שלך - אנחנו בונים אסטרטגיית שיווק מותאמת אישית שמביאה תוצאות. מהצילום המקצועי, דרך הטקסטים המשכנעים ועד לפרסום הממוקד - אנחנו יודעים איך להציג את הנכס שלך בצורה הטובה ביותר ולהביא את הקונים הנכונים."
        icon={<Target className="h-8 w-8" />}
        image="/images/sellingPage/1.jpg"
        imageAlt="שיווק נכסים מקצועי"
      >
        <ChecklistContent
          items={[
            { text: "צילום מקצועי שמדגיש את היתרונות של הנכס" },
            { text: "טקסטים שיווקיים שמושכים את תשומת הלב" },
            { text: "פרסום ממוקד בפלטפורמות הנכונות" },
            { text: "חיסכון בזמן והתעסקות - אנחנו עושים הכל בשבילך" }
          ]}
        />
      </ServiceSection>

      <ServiceSection
        title="תמחור שממקסם רווחים"
        description="התמחור הנכון הוא אחד הגורמים המשמעותיים ביותר בהצלחת מכירת נכס. עם ניסיון של מעל לעשור בשוק הנדל״ן באילת, אנחנו יודעים בדיוק איך לתמחר את הנכס שלך כדי למקסם את הרווח שלך ולמכור במהירות האופטימלית."
        icon={<TrendingUp className="h-8 w-8" />}
        image="/images/sellingPage/2.jpg"
        imageAlt="תמחור נכסים מקצועי"
        reverse={true}
      >
        <NumberedStepsCard
          title="איך אנחנו קובעים את המחיר הנכון?"
          steps={[
            { text: "ניתוח מעמיק של שוק הנדל״ן המקומי" },
            { text: "השוואה לעסקאות דומות שבוצעו לאחרונה" },
            { text: "הערכת היתרונות והחסרונות הייחודיים של הנכס" },
            { text: "התחשבות במגמות השוק ובתחזיות עתידיות" }
          ]}
        />
        <ValuationDisclaimer />
      </ServiceSection>

      <ServiceSection
        title="ליווי מלא לאורך כל הדרך"
        description="אנחנו לא רק מוצאים קונה לנכס שלך - אנחנו מלווים אותך לאורך כל התהליך, מהרגע הראשון ועד לחתימה על החוזה ומסירת המפתחות. הניסיון שלנו מבטיח שתקבל את הליווי המקצועי ביותר, תוך שמירה על האינטרסים שלך בכל שלב."
        icon={<Shield className="h-8 w-8" />}
        image="/images/sellingPage/3.jpg"
        imageAlt="ליווי מלא במכירת נכס"
      >
        <FeatureGrid
          features={[
            {
              title: "ניהול משא ומתן מקצועי",
              description: "אנחנו יודעים איך לנהל משא ומתן שישיג עבורך את התנאים הטובים ביותר."
            },
            {
              title: "טיפול בבירוקרטיה",
              description: "אנחנו עוזרים לך לטפל בכל הניירת, הבירוקרטיה והמיסוי, כדי לחסוך לך זמן וכאבי ראש."
            },
            {
              title: "הגנה משפטית",
              description: "אנחנו עובדים עם עורכי דין מנוסים שמבטיחים שהאינטרסים שלך מוגנים."
            },
            {
              title: "שקיפות מלאה",
              description: "אתה תמיד תהיה מעודכן בכל התפתחות ותקבל דיווחים שוטפים על התקדמות התהליך."
            }
          ]}
        />
      </ServiceSection>

      <StatsSection
        title="למה למכור איתנו?"
        description="המספרים מדברים בעד עצמם - אנחנו מביאים תוצאות, לא הבטחות"
        stats={[
          { value: 98, label: "לקוחות מרוצים חוזרים והמלצות אישיות", type: 'precentage' },
          { value: 87, label: "מהנכסים נמכרים במחיר היעד או מעליו ! על ידי הערכת שוק ותמחור אסטרטגי", type: 'precentage' },
          { value: 86, label: "מעסקאות המכירה בבלעדיות מלאה", type: 'precentage' },
          { value: 45, label: "יום בממוצע מתחילת השיווק - להצעה הראשונה" },
        ]}
      />

      <CTASection
        title="רוצה למכור את הנכס שלך בראש שקט ומקסימום רווח?"
        description="צוות המומחים שלנו כאן כדי ללוות אותך בכל שלב בדרך למכירה מוצלחת."
        buttonText="דבר איתנו עוד היום"
      />
    </main>
    </>
  )
}
