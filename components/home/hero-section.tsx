"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import LuxuryButton from "@/components/ui/luxury-button"

// Extend Window interface to include YT
declare global {
  interface Window {
    YT: any
    onYouTubeIframeAPIReady: () => void
  }
}

export default function HeroSection() {
  const playerRef = useRef<any>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  useEffect(() => {
    // Set loaded to true immediately so content shows
    setIsLoaded(true)

    const initializePlayer = () => {
      // Check if player container exists
      const playerContainer = document.getElementById('youtube-player')
      if (!playerContainer || playerRef.current) return

      try {
        playerRef.current = new window.YT.Player('youtube-player', {
          videoId: 'TzMDVInxbRw',
          playerVars: {
            autoplay: 1,
            mute: 1,
            start: 33,
            controls: 0,
            showinfo: 0,
            rel: 0,
            modestbranding: 1,
            playsinline: 1,
            enablejsapi: 1,
            loop: 0,
            disablekb: 1,
            fs: 0,
            iv_load_policy: 3
          },
          events: {
            onReady: (event: any) => {
              console.log('YouTube player ready')
              event.target.mute()
              event.target.seekTo(33, true)
              event.target.playVideo()
            },
            onStateChange: (event: any) => {
              // State: -1 (unstarted), 0 (ended), 1 (playing), 2 (paused), 3 (buffering), 5 (cued)
              console.log('Player state:', event.data)

              if (event.data === window.YT.PlayerState.PLAYING) {
                // Video is actually playing - hide overlay
                setIsVideoPlaying(true)
              } else if (event.data === window.YT.PlayerState.ENDED) {
                // When video ends, loop back to second 33
                event.target.seekTo(33, true)
                event.target.playVideo()
              }
            }
          }
        })
      } catch (error) {
        console.error('Error initializing YouTube player:', error)
      }
    }

    // Check if YouTube API is already loaded
    if (window.YT && window.YT.Player) {
      // Add small delay to ensure DOM is ready
      setTimeout(initializePlayer, 100)
    } else {
      // Check if script is already being loaded
      const existingScript = document.querySelector('script[src="https://www.youtube.com/iframe_api"]')

      if (!existingScript) {
        // Load YouTube IFrame API with async
        const tag = document.createElement('script')
        tag.src = 'https://www.youtube.com/iframe_api'
        tag.async = true
        const firstScriptTag = document.getElementsByTagName('script')[0]
        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)
      }

      // Initialize player when API is ready
      window.onYouTubeIframeAPIReady = () => {
        setTimeout(initializePlayer, 100)
      }
    }

    return () => {
      if (playerRef.current && typeof playerRef.current.destroy === 'function') {
        try {
          playerRef.current.destroy()
        } catch (error) {
          console.error('Error destroying player:', error)
        }
        playerRef.current = null
      }
    }
  }, [])

  return (
    <section
      className="relative min-h-[95vh] md:min-h-[110vh] flex items-center justify-center overflow-hidden pt-24 md:pt-28 pb-12"
      style={{
        background: "linear-gradient(135deg, rgba(25,39,74,0.97) 0%, #1a2756 35%, #2d4a8e 65%, rgba(35,52,94,0.95) 100%)",
      }}
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* YouTube Player Container - API will create iframe here */}
        <div className="absolute inset-0 w-full h-full">
          <div
            id="youtube-player"
            className="absolute top-0 left-0 w-[177.77vh] h-[100vh] md:w-[100vw] md:h-[56.25vw] md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2"
          ></div>
        </div>

        {/* Loading Overlay - shown until video is actually playing */}
        <div
          className={`absolute inset-0 transition-opacity duration-1000 pointer-events-none ${
            isVideoPlaying ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            background: "linear-gradient(135deg, rgba(25,39,74,0.97) 0%, #1a2756 35%, #2d4a8e 65%, rgba(35,52,94,0.95) 100%)",
          }}
        >
          {/* Optional: Add a subtle loading indicator */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* Pulsing glow effect */}
              <div
                className="absolute -inset-8 rounded-full opacity-40 blur-3xl animate-pulse"
                style={{
                  background: "radial-gradient(circle, rgba(199,157,42,0.3) 0%, transparent 70%)"
                }}
              />
            </div>
          </div>
        </div>

        {/* Video overlay gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(25,39,74,0.7) 0%, rgba(25,39,74,0.4) 50%, rgba(25,39,74,0.7) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 py-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 40 }}
          transition={{ duration: 0.8 }}
          className="mb-8 relative"
        >
          {/* Logo glow effect */}
          <div
            className="absolute -inset-8 rounded-full opacity-40 blur-3xl"
            style={{
              background: "radial-gradient(circle, rgba(199,157,42,0.3) 0%, transparent 70%)"
            }}
          />
          <img
            src="/images/logoNoBg.png"
            alt="KeyHouse Logo"
            className="relative mx-auto h-40 md:h-56 w-auto"
            style={{
              filter: "drop-shadow(0 8px 32px rgba(0,0,0,0.4)) drop-shadow(0 4px 16px rgba(199,157,42,0.3))"
            }}
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 font-serif text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-white"
          style={{
            textShadow: "0 4px 20px rgba(0,0,0,0.3), 0 2px 10px rgba(199,157,42,0.2)"
          }}
        >
          <span className="block mb-4">
            ברוכים הבאים
          </span>
          <span
            className="block bg-gradient-to-l from-white via-gray-0 to-white bg-clip-text text-transparent"
            style={{
              textShadow: "0 4px 20px rgba(0,0,0,0.4)"
            }}
          >
            סוכנות נדל&quot;ן - קי האוס אילת
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 40 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mb-10 max-w-4xl text-xl text-blue-100 md:text-2xl font-light leading-relaxed"
          style={{ textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}
        >
          החזון, האנשים והערכים שמאחורי סוכנות הנדל&quot;ן המובילה באילת
        </motion.p>

        <motion.div
          className="mx-auto h-1.5 w-32 rounded-full"
          style={{
            background: "linear-gradient(90deg, #c79d2a 0%, rgba(199,157,42,0.3) 50%, #c79d2a 100%)",
            boxShadow: "0 4px 20px rgba(199,157,42,0.4), 0 2px 10px rgba(199,157,42,0.2)",
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 40 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 40 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <a href="#services-grid">
            <LuxuryButton size="large">
              השירותים שלנו
            </LuxuryButton>
          </a>
        </motion.div>
      </div>

      {/* Enhanced bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white via-white/60 to-transparent pointer-events-none"></div>
    </section>
  )
}
