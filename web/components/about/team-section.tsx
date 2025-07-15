"use client"

import { motion } from "framer-motion"
import { FaFacebook as Facebook, FaInstagram as Instagram, FaEnvelope as Mail, FaPhone as Phone } from "react-icons/fa"

export default function TeamSection() {
  const team = [
    {
      name: "רותם כהן",
      role: "מייסדת ומנהלת",
      bio: "עם ניסיון של מעל 12 שנה בשוק הנדל״ן באילת, רותם מביאה ידע מעמיק, ראייה אסטרטגית וגישה אישית לכל עסקה. היא מאמינה שהקשבה ללקוח היא המפתח להצלחה.",
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
      bio: "שירז מביאה לצוות שלנו אנרגיה חיובית וגישה מקצועית. עם רקע בשיווק ותקשורת, היא מצטיינת ביצירת קשרים ובהבנת הצרכים האמיתיים של הלקוחות שלנו.",
      image: "/images/image3.jpg",
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
                <div className="h-80 w-full overflow-hidden md:h-auto md:w-2/5 relative">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
                  <div>
                    <h3 className="mb-1 text-2xl font-bold" style={{ color: "#23214a" }}>
                      {member.name}
                    </h3>
                    <p className="mb-4 font-medium" style={{ color: "#f1c23b" }}>
                      {member.role}
                    </p>
                    <p className="mb-6" style={{ color: "#23214a" }}>
                      {member.bio}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href={`tel:${member.social.phone}`}
                      className="flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-all duration-300 hover:scale-105 shadow-md"
                      style={{
                        backgroundColor: "#23214a",
                        color: "#ffffff",
                      }}
                      onMouseEnter={(e) => {
                        ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#f1c23b"
                        ;(e.currentTarget as HTMLAnchorElement).style.color = "#23214a"
                      }}
                      onMouseLeave={(e) => {
                        ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#23214a"
                        ;(e.currentTarget as HTMLAnchorElement).style.color = "#ffffff"
                      }}
                    >
                      <Phone className="h-4 w-4" />
                      <span>התקשר</span>
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-all duration-300 hover:scale-105 shadow-md"
                      style={{
                        backgroundColor: "#23214a",
                        color: "#ffffff",
                      }}
                      onMouseEnter={(e) => {
                        ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#f1c23b"
                        ;(e.currentTarget as HTMLAnchorElement).style.color = "#23214a"
                      }}
                      onMouseLeave={(e) => {
                        ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#23214a"
                        ;(e.currentTarget as HTMLAnchorElement).style.color = "#ffffff"
                      }}
                    >
                      <Mail className="h-4 w-4" />
                      <span>אימייל</span>
                    </a>
                    <a
                      href={member.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full bg-[#1877F2] px-4 py-2 text-sm text-white transition-all duration-300 hover:bg-[#0e6edf] hover:scale-105 shadow-md"
                    >
                      <Facebook className="h-4 w-4" />
                      <span>פייסבוק</span>
                    </a>
                    <a
                      href={member.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#E4405F] to-[#C13584] px-4 py-2 text-sm text-white transition-all duration-300 hover:scale-105 shadow-md"
                    >
                      <Instagram className="h-4 w-4" />
                      <span>אינסטגרם</span>
                    </a>
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
