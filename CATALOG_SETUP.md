# Property Catalog System Setup Guide

## Overview
This is a complete property catalog system for a luxury real estate website in Hebrew, built with Next.js, Firebase, and Tailwind CSS.

## Features
- **Property Listing**: Browse all properties with filters and search
- **Property Details**: Detailed view of individual properties with image gallery
- **Admin Management**: Secure admin panel for property owners
- **Authentication**: Firebase Auth with user validation
- **Responsive Design**: Mobile-friendly Hebrew RTL interface

## Prerequisites
- Node.js 16+ and npm
- Firebase project with Firestore and Authentication enabled

## Installation

### 1. Install Dependencies
```bash
npm install firebase @radix-ui/react-dialog @radix-ui/react-select @radix-ui/react-toast class-variance-authority clsx tailwind-merge lucide-react
```

### 2. Firebase Configuration
Create a `.env.local` file in the root directory with your Firebase configuration:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### 3. Firebase Setup

#### Enable Authentication
1. Go to Firebase Console > Authentication
2. Enable Email/Password authentication
3. Create admin users manually or through the console

#### Firestore Database
1. Go to Firebase Console > Firestore Database
2. Create a database in production mode
3. Set up security rules (see below)

#### Create Users Collection
Create a `users` collection in Firestore with documents containing:
```json
{
  "uid": "firebase_auth_uid",
  "email": "admin@example.com",
  "name": "Admin Name"
}
```

### 4. Firestore Security Rules
Set up these security rules in Firestore:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Properties collection - readable by all, writable by authenticated users
    match /properties/{propertyId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    // Users collection - readable/writable by authenticated users
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## Usage

### Public Pages
- `/catalog` - Browse all properties
- `/catalog/[id]` - View individual property details

### Admin Pages (Authentication Required)
- `/catalog/manage` - Admin dashboard
- `/catalog/manage/add` - Add new property
- `/catalog/manage/edit/[id]` - Edit existing property

### Adding Properties
1. Navigate to `/catalog/manage`
2. Login with admin credentials
3. Click "הוסף נכס חדש" (Add New Property)
4. Fill out the form with property details
5. Add image URLs (you can use external image hosting services)
6. Submit the form

## Data Structure

### Property Schema
```typescript
interface Property {
  id: string;                    // Auto-generated Firestore ID
  title: string;                 // Property title
  type: 'sale' | 'rent';         // Property type
  price: number;                 // Price in NIS
  address: string;               // Street address
  city: string;                  // City name
  rooms: number;                 // Number of rooms
  floor: number;                 // Floor number
  size: number;                  // Size in square meters
  balcony: boolean;              // Has balcony
  parking: boolean;              // Has parking
  elevator: boolean;             // Has elevator
  description: string;           // Property description
  images: string[];              // Array of image URLs
  createdAt: Timestamp;          // Creation timestamp
  updatedAt: Timestamp;          // Last update timestamp
}
```

### User Schema
```typescript
interface User {
  uid: string;                   // Firebase Auth UID
  email: string;                 // User email
  name: string;                  // User display name
}
```

## Features

### Property Listing (`/catalog`)
- Search by title, address, or city
- Filter by property type (sale/rent)
- Filter by city
- Filter by price range
- Sort by price or date
- Responsive grid layout
- Property cards with key information

### Property Details (`/catalog/[id]`)
- Image gallery with navigation
- Complete property information
- Amenities checklist
- Contact buttons
- Responsive layout

### Admin Management (`/catalog/manage`)
- Secure authentication
- Property listing with actions
- Add new properties
- Edit existing properties
- Delete properties
- User-friendly forms

## Styling
The system uses:
- **Tailwind CSS** for styling
- **Radix UI** components for accessibility
- **Hebrew RTL** layout support
- **Luxury design** with clean typography and spacing
- **Responsive design** for all screen sizes

## Security
- Firebase Authentication for admin access
- Firestore security rules
- User validation against users collection
- Protected admin routes

## Troubleshooting

### Common Issues
1. **Firebase not initialized**: Check environment variables
2. **Authentication errors**: Verify user exists in users collection
3. **Permission denied**: Check Firestore security rules
4. **Images not loading**: Verify image URLs are accessible

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

## Support
For issues or questions, check the Firebase documentation or contact the development team. 