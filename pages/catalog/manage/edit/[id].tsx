import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, doc, getDoc, updateDoc, serverTimestamp, getDocs, writeBatch } from 'firebase/firestore';
import { auth, db } from '../../../../lib/firebase';
import { Property, PropertyFormData } from '../../../../types/property';
import { Input } from '../../../../components/ui/input';
import { Label } from '../../../../components/ui/label';
import { Textarea } from '../../../../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../../components/ui/select';
import { Checkbox } from '../../../../components/ui/checkbox';
import { FaArrowRight, FaSave, FaHome, FaImage, FaSort } from 'react-icons/fa';
import LuxuryButton from '../../../../components/ui/luxury-button';
import LuxuryCard from '../../../../components/ui/luxury-card';
import LuxuryBackground from '../../../../components/ui/luxury-background';
import EditMediaUploader from '../../../../components/cloudinary/EditMediaUploader';
import { UploadedMedia, deleteFromCloudinary, uploadToCloudinary } from '../../../../lib/cloudinary';
import { LocalMediaFile } from '../../../../components/cloudinary/LocalMediaUploader';

export default function EditPropertyPage() {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [property, setProperty] = useState<Property | null>(null);

  // All existing media combined: main first, then additional
  const [combinedExistingMedia, setCombinedExistingMedia] = useState<UploadedMedia[]>([]);
  const [newFiles, setNewFiles] = useState<LocalMediaFile[]>([]);
  const [mainMediaIndex, setMainMediaIndex] = useState<number>(0);

  const [catalogProperties, setCatalogProperties] = useState<Array<{ id: string; order?: number }>>([]);
  const [selectedPosition, setSelectedPosition] = useState(1);

  const [removedPublicIds, setRemovedPublicIds] = useState<string[]>([]);
  const [formData, setFormData] = useState<PropertyFormData>({
    title: '',
    type: 'sale',
    category: 'apartment',
    price: 0,
    address: '',
    city: '',
    rooms: 1,
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
    yard: false,
    balconySize: 0,
    contactPhone: '',
    contactEmail: '',
    isSold: false
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
          } else {
            if (id) {
              fetchProperty();
            }
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
  }, [id]);

  const fetchProperty = async () => {
    try {
      if (typeof id !== 'string') return;

      // Fetch all catalog properties for ordering
      const allSnap = await getDocs(collection(db, 'properties'));
      const allProps = allSnap.docs.map(d => ({ id: d.id, order: d.data().order as number | undefined }));
      allProps.sort((a, b) => {
        if (a.order !== undefined && b.order !== undefined) return a.order - b.order;
        if (a.order !== undefined) return -1;
        if (b.order !== undefined) return 1;
        return 0;
      });
      setCatalogProperties(allProps);
      const currentIndex = allProps.findIndex(p => p.id === id);
      setSelectedPosition(currentIndex >= 0 ? currentIndex + 1 : allProps.length);

      const propertyDoc = await getDoc(doc(db, 'properties', id));
      if (propertyDoc.exists()) {
        const propertyData = { id: propertyDoc.id, ...propertyDoc.data() } as Property;
        setProperty(propertyData);

        // Load all media combined: main first, then additional
        const combined: UploadedMedia[] = [];
        if (propertyData.mainImage) {
          combined.push({
            url: propertyData.mainImage,
            publicId: propertyData.mainImagePublicId || '',
            type: propertyData.mainImageType || 'image',
            isTemporary: false
          });
        }
        if (propertyData.images && propertyData.images.length > 0) {
          propertyData.images.forEach((url, index) => {
            combined.push({
              url,
              publicId: propertyData.imagePublicIds?.[index] || '',
              type: url.includes('/video/') ? 'video' : 'image',
              isTemporary: false
            });
          });
        }
        setCombinedExistingMedia(combined);
        setMainMediaIndex(0);

        setFormData({
          title: propertyData.title,
          type: propertyData.type,
          category: propertyData.category === 'all' ? 'apartment' : propertyData.category,
          price: propertyData.price,
          address: propertyData.address,
          city: propertyData.city,
          rooms: propertyData.rooms,
          floor: propertyData.floor,
          size: propertyData.size,
          balcony: propertyData.balcony,
          parking: propertyData.parking,
          elevator: propertyData.elevator,
          storage: propertyData.storage || false,
          accessibility: propertyData.accessibility || false,
          renovated: propertyData.renovated || false,
          furnished: propertyData.furnished || false,
          airConditioned: propertyData.airConditioned || false,
          secure: propertyData.secure || false,
          immediate: propertyData.immediate || false,
          description: propertyData.description,
          images: propertyData.images,
          isNew: propertyData.isNew || false,
          isDeal: propertyData.isDeal || false,
          isDiscounted: propertyData.isDiscounted || false,
          propertyType: propertyData.propertyType || '',
          mamad: propertyData.mamad || false,
          nof: propertyData.nof || false,
          nofLayam: propertyData.nofLayam || false,
          masterRoom: propertyData.masterRoom || false,
          closetRoom: propertyData.closetRoom || false,
          yard: propertyData.yard || false,
          balconySize: propertyData.balconySize || 0,
          isSold: propertyData.isSold || false
        });
      } else {
        router.push('/catalog/manage');
      }
    } catch (error) {
      console.error('Error fetching property:', error);
      router.push('/catalog/manage');
    }
  };

  const handleInputChange = (field: keyof PropertyFormData, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Handler for removing existing media
  const handleRemoveExistingMedia = (index: number) => {
    const media = combinedExistingMedia[index];
    if (media && media.publicId) {
      setRemovedPublicIds(prev => [...prev, media.publicId]);
    }
    setCombinedExistingMedia(prev => prev.filter((_, idx) => idx !== index));
    if (index === mainMediaIndex) {
      setMainMediaIndex(0);
    } else if (index < mainMediaIndex) {
      setMainMediaIndex(mainMediaIndex - 1);
    }
  };

  // Handler for reordering existing media
  const handleReorderExistingMedia = (reorderedMedia: UploadedMedia[]) => {
    if (mainMediaIndex < combinedExistingMedia.length) {
      const prevMainPublicId = combinedExistingMedia[mainMediaIndex].publicId;
      const newMainIndex = reorderedMedia.findIndex(m => m.publicId === prevMainPublicId);
      if (newMainIndex !== -1) setMainMediaIndex(newMainIndex);
    }
    setCombinedExistingMedia(reorderedMedia);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      if (typeof id !== 'string') return;

      // Step 1: Delete removed media from Cloudinary
      if (removedPublicIds.length > 0) {
        try {
          await deleteFromCloudinary(removedPublicIds);
        } catch (deleteError) {
          console.error('Error deleting old media:', deleteError);
        }
      }

      // Step 2: Upload all new files
      const uploadedNewFiles: { url: string; publicId: string; type: 'image' | 'video' }[] = [];
      for (const mediaFile of newFiles) {
        const uploaded = await uploadToCloudinary(mediaFile.file);
        uploadedNewFiles.push(uploaded);
      }

      // Step 3: Determine main and additional from the combined array
      const allMedia = [
        ...combinedExistingMedia.map(m => ({ url: m.url, publicId: m.publicId, type: m.type as 'image' | 'video' })),
        ...uploadedNewFiles
      ];
      let finalMainImageUrl: string | undefined;
      let finalMainImageType: 'image' | 'video' | undefined;
      let finalMainImagePublicId: string | undefined;
      const finalAdditionalMedia: { url: string; publicId: string }[] = [];

      if (allMedia.length > 0) {
        const safeMainIndex = Math.max(0, Math.min(mainMediaIndex, allMedia.length - 1));
        allMedia.forEach((m, idx) => {
          if (idx === safeMainIndex) {
            finalMainImageUrl = m.url;
            finalMainImageType = m.type;
            finalMainImagePublicId = m.publicId;
          } else {
            finalAdditionalMedia.push({ url: m.url, publicId: m.publicId });
          }
        });
      }

      // Step 5: Normalize all catalog orders and move this property to selectedPosition.
      // Always normalize (not just when position changes) so that any properties
      // lacking an order field get sequential integers matching their display position.
      const currentIndex = catalogProperties.findIndex(p => p.id === id);
      const insertIndex = selectedPosition - 1;

      const reordered = [...catalogProperties];
      if (currentIndex >= 0) reordered.splice(currentIndex, 1);
      reordered.splice(insertIndex, 0, { id: id as string, order: insertIndex });

      const batch = writeBatch(db);
      reordered.forEach((p, idx) => {
        if (p.id !== id && p.order !== idx) {
          batch.update(doc(db, 'properties', p.id), { order: idx });
        }
      });
      await batch.commit();
      const newOrder = insertIndex;

      // Step 6: Prepare property data with final media
      const propertyData = {
        ...formData,
        order: newOrder,
        mainImage: finalMainImageUrl,
        mainImageType: finalMainImageType,
        mainImagePublicId: finalMainImagePublicId,
        images: finalAdditionalMedia.map(media => media.url),
        imagePublicIds: finalAdditionalMedia.map(media => media.publicId),
        updatedAt: serverTimestamp()
      };

      await updateDoc(doc(db, 'properties', id), propertyData);
      alert('הנכס עודכן בהצלחה!');
      router.push('/catalog/manage');
    } catch (error) {
      console.error('Error updating property:', error);
      alert('שגיאה בעדכון הנכס, נסה שוב');
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

  if (!property) {
    return (
      <LuxuryBackground variant="light" className="flex min-h-screen items-center justify-center pt-20">
        <div className="container mx-auto px-6 text-center">
          <LuxuryCard className="py-20 px-8">
            <FaHome className="mx-auto mb-6 h-24 w-24" style={{ color: "rgba(25,39,74,0.3)" }} />
            <h1 className="text-3xl font-serif font-bold mb-4" style={{ color: "rgba(25,39,74,0.97)" }}>
              הנכס לא נמצא
            </h1>
            <p className="text-lg mb-8" style={{ color: "rgba(25,39,74,0.7)" }}>
              הנכס שחיפשת אינו קיים או שהוסר מהמערכת
            </p>
            <LuxuryButton href="/catalog/manage">חזור לניהול</LuxuryButton>
          </LuxuryCard>
        </div>
      </LuxuryBackground>
    );
  }

  return (
    <div dir="rtl" className="min-h-screen bg-white">
      {/* Hero Section */}
      <LuxuryBackground variant="hero" className="flex min-h-[60vh] items-center justify-center pt-20">
        <div className="container relative z-10 mx-auto px-6 py-16 text-center">
          <h1 className="mb-6 font-serif text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl drop-shadow-2xl"
              style={{ textShadow: "0 4px 20px rgba(0,0,0,0.3), 0 2px 10px rgba(199,157,42,0.2)" }}>
            ערוך נכס
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-white/90 md:text-2xl font-medium drop-shadow-lg">
            עדכן את פרטי הנכס: {property.title}
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
                        קבע היכן הנכס יופיע בין {catalogProperties.length} הנכסים בקטלוג
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
                      {Array.from({ length: catalogProperties.length }, (_, i) => i + 1).map((pos) => {
                        const ordinals = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שביעי', 'שמיני', 'תשיעי', 'עשירי'];
                        const label = ordinals[pos - 1] ?? `${pos}`;
                        const total = catalogProperties.length;
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
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Checkbox
                      id="yard"
                      checked={formData.yard}
                      onCheckedChange={(checked) => handleInputChange('yard', checked)}
                    />
                    <Label htmlFor="yard">חצר</Label>
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
                  <div>
                    <Label htmlFor="isSold">האם נמכר</Label>
                    <Select value={formData.isSold ? 'yes' : 'no'} onValueChange={(value) => handleInputChange('isSold', value === 'yes')}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="האם נמכר?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="no">לא</SelectItem>
                        <SelectItem value="yes">כן</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </LuxuryCard>

            {/* Media */}
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
                  תמונות/סרטונים
                </h3>
                <p className="text-base mt-2" style={{ color: "rgba(25,39,74,0.6)" }}>
                  העלה את כל התמונות והסרטונים. לחץ על תמונה כדי להגדירה כראשית.
                </p>
              </div>
              <EditMediaUploader
                maxFiles={21}
                existingMedia={combinedExistingMedia}
                onExistingMediaRemove={handleRemoveExistingMedia}
                onExistingMediaReorder={handleReorderExistingMedia}
                newFiles={newFiles}
                onNewFilesChange={setNewFiles}
                mainIndex={mainMediaIndex}
                onSetMainIndex={setMainMediaIndex}
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
                {submitting ? 'מעדכן נכס...' : 'עדכן נכס'}
              </LuxuryButton>
            </div>
          </form>
        </div>
      </LuxuryBackground>
    </div>
  );
} 