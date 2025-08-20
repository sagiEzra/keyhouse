import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { collection, getDocs, doc, deleteDoc, query, where, getDoc } from 'firebase/firestore';
import { auth, db, googleProvider } from '../../lib/firebase';
import { Property, User } from '../../types/property';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { FaPlus, FaEdit, FaTrash, FaSignOutAlt, FaHome, FaEye, FaGoogle, FaUser, FaChartLine } from 'react-icons/fa';
import Link from 'next/link';

export default function ManagePage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [properties, setProperties] = useState<Property[]>([]);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        setShowLogin(false);
        // Check if user exists in users collection and is admin
        // 👇 Check role from Firestore
        const userDocRef = doc(db, "users", firebaseUser.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const userData = userDocSnap.data() as User;
          const isAdmin = userDocSnap.data().isAdmin;
          if (isAdmin) {
            setUser(userData);
            fetchProperties();
          } else {
            // User not authorized
            await signOut(auth);
            setShowLogin(true);
          }
        }
      } else {
        setShowLogin(true);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const fetchProperties = async () => {
    try {
      const propertiesRef = collection(db, 'properties');
      const querySnapshot = await getDocs(propertiesRef);
      const propertiesData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Property[];
      setProperties(propertiesData);
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  };

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error: any) {
      alert('התחברות נכשלה, נסה שוב');
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setProperties([]);
      setShowLogin(true);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const handleDeleteProperty = async (propertyId: string) => {
    if (window.confirm('האם אתה בטוח שברצונך למחוק נכס זה?')) {
      try {
        await deleteDoc(doc(db, 'properties', propertyId));
        setProperties(properties.filter(p => p.id !== propertyId));
      } catch (error) {
        console.error('Error deleting property:', error);
      }
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('he-IL').format(price);
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
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-20 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showLogin) {
    return (
      <div dir="rtl" className="min-h-screen bg-white">
        <section
          className="relative flex min-h-screen items-center justify-center overflow-hidden"
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

          <div className="relative z-10">
            <Card className="w-full max-w-md bg-white/90 backdrop-blur-xl border shadow-2xl"
              style={{
                boxShadow: "0 4px 24px 0 #23214a14, 0 1.5px 8px 0 #23214a08",
              }}>
              <CardHeader>
                <CardTitle className="text-center text-2xl font-bold text-gray-900">כניסה למערכת ניהול</CardTitle>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={handleLogin}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                >
                  <FaGoogle className="h-5 w-5" />
                  התחבר עם Google
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
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
            ניהול קטלוג הנכסים
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-blue-100 md:text-2xl font-medium drop-shadow-lg">
            ברוך הבא, {user?.name}
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
          {/* Header Actions */}
          <div className="mb-12">
            <div className="bg-white/90 rounded-3xl shadow-2xl p-8 backdrop-blur-xl border flex flex-col md:flex-row justify-between items-center gap-6"
              style={{
                boxShadow: "0 4px 24px 0 #23214a14, 0 1.5px 8px 0 #23214a08",
              }}>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <FaUser className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">ברוך הבא, {user?.name}</h2>
                  <p className="text-gray-600">ניהול קטלוג הנכסים שלך</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Link href="/catalog">
                  <Button variant="outline" className="flex items-center gap-2 border-gray-200 hover:border-blue-500">
                    <FaEye className="h-4 w-4" />
                    צפה בקטלוג
                  </Button>
                </Link>
                <Button 
                  onClick={handleLogout} 
                  variant="outline" 
                  className="flex items-center gap-2 border-gray-200 hover:border-red-500 text-red-600 hover:text-red-700"
                >
                  <FaSignOutAlt className="h-4 w-4" />
                  התנתק
                </Button>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white/90 rounded-2xl shadow-xl backdrop-blur-xl border"
                style={{
                  boxShadow: "0 4px 24px 0 #23214a14, 0 1.5px 8px 0 #23214a08",
                }}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-green-100 rounded-full">
                      <FaHome className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">סה"כ נכסים</p>
                      <p className="text-2xl font-bold text-gray-900">{properties.length}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/90 rounded-2xl shadow-xl backdrop-blur-xl border"
                style={{
                  boxShadow: "0 4px 24px 0 #23214a14, 0 1.5px 8px 0 #23214a08",
                }}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-100 rounded-full">
                      <FaChartLine className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">נכסים למכירה</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {properties.filter(p => p.type === 'sale').length}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/90 rounded-2xl shadow-xl backdrop-blur-xl border"
                style={{
                  boxShadow: "0 4px 24px 0 #23214a14, 0 1.5px 8px 0 #23214a08",
                }}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-purple-100 rounded-full">
                      <FaHome className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">נכסים להשכרה</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {properties.filter(p => p.type === 'rent').length}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Add Property Button */}
          <div className="mb-8">
            <Link href="/catalog/manage/add">
              <Button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg">
                <FaPlus className="h-5 w-5" />
                הוסף נכס חדש
              </Button>
            </Link>
          </div>

          {/* Properties List */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">הנכסים שלך</h2>

            {properties.length === 0 ? (
              <Card className="bg-white/90 rounded-3xl shadow-xl backdrop-blur-xl border"
                style={{
                  boxShadow: "0 4px 24px 0 #23214a14, 0 1.5px 8px 0 #23214a08",
                }}>
                <CardContent className="text-center py-16">
                  <FaHome className="mx-auto h-16 w-16 text-gray-400 mb-6" />
                  <h3 className="text-xl font-medium text-gray-900 mb-2">אין נכסים עדיין</h3>
                  <p className="text-gray-500 mb-6">התחל על ידי הוספת הנכס הראשון שלך</p>
                  <Link href="/catalog/manage/add">
                    <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
                      הוסף נכס ראשון
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-6">
                {properties.map((property) => (
                  <Card key={property.id} className="bg-white/90 rounded-2xl shadow-xl backdrop-blur-xl border hover:shadow-2xl transition-all duration-300"
                    style={{
                      boxShadow: "0 4px 24px 0 #23214a14, 0 1.5px 8px 0 #23214a08",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.boxShadow = "0 8px 64px 0 #f1c23b55")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.boxShadow = "0 4px 24px 0 #23214a14, 0 1.5px 8px 0 #23214a08")
                    }>
                    <CardContent className="p-8">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-6 space-x-reverse">
                          <img
                            src={property.images[0] || '/images/image2.jpg'}
                            alt={property.title}
                            className="w-32 h-32 object-cover rounded-2xl shadow-lg"
                          />
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                              {property.title}
                            </h3>
                            <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                              <span className="flex items-center gap-1">
                                <FaHome className="h-4 w-4" />
                                {property.address}, {property.city}
                              </span>
                              <Badge
                                className={
                                  property.type === 'sale'
                                    ? 'bg-green-500 hover:bg-green-600 text-white font-bold'
                                    : 'bg-blue-500 hover:bg-blue-600 text-white font-bold'
                                }
                              >
                                {property.type === 'sale' ? 'למכירה' : 'להשכרה'}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
                              <span className="flex items-center gap-1">
                                <FaHome className="h-4 w-4" />
                                {property.rooms} חדרים
                              </span>
                              <span className="flex items-center gap-1">
                                <FaHome className="h-4 w-4" />
                                {property.size} מ"ר
                              </span>
                              <span className="flex items-center gap-1">
                                <FaHome className="h-4 w-4" />
                                קומה {property.floor}
                              </span>
                              <span className="font-bold text-gray-900 text-lg">
                                ₪{formatPrice(property.price)}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Link href={`/catalog/${property.id}`}>
                            <Button variant="outline" size="sm" className="bg-white/80 hover:bg-white">
                              <FaEye className="h-4 w-4" />
                            </Button>
                          </Link>
                          <Link href={`/catalog/manage/edit/${property.id}`}>
                            <Button variant="outline" size="sm" className="bg-white/80 hover:bg-white">
                              <FaEdit className="h-4 w-4" />
                            </Button>
                          </Link>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDeleteProperty(property.id)}
                            className="text-red-600 hover:text-red-700 bg-white/80 hover:bg-white"
                          >
                            <FaTrash className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}