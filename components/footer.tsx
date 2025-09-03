import Link from "next/link"
import { motion } from "framer-motion"
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import { businessStaticData } from "../config"

const navLinks = [
  { name: "ראשי", href: "/" },
  { name: "אודות", href: "/about" },
  { name: "מכירה", href: "/selling" },
  { name: "קנייה", href: "/buying" },
  { name: "ניהול", href: "/property-management" },
  { name: "נכסים", href: "/catalog" },
  { name: "צור קשר", href: "/contact" },
]

export default function Footer() {
  return (
    <footer
      dir="rtl"
      className="relative z-10 mt-0 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, rgba(25,39,74,0.97) 0%, #1a2756 35%, #2d4a8e 65%, rgba(35,52,94,0.95) 100%)",
        boxShadow: "0 -20px 40px rgba(25,39,74,0.35), 0 -8px 20px rgba(199,157,42,0.15)",
      }}
    >
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-1/2 top-0 w-[70vw] h-[50vw] max-w-4xl -translate-x-1/2 -translate-y-1/3 rounded-full blur-3xl opacity-10"
          style={{
            background: "radial-gradient(ellipse, rgba(199,157,42,0.2) 0%, rgba(199,157,42,0.08) 40%, transparent 70%)",
          }}
        />
        <div
          className="absolute right-10 bottom-10 w-96 h-96 blur-3xl opacity-6"
          style={{
            background: "radial-gradient(circle, rgba(199,157,42,0.15) 0%, rgba(199,157,42,0.04) 50%, transparent 70%)",
          }}
        />
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid gap-20 md:grid-cols-3 lg:grid-cols-4 items-start">
          
          {/* Brand Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center md:items-center justify-center ml-8 h-full"
          >
            {/* Clean Logo with luxury styling */}
            <div className="relative mb-6">
              <div className="relative bg-white p-4 rounded-3xl">
                <img
                  src="/images/keyhouse.jpg"
                  alt="KeyHouse"
                  className="w-56 h-36 object-cover rounded-2xl"
                  style={{
                    boxShadow: "0 25px 60px rgba(0,0,0,0.3), 0 12px 35px rgba(199,157,42,0.18), inset 0 2px 0 rgba(255,255,255,0.7)",
                  }}
                />
                {/* Subtle inner highlight */}
                <div className="absolute inset-4 rounded-2xl opacity-15 pointer-events-none"
                     style={{
                       background: "linear-gradient(135deg, rgba(255,255,255,0.5) 0%, transparent 100%)"
                     }} />
              </div>
              
              {/* Clean border accent */}
              <div className="absolute inset-0 rounded-3xl border-2"
                   style={{
                     borderColor: "rgba(199,157,42,0.3)",
                     boxShadow: "0 0 25px rgba(199,157,42,0.12)"
                   }} />
            </div>
            
            <p className="text-lg text-blue-100 font-light text-center md:text-right leading-relaxed max-w-sm mb-4"
               style={{ textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}>
              הבית שלך בנדל״ן באילת
            </p>

            {/* Clean decorative accent line */}
            <div className="flex items-center gap-4">
              <div className="h-px w-20 opacity-60" style={{ backgroundColor: "#c79d2a" }} />
              <div className="w-3 h-3 rounded-full opacity-80" style={{ backgroundColor: "#c79d2a" }} />
              <div className="h-px w-20 opacity-60" style={{ backgroundColor: "#c79d2a" }} />
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="group"
          >
            <h3 className="font-serif text-xl font-bold mb-6 relative"
                style={{ 
                  color: "#c79d2a",
                  textShadow: "0 3px 12px rgba(199,157,42,0.35)"
                }}>
              ניווט באתר
              {/* Underline accent */}
              <div className="absolute bottom-0 left-0 w-8 h-0.5 rounded-full mt-2 opacity-60 group-hover:w-16 group-hover:opacity-100 transition-all duration-500"
                   style={{ backgroundColor: "#c79d2a" }} />
            </h3>
            
            <ul className="space-y-3">
              {navLinks.slice(0, 4).map((link, index) => (
                <motion.li 
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.05 * index }}
                >
                  <Link
                    href={link.href}
                    className="group/link relative block text-base text-white/85 hover:text-white transition-all duration-300 hover:translate-x-2 py-1"
                    style={{ textShadow: "0 2px 6px rgba(0,0,0,0.3)" }}
                  >
                    {/* Link hover effect */}
                    <div className="absolute -inset-x-2 -inset-y-1 rounded-lg opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 pointer-events-none"
                         style={{
                           background: "linear-gradient(135deg, rgba(199,157,42,0.12) 0%, rgba(199,157,42,0.05) 100%)",
                           filter: "blur(10px)"
                         }} />
                    <span className="relative z-10">{link.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:block hidden group"
          >
            <h3 className="font-serif text-xl font-bold mb-6 relative"
                style={{ 
                  color: "#c79d2a",
                  textShadow: "0 3px 12px rgba(199,157,42,0.35)"
                }}>
              שירותים נוספים
              {/* Underline accent */}
              <div className="absolute bottom-0 left-0 w-8 h-0.5 rounded-full mt-2 opacity-60 group-hover:w-16 group-hover:opacity-100 transition-all duration-500"
                   style={{ backgroundColor: "#c79d2a" }} />
            </h3>
            
            <ul className="space-y-3">
              {navLinks.slice(4).map((link, index) => (
                <motion.li 
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.05 * (index + 4) }}
                >
                  <Link
                    href={link.href}
                    className="group/link relative block text-base text-white/85 hover:text-white transition-all duration-300 hover:translate-x-2 py-1"
                    style={{ textShadow: "0 2px 6px rgba(0,0,0,0.3)" }}
                  >
                    {/* Link hover effect */}
                    <div className="absolute -inset-x-2 -inset-y-1 rounded-lg opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 pointer-events-none"
                         style={{
                           background: "linear-gradient(135deg, rgba(199,157,42,0.12) 0%, rgba(199,157,42,0.05) 100%)",
                           filter: "blur(10px)"
                         }} />
                    <span className="relative z-10">{link.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Premium Contact Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="group"
          >
            <h3 className="font-serif text-xl font-bold mb-6 relative"
                style={{ 
                  color: "#c79d2a",
                  textShadow: "0 3px 12px rgba(199,157,42,0.35)"
                }}>
              בואו נתחבר
              {/* Underline accent */}
              <div className="absolute bottom-0 left-0 w-8 h-0.5 rounded-full mt-2 opacity-60 group-hover:w-16 group-hover:opacity-100 transition-all duration-500"
                   style={{ backgroundColor: "#c79d2a" }} />
            </h3>

            <div className="space-y-4">
              {/* Phone */}
              <motion.div 
                whileHover={{ scale: 1.03, x: 4 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-4 group/item"
              >
                <div className="relative">
                  {/* Icon glow effect */}
                  <div className="absolute -inset-2 rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 pointer-events-none"
                       style={{
                         background: "linear-gradient(135deg, rgba(199,157,42,0.3) 0%, rgba(199,157,42,0.15) 100%)",
                         filter: "blur(15px)"
                       }} />
                  
                  <div 
                    className="relative flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 group-hover/item:scale-110"
                    style={{ 
                      background: "linear-gradient(135deg, #c79d2a 0%, #b88924 100%)",
                      color: "#1a2756",
                      boxShadow: "0 8px 20px rgba(199,157,42,0.25), inset 0 1px 0 rgba(255,255,255,0.3)"
                    }}
                  >
                    <FaPhoneAlt className="h-5 w-5" />
                  </div>
                </div>
                
                <div>
                  <a 
                    href={`tel:+${businessStaticData.phone.israelNumber}`} 
                    className="block font-serif text-lg font-medium text-white hover:text-yellow-200 transition-all duration-300 hover:drop-shadow-lg"
                    style={{ textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}
                  >
                    {businessStaticData.phone.numberToDisplay}
                  </a>
                  <p className="text-sm text-blue-100 opacity-70">התקשרו עכשיו</p>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div 
                whileHover={{ scale: 1.03, x: 4 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-4 group/item"
              >
                <div className="relative">
                  {/* Icon glow effect */}
                  <div className="absolute -inset-2 rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 pointer-events-none"
                       style={{
                         background: "linear-gradient(135deg, rgba(199,157,42,0.3) 0%, rgba(199,157,42,0.15) 100%)",
                         filter: "blur(15px)"
                       }} />
                  
                  <div 
                    className="relative flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 group-hover/item:scale-110"
                    style={{ 
                      background: "linear-gradient(135deg, #c79d2a 0%, #b88924 100%)",
                      color: "#1a2756",
                      boxShadow: "0 8px 20px rgba(199,157,42,0.25), inset 0 1px 0 rgba(255,255,255,0.3)"
                    }}
                  >
                    <FaEnvelope className="h-5 w-5" />
                  </div>
                </div>
                
                <div>
                  <a
                    href={businessStaticData.social.emailLink}
                    className="block font-serif text-lg font-medium text-white hover:text-yellow-200 transition-all duration-300 hover:drop-shadow-lg"
                    style={{ textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}
                  >
                    {businessStaticData.social.email}
                  </a>
                  <p className="text-sm text-blue-100 opacity-70">שלחו הודעה</p>
                </div>
              </motion.div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div 
                  className="flex h-12 w-12 items-center justify-center rounded-full"
                  style={{ 
                    background: "linear-gradient(135deg, #daa520 0%, #c8941f 100%)",
                    color: "#1a2756",
                    boxShadow: "0 8px 20px rgba(218,165,32,0.25), inset 0 1px 0 rgba(255,255,255,0.3)"
                  }}
                >
                  <FaMapMarkerAlt className="h-5 w-5" />
                </div>
                
                <div>
                  <p className="font-serif text-lg font-medium text-white" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>
                    אילת, ישראל
                  </p>
                  <p className="text-sm text-blue-100 opacity-70">המיקום שלנו</p>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-4 border-t border-opacity-20" style={{ borderColor: "rgba(218,165,32,0.2)" }}>
                <p className="text-center md:text-right text-white font-serif mb-4 text-base">עקבו אחרינו</p>
                <div className="flex justify-center md:justify-start gap-4">
                  {/* Facebook */}
                  <motion.div 
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="group relative"
                  >
                    {/* Social icon glow effect */}
                    <div className="absolute -inset-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                         style={{
                           background: "linear-gradient(135deg, rgba(24,119,242,0.4) 0%, rgba(24,119,242,0.2) 100%)",
                           filter: "blur(15px)"
                         }} />
                    
                    <a
                      href="https://facebook.com/keyhouse"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative block rounded-full p-4 transition-all duration-500"
                      style={{
                        background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
                        boxShadow: "0 8px 20px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
                        backdropFilter: "blur(10px)"
                      }}
                      onMouseEnter={(e) => {
                        const target = e.currentTarget as HTMLAnchorElement;
                        target.style.background = "linear-gradient(135deg, #1877F2 0%, #166fe5 100%)";
                        target.style.boxShadow = "0 12px 30px rgba(24,119,242,0.4), inset 0 1px 0 rgba(255,255,255,0.2)";
                      }}
                      onMouseLeave={(e) => {
                        const target = e.currentTarget as HTMLAnchorElement;
                        target.style.background = "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)";
                        target.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)";
                      }}
                      aria-label="Facebook"
                    >
                      <FaFacebook className="h-6 w-6 text-white transition-transform duration-300 group-hover:scale-110" />
                    </a>
                  </motion.div>

                  {/* Instagram */}
                  <motion.div 
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="group relative"
                  >
                    {/* Social icon glow effect */}
                    <div className="absolute -inset-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                         style={{
                           background: "linear-gradient(135deg, rgba(228,64,95,0.4) 0%, rgba(193,53,132,0.4) 100%)",
                           filter: "blur(15px)"
                         }} />
                    
                    <a
                      href="https://instagram.com/keyhouse"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative block rounded-full p-4 transition-all duration-500"
                      style={{
                        background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
                        boxShadow: "0 8px 20px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
                        backdropFilter: "blur(10px)"
                      }}
                      onMouseEnter={(e) => {
                        const target = e.currentTarget as HTMLAnchorElement;
                        target.style.background = "linear-gradient(135deg, #E4405F 0%, #C13584 100%)";
                        target.style.boxShadow = "0 12px 30px rgba(228,64,95,0.4), inset 0 1px 0 rgba(255,255,255,0.2)";
                      }}
                      onMouseLeave={(e) => {
                        const target = e.currentTarget as HTMLAnchorElement;
                        target.style.background = "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)";
                        target.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)";
                      }}
                      aria-label="Instagram"
                    >
                      <FaInstagram className="h-6 w-6 text-white transition-transform duration-300 group-hover:scale-110" />
                    </a>
                  </motion.div>

                  {/* WhatsApp */}
                  <motion.div 
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="group relative"
                  >
                    {/* Social icon glow effect */}
                    <div className="absolute -inset-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                         style={{
                           background: "linear-gradient(135deg, rgba(37,211,102,0.4) 0%, rgba(37,211,102,0.2) 100%)",
                           filter: "blur(15px)"
                         }} />
                    
                    <a
                      href={businessStaticData.phone.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative block rounded-full p-4 transition-all duration-500"
                      style={{
                        background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
                        boxShadow: "0 8px 20px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
                        backdropFilter: "blur(10px)"
                      }}
                      onMouseEnter={(e) => {
                        const target = e.currentTarget as HTMLAnchorElement;
                        target.style.background = "linear-gradient(135deg, #25D366 0%, #22c55e 100%)";
                        target.style.boxShadow = "0 12px 30px rgba(37,211,102,0.4), inset 0 1px 0 rgba(255,255,255,0.2)";
                      }}
                      onMouseLeave={(e) => {
                        const target = e.currentTarget as HTMLAnchorElement;
                        target.style.background = "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)";
                        target.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)";
                      }}
                      aria-label="WhatsApp"
                    >
                      <FaWhatsapp className="h-6 w-6 text-white transition-transform duration-300 group-hover:scale-110" />
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="py-6 text-center border-t relative z-10"
        style={{
          borderColor: "rgba(199,157,42,0.2)",
          background: "linear-gradient(135deg, rgba(25,39,74,0.98) 0%, rgba(26,39,86,0.95) 50%, rgba(45,74,142,0.98) 100%)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)"
        }}
      >
        {/* Decorative top border accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-0.5 rounded-full"
             style={{
               background: "linear-gradient(90deg, transparent 0%, #c79d2a 50%, transparent 100%)",
               boxShadow: "0 0 15px rgba(199,157,42,0.45)"
             }} />

        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center gap-4">
            <p className="text-blue-100/90 font-light tracking-wide text-base"
               style={{ textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}>
              © {new Date().getFullYear()} KeyHouse נדל״ן. כל הזכויות שמורות.
            </p>
            
            {/* Decorative separator - now centered */}
            <div className="flex items-center gap-3">
              <div className="h-px w-12 opacity-40" style={{ backgroundColor: "#c79d2a" }} />
              <div className="w-1.5 h-1.5 rounded-full opacity-50" style={{ backgroundColor: "#c79d2a" }} />
              <div className="h-px w-12 opacity-40" style={{ backgroundColor: "#c79d2a" }} />
            </div>

            <p className="text-blue-200/70 text-sm font-light">
              נבנה באהבה עבור לקוחותינו
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}