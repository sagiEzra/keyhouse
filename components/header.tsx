"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { FaBars as Menu, FaTimes as X, FaPhoneAlt as Phone, FaHome } from "react-icons/fa"
import { businessStaticData } from "../config"
import { doc, getDoc } from "firebase/firestore"
import { onAuthStateChanged } from "firebase/auth"
import { auth, db } from "@/lib/firebase"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState("/")
  const [isAdmin, setIsAdmin] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        // Check if user exists in users collection and is admin
        // 👇 Check role from Firestore
        const userDocRef = doc(db, "users", firebaseUser.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const isAdmin = userDocSnap.data().isAdmin;
          if (isAdmin) {
            setIsAdmin(true);
          }
        }
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    setActiveLink(window.location.pathname)
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    setActiveLink(window.location.pathname)
  }, [pathname])

  const navLinks = [
    { name: "דף הבית", href: "/" },
    { name: "אודות", href: "/about" },
    { name: "מוכרים", href: "/selling" },
    { name: "קונים", href: "/buying" },
    { name: "ניהול נכסים", href: "/property-management" },
    { name: "הערכת שווי", href: "/property-valuation" },
    { name: "קטלוג הנכסים", href: "/catalog" },
    { name: "צור קשר", href: "/contact" },
  ]

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-700 ${isScrolled
          ? "py-3 backdrop-blur-xl border-b"
          : "py-5 backdrop-blur-md"
        }`}
      style={{
        background: isScrolled 
          ? "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(248,249,255,0.95) 50%, rgba(255,255,255,0.98) 100%)"
          : "linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%)",
        boxShadow: isScrolled 
          ? "0 25px 50px rgba(25,39,74,0.12), 0 10px 25px rgba(25,39,74,0.08), inset 0 1px 0 rgba(255,255,255,0.6)"
          : "0 8px 32px rgba(0,0,0,0.3)",
        borderColor: isScrolled ? "rgba(25,39,74,0.08)" : "transparent",
      }}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="z-50 relative group">
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative"
          >
            {/* Logo glow effect */}
            <div className="absolute -inset-3 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                 style={{
                   background: "linear-gradient(135deg, rgba(199,157,42,0.15) 0%, rgba(25,39,74,0.08) 100%)",
                   filter: "blur(20px)"
                 }} />
            
            {/* Logo container with luxury styling */}
            <div className={`relative p-2 rounded-2xl transition-all duration-500 ${isScrolled ? 'bg-gradient-to-br from-white/60 to-white/40' : ''}`}
                 style={isScrolled ? {
                   boxShadow: "0 8px 25px rgba(25,39,74,0.1), inset 0 1px 0 rgba(255,255,255,0.6)"
                 } : {}}>
              <img
                src="/images/keyLogo.png"
                alt="KeyHouse Logo"
                className={`transition-all duration-500 drop-shadow-lg group-hover:drop-shadow-xl ${isScrolled ? "h-12" : "h-14"}`}
                style={{
                  filter: isScrolled 
                    ? "drop-shadow(0 4px 8px rgba(25,39,74,0.1))" 
                    : "drop-shadow(0 4px 12px rgba(0,0,0,0.3))"
                }}
              />
            </div>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="group relative">
              <motion.div
                className="relative px-3 py-2 rounded-xl transition-all duration-300"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* Navigation item glow effect */}
                <div className="absolute -inset-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                     style={{
                       background: "linear-gradient(135deg, rgba(199,157,42,0.1) 0%, rgba(25,39,74,0.05) 100%)",
                       filter: "blur(15px)"
                     }} />
                
                {/* Navigation item background */}
                <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                  activeLink === link.href 
                    ? 'opacity-100' 
                    : 'opacity-0 group-hover:opacity-100'
                }`}
                style={{
                  background: activeLink === link.href 
                    ? "linear-gradient(135deg, rgba(199,157,42,0.15) 0%, rgba(199,157,42,0.08) 100%)"
                    : "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
                  boxShadow: activeLink === link.href 
                    ? "0 4px 15px rgba(199,157,42,0.2)"
                    : "0 2px 10px rgba(25,39,74,0.1)"
                }} />

                <span
                  className={`relative font-serif text-lg font-semibold transition-all duration-300 ${
                    activeLink === link.href 
                      ? "drop-shadow-sm" 
                      : "group-hover:drop-shadow-sm"
                  }`}
                  style={{
                    color: isScrolled 
                      ? (activeLink === link.href ? "#c79d2a" : "rgba(25,39,74,0.97)") 
                      : "#ffffff",
                    textShadow: isScrolled 
                      ? "0 2px 4px rgba(25,39,74,0.1)" 
                      : "0 2px 8px rgba(0,0,0,0.3)"
                  }}
                >
                  {link.name}
                </span>

                {/* Enhanced underline */}
                <div
                  className={`absolute -bottom-1 right-1/2 translate-x-1/2 h-1 rounded-full transition-all duration-500 ${
                    activeLink === link.href ? "w-8 opacity-100" : "w-0 opacity-0 group-hover:w-6 group-hover:opacity-100"
                  }`}
                  style={{
                    background: "linear-gradient(90deg, #c79d2a 0%, rgba(199,157,42,0.8) 100%)",
                    boxShadow: "0 2px 8px rgba(199,157,42,0.4)"
                  }}
                />
              </motion.div>
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <motion.div 
            whileHover={{ scale: 1.08, y: -2 }} 
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="group relative"
          >
            {/* Button glow effect */}
            <div className="absolute -inset-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                 style={{
                   background: "linear-gradient(135deg, rgba(199,157,42,0.3) 0%, rgba(25,39,74,0.15) 100%)",
                   filter: "blur(20px)"
                 }} />

            <Link
              href={businessStaticData.rotemPhone.callLink}
              className="relative flex items-center gap-3 rounded-full px-6 py-3 font-serif font-semibold text-lg transition-all duration-500 overflow-hidden"
              style={{
                background: isScrolled
                  ? "linear-gradient(135deg, rgba(25,39,74,0.97) 0%, rgba(29,42,86,0.95) 100%)"
                  : "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.15) 100%)",
                boxShadow: isScrolled
                  ? "0 15px 35px rgba(25,39,74,0.3), 0 5px 15px rgba(25,39,74,0.2), inset 0 1px 0 rgba(255,255,255,0.1)"
                  : "0 15px 35px rgba(0,0,0,0.4), 0 5px 15px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.3)",
                border: isScrolled ? "1px solid rgba(199,157,42,0.3)" : "1px solid rgba(255,255,255,0.2)",
                color: "#ffffff",
                backdropFilter: "blur(20px)"
              }}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLAnchorElement;
                target.style.background = "linear-gradient(135deg, #c79d2a 0%, rgba(199,157,42,0.8) 100%)";
                target.style.color = "rgba(25,39,74,0.97)";
                target.style.transform = "translateY(-1px)";
                target.style.boxShadow = "0 20px 40px rgba(199,157,42,0.4), 0 8px 20px rgba(199,157,42,0.3), inset 0 1px 0 rgba(255,255,255,0.4)";
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLAnchorElement;
                target.style.background = isScrolled
                  ? "linear-gradient(135deg, rgba(25,39,74,0.97) 0%, rgba(29,42,86,0.95) 100%)"
                  : "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.15) 100%)";
                target.style.color = "#ffffff";
                target.style.transform = "translateY(0px)";
                target.style.boxShadow = isScrolled
                  ? "0 15px 35px rgba(25,39,74,0.3), 0 5px 15px rgba(25,39,74,0.2), inset 0 1px 0 rgba(255,255,255,0.1)"
                  : "0 15px 35px rgba(0,0,0,0.4), 0 5px 15px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.3)";
              }}
            >
              {/* Background shimmer effect */}
              <div className="absolute inset-0 -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-700 opacity-20"
                   style={{
                     background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)"
                   }} />
              
              <Phone className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              <span className="relative z-10">{businessStaticData.rotemPhone.numberToDisplay}</span>
            </Link>
          </motion.div>

          {/* Fixed luxury admin button */}
          {isAdmin && (
            <div className="fixed right-4 top-4 z-50">
              <motion.div 
                whileHover={{ scale: 1.08, y: -2 }} 
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group relative"
              >
                {/* Admin button glow effect */}
                <div className="absolute -inset-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                     style={{
                       background: "linear-gradient(135deg, rgba(120,120,120,0.3) 0%, rgba(60,60,60,0.2) 100%)",
                       filter: "blur(20px)"
                     }} />

                <Link
                  href="/catalog/manage"
                  className="relative flex items-center gap-2 rounded-full px-5 py-2.5 font-serif font-medium text-white transition-all duration-500 overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, rgba(80,80,80,0.95) 0%, rgba(60,60,60,0.98) 100%)",
                    boxShadow: "0 15px 35px rgba(60,60,60,0.4), 0 5px 15px rgba(60,60,60,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
                    border: "1px solid rgba(120,120,120,0.3)",
                    backdropFilter: "blur(20px)"
                  }}
                  onMouseEnter={(e) => {
                    const target = e.currentTarget as HTMLAnchorElement;
                    target.style.background = "linear-gradient(135deg, rgba(100,100,100,0.98) 0%, rgba(80,80,80,1) 100%)";
                    target.style.transform = "translateY(-1px)";
                    target.style.boxShadow = "0 20px 40px rgba(80,80,80,0.5), 0 8px 20px rgba(80,80,80,0.4), inset 0 1px 0 rgba(255,255,255,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    const target = e.currentTarget as HTMLAnchorElement;
                    target.style.background = "linear-gradient(135deg, rgba(80,80,80,0.95) 0%, rgba(60,60,60,0.98) 100%)";
                    target.style.transform = "translateY(0px)";
                    target.style.boxShadow = "0 15px 35px rgba(60,60,60,0.4), 0 5px 15px rgba(60,60,60,0.3), inset 0 1px 0 rgba(255,255,255,0.1)";
                  }}
                >
                  {/* Background shimmer effect */}
                  <div className="absolute inset-0 -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-700 opacity-20"
                       style={{
                         background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)"
                       }} />
                  
                  <FaHome className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                  <span className="relative z-10">ניהול נכסים</span>
                </Link>
              </motion.div>
            </div>
          )}
        </div>

        {/* Luxury Mobile Menu Button */}
        <motion.div
          className="z-50 md:hidden group relative"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          {/* Menu button glow effect */}
          <div className="absolute -inset-3 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
               style={{
                 background: "linear-gradient(135deg, rgba(199,157,42,0.15) 0%, rgba(25,39,74,0.08) 100%)",
                 filter: "blur(15px)"
               }} />
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "סגור תפריט" : "פתח תפריט"}
            className="relative p-3 rounded-2xl transition-all duration-300"
            style={{
              background: isScrolled 
                ? "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,249,255,0.8) 100%)"
                : "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)",
              boxShadow: isScrolled
                ? "0 10px 25px rgba(25,39,74,0.1), inset 0 1px 0 rgba(255,255,255,0.6)"
                : "0 8px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.3)",
              border: isScrolled ? "1px solid rgba(25,39,74,0.1)" : "1px solid rgba(255,255,255,0.2)",
              backdropFilter: "blur(20px)"
            }}
          >
            {isOpen ? (
              <X className="h-6 w-6 transition-all duration-300" style={{ color: "rgba(25,39,74,0.97)" }} />
            ) : (
              <Menu className="h-6 w-6 transition-all duration-300" style={{ color: isScrolled ? "rgba(25,39,74,0.97)" : "#ffffff" }} />
            )}
          </button>
        </motion.div>

        {/* Luxury Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute left-0 right-0 top-0 min-h-screen overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(248,249,255,0.95) 50%, rgba(255,255,255,0.98) 100%)",
                backdropFilter: "blur(30px)"
              }}
            >
              {/* Decorative background elements */}
              <div className="absolute inset-0 pointer-events-none">
                <div
                  className="absolute top-32 right-10 w-64 h-64 rounded-full blur-3xl opacity-5"
                  style={{ background: "radial-gradient(circle, #c79d2a 0%, transparent 70%)" }}
                />
                <div
                  className="absolute bottom-32 left-10 w-48 h-48 rounded-full blur-3xl opacity-4"
                  style={{ background: "radial-gradient(circle, rgba(25,39,74,0.97) 0%, transparent 70%)" }}
                />
              </div>

              <div className="container mx-auto px-6 pt-28 relative z-10">
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="group"
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="relative block p-4 rounded-2xl transition-all duration-300 overflow-hidden"
                        style={{
                          background: activeLink === link.href 
                            ? "linear-gradient(135deg, rgba(199,157,42,0.1) 0%, rgba(199,157,42,0.05) 100%)"
                            : "transparent",
                          borderBottom: "1px solid rgba(25,39,74,0.08)"
                        }}
                      >
                        {/* Link glow effect */}
                        <div className="absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                             style={{
                               background: "linear-gradient(135deg, rgba(199,157,42,0.1) 0%, rgba(25,39,74,0.05) 100%)",
                               filter: "blur(15px)"
                             }} />

                        <motion.div 
                          whileHover={{ x: 8 }} 
                          transition={{ duration: 0.3 }}
                          className="relative z-10"
                        >
                          <span 
                            className="font-serif text-xl font-semibold transition-all duration-300"
                            style={{
                              color: activeLink === link.href ? "#c79d2a" : "rgba(25,39,74,0.97)",
                              textShadow: activeLink === link.href ? "0 2px 8px rgba(199,157,42,0.3)" : "none"
                            }}
                          >
                            {link.name}
                          </span>
                        </motion.div>

                        {/* Active indicator */}
                        {activeLink === link.href && (
                          <div
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-1 h-8 rounded-full"
                            style={{
                              background: "linear-gradient(180deg, #c79d2a 0%, rgba(199,157,42,0.8) 100%)",
                              boxShadow: "0 2px 8px rgba(199,157,42,0.4)"
                            }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  ))}

                  {/* Phone Button */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: navLinks.length * 0.1 + 0.2 }}
                    whileHover={{ scale: 1.03 }} 
                    whileTap={{ scale: 0.97 }} 
                    className="mt-8 group relative"
                  >
                    {/* Button glow effect */}
                    <div className="absolute -inset-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                         style={{
                           background: "linear-gradient(135deg, rgba(199,157,42,0.3) 0%, rgba(25,39,74,0.15) 100%)",
                           filter: "blur(20px)"
                         }} />

                    <Link
                      href={businessStaticData.rotemPhone.callLink}
                      onClick={() => setIsOpen(false)}
                      className="relative flex items-center justify-center gap-3 rounded-full px-8 py-4 font-serif font-semibold text-lg text-white shadow-xl transition-all duration-500 overflow-hidden"
                      style={{
                        background: "linear-gradient(135deg, rgba(25,39,74,0.97) 0%, rgba(29,42,86,0.95) 100%)",
                        boxShadow: "0 15px 35px rgba(25,39,74,0.3), 0 5px 15px rgba(25,39,74,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
                        border: "1px solid rgba(199,157,42,0.3)"
                      }}
                    >
                      {/* Background shimmer effect */}
                      <div className="absolute inset-0 -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-700 opacity-20"
                           style={{
                             background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)"
                           }} />
                      
                      <Phone className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                      <span className="relative z-10">{businessStaticData.rotemPhone.numberToDisplay}</span>
                    </Link>
                  </motion.div>

                  {/* Admin Button */}
                  {isAdmin && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: navLinks.length * 0.1 + 0.4 }}
                      whileHover={{ scale: 1.03 }} 
                      whileTap={{ scale: 0.97 }} 
                      className="mt-4 group relative"
                    >
                      {/* Button glow effect */}
                      <div className="absolute -inset-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                           style={{
                             background: "linear-gradient(135deg, rgba(120,120,120,0.3) 0%, rgba(60,60,60,0.2) 100%)",
                             filter: "blur(20px)"
                           }} />

                      <Link
                        href="/catalog/manage"
                        onClick={() => setIsOpen(false)}
                        className="relative flex items-center justify-center gap-3 rounded-full px-8 py-4 font-serif font-semibold text-white shadow-xl transition-all duration-500 overflow-hidden"
                        style={{
                          background: "linear-gradient(135deg, rgba(80,80,80,0.95) 0%, rgba(60,60,60,0.98) 100%)",
                          boxShadow: "0 15px 35px rgba(60,60,60,0.4), 0 5px 15px rgba(60,60,60,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
                          border: "1px solid rgba(120,120,120,0.3)"
                        }}
                      >
                        {/* Background shimmer effect */}
                        <div className="absolute inset-0 -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-700 opacity-20"
                             style={{
                               background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)"
                             }} />
                        
                        <FaHome className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                        <span className="relative z-10">ניהול נכסים</span>
                      </Link>
                    </motion.div>
                  )}
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
