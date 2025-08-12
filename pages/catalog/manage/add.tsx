import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { onAuthStateChanged, User } from 'firebase/auth';
import { collection, addDoc, serverTimestamp, query, where, getDocs, getDoc, doc } from 'firebase/firestore';
import { auth, db } from '../../../lib/firebase';
import { PropertyFormData } from '../../../types/property';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { Textarea } from '../../../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select';
import { Checkbox } from '../../../components/ui/checkbox';
import { FaArrowRight, FaPlus, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

export default function AddPropertyPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState<PropertyFormData>({
    title: '',
    type: 'sale',
    price: 0,
    address: '',
    city: '',
    rooms: 1,
    floor: 1,
    size: 0,
    balcony: false,
    parking: false,
    elevator: false,
    description: '',
    images: []
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        // Check if user exists in users collection and is admin
        // 👇 Check role from Firestore
        const userDocRef = doc(db, "users", firebaseUser.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const isAdmin = userDocSnap.data().isAdmin;
          if (!isAdmin) {
            router.push('/catalog/manage');
          }
        } else {
          router.push('/catalog/manage');
        }
      } else {
        router.push('/catalog/manage');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleInputChange = (field: keyof PropertyFormData, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleImageAdd = () => {
    const imageUrl = prompt('הכנס כתובת URL של התמונה:');
    if (imageUrl && imageUrl.trim()) {
      setFormData(prev => ({
        ...prev,
        images: [...prev.images, imageUrl.trim()]
      }));
    }
  };

  const handleImageRemove = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const propertyData = {
        ...formData,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      };

      await addDoc(collection(db, 'properties'), propertyData);
      router.push('/catalog/manage');
    } catch (error) {
      console.error('Error adding property:', error);
      alert('שגיאה בהוספת הנכס. נסה שוב.');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div dir="rtl" className="min-h-screen bg-white p-8 pt-32">
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
            <div className="space-y-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-12 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div dir="rtl" className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4">
            <Link href="/catalog/manage">
              <Button variant="ghost" className="flex items-center gap-2">
                <FaArrowRight className="h-4 w-4" />
                חזור לניהול
              </Button>
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">הוסף נכס חדש</h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardHeader>
            <CardTitle>פרטי הנכס</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="title">כותרת הנכס *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    placeholder="למשל: דירת 3 חדרים באבן גבירול"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="type">סוג הנכס *</Label>
                  <Select value={formData.type} onValueChange={(value) => handleInputChange('type', value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sale">למכירה</SelectItem>
                      <SelectItem value="rent">להשכרה</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="price">מחיר (בשקלים) *</Label>
                  <Input
                    id="price"
                    type="number"
                    value={formData.price}
                    onChange={(e) => handleInputChange('price', parseInt(e.target.value) || 0)}
                    placeholder="1000000"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="city">עיר *</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    placeholder="אילת"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="address">כתובת *</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    placeholder="רחוב הראשי 123"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="rooms">מספר חדרים *</Label>
                  <Input
                    id="rooms"
                    type="number"
                    min="1"
                    value={formData.rooms}
                    onChange={(e) => handleInputChange('rooms', parseInt(e.target.value) || 1)}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="floor">קומה *</Label>
                  <Input
                    id="floor"
                    type="number"
                    min="0"
                    value={formData.floor}
                    onChange={(e) => handleInputChange('floor', parseInt(e.target.value) || 1)}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="size">גודל (מ"ר) *</Label>
                  <Input
                    id="size"
                    type="number"
                    min="1"
                    value={formData.size}
                    onChange={(e) => handleInputChange('size', parseInt(e.target.value) || 0)}
                    placeholder="80"
                    required
                  />
                </div>
              </div>

              {/* Amenities */}
              <div>
                <Label className="text-base font-medium">שירותים ונוחות</Label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Checkbox
                      id="balcony"
                      checked={formData.balcony}
                      onCheckedChange={(checked) => handleInputChange('balcony', checked)}
                    />
                    <Label htmlFor="balcony">מרפסת</Label>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Checkbox
                      id="parking"
                      checked={formData.parking}
                      onCheckedChange={(checked) => handleInputChange('parking', checked)}
                    />
                    <Label htmlFor="parking">חניה</Label>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Checkbox
                      id="elevator"
                      checked={formData.elevator}
                      onCheckedChange={(checked) => handleInputChange('elevator', checked)}
                    />
                    <Label htmlFor="elevator">מעלית</Label>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <Label htmlFor="description">תיאור הנכס *</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder="תאר את הנכס, המיקום, השירותים הקרובים..."
                  rows={6}
                  required
                />
              </div>

              {/* Images */}
              <div>
                <Label>תמונות</Label>
                <div className="mt-2 space-y-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleImageAdd}
                    className="flex items-center gap-2"
                  >
                    <FaPlus className="h-4 w-4" />
                    הוסף תמונה
                  </Button>
                  
                  {formData.images.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {formData.images.map((image, index) => (
                        <div key={index} className="relative">
                          <img
                            src={image}
                            alt={`תמונה ${index + 1}`}
                            className="w-full h-32 object-cover rounded-lg"
                          />
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => handleImageRemove(index)}
                            className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                          >
                            <FaTimes className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Submit */}
              <div className="flex items-center gap-4 pt-6">
                <Button type="submit" disabled={submitting}>
                  {submitting ? 'מוסיף נכס...' : 'הוסף נכס'}
                </Button>
                <Link href="/catalog/manage">
                  <Button type="button" variant="outline">
                    ביטול
                  </Button>
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 