import ServiceHero from "../components/common/service-hero"
import ServiceSection from "../components/common/service-section"
import StatsSection from "../components/common/stats-section"
import CTASection from "../components/common/cta-section"
import {
  ChecklistContent,
  NumberedStepsCard,
  FeatureGrid,
  HighlightCards
} from "../components/common/service-section-children"
import SEOHead from "@/components/seo/SEOHead"
import { MultipleStructuredData } from "@/components/seo/StructuredData"

import { FaShieldAlt as ShieldCheck, FaSearch as Search, FaClock as Clock, FaAward as Award } from "react-icons/fa"

export default function BuyingPage() {
  return (
    <>
      <SEOHead
        title="קניית דירה באילת | ליווי מקצועי מהחיפוש ועד העסקה | קי האוס"
        description="רוצים לקנות דירה באילת? נלווה אתכם בכל השלבים - מהחיפוש, דרך המשא ומתן, ועד חתימת החוזה. שירות מקצועי ואישי, ניתוח צרכים מעמיק ומקסימום דאגה לאינטרסים שלכם."
        canonical="/buying"
        keywords={[
          'קניית דירה באילת',
          'רכישת דירה באילת',
          'ליווי רכישת דירה',
          'קניית נכס באילת',
          'דירות להשקעה אילת',
          'רכישת נדל"ן אילת',
          'יעוץ קניית דירה',
          'משכנתא אילת'
        ]}
      />

      <MultipleStructuredData
        schemas={[
          {
            type: 'BreadcrumbList',
            data: {
              items: [
                { name: 'דף הבית', url: '/' },
                { name: 'קניית דירה', url: '/buying' }
              ]
            }
          },
          {
            type: 'WebPage',
            data: {
              name: 'קניית דירה באילת - ליווי מקצועי מלא',
              url: '/buying',
              description: 'שירותי ליווי מקצועי לקניית דירה באילת - מהחיפוש ועד העסקה'
            }
          }
        ]}
      />

      <main id="main-content" dir="rtl" className="min-h-screen bg-white">

      <ServiceHero
        title="הדרך הבטוחה והחכמה לקנות נכס"
        subtitle="מתחילה מכאן - משלב החלום ועד המפתח"
        image="/images/buyingPage/hero.jpg"
        imageAlt="קניית נכס עם KeyHouse"
      />

      <ServiceSection
        title="קנייה בטוחה וחכמה"
        description="רכישת נכס היא אחת ההחלטות הפיננסיות המשמעותיות ביותר בחיים, ואנחנו כאן כדי לוודא שתעשה את זה נכון. הליווי המקצועי שלנו מבטיח שלא תיפול בפח ותקבל את הנכס המתאים ביותר עבורך, במחיר הוגן ובתנאים הטובים ביותר."
        icon={<ShieldCheck className="h-8 w-8" />}
        image="/images/buyingPage/1.jpg"
        imageAlt="קנייה בטוחה של נכס"
      >
        <ChecklistContent
          items={[
            { text: "לפני הכול - ניתוח מקצועי של הצרכים והתקציב שלך" },
            { text: "בוחנים עבורך הזדמנויות נדל״ן שלא תמיד מגיעות לפרסום פומבי" },
            { text: "מאתרים נכסים מדוייקים עבורך עם מקסימום דאגה לאינטרסים שלך" },
            { text: "חיבור עם אנשי מקצוע אמינים שילוו את העסקה בתחומים הנדרשים (עורכי דין, יועצי משכנתא, שיפוצים וכדומה)" }
          ]}
        />
      </ServiceSection>

      <ServiceSection
        title="התאמה מדויקת לצרכים שלך"
        description="אנחנו לא מבזבזים את הזמן שלך על נכסים שלא רלוונטיים עבורך. תהליך העבודה שלנו מתחיל בהבנה מעמיקה של הצרכים, הרצונות והתקציב שלך, ורק אז אנחנו מתחילים לחפש את הנכס המושלם עבורך."
        icon={<Search className="h-8 w-8" />}
        image="/images/buyingPage/2.jpg"
        imageAlt="התאמה מדויקת של נכס"
        reverse={true}
      >
        <NumberedStepsCard
          title="איך אנחנו מוצאים את הנכס המושלם עבורך?"
          steps={[
            { text: "פגישת ייעוץ מעמיקה להבנת הצרכים והרצונות שלך" },
            { text: "ניתוח השוק ואיתור הזדמנויות שמתאימות לקריטריונים שלך" },
            { text: "סינון ראשוני של נכסים כדי לחסוך לך זמן וכאבי ראש" },
            { text: "ליווי בסיורים בנכסים והסבר מקצועי על היתרונות והחסרונות" }
          ]}
        />
      </ServiceSection>

      <ServiceSection
        title="תהליך יעיל וחסכוני"
        description="אנחנו יודעים שהזמן שלך יקר, ולכן אנחנו עובדים בצורה יעילה ומדויקת כדי לחסוך לך זמן, כסף וכאבי ראש. התהליך שלנו מתוכנן כך שתוכל להגיע להחלטה מושכלת במהירות האפשרית, מבלי להתפשר על איכות."
        icon={<Clock className="h-8 w-8" />}
        image="/images/buyingPage/3.jpg"
        imageAlt="תהליך יעיל לקניית נכס"
      >
        <FeatureGrid
          features={[
            {
              title: "חיסכון בזמן",
              description: "אנחנו מסננים עבורך את הנכסים ומציגים רק את אלה שבאמת מתאימים לך."
            },
            {
              title: "חיסכון בכסף",
              description: "הניסיון שלנו במשא ומתן מבטיח שתקבל את המחיר הטוב ביותר עבור הנכס."
            },
            {
              title: "הימנעות מטעויות",
              description: "אנחנו מזהים בעיות פוטנציאליות מראש ומונעים טעויות יקרות."
            },
            {
              title: "ליווי מקצה לקצה",
              description: "מהחיפוש הראשוני ועד לקבלת המפתחות - אנחנו איתך בכל שלב."
            }
          ]}
        />
      </ServiceSection>

      <ServiceSection
        title="למה איתנו זה אחרת"
        description="ב-KeyHouse אנחנו לא עוד משרד תיווך - אנחנו שותפים אמיתיים בדרך שלך לרכישת הנכס המושלם עבורך. הניסיון, הקשרים והמוניטין שלנו, יחד עם הגישה האישית והמחויבות ללקוח, הופכים אותנו לבחירה המושלמת עבורך."
        icon={<Award className="h-8 w-8" />}
        image="/images/rotemShiraz.png"
        imageAlt="למה לבחור ב-KeyHouse"
        reverse={true}
      >
        <HighlightCards
          cards={[
            {
              variant: "accent",
              title: "אנשים של אנשים - דואגים קודם כל לך",
              content: "אנחנו מאמינים שמאחורי כל עסקת נדל״ן עומדים אנשים עם חלומות, צרכים ורצונות. המחויבות שלנו היא קודם כל אליך ולאינטרסים שלך."
            },
            {
              variant: "dark",
              title: "ניסיון, קשרים ומוניטין",
              content: "עם ניסיון של מעל לעשור בשוק הנדל״ן באילת, רשת קשרים ענפה ומוניטין מוכח, אנחנו יכולים להציע לך הזדמנויות ושירותים שלא תמצא במקום אחר."
            }
          ]}
        />
      </ServiceSection>

      <StatsSection
        title="למה לקנות איתנו?"
        description="הנתונים מדברים בעד עצמם - אנחנו מביאים תוצאות"
        stats={[
          { value: 93, label: "מהלקוחות שלנו מוצאים את הנכס המדוייק להם תוך פחות מ-30 יום", type: 'precentage' },
          { value: 92, label: "מדווחים שחסכנו להם המון זמן, כסף ולחץ", type: 'precentage' },
          { value: 96, label: "מדווחים שהיו בוחרים לקנות איתנו שוב", type: 'precentage' },
          { value: 5, label: "חיסכון ממוצע במחיר הרכישה הודות למשא ומתן שלנו", type: 'precentage' },
        ]}
      />

      <CTASection
        title="הדרך לקנייה נכונה מתחילה בליווי הנכון"
        description="צוות המומחים שלנו כאן כדי לעזור לך למצוא את הנכס המושלם ולהוביל אותך לעסקה מוצלחת."
        buttonText="דבר איתנו"
      />
    </main>
    </>
  )
}
