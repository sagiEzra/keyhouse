# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a Next.js 13 real estate website for Keyhouse, a luxury real estate agency in Eilat, Israel. The site features property catalog management with Firebase backend, bilingual support (Hebrew RTL primary), and modern UI components.

## Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server

## Architecture & Key Components

### Tech Stack
- **Framework**: Next.js 13 (Pages Router)
- **Styling**: Tailwind CSS with custom theme
- **UI Components**: Radix UI primitives with custom styling
- **Database**: Firebase Firestore
- **Authentication**: Firebase Auth with Google provider
- **Fonts**: Rubik (Hebrew + Latin support)
- **Theme**: Light theme with custom brand colors (brand-blue, brand-gold)

### Project Structure
- `pages/` - Next.js pages with property catalog, management, and business pages
- `components/` - Reusable UI components organized by feature:
  - `ui/` - Radix-based design system components
  - `home/` - Homepage-specific components
  - `about/` - About page components  
  - `common/` - Shared components across pages
- `types/property.ts` - Property and user type definitions
- `lib/firebase.ts` - Firebase configuration and exports
- `config.ts` - Business contact information and constants

### Key Features
- **Property Management**: Full CRUD operations in `/catalog/manage/`
- **Property Catalog**: Public listing with filtering at `/catalog`
- **Firebase Integration**: Firestore for data, Auth for admin access
- **RTL Support**: Hebrew-first design with `dir="rtl"` layout
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

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