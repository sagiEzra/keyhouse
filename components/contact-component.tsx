"use client"

import { motion } from "framer-motion"
import {
  FaPhone as Phone,
  FaFacebook as Facebook,
  FaEnvelope as Mail,
  FaWhatsapp as WhatsApp,
  FaInstagram as Instagram,
} from "react-icons/fa"
import { HiOutlineLocationMarker as MapPin } from "react-icons/hi"
import { businessStaticData } from "../config"

export default function ContactComponent() {
  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #23214a0d 0%, #fff 50%, #f1c23b0d 100%)",
      }}
    >
      {/* Decorative gradients */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[45vw] h-[30vw] rounded-full blur-3xl opacity-60"
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
          className="mb-14 text-center"
        >
          <h2
            className="mb-4 font-serif text-3xl font-extrabold md:text-5xl tracking-tight drop-shadow-xl"
            style={{ color: "#23214a" }}
          >
            צור קשר
          </h2>
          <p className="mx-auto max-w-2xl text-lg md:text-xl font-light leading-relaxed" style={{ color: "#23214a" }}>
            אנחנו כאן כדי לענות על כל שאלה ולעזור לך למצוא את הנכס המושלם. צור איתנו קשר בכל אחת מהדרכים הבאות.
          </p>
          <div
            className="mx-auto mt-6 h-1 w-24 rounded-full"
            style={{
              background: "linear-gradient(90deg, #f1c23b 0%, #fff 100%)",
              boxShadow: "0 2px 12px #f1c23b55",
            }}
          />
        </motion.div>

        <div
          className="mx-auto max-w-5xl rounded-3xl bg-white/95 shadow-2xl backdrop-blur-xl p-8 md:p-12 border"
          style={{ borderColor: "#23214a15" }}
        >
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="order-1">
              <h3 className="mb-6 text-2xl font-bold" style={{ color: "#23214a" }}>
                שלח לנו הודעה
              </h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-s font-semibold mb-2" style={{ color: "#23214a" }}>
                    שם מלא *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-2xl border-2 focus:outline-none focus:ring-2 focus:ring-[#f1c23b55] focus:border-[#f1c23b] transition-all duration-300 font-medium text-right"
                    style={{
                      borderColor: "#23214a20",
                    }}
                    placeholder="הכנס את שמך המלא"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-s font-semibold mb-2" style={{ color: "#23214a" }}>
                    מספר טלפון *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 rounded-2xl border-2 focus:outline-none focus:ring-2 focus:ring-[#f1c23b55] focus:border-[#f1c23b] transition-all duration-300 font-medium text-right"
                    style={{
                      borderColor: "#23214a20",
                    }}
                    placeholder="050-123-4567"
                    dir="rtl"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-s font-semibold mb-2" style={{ color: "#23214a" }}>
                    כתובת אימייל
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-2xl border-2 focus:outline-none focus:ring-2 focus:ring-[#f1c23b55] focus:border-[#f1c23b] transition-all duration-300 font-medium text-right"
                    style={{
                      borderColor: "#23214a20",
                    }}
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-s font-semibold mb-2" style={{ color: "#23214a" }}>
                    הודעה
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-2xl border-2 focus:outline-none focus:ring-2 focus:ring-[#f1c23b55] focus:border-[#f1c23b] transition-all duration-300 font-medium resize-none text-right"
                    style={{
                      borderColor: "#23214a20",
                    }}
                    placeholder="ספר לנו על הצרכים שלך..."
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 px-6 rounded-2xl font-bold text-lg shadow-xl transition-all duration-300"
                  style={{
                    background: "linear-gradient(90deg, #23214a 0%, #23214a 100%)",
                    color: "#fff",
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLButtonElement).style.background =
                      "linear-gradient(90deg, #f1c23b 0%, #f1c23b 100%)"
                    ;(e.currentTarget as HTMLButtonElement).style.color = "#23214a"
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLButtonElement).style.background =
                      "linear-gradient(90deg, #23214a 0%, #23214a 100%)"
                    ;(e.currentTarget as HTMLButtonElement).style.color = "#fff"
                  }}
                >
                  שלח הודעה
                </motion.button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="order-2 flex flex-col justify-between">
              <div>
                <h3 className="mb-6 text-2xl font-bold" style={{ color: "#23214a" }}>
                  משרדי KeyHouse
                </h3>
                <div className="mb-8 space-y-6">
                  <motion.div whileHover={{ scale: 1.02 }} className="flex items-start gap-4">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-white/70 shadow-lg border-4 transition-all duration-300 group-hover:bg-yellow-50 group-hover:scale-110"
                      style={{ borderColor: "#f1c23b" }}
                    >
                      <MapPin className="h-7 w-7" style={{ color: "#23214a" }} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1" style={{ color: "#23214a" }}>
                        כתובת
                      </h4>
                      <p className="text-xl" style={{ color: "#23214a" }}>{businessStaticData.location}</p>
                    </div>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} className="flex items-start gap-4">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-white/70 shadow-lg border-4 transition-all duration-300 group-hover:bg-yellow-50 group-hover:scale-110"
                      style={{ borderColor: "#f1c23b" }}
                    >
                      <Mail className="h-7 w-7" style={{ color: "#23214a" }} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1" style={{ color: "#23214a" }}>
                        דוא״ל
                      </h4>
                      <p className="text-xl" style={{ color: "#23214a" }}>{businessStaticData.social.email}</p>
                    </div>
                  </motion.div>
                </div>

                <div className="flex flex-col gap-3 mb-8">
                  <motion.a
                    href={businessStaticData.phone.callLink}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 rounded-2xl px-6 py-3 font-semibold text-base shadow-lg transition-all duration-300"
                    style={{
                      background: "linear-gradient(90deg, #23214a 0%, #23214a 100%)",
                      color: "#fff",
                    }}
                    onMouseEnter={(e) => {
                      ;(e.currentTarget as HTMLAnchorElement).style.background =
                        "linear-gradient(90deg, #f1c23b 0%, #f1c23b 100%)"
                      ;(e.currentTarget as HTMLAnchorElement).style.color = "#23214a"
                    }}
                    onMouseLeave={(e) => {
                      ;(e.currentTarget as HTMLAnchorElement).style.background =
                        "linear-gradient(90deg, #23214a 0%, #23214a 100%)"
                      ;(e.currentTarget as HTMLAnchorElement).style.color = "#fff"
                    }}
                  >
                    <Phone className="h-5 w-5" />
                    <span>{businessStaticData.phone.numberToDisplay}</span>
                  </motion.a>
                </div>

                <div className="flex gap-4 justify-center">
                  <motion.a
                    href="https://facebook.com/keyhouse"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="rounded-2xl bg-[#1877F2] p-3 text-white shadow-lg transition-all duration-300 hover:bg-[#0e6edf]"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-6 w-6" />
                  </motion.a>
                  <motion.a
                    href="https://instagram.com/keyhouse"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="rounded-2xl bg-gradient-to-r from-[#E4405F] to-[#C13584] p-3 text-white shadow-lg transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-6 w-6" />
                  </motion.a>
                  <motion.a
                    href={businessStaticData.phone.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="rounded-2xl bg-[#25D366] p-3 text-white shadow-lg transition-all duration-300 hover:bg-[#20b358]"
                    aria-label="WhatsApp"
                  >
                    <WhatsApp className="h-6 w-6" />
                  </motion.a>
                </div>
              </div>

              {/* Map */}
              <div className="mt-10">
                <div className="overflow-hidden rounded-3xl shadow-2xl w-full h-60 lg:h-72">
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
      </div>
    </section>
  )
}
