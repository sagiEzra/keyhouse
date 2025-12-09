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