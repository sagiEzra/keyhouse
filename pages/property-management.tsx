import {
  FaThLarge as LayoutGrid,
  FaWrench as Wrench,
  FaChartBar as BarChart,
  FaDollarSign as DollarSign,
} from "react-icons/fa"
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

export default function PropertyManagementPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-white">

      <ServiceHero
        title="השקעת בנדל״ן? עכשיו תן לנו לנהל את זה כמו שצריך"
        subtitle="ניהול נכסים מקצועי שנותן לך ראש שקט וביטחון"
        image="/images/homeServices/managing.jpg"
        imageAlt="ניהול נכסים עם KeyHouse"
      />

      <ServiceSection
        title="ניהול מקצה לקצה"
        description="אנחנו מטפלים בכל ההיבטים של ניהול הנכס שלך, מפרסום הנכס ומציאת שוכרים איכותיים, דרך גבייה ותחזוקה שוטפת, ועד לטיפול בכל בעיה שעלולה להתעורר. כל זאת תוך שמירה על שקיפות מלאה מולך כבעלים."
        icon={<LayoutGrid className="h-8 w-8" />}
        image="/images/managingpage/1.jpg"
        imageAlt="ניהול נכסים מקצה לקצה"
      >
        <ChecklistContent
          items={[
            { text: "פרסום ממוקד בפלטפורמות הנכונות" },
            { text: "סינון ובחירת שוכרים איכותיים" },
            { text: "גבייה שוטפת ודיווח מסודר" },
            { text: "טיפול בפניות שוכרים ובעיות שוטפות" }
          ]}
        />
      </ServiceSection>

      <ServiceSection
        title="שמירה על הנכס וההשקעה"
        description="הנכס שלך הוא השקעה יקרה, ואנחנו מתייחסים אליו בהתאם. אנחנו מטפלים בתחזוקה שוטפת, מזמינים אנשי מקצוע שמתקנים תקלות במהירות וביעילות, כדי לשמור על ערך הנכס שלך לאורך זמן."
        icon={<Wrench className="h-8 w-8" />}
        image="/images/managingpage/2.png"
        imageAlt="שמירה על נכסים"
        reverse={true}
      >
        <NumberedStepsCard
          title="איך אנחנו שומרים על הנכס שלך?"
          steps={[
            { text: "תקשורת חלקה שלנו עם השוכרים, בצורה שתטיב איתך" },
            { text: "עבודה עם בעלי מקצוע מהימנים ואיכותיים" },
            { text: "דואגים ליידע אותך בדברים החשובים" },
          ]}
        />
      </ServiceSection>

      <ServiceSection
        title="שקיפות ושקט נפשי"
        description="עם שירות ניהול הנכסים שלנו, אתה יכול להיות רגוע ולדעת שהנכס שלך בידיים טובות."
        icon={<BarChart className="h-8 w-8" />}
        image="/images/managingpage/3.jpg"
        imageAlt="שקט נפשי בניהול נכסים"
      >
        <HighlightCards
          cards={[
            {
              variant: "dark",
              title: "נוחות מקסימלית וחיסכון בזמן ",
              content: "אנחנו חוסכים לך את הזמן והמאמץ הכרוכים בניהול הנכס בשוטף, ומוודאים שהנכס שלך יתופעל ביעילות מקסימלית."
            },
            {
              variant: "accent",
              title: "אנחנו איתך",
              content: "אנחנו זמינים עבורך לשאלות ובקשות, כך שתמיד תהיה מעודכן במצב הנכס וההשקעה שלך, בלי סימני שאלה וחוסר וודאות, קודם כל שקיפות."
            }
          ]}
        />
      </ServiceSection>

      {/* <StatsSection
        title="למה לבחור בשירותי ניהול הנכסים שלנו?"
        description="הנתונים מדברים בעד עצמם - אנחנו מביאים תוצאות"
        stats={[
          { value: 98, label: "תפוסה ממוצעת בנכסים שבניהולנו", type: 'precentage' },
          { value: 24, label: "שעות מקסימום לטיפול בתקלות" },
          { value: 15, label: "עלייה ממוצעת בתשואה לאחר שנה של ניהול", type: 'precentage' },
          { value: 0, label: "ימי עיכוב בתשלומים לבעלי הנכסים" },
        ]}
      /> */}

      <CTASection
        title="תן לנכס שלך לעבוד - אנחנו נדאג לכל השאר"
        description="צוות המומחים שלנו כאן כדי לנהל את הנכס שלך בצורה המקצועית והיעילה ביותר."
        buttonText="דבר איתנו עוד היום"
      />
    </main>
  )
}
