"use client"

import { motion } from "framer-motion"
import { FaFacebook as Facebook, FaInstagram as Instagram, FaEnvelope as Mail, FaPhone as Phone, FaWhatsapp as Whatsapp } from "react-icons/fa"

export default function TeamSection() {
  const team = [
    {
      name: "רותם קהלון",
      role: "מייסדת ומנהלת",
      bio: "עם ניסיון של מעל לעשור בשוק הנדל״ן באילת, רותם מביאה ידע מעמיק, ראייה אסטרטגית וגישה אישית לכל עסקה. היא מאמינה שהקשבה ללקוח היא המפתח להצלחה.",
      image: "/images/rotem1.jpg",
      social: {
        phone: "+972501234567",
        email: "rotem@keyhouse.co.il",
        facebook: "https://facebook.com/rotem",
        instagram: "https://instagram.com/rotem",
      },
    },
    {
      name: "שירז קהלון",
      role: "סוכנת נדל״ן",
      bio: "שירז מביאה לצוות שלנו אנרגיה חיובית וגישה מקצועית. עם רקע בשיווק ותקשורת, היא מצטיינת ביצירת קשרים ובהבנת הצרכים האמיתיים של הלקוחות היקרים והאהובים שלנו.",
      image: "/images/image33.png",
      social: {
        phone: "+972507654321",
        email: "shiraz@keyhouse.co.il",
        facebook: "https://facebook.com/shiraz",
        instagram: "https://instagram.com/shiraz",
      },
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #23214a0d 0%, #fff 50%, #f1c23b0d 100%)",
      }}
    >
      {/* Decorative gradients */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[60vw] h-[40vw] rounded-full blur-3xl opacity-60"
        style={{
          background: "linear-gradient(135deg, #23214a4d 0%, #23214a1a 100%)",
        }}
      />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2
            className="mb-4 font-serif text-3xl font-bold md:text-4xl tracking-tight drop-shadow-xl"
            style={{ color: "#23214a" }}
          >
            הצוות שלנו
          </h2>
          <p className="mx-auto max-w-3xl text-lg font-medium" style={{ color: "#23214a" }}>
            הכירו את האנשים המקצועיים והמסורים שעומדים מאחורי KeyHouse, ומחויבים לעזור לכם למצוא את הנכס המושלם.
          </p>
          <div
            className="mx-auto mt-6 h-1 w-28 rounded-full"
            style={{
              background: "linear-gradient(90deg, #f1c23b 0%, #fff 100%)",
              boxShadow: "0 2px 12px #f1c23b55",
            }}
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-10 md:grid-cols-2"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group overflow-hidden rounded-2xl bg-white/90 shadow-xl border backdrop-blur-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              style={{
                borderColor: "#23214a33",
                boxShadow: "0 4px 24px 0 #23214a14, 0 1.5px 8px 0 #23214a08",
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px 0 #f1c23b80, 0 1.5px 8px 0 #f1c23b40"
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 24px 0 #23214a14, 0 1.5px 8px 0 #23214a08"
              }}
            >
              <div className="flex flex-col md:flex-row">
                <div className="h-96 w-[22rem] overflow-hidden md:h-auto md:w-[56%] relative flex items-stretch">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105 rounded-l-2xl md:rounded-l-2xl md:rounded-r-none rounded-t-2xl md:rounded-t-none shadow-lg border-2 border-[#f1c23b33]"
                    style={{ minHeight: '100%', minWidth: '100%' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="flex flex-1 flex-col justify-between p-8 md:p-10 bg-white/95 rounded-b-2xl md:rounded-b-none md:rounded-r-2xl shadow-inner">
                  <div>
                    <h3 className="mb-1 text-3xl font-extrabold tracking-tight" style={{ color: "#23214a" }}>
                      {member.name}
                    </h3>
                    <p className="mb-4 font-semibold text-lg" style={{ color: "#f1c23b" }}>
                      {member.role}
                    </p>
                    <p className="mb-8 text-lg leading-relaxed" style={{ color: "#23214a" }}>
                      {member.bio}
                    </p>
                    {/* Minimalistic Separator */}
                    <div className="w-full flex justify-center my-4">
                      <div className="h-[2.5px] w-16 rounded-full bg-gradient-to-r from-[#f1c23b] via-[#e0e0e0] to-[#f1c23b] opacity-60" />
                    </div>
                  </div>

                  {/* Social Buttons */}
                  <div className="flex flex-col gap-3 mt-4">
                    {/* Row 1: Phone & Email */}
                    <div className="flex flex-row gap-2 w-full">
                      <a
                        href={`tel:${member.social.phone}`}
                        className="flex-1 flex items-center justify-center gap-2 rounded-full px-4 py-2 text-base font-medium transition-all duration-300 hover:scale-105 shadow-md border border-[#23214a22] bg-[#23214a] text-white hover:bg-[#f1c23b] hover:text-[#23214a]"
                      >
                        <Phone className="h-5 w-5" />
                        <span>התקשר</span>
                      </a>
                      <a
                        href={`mailto:${member.social.email}`}
                        className="flex-1 flex items-center justify-center gap-2 rounded-full px-4 py-2 text-base font-medium transition-all duration-300 hover:scale-105 shadow-md border border-[#23214a22] bg-[#23214a] text-white hover:bg-[#f1c23b] hover:text-[#23214a]"
                      >
                        <Mail className="h-5 w-5" />
                        <span>אימייל</span>
                      </a>
                    </div>
                    {/* Row 2: Facebook, Instagram, WhatsApp */}
                    <div className="flex flex-row gap-2 w-full">
                      <a
                        href={member.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 rounded-full px-4 py-2 text-base font-medium transition-all duration-300 hover:scale-105 shadow-md border border-[#1877F222] bg-[#1877F2] text-white hover:bg-[#0e6edf]"
                      >
                        <Facebook className="h-5 w-5" />
                        <span>פייסבוק</span>
                      </a>
                      <a
                        href={member.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 rounded-full px-4 py-2 text-base font-medium transition-all duration-300 hover:scale-105 shadow-md border border-[#E4405F22] bg-gradient-to-r from-[#E4405F] to-[#C13584] text-white hover:from-[#C13584] hover:to-[#E4405F]"
                      >
                        <Instagram className="h-5 w-5" />
                        <span>אינסטגרם</span>
                      </a>
                      <a
                        href={`https://wa.me/${member.social.phone.replace(/[^\d]/g, "")}?text=%D7%A9%D7%9C%D7%95%D7%9D%20%D7%A8%D7%95%D7%AA%D7%9D%20%D7%94%D7%92%D7%A2%D7%AA%D7%99%20%D7%9E%D7%94%D7%90%D7%AA%D7%A8%2C%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%AA%D7%A2%D7%A0%D7%99%D7%99%D7%A0%2F%D7%AA%20%D7%91%D7%90%D7%97%D7%93%20%D7%9E%D7%94%D7%A9%D7%99%D7%A8%D7%95%D7%AA%D7%99%D7%9D%20%D7%A9%D7%9C%D7%9A%20%D7%95%D7%90%D7%A9%D7%9E%D7%97%20%D7%A9%D7%A0%D7%93%D7%91%D7%A8%20%F0%9F%98%8A`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 rounded-full px-4 py-2 text-base font-medium transition-all duration-300 hover:scale-105 shadow-md border border-[#25d36622] bg-[#25d366] text-white hover:bg-[#1ebe5d]"
                      >
                        <Whatsapp className="h-5 w-5" />
                        <span>וואטסאפ</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
