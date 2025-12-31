import '../styles/globals.css';
import React, { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';
import Header from '../components/header';
import Footer from '../components/footer';
import { Rubik } from "next/font/google"
import { ThemeProvider } from "../components/theme-provider"
import { FloatingWhatsAppButton } from '../components/common/floatingWhatsAppButton ';
import CookieBanner from '../components/cookie-banner';
import CookiePreferencesModal from '../components/cookie-preferences-modal';

// Hebrew font
const rubik = Rubik({
  subsets: ["hebrew", "latin"],
  variable: "--font-rubik",
})

export default function App({ Component, pageProps }: AppProps) {
  const [isPreferencesModalOpen, setIsPreferencesModalOpen] = useState(false)

  useEffect(() => {
    // Listen for custom event from Footer to open preferences modal
    const handleOpenPreferences = () => {
      setIsPreferencesModalOpen(true)
    }

    window.addEventListener('openCookiePreferences', handleOpenPreferences)

    return () => {
      window.removeEventListener('openCookiePreferences', handleOpenPreferences)
    }
  }, [])

  return (
    <>
      <main lang="he" dir="rtl" className={rubik.variable}>
        {/* Skip Navigation Link for Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-4 focus:z-[9999] focus:rounded-2xl focus:px-6 focus:py-4 focus:text-lg focus:font-bold focus:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#c79d2a] focus:ring-offset-2"
          style={{
            background: "linear-gradient(135deg, rgba(25,39,74,0.97) 0%, #1a2756 100%)",
            color: "#ffffff"
          }}
        >
          דלג לתוכן הראשי
        </a>

        <div className="min-h-screen bg-white font-sans antialiased">
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
            <Header />
            <Component {...pageProps} />
            <Footer />
            <FloatingWhatsAppButton />

            {/* Cookie Banner & Preferences */}
            <CookieBanner onOpenPreferences={() => setIsPreferencesModalOpen(true)} />
            <CookiePreferencesModal
              isOpen={isPreferencesModalOpen}
              onClose={() => setIsPreferencesModalOpen(false)}
            />
          </ThemeProvider>
        </div>
      </main>

    </>
  )
}