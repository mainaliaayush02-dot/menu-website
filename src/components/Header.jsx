import React from 'react'
import { Phone, ShieldCheck, Sparkles, Utensils, Wine } from 'lucide-react'

export default function Header({ activeSection, setActiveSection, onOpenAudit }) {
  return (
    <header className="sticky top-0 z-50 glass-nav transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 sm:h-20 flex items-center justify-between">
        
        {/* Brand Logo & Title */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#E5A93C]/40 bg-[#161B26] flex items-center justify-center gold-glow-subtle flex-shrink-0">
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#E5A93C] animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-brand font-bold text-base sm:text-lg tracking-wider text-[#F8FAFC]">
                FIREFLIES
              </span>
              <span className="text-xs px-1.5 py-0.5 rounded bg-[#E5A93C]/15 text-[#E5A93C] font-medium border border-[#E5A93C]/30">
                जुनेकिरी
              </span>
            </div>
            <p className="text-[11px] text-gray-400 tracking-wide font-light">
              Light in the Dark • Flavors & Fizz
            </p>
          </div>
        </div>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Direct Call / Order Button */}
          <a
            href="tel:9841960700"
            className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#18202F] hover:bg-[#20293C] border border-[#E5A93C]/30 text-xs font-medium text-[#E5A93C] transition-colors"
            title="Call Restaurant for Orders & Delivery"
          >
            <Phone className="w-3.5 h-3.5 text-[#E5A93C]" />
            <span>9841960700</span>
          </a>

          {/* Verification Audit Button */}
          <button
            onClick={onOpenAudit}
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-[#18202F] hover:bg-[#222C3E] border border-gray-700/60 text-[11px] sm:text-xs font-medium text-gray-300 hover:text-white transition-colors"
            title="View Menu Verification & Source Audit"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden xs:inline">125 Items</span> Verified
          </button>
        </div>
      </div>
    </header>
  )
}
