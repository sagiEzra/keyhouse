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
    { name: "קטלוג הנכסים", href: "/catalog" },
    { name: "צור קשר", href: "/contact" },
  ]

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${isScrolled
          ? "bg-white/95 py-3 backdrop-blur-xl border-b"
          : "bg-gradient-to-b from-black/50 to-transparent py-5 backdrop-blur-sm"
        }`}
      style={{
        boxShadow: isScrolled ? "0 4px 32px 0 #23214a14" : "none",
        borderColor: isScrolled ? "#23214a22" : "transparent",
      }}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="z-50 relative">
          <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
            <img
              src="/images/keyLogo.png"
              alt="KeyHouse Logo"
              className={`transition-all duration-300 ${isScrolled ? "h-12" : "h-14"}`}
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="group relative">
              <motion.span
                className={`relative text-lg font-semibold transition-colors duration-300 ${isScrolled ? (activeLink === link.href ? "#f1c23b" : "#23214a") : "text-white"
                  } ${activeLink === link.href ? "" : "hover:opacity-80"}`}
                style={{
                  color: isScrolled ? (activeLink === link.href ? "#f1c23b" : "#23214a") : "#ffffff",
                }}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {link.name}
              </motion.span>
              <span
                className={`absolute -bottom-1 right-0 h-0.5 transition-all duration-300 ${activeLink === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                style={{ backgroundColor: "#f1c23b" }}
              />
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={businessStaticData.phone.callLink}
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 transition-all duration-300 shadow-lg hover:shadow-xl font-medium ${isScrolled ? "text-white" : "bg-white/20 text-white backdrop-blur-md"
                }`}
              style={{
                background: isScrolled
                  ? "linear-gradient(90deg, #23214a 0%, #23214a 100%)"
                  : "rgba(255, 255, 255, 0.65)",
              }}
              onMouseEnter={(e) => {
                ; (e.currentTarget as HTMLAnchorElement).style.background =
                  "linear-gradient(90deg, #f1c23b 0%, #f1c23b 100%)"
                  ; (e.currentTarget as HTMLAnchorElement).style.color = "#23214a"
              }}
              onMouseLeave={(e) => {
                ; (e.currentTarget as HTMLAnchorElement).style.background = isScrolled
                  ? "linear-gradient(90deg, #23214a 0%, #23214a 100%)"
                  : "rgba(255, 255, 255, 0.2)"
                  ; (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff"
              }}
            >
              <Phone className="h-4 w-4" />
              <span>{businessStaticData.phone.numberToDisplay}</span>
            </Link>
          </motion.div>

          {/* Fixed admin button on the left of the header */}
          {isAdmin && (
            <div
              className="fixed right-2 top-3 z-50"
              style={{
                // Adjust top/left as needed to align with your header
              }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/catalog/manage"
                  className={`flex items-center gap-2 rounded-full px-5 py-2 transition-all duration-300 shadow-lg hover:shadow-xl font-medium bg-[#23214a] text-white`}
                  style={{
                    background: "linear-gradient(90deg,rgb(126, 126, 126) 0%,rgb(82, 82, 82) 100%)",
                    border: "2px solid rgb(56, 56, 56)"
                  }}
                >
                  <FaHome className="h-4 w-4" />
                  <span>ניהול נכסים</span>
                </Link>
              </motion.div>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="z-50 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "סגור תפריט" : "פתח תפריט"}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? (
            <X className="h-6 w-6" style={{ color: "#23214a" }} />
          ) : (
            <Menu className="h-6 w-6" style={{ color: isScrolled ? "#23214a" : "#ffffff" }} />
          )}
        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute left-0 right-0 top-0 min-h-screen bg-white"
            >
              <div className="container mx-auto px-4 pt-24">
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`border-b py-4 text-lg font-medium transition-colors duration-300 ${activeLink === link.href ? "" : ""
                        }`}
                      style={{
                        borderColor: "#23214a22",
                        color: activeLink === link.href ? "#f1c23b" : "#23214a",
                      }}
                    >
                      <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                        {link.name}
                      </motion.div>
                    </Link>
                  ))}
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="mt-6">
                    <Link
                      href={businessStaticData.phone.callLink}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-medium text-white shadow-xl"
                      style={{
                        background: "linear-gradient(90deg, #23214a 0%, #23214a 100%)",
                      }}
                    >
                      <Phone className="h-5 w-5" />
                      <span>{businessStaticData.phone.numberToDisplay}</span>
                    </Link>
                  </motion.div>
                  {isAdmin && (
                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="mt-6">
                      <Link
                        href="/catalog/manage"
                        className="flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-medium text-white shadow-xl"
                        style={{
                          background: "linear-gradient(90deg, #23214a 0%, #23214a 100%)",
                        }}>
                        ניהול נכסים
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
