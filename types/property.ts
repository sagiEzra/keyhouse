import { Timestamp } from 'firebase/firestore';

export interface Property {
  id: string;
  title: string;
  type: 'sale' | 'rent';
  category: 'all' | 'apartment' | 'house' | 'penthouse' | 'garden';
  price: number;
  address: string;
  city: string;
  rooms: number;
  floor: number;
  size: number;
  balcony: boolean;
  parking: boolean;
  elevator: boolean;
  storage?: boolean;
  accessibility?: boolean;
  renovated?: boolean;
  furnished?: boolean;
  airConditioned?: boolean;
  secure?: boolean;
  immediate?: boolean;
  description: string;
  images: string[];
  createdAt: Timestamp;
  updatedAt: Timestamp;
  
  // Additional fields used in property details
  isNew?: boolean;
  isDeal?: boolean;
  isDiscounted?: boolean;
  propertyType?: string;
  mamad?: boolean;
  nof?: boolean;
  nofLayam?: boolean;
  masterRoom?: boolean;
  closetRoom?: boolean;
  balconySize?: number;
  contactPhone?: string;
  contactEmail?: string;
}

export interface PropertyFormData {
  title: string;
  type: 'sale' | 'rent';
  category: 'apartment' | 'house' | 'penthouse' | 'garden';
  price: number;
  address: string;
  city: string;
  rooms: number;
  floor: number;
  size: number;
  balcony: boolean;
  parking: boolean;
  elevator: boolean;
  storage?: boolean;
  accessibility?: boolean;
  renovated?: boolean;
  furnished?: boolean;
  airConditioned?: boolean;
  secure?: boolean;
  immediate?: boolean;
  description: string;
  images: string[];
  
  // Additional fields
  isNew?: boolean;
  isDeal?: boolean;
  isDiscounted?: boolean;
  propertyType?: string;
  mamad?: boolean;
  nof?: boolean;
  nofLayam?: boolean;
  masterRoom?: boolean;
  closetRoom?: boolean;
  balconySize?: number;
  contactPhone?: string;
  contactEmail?: string;
}

export interface User {
  uid: string;
  email: string;
  name: string;
} 