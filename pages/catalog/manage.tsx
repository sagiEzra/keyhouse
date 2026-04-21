import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { collection, getDocs, doc, deleteDoc, query, where, getDoc, writeBatch } from 'firebase/firestore';
import { auth, db, googleProvider } from '../../lib/firebase';
import { Property, User } from '../../types/property';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { FaPlus, FaEdit, FaTrash, FaSignOutAlt, FaHome, FaEye, FaGoogle, FaUser, FaChartLine, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import Link from 'next/link';
import LuxuryButton from '../../components/ui/luxury-button';
import LuxuryCard from '../../components/ui/luxury-card';
import LuxuryBackground from '../../components/ui/luxury-background';
import { deleteFromCloudinary } from '../../lib/cloudinary';

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

      // Group by type (sale first, then rent), and sort by order within each type
      propertiesData.sort((a, b) => {
        if (a.type !== b.type) return a.type === 'sale' ? -1 : 1;
        if (a.order !== undefined && b.order !== undefined) return a.order - b.order;
        if (a.order !== undefined) return -1;
        if (b.order !== undefined) return 1;
        return (a.createdAt?.seconds ?? 0) - (b.createdAt?.seconds ?? 0);
      });

      setProperties(propertiesData);
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  };

  const handleMove = async (index: number, direction: 'up' | 'down') => {
    const swapIndex = direction === 'up' ? index - 1 : index + 1;
    if (swapIndex < 0 || swapIndex >= properties.length) return;
    // Don't swap across type boundaries — sale and rent have independent order sequences
    if (properties[index].type !== properties[swapIndex].type) return;

    const updated = [...properties];
    const orderA = updated[index].order ?? index;
    const orderB = updated[swapIndex].order ?? swapIndex;

    updated[index] = { ...updated[index], order: orderB };
    updated[swapIndex] = { ...updated[swapIndex], order: orderA };
    // Swap positions in array
    [updated[index], updated[swapIndex]] = [updated[swapIndex], updated[index]];

    setProperties(updated);

    try {
      const batch = writeBatch(db);
      batch.update(doc(db, 'properties', updated[index].id), { order: updated[index].order });
      batch.update(doc(db, 'properties', updated[swapIndex].id), { order: updated[swapIndex].order });
      await batch.commit();
    } catch (error) {
      console.error('Error saving order:', error);
    }
  };

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error: any) {
      console.error(error)
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
        // Get property data to find media public IDs
        const propertyDoc = await getDoc(doc(db, 'properties', propertyId));
        if (propertyDoc.exists()) {
          const propertyData = propertyDoc.data() as Property;
          const publicIdsToDelete: string[] = [];

          // Collect main image public ID
          if (propertyData.mainImagePublicId) {
            publicIdsToDelete.push(propertyData.mainImagePublicId);
          }

          // Collect additional images public IDs
          if (propertyData.imagePublicIds && propertyData.imagePublicIds.length > 0) {
            publicIdsToDelete.push(...propertyData.imagePublicIds.filter(id => id));
          }

          // Delete media from Cloudinary
          if (publicIdsToDelete.length > 0) {
            try {
              await deleteFromCloudinary(publicIdsToDelete);
            } catch (cloudinaryError) {
              console.error('Error deleting media from Cloudinary:', cloudinaryError);
              // Continue with property deletion even if Cloudinary deletion fails
            }
          }
        }

        // Delete property from Firestore
        await deleteDoc(doc(db, 'properties', propertyId));
        setProperties(properties.filter(p => p.id !== propertyId));
        alert('הנכס נמחק בהצלחה!');
      } catch (error) {
        console.error('Error deleting property:', error);
        alert('שגיאה במחיקת הנכס, נסה שוב');
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
            background: "linear-gradient(135deg, rgba(25,39,74,0.97) 0%, #1a2756 35%, #2d4a8e 65%, rgba(35,52,94,0.95) 100%)",
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
            background: "linear-gradient(135deg, rgba(25,39,74,0.97) 0%, #1a2756 35%, #2d4a8e 65%, rgba(35,52,94,0.95) 100%)",
          }}
        >
          {/* Decorative gradients */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div
              className="absolute left-1/2 top-1/4 w-[70vw] h-[50vw] max-w-4xl -translate-x-1/2 rounded-full blur-3xl opacity-30"
              style={{
                background: "linear-gradient(135deg, rgba(199,157,42,0.4) 0%, rgba(199,157,42,0.2) 50%, transparent 100%)",
              }}
            />
            <div
              className="absolute right-0 bottom-0 w-1/3 h-1/3 blur-2xl opacity-20"
              style={{
                background: "linear-gradient(45deg, rgba(199,157,42,0.6) 0%, transparent 100%)",
              }}
            />
          </div>

          <div className="relative z-10">
            <LuxuryCard className="w-full max-w-md">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-serif font-bold mb-2" style={{ color: "rgba(25,39,74,0.97)" }}>
                  כניסה למערכת ניהול
                </h2>
                <p className="text-lg" style={{ color: "rgba(25,39,74,0.7)" }}>
                  התחבר כדי לנהל את קטלוג הנכסים
                </p>
              </div>
              <LuxuryButton
                onClick={handleLogin}
                variant="admin"
                size="large"
                className="w-full flex items-center justify-center gap-3"
              >
                <FaGoogle className="h-5 w-5" />
                התחבר עם Google
              </LuxuryButton>
            </LuxuryCard>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div dir="rtl" className="min-h-screen bg-white">
      {/* Hero Section */}
      <LuxuryBackground variant="hero" className="flex min-h-[60vh] items-center justify-center pt-20">
        <div className="container relative z-10 mx-auto px-6 py-16 text-center">
          <h1 className="mb-6 font-serif text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl drop-shadow-2xl"
              style={{ textShadow: "0 4px 20px rgba(0,0,0,0.3), 0 2px 10px rgba(199,157,42,0.2)" }}>
            ניהול קטלוג הנכסים
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-white/90 md:text-2xl font-medium drop-shadow-lg">
            ברוך הבא, {user?.name}
          </p>
          <div
            className="mx-auto h-2 w-24 rounded-full"
            style={{
              background: "linear-gradient(90deg, #c79d2a 0%, #fff 100%)",
              boxShadow: "0 2px 12px rgba(199,157,42,0.5)",
            }}
          />
        </div>
      </LuxuryBackground>

      {/* Main Content */}
      <LuxuryBackground variant="light" className="py-24">

        <div className="container mx-auto px-6 relative z-10">
          {/* Header Actions */}
          <div className="mb-12">
            <LuxuryCard className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full"
                     style={{
                       background: "linear-gradient(135deg, rgba(199,157,42,0.1) 0%, rgba(255,255,255,0.9) 100%)",
                       border: "2px solid rgba(199,157,42,0.3)",
                     }}>
                  <FaUser className="h-6 w-6" style={{ color: "rgba(25,39,74,0.97)" }} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold" style={{ color: "rgba(25,39,74,0.97)" }}>ברוך הבא, {user?.name}</h2>
                  <p className="text-lg" style={{ color: "rgba(25,39,74,0.7)" }}>ניהול קטלוג הנכסים שלך</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <LuxuryButton variant="secondary" href="/catalog">
                  <FaEye className="h-4 w-4" />
                  צפה בקטלוג
                </LuxuryButton>
                <LuxuryButton onClick={handleLogout} variant="secondary">
                  <FaSignOutAlt className="h-4 w-4" />
                  התנתק
                </LuxuryButton>
              </div>
            </LuxuryCard>
          </div>

          {/* Stats Cards */}
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <LuxuryCard hoverable={true}>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full"
                       style={{
                         background: "linear-gradient(135deg, rgba(199,157,42,0.1) 0%, rgba(255,255,255,0.9) 100%)",
                         border: "2px solid rgba(199,157,42,0.3)",
                       }}>
                    <FaHome className="h-6 w-6" style={{ color: "rgba(25,39,74,0.97)" }} />
                  </div>
                  <div>
                    <p className="text-base" style={{ color: "rgba(25,39,74,0.6)" }}>סה"כ נכסים</p>
                    <p className="text-3xl font-bold" style={{ color: "rgba(25,39,74,0.97)" }}>{properties.length}</p>
                  </div>
                </div>
              </LuxuryCard>

              <LuxuryCard hoverable={true}>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full"
                       style={{
                         background: "linear-gradient(135deg, rgba(199,157,42,0.1) 0%, rgba(255,255,255,0.9) 100%)",
                         border: "2px solid rgba(199,157,42,0.3)",
                       }}>
                    <FaChartLine className="h-6 w-6" style={{ color: "rgba(25,39,74,0.97)" }} />
                  </div>
                  <div>
                    <p className="text-base" style={{ color: "rgba(25,39,74,0.6)" }}>נכסים למכירה</p>
                    <p className="text-3xl font-bold" style={{ color: "rgba(25,39,74,0.97)" }}>
                      {properties.filter(p => p.type === 'sale').length}
                    </p>
                  </div>
                </div>
              </LuxuryCard>

              <LuxuryCard hoverable={true}>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full"
                       style={{
                         background: "linear-gradient(135deg, rgba(199,157,42,0.1) 0%, rgba(255,255,255,0.9) 100%)",
                         border: "2px solid rgba(199,157,42,0.3)",
                       }}>
                    <FaHome className="h-6 w-6" style={{ color: "rgba(25,39,74,0.97)" }} />
                  </div>
                  <div>
                    <p className="text-base" style={{ color: "rgba(25,39,74,0.6)" }}>נכסים להשכרה</p>
                    <p className="text-3xl font-bold" style={{ color: "rgba(25,39,74,0.97)" }}>
                      {properties.filter(p => p.type === 'rent').length}
                    </p>
                  </div>
                </div>
              </LuxuryCard>
            </div>
          </div>

          {/* Add Property Button */}
          <div className="mb-12">
            <LuxuryButton size="large" href="/catalog/manage/add">
              <FaPlus className="h-5 w-5" />
              הוסף נכס חדש
            </LuxuryButton>
          </div>

          {/* Properties List */}
          <div className="space-y-8">
            <h2 className="text-4xl font-serif font-bold" style={{ color: "rgba(25,39,74,0.97)" }}>הנכסים שלך</h2>

            {properties.length === 0 ? (
              <LuxuryCard className="text-center py-16">
                <FaHome className="mx-auto h-16 w-16 mb-6" style={{ color: "rgba(25,39,74,0.3)" }} />
                <h3 className="text-2xl font-bold mb-3" style={{ color: "rgba(25,39,74,0.97)" }}>אין נכסים עדיין</h3>
                <p className="text-lg mb-8" style={{ color: "rgba(25,39,74,0.6)" }}>התחל על ידי הוספת הנכס הראשון שלך</p>
                <LuxuryButton href="/catalog/manage/add">
                  <FaPlus className="h-4 w-4" />
                  הוסף נכס ראשון
                </LuxuryButton>
              </LuxuryCard>
            ) : (
              <div className="space-y-12">
                {(['sale', 'rent'] as const).map((type) => {
                  const group = properties.filter(p => p.type === type);
                  if (group.length === 0) return null;
                  return (
                    <div key={type}>
                      {/* Section divider */}
                      <div className="flex items-center gap-4 mb-6">
                        <span
                          className="px-5 py-2 rounded-full text-base font-bold"
                          style={{
                            backgroundColor: type === 'sale' ? "rgba(34,197,94,0.12)" : "rgba(59,130,246,0.12)",
                            color: type === 'sale' ? "#16a34a" : "#2563eb",
                            border: `1.5px solid ${type === 'sale' ? "rgba(34,197,94,0.35)" : "rgba(59,130,246,0.35)"}`,
                          }}
                        >
                          {type === 'sale' ? 'למכירה' : 'להשכרה'}
                        </span>
                        <div className="flex-1 h-px" style={{ backgroundColor: "rgba(25,39,74,0.08)" }} />
                        <span className="text-base" style={{ color: "rgba(25,39,74,0.45)" }}>{group.length} נכסים</span>
                      </div>
                      <div className="grid gap-8">
                        {group.map((property) => (
                  <LuxuryCard key={property.id} hoverable={true} className="p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
                      <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                        <div className="relative w-full sm:w-40 flex-shrink-0">
                          <img
                            src={property.mainImage || '/images/keyhouse.jpg'}
                            alt={property.title}
                            className="w-full h-48 sm:h-40 object-cover rounded-2xl shadow-lg"
                          />
                          {property.isSold && (
                            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none rounded-2xl">
                              <div
                                className="absolute font-bold text-xs tracking-widest text-white text-center"
                                style={{
                                  background: "rgba(185, 28, 28, 0.92)",
                                  width: "150px",
                                  top: "22px",
                                  right: "-38px",
                                  transform: "rotate(45deg)",
                                  boxShadow: "0 2px 8px rgba(185,28,28,0.5)",
                                  padding: "5px 0",
                                }}
                              >
                                נמכר!
                              </div>
                            </div>
                          )}
                          {property.isRented && (
                            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none rounded-2xl">
                              <div
                                className="absolute font-bold text-xs tracking-widest text-white text-center"
                                style={{
                                  background: "rgba(30, 64, 175, 0.92)",
                                  width: "150px",
                                  top: "22px",
                                  right: "-38px",
                                  transform: "rotate(45deg)",
                                  boxShadow: "0 2px 8px rgba(30,64,175,0.5)",
                                  padding: "5px 0",
                                }}
                              >
                                הושכר!
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-4" style={{ color: "rgba(25,39,74,0.97)" }}>
                            {property.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-base mb-4" style={{ color: "rgba(25,39,74,0.7)" }}>
                            <span className="flex items-center gap-2">
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
                          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-base mb-4" style={{ color: "rgba(25,39,74,0.7)" }}>
                            <span className="flex items-center gap-2">
                              <FaHome className="h-4 w-4" />
                              {property.rooms} חדרים
                            </span>
                            <span className="flex items-center gap-2">
                              <FaHome className="h-4 w-4" />
                              {property.size} מ"ר
                            </span>
                            <span className="flex items-center gap-2">
                              <FaHome className="h-4 w-4" />
                              קומה {property.floor}
                            </span>
                            <span className="font-bold text-xl" style={{ color: "rgba(25,39,74,0.97)" }}>
                              ₪{formatPrice(property.price)}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center gap-2 mt-2 sm:mt-0">
                        {/* Order arrows */}
                        <div className="flex flex-col gap-1">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleMove(properties.indexOf(property), 'up')}
                            disabled={
                              properties.indexOf(property) === 0 ||
                              properties[properties.indexOf(property) - 1]?.type !== property.type
                            }
                            className="bg-white/80 hover:bg-white disabled:opacity-30"
                            title="הזז למעלה"
                          >
                            <FaArrowUp className="h-3 w-3" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleMove(properties.indexOf(property), 'down')}
                            disabled={
                              properties.indexOf(property) === properties.length - 1 ||
                              properties[properties.indexOf(property) + 1]?.type !== property.type
                            }
                            className="bg-white/80 hover:bg-white disabled:opacity-30"
                            title="הזז למטה"
                          >
                            <FaArrowDown className="h-3 w-3" />
                          </Button>
                        </div>
                        {/* Action buttons */}
                        <div className="flex flex-wrap items-center gap-2">
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
                    </div>
                  </LuxuryCard>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </LuxuryBackground>
    </div>
  );
}