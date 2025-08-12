import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { collection, getDocs, doc, deleteDoc, query, where, getDoc } from 'firebase/firestore';
import { auth, db, googleProvider } from '../../lib/firebase';
import { Property, User } from '../../types/property';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { FaPlus, FaEdit, FaTrash, FaSignOutAlt, FaHome, FaEye, FaGoogle } from 'react-icons/fa';
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
      <div dir="rtl" className="min-h-screen bg-white p-8 pt-32">
        <div className="max-w-7xl mx-auto">
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
      <div dir="rtl" className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center">כניסה למערכת ניהול</CardTitle>
          </CardHeader>
          <CardContent>
            <Button
              onClick={handleLogin}
              className="w-full flex items-center justify-center gap-2"
            >
              <FaGoogle className="h-5 w-5" />
              התחבר עם Google
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div dir="rtl" className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">ניהול קטלוג הנכסים</h1>
              <p className="text-gray-600 mt-2">ברוך הבא, {user?.name}</p>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/catalog">
                <Button variant="outline" className="flex items-center gap-2">
                  <FaEye className="h-4 w-4" />
                  צפה בקטלוג
                </Button>
              </Link>
              <Button onClick={handleLogout} variant="outline" className="flex items-center gap-2">
                <FaSignOutAlt className="h-4 w-4" />
                התנתק
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Add Property Button */}
        <div className="mb-8">
          <Link href="/catalog/manage/add">
            <Button className="flex items-center gap-2">
              <FaPlus className="h-4 w-4" />
              הוסף נכס חדש
            </Button>
          </Link>
        </div>

        {/* Properties List */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">הנכסים שלך</h2>

          {properties.length === 0 ? (
            <Card>
              <CardContent className="text-center py-12">
                <FaHome className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">אין נכסים עדיין</h3>
                <p className="text-gray-500 mb-4">התחל על ידי הוספת הנכס הראשון שלך</p>
                <Link href="/catalog/manage/add">
                  <Button>הוסף נכס ראשון</Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-6">
              {properties.map((property) => (
                <Card key={property.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4 space-x-reverse">
                        <img
                          src={property.images[0] || '/images/image2.jpg'}
                          alt={property.title}
                          className="w-24 h-24 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {property.title}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                            <span>{property.address}, {property.city}</span>
                            <Badge
                              className={
                                property.type === 'sale'
                                  ? 'bg-green-500 hover:bg-green-600'
                                  : 'bg-blue-500 hover:bg-blue-600'
                              }
                            >
                              {property.type === 'sale' ? 'למכירה' : 'להשכרה'}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span>{property.rooms} חדרים</span>
                            <span>{property.size} מ"ר</span>
                            <span>קומה {property.floor}</span>
                            <span className="font-semibold text-gray-900">
                              ₪{formatPrice(property.price)}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Link href={`/catalog/${property.id}`}>
                          <Button variant="outline" size="sm">
                            <FaEye className="h-4 w-4" />
                          </Button>
                        </Link>
                        <Link href={`/catalog/manage/edit/${property.id}`}>
                          <Button variant="outline" size="sm">
                            <FaEdit className="h-4 w-4" />
                          </Button>
                        </Link>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDeleteProperty(property.id)}
                          className="text-red-600 hover:text-red-700"
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
    </div>
  );
}