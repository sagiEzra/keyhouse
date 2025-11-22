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
  { name: "הערכת שווי", href: "/property-valuation" },
]

export default function Footer() {
  return (
    <footer
      dir="rtl"
      className="relative z-10 mt-0 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, rgba(25,39,74,0.03) 0%, rgba(25,39,74,0.08) 25%, rgba(25,39,74,0.12) 50%, rgba(25,39,74,0.08) 75%, rgba(25,39,74,0.03) 100%)",
        boxShadow: "0 -25px 50px rgba(25,39,74,0.15), 0 -10px 25px rgba(199,157,42,0.08), inset 0 1px 0 rgba(255,255,255,0.8)",
      }}
    >
      {/* Enhanced luxury background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-1/2 top-0 w-[60vw] h-[40vw] max-w-3xl -translate-x-1/2 -translate-y-1/4 rounded-full opacity-4"
          style={{
            background: "radial-gradient(ellipse, rgba(199,157,42,0.08) 0%, rgba(199,157,42,0.04) 40%, transparent 70%)",
            filter: "blur(40px)"
          }}
        />
        <div
          className="absolute right-1/6 bottom-1/4 w-72 h-72 rounded-full opacity-3"
          style={{
            background: "radial-gradient(circle, rgba(25,39,74,0.06) 0%, rgba(25,39,74,0.02) 50%, transparent 70%)",
            filter: "blur(30px)"
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
            {/* Clean minimalistic logo */}
            <div className="relative mb-6">
              <img
                src="/images/keyhouse.jpg"
                alt="KeyHouse"
                className="w-56 h-36 object-cover rounded-2xl transition-all duration-300 hover:shadow-lg"
                style={{
                  boxShadow: "0 15px 30px rgba(25,39,74,0.15), 0 6px 15px rgba(25,39,74,0.08)",
                }}
              />
            </div>
            
            <p className="text-lg font-light text-center md:text-right leading-relaxed max-w-sm mb-4" style={{ color: "rgba(25,39,74,0.85)" }}>
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
                  color: "rgba(25,39,74,0.97)",
                  textShadow: "0 2px 8px rgba(25,39,74,0.15)"
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
                    className="group/link relative block text-base transition-all duration-300 hover:translate-x-2 py-1"
                    style={{ color: "rgba(25,39,74,0.85)" }}
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
                  color: "rgba(25,39,74,0.97)",
                  textShadow: "0 2px 8px rgba(25,39,74,0.15)"
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
                    className="group/link relative block text-base transition-all duration-300 hover:translate-x-2 py-1"
                    style={{ color: "rgba(25,39,74,0.85)" }}
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
                  color: "rgba(25,39,74,0.97)",
                  textShadow: "0 2px 8px rgba(25,39,74,0.15)"
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
                      background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,249,255,0.98) 100%)",
                      color: "rgba(25,39,74,0.97)",
                      boxShadow: "0 8px 20px rgba(25,39,74,0.15), 0 4px 10px rgba(25,39,74,0.08), inset 0 1px 0 rgba(255,255,255,0.6)",
                      border: "1px solid rgba(25,39,74,0.1)"
                    }}
                  >
                    <FaPhoneAlt className="h-5 w-5" />
                  </div>
                </div>
                
                <div>
                  <a 
                    href={`tel:+${businessStaticData.phone.israelNumber}`} 
                    className="block font-serif text-lg font-medium transition-all duration-300 hover:drop-shadow-lg"
                    style={{ color: "rgba(25,39,74,0.97)" }}
                  >
                    {businessStaticData.phone.numberToDisplay}
                  </a>
                  <p className="text-sm opacity-60" style={{ color: "rgba(25,39,74,0.7)" }}>התקשרו עכשיו</p>
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
                      background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,249,255,0.98) 100%)",
                      color: "rgba(25,39,74,0.97)",
                      boxShadow: "0 8px 20px rgba(25,39,74,0.15), 0 4px 10px rgba(25,39,74,0.08), inset 0 1px 0 rgba(255,255,255,0.6)",
                      border: "1px solid rgba(25,39,74,0.1)"
                    }}
                  >
                    <FaEnvelope className="h-5 w-5" />
                  </div>
                </div>
                
                <div>
                  <a
                    href={businessStaticData.social.emailLink}
                    className="block font-serif text-lg font-medium transition-all duration-300 hover:drop-shadow-lg"
                    style={{ color: "rgba(25,39,74,0.97)" }}
                  >
                    {businessStaticData.social.email}
                  </a>
                  <p className="text-sm opacity-60" style={{ color: "rgba(25,39,74,0.7)" }}>שלחו הודעה</p>
                </div>
              </motion.div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,249,255,0.98) 100%)",
                    color: "rgba(25,39,74,0.97)",
                    boxShadow: "0 8px 20px rgba(25,39,74,0.15), 0 4px 10px rgba(25,39,74,0.08), inset 0 1px 0 rgba(255,255,255,0.6)",
                    border: "1px solid rgba(25,39,74,0.1)"
                  }}
                >
                  <FaMapMarkerAlt className="h-5 w-5" />
                </div>
                
                <div>
                  <p className="font-serif text-lg font-medium" style={{ color: "rgba(25,39,74,0.97)" }}>
                    אילת, ישראל
                  </p>
                  <p className="text-sm opacity-60" style={{ color: "rgba(25,39,74,0.7)" }}>המיקום שלנו</p>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-4 border-t border-opacity-30" style={{ borderColor: "rgba(199,157,42,0.3)" }}>
                <p className="text-center md:text-right font-serif mb-4 text-base" style={{ color: "rgba(25,39,74,0.97)" }}>עקבו אחרינו</p>
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
                        background: "linear-gradient(135deg, rgba(25,39,74,0.08) 0%, rgba(25,39,74,0.04) 100%)",
                        boxShadow: "0 8px 20px rgba(25,39,74,0.15), inset 0 1px 0 rgba(255,255,255,0.3)",
                        backdropFilter: "blur(15px)",
                        border: "1px solid rgba(25,39,74,0.1)"
                      }}
                      onMouseEnter={(e) => {
                        const target = e.currentTarget as HTMLAnchorElement;
                        target.style.background = "linear-gradient(135deg, #1877F2 0%, #166fe5 100%)";
                        target.style.boxShadow = "0 12px 30px rgba(24,119,242,0.4), inset 0 1px 0 rgba(255,255,255,0.2)";
                      }}
                      onMouseLeave={(e) => {
                        const target = e.currentTarget as HTMLAnchorElement;
                        target.style.background = "linear-gradient(135deg, rgba(25,39,74,0.08) 0%, rgba(25,39,74,0.04) 100%)";
                        target.style.boxShadow = "0 8px 20px rgba(25,39,74,0.15), inset 0 1px 0 rgba(255,255,255,0.3)";
                      }}
                      aria-label="Facebook"
                    >
                      <FaFacebook className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" style={{ color: "rgba(25,39,74,0.97)" }} />
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
                        background: "linear-gradient(135deg, rgba(25,39,74,0.08) 0%, rgba(25,39,74,0.04) 100%)",
                        boxShadow: "0 8px 20px rgba(25,39,74,0.15), inset 0 1px 0 rgba(255,255,255,0.3)",
                        backdropFilter: "blur(15px)",
                        border: "1px solid rgba(25,39,74,0.1)"
                      }}
                      onMouseEnter={(e) => {
                        const target = e.currentTarget as HTMLAnchorElement;
                        target.style.background = "linear-gradient(135deg, #E4405F 0%, #C13584 100%)";
                        target.style.boxShadow = "0 12px 30px rgba(228,64,95,0.4), inset 0 1px 0 rgba(255,255,255,0.2)";
                      }}
                      onMouseLeave={(e) => {
                        const target = e.currentTarget as HTMLAnchorElement;
                        target.style.background = "linear-gradient(135deg, rgba(25,39,74,0.08) 0%, rgba(25,39,74,0.04) 100%)";
                        target.style.boxShadow = "0 8px 20px rgba(25,39,74,0.15), inset 0 1px 0 rgba(255,255,255,0.3)";
                      }}
                      aria-label="Instagram"
                    >
                      <FaInstagram className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" style={{ color: "rgba(25,39,74,0.97)" }} />
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
                        background: "linear-gradient(135deg, rgba(25,39,74,0.08) 0%, rgba(25,39,74,0.04) 100%)",
                        boxShadow: "0 8px 20px rgba(25,39,74,0.15), inset 0 1px 0 rgba(255,255,255,0.3)",
                        backdropFilter: "blur(15px)",
                        border: "1px solid rgba(25,39,74,0.1)"
                      }}
                      onMouseEnter={(e) => {
                        const target = e.currentTarget as HTMLAnchorElement;
                        target.style.background = "linear-gradient(135deg, #25D366 0%, #22c55e 100%)";
                        target.style.boxShadow = "0 12px 30px rgba(37,211,102,0.4), inset 0 1px 0 rgba(255,255,255,0.2)";
                      }}
                      onMouseLeave={(e) => {
                        const target = e.currentTarget as HTMLAnchorElement;
                        target.style.background = "linear-gradient(135deg, rgba(25,39,74,0.08) 0%, rgba(25,39,74,0.04) 100%)";
                        target.style.boxShadow = "0 8px 20px rgba(25,39,74,0.15), inset 0 1px 0 rgba(255,255,255,0.3)";
                      }}
                      aria-label="WhatsApp"
                    >
                      <FaWhatsapp className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" style={{ color: "rgba(25,39,74,0.97)" }} />
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
          borderColor: "rgba(199,157,42,0.3)",
          background: "linear-gradient(135deg, rgba(25,39,74,0.05) 0%, rgba(25,39,74,0.08) 50%, rgba(25,39,74,0.05) 100%)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.8), 0 -1px 3px rgba(25,39,74,0.1)"
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
            <p className="font-light tracking-wide text-base" style={{ color: "rgba(25,39,74,0.85)" }}>
              © {new Date().getFullYear()} KeyHouse נדל״ן. כל הזכויות שמורות.
            </p>
            
            {/* Decorative separator - now centered */}
            <div className="flex items-center gap-3">
              <div className="h-px w-12 opacity-40" style={{ backgroundColor: "#c79d2a" }} />
              <div className="w-1.5 h-1.5 rounded-full opacity-50" style={{ backgroundColor: "#c79d2a" }} />
              <div className="h-px w-12 opacity-40" style={{ backgroundColor: "#c79d2a" }} />
            </div>

            <p className="text-sm font-light" style={{ color: "rgba(25,39,74,0.65)" }}>
              נבנה באהבה עבור לקוחותינו
            </p>

            {/* Accessibility Link */}
            <div className="mt-4">
              <Link
                href="/accessibility"
                className="text-sm transition-colors duration-300 hover:text-[#c79d2a] underline"
                style={{ color: "rgba(25,39,74,0.7)" }}
              >
                הצהרת נגישות
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}