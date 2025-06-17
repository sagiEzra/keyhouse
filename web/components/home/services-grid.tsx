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
            color: "from-blue-600/80 to-blue-800/80",
        },
        {
            title: "מוכרים",
            subtitle: "מוכרים במחיר הטוב ביותר",
            description: "שיווק מקצועי שמביא תוצאות ומקסם את הרווח שלכם",
            image: "/images/selling-card.jpg",
            href: "/selling",
            color: "from-blue-700/80 to-blue-900/80",
        },
        {
            title: "ניהול נכסים",
            subtitle: "השקעה בלי כאבי ראש",
            description: "ניהול מקצועי שמבטיח תשואה מקסימלית ושקט נפשי",
            image: "/images/management-card.jpg",
            href: "/property-management",
            color: "from-blue-800/80 to-blue-600/80",
        },
        {
            title: "הנכסים שלנו",
            subtitle: "קטלוג נכסים מובחר",
            description: "מבחר עשיר של נכסים איכותיים למכירה ולהשכרה באילת",
            image: "/images/properties-card.jpg",
            href: "/properties",
            color: "from-blue-600/80 to-blue-700/80",
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
        <section id="services-grid" className="relative bg-gradient-to-br from-blue-50 via-white to-yellow-50 py-24">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center"
                >
                    <h2 className="mb-4 font-serif text-3xl font-extrabold text-gray-900 md:text-5xl tracking-tight">
                        פותחים את כל הדלתות לכל צרכי הנדל"ן שלך
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl">
                        הכול תחת קורת גג אחת - יש על מי לסמוך
                    </p>
                    <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 animate-pulse"></div>
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
                                <div className="relative aspect-square overflow-hidden rounded-3xl shadow-xl bg-white/60 backdrop-blur-md border border-gray-200 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-3 group-hover:border-yellow-400/80 focus:ring-4 focus:ring-yellow-300">
                                    {/* Background Image */}
                                    <img
                                        src={service.image || "/placeholder.svg?height=400&width=400"}
                                        alt={service.title}
                                        className="absolute inset-0 h-full w-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                                    />

                                    {/* Glassmorphism Overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-80 group-hover:opacity-90 transition-opacity duration-500`} />

                                    {/* Content */}
                                    <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-center text-white">
                                        <h3 className="mb-2 font-serif text-2xl md:text-3xl lg:text-4xl font-bold drop-shadow-lg">{service.title}</h3>
                                        <p className="mb-2 text-lg md:text-xl font-medium text-blue-100/90 drop-shadow">{service.subtitle}</p>
                                        <p className="mb-8 text-base md:text-lg text-blue-50/90 opacity-95">{service.description}</p>
                                        <div className="inline-flex items-center gap-2 rounded-full bg-white/40 px-7 py-3 shadow-lg backdrop-blur-md transition-all duration-300 group-hover:bg-yellow-400/90 group-hover:text-blue-900 text-white font-semibold text-base hover:scale-105">
                                            <span>לפרטים נוספים</span>
                                            <FaArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                                        </div>
                                    </div>
                                    <div className="pointer-events-none absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-yellow-400/80 transition-all duration-500" />
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
                    <p className="mb-6 text-lg text-gray-700 font-medium">לא בטוחים איזה שירות מתאים לכם? אנחנו כאן לעזור</p>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-10 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:from-yellow-400 hover:to-yellow-500 hover:text-blue-900"
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