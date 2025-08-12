import { Timestamp } from 'firebase/firestore';

export interface Property {
  id: string;
  title: string;
  type: 'sale' | 'rent';
  price: number;
  address: string;
  city: string;
  rooms: number;
  floor: number;
  size: number;
  balcony: boolean;
  parking: boolean;
  elevator: boolean;
  description: string;
  images: string[];
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface PropertyFormData {
  title: string;
  type: 'sale' | 'rent';
  price: number;
  address: string;
  city: string;
  rooms: number;
  floor: number;
  size: number;
  balcony: boolean;
  parking: boolean;
  elevator: boolean;
  description: string;
  images: string[];
}

export interface User {
  uid: string;
  email: string;
  name: string;
} 