# 🚀 מדריך הגדרת SEO ל-Keyhouse Eilat

## ✅ מה כבר הוכן עבורך

התשתית המלאה של SEO כבר מוכנה ומשולבת באתר! הנה מה שכבר קיים:

### 1. **קומפוננטים מוכנים לשימוש**
- ✅ `<SEOHead>` - Meta tags דינמיים לכל עמוד
- ✅ `<StructuredData>` - Schema.org JSON-LD
- ✅ `<FAQSection>` - שאלות ותשובות עם Schema.org

### 2. **קבצי מערכת**
- ✅ `/api/sitemap.xml` - Sitemap דינמי (מתעדכן אוטומטית)
- ✅ `/public/robots.txt` - הנחיות לרובוטים
- ✅ `next.config.js` - אופטימיזציות ביצועים

### 3. **כל העמודים כבר מאופטמזים**
- ✅ דף הבית
- ✅ קטלוג נכסים
- ✅ **עמוד נכס בודד** (`/catalog/[slug]`) — SSR מלא עם SEOHead דינמי, Product schema, og:image מהנכס עצמו
- ✅ עמודי שירותים (קניה, מכירה, ניהול, הערכת שווי)
- ✅ צור קשר
- ✅ אודות
- ✅ עמודים משפטיים (פרטיות, תקנון, נגישות) — noindex

### 4. **תשתית נוספת**
- ✅ `public/images/og-default.jpg` — תמונת ברירת מחדל לשיתוף ברשתות חברתיות
- ✅ Favicon — מפנה ל-`/images/logoNoBg.png`

---

## 📋 צ'קליסט הגדרה לאחר העלאת האתר לאוויר

### שלב 1: Google Search Console

**אחרי שיש לך דומיין מעולה (keyhouseeilat.co.il):**

1. **היכנס ל-Google Search Console**
   - גש ל-https://search.google.com/search-console
   - התחבר עם חשבון Gmail

2. **הוסף את הנכס (Property)**
   - לחץ "Add Property"
   - בחר "URL prefix"
   - הזן: `https://keyhouseeilat.co.il`

3. **אמת בעלות על הדומיין**

   **שיטה מומלצת - HTML Tag:**
   - Google Search Console יציג לך meta tag לאימות
   - העתק את ה-meta tag
   - הוסף אותו ל-`pages/_app.tsx` בתוך ה-`<Head>`:

   ```tsx
   <Head>
     <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
   </Head>
   ```

   **אלטרנטיבה - DNS Verification:**
   - אם אתה מעדיף, תוכל להוסיף TXT record ל-DNS של הדומיין
   - Google יספק לך את הרשומה המדויקת

4. **הגש את ה-Sitemap**
   - לאחר האימות, עבור ל-"Sitemaps" בצד שמאל
   - הוסף sitemap חדש: `https://keyhouseeilat.co.il/api/sitemap.xml`
   - לחץ "Submit"
   - ה-Sitemap יתעדכן אוטומטית כשתוסיף נכסים חדשים!

---

### שלב 2: Google Analytics 4

1. **צור חשבון Google Analytics**
   - גש ל-https://analytics.google.com
   - צור Property חדש
   - בחר "Web" כפלטפורמה
   - הזן: `keyhouseeilat.co.il`

2. **קבל את ה-Measurement ID**
   - לאחר היצירה, תקבל Measurement ID (מתחיל ב-`G-`)
   - דוגמה: `G-XXXXXXXXXX`

3. **הוסף לאתר**

   **צור קובץ חדש:** `lib/analytics.ts`
   ```typescript
   export const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX' // החלף עם ה-ID שלך

   // Track page views
   export const pageview = (url: string) => {
     if (typeof window !== 'undefined' && (window as any).gtag) {
       (window as any).gtag('config', GA_MEASUREMENT_ID, {
         page_path: url,
       })
     }
   }

   // Track events
   export const event = ({ action, category, label, value }: {
     action: string
     category: string
     label?: string
     value?: number
   }) => {
     if (typeof window !== 'undefined' && (window as any).gtag) {
       (window as any).gtag('event', action, {
         event_category: category,
         event_label: label,
         value: value,
       })
     }
   }
   ```

   **עדכן את** `pages/_app.tsx`:
   ```tsx
   import Script from 'next/script'
   import { GA_MEASUREMENT_ID } from '@/lib/analytics'

   // בתוך ה-component, לפני ה-return:
   return (
     <>
       {/* Google Analytics */}
       <Script
         strategy="afterInteractive"
         src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
       />
       <Script
         id="google-analytics"
         strategy="afterInteractive"
         dangerouslySetInnerHTML={{
           __html: `
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
             gtag('config', '${GA_MEASUREMENT_ID}', {
               page_path: window.location.pathname,
             });
           `,
         }}
       />

       {/* שאר התוכן שלך */}
     </>
   )
   ```

4. **ניטור אירועים (Events)**
   - ניתן לעקוב אחרי לחיצות על כפתורים, טפסים, ועוד
   - דוגמה: עקוב אחרי לחיצות WhatsApp

---

### שלב 3: Google My Business

1. **טען לבעלות על העסק**
   - גש ל-https://www.google.com/business/
   - חפש "Keyhouse Eilat" או "קי האוס אילת"
   - אם קיים - טען לבעלות. אם לא - צור חדש.

2. **מלא פרטים מדויקים**
   ```
   שם: Keyhouse Eilat - קי האוס אילת
   כתובת: אנפה 1, מרכז מור, אילת 88000
   טלפון: 050-224-0035
   אימייל: rk@keyhouse.co.il
   אתר: https://keyhouseeilat.co.il
   קטגוריה: Real Estate Agency / משרד תיווך נדל״ן
   שעות פעילות: א׳-ה׳ 09:00-18:00
   ```

3. **הוסף תמונות איכותיות**
   - לוגו
   - תמונות המשרד
   - תמונות הצוות
   - תמונות נכסים

4. **אסוף ביקורות**
   - שלח ללקוחות לינק לביקורת
   - ענה על כל ביקורת (חיובית ושלילית)

---

### שלב 4: בדיקות לאחר ההשקה

**כלים לבדיקה:**

1. **Google Rich Results Test**
   - https://search.google.com/test/rich-results
   - בדוק שכל ה-Schema.org עובד
   - צריך לראות: Organization, LocalBusiness, FAQPage, וכו׳

2. **PageSpeed Insights**
   - https://pagespeed.web.dev/
   - וודא ציון מעל 90 ב-Mobile וב-Desktop
   - תקן בעיות אם יש

3. **Mobile-Friendly Test**
   - https://search.google.com/test/mobile-friendly
   - וודא שהאתר ידידותי למובייל

4. **Schema Markup Validator**
   - https://validator.schema.org/
   - העתק HTML של עמוד ובדוק

---

## 🎯 טיפים לתחזוקה שוטפת

### עדכון שבועי
- ✅ בדוק Google Search Console לשגיאות Crawl
- ✅ בדוק ביצועים (Impressions, Clicks, CTR)
- ✅ עקוב אחרי מילות המפתח שמובילות תנועה

### עדכון חודשי
- ✅ פרסם תוכן חדש (מאמרים, נכסים)
- ✅ בדוק קישורים שבורים
- ✅ עדכן תמונות ישנות

### בכל פעם שמוסיפים נכס חדש
הכל אוטומטי! ה-Sitemap יתעדכן לבד.

### בכל פעם שמוסיפים **עמוד חדש לאתר**
ראה הסבר מלא בסעיף הבא ↓

---

## 🆕 הוספת עמוד חדש — צ'קליסט SEO

בכל פעם שיוצרים עמוד חדש ב-`pages/`, יש לבצע את הצעדים הבאים:

### 1. הוסף `<SEOHead>` בראש הקומפוננט
```tsx
import SEOHead from "@/components/seo/SEOHead"

<SEOHead
  title="כותרת העמוד | קי האוס אילת"        // 50-60 תווים, כולל מילת מפתח
  description="תיאור העמוד..."               // 150-160 תווים, compelling
  canonical="/your-page-slug"               // ה-path של העמוד
  keywords={[
    'מילת מפתח ראשית באילת',
    'מילת מפתח משנית',
    // ... 5-8 מילות מפתח בעברית
  ]}
/>
```

> **עמודים שלא צריכים אינדוקס** (כמו עמודי תוכן משפטי, admin, תודה): הוסף `noindex={true}`

### 2. הוסף `<StructuredData>` מתאים
```tsx
import StructuredData, { MultipleStructuredData } from "@/components/seo/StructuredData"

// לרוב עמודי התוכן — BreadcrumbList + WebPage:
<MultipleStructuredData schemas={[
  {
    type: 'BreadcrumbList',
    data: { items: [
      { name: 'דף הבית', url: '/' },
      { name: 'שם העמוד', url: '/your-page-slug' }
    ]}
  },
  {
    type: 'WebPage',
    data: { name: 'שם העמוד', url: 'https://keyhouseeilat.co.il/your-page-slug', description: '...' }
  }
]} />
```

### 3. הוסף את העמוד ל-Sitemap
פתח `pages/api/sitemap.xml.ts` והוסף את ה-URL לרשימת הדפים הסטטיים, עם priority ו-changefreq מתאימים:
```typescript
{ url: '/your-page-slug', changefreq: 'monthly', priority: 0.7 }
```

### 4. וודא H1 יחיד
כל עמוד חייב לכלול בדיוק תג `<h1>` אחד עם מילת המפתח הראשית.

### 5. עמודים דינמיים (SSR)
עמודים שמביאים נתונים מ-Firebase (כמו `/catalog/[slug]`) **חייבים** להשתמש ב-`getServerSideProps` כדי שה-OG tags יופיעו בדפדפן ובשיתוף WhatsApp. ראה `/pages/catalog/[slug].tsx` כדוגמה.

---

## 📊 מילות מפתח לניטור

עקוב אחרי הביצועים של מילות המפתח האלו ב-Google Search Console:

**מילות מפתח עיקריות:**
- דירות למכירה באילת
- דירות להשכרה באילת
- משרד תיווך אילת
- נדל״ן אילת
- קי האוס אילת
- רותם קהלון

**מילות מפתח משניות:**
- דירות יד 2 אילת
- דירות מקבלן אילת
- השקעה בנדל״ן אילת
- ניהול נכסים אילת
- הערכת שווי דירה אילת

---

## 🆘 פתרון בעיות נפוצות

### בעיה: האתר לא מופיע בגוגל אחרי שבועיים
**פתרון:**
1. בדוק ש-Google Search Console מחובר
2. בדוק שה-Sitemap הוגש
3. בדוק ב-robots.txt שאין חסימה
4. בדוק שיש תוכן איכותי בעמודים

### בעיה: Rich Snippets לא מופיעים
**פתרון:**
1. בדוק ב-Rich Results Test
2. תקן שגיאות ב-Schema.org
3. המתן 2-4 שבועות לאינדוקס מחדש

### בעיה: הציון ב-PageSpeed נמוך
**פתרון:**
1. דחוס תמונות (השתמש ב-webp)
2. בדוק שהתמונות לא גדולות מדי
3. next.config.js כבר מאופטמז - אבל אפשר לשפר עוד

---

## 📞 צריך עזרה?

אם יש שאלות או בעיות:
1. בדוק את התיעוד של Next.js SEO
2. עיין ב-Google Search Console Help
3. בדוק ב-Schema.org Documentation

**בהצלחה! 🚀**
האתר שלך מוכן לכבוש את גוגל!
