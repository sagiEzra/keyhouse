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

## 🎨 **LUXURY DESIGN SYSTEM & UI/UX GUIDELINES**

### **Brand Colors (Critical - Use Exactly)**
```css
Primary Navy: #23214a
Primary Gold: #f1c23b
Text Primary: #23214a (80-100% opacity)
Text Secondary: #23214a (60-80% opacity)
Background Variants: 
  - Pure white: #ffffff
  - Light tint: #fafafa, #f8f9ff
  - Subtle gold tint: rgba(241,194,59,0.02-0.05)
```

### **Typography Hierarchy (Strict Standards)**
```css
Hero Headings: text-5xl md:text-6xl lg:text-7xl font-serif font-extrabold
Section Headings: text-4xl md:text-5xl lg:text-6xl font-serif font-bold  
Subsection Headings: text-3xl md:text-4xl font-serif font-bold
Card Titles: text-xl lg:text-2xl font-bold
Body Text Large: text-lg lg:text-xl leading-relaxed
Body Text Standard: text-base lg:text-lg leading-relaxed
Small Text: text-sm lg:text-base

Font Rules:
- Always use font-serif for ALL headings
- Body text uses default Rubik font
- line-height: leading-relaxed (1.6) minimum for readability
- Hebrew text requires RTL support
```

### **Luxury Card Design Patterns (Standard)**
Every card/section must follow this exact structure:

```jsx
<div className="group relative">
  {/* Outer glow effect - REQUIRED */}
  <div className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500-700 pointer-events-none"
       style={{
         background: "linear-gradient(135deg, rgba(241,194,59,0.15-0.2) 0%, rgba(35,33,74,0.08-0.1) 100%)",
         filter: "blur(20px)",
         zIndex: -1
       }} />
  
  {/* Main card - REQUIRED STYLING */}
  <div className="relative bg-gradient-to-br from-white via-white to-gray-50/30 rounded-3xl p-8 lg:p-10-12 shadow-xl border backdrop-blur-xl transition-all duration-300-500"
       style={{
         borderColor: "rgba(35,33,74,0.1-0.15)",
         boxShadow: "0 20px-30px 40px-60px rgba(35,33,74,0.08), 0 8px-15px 20px-35px rgba(35,33,74,0.05), inset 0 1px 0 rgba(255,255,255,0.6)"
       }}>
    
    {/* Content with proper spacing */}
    
    {/* Bottom accent - REQUIRED */}
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 rounded-full opacity-30 group-hover:opacity-60-80 group-hover:w-20 transition-all duration-500"
         style={{ backgroundColor: "#f1c23b" }} />
  </div>
</div>
```

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
  {/* Multi-layered background orbs */}
  {/* Content with large serif headings */}
  {/* Bottom gradient fade to white */}
</section>
```

#### **Content Sections:**
```jsx
<section className="relative py-24-32 overflow-hidden"
         style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, #fafafa 50%, rgba(241,194,59,0.03) 100%)" }}>
  {/* Subtle background decoration orbs */}
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
    {/* Decorative accent orbs */}
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

### **Button & Interactive Element Standards**
```jsx
// Luxury buttons
className="rounded-full px-6-8 py-3-4 font-medium transition-all duration-300 hover:scale-105 shadow-lg"
style={{ 
  background: "linear-gradient(135deg, #23214a 0%, #2d2b5a 100%)",
  color: "white",
  boxShadow: "0 8px 25px rgba(35,33,74,0.3)"
}}

// Hover states
onMouseEnter/Leave for dynamic shadow changes
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

### **Background Decoration Standards**
Every section needs subtle background orbs:
```jsx
<div className="absolute inset-0 pointer-events-none">
  <div className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl opacity-4-5"
       style={{ background: "radial-gradient(circle, #23214a 0%, transparent 70%)" }} />
  <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full blur-3xl opacity-3-4"
       style={{ background: "radial-gradient(circle, #f1c23b 0%, transparent 70%)" }} />
</div>
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

## **Implementation Rules (CRITICAL)**

### **ALWAYS Include:**
1. Glow effects on hover for interactive elements
2. Rounded-3xl corners for all cards (never use smaller radius)
3. Multi-layered shadows with inset highlights
4. Gold accent lines/dots for section breaks
5. Proper RTL support for Hebrew text
6. Smooth Framer Motion animations (stagger reveals)
7. Glass morphism effects (backdrop-blur-xl)
8. Background decoration orbs (subtle, low opacity)

### **NEVER Use:**
- Sharp corners (always rounded-2xl minimum, prefer rounded-3xl)
- Single-layer shadows (always multi-layered)
- Static elements (everything should have hover states)
- Small font sizes without purpose
- Layouts without proper spacing/breathing room
- Colors outside the brand palette
- Animations shorter than 300ms

### **Quality Standards:**
- Every interactive element must have smooth hover transitions
- All sections must feel spacious and luxurious
- Typography hierarchy must be strictly followed
- Brand colors must be used exactly as specified
- Mobile experience must be as premium as desktop
- Loading states should be elegant and smooth

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