import '../styles/globals.css';
import React from 'react';
import type { AppProps } from 'next/app';
import Header from '../components/Header';
import Footer from '../components/footer';
import { Rubik } from "next/font/google"
import { ThemeProvider } from "../components/theme-provider"
import { FloatingWhatsAppButton } from '../components/common/floatingWhatsAppButton ';
import { PropertyValuationPopup } from '../components/common/PropertyValuationPopup';

// Hebrew font
const rubik = Rubik({
  subsets: ["hebrew", "latin"],
  variable: "--font-rubik",
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main lang="he" dir="rtl" className={rubik.variable}>
        <div className="min-h-screen bg-white font-sans antialiased">
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
            <Header />
            <Component {...pageProps} />
            <Footer />
            <FloatingWhatsAppButton />
            <PropertyValuationPopup />
          </ThemeProvider>
        </div>
      </main>

    </>
  )
}