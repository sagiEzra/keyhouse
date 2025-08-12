import { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy, where } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Property } from '../types/property';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Badge } from '../components/ui/badge';
import { FaSearch, FaFilter, FaMapMarkerAlt, FaBed, FaRulerCombined, FaCar, FaHome } from 'react-icons/fa';
import Link from 'next/link';

export default function CatalogPage() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedCity, setSelectedCity] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('date');

  useEffect(() => {
    fetchProperties();
  }, []);

  useEffect(() => {
    filterProperties();
  }, [properties, searchTerm, selectedType, selectedCity, priceRange, sortBy]);

  const fetchProperties = async () => {
    try {
      const propertiesRef = collection(db, 'properties');
      const q = query(propertiesRef, orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const propertiesData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Property[];
      setProperties(propertiesData);
    } catch (error) {
      console.error('Error fetching properties:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterProperties = () => {
    let filtered = [...properties];

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(property =>
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.city.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Type filter
    if (selectedType !== 'all') {
      filtered = filtered.filter(property => property.type === selectedType);
    }

    // City filter
    if (selectedCity !== 'all') {
      filtered = filtered.filter(property => property.city === selectedCity);
    }

    // Price range filter
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      filtered = filtered.filter(property => {
        if (max) {
          return property.price >= min && property.price <= max;
        } else {
          return property.price >= min;
        }
      });
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'date':
          return b.createdAt.toMillis() - a.createdAt.toMillis();
        default:
          return 0;
      }
    });

    setFilteredProperties(filtered);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('he-IL').format(price);
  };

  const getCities = () => {
    const cityArr = properties.map(p => p.city);
    const uniqueCities: string[] = [];
    for (let i = 0; i < cityArr.length; i++) {
      if (!uniqueCities.includes(cityArr[i])) {
        uniqueCities.push(cityArr[i]);
      }
    }
    return uniqueCities.sort();
  };

  if (loading) {
    return (
      <div dir="rtl" className="min-h-screen bg-white p-8 pt-20">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-80 bg-gray-200 rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div dir="rtl" className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              קטלוג הנכסים שלנו
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              גלה את הנכס המושלם עבורך - דירות למכירה ולהשכרה באילת ובסביבתה
            </p>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search */}
            <div className="relative">
              <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="חיפוש נכסים..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-10"
              />
            </div>

            {/* Type Filter */}
            <Select dir="rtl" value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger>
                <SelectValue placeholder="סוג נכס" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">כל הנכסים</SelectItem>
                <SelectItem value="sale">למכירה</SelectItem>
                <SelectItem value="rent">להשכרה</SelectItem>
              </SelectContent>
            </Select>

            {/* City Filter */}
            <Select dir="rtl" value={selectedCity} onValueChange={setSelectedCity}>
              <SelectTrigger>
                <SelectValue placeholder="עיר" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">כל הערים</SelectItem>
                {getCities().map(city => (
                  <SelectItem key={city} value={city}>{city}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Price Range */}
            <Select dir="rtl" value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger>
                <SelectValue placeholder="טווח מחירים" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">כל המחירים</SelectItem>
                <SelectItem value="0-500000">עד 500,000 ₪</SelectItem>
                <SelectItem value="500000-1000000">500,000 - 1,000,000 ₪</SelectItem>
                <SelectItem value="1000000-2000000">1,000,000 - 2,000,000 ₪</SelectItem>
                <SelectItem value="2000000-">מעל 2,000,000 ₪</SelectItem>
              </SelectContent>
            </Select>

            {/* Sort */}
            <Select dir="rtl" value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="מיון" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date">חדש ביותר</SelectItem>
                <SelectItem value="price-asc">מחיר: נמוך לגבוה</SelectItem>
                <SelectItem value="price-desc">מחיר: גבוה לנמוך</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredProperties.length === 0 ? (
          <div className="text-center py-12">
            <FaHome className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">לא נמצאו נכסים</h3>
            <p className="mt-1 text-sm text-gray-500">
              נסה לשנות את הפילטרים שלך או לחזור מאוחר יותר
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <p className="text-gray-600">
                נמצאו {filteredProperties.length} נכסים
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties.map((property) => (
                <Link key={property.id} href={`/catalog/${property.id}`}>
                  <Card className="group hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                    <div className="relative">
                      <img
                        src={property.images[0] || '/images/image2.jpg'}
                        alt={property.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <Badge 
                        className={`absolute top-3 right-3 ${
                          property.type === 'sale' 
                            ? 'bg-green-500 hover:bg-green-600' 
                            : 'bg-blue-500 hover:bg-blue-600'
                        }`}
                      >
                        {property.type === 'sale' ? 'למכירה' : 'להשכרה'}
                      </Badge>
                    </div>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {property.title}
                      </CardTitle>
                      <div className="flex items-center text-gray-600 text-sm">
                        <FaMapMarkerAlt className="h-4 w-4 ml-1" />
                        {property.address}, {property.city}
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-2xl font-bold text-gray-900">
                          ₪{formatPrice(property.price)}
                        </div>
                        <div className="text-sm text-gray-500">
                          {property.type === 'rent' && 'לחודש'}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <FaBed className="h-4 w-4 ml-1" />
                          {property.rooms} חדרים
                        </div>
                        <div className="flex items-center">
                          <FaRulerCombined className="h-4 w-4 ml-1" />
                          {property.size} מ"ר
                        </div>
                        <div className="flex items-center">
                          <FaHome className="h-4 w-4 ml-1" />
                          קומה {property.floor}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-4">
                        {property.balcony && (
                          <Badge variant="outline" className="text-xs">מרפסת</Badge>
                        )}
                        {property.parking && (
                          <Badge variant="outline" className="text-xs">חניה</Badge>
                        )}
                        {property.elevator && (
                          <Badge variant="outline" className="text-xs">מעלית</Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
