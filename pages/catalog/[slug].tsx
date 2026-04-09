import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../lib/firebase"
import { Property } from "../../types/property"
import { motion } from "framer-motion"
import Head from "next/head"
import Link from "next/link"
import LuxuryBackground from "@/components/ui/luxury-background"
import LuxuryCard from "@/components/ui/luxury-card"
import LuxuryButton from "@/components/ui/luxury-button"
import { businessStaticData } from "@/config"
import {
  FaArrowRight,
  FaMapMarkerAlt,
  FaBed,
  FaRulerCombined,
  FaHome,
  FaCar,
  FaCheck,
  FaPhone,
  FaLink,
  FaWhatsapp,
  FaBuilding,
  FaChevronLeft,
  FaChevronRight,
  FaPlay,
} from "react-icons/fa"

const propertyFeatures = {
  elevator: "מעלית",
  parking: "חניה",
  balcony: "מרפסת",
  storage: "מחסן",
  accessibility: "גישה לנכים",
  renovated: "משופצת",
  furnished: "מרוהטת",
  airConditioned: "מיזוג",
  mamad: 'ממ"ד',
  immediate: "כניסה מיידית",
  yard: "חצר",
} as const

export default function PropertyDetailPage() {
  const router = useRouter()
  const { slug } = router.query
  const [property, setProperty] = useState<Property | null>(null)
  const [loading, setLoading] = useState(true)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Helper functions for media
  const isVideo = (url: string) => {
    return /\.(mp4|mov|avi|webm)$/i.test(url) || url.includes('/video/')
  }

  const getAllMedia = () => {
    if (!property) return []
    const media = []
    if (property.mainImage) {
      media.push({ url: property.mainImage, type: property.mainImageType || 'image' })
    }
    if (property.images && property.images.length > 0) {
      property.images.forEach(url => {
        media.push({ url, type: isVideo(url) ? 'video' : 'image' })
      })
    }
    return media
  }

  const currentMedia = getAllMedia()
  const totalMedia = currentMedia.length

  useEffect(() => {
    if (slug) {
      fetchProperty()
    }
    // eslint-disable-next-line
  }, [slug])

  const fetchProperty = async () => {
    try {
      if (typeof slug !== "string") return
      const propertyDoc = await getDoc(doc(db, "properties", slug))
      if (propertyDoc.exists()) {
        setProperty({ id: propertyDoc.id, ...propertyDoc.data() } as Property)
      } else {
        router.push("/catalog")
      }
    } catch (error) {
      console.error("Error fetching property:", error)
      router.push("/catalog")
    } finally {
      setLoading(false)
    }
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("he-IL").format(price)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === currentMedia.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? currentMedia.length - 1 : prev - 1))
  }

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    alert("הקישור הועתק ללוח!")
  }

  if (loading) {
    return (
      <>
        <Head>
          <title>טוען נכס... - Keyhouse</title>
        </Head>
        <LuxuryBackground variant="hero" className="flex min-h-screen items-center justify-center pt-20">
          <div className="flex flex-col items-center gap-4">
            <div
              className="h-16 w-16 animate-spin rounded-full border-4 border-transparent"
              style={{
                borderTopColor: "#c79d2a",
                borderRightColor: "rgba(199,157,42,0.3)",
              }}
            />
            <p className="text-xl font-medium" style={{ color: "#ffffff" }}>
              טוען פרטי נכס...
            </p>
          </div>
        </LuxuryBackground>
      </>
    )
  }

  if (!property) {
    return (
      <>
        <Head>
          <title>נכס לא נמצא - Keyhouse</title>
        </Head>
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
              <Link href="/catalog">
                <LuxuryButton>חזור לקטלוג</LuxuryButton>
              </Link>
            </LuxuryCard>
          </div>
        </LuxuryBackground>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>{property.title} - Keyhouse</title>
        <meta name="description" content={`${property.title} - ${property.address}, ${property.city}. ${property.description?.substring(0, 150)}...`} />
      </Head>

      {/* Hero Section */}
      <LuxuryBackground variant="hero" className="flex min-h-[50vh] items-center justify-center pt-20">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold mb-6 leading-tight"
              style={{
                color: "#ffffff",
                textShadow: "0 4px 20px rgba(0,0,0,0.3), 0 2px 10px rgba(199,157,42,0.2)",
              }}
            >
              {property.title}
            </h1>

            <div className="flex items-center justify-center gap-2 mb-6 text-xl" style={{ color: "rgba(255,255,255,0.95)" }}>
              <FaMapMarkerAlt className="h-5 w-5" style={{ color: "#c79d2a" }} />
              {property.address}, {property.city}
            </div>

            <div className="text-4xl font-bold mb-4" style={{ color: "rgba(255,255,255,0.9)" }}>
              ₪{formatPrice(property.price)}
              {property.type === "rent" && (
                <span className="text-xl font-normal" style={{ color: "rgba(255,255,255,0.9)" }}>
                  {" "}
                  לחודש
                </span>
              )}
            </div>

            <div
              className="mx-auto h-2 w-32 rounded-full"
              style={{
                background: "linear-gradient(90deg, #c79d2a 0%, rgba(199,157,42,0.4) 50%, #c79d2a 100%)",
                boxShadow: "0 4px 20px rgba(199,157,42,0.35)",
              }}
            />
          </motion.div>
        </div>
      </LuxuryBackground>

      {/* Main Content */}
      <LuxuryBackground variant="light" className="py-24">
        <div className="container mx-auto px-6 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Carousel and Map */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <div className="space-y-8">
                <div className="relative group">
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                    <div className="relative bg-white p-4 rounded-3xl">
                      {currentMedia[currentImageIndex]?.type === 'video' ? (
                        <video
                          src={currentMedia[currentImageIndex]?.url}
                          controls
                          className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-2xl transition-all duration-500"
                          style={{
                            boxShadow: "0 20px 50px rgba(25,39,74,0.15), inset 0 1px 0 rgba(255,255,255,0.6)",
                          }}
                        />
                      ) : (
                        <img
                          src={currentMedia[currentImageIndex]?.url || "/images/image2.jpg"}
                          alt={property.title}
                          className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-2xl transition-all duration-500"
                          style={{
                            boxShadow: "0 20px 50px rgba(25,39,74,0.15), inset 0 1px 0 rgba(255,255,255,0.6)",
                          }}
                        />
                      )}
                    </div>
                  </div>

                  {/* Navigation Arrows */}
                  {currentMedia.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute top-1/2 right-8 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                        style={{
                          background: "linear-gradient(135deg, rgba(199,157,42,0.9) 0%, rgba(199,157,42,0.7) 100%)",
                          boxShadow: "0 4px 12px rgba(199,157,42,0.4)",
                        }}
                      >
                        <FaChevronRight className="h-6 w-6" style={{ color: "#ffffff" }} />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute top-1/2 left-8 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                        style={{
                          background: "linear-gradient(135deg, rgba(199,157,42,0.9) 0%, rgba(199,157,42,0.7) 100%)",
                          boxShadow: "0 4px 12px rgba(199,157,42,0.4)",
                        }}
                      >
                        <FaChevronLeft className="h-6 w-6" style={{ color: "#ffffff" }} />
                      </button>
                    </>
                  )}

                  {/* Sold ribbon */}
                  {property.isSold && (
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-10">
                      <div
                        className="absolute font-bold text-sm tracking-widest text-white text-center"
                        style={{
                          background: "rgba(185, 28, 28, 0.92)",
                          width: "200px",
                          top: "36px",
                          right: "-52px",
                          transform: "rotate(45deg)",
                          boxShadow: "0 2px 10px rgba(185,28,28,0.5)",
                          padding: "8px 0",
                        }}
                      >
                        נמכר!
                      </div>
                    </div>
                  )}

                  {/* Badges */}
                  <div className="absolute top-8 right-8 flex gap-2">
                    <span
                      className="px-4 py-2 rounded-full text-sm font-bold"
                      style={{
                        backgroundColor: property.type === "sale" ? "#22c55e" : "#3b82f6",
                        color: "#ffffff",
                      }}
                    >
                      {property.type === "sale" ? "למכירה" : "להשכרה"}
                    </span>
                  </div>
                </div>

                {/* Thumbnail Gallery */}
                {currentMedia.length > 1 && (
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                    {currentMedia.map((media, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`relative overflow-hidden rounded-xl transition-all duration-300 ${
                          index === currentImageIndex ? "ring-4 ring-[#c79d2a] scale-105" : "hover:scale-105"
                        }`}
                        style={{
                          boxShadow: index === currentImageIndex ? "0 4px 12px rgba(199,157,42,0.4)" : "0 2px 8px rgba(25,39,74,0.1)",
                        }}
                      >
                        {media.type === 'video' ? (
                          <div className="relative">
                            <video src={media.url} className="w-full h-20 object-cover" />
                            <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}>
                              <FaPlay className="h-6 w-6" style={{ color: '#ffffff' }} />
                            </div>
                          </div>
                        ) : (
                          <img src={media.url} alt={`מדיה ${index + 1}`} className="w-full h-20 object-cover" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>

            {/* Property Details */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="space-y-8">
              {/* Key Features */}
              <LuxuryCard>
                <h2 className="text-2xl font-serif font-bold mb-6" style={{ color: "rgba(25,39,74,0.97)" }}>
                  פרטי הנכס
                </h2>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-xl"
                      style={{
                        background: "linear-gradient(135deg, rgba(25,39,74,0.1) 0%, rgba(255,255,255,0.9) 100%)",
                        border: "1px solid rgba(25,39,74,0.15)",
                      }}
                    >
                      <FaBed className="h-6 w-6" style={{ color: "rgba(25,39,74,0.7)" }} />
                    </div>
                    <div>
                      <p className="text-sm" style={{ color: "rgba(25,39,74,0.6)" }}>
                        חדרים
                      </p>
                      <p className="text-lg font-bold" style={{ color: "rgba(25,39,74,0.97)" }}>
                        {property.rooms}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-xl"
                      style={{
                        background: "linear-gradient(135deg, rgba(25,39,74,0.1) 0%, rgba(255,255,255,0.9) 100%)",
                        border: "1px solid rgba(25,39,74,0.15)",
                      }}
                    >
                      <FaRulerCombined className="h-6 w-6" style={{ color: "rgba(25,39,74,0.7)" }} />
                    </div>
                    <div>
                      <p className="text-sm" style={{ color: "rgba(25,39,74,0.6)" }}>
                        שטח
                      </p>
                      <p className="text-lg font-bold" style={{ color: "rgba(25,39,74,0.97)" }}>
                        {property.size} מ"ר
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-xl"
                      style={{
                        background: "linear-gradient(135deg, rgba(25,39,74,0.1) 0%, rgba(255,255,255,0.9) 100%)",
                        border: "1px solid rgba(25,39,74,0.15)",
                      }}
                    >
                      <FaBuilding className="h-6 w-6" style={{ color: "rgba(25,39,74,0.7)" }} />
                    </div>
                    <div>
                      <p className="text-sm" style={{ color: "rgba(25,39,74,0.6)" }}>
                        קומה
                      </p>
                      <p className="text-lg font-bold" style={{ color: "rgba(25,39,74,0.97)" }}>
                        {property.floor}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-xl"
                      style={{
                        background: "linear-gradient(135deg, rgba(25,39,74,0.1) 0%, rgba(255,255,255,0.9) 100%)",
                        border: "1px solid rgba(25,39,74,0.15)",
                      }}
                    >
                      <FaCar className="h-6 w-6" style={{ color: "rgba(25,39,74,0.7)" }} />
                    </div>
                    <div>
                      <p className="text-sm" style={{ color: "rgba(25,39,74,0.6)" }}>
                        חניה
                      </p>
                      <p className="text-lg font-bold" style={{ color: "rgba(25,39,74,0.97)" }}>
                        {property.parking ? "כן" : "לא"}
                      </p>
                    </div>
                  </div>
                </div>
              </LuxuryCard>

              {/* Features */}
              <LuxuryCard>
                <h2 className="text-2xl font-serif font-bold mb-6" style={{ color: "rgba(25,39,74,0.97)" }}>
                  מאפיינים
                </h2>
                <div className="flex flex-wrap gap-3">
                  {Object.entries(propertyFeatures).map(
                    ([key, label]) =>
                      property[key as keyof Property] && (
                        <span
                          key={key}
                          className="px-4 py-2 rounded-full text-sm font-medium border flex items-center gap-2"
                          style={{
                            backgroundColor: "rgba(199,157,42,0.1)",
                            borderColor: "rgba(199,157,42,0.3)",
                            color: "#c79d2a",
                          }}
                        >
                          <FaCheck className="h-3 w-3" />
                          {label}
                        </span>
                      )
                  )}
                </div>
              </LuxuryCard>

              {/* Description */}
              {property.description && (
                <LuxuryCard>
                  <h2 className="text-2xl font-serif font-bold mb-6" style={{ color: "rgba(25,39,74,0.97)" }}>
                    תיאור הנכס
                  </h2>
                  <p className="text-lg leading-relaxed whitespace-pre-wrap" style={{ color: "rgba(25,39,74,0.85)" }}>
                    {property.description}
                  </p>
                </LuxuryCard>
              )}

              {/* Contact */}
              <LuxuryCard
                backgroundStyle={{
                  background: "linear-gradient(135deg, rgba(199,157,42,0.08) 0%, rgba(255,255,255,0.95) 50%, rgba(199,157,42,0.05) 100%)",
                }}
              >
                <h2 className="text-2xl font-serif font-bold mb-6" style={{ color: "rgba(25,39,74,0.97)" }}>
                  מעוניינים בנכס?
                </h2>
                <p className="text-lg mb-6" style={{ color: "rgba(25,39,74,0.8)" }}>
                  צרו קשר עכשיו לפרטים נוספים ולתיאום צפייה
                </p>

                {/* Rotem's Contact */}
                <div className="mb-6 pb-6 border-b" style={{ borderColor: "rgba(199,157,42,0.2)" }}>
                  <h3 className="text-xl font-bold mb-4" style={{ color: "rgba(25,39,74,0.97)" }}>
                    רותם
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <a href={businessStaticData.rotemPhone.callLink}>
                      <LuxuryButton className="w-full">
                        <FaPhone className="h-4 w-4 ml-2" />
                        {businessStaticData.rotemPhone.numberToDisplay}
                      </LuxuryButton>
                    </a>
                    <a
                      href={`${businessStaticData.rotemPhone.whatsappLink}?text=${encodeURIComponent(`שלום רותם, אני מעוניין בנכס: ${property.title}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LuxuryButton variant="secondary" className="w-full">
                        <FaWhatsapp className="h-4 w-4 ml-2" />
                        WhatsApp
                      </LuxuryButton>
                    </a>
                  </div>
                </div>

                {/* Shiraz's Contact */}
                <div>
                  <h3 className="text-xl font-bold mb-4" style={{ color: "rgba(25,39,74,0.97)" }}>
                    שירז
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <a href={businessStaticData.shirazPhone.callLink}>
                      <LuxuryButton className="w-full">
                        <FaPhone className="h-4 w-4 ml-2" />
                        {businessStaticData.shirazPhone.numberToDisplay}
                      </LuxuryButton>
                    </a>
                    <a
                      href={`${businessStaticData.shirazPhone.whatsappLink}?text=${encodeURIComponent(`שלום שירז, אני מעוניין בנכס: ${property.title}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LuxuryButton variant="secondary" className="w-full">
                        <FaWhatsapp className="h-4 w-4 ml-2" />
                        WhatsApp
                      </LuxuryButton>
                    </a>
                  </div>
                </div>
              </LuxuryCard>
            </motion.div>
          </div>

          {/* Map Section */}
          {property.address && property.city && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12"
            >
              <LuxuryCard className="p-0 overflow-hidden">
                <iframe
                  title="מפה"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(property.address + ", " + property.city)}&output=embed`}
                  width="100%"
                  height="400"
                  className="w-full h-[300px] md:h-[400px]"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </LuxuryCard>
            </motion.div>
          )}

          {/* Back Button & Share */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} className="mt-12">
            <LuxuryCard className="p-6 flex justify-between items-center">
              <Link href="/catalog">
                <button
                  className="flex items-center gap-2 text-lg font-medium transition-colors duration-300"
                  style={{ color: "rgba(25,39,74,0.7)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#c79d2a")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(25,39,74,0.7)")}
                >
                  <FaArrowRight className="h-5 w-5" />
                  חזור לקטלוג
                </button>
              </Link>
              <div className="flex gap-3">
                <button
                  onClick={copyLink}
                  className="flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 hover:scale-110"
                  style={{
                    background: "linear-gradient(135deg, rgba(199,157,42,0.1) 0%, rgba(255,255,255,0.9) 100%)",
                    border: "2px solid rgba(199,157,42,0.3)",
                  }}
                  title="העתק קישור"
                >
                  <FaLink className="h-5 w-5" style={{ color: "rgba(25,39,74,0.7)" }} />
                </button>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 hover:scale-110"
                  style={{
                    background: "linear-gradient(135deg, rgba(37,211,102,0.1) 0%, rgba(255,255,255,0.9) 100%)",
                    border: "2px solid rgba(37,211,102,0.3)",
                  }}
                  title="שתף ב-WhatsApp"
                >
                  <FaWhatsapp className="h-5 w-5" style={{ color: "#25D366" }} />
                </a>
              </div>
            </LuxuryCard>
          </motion.div>
        </div>
      </LuxuryBackground>
    </>
  )
}
