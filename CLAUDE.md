# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a Next.js 13 real estate website for Keyhouse, a luxury real estate agency in Eilat, Israel. The site features property catalog management with Firebase backend, bilingual support (Hebrew RTL primary), and modern UI components with **premium luxury design standards**.

## Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server

## Architecture & Key Components

### Tech Stack
- **Framework**: Next.js 13 (Pages Router)
- **Styling**: Tailwind CSS with custom luxury theme
- **UI Components**: Custom premium components with Framer Motion animations
- **Database**: Firebase Firestore
- **Authentication**: Firebase Auth with Google provider
- **Fonts**: Rubik (Hebrew + Latin support), font-serif for headings
- **Theme**: Luxury light theme with sophisticated brand colors
- **Animations**: Framer Motion for premium interactions

### Project Structure
- `pages/` - Next.js pages with property catalog, management, and business pages
- `components/` - Reusable luxury UI components organized by feature:
  - `ui/` - Premium design system components
  - `home/` - Homepage luxury components (testimonials carousel, etc.)
  - `about/` - About page premium components  
  - `common/` - Shared luxury components across pages
- `types/property.ts` - Property and user type definitions
- `lib/firebase.ts` - Firebase configuration and exports
- `config.ts` - Business contact information and constants

### Key Features
- **Property Management**: Full CRUD operations in `/catalog/manage/`
- **Property Catalog**: Public listing with filtering at `/catalog`
- **Firebase Integration**: Firestore for data, Auth for admin access
- **RTL Support**: Hebrew-first design with `dir="rtl"` layout
- **Premium Responsive Design**: Luxury mobile-first approach with sophisticated breakpoints
- **Luxury Animations**: Smooth Framer Motion interactions throughout

### **IMPORTANT: Page Layout Pattern**
**DO NOT manually add Header, Footer, or FloatingWhatsAppButton to individual page files.**
These components are already included globally in `pages/_app.tsx` and are automatically wrapped around all pages.

When creating a new page, simply export the page content without these wrapper components:
```jsx
// ✅ CORRECT - No Header/Footer/FloatingWhatsAppButton
export default function MyPage() {
  return (
    <>
      <Head>
        <title>Page Title</title>
      </Head>

      {/* Page content here */}
    </>
  )
}

// ❌ WRONG - Don't add these (they're already in _app.tsx)
export default function MyPage() {
  return (
    <>
      <Header /> {/* ❌ Don't add */}
      <Head>...</Head>
      {/* Page content */}
      <Footer /> {/* ❌ Don't add */}
      <FloatingWhatsAppButton /> {/* ❌ Don't add */}
    </>
  )
}
```

## 🎨 **LUXURY DESIGN SYSTEM & UI/UX GUIDELINES**

### **Brand Colors (Critical - Use Exactly)**
```css
/* PRIMARY COLORS - Updated from actual implementation */
Primary Navy: rgba(25,39,74,0.97) /* #192746 with 97% opacity */
Primary Gold: #c79d2a /* Updated gold from actual implementation */
Secondary Navy: #1a2756, #2d4a8e /* For gradients */

/* TEXT COLORS */
Text Primary: rgba(25,39,74,0.97) /* 97% opacity navy */
Text Secondary: rgba(25,39,74,0.85) /* 85% opacity navy */
Text Muted: rgba(25,39,74,0.6) /* 60% opacity navy */

/* BACKGROUND VARIANTS */
Background Variants:
  - Pure white: #ffffff
  - Light tints: #fafafa, #f8f9ff
  - Subtle gold tint: rgba(199,157,42,0.02-0.05)
  - Light gradient: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, #fafafa 50%, rgba(241,194,59,0.03) 100%)"
  - Dark gradient: "linear-gradient(135deg, rgba(25,39,74,0.97) 0%, #1a2756 35%, #2d4a8e 65%, rgba(35,52,94,0.95) 100%)"
```

### **Typography Hierarchy (Strict Standards - Updated)**
```css
/* HEADING SIZES - From actual implementation */
Hero Headings: text-5xl md:text-6xl lg:text-7xl font-serif font-extrabold
Section Headings: text-5xl lg:text-6xl font-serif font-bold (main sections)
Profile Names: text-5xl lg:text-6xl font-serif font-bold (team member names)
Subsection Headings: text-3xl md:text-4xl font-serif font-bold
Card Titles: text-2xl font-bold
Body Text Large: text-xl leading-relaxed (introductory paragraphs)
Body Text Standard: text-lg leading-relaxed (main content)
Small Text: text-base

/* FONT RULES - Critical */
- Always use font-serif for ALL headings and titles
- Body text uses default Rubik font (never specify, let default handle it)
- line-height: leading-relaxed (1.6) for all body text
- Hebrew text requires RTL support and proper Unicode handling
- All text should have proper contrast: rgba(25,39,74,0.97) for primary text

/* TEXT SHADOWS AND EFFECTS */
- Hero text (on dark backgrounds): textShadow: "0 4px 20px rgba(0,0,0,0.3), 0 2px 10px rgba(199,157,42,0.2)"
- Regular headings: Optional subtle shadow for depth
- Navigation text: textShadow varies based on header state (scrolled vs top)
```

## **REUSABLE COMPONENTS (Use These!)**

### **Available Luxury Components**
```jsx
// Use these components instead of recreating patterns:
import LuxuryCard from "@/components/ui/luxury-card"
import LuxuryBackground from "@/components/ui/luxury-background"
import ProfileSection from "@/components/ui/profile-section"
import SectionHeader from "@/components/ui/section-header"
import LuxuryButton from "@/components/ui/luxury-button"
import QuoteCard from "@/components/ui/quote-card"

// Service section children components (for service pages like buying, selling, property-management):
import {
  ChecklistContent,
  NumberedStepsCard,
  FeatureGrid,
  HighlightCards
} from "@/components/common/service-section-children"
```

### **LuxuryCard Component** - **ALWAYS USE THIS**
```jsx
// Standard luxury card - replaces manual card creation
<LuxuryCard className="p-8">
  {/* Your content */}
</LuxuryCard>

// With custom styling
<LuxuryCard
  hoverable={true}
  glowColor="rgba(199,157,42,0.15)"
  borderColor="rgba(25,39,74,0.1)"
>
  {/* Content automatically gets proper spacing and effects */}
</LuxuryCard>
```

### **LuxuryBackground Component** - **ALWAYS USE THIS**
```jsx
// Light background sections
<LuxuryBackground variant="light" className="py-24">
  {/* Content - automatically gets proper background gradients */}
</LuxuryBackground>

// Dark hero sections
<LuxuryBackground variant="hero" className="flex min-h-[50vh] items-center justify-center pt-20">
  {/* Hero content with proper dark background and bottom fade */}
</LuxuryBackground>
```

### **SectionHeader Component** - **ALWAYS USE THIS**
```jsx
// Standard section headers
<SectionHeader
  title="הערכים שלנו"
  subtitle="Long descriptive subtitle here..."
  className="mb-20"
/>

// Different alignments and sizes
<SectionHeader
  title="About Us"
  alignment="left"
  titleSize="medium"
  showAccentLine={true}
/>
```

### **ProfileSection Component** - **For Team/Person Profiles**
```jsx
<ProfileSection
  name="רותם קהלון"
  title="בעלת המשרד"
  imageSrc="/images/rotem5.jpg"
  imageAlt="רותם קהלון - בעלת המשרד"
  reverse={false} // true for alternating layouts
  quote={<QuoteCard>"Quote text here"</QuoteCard>}
>
  <p>Biography content...</p>
  <p>More content...</p>
</ProfileSection>
```

### **Service Section Children Components** - **For Service Pages**
```jsx
// 1. ChecklistContent - For simple bulleted lists with checkmarks
<ChecklistContent
  items={[
    { text: "בדיקת היסטוריית הנכס ומצבו המשפטי" },
    { text: "ליווי בהליך המשפטי והפיננסי" },
    { text: "תיאום מועדי צפייה" }
  ]}
/>

// 2. NumberedStepsCard - For numbered steps in a light card
<NumberedStepsCard
  title="איך אנחנו עובדים?"
  steps={[
    { text: "בדיקות תקופתיות של מצב הנכס" },
    { text: "תחזוקה מונעת למניעת נזקים עתידיים" },
    { text: "טיפול מהיר בתקלות ובעיות" }
  ]}
/>

// 3. FeatureGrid - For feature cards in grid layout
<FeatureGrid
  columns={2} // or 3, 4
  features={[
    {
      title: "דו״חות חודשיים",
      description: "דו״חות מפורטים על הכנסות, הוצאות ופעילות בנכס."
    },
    {
      title: "עדכונים שוטפים",
      description: "עדכונים על כל אירוע משמעותי הקשור לנכס."
    }
  ]}
/>

// 4. HighlightCards - For emphasized content cards
// Available variants: "dark", "gold", "light", "accent"
<HighlightCards
  cards={[
    {
      variant: "dark",  // Navy gradient with white text
      title: "חיסכון בזמן ובכסף",
      content: "אנחנו חוסכים לך את הזמן והמאמץ הכרוכים בניהול נכס..."
    },
    {
      variant: "light",  // White/light gradient with gold border (recommended alternative to gold)
      title: "שקט נפשי מלא",
      content: "אנחנו דואגים לכל הפרטים הקטנים..."
    },
    {
      variant: "accent",  // Subtle gold tint gradient (recommended alternative to gold)
      title: "שירות מקצועי",
      content: "הצוות המנוסה שלנו מבטיח טיפול מקצועי..."
    }
  ]}
/>
```

**HighlightCards Variant Guidelines:**
- **"dark"**: Navy gradient with white text - Use for primary/important messages
- **"gold"**: Full gold gradient - Use sparingly (currently not recommended)
- **"light"**: White/light gradient with gold border - **RECOMMENDED** for secondary emphasis
- **"accent"**: Subtle gold tint gradient - **RECOMMENDED** for tertiary emphasis

### **Luxury Card Design Patterns (DEPRECATED - Use LuxuryCard Component)**
**⚠️ DO NOT manually create cards - use the LuxuryCard component above**

### **Animation Standards (Framer Motion)**
```jsx
// Standard reveal animation
initial={{ opacity: 0, y: 30-40 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.8, ease: "easeOut" }}

// Staggered children
containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1-0.2 }
  }
}

// Hover effects
group-hover:scale-[1.02]
group-hover:shadow-2xl-3xl
transition-all duration-300-500
```

### **Section Layout Patterns (Standard)**

#### **Hero Sections:**
```jsx
<section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden pt-20"
         style={{ background: "linear-gradient(135deg, #23214a 0%, #2d2b5a 50%, #23214a 100%)" }}>
  {/* Content with large serif headings */}
  {/* Bottom gradient fade to white */}
</section>
```

#### **Content Sections:**
```jsx
<section className="relative py-24-32 overflow-hidden"
         style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, #fafafa 50%, rgba(241,194,59,0.03) 100%)" }}>
  <div className="container mx-auto px-6 relative z-10">
    {/* Section header with title + subtitle + accent line */}
    {/* Main content with proper spacing */}
  </div>
</section>
```

### **Responsive Image Patterns (Large Profile Images)**
```jsx
<div className="relative group">
  <div className="relative overflow-hidden rounded-3xl shadow-2xl">
    {/* Glow effect */}
    <div className="relative bg-white p-4 rounded-3xl">
      <img className="w-full h-[600px] lg:h-[700px] object-cover rounded-2xl transition-all duration-500 group-hover:scale-[1.02]"
           style={{ boxShadow: "0 20px 50px rgba(35,33,74,0.15), inset 0 1px 0 rgba(255,255,255,0.6)" }} />
      {/* Overlay gradient on hover */}
    </div>
  </div>
</div>
```

### **Icon Design Standards**
```jsx
// Icon containers
<div className="flex h-20 w-20 items-center justify-center rounded-2xl shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
     style={{ 
       background: "linear-gradient(135deg, rgba(241,194,59,0.1) 0%, rgba(255,255,255,0.9) 100%)",
       border: "2px solid rgba(241,194,59,0.3)",
       boxShadow: "0 8px 25px rgba(241,194,59,0.2)"
     }}>
  <Icon className="h-10 w-10" style={{ color: "#23214a" }} />
</div>
```

### **Quote/Testimonial Design Standards**
```jsx
// Testimonial cards
<div className="bg-gradient-to-l from-white via-gray-50 to-white p-8 rounded-2xl border-r-4 shadow-lg"
     style={{ borderColor: "#f1c23b", boxShadow: "0 10px 30px rgba(35,33,74,0.08)" }}>
  {/* Large quote marks with gold color */}
  {/* Italic text */}
  {/* Author attribution */}
</div>
```

### **LuxuryButton Component** - **ALWAYS USE THIS**
```jsx
// Primary button (default)
<LuxuryButton href="/contact">
  Call Now
</LuxuryButton>

// Different variants
<LuxuryButton variant="secondary" size="large" onClick={handleClick}>
  Learn More
</LuxuryButton>

// Admin style
<LuxuryButton variant="admin" href="/admin">
  <FaHome className="h-4 w-4" />
  Admin Panel
</LuxuryButton>
```

### **QuoteCard Component**
```jsx
// Standard quote (right-aligned border)
<QuoteCard>
  "Quote text here"
</QuoteCard>

// Left-aligned with author
<QuoteCard align="left" author="John Doe" position="CEO">
  "Quote text here"
</QuoteCard>

// Emphasized style with large quote marks
<QuoteCard variant="emphasized">
  "Important quote with visual emphasis"
</QuoteCard>
```

## **HEADER DESIGN STANDARDS**

### **Navigation Patterns (From Header Implementation)**
```jsx
// Header state management - critical for luxury feel
const [isScrolled, setIsScrolled] = useState(false)

// Header background transitions
background: isScrolled
  ? "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(248,249,255,0.95) 50%, rgba(255,255,255,0.98) 100%)"
  : "linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%)"

// Shadow progression
boxShadow: isScrolled
  ? "0 25px 50px rgba(25,39,74,0.12), 0 10px 25px rgba(25,39,74,0.08), inset 0 1px 0 rgba(255,255,255,0.6)"
  : "0 8px 32px rgba(0,0,0,0.3)"
```

### **Navigation Link Styling**
```jsx
// Each nav item gets glow effect and background
<div className="absolute -inset-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
     style={{
       background: "linear-gradient(135deg, rgba(199,157,42,0.1) 0%, rgba(25,39,74,0.05) 100%)",
       filter: "blur(15px)"
     }} />

// Active state styling
background: activeLink === link.href
  ? "linear-gradient(135deg, rgba(199,157,42,0.15) 0%, rgba(199,157,42,0.08) 100%)"
  : "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)"

// Text color based on scroll state
color: isScrolled
  ? (activeLink === link.href ? "#c79d2a" : "rgba(25,39,74,0.97)")
  : "#ffffff"
```

### **Logo Treatment**
```jsx
// Logo gets luxury frame and glow when scrolled
<div className="relative p-2 rounded-2xl transition-all duration-500 bg-gradient-to-br from-white/60 to-white/40"
     style={{
       boxShadow: "0 8px 25px rgba(25,39,74,0.1), inset 0 1px 0 rgba(255,255,255,0.6)"
     }}>
  <img className="h-12 transition-all duration-500" /* height adjusts on scroll */ />
</div>
```

### **Mobile Menu Patterns**
```jsx
// Full-screen luxury mobile menu
<motion.div
  className="absolute left-0 right-0 top-0 min-h-screen"
  style={{
    background: "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(248,249,255,0.95) 50%, rgba(255,255,255,0.98) 100%)",
    backdropFilter: "blur(30px)"
  }}
>
  {/* Staggered animation for menu items */}
</motion.div>
```

### **Carousel/Slider Standards**
- Use AnimatePresence with smooth slide transitions
- Cards must follow luxury card pattern above
- Auto-scroll: 5-second intervals
- Hover pause functionality
- Smooth spring animations
- Responsive: 1 card mobile, 2 tablet, 3 desktop
- Navigation arrows with hover effects

### **Spacing & Layout Standards**
```css
Section Padding: py-24 lg:py-32
Container Padding: px-6
Card Padding: p-8 lg:p-10-12
Element Spacing: space-y-6-8
Section Gaps: mb-16-32
Grid Gaps: gap-8-16
```


### **Content Layout Patterns**

#### **Profile/Bio Sections:**
- Large image (600-700px height) with white frame + glow
- 50-50 split on desktop, stacked on mobile  
- Alternating left/right layout for multiple profiles
- Quote sections with border accents
- Gold accent lines and decorative elements

#### **Values/Features Sections:**
- 3-column grid (responsive to 2 then 1)
- Icon + title + description format
- Luxury card styling with hover animations
- Closing statement in premium dark card

## **IMPLEMENTATION RULES (CRITICAL)**

### **MANDATORY REQUIREMENTS (From About Page Standards):**
1. **USE REUSABLE COMPONENTS** - Always import and use LuxuryCard, LuxuryBackground, SectionHeader, etc.
2. **Glow effects on hover** - Every interactive element must have proper glow
3. **Rounded-3xl corners** - All cards/sections use rounded-3xl (never smaller)
4. **Multi-layered shadows** - Complex shadow combinations with inset highlights
5. **Gold accent lines** - Section breaks and decorative elements use #c79d2a
6. **RTL support** - All Hebrew text and layouts must work right-to-left
7. **Framer Motion animations** - Staggered reveals, smooth transitions (0.8s duration)
8. **Glass morphism** - backdrop-blur-xl on overlays and cards

### **STRICTLY FORBIDDEN:**
- Creating manual cards instead of using LuxuryCard component
- Using sharp corners (always rounded-2xl minimum, prefer rounded-3xl)
- Single-layer shadows (always use complex multi-layer shadows)
- Static elements without hover states
- Colors outside the refined brand palette (must use rgba(25,39,74,0.97) and #c79d2a)
- Font sizes smaller than text-lg for body content
- Animations faster than 300ms (standard is 500-800ms)
- Layouts without proper spacing (py-24 minimum for sections)

### **QUALITY STANDARDS (From Header & About Page):**
- **Luxury feel**: Every interaction must feel premium and smooth
- **Consistent spacing**: py-24/py-32 for sections, p-8/p-10/p-12 for cards
- **Typography**: Always font-serif for headings, proper hierarchy
- **Color contrast**: rgba(25,39,74,0.97) for primary text, proper opacity levels
- **Mobile-first**: Mobile experience must be as luxurious as desktop
- **Performance**: Animations must be smooth, no jank or stuttering

### **COMPONENT USAGE PRIORITY:**
1. **FIRST** - Check if reusable component exists (LuxuryCard, LuxuryBackground, etc.)
2. **SECOND** - Follow established patterns from about page and header
3. **THIRD** - Create new components only if pattern doesn't exist
4. **NEVER** - Recreate existing patterns manually

### Firebase Schema
Properties use the `Property` interface from `types/property.ts` with:
- Basic info (title, type, category, price, address, city)
- Property details (rooms, floor, size, amenities)
- Optional features (balcony, parking, elevator, etc.)
- Firebase timestamps (createdAt, updatedAt)

### Development Notes
- All pages are wrapped with Header, Footer, and FloatingWhatsAppButton
- TypeScript strict mode is disabled in tsconfig.json
- Path aliases: `@/*` for root, `@/lib/*` for lib directory
- Environment variables required for Firebase configuration (NEXT_PUBLIC_FIREBASE_*)
- **CRITICAL**: All new components must follow the luxury design patterns above
- **CRITICAL**: When refactoring existing components, always upgrade to luxury standards
- **CRITICAL**: Maintain visual consistency across all pages and components

# **COMPLETE WEBSITE STYLING GUIDE**

This section provides comprehensive instructions for applying luxury design standards across all website pages.

## **WHEN TO APPLY LUXURY STYLING**

When the user asks you to "style all pages of the website like the homepage and about page" or similar requests, follow this complete guide to ensure consistent luxury design across the entire website.

## **REQUIRED LUXURY STANDARDS FOR ALL PAGES**

### **1. LAYOUT STRUCTURE**
```jsx
// Every page should follow this structure:
<LuxuryBackground variant="light" className="py-32">
  <div className="container mx-auto px-6 relative z-10">
    <SectionHeader
      title="Page Title"
      subtitle="Page subtitle"
      className="mb-20"
    />

    {/* Page content using luxury components */}

  </div>
</LuxuryBackground>
```

### **2. FORM STYLING STANDARDS**
```jsx
// Input fields
<input
  className="w-full rounded-2xl border px-6 py-4 text-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#c79d2a]/50"
  style={{
    borderColor: "rgba(25,39,74,0.15)",
    backgroundColor: "rgba(255,255,255,0.95)",
    color: "rgba(25,39,74,0.97)",
    boxShadow: "0 8px 20px rgba(25,39,74,0.08), inset 0 1px 0 rgba(255,255,255,0.6)"
  }}
/>

// Textarea
<textarea
  className="w-full rounded-2xl border px-6 py-4 text-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#c79d2a]/50 resize-none"
  style={{
    borderColor: "rgba(25,39,74,0.15)",
    backgroundColor: "rgba(255,255,255,0.95)",
    color: "rgba(25,39,74,0.97)",
    boxShadow: "0 8px 20px rgba(25,39,74,0.08), inset 0 1px 0 rgba(255,255,255,0.6)"
  }}
/>

// Form containers
<LuxuryCard className="p-8 lg:p-12">
  {/* Form content */}
</LuxuryCard>
```

### **3. BUTTON STYLING STANDARDS**
```jsx
// Always use LuxuryButton component
<LuxuryButton href="/link">Button Text</LuxuryButton>
<LuxuryButton variant="secondary">Secondary Button</LuxuryButton>
<LuxuryButton size="large">Large Button</LuxuryButton>
```

### **4. LIST AND CONTENT STYLING**
```jsx
// Property/item grids
<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
  {items.map((item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      <LuxuryCard hoverable={true}>
        {/* Item content */}
      </LuxuryCard>
    </motion.div>
  ))}
</div>

// Feature lists
<div className="space-y-6">
  {features.map((feature, index) => (
    <div key={index} className="flex items-start gap-4">
      <div className="flex h-8 w-8 items-center justify-center rounded-full mt-1"
           style={{
             background: "linear-gradient(135deg, rgba(199,157,42,0.1) 0%, rgba(255,255,255,0.9) 100%)",
             border: "2px solid rgba(199,157,42,0.3)"
           }}>
        <Icon className="h-4 w-4" style={{ color: "rgba(25,39,74,0.97)" }} />
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2" style={{ color: "rgba(25,39,74,0.97)" }}>
          {feature.title}
        </h3>
        <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
          {feature.description}
        </p>
      </div>
    </div>
  ))}
</div>
```

### **5. NAVIGATION AND BREADCRUMBS**
```jsx
// Breadcrumb styling
<nav className="mb-8">
  <div className="flex items-center gap-2 text-lg">
    <Link href="/" className="transition-colors duration-300 hover:text-[#c79d2a]"
          style={{ color: "rgba(25,39,74,0.6)" }}>
      דף הבית
    </Link>
    <span style={{ color: "rgba(25,39,74,0.4)" }}>/</span>
    <span style={{ color: "rgba(25,39,74,0.97)" }}>עמוד נוכחי</span>
  </div>
</nav>

// Pagination
<div className="flex justify-center gap-3 mt-12">
  {pages.map((page, index) => (
    <button
      key={index}
      className={`w-12 h-12 rounded-full transition-all duration-300 ${
        page.active ? 'scale-110' : 'hover:scale-105'
      }`}
      style={{
        background: page.active
          ? "linear-gradient(135deg, #c79d2a 0%, rgba(199,157,42,0.8) 100%)"
          : "rgba(255,255,255,0.95)",
        color: page.active ? "rgba(25,39,74,0.97)" : "rgba(25,39,74,0.7)",
        boxShadow: page.active
          ? "0 8px 20px rgba(199,157,42,0.4), inset 0 1px 0 rgba(255,255,255,0.6)"
          : "0 4px 12px rgba(25,39,74,0.1), inset 0 1px 0 rgba(255,255,255,0.6)",
        border: "1px solid rgba(25,39,74,0.1)"
      }}
    >
      {page.number}
    </button>
  ))}
</div>
```

### **6. IMAGE AND MEDIA STYLING**
```jsx
// Hero images
<div className="relative group">
  <div className="relative overflow-hidden rounded-3xl shadow-2xl">
    <div className="relative bg-white p-4 rounded-3xl">
      <img
        src="/image.jpg"
        alt="Description"
        className="w-full h-[400px] lg:h-[600px] object-cover rounded-2xl transition-all duration-500 group-hover:scale-[1.02]"
        style={{
          boxShadow: "0 20px 50px rgba(25,39,74,0.15), inset 0 1px 0 rgba(255,255,255,0.6)"
        }}
      />
    </div>
    {/* Decorative elements */}
    <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"
         style={{ background: "linear-gradient(135deg, #c79d2a 0%, rgba(199,157,42,0.8) 100%)" }} />
  </div>
</div>

// Gallery images
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  {images.map((image, index) => (
    <div key={index} className="group relative">
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
  ))}
</div>
```

### **7. ERROR AND SUCCESS STATES**
```jsx
// Success message
<div className="p-6 rounded-2xl border-r-4"
     style={{
       backgroundColor: "rgba(34, 197, 94, 0.05)",
       borderColor: "#22c55e",
       boxShadow: "0 8px 20px rgba(34, 197, 94, 0.1)"
     }}>
  <p className="text-lg font-medium" style={{ color: "rgba(25,39,74,0.97)" }}>
    Success message here
  </p>
</div>

// Error message
<div className="p-6 rounded-2xl border-r-4"
     style={{
       backgroundColor: "rgba(239, 68, 68, 0.05)",
       borderColor: "#ef4444",
       boxShadow: "0 8px 20px rgba(239, 68, 68, 0.1)"
     }}>
  <p className="text-lg font-medium" style={{ color: "rgba(25,39,74,0.97)" }}>
    Error message here
  </p>
</div>
```

### **8. LOADING AND SKELETON STATES**
```jsx
// Loading spinner
<div className="flex justify-center items-center py-12">
  <div className="w-12 h-12 rounded-full border-4 border-transparent animate-spin"
       style={{
         borderTopColor: "#c79d2a",
         borderRightColor: "rgba(199,157,42,0.3)"
       }} />
</div>

// Skeleton content
<div className="space-y-4 animate-pulse">
  <div className="h-6 rounded-full" style={{ backgroundColor: "rgba(25,39,74,0.1)" }} />
  <div className="h-4 rounded-full w-3/4" style={{ backgroundColor: "rgba(25,39,74,0.08)" }} />
  <div className="h-4 rounded-full w-1/2" style={{ backgroundColor: "rgba(25,39,74,0.06)" }} />
</div>
```

## **PAGE-SPECIFIC IMPLEMENTATIONS**

### **Contact Page Enhancements**
- Use LuxuryCard for contact form
- Style input fields with luxury standards
- Add luxury styling to contact information cards
- Use proper grid layout with LuxuryBackground

### **Catalog/Property Pages**
- Use LuxuryCard for property cards
- Implement luxury filters with proper styling
- Add luxury pagination
- Use SectionHeader for page titles

### **Service Pages (Buying/Selling/Management)**
- Use LuxuryBackground with hero variant for top sections
- LuxuryCard for service feature blocks
- ProfileSection for team introductions
- Proper luxury button styling for CTAs

### **Error Pages (404, etc.)**
- LuxuryBackground with centered content
- Large, friendly error messages with proper typography
- Luxury buttons for navigation back

## **IMPLEMENTATION CHECKLIST**

When styling any page, ensure:

1. ✅ **LuxuryBackground** replaces any custom section backgrounds
2. ✅ **SectionHeader** replaces manual header structures
3. ✅ **LuxuryCard** replaces any div with background/shadow styling
4. ✅ **LuxuryButton** replaces all button/link elements
5. ✅ **Brand colors** are used consistently (rgba(25,39,74,0.97) and #c79d2a)
6. ✅ **Typography hierarchy** follows font-serif for headings, proper sizes
7. ✅ **Spacing standards** use py-24/py-32 for sections, proper gaps
8. ✅ **Multi-layered shadows** replace simple shadow utilities
9. ✅ **Hover animations** are smooth with proper transitions
10. ✅ **RTL support** is maintained for Hebrew text

## **QUICK CONVERSION GUIDE**

**Replace this:**
```jsx
<section className="py-20 bg-gray-50">
  <div className="container">
    <h2>Title</h2>
    <p>Subtitle</p>
    <div className="bg-white rounded p-6 shadow">Content</div>
  </div>
</section>
```

**With this:**
```jsx
<LuxuryBackground variant="light" className="py-32">
  <div className="container mx-auto px-6 relative z-10">
    <SectionHeader title="Title" subtitle="Subtitle" className="mb-20" />
    <LuxuryCard>Content</LuxuryCard>
  </div>
</LuxuryBackground>
```

This comprehensive guide ensures every page maintains the luxury design standards established in the homepage and about page.