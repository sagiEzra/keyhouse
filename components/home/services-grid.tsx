"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { FaBullseye, FaSearch, FaKey, FaHome, FaArrowRight } from "react-icons/fa"

export default function ServicesGrid() {
  const services = [
    {
      title: "מוכרים",
      subtitle: "מוכרים במחיר הטוב ביותר",
      description: "שיווק מקצועי שמביא תוצאות ומקסם את הרווח שלכם",
      image: "/images/buying-card.jpg",
      href: "/selling",
      icon: <FaBullseye className="h-8 w-8 text-[#f1c23b] drop-shadow-lg" />,
    },
    {
      title: "קונים",
      subtitle: "מוצאים את הבית המושלם",
      description: "ליווי מקצועי ואישי למציאת הנכס שחלמתם עליו - למגורים או השקעה חכמה",
      image: "/images/buying-card.jpg",
      href: "/buying",
      icon: <FaSearch className="h-8 w-8 text-[#f1c23b] drop-shadow-lg" />,
    },
    {
      title: "ניהול נכסים",
      subtitle: "השקעה בלי כאבי ראש",
      description: "ניהול מקצועי שמבטיח תשואה מקסימלית ושקט נפשי",
      image: "/images/properties-card.jpg",
      href: "/property-management",
      icon: <FaKey className="h-8 w-8 text-[#f1c23b] drop-shadow-lg" />,
    },
    {
      title: "הנכסים שלנו",
      subtitle: "קטלוג נכסים מובחר",
      description: "מבחר עשיר של נכסים איכותיים למכירה ולהשכרה באילת",
      image: "/images/properties-card.jpg",
      href: "/catalog",
      icon: <FaHome className="h-8 w-8 text-[#f1c23b] drop-shadow-lg" />,
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
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants as any}
              className="group relative"
              whileHover={{ y: -8, boxShadow: "0 8px 32px #f1c23b55" }}
            >
              <Link href={service.href} className="block focus:outline-none">
                <div
                  className="relative aspect-[3/5] overflow-hidden rounded-2xl shadow-xl border bg-white/90 backdrop-blur-xl transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2 focus:ring-4 focus:ring-[#f1c23b55]"
                  style={{
                    borderColor: "#ffff",
                    boxShadow: "0 12px 48px 0 #23214a33, 0 4px 24px 0 #23214a18, 0 1.5px 16px 0 #23214a08",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px 0 #f1c23b80, 0 1.5px 8px 0 #f1c23b40"
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 24px 0 #23214a14, 0 1.5px 8px 0 #23214a08"
                  }}
                >
                  {/* Decorative Icon */}
                  {/* <div className="absolute top-5 left-5 z-30 bg-white/80 rounded-full p-2 shadow-md">
                    {service.icon}
                  </div> */}
                  {/* Background Image */}
                  <img
                    src={service.image || "/placeholder.svg?height=700&width=400"}
                    alt={service.title}
                    className="absolute inset-0 h-full w-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Main Overlay - stronger for contrast */}
                  <div
                    className="absolute inset-0 opacity-40 group-hover:opacity-50 transition-opacity duration-500"
                    style={{
                      background: "linear-gradient(135deg, #23214a70 0%, #23214a40 100%)",
                    }}
                  />
                  {/* Bottom Gradient for Text Contrast */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-32 opacity-90 group-hover:opacity-95 transition-opacity duration-500"
                    style={{
                      background: "linear-gradient(to top, #23214aee 0%, #23214a99 50%, transparent 100%)",
                    }}
                  />
                  {/* Left-Pointing Arrow with Service Title */}
                  <div className="absolute top-6 right-0 z-20">
                    <div
                      className="relative overflow-hidden transition-all duration-500 group-hover:scale-110 group-hover:-translate-x-1 drop-shadow-[0_4px_12px_rgba(35,33,74,0.18)] group-hover:drop-shadow-[0_12px_32px_rgba(241,194,59,0.35)]"
                    >
                      <div
                        className="px-8 py-4 pl-12 font-bold text-base md:text-lg tracking-wide shadow-xl"
                        style={{
                          background: "linear-gradient(90deg, #23214a 0%, #23214a 100%)",
                          color: "#ffff",
                          clipPath: "polygon(20px 0, 100% 0, 100% 100%, 20px 100%, 0 50%)",
                        }}
                      >
                        {service.title}
                      </div>
                    </div>
                  </div>
                  {/* Subtitle at Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
                    <div className="text-center">
                      <h3
                        className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight drop-shadow-xl"
                        style={{ color: "#fff", textShadow: "0 2px 8px #23214a99" }}
                      >
                        {service.subtitle}
                      </h3>
                      <p className="mt-2 text-base md:text-lg font-medium text-white/90 drop-shadow" style={{ textShadow: "0 1px 6px #23214a88" }}>
                        {service.description}
                      </p>
                    </div>
                  </div>
                  {/* Hover Border Effect */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-opacity-80 transition-all duration-500"
                    // style={{ borderColor: "#23214aee" }}
                  />
                  {/* Additional Hover Glow Effect */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                    style={{
                      background: "linear-gradient(135deg, #f1c23b40 0%, transparent 50%, #f1c23b20 100%)",
                    }}
                  />
                  {/* Bottom Info Bar */}
                  {/* <div className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-center gap-2 py-3 bg-[#23214aee] bg-opacity-90 rounded-b-2xl">
                    <span className="text-white font-semibold text-base md:text-lg">לפרטים נוספים</span>
                    <FaArrowRight className="text-[#f1c23b] h-5 w-5" />
                  </div> */}
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
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
