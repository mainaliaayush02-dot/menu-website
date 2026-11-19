import React from 'react'
import { Phone, ShieldCheck } from 'lucide-react'

export default function Header({ onOpenAudit }) {
  return (
    <header className="sticky top-0 z-50 glass-nav-warm transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 sm:h-22 flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#A58E70]/40 overflow-hidden shadow-sm flex-shrink-0 bg-white">
            <img
              src="/logo.jpg"
              alt="Fireflies Restaurant & Bar Official Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-serif font-bold text-base sm:text-xl text-[#741C2B] tracking-wide">
                Fireflies
              </span>
              <span className="font-sans text-xs sm:text-sm font-semibold text-[#211D1E] tracking-normal">
                Restaurant & Bar
              </span>
              <span className="text-[11px] sm:text-xs px-2 py-0.5 rounded-full bg-[#B83240]/10 text-[#B83240] font-devanagari font-semibold border border-[#B83240]/25">
                जुनकिरी
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-[#5A5255] tracking-wide font-medium mt-0.5">
              Light in the Dark • Flavors & Fizz
            </p>
          </div>
        </div>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Direct Call / Order Button */}
          <a
            href="tel:9841960700"
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#FFFDF9] hover:bg-[#F2EFEB] border border-[#B83240]/30 text-xs font-semibold text-[#B83240] transition-colors shadow-xs"
            title="Call Restaurant for Reservations & Home Delivery"
          >
            <Phone className="w-3.5 h-3.5 text-[#B83240]" />
            <span>9841960700</span>
          </a>

          {/* Verification Audit Button */}
          <button
            onClick={onOpenAudit}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:py-2 rounded-full bg-[#F2EFEB] hover:bg-[#EAE4DC] border border-[#A58E70]/40 text-[11px] sm:text-xs font-semibold text-[#741C2B] transition-colors cursor-pointer shadow-xs"
            title="View Official Menu Verification & Quality Audit"
          >
            <ShieldCheck className="w-4 h-4 text-[#B83240]" />
            <span className="hidden xs:inline">125 Items</span>
            <span>Verified</span>
          </button>
        </div>

      </div>
    </header>
  )
}
