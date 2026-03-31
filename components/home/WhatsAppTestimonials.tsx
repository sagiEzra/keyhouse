import { motion } from "framer-motion"
import Image from "next/image"

const allScreenshots = [
  // { id: "c", src: "/images/whatsappscreenshots/c.jpeg" },
  { id: "d", src: "/images/whatsappscreenshots/d.jpeg" },
  // { id: "e", src: "/images/whatsappscreenshots/e.jpeg" },
  { id: "f", src: "/images/whatsappscreenshots/f.jpeg" },
  { id: "g", src: "/images/whatsappscreenshots/g.jpeg" },
  { id: "a", src: "/images/whatsappscreenshots/a.jpeg" },
  { id: "h", src: "/images/whatsappscreenshots/h.jpeg" },
  { id: "i", src: "/images/whatsappscreenshots/i.jpeg" },
  { id: "j", src: "/images/whatsappscreenshots/j.jpeg" },
  { id: "k", src: "/images/whatsappscreenshots/k.jpeg" },
]

// Triple duplication ensures there's always content visible during the entire loop
const marqueeItems = [...allScreenshots, ...allScreenshots, ...allScreenshots]

export default function WhatsAppTestimonials() {
  return (
    <section
      className="relative py-20 lg:py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, #fafafa 50%, rgba(199,157,42,0.03) 100%)",
      }}
    >
      {/* Section Header */}
      <div className="container mx-auto px-6 relative z-10 mb-12">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-4xl lg:text-5xl font-serif font-bold"
            style={{ color: "rgba(25,39,74,0.97)" }}
          >
            כמה הודעות מרגשות שתפסו אותנו
          </h2>
        </motion.div>
      </div>

      {/* Infinite Marquee */}
      <div className="relative">
        {/* Fade overlays on edges for smooth visual effect */}
        <div
          className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to right, rgba(250,250,250,1) 0%, rgba(250,250,250,0) 100%)",
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to left, rgba(250,250,250,1) 0%, rgba(250,250,250,0) 100%)",
          }}
        />

        <div className="overflow-hidden py-6">
          <div
            className="flex items-center gap-5"
            style={{
              width: "max-content",
              animation: "marquee-scroll 90s linear infinite",
            }}
          >
            {marqueeItems.map((s, i) => (
              <ScreenshotCard key={`${s.id}-${i}`} src={s.src} />
            ))}
          </div>
        </div>
      </div>

      {/* Trust Badge */}
      <div className="container mx-auto px-6 relative z-10 mt-10">
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl"
            style={{
              background: "rgba(199,157,42,0.07)",
              border: "1px solid rgba(199,157,42,0.18)",
            }}
          >
            <div
              className="flex h-6 w-6 items-center justify-center rounded-full flex-shrink-0"
              style={{ background: "#c79d2a" }}
            >
              <svg className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-sm font-medium" style={{ color: "rgba(25,39,74,0.8)" }}>
              מבטיחים שירות אישי ומקצועי 💗
            </span>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0%); }
          to   { transform: translateX(33.333%); }
        }

        @media (prefers-reduced-motion: reduce) {
          div[style*="marquee-scroll"] {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  )
}

function ScreenshotCard({ src }: { src: string }) {
  return (
    <div
      className="flex-shrink-0 rounded-xl overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
      style={{
        boxShadow: "0 8px 30px rgba(25,39,74,0.12), 0 2px 8px rgba(25,39,74,0.06)",
      }}
    >
      <Image
        src={src}
        alt="ביקורת לקוח מוואטסאפ"
        width={320}
        height={600}
        className="block h-[180px] sm:h-[220px] lg:h-[280px] w-auto object-contain"
        draggable={false}
        priority={false}
      />
    </div>
  )
}
