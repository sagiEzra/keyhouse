import { useState, useEffect } from 'react';

import { useRouter } from 'next/router';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { Property } from '../../types/property';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { FaArrowRight, FaMapMarkerAlt, FaBed, FaRulerCombined, FaHome, FaCar, FaCheck, FaTimes, FaPhone, FaEnvelope, FaLink, FaWhatsapp, FaHeart, FaShare } from 'react-icons/fa';
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
    // eslint-disable-next-line
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
      <div dir="rtl" className="min-h-screen bg-white">
        <div className="relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-20"
          style={{
            background: "linear-gradient(135deg, #23214a 0%, #23214a 100%)",
          }}>
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
      <div dir="rtl" className="min-h-screen bg-white">
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
      {/* Hero Section */}
      <section
        className="relative flex min-h-[40vh] items-center justify-center overflow-hidden pt-20"
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
            {property.title}
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-blue-100 md:text-2xl font-medium drop-shadow-lg">
            {property.address}, {property.city}
          </p>
          <div className="text-3xl font-bold text-white mb-4">
            ₪{formatPrice(property.price)}
            {property.type === 'rent' && (
              <span className="text-lg font-normal text-blue-100"> לחודש</span>
            )}
          </div>
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
          {/* Back Button & Share */}
          <div className="mb-8">
            <div className="bg-white/90 rounded-3xl shadow-2xl p-6 backdrop-blur-xl border flex justify-between items-center"
              style={{
                boxShadow: "0 4px 24px 0 #23214a14, 0 1.5px 8px 0 #23214a08",
              }}>
              <Link href="/catalog">
                <Button variant="ghost" className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
                  <FaArrowRight className="h-4 w-4" />
                  חזור לקטלוג
                </Button>
              </Link>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="flex items-center justify-center bg-white/80 hover:bg-white"
                  onClick={() => navigator.clipboard.writeText(window.location.href)}
                  title="העתק קישור"
                >
                  <FaLink className="h-5 w-5" />
                </Button>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="שתף ב-WhatsApp"
                >
                  <Button variant="outline" size="icon" className="flex items-center justify-center bg-white/80 hover:bg-white">
                    <FaWhatsapp className="h-5 w-5 text-green-500" />
                  </Button>
                </a>
                <Button variant="outline" size="icon" className="flex items-center justify-center bg-white/80 hover:bg-white">
                  <FaHeart className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Carousel */}
            <div className="space-y-6">
              <div className="relative rounded-3xl shadow-2xl overflow-hidden bg-white/90 backdrop-blur-xl border"
                style={{
                  boxShadow: "0 4px 24px 0 #23214a14, 0 1.5px 8px 0 #23214a08",
                }}>
                <img
                  src={property.images[currentImageIndex] || '/images/image2.jpg'}
                  alt={property.title}
                  className="w-full h-96 object-cover transition-all duration-500"
                />
                {property.images.length > 1 && (
                  <>
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
                      onClick={prevImage}
                    >
                      <FaArrowRight className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
                      onClick={nextImage}
                    >
                      <FaArrowRight className="h-4 w-4 rotate-180" />
                    </Button>
                  </>
                )}
                {/* Main tags */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <Badge className={`rounded-full px-4 py-2 text-lg font-bold ${property.type === 'sale' ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-500 hover:bg-blue-600'}`}>
                    {property.type === 'sale' ? 'למכירה' : 'להשכרה'}
                  </Badge>
                  {property.isNew && <Badge className="bg-yellow-400 text-gray-900 font-bold">חדש</Badge>}
                  {property.isDeal && <Badge className="bg-pink-500 text-white font-bold">מציאה</Badge>}
                  {property.isDiscounted && <Badge className="bg-red-500 text-white font-bold">הוזל לאחרונה</Badge>}
                </div>
                {/* Exclusive tags */}
                <div className="absolute bottom-4 right-4 flex gap-2">
                  {property.propertyType && <Badge className="bg-indigo-500 text-white font-bold">{property.propertyType}</Badge>}
                  {property.mamad && <Badge className="bg-gray-800 text-white">ממ"ד</Badge>}
                  {property.nof && <Badge className="bg-blue-400 text-white">נוף</Badge>}
                  {property.nofLayam && <Badge className="bg-cyan-500 text-white">נוף לים</Badge>}
                  {property.masterRoom && <Badge className="bg-purple-500 text-white">חדר מאסטר</Badge>}
                  {property.closetRoom && <Badge className="bg-teal-500 text-white">חדר ארונות</Badge>}
                  {property.renovated && <Badge className="bg-green-700 text-white">משופץ</Badge>}
                </div>
              </div>
              {/* Thumbnail Gallery */}
              {property.images.length > 1 && (
                <div className="grid grid-cols-4 gap-3">
                  {property.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative overflow-hidden rounded-xl transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'ring-2 ring-blue-500 scale-105' 
                          : 'hover:scale-105'
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
            <div className="space-y-8">
              {/* Key Features */}
              <Card className="rounded-2xl shadow-xl bg-white/90 backdrop-blur-xl border"
                style={{
                  boxShadow: "0 4px 24px 0 #23214a14, 0 1.5px 8px 0 #23214a08",
                }}>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">פרטי הנכס</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex items-center gap-3 text-gray-700">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <FaBed className="h-5 w-5 text-blue-600" />
                      </div>
                      <span className="font-medium">{property.rooms} חדרים</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <FaRulerCombined className="h-5 w-5 text-green-600" />
                      </div>
                      <span className="font-medium">{property.size} מ"ר</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <div className="p-2 bg-purple-100 rounded-lg">
                        <FaHome className="h-5 w-5 text-purple-600" />
                      </div>
                      <span className="font-medium">קומה {property.floor}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <div className="p-2 bg-orange-100 rounded-lg">
                        <FaCar className="h-5 w-5 text-orange-600" />
                      </div>
                      <span className="font-medium">{property.parking ? 'חניה' : 'ללא חניה'}</span>
                    </div>
                    {property.balcony && (
                      <div className="flex items-center gap-3 text-gray-700">
                        <div className="p-2 bg-teal-100 rounded-lg">
                          <FaCheck className="h-5 w-5 text-teal-600" />
                        </div>
                        <span className="font-medium">מרפסת{property.balconySize ? ` (${property.balconySize} מ"ר)` : ''}</span>
                      </div>
                    )}
                    {property.elevator && (
                      <div className="flex items-center gap-3 text-gray-700">
                        <div className="p-2 bg-indigo-100 rounded-lg">
                          <FaCheck className="h-5 w-5 text-indigo-600" />
                        </div>
                        <span className="font-medium">מעלית</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Amenities */}
              <Card className="rounded-2xl shadow-xl bg-white/90 backdrop-blur-xl border"
                style={{
                  boxShadow: "0 4px 24px 0 #23214a14, 0 1.5px 8px 0 #23214a08",
                }}>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">שירותים ונוחות</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {property.mamad && <Badge className="bg-gray-800 text-white px-4 py-2">ממ"ד</Badge>}
                    {property.nof && <Badge className="bg-blue-400 text-white px-4 py-2">נוף</Badge>}
                    {property.nofLayam && <Badge className="bg-cyan-500 text-white px-4 py-2">נוף לים</Badge>}
                    {property.masterRoom && <Badge className="bg-purple-500 text-white px-4 py-2">חדר מאסטר</Badge>}
                    {property.closetRoom && <Badge className="bg-teal-500 text-white px-4 py-2">חדר ארונות</Badge>}
                    {property.renovated && <Badge className="bg-green-700 text-white px-4 py-2">משופץ</Badge>}
                  </div>
                </CardContent>
              </Card>

              {/* Description */}
              <Card className="rounded-2xl shadow-xl bg-white/90 backdrop-blur-xl border"
                style={{
                  boxShadow: "0 4px 24px 0 #23214a14, 0 1.5px 8px 0 #23214a08",
                }}>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">תיאור הנכס</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-wrap text-lg">
                    {property.description}
                  </p>
                </CardContent>
              </Card>

              {/* Contact */}
              {(property.contactPhone || property.contactEmail) && (
                <Card className="rounded-2xl shadow-xl bg-white/90 backdrop-blur-xl border"
                  style={{
                    boxShadow: "0 4px 24px 0 #23214a14, 0 1.5px 8px 0 #23214a08",
                  }}>
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-900">צור קשר</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {property.contactPhone && (
                        <div className="flex items-center gap-3 text-gray-700">
                          <div className="p-2 bg-green-100 rounded-lg">
                            <FaPhone className="h-5 w-5 text-green-600" />
                          </div>
                          <span className="font-medium">{property.contactPhone}</span>
                        </div>
                      )}
                      {property.contactEmail && (
                        <div className="flex items-center gap-3 text-gray-700">
                          <div className="p-2 bg-blue-100 rounded-lg">
                            <FaEnvelope className="h-5 w-5 text-blue-600" />
                          </div>
                          <span className="font-medium">{property.contactEmail}</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Map Integration */}
              {property.address && property.city && (
                <div className="rounded-2xl overflow-hidden shadow-xl bg-white/90 backdrop-blur-xl border"
                  style={{
                    boxShadow: "0 4px 24px 0 #23214a14, 0 1.5px 8px 0 #23214a08",
                  }}>
                  <iframe
                    title="מפה"
                    src={`https://www.google.com/maps?q=${encodeURIComponent(property.address + ', ' + property.city)}&output=embed`}
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-80 rounded-2xl"
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
