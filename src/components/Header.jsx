import React from 'react'
import { Menu, Phone } from 'lucide-react'

export default function Header({ onOpenSidebar }) {
  return (
    <header className="bg-[#241C20] border-b border-[#A58E70]/25 shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <div className="flex items-center justify-between">
          
          {/* Left Column: Mobile Hamburger Button & Desktop Menu Shortcut */}
          <div className="flex-1 flex justify-start items-center">
            <button
              onClick={onOpenSidebar}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl bg-[#302328] hover:bg-[#38282D] border border-[#A58E70]/30 text-xs sm:text-sm font-semibold text-[#FFFDF9] transition-all cursor-pointer shadow-xs active:scale-95"
              aria-label="Open menu categories navigation"
              title="Open Categories & Navigation"
            >
              <Menu className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#B83240]" />
              <span className="tracking-wide">Menu</span>
            </button>
          </div>

          {/* Center Column: Official Fireflies Logo Prominently Centered */}
          <div className="flex-shrink-0 flex items-center justify-center px-2 sm:px-6">
            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full border border-[#A58E70]/35 overflow-hidden shadow-lg bg-white p-1 sm:p-1.5 transition-transform hover:scale-102">
              <img
                src="/logo.jpg"
                alt="Fireflies Restaurant & Bar Official Logo"
                className="w-full h-full object-contain rounded-full"
                loading="eager"
              />
            </div>
          </div>

          {/* Right Column: Call Hotline for Table Reservations & Delivery */}
          <div className="flex-1 flex justify-end items-center">
            <a
              href="tel:9841960700"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-xl bg-[#302328] hover:bg-[#38282D] border border-[#A58E70]/30 text-xs sm:text-sm font-semibold text-[#FFA4AD] transition-all shadow-xs active:scale-95"
              title="Call for Reservations & Delivery"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#B83240]" />
              <span className="hidden sm:inline text-[#D6C7C2]">Call:</span>
              <span className="font-bold">9841960700</span>
            </a>
          </div>

        </div>
      </div>
    </header>
  )
}
