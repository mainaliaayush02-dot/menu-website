import React from 'react'
import { Phone, ShieldCheck } from 'lucide-react'

export default function Header({ onOpenAudit }) {
  return (
    <header className="bg-[#FFFDF9] border-b border-[#A58E70]/30 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <div className="flex items-center justify-between">
          
          {/* Left: Direct Phone / Delivery Hotline */}
          <div className="flex-1 flex justify-start items-center">
            <a
              href="tel:9841960700"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#F2EFEB] hover:bg-[#EAE4DC] border border-[#A58E70]/30 text-xs sm:text-sm font-semibold text-[#B83240] transition-colors shadow-xs"
              title="Call for Reservations & Delivery"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#B83240]" />
              <span className="hidden sm:inline">Call:</span>
              <span>9841960700</span>
            </a>
          </div>

          {/* Center: Official Fireflies Logo Prominently Centered */}
          <div className="flex-shrink-0 flex items-center justify-center px-2 sm:px-6">
            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full border border-[#A58E70]/30 overflow-hidden shadow-sm bg-white p-1 sm:p-1.5 transition-transform hover:scale-102">
              <img
                src="/logo.jpg"
                alt="Fireflies Restaurant & Bar Official Logo"
                className="w-full h-full object-contain rounded-full"
                loading="eager"
              />
            </div>
          </div>

          {/* Right: 125 Items Verified Audit Badge */}
          <div className="flex-1 flex justify-end items-center">
            <button
              onClick={onOpenAudit}
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#F2EFEB] hover:bg-[#EAE4DC] border border-[#A58E70]/40 text-[11px] sm:text-xs font-semibold text-[#741C2B] transition-colors cursor-pointer shadow-xs"
              title="View Official Menu Verification & Quality Audit"
            >
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#B83240]" />
              <span className="hidden sm:inline">125 Items</span>
              <span>Verified</span>
            </button>
          </div>

        </div>
      </div>
    </header>
  )
}
