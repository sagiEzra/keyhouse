import Link from "next/link"
import { motion } from "framer-motion"
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa"
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
        background: "linear-gradient(135deg, #23214a 0%, #2d2b5a 50%, #23214a 100%)",
        boxShadow: "0 -25px 50px rgba(35,33,74,0.4), 0 -10px 25px rgba(35,33,74,0.3)",
      }}
    >
      {/* Enhanced decorative gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-1/2 top-0 w-[80vw] h-[60vw] max-w-4xl -translate-x-1/2 -translate-y-1/4 rounded-full blur-3xl opacity-20"
          style={{
            background: "radial-gradient(ellipse, rgba(241,194,59,0.4) 0%, rgba(241,194,59,0.15) 40%, transparent 70%)",
          }}
        />
        <div
          className="absolute right-0 bottom-0 w-96 h-96 blur-3xl opacity-15"
          style={{
            background: "radial-gradient(circle, rgba(241,194,59,0.3) 0%, rgba(241,194,59,0.1) 50%, transparent 70%)",
          }}
        />
        <div
          className="absolute left-0 top-1/3 w-64 h-64 blur-3xl opacity-10"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid gap-12 md:grid-cols-3 items-start justify-evenly">
          {/* Logo & Brand */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center group"
          >
            {/* Logo container with luxury effects */}
            <div className="relative mb-6">
              {/* Logo glow effect */}
              <div className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                   style={{
                     background: "linear-gradient(135deg, rgba(241,194,59,0.3) 0%, rgba(241,194,59,0.1) 100%)",
                     filter: "blur(20px)"
                   }} />
              
              {/* Logo image with enhanced styling */}
              <div className="relative">
                <img
                  src="/images/keyhouse.jpg"
                  alt="KeyHouse"
                  className="w-44 rounded-3xl border-2 transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-1"
                  style={{
                    borderColor: "rgba(241,194,59,0.6)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3), 0 8px 20px rgba(241,194,59,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
                    filter: "drop-shadow(0 8px 25px rgba(0,0,0,0.4))"
                  }}
                />
                {/* Inner highlight */}
                <div className="absolute inset-2 rounded-3xl opacity-20 pointer-events-none"
                     style={{
                       background: "linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 100%)"
                     }} />
              </div>
            </div>

            {/* Brand name with luxury typography */}
            <h2
              className="font-serif text-2xl md:text-3xl font-bold mb-3 transition-all duration-300 group-hover:scale-105"
              style={{ 
                color: "#f1c23b",
                textShadow: "0 4px 12px rgba(241,194,59,0.4), 0 2px 6px rgba(0,0,0,0.3)"
              }}
            >
              KeyHouse
            </h2>
            
            {/* Tagline with premium styling */}
            <p className="text-center text-blue-100 font-light leading-relaxed max-w-xs"
               style={{ 
                 textShadow: "0 2px 8px rgba(0,0,0,0.4)",
                 fontSize: "15px"
               }}>
              הבית שלך בנדל״ן באילת
            </p>

            {/* Decorative divider */}
            <div className="mt-4 flex items-center gap-3">
              <div className="h-px w-8 opacity-40" style={{ backgroundColor: "#f1c23b" }} />
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#f1c23b" }} />
              <div className="h-px w-8 opacity-40" style={{ backgroundColor: "#f1c23b" }} />
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.nav 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <h3 className="font-serif text-xl font-bold mb-8 text-center transition-colors duration-300"
                style={{ 
                  color: "#f1c23b",
                  textShadow: "0 2px 8px rgba(241,194,59,0.4)"
                }}>
              ניווט באתר
            </h3>
            
            <ul className="grid grid-cols-2 gap-4 w-full max-w-sm">
              {navLinks.map((link, index) => (
                <motion.li 
                  key={link.href} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex justify-center group"
                >
                  {/* Link glow effect */}
                  <div className="relative w-full">
                    <div className="absolute -inset-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                         style={{
                           background: "linear-gradient(135deg, rgba(241,194,59,0.15) 0%, rgba(241,194,59,0.05) 100%)",
                           filter: "blur(15px)"
                         }} />
                    
                    <Link
                      href={link.href}
                      className="relative block w-full text-center px-4 py-3 font-serif text-sm font-medium rounded-xl transition-all duration-500 overflow-hidden"
                      style={{
                        background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                        border: "1px solid rgba(241,194,59,0.2)",
                        color: "rgba(255,255,255,0.9)",
                        boxShadow: "0 4px 15px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
                        backdropFilter: "blur(10px)"
                      }}
                      onMouseEnter={(e) => {
                        const target = e.currentTarget as HTMLAnchorElement;
                        target.style.background = "linear-gradient(135deg, rgba(241,194,59,0.15) 0%, rgba(241,194,59,0.08) 100%)";
                        target.style.borderColor = "rgba(241,194,59,0.6)";
                        target.style.color = "#ffffff";
                        target.style.transform = "translateY(-2px) scale(1.02)";
                        target.style.boxShadow = "0 8px 25px rgba(241,194,59,0.3), 0 4px 15px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.2)";
                      }}
                      onMouseLeave={(e) => {
                        const target = e.currentTarget as HTMLAnchorElement;
                        target.style.background = "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)";
                        target.style.borderColor = "rgba(241,194,59,0.2)";
                        target.style.color = "rgba(255,255,255,0.9)";
                        target.style.transform = "translateY(0px) scale(1)";
                        target.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)";
                      }}
                    >
                      {/* Background shimmer effect */}
                      <div className="absolute inset-0 -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-700 opacity-10"
                           style={{
                             background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)"
                           }} />
                      
                      <span className="relative z-10">{link.name}</span>
                    </Link>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.nav>

          {/* Contact & Social */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <h3 className="font-serif text-xl font-bold mb-8 text-center transition-colors duration-300"
                style={{ 
                  color: "#f1c23b",
                  textShadow: "0 2px 8px rgba(241,194,59,0.4)"
                }}>
              צור קשר
            </h3>

            {/* Contact Information */}
            <div className="space-y-6 mb-8">
              {/* Phone */}
              <motion.div 
                whileHover={{ scale: 1.03, x: 3 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-4 group"
              >
                <div className="relative">
                  {/* Icon glow effect */}
                  <div className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                       style={{
                         background: "linear-gradient(135deg, rgba(241,194,59,0.4) 0%, rgba(241,194,59,0.2) 100%)",
                         filter: "blur(15px)"
                       }} />
                  
                  <div
                    className="relative flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110"
                    style={{ 
                      background: "linear-gradient(135deg, #f1c23b 0%, #e6b84f 100%)",
                      color: "#23214a",
                      boxShadow: "0 8px 20px rgba(241,194,59,0.3), inset 0 1px 0 rgba(255,255,255,0.3)"
                    }}
                  >
                    <FaPhoneAlt className="h-4 w-4" />
                  </div>
                </div>
                
                <a 
                  href={`tel:+${businessStaticData.phone.israelNumber}`} 
                  className="font-serif font-medium text-white/90 hover:text-white transition-all duration-300 hover:drop-shadow-lg"
                  style={{ textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}
                >
                  {businessStaticData.phone.numberToDisplay}
                </a>
              </motion.div>

              {/* Email */}
              <motion.div 
                whileHover={{ scale: 1.03, x: 3 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-4 group"
              >
                <div className="relative">
                  {/* Icon glow effect */}
                  <div className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                       style={{
                         background: "linear-gradient(135deg, rgba(241,194,59,0.4) 0%, rgba(241,194,59,0.2) 100%)",
                         filter: "blur(15px)"
                       }} />
                  
                  <div
                    className="relative flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110"
                    style={{ 
                      background: "linear-gradient(135deg, #f1c23b 0%, #e6b84f 100%)",
                      color: "#23214a",
                      boxShadow: "0 8px 20px rgba(241,194,59,0.3), inset 0 1px 0 rgba(255,255,255,0.3)"
                    }}
                  >
                    <FaEnvelope className="h-4 w-4" />
                  </div>
                </div>
                
                <a
                  href={businessStaticData.social.emailLink}
                  className="font-serif font-medium text-white/90 hover:text-white transition-all duration-300 hover:drop-shadow-lg"
                  style={{ textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}
                >
                  {businessStaticData.social.email}
                </a>
              </motion.div>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-6">
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
          </motion.div>
        </div>
      </div>

      {/* Luxury Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="py-6 text-center border-t relative z-10"
        style={{
          borderColor: "rgba(241,194,59,0.2)",
          background: "linear-gradient(135deg, rgba(35,33,74,0.98) 0%, rgba(45,43,90,0.95) 50%, rgba(35,33,74,0.98) 100%)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)"
        }}
      >
        {/* Decorative top border accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-0.5 rounded-full"
             style={{
               background: "linear-gradient(90deg, transparent 0%, #f1c23b 50%, transparent 100%)",
               boxShadow: "0 0 10px rgba(241,194,59,0.5)"
             }} />

        <div className="container mx-auto px-6 relative">
          {/* Copyright text with luxury styling */}
          <p className="font-serif text-blue-100/80 font-light tracking-wide leading-relaxed"
             style={{ 
               textShadow: "0 2px 8px rgba(0,0,0,0.4)",
               fontSize: "15px"
             }}>
            © {new Date().getFullYear()} KeyHouse נדל״ן. כל הזכויות שמורות.
          </p>

          {/* Subtle decorative elements */}
          <div className="mt-3 flex items-center justify-center gap-4">
            <div className="h-px w-12 opacity-30" style={{ backgroundColor: "#f1c23b" }} />
            <div className="w-1.5 h-1.5 rounded-full opacity-40" style={{ backgroundColor: "#f1c23b" }} />
            <div className="h-px w-12 opacity-30" style={{ backgroundColor: "#f1c23b" }} />
          </div>
        </div>
      </motion.div>
    </footer>
  )
}
