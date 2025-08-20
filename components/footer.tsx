import Link from "next/link"
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
        background: "linear-gradient(135deg, #23214a 0%, #23214a 100%)",
        boxShadow: "0 -4px 32px 0 #23214a40",
      }}
    >
      {/* Decorative gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-1/2 top-0 w-[70vw] h-[50vw] max-w-3xl -translate-x-1/2 -translate-y-1/3 rounded-full blur-3xl opacity-30"
          style={{
            background: "linear-gradient(135deg, #f1c23b40 0%, #f1c23b20 50%, transparent 100%)",
          }}
        />
        <div
          className="absolute right-0 bottom-0 w-1/3 h-1/3 blur-2xl opacity-20"
          style={{
            background: "linear-gradient(45deg, #f1c23b60 0%, transparent 100%)",
          }}
        />
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid gap-12 md:grid-cols-3 items-start justify-evenly">
          {/* Logo & Brand */}
          <div className="flex flex-col items-center">
            <img
              src="/images/keyhouse.jpg"
              alt="KeyHouse"
              className="w-40 mb-4 drop-shadow-2xl rounded-2xl border-4"
              // style={{ borderColor: "#f1c23b" }}
            />
            <span
          className="text-xl md:text-2xl font-medium text-blue-100 max-w-3xl mx-auto drop-shadow-lg"
          style={{ color: "#f1c23b" }}
            >
              KeyHouse
            </span>
            <span className="mt-2 text-sm text-white/80 font-light text-center">
              הבית שלך בנדל״ן באילת
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col items-center">
            <h3 className="text-lg font-bold mb-6 text-center" style={{ color: "#f1c23b" }}>
              ניווט באתר
            </h3>
            <ul className="grid grid-cols-2 gap-3 w-full max-w-sm">
              {navLinks.map((link) => (
                <li key={link.href} className="flex justify-center">
                  <Link
                    href={link.href}
                    className="inline-block w-full text-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 text-white/90 hover:text-white border border-white/20 hover:border-[#f1c23b] hover:bg-[#f1c23b]/10 hover:scale-105"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact & Social */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-bold mb-6 text-center" style={{ color: "#f1c23b" }}>
              צור קשר
            </h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3 text-white/90">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-full"
                  style={{ backgroundColor: "#f1c23b", color: "#23214a" }}
                >
                  <FaPhoneAlt className="h-4 w-4" />
                </div>
                <a href={`tel:+${businessStaticData.phone.israelNumber}`} className="hover:text-white transition font-medium hover:underline">
                  {businessStaticData.phone.numberToDisplay}
                </a>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-full"
                  style={{ backgroundColor: "#f1c23b", color: "#23214a" }}
                >
                  <FaEnvelope className="h-4 w-4" />
                </div>
                <a
                  href={businessStaticData.social.emailLink}
                  className="hover:text-white transition font-medium hover:underline"
                >
                  {businessStaticData.social.email}
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://facebook.com/keyhouse"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-3 hover:bg-[#1877F2] transition-all duration-300 hover:scale-110 shadow-lg"
                aria-label="Facebook"
              >
                <FaFacebook className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://instagram.com/keyhouse"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-3 hover:bg-gradient-to-r hover:from-[#E4405F] hover:to-[#C13584] transition-all duration-300 hover:scale-110 shadow-lg"
                aria-label="Instagram"
              >
                <FaInstagram className="h-5 w-5 text-white" />
              </a>
              <a
                href={businessStaticData.phone.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-3 hover:bg-[#25D366] transition-all duration-300 hover:scale-110 shadow-lg"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="py-4 text-center text-sm text-white/70 font-light border-t relative z-10"
        style={{
          borderColor: "#f1c23b33",
          background: "linear-gradient(90deg, #23214a 0%, #23214a 100%)",
        }}
      >
        <span className="tracking-wide">© {new Date().getFullYear()} KeyHouse נדל״ן. כל הזכויות שמורות.</span>
      </div>
    </footer>
  )
}
