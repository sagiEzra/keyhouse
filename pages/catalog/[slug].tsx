import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { Property } from '../../types/property';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { FaArrowRight, FaMapMarkerAlt, FaBed, FaRulerCombined, FaHome, FaCar, FaCheck, FaTimes, FaPhone, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

export default function PropertyDetailPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (slug) {
      fetchProperty();
    }
  }, [slug]);

  const fetchProperty = async () => {
    try {
      if (typeof slug !== 'string') return;
      
      const propertyDoc = await getDoc(doc(db, 'properties', slug));
      if (propertyDoc.exists()) {
        setProperty({ id: propertyDoc.id, ...propertyDoc.data() } as Property);
      } else {
        router.push('/catalog');
      }
    } catch (error) {
      console.error('Error fetching property:', error);
      router.push('/catalog');
    } finally {
      setLoading(false);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('he-IL').format(price);
  };

  const nextImage = () => {
    if (!property) return;
    setCurrentImageIndex((prev) => 
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    if (!property) return;
    setCurrentImageIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  if (loading) {
    return (
      <div dir="rtl" className="min-h-screen bg-white p-8 pt-32">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="h-96 bg-gray-200 rounded-lg"></div>
              <div className="space-y-4">
                <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!property) {
    return (
      <div dir="rtl" className="min-h-screen bg-white p-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">הנכס לא נמצא</h1>
          <Link href="/catalog">
            <Button>חזור לקטלוג</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div dir="rtl" className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="bg-gray-50 border-b pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/catalog">
            <Button variant="ghost" className="flex items-center gap-2">
              <FaArrowRight className="h-4 w-4" />
              חזור לקטלוג
            </Button>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative">
              <img
                src={property.images[currentImageIndex] || '/images/image2.jpg'}
                alt={property.title}
                className="w-full h-96 object-cover rounded-lg"
              />
              {property.images.length > 1 && (
                <>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute top-4 right-4 bg-white/80 hover:bg-white"
                    onClick={prevImage}
                  >
                    <FaArrowRight className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute top-4 left-4 bg-white/80 hover:bg-white"
                    onClick={nextImage}
                  >
                    <FaArrowRight className="h-4 w-4 rotate-180" />
                  </Button>
                </>
              )}
              <Badge 
                className={`absolute bottom-4 right-4 ${
                  property.type === 'sale' 
                    ? 'bg-green-500 hover:bg-green-600' 
                    : 'bg-blue-500 hover:bg-blue-600'
                }`}
              >
                {property.type === 'sale' ? 'למכירה' : 'להשכרה'}
              </Badge>
            </div>
            
            {/* Thumbnail Gallery */}
            {property.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {property.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative overflow-hidden rounded-lg ${
                      index === currentImageIndex ? 'ring-2 ring-blue-500' : ''
                    }`}
                  >
                    <img
                      src={image}
                      alt={`תמונה ${index + 1}`}
                      className="w-full h-20 object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Property Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {property.title}
              </h1>
              <div className="flex items-center text-gray-600 mb-4">
                <FaMapMarkerAlt className="h-5 w-5 ml-2" />
                <span>{property.address}, {property.city}</span>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                ₪{formatPrice(property.price)}
                {property.type === 'rent' && (
                  <span className="text-lg font-normal text-gray-600"> לחודש</span>
                )}
              </div>
            </div>

            {/* Key Features */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">פרטי הנכס</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <FaBed className="h-5 w-5 ml-2 text-gray-600" />
                    <span>{property.rooms} חדרים</span>
                  </div>
                  <div className="flex items-center">
                    <FaRulerCombined className="h-5 w-5 ml-2 text-gray-600" />
                    <span>{property.size} מ"ר</span>
                  </div>
                  <div className="flex items-center">
                    <FaHome className="h-5 w-5 ml-2 text-gray-600" />
                    <span>קומה {property.floor}</span>
                  </div>
                  <div className="flex items-center">
                    <FaCar className="h-5 w-5 ml-2 text-gray-600" />
                    <span>חניה {property.parking ? 'כן' : 'לא'}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Amenities */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">שירותים ונוחות</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span>מרפסת</span>
                    {property.balcony ? (
                      <FaCheck className="h-5 w-5 text-green-500" />
                    ) : (
                      <FaTimes className="h-5 w-5 text-red-500" />
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <span>חניה</span>
                    {property.parking ? (
                      <FaCheck className="h-5 w-5 text-green-500" />
                    ) : (
                      <FaTimes className="h-5 w-5 text-red-500" />
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <span>מעלית</span>
                    {property.elevator ? (
                      <FaCheck className="h-5 w-5 text-green-500" />
                    ) : (
                      <FaTimes className="h-5 w-5 text-red-500" />
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">תיאור הנכס</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {property.description}
                </p>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">צור קשר</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button className="w-full flex items-center justify-center gap-2">
                    <FaPhone className="h-4 w-4" />
                    התקשר עכשיו
                  </Button>
                  <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                    <FaEnvelope className="h-4 w-4" />
                    שלח הודעה
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
