import { useState, useEffect } from "react"
import { collection, getDocs, query, orderBy } from "firebase/firestore"
import { db } from "../lib/firebase"
import { Property } from "../types/property"
import { motion } from "framer-motion"
import Head from "next/head"
import Link from "next/link"
import LuxuryBackground from "@/components/ui/luxury-background"
import LuxuryCard from "@/components/ui/luxury-card"
import SectionHeader from "@/components/ui/section-header"
import LuxuryButton from "@/components/ui/luxury-button"
import {
  FaSearch,
  FaFilter,
  FaMapMarkerAlt,
  FaBed,
  FaRulerCombined,
  FaBuilding,
  FaHome,
  FaEye,
  FaTimes,
  FaCheckCircle,
} from "react-icons/fa"

// Property categories with Hebrew labels
const propertyCategories = {
  all: "הכל",
  apartment: "דירות",
  house: "בתים",
  penthouse: "פנטהאוזים",
  garden: "דירות גן",
} as const

type PropertyCategory = keyof typeof propertyCategories

// Property features with Hebrew labels
const propertyFeatures = {
  elevator: "מעלית",
  parking: "חניה",
  balcony: "מרפסת",
  storage: "מחסן",
  accessibility: "גישה לנכים",
  renovated: "משופצת",
  furnished: "מרוהטת",
  airConditioned: "מיזוג",
  immediate: "כניסה מיידית",
} as const

export default function CatalogPage() {
  const [properties, setProperties] = useState<Property[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<PropertyCategory>("all")
  const [selectedCity, setSelectedCity] = useState<string>("all")
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000000])
  const [roomsRange, setRoomsRange] = useState<[number, number]>([1, 10])
  const [showFilters, setShowFilters] = useState(false)
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])

  useEffect(() => {
    fetchProperties()
  }, [])

  const fetchProperties = async () => {
    try {
      const propertiesRef = collection(db, "properties")
      const q = query(propertiesRef, orderBy("createdAt", "desc"))
      const querySnapshot = await getDocs(q)
      const propertiesData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Property[]
      setProperties(propertiesData)
    } catch (error) {
      console.error("Error fetching properties:", error)
    } finally {
      setLoading(false)
    }
  }

  const filterProperties = (propertyList: Property[]) => {
    let filtered = [...propertyList]

    // Search filter
    if (searchTerm) {
      const searchTermLower = searchTerm.toLowerCase()
      filtered = filtered.filter(
        (property) =>
          property.title.toLowerCase().includes(searchTermLower) ||
          property.address.toLowerCase().includes(searchTermLower) ||
          property.city.toLowerCase().includes(searchTermLower)
      )
    }

    // Category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter((property) => property.category === selectedCategory)
    }

    // City filter
    if (selectedCity !== "all") {
      filtered = filtered.filter((property) => property.city === selectedCity)
    }

    // Price range filter
    filtered = filtered.filter((property) => property.price >= priceRange[0] && property.price <= priceRange[1])

    // Rooms range filter
    filtered = filtered.filter((property) => property.rooms >= roomsRange[0] && property.rooms <= roomsRange[1])

    // Features filter
    if (selectedFeatures.length > 0) {
      filtered = filtered.filter((property) =>
        selectedFeatures.every((feature) => property[feature as keyof Property])
      )
    }

    return filtered
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("he-IL").format(price)
  }

  const getCities = () => {
    const cityArr = properties.map((p) => p.city)
    const uniqueCities: string[] = []
    for (let i = 0; i < cityArr.length; i++) {
      if (!uniqueCities.includes(cityArr[i])) {
        uniqueCities.push(cityArr[i])
      }
    }
    return uniqueCities.sort()
  }

  const toggleFeature = (feature: string) => {
    setSelectedFeatures((prev) => (prev.includes(feature) ? prev.filter((f) => f !== feature) : [...prev, feature]))
  }

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedCategory("all")
    setSelectedCity("all")
    setPriceRange([0, 10000000])
    setRoomsRange([1, 10])
    setSelectedFeatures([])
  }

  const saleProperties = filterProperties(properties.filter(p => p.type === "sale"))
  const rentProperties = filterProperties(properties.filter(p => p.type === "rent"))

  const activeFiltersCount =
    (selectedCategory !== "all" ? 1 : 0) +
    (selectedCity !== "all" ? 1 : 0) +
    selectedFeatures.length +
    (searchTerm ? 1 : 0)

  if (loading) {
    return (
      <>
        <Head>
          <title>קטלוג נכסים - Keyhouse</title>
        </Head>
        <LuxuryBackground variant="hero" className="flex items-center justify-center py-20">
          <div className="flex flex-col items-center gap-4">
            <div
              className="h-16 w-16 animate-spin rounded-full border-4 border-transparent"
              style={{
                borderTopColor: "#c79d2a",
                borderRightColor: "rgba(199,157,42,0.3)",
              }}
            />
            <p className="text-xl font-medium" style={{ color: "#ffffff" }}>
              טוען נכסים...
            </p>
          </div>
        </LuxuryBackground>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>קטלוג נכסים - Keyhouse</title>
        <meta
          name="description"
          content="גלה את הנכס המושלם עבורך - דירות למכירה ולהשכרה באילת. קטלוג נכסים מעודכן עם מגוון אפשרויות מגורים והשקעה."
        />
      </Head>

      {/* Hero Section */}
      <LuxuryBackground
        variant="hero"
        className="flex items-center justify-center"
        backgroundImage="/images/homeServices/catalog.png"
        imageAlt="Property Catalog - Keyhouse Real Estate"
        overlayOpacity={0.65}
      >
        <div className="container mx-auto px-6 relative z-10 text-center py-20">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-extrabold mb-6 leading-tight"
            style={{
              color: "#ffffff",
              textShadow: "0 4px 20px rgba(0,0,0,0.3), 0 2px 10px rgba(199,157,42,0.2)",
            }}
          >
            קטלוג הנכסים שלנו
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-10 leading-relaxed max-w-3xl mx-auto"
            style={{
              color: "rgba(255,255,255,0.95)",
              textShadow: "0 2px 10px rgba(0,0,0,0.3)",
            }}
          >
            נכסים מומלצים נבחרים - דירות למכירה ולהשכרה באילת ובסביבתה
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center gap-4"
          >
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
          {/* FILTERING SECTION - COMMENTED OUT FOR NOW
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <LuxuryCard className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="relative">
                  <FaSearch
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5"
                    style={{ color: "rgba(25,39,74,0.4)" }}
                  />
                  <input
                    type="text"
                    placeholder="חיפוש נכסים..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pr-12 pl-4 py-4 rounded-2xl border text-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#c79d2a]/50"
                    style={{
                      borderColor: "rgba(25,39,74,0.15)",
                      backgroundColor: "rgba(255,255,255,0.95)",
                      color: "rgba(25,39,74,0.97)",
                      boxShadow: "0 4px 12px rgba(25,39,74,0.06)",
                    }}
                  />
                </div>

                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value as PropertyCategory)}
                  className="w-full px-6 py-4 rounded-2xl border text-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#c79d2a]/50 cursor-pointer appearance-none"
                  style={{
                    borderColor: "rgba(25,39,74,0.15)",
                    backgroundColor: "rgba(255,255,255,0.95)",
                    color: "rgba(25,39,74,0.97)",
                    boxShadow: "0 4px 12px rgba(25,39,74,0.06)",
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23192746' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: "left 1rem center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "1.5em 1.5em",
                  }}
                >
                  {Object.entries(propertyCategories).map(([key, label]) => (
                    <option key={key} value={key}>
                      {label}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full px-6 py-4 rounded-2xl border text-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#c79d2a]/50 cursor-pointer appearance-none"
                  style={{
                    borderColor: "rgba(25,39,74,0.15)",
                    backgroundColor: "rgba(255,255,255,0.95)",
                    color: "rgba(25,39,74,0.97)",
                    boxShadow: "0 4px 12px rgba(25,39,74,0.06)",
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23192746' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: "left 1rem center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "1.5em 1.5em",
                  }}
                >
                  <option value="all">כל הערים</option>
                  {getCities().map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-3 px-6 py-3 rounded-2xl transition-all duration-300 hover:scale-105"
                  style={{
                    background: showFilters
                      ? "linear-gradient(135deg, #c79d2a 0%, rgba(199,157,42,0.8) 100%)"
                      : "linear-gradient(135deg, rgba(199,157,42,0.1) 0%, rgba(255,255,255,0.9) 100%)",
                    border: "2px solid rgba(199,157,42,0.3)",
                    boxShadow: "0 4px 12px rgba(199,157,42,0.2)",
                    color: showFilters ? "#ffffff" : "rgba(25,39,74,0.97)",
                  }}
                >
                  <FaFilter className="h-5 w-5" />
                  <span className="font-medium">סינון מתקדם</span>
                  {activeFiltersCount > 0 && (
                    <span
                      className="flex items-center justify-center w-6 h-6 rounded-full text-sm font-bold"
                      style={{
                        backgroundColor: showFilters ? "rgba(255,255,255,0.3)" : "#c79d2a",
                        color: showFilters ? "#ffffff" : "rgba(25,39,74,0.97)",
                      }}
                    >
                      {activeFiltersCount}
                    </span>
                  )}
                </button>

                {activeFiltersCount > 0 && (
                  <button
                    onClick={clearFilters}
                    className="flex items-center gap-2 text-lg font-medium transition-colors duration-300"
                    style={{ color: "rgba(25,39,74,0.6)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#c79d2a")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(25,39,74,0.6)")}
                  >
                    <FaTimes className="h-4 w-4" />
                    נקה סינון
                  </button>
                )}
              </div>

              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-8 pt-8 border-t"
                  style={{ borderColor: "rgba(25,39,74,0.1)" }}
                >
                  <div className="space-y-8">
                    <div>
                      <label className="block text-lg font-medium mb-4" style={{ color: "rgba(25,39,74,0.9)" }}>
                        טווח מחירים
                      </label>
                      <div className="flex items-center gap-4">
                        <input
                          type="number"
                          value={priceRange[0]}
                          onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                          placeholder="מינימום"
                          className="w-full px-4 py-3 rounded-xl border text-base"
                          style={{
                            borderColor: "rgba(25,39,74,0.15)",
                            color: "rgba(25,39,74,0.97)",
                          }}
                        />
                        <span style={{ color: "rgba(25,39,74,0.4)" }}>-</span>
                        <input
                          type="number"
                          value={priceRange[1]}
                          onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                          placeholder="מקסימום"
                          className="w-full px-4 py-3 rounded-xl border text-base"
                          style={{
                            borderColor: "rgba(25,39,74,0.15)",
                            color: "rgba(25,39,74,0.97)",
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-lg font-medium mb-4" style={{ color: "rgba(25,39,74,0.9)" }}>
                        מספר חדרים
                      </label>
                      <div className="flex items-center gap-4">
                        <input
                          type="number"
                          value={roomsRange[0]}
                          onChange={(e) => setRoomsRange([Number(e.target.value), roomsRange[1]])}
                          placeholder="מינימום"
                          min="1"
                          max="10"
                          className="w-full px-4 py-3 rounded-xl border text-base"
                          style={{
                            borderColor: "rgba(25,39,74,0.15)",
                            color: "rgba(25,39,74,0.97)",
                          }}
                        />
                        <span style={{ color: "rgba(25,39,74,0.4)" }}>-</span>
                        <input
                          type="number"
                          value={roomsRange[1]}
                          onChange={(e) => setRoomsRange([roomsRange[0], Number(e.target.value)])}
                          placeholder="מקסימום"
                          min="1"
                          max="10"
                          className="w-full px-4 py-3 rounded-xl border text-base"
                          style={{
                            borderColor: "rgba(25,39,74,0.15)",
                            color: "rgba(25,39,74,0.97)",
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-lg font-medium mb-4" style={{ color: "rgba(25,39,74,0.9)" }}>
                        מאפיינים
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        {Object.entries(propertyFeatures).map(([key, label]) => {
                          const isSelected = selectedFeatures.includes(key)
                          return (
                            <button
                              key={key}
                              onClick={() => toggleFeature(key)}
                              className="flex items-center gap-3 px-4 py-3 rounded-xl border text-base font-medium transition-all duration-300"
                              style={{
                                borderColor: isSelected ? "#c79d2a" : "rgba(25,39,74,0.15)",
                                backgroundColor: isSelected ? "rgba(199,157,42,0.1)" : "rgba(255,255,255,0.95)",
                                color: isSelected ? "#c79d2a" : "rgba(25,39,74,0.8)",
                              }}
                            >
                              {isSelected ? (
                                <FaCheckCircle className="h-4 w-4" style={{ color: "#c79d2a" }} />
                              ) : (
                                <div
                                  className="w-4 h-4 rounded-full border-2"
                                  style={{ borderColor: "rgba(25,39,74,0.3)" }}
                                />
                              )}
                              {label}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </LuxuryCard>
          </motion.div>
          */}

          {/* Sale Properties Section */}
          <div className="mb-20">
            <SectionHeader
              title="נכסים למכירה"
              subtitle={`${saleProperties.length} נכסים זמינים למכירה`}
              alignment="right"
              className="mb-12"
            />

            {saleProperties.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <LuxuryCard className="text-center py-20">
                <FaHome
                  className="mx-auto mb-6 h-20 w-20"
                  style={{ color: "rgba(25,39,74,0.3)" }}
                />
                <h3 className="text-2xl font-serif font-bold mb-4" style={{ color: "rgba(25,39,74,0.97)" }}>
                  לא נמצאו נכסים למכירה
                </h3>
                <p className="text-lg mb-8" style={{ color: "rgba(25,39,74,0.7)" }}>
                  דבר איתנו להזדמנויות שטרם מופיעות כאן
                </p>
                {/* <LuxuryButton onClick={clearFilters}>נקה את כל הסינון</LuxuryButton> */}
              </LuxuryCard>
            </motion.div>
          ) : (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 },
                },
              }}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {saleProperties.map((property, index) => (
                <motion.div
                  key={property.id}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                  }}
                >
                  <Link href={`/catalog/${property.id}`}>
                    <LuxuryCard hoverable={true} className="group cursor-pointer overflow-hidden p-0 h-full flex flex-col">
                      {/* Image */}
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={property.images[0] || "/images/image2.jpg"}
                          alt={property.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* Gradient Overlay */}
                        <div
                          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                        />
                        {/* Badges */}
                        <div className="absolute top-4 right-4 flex gap-2">
                          <span
                            className="px-4 py-2 rounded-full text-sm font-bold"
                            style={{
                              backgroundColor: property.type === "sale" ? "#22c55e" : "#3b82f6",
                              color: "#ffffff",
                            }}
                          >
                            {property.type === "sale" ? "למכירה" : "להשכרה"}
                          </span>
                          {property.immediate && (
                            <span
                              className="px-4 py-2 rounded-full text-sm font-bold"
                              style={{
                                backgroundColor: "#f97316",
                                color: "#ffffff",
                              }}
                            >
                              כניסה מיידית
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex-1 flex flex-col">
                        <h3
                          className="text-2xl font-serif font-bold mb-2 line-clamp-1"
                          style={{ color: "rgba(25,39,74,0.97)" }}
                        >
                          {property.title}
                        </h3>

                        <div className="flex items-center gap-2 mb-4 text-base" style={{ color: "rgba(25,39,74,0.7)" }}>
                          <FaMapMarkerAlt className="h-4 w-4" style={{ color: "#c79d2a" }} />
                          {property.address}, {property.city}
                        </div>

                        {/* Price */}
                        <div className="mb-4">
                          <div className="text-3xl font-bold" style={{ color: "rgba(25,39,74,0.97)" }}>
                            ₪{formatPrice(property.price)}
                          </div>
                          {property.type === "rent" && (
                            <div className="text-sm" style={{ color: "rgba(25,39,74,0.6)" }}>
                              לחודש
                            </div>
                          )}
                        </div>

                        {/* Property Details */}
                        <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b" style={{ borderColor: "rgba(25,39,74,0.1)" }}>
                          <div className="flex flex-col items-center">
                            <FaBed className="h-5 w-5 mb-1" style={{ color: "rgba(25,39,74,0.5)" }} />
                            <span className="text-sm font-medium" style={{ color: "rgba(25,39,74,0.9)" }}>
                              {property.rooms} חדרים
                            </span>
                          </div>
                          <div className="flex flex-col items-center">
                            <FaRulerCombined className="h-5 w-5 mb-1" style={{ color: "rgba(25,39,74,0.5)" }} />
                            <span className="text-sm font-medium" style={{ color: "rgba(25,39,74,0.9)" }}>
                              {property.size} מ"ר
                            </span>
                          </div>
                          <div className="flex flex-col items-center">
                            <FaBuilding className="h-5 w-5 mb-1" style={{ color: "rgba(25,39,74,0.5)" }} />
                            <span className="text-sm font-medium" style={{ color: "rgba(25,39,74,0.9)" }}>
                              קומה {property.floor}
                            </span>
                          </div>
                        </div>

                        {/* Features */}
                        <div className="flex flex-wrap gap-2 mb-4 flex-1">
                          {Object.entries(propertyFeatures)
                            .slice(0, 4)
                            .map(
                              ([key, label]) =>
                                property[key as keyof Property] && (
                                  <span
                                    key={key}
                                    className="px-3 py-1 rounded-full text-xs font-medium border"
                                    style={{
                                      backgroundColor: "rgba(199,157,42,0.1)",
                                      borderColor: "rgba(199,157,42,0.3)",
                                      color: "#c79d2a",
                                    }}
                                  >
                                    {label}
                                  </span>
                                )
                            )}
                        </div>

                        {/* View Button */}
                        <LuxuryButton variant="secondary" className="w-full">
                          <FaEye className="h-5 w-5 ml-2" />
                          צפה בפרטים
                        </LuxuryButton>
                      </div>
                    </LuxuryCard>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
          </div>

          {/* Rent Properties Section */}
          <div>
            <SectionHeader
              title="נכסים להשכרה"
              subtitle={`${rentProperties.length} נכסים זמינים להשכרה`}
              alignment="right"
              className="mb-12"
            />

            {rentProperties.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <LuxuryCard className="text-center py-20">
                <FaHome
                  className="mx-auto mb-6 h-20 w-20"
                  style={{ color: "rgba(25,39,74,0.3)" }}
                />
                <h3 className="text-2xl font-serif font-bold mb-4" style={{ color: "rgba(25,39,74,0.97)" }}>
                  לא נמצאו נכסים להשכרה
                </h3>
                <p className="text-lg mb-8" style={{ color: "rgba(25,39,74,0.7)" }}>
                  דבר איתנו להזדמנויות שטרם מופיעות כאן
                </p>
                {/* <LuxuryButton onClick={clearFilters}>נקה את כל הסינון</LuxuryButton> */}
              </LuxuryCard>
            </motion.div>
          ) : (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 },
                },
              }}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {rentProperties.map((property) => (
                <motion.div
                  key={property.id}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                  }}
                >
                  <Link href={`/catalog/${property.id}`}>
                    <LuxuryCard hoverable={true} className="group cursor-pointer overflow-hidden p-0 h-full flex flex-col">
                      {/* Image */}
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={property.images[0] || "/images/image2.jpg"}
                          alt={property.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* Gradient Overlay */}
                        <div
                          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                        />
                        {/* Badges */}
                        <div className="absolute top-4 right-4 flex gap-2">
                          <span
                            className="px-4 py-2 rounded-full text-sm font-bold"
                            style={{
                              backgroundColor: "#3b82f6",
                              color: "#ffffff",
                            }}
                          >
                            להשכרה
                          </span>
                          {property.immediate && (
                            <span
                              className="px-4 py-2 rounded-full text-sm font-bold"
                              style={{
                                backgroundColor: "#f97316",
                                color: "#ffffff",
                              }}
                            >
                              כניסה מיידית
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex-1 flex flex-col">
                        <h3
                          className="text-2xl font-serif font-bold mb-2 line-clamp-1"
                          style={{ color: "rgba(25,39,74,0.97)" }}
                        >
                          {property.title}
                        </h3>

                        <div className="flex items-center gap-2 mb-4 text-base" style={{ color: "rgba(25,39,74,0.7)" }}>
                          <FaMapMarkerAlt className="h-4 w-4" style={{ color: "#c79d2a" }} />
                          {property.address}, {property.city}
                        </div>

                        {/* Price */}
                        <div className="mb-4">
                          <div className="text-3xl font-bold" style={{ color: "rgba(25,39,74,0.97)" }}>
                            ₪{formatPrice(property.price)}
                          </div>
                          <div className="text-sm" style={{ color: "rgba(25,39,74,0.6)" }}>
                            לחודש
                          </div>
                        </div>

                        {/* Property Details */}
                        <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b" style={{ borderColor: "rgba(25,39,74,0.1)" }}>
                          <div className="flex flex-col items-center">
                            <FaBed className="h-5 w-5 mb-1" style={{ color: "rgba(25,39,74,0.5)" }} />
                            <span className="text-sm font-medium" style={{ color: "rgba(25,39,74,0.9)" }}>
                              {property.rooms} חדרים
                            </span>
                          </div>
                          <div className="flex flex-col items-center">
                            <FaRulerCombined className="h-5 w-5 mb-1" style={{ color: "rgba(25,39,74,0.5)" }} />
                            <span className="text-sm font-medium" style={{ color: "rgba(25,39,74,0.9)" }}>
                              {property.size} מ"ר
                            </span>
                          </div>
                          <div className="flex flex-col items-center">
                            <FaBuilding className="h-5 w-5 mb-1" style={{ color: "rgba(25,39,74,0.5)" }} />
                            <span className="text-sm font-medium" style={{ color: "rgba(25,39,74,0.9)" }}>
                              קומה {property.floor}
                            </span>
                          </div>
                        </div>

                        {/* Features */}
                        <div className="flex flex-wrap gap-2 mb-4 flex-1">
                          {Object.entries(propertyFeatures)
                            .slice(0, 4)
                            .map(
                              ([key, label]) =>
                                property[key as keyof Property] && (
                                  <span
                                    key={key}
                                    className="px-3 py-1 rounded-full text-xs font-medium border"
                                    style={{
                                      backgroundColor: "rgba(199,157,42,0.1)",
                                      borderColor: "rgba(199,157,42,0.3)",
                                      color: "#c79d2a",
                                    }}
                                  >
                                    {label}
                                  </span>
                                )
                            )}
                        </div>

                        {/* View Button */}
                        <LuxuryButton variant="secondary" className="w-full">
                          <FaEye className="h-5 w-5 ml-2" />
                          צפה בפרטים
                        </LuxuryButton>
                      </div>
                    </LuxuryCard>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
          </div>
        </div>
      </LuxuryBackground>
    </>
  )
}
