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
import LuxuryButton from "@/components/ui/luxury-button"
import SectionHeader from "@/components/ui/section-header"
import LuxuryCard from "@/components/ui/luxury-card"

export default function ContactComponent() {
  return (
    <section
      className="relative py-32 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, #fafafa 50%, rgba(199,157,42,0.03) 100%)",
      }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader
          title="צור קשר"
          subtitle="אנחנו כאן כדי לענות על כל שאלה ולעזור לך למצוא את הנכס המושלם. צור איתנו קשר בכל אחת מהדרכים הבאות."
          className="mt-10"
        />

        <LuxuryCard className="mx-auto max-w-5xl p-10 md:p-14" hoverable={false}>
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="order-1">
              <h3 className="mb-8 text-2xl font-serif font-bold" style={{ color: "rgba(25,39,74,0.97)" }}>
                שלח לנו הודעה
              </h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-lg font-semibold mb-3" style={{ color: "rgba(25,39,74,0.97)" }}>
                    שם מלא *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-2xl border px-6 py-4 text-lg transition-all duration-300 focus:outline-none focus:ring-2 text-right"
                    style={{
                      borderColor: "rgba(25,39,74,0.15)",
                      backgroundColor: "rgba(255,255,255,0.95)",
                      color: "rgba(25,39,74,0.97)",
                      boxShadow: "0 8px 20px rgba(25,39,74,0.08), inset 0 1px 0 rgba(255,255,255,0.6)"
                    }}
                    placeholder="הכנס את שמך המלא"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-lg font-semibold mb-3" style={{ color: "rgba(25,39,74,0.97)" }}>
                    מספר טלפון *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full rounded-2xl border px-6 py-4 text-lg transition-all duration-300 focus:outline-none focus:ring-2 text-right"
                    style={{
                      borderColor: "rgba(25,39,74,0.15)",
                      backgroundColor: "rgba(255,255,255,0.95)",
                      color: "rgba(25,39,74,0.97)",
                      boxShadow: "0 8px 20px rgba(25,39,74,0.08), inset 0 1px 0 rgba(255,255,255,0.6)"
                    }}
                    placeholder="050-123-4567"
                    dir="rtl"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-lg font-semibold mb-3" style={{ color: "rgba(25,39,74,0.97)" }}>
                    כתובת אימייל
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full rounded-2xl border px-6 py-4 text-lg transition-all duration-300 focus:outline-none focus:ring-2 text-right"
                    style={{
                      borderColor: "rgba(25,39,74,0.15)",
                      backgroundColor: "rgba(255,255,255,0.95)",
                      color: "rgba(25,39,74,0.97)",
                      boxShadow: "0 8px 20px rgba(25,39,74,0.08), inset 0 1px 0 rgba(255,255,255,0.6)"
                    }}
                    placeholder="your@email.com"
                  />
                  <div className="mt-3 flex items-start gap-2 select-none">
                    <input
                      type="checkbox"
                      id="newsletter"
                      name="newsletter"
                      className="mt-1 h-4 w-4 rounded border-2 transition-all duration-300 cursor-pointer"
                      style={{
                        borderColor: "rgba(25,39,74,0.3)",
                        accentColor: "#c79d2a"
                      }}
                    />
                    <label htmlFor="newsletter" className="text-sm leading-relaxed cursor-pointer" style={{ color: "rgba(25,39,74,0.7)" }}>
                      אני מאשר שתשלחו לי דיוור במייל (:{" "}
                      <a href="/privacy-policy" className="underline transition-colors duration-300 hover:text-[#c79d2a]">
                        קרא עוד בתקנון הפרטיות
                      </a>
                    </label>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-lg font-semibold mb-3" style={{ color: "rgba(25,39,74,0.97)" }}>
                    הודעה
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full rounded-2xl border px-6 py-4 text-lg transition-all duration-300 focus:outline-none focus:ring-2 resize-none text-right"
                    style={{
                      borderColor: "rgba(25,39,74,0.15)",
                      backgroundColor: "rgba(255,255,255,0.95)",
                      color: "rgba(25,39,74,0.97)",
                      boxShadow: "0 8px 20px rgba(25,39,74,0.08), inset 0 1px 0 rgba(255,255,255,0.6)"
                    }}
                    placeholder="ספר לנו על הצרכים שלך..."
                  />
                </div>
                <LuxuryButton type="submit" className="w-full">
                  שלח הודעה
                </LuxuryButton>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="order-2 flex flex-col justify-between">
              <div>
                <h3 className="mb-8 text-2xl font-serif font-bold" style={{ color: "rgba(25,39,74,0.97)" }}>
                  משרדי KeyHouse
                </h3>
                <div className="mb-14 space-y-6">
                  <motion.div whileHover={{ scale: 1.02 }} className="flex items-start gap-4">
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg transition-all duration-300"
                      style={{
                        background: "linear-gradient(135deg, rgba(199,157,42,0.1) 0%, rgba(255,255,255,0.9) 100%)",
                        border: "2px solid rgba(199,157,42,0.3)",
                      }}
                    >
                      <MapPin className="h-7 w-7" style={{ color: "rgba(25,39,74,0.97)" }} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2" style={{ color: "rgba(25,39,74,0.97)" }}>
                        כתובת
                      </h4>
                      <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>{businessStaticData.location}</p>
                    </div>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} className="flex items-start gap-4">
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg transition-all duration-300"
                      style={{
                        background: "linear-gradient(135deg, rgba(199,157,42,0.1) 0%, rgba(255,255,255,0.9) 100%)",
                        border: "2px solid rgba(199,157,42,0.3)",
                      }}
                    >
                      <Mail className="h-7 w-7" style={{ color: "rgba(25,39,74,0.97)" }} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2" style={{ color: "rgba(25,39,74,0.97)" }}>
                        דוא״ל
                      </h4>
                      <p className="text-lg leading-relaxed" style={{ color: "rgba(25,39,74,0.8)" }}>{businessStaticData.social.email}</p>
                    </div>
                  </motion.div>
                </div>

                <div className="mb-4 flex justify-center">
                  <LuxuryButton
                    href={businessStaticData.phone.callLink}
                    className="w-full justify-center"
                  >
                    <Phone className="h-5 w-5" />
                    <span>{businessStaticData.phone.numberToDisplay}</span>
                  </LuxuryButton>
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
              <div className="mb-10">
                <div className="overflow-hidden rounded-3xl w-full h-60 lg:h-72"
                     style={{
                       boxShadow: "0 20px 50px rgba(25,39,74,0.15), inset 0 1px 0 rgba(255,255,255,0.6)"
                     }}>
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
        </LuxuryCard>
      </div>
    </section>
  )
}
