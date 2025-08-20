import { useState, useEffect, useCallback } from 'react';
import { collection, getDocs, query, orderBy, where } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Property } from '../types/property';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Badge } from '../components/ui/badge';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../components/ui/sheet';
import { Slider } from '../components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { FaSearch, FaFilter, FaMapMarkerAlt, FaBed, FaRulerCombined, FaCar, FaHome, FaCheckCircle, FaBuilding, FaCheck, FaEye, FaHeart } from 'react-icons/fa';
import Link from 'next/link';

// Property categories with Hebrew labels
const propertyCategories = {
  all: 'הכל',
  apartment: 'דירות',
  house: 'בתים',
  penthouse: 'פנטהאוזים',
  garden: 'דירות גן'
} as const;

type PropertyCategory = keyof typeof propertyCategories;

// Property features with Hebrew labels
const propertyFeatures = {
  elevator: 'מעלית',
  parking: 'חניה',
  balcony: 'מרפסת',
  storage: 'מחסן',
  accessibility: 'גישה לנכים',
  renovated: 'משופצת',
  furnished: 'מרוהטת',
  airConditioned: 'מיזוג',
  secure: 'אבטחה 24/7',
  immediate: 'כניסה מיידית'
} as const;

export default function CatalogPage() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<PropertyCategory>('all');
  const [selectedCity, setSelectedCity] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<number[]>([0, 10000000]);
  const [roomsRange, setRoomsRange] = useState<number[]>([1, 10]);
  const [sortBy, setSortBy] = useState<string>('date');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  useEffect(() => {
    fetchProperties();
  }, []);

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

  const filterProperties = (propertyList: Property[]) => {
    let filtered = [...propertyList];

    // Search filter
    if (searchTerm) {
      const searchTermLower = searchTerm.toLowerCase();
      filtered = filtered.filter(property =>
        property.title.toLowerCase().includes(searchTermLower) ||
        property.address.toLowerCase().includes(searchTermLower) ||
        property.city.toLowerCase().includes(searchTermLower)
      );
    }

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(property => property.category === selectedCategory);
    }

    // City filter
    if (selectedCity !== 'all') {
      filtered = filtered.filter(property => property.city === selectedCity);
    }

    // Price range filter
    filtered = filtered.filter(property => 
      property.price >= priceRange[0] && property.price <= priceRange[1]
    );

    // Rooms range filter
    filtered = filtered.filter(property => 
      property.rooms >= roomsRange[0] && property.rooms <= roomsRange[1]
    );

    // Features filter
    if (selectedFeatures.length > 0) {
      filtered = filtered.filter(property => 
        selectedFeatures.every(feature => property[feature as keyof Property])
      );
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

    return filtered;
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

  const getPriceRange = (type: 'sale' | 'rent') => {
    const typeProperties = properties.filter(p => p.type === type);
    if (typeProperties.length === 0) return [0, 1000000];
    
    const prices = typeProperties.map(p => p.price);
    const min = Math.min(...prices);
    const max = Math.max(...prices);
    return [Math.floor(min / 100000) * 100000, Math.ceil(max / 100000) * 100000];
  };

  const saleProperties = filterProperties(properties.filter(p => p.type === 'sale'));
  const rentProperties = filterProperties(properties.filter(p => p.type === 'rent'));

  if (loading) {
    return (
      <div dir="rtl" className="min-h-screen bg-white">
        <div className="relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-20"
          style={{
            background: "linear-gradient(135deg, #23214a 0%, #23214a 100%)",
          }}>
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
      <section
        className="relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-20"
        style={{
          background: "linear-gradient(135deg, #23214a 0%, #23214a 100%)",
        }}
      >
        {/* Decorative gradients */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="absolute left-1/2 top-1/4 w-[70vw] h-[50vw] max-w-4xl -translate-x-1/2 rounded-full blur-3xl opacity-30"
            style={{
              background: "linear-gradient(135deg, #f1c23b40 0%, #f1c23b20 50%, transparent 100%)",
            }}
          />
          <div
            className="absolute right-0 bottom-0 w-1/3 h-1/3 blur-2xl opacity-20"
            style={{
              background: "linear-gradient(45deg, #f1c23b60 0%, transparent 100%)",
            }}
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-16 text-center">
          <h1 className="mb-6 font-serif text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl drop-shadow-2xl">
            קטלוג הנכסים שלנו
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-blue-100 md:text-2xl font-medium drop-shadow-lg">
            גלה את הנכס המושלם עבורך - דירות למכירה ולהשכרה באילת ובסביבתה
          </p>
          <div
            className="mx-auto h-2 w-24 rounded-full"
            style={{
              background: "linear-gradient(90deg, #f1c23b 0%, #fff 100%)",
              boxShadow: "0 2px 12px #f1c23b55",
            }}
          />
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Main Content */}
      <section
        className="relative py-16 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #23214a0d 0%, #fff 50%, #f1c23b0d 100%)",
        }}
      >
        {/* Background Blobs */}
        <div
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[60vw] h-[40vw] rounded-full blur-3xl opacity-60"
          style={{ background: "linear-gradient(135deg, #23214a4d 0%, #23214a1a 100%)" }}
        />
        <div
          className="pointer-events-none absolute bottom-0 right-0 w-1/3 h-1/3 blur-2xl opacity-40"
          style={{ background: "linear-gradient(45deg, #f1c23b60 0%, transparent 100%)" }}
        />

        <div className="container mx-auto px-4">
          {/* Global Filters */}
          <div className="mb-12">
            <div className="bg-white/90 rounded-3xl shadow-2xl p-8 backdrop-blur-xl border"
              style={{
                boxShadow: "0 4px 24px 0 #23214a14, 0 1.5px 8px 0 #23214a08",
              }}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="relative">
                  <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="חיפוש נכסים..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pr-10 border-gray-200 focus:border-blue-500"
                  />
                </div>

                <Select dir="rtl" value={selectedCategory} onValueChange={(value) => setSelectedCategory(value as PropertyCategory)}>
                  <SelectTrigger className="border-gray-200 focus:border-blue-500">
                    <SelectValue placeholder="סוג נכס" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(propertyCategories).map(([key, label]) => (
                      <SelectItem key={key} value={key}>{label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select dir="rtl" value={selectedCity} onValueChange={setSelectedCity}>
                  <SelectTrigger className="border-gray-200 focus:border-blue-500">
                    <SelectValue placeholder="עיר" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">כל הערים</SelectItem>
                    {getCities().map(city => (
                      <SelectItem key={city} value={city}>{city}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Button 
                  variant="outline" 
                  className="flex items-center justify-center gap-2 border-gray-200 hover:border-blue-500"
                  onClick={() => setShowFilters(show => !show)}
                >
                  <FaFilter className="h-4 w-4" />
                  סינון מתקדם
                </Button>
              </div>
            </div>
          </div>

          {/* Advanced Filters Sheet */}
          <Sheet open={showFilters} onOpenChange={setShowFilters}>
            <SheetContent side="right" className="w-full sm:w-[540px]" dir="rtl">
              <SheetHeader>
                <SheetTitle>סינון מתקדם</SheetTitle>
              </SheetHeader>
              
              <div className="py-6">
                <div className="space-y-6">
                  {/* Features */}
                  <div>
                    <label className="text-sm font-medium mb-4 block">מאפיינים</label>
                    <div className="grid grid-cols-2 gap-3">
                      {Object.entries(propertyFeatures).map(([key, label]) => (
                        <Button
                          key={key}
                          variant="outline"
                          className={`justify-start gap-2 ${
                            selectedFeatures.includes(key) ? 'bg-blue-50 border-blue-200' : ''
                          }`}
                          onClick={() => {
                            setSelectedFeatures(prev =>
                              prev.includes(key)
                                ? prev.filter(f => f !== key)
                                : [...prev, key]
                            );
                          }}
                        >
                          {selectedFeatures.includes(key) ? (
                            <FaCheckCircle className="h-4 w-4 text-blue-500" />
                          ) : (
                            <div className="h-4 w-4 rounded-full border-2 border-gray-300" />
                          )}
                          {label}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Sort */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">מיון לפי</label>
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
            </SheetContent>
          </Sheet>

          {/* Properties Sections */}
          <div className="space-y-16">
            {/* Sale Properties Section */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">נכסים למכירה</h2>
                <div className="bg-white/90 rounded-2xl shadow-xl p-6 backdrop-blur-xl border"
                  style={{
                    boxShadow: "0 4px 24px 0 #23214a14, 0 1.5px 8px 0 #23214a08",
                  }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                      <label className="text-s font-medium mb-2 block">טווח מחירים</label>
                      <div className="space-y-2">
                        <Slider
                          value={priceRange}
                          onValueChange={setPriceRange}
                          max={getPriceRange('sale')[1]}
                          min={getPriceRange('sale')[0]}
                          step={10000}
                          className="w-full"
                        />
                        <div className="flex justify-between text-s text-gray-600">
                          <span>₪{formatPrice(priceRange[0])}</span>
                          <span>₪{formatPrice(priceRange[1])}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="text-s font-medium mb-2 block">מספר חדרים</label>
                      <div className="space-y-2">
                        <Slider
                          value={roomsRange}
                          onValueChange={setRoomsRange}
                          max={10}
                          min={1}
                          step={1}
                          className="w-full"
                        />
                        <div className="flex justify-between text-s text-gray-600">
                          <span>{roomsRange[0]} חדרים</span>
                          <span>{roomsRange[1]} חדרים</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {saleProperties.length === 0 ? (
                <div className="text-center py-12 bg-white/90 rounded-3xl shadow-xl backdrop-blur-xl border">
                  <FaHome className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-sm font-medium text-gray-900">לא נמצאו נכסים למכירה</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    נסה לשנות את הפילטרים שלך או לחזור מאוחר יותר
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {saleProperties.map((property) => (
                    <Link key={property.id} href={`/catalog/${property.id}`}>
                      <Card className="group hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden transform hover:-translate-y-2 bg-white/90 backdrop-blur-xl border"
                        style={{
                          boxShadow: "0 4px 24px 0 #23214a14, 0 1.5px 8px 0 #23214a08",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.boxShadow = "0 8px 64px 0 #f1c23b55")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.boxShadow = "0 4px 24px 0 #23214a14, 0 1.5px 8px 0 #23214a08")
                        }>
                        <div className="relative">
                          <img
                            src={property.images[0] || '/images/image2.jpg'}
                            alt={property.title}
                            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute top-4 right-4 flex gap-2">
                            <Badge className="bg-green-500 hover:bg-green-600 text-white font-bold">
                              למכירה
                            </Badge>
                            {property.immediate && (
                              <Badge className="bg-orange-500 hover:bg-orange-600 text-white font-bold">
                                כניסה מיידית
                              </Badge>
                            )}
                          </div>
                          <div className="absolute top-4 left-4">
                            <Button variant="ghost" size="icon" className="bg-white/80 hover:bg-white">
                              <FaHeart className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="absolute bottom-0 right-0 left-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                            <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">
                              {property.title}
                            </h3>
                            <div className="flex items-center text-white/90 text-sm">
                              <FaMapMarkerAlt className="h-4 w-4 ml-2" />
                              {property.address}, {property.city}
                            </div>
                          </div>
                        </div>
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <div>
                              <div className="text-2xl font-bold text-gray-900">
                                ₪{formatPrice(property.price)}
                              </div>
                            </div>
                            <Badge variant="secondary" className="text-sm bg-blue-100 text-blue-800">
                              {propertyCategories[property.category as PropertyCategory]}
                            </Badge>
                          </div>
                          
                          <div className="grid grid-cols-3 gap-4 text-sm text-gray-600 mb-4">
                            <div className="flex items-center">
                              <FaBed className="h-4 w-4 ml-1" />
                              {property.rooms} חדרים
                            </div>
                            <div className="flex items-center">
                              <FaRulerCombined className="h-4 w-4 ml-1" />
                              {property.size} מ"ר
                            </div>
                            <div className="flex items-center">
                              <FaBuilding className="h-4 w-4 ml-1" />
                              קומה {property.floor}
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {Object.entries(propertyFeatures).map(([key, label]) => 
                              property[key as keyof Property] && (
                                <Badge 
                                  key={key}
                                  variant="outline" 
                                  className="text-xs bg-blue-50 border-blue-200 text-blue-700"
                                >
                                  {label}
                                </Badge>
                              )
                            )}
                          </div>

                          <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
                            <FaEye className="h-4 w-4 ml-2" />
                            צפה בפרטים
                          </Button>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Rent Properties Section */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">נכסים להשכרה</h2>
                <div className="bg-white/90 rounded-2xl shadow-xl p-6 backdrop-blur-xl border"
                  style={{
                    boxShadow: "0 4px 24px 0 #23214a14, 0 1.5px 8px 0 #23214a08",
                  }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-s font-medium mb-2 block">טווח מחירים</label>
                      <div className="space-y-2 w-full">
                        <Slider
                          value={priceRange}
                          onValueChange={setPriceRange}
                          max={getPriceRange('rent')[1]}
                          min={getPriceRange('rent')[0]}
                          step={1000}
                          className="w-full"
                        />
                        <div className="flex justify-between text-s text-gray-600">
                          <span>₪{formatPrice(priceRange[0])}</span>
                          <span>₪{formatPrice(priceRange[1])}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="text-s font-medium mb-2 block">מספר חדרים</label>
                      <div className="space-y-2">
                        <Slider
                          value={roomsRange}
                          onValueChange={setRoomsRange}
                          max={10}
                          min={1}
                          step={1}
                          className="w-full"
                        />
                        <div className="flex justify-between text-s text-gray-600">
                          <span>{roomsRange[0]} חדרים</span>
                          <span>{roomsRange[1]} חדרים</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {rentProperties.length === 0 ? (
                <div className="text-center py-12 bg-white/90 rounded-3xl shadow-xl backdrop-blur-xl border">
                  <FaHome className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-sm font-medium text-gray-900">לא נמצאו נכסים להשכרה</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    נסה לשנות את הפילטרים שלך או לחזור מאוחר יותר
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {rentProperties.map((property) => (
                    <Link key={property.id} href={`/catalog/${property.id}`}>
                      <Card className="group hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden transform hover:-translate-y-2 bg-white/90 backdrop-blur-xl border"
                        style={{
                          boxShadow: "0 4px 24px 0 #23214a14, 0 1.5px 8px 0 #23214a08",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.boxShadow = "0 8px 64px 0 #f1c23b55")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.boxShadow = "0 4px 24px 0 #23214a14, 0 1.5px 8px 0 #23214a08")
                        }>
                        <div className="relative">
                          <img
                            src={property.images[0] || '/images/image2.jpg'}
                            alt={property.title}
                            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute top-4 right-4 flex gap-2">
                            <Badge className="bg-blue-500 hover:bg-blue-600 text-white font-bold">
                              להשכרה
                            </Badge>
                            {property.immediate && (
                              <Badge className="bg-orange-500 hover:bg-orange-600 text-white font-bold">
                                כניסה מיידית
                              </Badge>
                            )}
                          </div>
                          <div className="absolute top-4 left-4">
                            <Button variant="ghost" size="icon" className="bg-white/80 hover:bg-white">
                              <FaHeart className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="absolute bottom-0 right-0 left-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                            <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">
                              {property.title}
                            </h3>
                            <div className="flex items-center text-white/90 text-sm">
                              <FaMapMarkerAlt className="h-4 w-4 ml-2" />
                              {property.address}, {property.city}
                            </div>
                          </div>
                        </div>
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <div>
                              <div className="text-2xl font-bold text-gray-900">
                                ₪{formatPrice(property.price)}
                              </div>
                              <div className="text-sm text-gray-500">לחודש</div>
                            </div>
                            <Badge variant="secondary" className="text-sm bg-blue-100 text-blue-800">
                              {propertyCategories[property.category as PropertyCategory]}
                            </Badge>
                          </div>
                          
                          <div className="grid grid-cols-3 gap-4 text-sm text-gray-600 mb-4">
                            <div className="flex items-center">
                              <FaBed className="h-4 w-4 ml-1" />
                              {property.rooms} חדרים
                            </div>
                            <div className="flex items-center">
                              <FaRulerCombined className="h-4 w-4 ml-1" />
                              {property.size} מ"ר
                            </div>
                            <div className="flex items-center">
                              <FaBuilding className="h-4 w-4 ml-1" />
                              קומה {property.floor}
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {Object.entries(propertyFeatures).map(([key, label]) => 
                              property[key as keyof Property] && (
                                <Badge 
                                  key={key}
                                  variant="outline" 
                                  className="text-xs bg-blue-50 border-blue-200 text-blue-700"
                                >
                                  {label}
                                </Badge>
                              )
                            )}
                          </div>

                          <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
                            <FaEye className="h-4 w-4 ml-2" />
                            צפה בפרטים
                          </Button>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
