"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { FaArrowLeft } from "react-icons/fa"

export default function ServicesGrid() {
  const services = [
    {
      title: "קונים",
      subtitle: "מוצאים את הבית המושלם",
      description: "ליווי מקצועי ואישי למציאת הנכס שחלמתם עליו",
      image: "/images/buying-card.jpg",
      href: "/buying",
    },
    {
      title: "מוכרים",
      subtitle: "מוכרים במחיר הטוב ביותר",
      description: "שיווק מקצועי שמביא תוצאות ומקסם את הרווח שלכם",
      image: "/images/selling-card.jpg",
      href: "/selling",
    },
    {
      title: "ניהול נכסים",
      subtitle: "השקעה בלי כאבי ראש",
      description: "ניהול מקצועי שמבטיח תשואה מקסימלית ושקט נפשי",
      image: "/images/management-card.jpg",
      href: "/property-management",
    },
    {
      title: "הנכסים שלנו",
      subtitle: "קטלוג נכסים מובחר",
      description: "מבחר עשיר של נכסים איכותיים למכירה ולהשכרה באילת",
      image: "/images/properties-card.jpg",
      href: "/properties",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  }

  return (
    <section
      id="services-grid"
      className="relative py-24 overflow-hidden"
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
      <div
        className="pointer-events-none absolute bottom-0 right-0 w-1/3 h-1/3 blur-2xl opacity-40"
        style={{
          background: "linear-gradient(45deg, #f1c23b60 0%, transparent 100%)",
        }}
      />

      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2
            className="mb-4 font-serif text-3xl font-extrabold md:text-5xl tracking-tight drop-shadow-xl"
            style={{ color: "#23214a" }}
          >
            פותחים את כל הדלתות לכל צרכי הנדל"ן שלך
          </h2>
          <p className="mx-auto max-w-2xl text-lg md:text-xl font-semibold" style={{ color: "#23214a" }}>
            הכול תחת קורת גג אחת - יש על מי לסמוך
          </p>
          <div
            className="mx-auto mt-6 h-2 w-28 rounded-full"
            style={{
              background: "linear-gradient(90deg, #f1c23b 0%, #fff 100%)",
              boxShadow: "0 2px 12px #f1c23b55",
            }}
          />
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={cardVariants} className="group">
              <Link href={service.href} className="block focus:outline-none">
                <div
                  className="relative aspect-square overflow-hidden rounded-3xl shadow-xl bg-white/60 backdrop-blur-xl border transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-3 focus:ring-4 focus:ring-[#f1c23b55]"
                  style={{
                    borderColor: "#23214a33",
                    // focusRingColor: "#f1c23b55",
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLDivElement).style.borderColor = "#f1c23b80"
                    ;(e.currentTarget as HTMLDivElement).style.boxShadow =
                      "0 8px 32px 0 #f1c23b80, 0 1.5px 8px 0 #f1c23b40"
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLDivElement).style.borderColor = "#23214a33"
                    ;(e.currentTarget as HTMLDivElement).style.boxShadow =
                      "0 4px 24px 0 #23214a14, 0 1.5px 8px 0 #23214a08"
                  }}
                >
                  {/* Background Image */}
                  <img
                    src={service.image || "/placeholder.svg?height=400&width=400"}
                    alt={service.title}
                    className="absolute inset-0 h-full w-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Overlay */}
                  <div
                    className="absolute inset-0 opacity-80 group-hover:opacity-90 transition-opacity duration-500"
                    style={{
                      background: "linear-gradient(135deg, #23214a90 0%, #23214a80 100%)",
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-center text-white">
                    <h3 className="mb-2 font-serif text-2xl md:text-3xl lg:text-4xl font-bold drop-shadow-xl">
                      {service.title}
                    </h3>
                    <p className="mb-2 text-lg md:text-xl font-medium drop-shadow-lg" style={{ color: "#f1c23b" }}>
                      {service.subtitle}
                    </p>
                    <p className="mb-8 text-base md:text-lg text-blue-50/90 opacity-95 drop-shadow">
                      {service.description}
                    </p>
                    <div
                      className="inline-flex items-center gap-2 rounded-full bg-white/40 px-7 py-3 shadow-xl backdrop-blur-xl transition-all duration-300 group-hover:scale-105 text-white font-semibold text-base"
                      style={{
                        background: "rgba(255, 255, 255, 0.4)",
                      }}
                      onMouseEnter={(e) => {
                        ;(e.currentTarget as HTMLDivElement).style.background = "#f1c23b"
                        ;(e.currentTarget as HTMLDivElement).style.color = "#23214a"
                      }}
                      onMouseLeave={(e) => {
                        ;(e.currentTarget as HTMLDivElement).style.background = "rgba(255, 255, 255, 0.4)"
                        ;(e.currentTarget as HTMLDivElement).style.color = "#ffffff"
                      }}
                    >
                      <span>לפרטים נוספים</span>
                      <FaArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                    </div>
                  </div>
                  <div
                    className="pointer-events-none absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-opacity-80 transition-all duration-500"
                    style={{ borderColor: "#f1c23b" }}
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <p className="mb-6 text-lg font-medium" style={{ color: "#23214a" }}>
            לא בטוחים איזה שירות מתאים לכם? אנחנו כאן לעזור
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full px-10 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:shadow-2xl"
              style={{
                background: "linear-gradient(90deg, #23214a 0%, #23214a 100%)",
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLAnchorElement).style.background =
                  "linear-gradient(90deg, #f1c23b 0%, #f1c23b 100%)"
                ;(e.currentTarget as HTMLAnchorElement).style.color = "#23214a"
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLAnchorElement).style.background =
                  "linear-gradient(90deg, #23214a 0%, #23214a 100%)"
                ;(e.currentTarget as HTMLAnchorElement).style.color = "#ffffff"
              }}
            >
              <span>בואו נדבר</span>
              <FaArrowLeft className="h-5 w-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
