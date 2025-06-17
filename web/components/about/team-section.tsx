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
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-serif text-3xl font-bold text-gray-900 md:text-4xl">הצוות שלנו</h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            הכירו את האנשים המקצועיים והמסורים שעומדים מאחורי KeyHouse, ומחויבים לעזור לכם למצוא את הנכס המושלם.
          </p>
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
              className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex flex-col md:flex-row">
                <div className="h-80 w-full overflow-hidden md:h-auto md:w-2/5">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
                  <div>
                    <h3 className="mb-1 text-2xl font-bold text-gray-900">{member.name}</h3>
                    <p className="mb-4 text-blue-600">{member.role}</p>
                    <p className="mb-6 text-gray-600">{member.bio}</p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href={`tel:${member.social.phone}`}
                      className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
                    >
                      <Phone className="h-4 w-4" />
                      <span>התקשר</span>
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
                    >
                      <Mail className="h-4 w-4" />
                      <span>אימייל</span>
                    </a>
                    <a
                      href={member.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-[#1877F2]/10 hover:text-[#1877F2]"
                    >
                      <Facebook className="h-4 w-4" />
                      <span>פייסבוק</span>
                    </a>
                    <a
                      href={member.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-[#E4405F]/10 hover:text-[#E4405F]"
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
