import React, { useState, useEffect } from 'react'
import { Phone, ArrowUp } from 'lucide-react'

export default function FloatingActions() {
  const [showScroll, setShowScroll] = useState(false)

  useEffect(() => {
    const checkScroll = () => {
      if (window.pageYOffset > 400) {
        setShowScroll(true)
      } else {
        setShowScroll(false)
      }
    }
    window.addEventListener('scroll', checkScroll)
    return () => window.removeEventListener('scroll', checkScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="w-11 h-11 rounded-full bg-[#1A2232] border border-[#E5A93C]/40 text-[#E5A93C] hover:bg-[#232E44] flex items-center justify-center shadow-xl transition-all cursor-pointer gold-glow-subtle"
          title="Scroll to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating Call / Order Button (Mobile optimized) */}
      <a
        href="tel:9841960700"
        className="inline-flex sm:hidden items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E5A93C] text-[#0A0C10] font-bold text-xs shadow-xl active:scale-95 transition-all"
        title="Call 9841960700"
      >
        <Phone className="w-4 h-4 fill-current" />
        <span>Order: 9841960700</span>
      </a>
    </div>
  )
}
