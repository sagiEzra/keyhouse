"use client"

import { motion } from "framer-motion"
import { FaPhone as Phone, FaFacebook as Facebook, FaEnvelope as Mail } from "react-icons/fa"
import { HiOutlineLocationMarker as MapPin } from "react-icons/hi"

export default function ContactComponent() {
  return (
    <section className="bg-gradient-to-b from-white via-blue-50 to-yellow-50 py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14 text-center"
        >
          <h2 className="mb-4 font-serif text-3xl font-extrabold text-gray-900 md:text-5xl tracking-tight">
            צור קשר
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl">
            אנחנו כאן כדי לענות על כל שאלה ולעזור לך למצוא את הנכס המושלם. צור איתנו קשר בכל אחת מהדרכים הבאות.
          </p>
          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 animate-pulse"></div>
        </motion.div>

        <div className="mx-auto max-w-5xl rounded-3xl bg-white/70 shadow-2xl backdrop-blur-md p-8 md:p-14 border border-gray-100">
          <div className="grid gap-10 md:grid-cols-2">
            {/* Contact Info */}
            <div className="order-2 md:order-1 flex flex-col justify-center">
              <h3 className="mb-8 text-2xl font-bold text-gray-900">משרדי KeyHouse</h3>
              <div className="mb-10 space-y-6">
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 shadow-md">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">כתובת</h4>
                    <p className="text-gray-600">שדרות התמרים 12, אילת</p>
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 shadow-md">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">דוא״ל</h4>
                    <p className="text-gray-600">info@keyhouse.co.il</p>
                  </div>
                </motion.div>
              </div>

              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="tel:+972501234567"
                  whileHover={{ scale: 1.07, backgroundColor: "#facc15", color: "#1e3a8a" }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-yellow-400 hover:text-blue-900"
                >
                  <Phone className="h-5 w-5" />
                  <span>050-123-4567</span>
                </motion.a>
                <motion.a
                  href="https://facebook.com/keyhouse"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.07, backgroundColor: "#1877F2" }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 rounded-full bg-[#1877F2] px-7 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#0e6edf]"
                >
                  <Facebook className="h-5 w-5" />
                  <span>פייסבוק</span>
                </motion.a>
              </div>
            </div>

            {/* Map */}
            <div className="order-1 md:order-2 flex items-center">
              <div className="overflow-hidden rounded-2xl shadow-lg border border-gray-200 w-full h-72 md:h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.789012345678!2d34.9517!3d29.5577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDMzJzI3LjciTiAzNMKwNTcnMDYuMSJF!5e0!3m2!1sen!2sil!4v1620000000000!5m2!1sen!2sil"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="מפת המשרד"
                  className="h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}