import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { onAuthStateChanged, User } from 'firebase/auth';
import { collection, addDoc, serverTimestamp, getDocs, getDoc, doc, writeBatch } from 'firebase/firestore';
import { auth, db } from '../../../lib/firebase';
import { PropertyFormData } from '../../../types/property';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { Textarea } from '../../../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select';
import { Checkbox } from '../../../components/ui/checkbox';
import { FaArrowRight, FaSave, FaHome, FaImage, FaSort } from 'react-icons/fa';
import Link from 'next/link';
import LuxuryButton from '../../../components/ui/luxury-button';
import LuxuryCard from '../../../components/ui/luxury-card';
import LuxuryBackground from '../../../components/ui/luxury-background';
import LocalMediaUploader, { LocalMediaFile } from '../../../components/cloudinary/LocalMediaUploader';
import { uploadToCloudinary } from '../../../lib/cloudinary';

export default function AddPropertyPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [mainMediaFiles, setMainMediaFiles] = useState<LocalMediaFile[]>([]);
  const [additionalMediaFiles, setAdditionalMediaFiles] = useState<LocalMediaFile[]>([]);
  const [catalogProperties, setCatalogProperties] = useState<Array<{ id: string; order?: number }>>([]);
  const [selectedPosition, setSelectedPosition] = useState(1);
  const [formData, setFormData] = useState<PropertyFormData>({
    title: '',
    type: 'sale',
    category: 'apartment',
    price: 0,
    address: '',
    city: 'אילת',
    rooms: 3,
    floor: 1,
    size: 0,
    balcony: false,
    parking: false,
    elevator: false,
    storage: false,
    accessibility: false,
    renovated: false,
    furnished: false,
    airConditioned: false,
    secure: false,
    immediate: false,
    description: '',
    images: [],
    isNew: false,
    isDeal: false,
    isDiscounted: false,
    propertyType: '',
    mamad: false,
    nof: false,
    nofLayam: false,
    masterRoom: false,
    closetRoom: false,
    balconySize: 0
  });

  const fetchCatalogProperties = async () => {
    try {
      const snap = await getDocs(collection(db, 'properties'));
      const props = snap.docs.map(d => ({ id: d.id, order: d.data().order as number | undefined }));
      props.sort((a, b) => {
        if (a.order !== undefined && b.order !== undefined) return a.order - b.order;
        if (a.order !== undefined) return -1;
        if (b.order !== undefined) return 1;
        return 0;
      });
      setCatalogProperties(props);
      setSelectedPosition(1);
    } catch (err) {
      console.error('Error fetching catalog properties:', err);
    }
  };

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
          } else {
            fetchCatalogProperties();
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Upload main media to Cloudinary if exists
      let mainImageUrl: string | undefined;
      let mainImageType: 'image' | 'video' | undefined;
      let mainImagePublicId: string | undefined;

      if (mainMediaFiles.length > 0) {
        const mainMedia = await uploadToCloudinary(mainMediaFiles[0].file);
        mainImageUrl = mainMedia.url;
        mainImageType = mainMedia.type;
        mainImagePublicId = mainMedia.publicId;
      }

      // Upload additional media to Cloudinary
      const uploadedAdditionalMedia = [];
      for (const mediaFile of additionalMediaFiles) {
        const uploadedMedia = await uploadToCloudinary(mediaFile.file);
        uploadedAdditionalMedia.push(uploadedMedia);
      }

      // Normalize all existing properties to sequential ints and make room for the new one.
      // Using idx (sorted display position) as the authoritative order, not p.order,
      // because some properties may lack an order field and would otherwise sort
      // after all ordered items even if intended to appear last.
      const insertIndex = selectedPosition - 1;
      if (catalogProperties.length > 0) {
        const batch = writeBatch(db);
        catalogProperties.forEach((p, idx) => {
          const normalizedOrder = idx >= insertIndex ? idx + 1 : idx;
          if (p.order !== normalizedOrder) {
            batch.update(doc(db, 'properties', p.id), { order: normalizedOrder });
          }
        });
        await batch.commit();
      }
      const newOrder = insertIndex;

      // Prepare property data with uploaded media URLs and public IDs
      const propertyData = {
        ...formData,
        order: newOrder,
        mainImage: mainImageUrl,
        mainImageType: mainImageType,
        mainImagePublicId: mainImagePublicId,
        images: uploadedAdditionalMedia.map(media => media.url),
        imagePublicIds: uploadedAdditionalMedia.map(media => media.publicId),
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      };

      await addDoc(collection(db, 'properties'), propertyData);
      alert('הנכס נוסף בהצלחה!');
      router.push('/catalog/manage');
    } catch (error) {
      console.error('Error adding property:', error);
      alert('שגיאה בהוספת הנכס, נסה שוב');
    } finally {
      setSubmitting(false);
    }
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

  return (
    <div dir="rtl" className="min-h-screen bg-white">
      {/* Hero Section */}
      <LuxuryBackground variant="hero" className="flex min-h-[60vh] items-center justify-center pt-20">
        <div className="container relative z-10 mx-auto px-6 py-16 text-center">
          <h1 className="mb-6 font-serif text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl drop-shadow-2xl"
              style={{ textShadow: "0 4px 20px rgba(0,0,0,0.3), 0 2px 10px rgba(199,157,42,0.2)" }}>
            הוסף נכס חדש
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-white/90 md:text-2xl font-medium drop-shadow-lg">
            מלא את הפרטים להלן כדי להוסיף נכס חדש לקטלוג
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
          {/* Back Button */}
          <div className="mb-8">
            <LuxuryButton variant="secondary" href="/catalog/manage">
              <FaArrowRight className="h-4 w-4" />
              חזור לניהול
            </LuxuryButton>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Information */}
            <LuxuryCard hoverable={false}>
              <div className="mb-6">
                <h3 className="text-2xl font-serif font-bold flex items-center gap-3" style={{ color: "rgba(25,39,74,0.97)" }}>
                  <div className="p-2 rounded-full"
                       style={{
                         background: "linear-gradient(135deg, rgba(199,157,42,0.1) 0%, rgba(255,255,255,0.9) 100%)",
                         border: "2px solid rgba(199,157,42,0.3)",
                       }}>
                    <FaHome className="h-5 w-5" style={{ color: "rgba(25,39,74,0.97)" }} />
                  </div>
                  מידע בסיסי
                </h3>
              </div>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="title">כותרת הנכס *</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => handleInputChange('title', e.target.value)}
                      placeholder="כותרת הנכס"
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="type">סוג עסקה *</Label>
                    <Select value={formData.type} onValueChange={(value) => handleInputChange('type', value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="בחר סוג עסקה" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sale">למכירה</SelectItem>
                        <SelectItem value="rent">להשכרה</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="category">קטגוריה *</Label>
                    <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="בחר קטגוריה" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="apartment">דירות</SelectItem>
                        <SelectItem value="house">בתים</SelectItem>
                        <SelectItem value="penthouse">פנטהאוזים</SelectItem>
                        <SelectItem value="garden">דירות גן</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="price">מחיר *</Label>
                    <Input
                      id="price"
                      type="number"
                      value={formData.price}
                      onChange={(e) => handleInputChange('price', Number(e.target.value))}
                      placeholder="מחיר"
                      required
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="address">כתובת *</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      placeholder="כתובת"
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="city">עיר *</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      placeholder="עיר"
                      required
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <Label htmlFor="rooms">מספר חדרים *</Label>
                    <Input
                      id="rooms"
                      type="number"
                      value={formData.rooms}
                      onChange={(e) => handleInputChange('rooms', Number(e.target.value))}
                      placeholder="מספר חדרים"
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="floor">קומה *</Label>
                    <Input
                      id="floor"
                      type="number"
                      value={formData.floor}
                      onChange={(e) => handleInputChange('floor', Number(e.target.value))}
                      placeholder="קומה"
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="size">גודל (מ"ר) *</Label>
                    <Input
                      id="size"
                      type="number"
                      value={formData.size}
                      onChange={(e) => handleInputChange('size', Number(e.target.value))}
                      placeholder="גודל"
                      required
                      className="mt-2"
                    />
                  </div>
                </div>

                {/* Position in catalog */}
                <div className="pt-2 border-t" style={{ borderColor: "rgba(25,39,74,0.08)" }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-full"
                         style={{
                           background: "linear-gradient(135deg, rgba(199,157,42,0.1) 0%, rgba(255,255,255,0.9) 100%)",
                           border: "2px solid rgba(199,157,42,0.3)",
                         }}>
                      <FaSort className="h-4 w-4" style={{ color: "rgba(25,39,74,0.97)" }} />
                    </div>
                    <div>
                      <Label className="text-base font-semibold" style={{ color: "rgba(25,39,74,0.97)" }}>
                        מיקום בקטלוג
                      </Label>
                      <p className="text-sm mt-0.5" style={{ color: "rgba(25,39,74,0.5)" }}>
                        קבע היכן הנכס יופיע בין {catalogProperties.length + 1} הנכסים בקטלוג
                      </p>
                    </div>
                  </div>
                  <Select
                    value={String(selectedPosition)}
                    onValueChange={(v) => setSelectedPosition(Number(v))}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="בחר מיקום" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: catalogProperties.length + 1 }, (_, i) => i + 1).map((pos) => {
                        const ordinals = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שביעי', 'שמיני', 'תשיעי', 'עשירי'];
                        const label = ordinals[pos - 1] ?? `${pos}`;
                        const total = catalogProperties.length + 1;
                        const suffix = pos === 1 ? ' — יוצג ראשון' : pos === total ? ' — יוצג אחרון' : '';
                        return (
                          <SelectItem key={pos} value={String(pos)}>
                            מיקום {pos} ({label}){suffix}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </LuxuryCard>

            {/* Features */}
            <LuxuryCard hoverable={false}>
              <div className="mb-6">
                <h3 className="text-2xl font-serif font-bold" style={{ color: "rgba(25,39,74,0.97)" }}>מאפיינים</h3>
              </div>
              <div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Checkbox
                      id="storage"
                      checked={formData.storage}
                      onCheckedChange={(checked) => handleInputChange('storage', checked)}
                    />
                    <Label htmlFor="storage">מחסן</Label>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Checkbox
                      id="accessibility"
                      checked={formData.accessibility}
                      onCheckedChange={(checked) => handleInputChange('accessibility', checked)}
                    />
                    <Label htmlFor="accessibility">גישה לנכים</Label>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Checkbox
                      id="renovated"
                      checked={formData.renovated}
                      onCheckedChange={(checked) => handleInputChange('renovated', checked)}
                    />
                    <Label htmlFor="renovated">משופץ</Label>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Checkbox
                      id="furnished"
                      checked={formData.furnished}
                      onCheckedChange={(checked) => handleInputChange('furnished', checked)}
                    />
                    <Label htmlFor="furnished">מרוהט</Label>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Checkbox
                      id="airConditioned"
                      checked={formData.airConditioned}
                      onCheckedChange={(checked) => handleInputChange('airConditioned', checked)}
                    />
                    <Label htmlFor="airConditioned">מיזוג</Label>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Checkbox
                      id="secure"
                      checked={formData.secure}
                      onCheckedChange={(checked) => handleInputChange('secure', checked)}
                    />
                    <Label htmlFor="secure">אבטחה 24/7</Label>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Checkbox
                      id="immediate"
                      checked={formData.immediate}
                      onCheckedChange={(checked) => handleInputChange('immediate', checked)}
                    />
                    <Label htmlFor="immediate">כניסה מיידית</Label>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Checkbox
                      id="mamad"
                      checked={formData.mamad}
                      onCheckedChange={(checked) => handleInputChange('mamad', checked)}
                    />
                    <Label htmlFor="mamad">ממ"ד</Label>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Checkbox
                      id="nof"
                      checked={formData.nof}
                      onCheckedChange={(checked) => handleInputChange('nof', checked)}
                    />
                    <Label htmlFor="nof">נוף</Label>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Checkbox
                      id="nofLayam"
                      checked={formData.nofLayam}
                      onCheckedChange={(checked) => handleInputChange('nofLayam', checked)}
                    />
                    <Label htmlFor="nofLayam">נוף לים</Label>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Checkbox
                      id="masterRoom"
                      checked={formData.masterRoom}
                      onCheckedChange={(checked) => handleInputChange('masterRoom', checked)}
                    />
                    <Label htmlFor="masterRoom">חדר מאסטר</Label>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Checkbox
                      id="closetRoom"
                      checked={formData.closetRoom}
                      onCheckedChange={(checked) => handleInputChange('closetRoom', checked)}
                    />
                    <Label htmlFor="closetRoom">חדר ארונות</Label>
                  </div>
                </div>
              </div>
            </LuxuryCard>

            {/* Special Tags */}
            <LuxuryCard hoverable={false}>
              <div className="mb-6">
                <h3 className="text-2xl font-serif font-bold" style={{ color: "rgba(25,39,74,0.97)" }}>תגיות מיוחדות</h3>
              </div>
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Checkbox
                      id="isNew"
                      checked={formData.isNew}
                      onCheckedChange={(checked) => handleInputChange('isNew', checked)}
                    />
                    <Label htmlFor="isNew">נכס חדש</Label>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Checkbox
                      id="isDeal"
                      checked={formData.isDeal}
                      onCheckedChange={(checked) => handleInputChange('isDeal', checked)}
                    />
                    <Label htmlFor="isDeal">מציאה</Label>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Checkbox
                      id="isDiscounted"
                      checked={formData.isDiscounted}
                      onCheckedChange={(checked) => handleInputChange('isDiscounted', checked)}
                    />
                    <Label htmlFor="isDiscounted">הוזל לאחרונה</Label>
                  </div>
                  <div>
                    <Label htmlFor="propertyType">סוג נכס מיוחד</Label>
                    <Input
                      id="propertyType"
                      value={formData.propertyType}
                      onChange={(e) => handleInputChange('propertyType', e.target.value)}
                      placeholder="סוג נכס מיוחד"
                      className="mt-2"
                    />
                  </div>
                </div>
              </div>
            </LuxuryCard>

            {/* Main Media */}
            <LuxuryCard hoverable={false}>
              <div className="mb-6">
                <h3 className="text-2xl font-serif font-bold flex items-center gap-3" style={{ color: "rgba(25,39,74,0.97)" }}>
                  <div className="p-2 rounded-full"
                       style={{
                         background: "linear-gradient(135deg, rgba(199,157,42,0.1) 0%, rgba(255,255,255,0.9) 100%)",
                         border: "2px solid rgba(199,157,42,0.3)",
                       }}>
                    <FaImage className="h-5 w-5" style={{ color: "rgba(25,39,74,0.97)" }} />
                  </div>
                  תמונה/וידאו ראשיים
                </h3>
                <p className="text-base mt-2" style={{ color: "rgba(25,39,74,0.6)" }}>
                  תמונה או סרטון ראשי שיוצג בכרטיס הנכס ובראש עמוד הפרטים
                </p>
              </div>
              <LocalMediaUploader
                mode="main"
                maxFiles={1}
                currentFiles={mainMediaFiles}
                onFilesChange={setMainMediaFiles}
              />
            </LuxuryCard>

            {/* Additional Media */}
            <LuxuryCard hoverable={false}>
              <div className="mb-6">
                <h3 className="text-2xl font-serif font-bold flex items-center gap-3" style={{ color: "rgba(25,39,74,0.97)" }}>
                  <div className="p-2 rounded-full"
                       style={{
                         background: "linear-gradient(135deg, rgba(199,157,42,0.1) 0%, rgba(255,255,255,0.9) 100%)",
                         border: "2px solid rgba(199,157,42,0.3)",
                       }}>
                    <FaImage className="h-5 w-5" style={{ color: "rgba(25,39,74,0.97)" }} />
                  </div>
                  תמונות/סרטונים נוספים
                </h3>
                <p className="text-base mt-2" style={{ color: "rgba(25,39,74,0.6)" }}>
                  תמונות וסרטונים נוספים שיוצגו בגלריית הנכס (עד 20 קבצים)
                </p>
              </div>
              <LocalMediaUploader
                mode="additional"
                maxFiles={20}
                currentFiles={additionalMediaFiles}
                onFilesChange={setAdditionalMediaFiles}
              />
            </LuxuryCard>

            {/* Description */}
            <LuxuryCard hoverable={false}>
              <div className="mb-6">
                <h3 className="text-2xl font-serif font-bold" style={{ color: "rgba(25,39,74,0.97)" }}>תיאור הנכס</h3>
              </div>
              <Textarea
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="תיאור מפורט של הנכס..."
                rows={6}
                required
              />
            </LuxuryCard>

            {/* Submit Button */}
            <div className="flex justify-center">
              <LuxuryButton
                type="submit"
                disabled={submitting}
                size="large"
              >
                <FaSave className="h-5 w-5" />
                {submitting ? 'מוסיף נכס...' : 'הוסף נכס'}
              </LuxuryButton>
            </div>
          </form>
        </div>
      </LuxuryBackground>
    </div>
  );
} 