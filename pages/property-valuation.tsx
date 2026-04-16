import { useState } from "react"
import { motion } from "framer-motion"
import LuxuryBackground from "@/components/ui/luxury-background"
import LuxuryCard from "@/components/ui/luxury-card"
import SectionHeader from "@/components/ui/section-header"
import LuxuryButton from "@/components/ui/luxury-button"
import QuoteCard from "@/components/ui/quote-card"
import ValuationDisclaimer from "@/components/ui/valuation-disclaimer"
import SEOHead from "@/components/seo/SEOHead"
import { MultipleStructuredData } from "@/components/seo/StructuredData"
import { FaCheckCircle, FaChartLine, FaHandshake, FaClipboardList, FaArrowDown } from "react-icons/fa"
import { sendLeadToWebhook } from "@/lib/webhook"

export default function PropertyValuation() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    floor: "",
    rooms: "",
    balcony: false,
    yard: false,
    accessibility: false,
    renovated: false,
    storage: false,
    airConditioning: false,
    safeRoom: false,
    elevator: false,
    parking: false,
    furnished: false,
    additionalDetails: "",
    agreeToMarketing: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({ ...prev, [name]: checked }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.address) {
      setSubmitError("נא למלא את כל השדות החובה")
      setIsSubmitting(false)
      return
    }

    // Validate marketing consent checkbox
    if (!formData.agreeToMarketing) {
      setSubmitError("נא לאשר קבלת דיוור על מנת להמשיך")
      setIsSubmitting(false)
      return
    }

    try {
      // Send lead to webhook with all property data
      const result = await sendLeadToWebhook({
        type: 'property-valuation',
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phone,
        leadPosition: "מוכר", // Property valuation is always for sellers
        address: formData.address,
        floor: formData.floor,
        rooms: formData.rooms,
        balcony: formData.balcony ? '✅' : '❌',
        yard: formData.yard ? '✅' : '❌',
        accessibility: formData.accessibility ? '✅' : '❌',
        renovated: formData.renovated ? '✅' : '❌',
        storage: formData.storage ? '✅' : '❌',
        airConditioning: formData.airConditioning ? '✅' : '❌',
        safeRoom: formData.safeRoom ? '✅' : '❌',
        elevator: formData.elevator ? '✅' : '❌',
        parking: formData.parking ? '✅' : '❌',
        furnished: formData.furnished ? '✅' : '❌',
        additionalDetails: formData.additionalDetails || "אין",
      })

      if (!result.success) {
        throw new Error("Failed to submit property valuation")
      }

      console.log("Form submitted:", formData)
      setSubmitSuccess(true)

      // Reset form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        floor: "",
        rooms: "",
        balcony: false,
        yard: false,
        accessibility: false,
        renovated: false,
        storage: false,
        airConditioning: false,
        safeRoom: false,
        elevator: false,
        parking: false,
        furnished: false,
        additionalDetails: "",
        agreeToMarketing: false,
      })
    } catch (error) {
      console.error("Error submitting property valuation form:", error)
      setSubmitError("אירעה שגיאה בשליחת הטופס. אנא נסה שנית.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const scrollToForm = () => {
    document.getElementById("valuation-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <SEOHead
        title="הערכת שווי דירה באילת | תמחור נדל״ן אילת | קי האוס"
        description="רוצים לדעת כמה שווה הנכס שלכם? קבלו הערכת שווי מקצועית ומדויקת מומחי הנדל״ן שלנו באילת. ניתוח מבוסס נתוני שוק ועסקאות דומות, ללא עלות וללא התחייבות."
        canonical="/property-valuation"
        keywords={[
          'הערכת שווי דירה',
          'שמאות אילת',
          'שמאי אילת',
          'שווי נכס אילת',
          'הערכת שווי נכס',
          'תמחור דירה',
          'שמאי מקרקעין אילת',
          'ייעוץ נדל"ן אילת'
        ]}
      />

      <MultipleStructuredData
        schemas={[
          {
            type: 'BreadcrumbList',
            data: {
              items: [
                { name: 'דף הבית', url: '/' },
                { name: 'הערכת שווי', url: '/property-valuation' }
              ]
            }
          },
          {
            type: 'WebPage',
            data: {
              name: 'הערכת שווי נכס באילת - ייעוץ מקצועי',
              url: '/property-valuation',
              description: 'קבלו הערכת שווי מקצועית לנכס שלכם באילת'
            }
          }
        ]}
      />

      <main id="main-content">
      {/* Hero Section */}
      <LuxuryBackground
        variant="hero"
        className="flex items-center justify-center"
        backgroundImage="/images/valuationPage/hero.jpg"
        imageAlt="Property Valuation Service - Keyhouse"
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
              textShadow: "0 4px 20px rgba(0,0,0,0.3), 0 2px 10px rgba(199,157,42,0.2)"
            }}
          >
            רוצה לדעת בכמה אפשר למכור<br />את הנכס שלך?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-10 leading-relaxed max-w-3xl mx-auto"
            style={{
              color: "rgba(255,255,255,0.95)",
              textShadow: "0 2px 10px rgba(0,0,0,0.3)"
            }}
          >
            קבל הערכת שווי שוק ללא עלות וללא התחייבות
            <br />
            מבוססת על ניתוח מעמיק של השוק המקומי (לא שמאות)
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center"
          >
            <LuxuryButton size="large" onClick={scrollToForm}>
              אני רוצה הערכה ראשונית
              <FaArrowDown className="mr-2 h-5 w-5 animate-bounce" />
            </LuxuryButton>
          </motion.div>
        </div>
      </LuxuryBackground>

      {/* Value Proposition Section */}
      <LuxuryBackground variant="light" className="py-24">
        <div className="container mx-auto px-6 relative z-10">
          {/* <SectionHeader
            title="למה לבחור בנו?"
            subtitle="הערכת שווי שוק המבוססת על ניתוח עסקאות דומות, מצב השוק הנוכחי, והכרות מעמיקה עם השוק המקומי באילת"
            className="mb-20"
          /> */}

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: FaCheckCircle,
                title: "ללא עלות וללא התחייבות",
                description: "השירות ניתן ללא כל תשלום וללא מחויבות להמשך"
              },
              {
                icon: FaChartLine,
                title: "ניתוח עסקאות דומות",
                description: "בדיקה מעמיקה של עסקאות שנמכרו ונכסים המוצעים כיום"
              },
              {
                icon: FaClipboardList,
                title: "הערכה מבוססת שוק",
                description: "לוקחים בחשבון מצב הנכס, פוטנציאל השבחה ומגמות שוק"
              },
              {
                icon: FaHandshake,
                title: "ליווי מקצועי",
                description: "בסיום התהליך תוכל להחליט אם להמשיך איתנו למכירה"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <LuxuryCard hoverable={true} className="grid p-8 h-full text-center">
                  <div className="flex justify-center mb-6">
                    <div
                      className="flex h-20 w-20 items-center justify-center rounded-2xl shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                      style={{
                        background: "linear-gradient(135deg, rgba(199,157,42,0.1) 0%, rgba(255,255,255,0.9) 100%)",
                        border: "2px solid rgba(199,157,42,0.3)",
                        boxShadow: "0 8px 25px rgba(199,157,42,0.2)"
                      }}
                    >
                      <item.icon className="h-10 w-10" style={{ color: "rgba(25,39,74,0.97)" }} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-4" style={{ color: "rgba(25,39,74,0.97)" }}>
                    {item.title}
                  </h3>
                  <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                    {item.description}
                  </p>
                </LuxuryCard>
              </motion.div>
            ))}
          </div>

          {/* Disclaimer */}
          <ValuationDisclaimer />
        </div>
      </LuxuryBackground>

      {/* How It Works Section */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: "#fafafa" }}>
        <div className="container mx-auto px-6 relative z-10">
          <SectionHeader
            title="איך זה עובד?"
            subtitle="שלושה שלבים פשוטים להערכת שווי שוק של הנכס שלך"
            className="mb-20"
          />

          <div className="grid gap-12 md:grid-cols-3 max-w-6xl mx-auto">
            {[
              {
                number: "01",
                title: "מלא פרטים בטופס תוך 2 דקות",
                description: "מלא את הטופס הקצר עם פרטיך ופרטי הנכס הבסיסיים"
              },
              {
                number: "02",
                title: "נבצע ניתוח מעמיק של השוק",
                description: "נבצע בדיקה יסודית של עסקאות דומות ומגמות שוק נוכחיות"
              },
              {
                number: "03",
                title: "קבל הערכת שווי שוק לנכס שלך",
                description: "תקבל הערכת שווי שוק ואפשרות להמשיך למכירה"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="relative"
              >
                <LuxuryCard className="grid p-8 h-full text-center relative overflow-hidden">
                  {/* Large number background */}
                  <div
                    className="absolute top-4 left-1/2 transform -translate-x-1/2 text-9xl font-serif font-bold opacity-20 pointer-events-none"
                    style={{ color: "#c79d2a" }}
                  >
                    {step.number}
                  </div>

                  <div className="relative z-10">
                    <div
                      className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 text-2xl font-serif font-bold"
                      style={{
                        background: "linear-gradient(135deg, #c79d2a 0%, rgba(199,157,42,0.8) 100%)",
                        color: "#ffffff",
                        boxShadow: "0 8px 20px rgba(199,157,42,0.4)"
                      }}
                    >
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-serif font-bold mb-4" style={{ color: "rgba(25,39,74,0.97)" }}>
                      {step.title}
                    </h3>
                    <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>
                      {step.description}
                    </p>
                  </div>
                </LuxuryCard>

                {/* Connector arrow (hidden on last item) */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -left-6 transform -translate-y-1/2 text-4xl opacity-80" style={{ color: "#c79d2a" }}>
                    ←
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <LuxuryBackground variant="light" className="py-24">
        <div className="container mx-auto px-6 relative z-10">
          <div id="valuation-form" className="max-w-4xl mx-auto">
            <SectionHeader
              title="מלא את הפרטים כאן למטה"
              subtitle="נחזור אליך בהקדם"
              className="mb-16"
            />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <LuxuryCard className="p-6 md:p-8 lg:p-12" hoverable={false}>
                {submitSuccess ? (
                  <div
                    className="p-8 rounded-2xl border-r-4 text-center"
                    style={{
                      backgroundColor: "rgba(34, 197, 94, 0.05)",
                      borderColor: "#22c55e",
                      boxShadow: "0 8px 20px rgba(34, 197, 94, 0.1)"
                    }}
                  >
                    <FaCheckCircle className="h-16 w-16 mx-auto mb-4" style={{ color: "#22c55e" }} />
                    <h3 className="text-3xl font-serif font-bold mb-4" style={{ color: "rgba(25,39,74,0.97)" }}>
                      תודה רבה!
                    </h3>
                    <p className="text-xl leading-relaxed mb-6" style={{ color: "rgba(25,39,74,0.8)" }}>
                      קיבלנו את פנייתך ונחזור אליך בהקדם עם הערכת שווי שוק לנכס שלך.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">

                    {/* Property Information */}
                    <div>
                      <h3 className="text-2xl font-serif font-bold mb-6" style={{ color: "rgba(25,39,74,0.97)" }}>
                        פרטי הנכס
                      </h3>
                      <div className="space-y-6">
                        <div>
                          <label className="block text-lg font-medium mb-3" style={{ color: "rgba(25,39,74,0.9)" }}>
                            כתובת הנכס <span style={{ color: "#c79d2a" }}>*</span>
                          </label>
                          <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            required
                            maxLength={100}
                            placeholder="רחוב, מספר בית, עיר"
                            className="w-full rounded-2xl border px-6 py-4 text-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#c79d2a]/50"
                            style={{
                              borderColor: "rgba(25,39,74,0.15)",
                              backgroundColor: "rgba(255,255,255,0.95)",
                              color: "rgba(25,39,74,0.97)",
                              boxShadow: "0 8px 20px rgba(25,39,74,0.08), inset 0 1px 0 rgba(255,255,255,0.6)"
                            }}
                          />
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                          <div>
                            <label className="block text-lg font-medium mb-3" style={{ color: "rgba(25,39,74,0.9)" }}>
                              קומה
                            </label>
                            <input
                              type="text"
                              name="floor"
                              value={formData.floor}
                              onChange={handleInputChange}
                              maxLength={30}
                              placeholder="לדוגמה: 3, קרקע, פנטהאוז"
                              className="w-full rounded-2xl border px-6 py-4 text-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#c79d2a]/50"
                              style={{
                                borderColor: "rgba(25,39,74,0.15)",
                                backgroundColor: "rgba(255,255,255,0.95)",
                                color: "rgba(25,39,74,0.97)",
                                boxShadow: "0 8px 20px rgba(25,39,74,0.08), inset 0 1px 0 rgba(255,255,255,0.6)"
                              }}
                            />
                          </div>

                          <div>
                            <label className="block text-lg font-medium mb-3" style={{ color: "rgba(25,39,74,0.9)" }}>
                              מספר חדרים
                            </label>
                            <select
                              name="rooms"
                              value={formData.rooms}
                              onChange={handleInputChange}
                              className="w-full rounded-2xl border px-6 py-4 text-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#c79d2a]/50 appearance-none cursor-pointer"
                              style={{
                                borderColor: "rgba(25,39,74,0.15)",
                                backgroundColor: "rgba(255,255,255,0.95)",
                                color: "rgba(25,39,74,0.97)",
                                boxShadow: "0 8px 20px rgba(25,39,74,0.08), inset 0 1px 0 rgba(255,255,255,0.6)"
                              }}
                            >
                              <option value="">בחר מספר חדרים</option>
                              <option value="1">1 חדר</option>
                              <option value="2">2 חדרים</option>
                              <option value="3">3 חדרים</option>
                              <option value="4">4 חדרים</option>
                              <option value="5">5 חדרים</option>
                              <option value="6+">6+ חדרים</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-lg font-medium mb-4" style={{ color: "rgba(25,39,74,0.9)" }}>
                            תכונות נוספות
                          </label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            <label className="flex items-center gap-3 cursor-pointer group">
                              <input
                                type="checkbox"
                                name="accessibility"
                                checked={formData.accessibility}
                                onChange={handleInputChange}
                                className="w-6 h-6 rounded-lg border-2 transition-all duration-300 cursor-pointer accent-[#c79d2a]"
                                style={{ borderColor: "rgba(25,39,74,0.3)" }}
                              />
                              <span className="text-lg group-hover:text-[#c79d2a] transition-colors duration-300" style={{ color: "rgba(25,39,74,0.9)" }}>
                                גישה לנכים
                              </span>
                            </label>

                            <label className="flex items-center gap-3 cursor-pointer group">
                              <input
                                type="checkbox"
                                name="renovated"
                                checked={formData.renovated}
                                onChange={handleInputChange}
                                className="w-6 h-6 rounded-lg border-2 transition-all duration-300 cursor-pointer accent-[#c79d2a]"
                                style={{ borderColor: "rgba(25,39,74,0.3)" }}
                              />
                              <span className="text-lg group-hover:text-[#c79d2a] transition-colors duration-300" style={{ color: "rgba(25,39,74,0.9)" }}>
                                משופצת
                              </span>
                            </label>

                            <label className="flex items-center gap-3 cursor-pointer group">
                              <input
                                type="checkbox"
                                name="storage"
                                checked={formData.storage}
                                onChange={handleInputChange}
                                className="w-6 h-6 rounded-lg border-2 transition-all duration-300 cursor-pointer accent-[#c79d2a]"
                                style={{ borderColor: "rgba(25,39,74,0.3)" }}
                              />
                              <span className="text-lg group-hover:text-[#c79d2a] transition-colors duration-300" style={{ color: "rgba(25,39,74,0.9)" }}>
                                מחסן
                              </span>
                            </label>

                            <label className="flex items-center gap-3 cursor-pointer group">
                              <input
                                type="checkbox"
                                name="airConditioning"
                                checked={formData.airConditioning}
                                onChange={handleInputChange}
                                className="w-6 h-6 rounded-lg border-2 transition-all duration-300 cursor-pointer accent-[#c79d2a]"
                                style={{ borderColor: "rgba(25,39,74,0.3)" }}
                              />
                              <span className="text-lg group-hover:text-[#c79d2a] transition-colors duration-300" style={{ color: "rgba(25,39,74,0.9)" }}>
                                מיזוג
                              </span>
                            </label>

                            <label className="flex items-center gap-3 cursor-pointer group">
                              <input
                                type="checkbox"
                                name="balcony"
                                checked={formData.balcony}
                                onChange={handleInputChange}
                                className="w-6 h-6 rounded-lg border-2 transition-all duration-300 cursor-pointer accent-[#c79d2a]"
                                style={{ borderColor: "rgba(25,39,74,0.3)" }}
                              />
                              <span className="text-lg group-hover:text-[#c79d2a] transition-colors duration-300" style={{ color: "rgba(25,39,74,0.9)" }}>
                                מרפסת
                              </span>
                            </label>

                            <label className="flex items-center gap-3 cursor-pointer group">
                              <input
                                type="checkbox"
                                name="safeRoom"
                                checked={formData.safeRoom}
                                onChange={handleInputChange}
                                className="w-6 h-6 rounded-lg border-2 transition-all duration-300 cursor-pointer accent-[#c79d2a]"
                                style={{ borderColor: "rgba(25,39,74,0.3)" }}
                              />
                              <span className="text-lg group-hover:text-[#c79d2a] transition-colors duration-300" style={{ color: "rgba(25,39,74,0.9)" }}>
                                ממ״ד
                              </span>
                            </label>

                            <label className="flex items-center gap-3 cursor-pointer group">
                              <input
                                type="checkbox"
                                name="elevator"
                                checked={formData.elevator}
                                onChange={handleInputChange}
                                className="w-6 h-6 rounded-lg border-2 transition-all duration-300 cursor-pointer accent-[#c79d2a]"
                                style={{ borderColor: "rgba(25,39,74,0.3)" }}
                              />
                              <span className="text-lg group-hover:text-[#c79d2a] transition-colors duration-300" style={{ color: "rgba(25,39,74,0.9)" }}>
                                מעלית
                              </span>
                            </label>

                            <label className="flex items-center gap-3 cursor-pointer group">
                              <input
                                type="checkbox"
                                name="parking"
                                checked={formData.parking}
                                onChange={handleInputChange}
                                className="w-6 h-6 rounded-lg border-2 transition-all duration-300 cursor-pointer accent-[#c79d2a]"
                                style={{ borderColor: "rgba(25,39,74,0.3)" }}
                              />
                              <span className="text-lg group-hover:text-[#c79d2a] transition-colors duration-300" style={{ color: "rgba(25,39,74,0.9)" }}>
                                חניה
                              </span>
                            </label>

                            <label className="flex items-center gap-3 cursor-pointer group">
                              <input
                                type="checkbox"
                                name="furnished"
                                checked={formData.furnished}
                                onChange={handleInputChange}
                                className="w-6 h-6 rounded-lg border-2 transition-all duration-300 cursor-pointer accent-[#c79d2a]"
                                style={{ borderColor: "rgba(25,39,74,0.3)" }}
                              />
                              <span className="text-lg group-hover:text-[#c79d2a] transition-colors duration-300" style={{ color: "rgba(25,39,74,0.9)" }}>
                                מרוהטת
                              </span>
                            </label>

                            <label className="flex items-center gap-3 cursor-pointer group">
                              <input
                                type="checkbox"
                                name="yard"
                                checked={formData.yard}
                                onChange={handleInputChange}
                                className="w-6 h-6 rounded-lg border-2 transition-all duration-300 cursor-pointer accent-[#c79d2a]"
                                style={{ borderColor: "rgba(25,39,74,0.3)" }}
                              />
                              <span className="text-lg group-hover:text-[#c79d2a] transition-colors duration-300" style={{ color: "rgba(25,39,74,0.9)" }}>
                                חצר
                              </span>
                            </label>
                          </div>
                        </div>

                        <div>
                          <label className="block text-lg font-medium mb-3" style={{ color: "rgba(25,39,74,0.9)" }}>
                            פרטים נוספים
                          </label>
                          <textarea
                            name="additionalDetails"
                            value={formData.additionalDetails}
                            onChange={handleInputChange}
                            rows={5}
                            maxLength={1000}
                            placeholder="ספר לנו עוד על הנכס - מצב כללי, שיפוצים, נוף, חניה, מחסן, וכל מידע רלוונטי אחר..."
                            className="w-full rounded-2xl border px-6 py-4 text-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#c79d2a]/50 resize-none"
                            style={{
                              borderColor: "rgba(25,39,74,0.15)",
                              backgroundColor: "rgba(255,255,255,0.95)",
                              color: "rgba(25,39,74,0.97)",
                              boxShadow: "0 8px 20px rgba(25,39,74,0.08), inset 0 1px 0 rgba(255,255,255,0.6)"
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Personal Information */}
                    <div className="pt-6 border-t" style={{ borderColor: "rgba(25,39,74,0.1)" }}>
                      <h3 className="text-2xl font-serif font-bold mb-6" style={{ color: "rgba(25,39,74,0.97)" }}>
                        פרטים אישיים
                      </h3>
                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <label className="block text-lg font-medium mb-3" style={{ color: "rgba(25,39,74,0.9)" }}>
                            שם פרטי <span style={{ color: "#c79d2a" }}>*</span>
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                            maxLength={30}
                            placeholder="הכנס שם פרטי"
                            className="w-full rounded-2xl border px-6 py-4 text-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#c79d2a]/50"
                            style={{
                              borderColor: "rgba(25,39,74,0.15)",
                              backgroundColor: "rgba(255,255,255,0.95)",
                              color: "rgba(25,39,74,0.97)",
                              boxShadow: "0 8px 20px rgba(25,39,74,0.08), inset 0 1px 0 rgba(255,255,255,0.6)"
                            }}
                          />
                        </div>

                        <div>
                          <label className="block text-lg font-medium mb-3" style={{ color: "rgba(25,39,74,0.9)" }}>
                            שם משפחה <span style={{ color: "#c79d2a" }}>*</span>
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                            maxLength={30}
                            placeholder="הכנס שם משפחה"
                            className="w-full rounded-2xl border px-6 py-4 text-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#c79d2a]/50"
                            style={{
                              borderColor: "rgba(25,39,74,0.15)",
                              backgroundColor: "rgba(255,255,255,0.95)",
                              color: "rgba(25,39,74,0.97)",
                              boxShadow: "0 8px 20px rgba(25,39,74,0.08), inset 0 1px 0 rgba(255,255,255,0.6)"
                            }}
                          />
                        </div>

                        <div>
                          <label className="block text-lg font-medium mb-3" style={{ color: "rgba(25,39,74,0.9)" }}>
                            אימייל <span style={{ color: "#c79d2a" }}>*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            maxLength={50}
                            placeholder="example@email.com"
                            className="w-full rounded-2xl border px-6 py-4 text-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#c79d2a]/50"
                            style={{
                              borderColor: "rgba(25,39,74,0.15)",
                              backgroundColor: "rgba(255,255,255,0.95)",
                              color: "rgba(25,39,74,0.97)",
                              boxShadow: "0 8px 20px rgba(25,39,74,0.08), inset 0 1px 0 rgba(255,255,255,0.6)"
                            }}
                          />
                        </div>

                        <div>
                          <label className="block text-lg font-medium mb-3" style={{ color: "rgba(25,39,74,0.9)" }}>
                            טלפון <span style={{ color: "#c79d2a" }}>*</span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            maxLength={20}
                            placeholder="050-1234567"
                            className="w-full rounded-2xl border px-6 py-4 text-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#c79d2a]/50"
                            style={{
                              borderColor: "rgba(25,39,74,0.15)",
                              backgroundColor: "rgba(255,255,255,0.95)",
                              color: "rgba(25,39,74,0.97)",
                              boxShadow: "0 8px 20px rgba(25,39,74,0.08), inset 0 1px 0 rgba(255,255,255,0.6)"
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Marketing Consent */}
                    <div className="pt-6 border-t" style={{ borderColor: "rgba(25,39,74,0.1)" }}>
                      <label className="flex items-start gap-4 cursor-pointer group">
                        <input
                          type="checkbox"
                          name="agreeToMarketing"
                          checked={formData.agreeToMarketing}
                          onChange={handleInputChange}
                          required
                          className="mt-1 w-6 h-6 rounded-lg border-2 transition-all duration-300 cursor-pointer accent-[#c79d2a]"
                          style={{ borderColor: "rgba(25,39,74,0.3)" }}
                        />
                        <span className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.85)" }}>
                          אני מאשר/ת שתשלחו לי דיוור במייל (:{" "}
                          <a href="/privacy" className="underline transition-colors duration-300 hover:text-[#c79d2a]">
                            קרא/י עוד בתקנון הפרטיות
                          </a>
                          {" "}<span style={{ color: "#c79d2a" }}>*</span>
                        </span>
                      </label>
                    </div>

                    {/* Error Message */}
                    {submitError && (
                      <div
                        id="valuation-form-error"
                        role="alert"
                        aria-live="polite"
                        className="p-6 rounded-2xl border-r-4"
                        style={{
                          backgroundColor: "rgba(239, 68, 68, 0.05)",
                          borderColor: "#ef4444",
                          boxShadow: "0 8px 20px rgba(239, 68, 68, 0.1)"
                        }}
                      >
                        <p className="text-lg font-medium" style={{ color: "rgba(25,39,74,0.97)" }}>
                          {submitError}
                        </p>
                      </div>
                    )}

                    {/* Submit Button */}
                    <div className="pt-4 flex justify-center">
                      <LuxuryButton
                        type="submit"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "שולח..." : "שלח בקשה"}
                      </LuxuryButton>
                    </div>
                  </form>
                )}
              </LuxuryCard>
            </motion.div>
          </div>
        </div>
      </LuxuryBackground>
      </main>
    </>
  )
}
