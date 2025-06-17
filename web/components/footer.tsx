import Link from "next/link";
import { FaFacebook, FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const navLinks = [
  { name: "ראשי", href: "/" },
  { name: "אודות", href: "/about" },
  { name: "מכירה", href: "/selling" },
  { name: "קנייה", href: "/buying" },
  { name: "ניהול", href: "/property-management" },
  { name: "נכסים", href: "/blog" },
  { name: "צור קשר", href: "/contact" },
];

export default function Footer() {
  return (
    <footer
      dir="rtl"
      className="relative z-10 mt-0 bg-gradient-to-br from-blue-950 via-blue-800 to-blue-600 text-white shadow-[0_0_60px_0_rgba(30,64,175,0.18)] overflow-hidden"
    >
      {/* Decorative gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 w-[70vw] h-[50vw] max-w-3xl -translate-x-1/2 -translate-y-1/3 rounded-full bg-gradient-to-br from-blue-400/20 via-blue-700/10 to-transparent blur-3xl opacity-50"></div>
        <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-300/20 to-transparent blur-2xl"></div>
      </div>
      <div className="container mx-auto px-6 py-14 flex flex-col md:flex-row md:justify-between gap-12 md:gap-8 relative z-10">
        {/* Logo & Brand */}
        <div className="flex flex-col items-center md:items-end">
          <img
            src="/images/keyhouse.jpg"
            alt="KeyHouse"
            className="w-48 mb-3 drop-shadow-xl rounded-2xl"
          />
          <span className="text-2xl font-extrabold tracking-widest font-serif drop-shadow text-blue-100">
            KeyHouse
          </span>
          <span className="mt-1 text-sm text-blue-100/80 font-light">
            הבית שלך בנדל״ן באילת
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col items-center md:items-center justify-center w-full">
          <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 w-full max-w-xl mx-auto">
            {navLinks.map((link) => (
              <li key={link.href} className="flex justify-center">
                <Link
                  href={link.href}
                  className="inline-block w-full text-center px-0 py-2 text-base font-semibold rounded-lg bg-gradient-to-r from-blue-700/60 via-blue-600/60 to-blue-800/60 hover:from-blue-400 hover:to-blue-700 hover:text-white transition-all duration-200 shadow-md backdrop-blur-md border border-white/10 tracking-tight hover:scale-105"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact & Social */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex items-center gap-2 text-blue-100/90">
            <FaPhoneAlt className="text-blue-300" />
            <a href="tel:+972501234567" className="hover:underline hover:text-white transition font-semibold">
              050-123-4567
            </a>
          </div>
          <div className="flex items-center gap-2 text-blue-100/90">
            <FaEnvelope className="text-blue-300" />
            <a href="mailto:info@keyhouse.co.il" className="hover:underline hover:text-white transition font-semibold">
              info@keyhouse.co.il
            </a>
          </div>
          <div className="flex gap-3 mt-2">
            <a
              href="https://facebook.com/keyhouse"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-blue-800/60 p-2 hover:bg-blue-400/80 hover:text-blue-900 transition-all shadow-lg"
              aria-label="Facebook"
            >
              <FaFacebook className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com/keyhouse"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-blue-800/60 p-2 hover:bg-blue-400/80 hover:text-blue-900 transition-all shadow-lg"
              aria-label="Instagram"
            >
              <FaInstagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-600 bg-opacity-90 py-3 text-center text-sm text-blue-100/80 font-light shadow-inner border-t border-blue-800/40 relative z-10">
        <span className="tracking-wide">
          © {new Date().getFullYear()} KeyHouse נדל״ן. כל הזכויות שמורות.
        </span>
      </div>
    </footer>
  );
}