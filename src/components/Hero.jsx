import React from 'react'
import { Utensils, Wine, Phone, QrCode, Sparkles, Clock } from 'lucide-react'

export default function Hero({ onExploreFood, onExploreDrinks }) {
  return (
    <section className="relative overflow-hidden pt-8 pb-10 sm:py-12 border-b border-gray-800/60 bg-gradient-to-b from-[#10141D] via-[#0C0F15] to-[#0A0C10]">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#E5A93C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-64 h-64 bg-amber-600/5 rounded-full blur-2xl pointer-events-none" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Top pill badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A2232] border border-[#E5A93C]/30 text-xs text-[#E5A93C] mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#E5A93C]" />
          <span className="font-medium tracking-wide">Digital Table Menu • QR Verified</span>
        </div>

        {/* Brand Headings */}
        <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#F8FAFC] mb-2 leading-tight">
          Fireflies <span className="text-[#E5A93C] font-serif italic">Restaurant & Bar</span>
        </h1>
        
        <p className="font-serif text-lg sm:text-2xl text-amber-200/90 tracking-wide font-normal mb-3">
          जुनेकिरी <span className="text-gray-400 font-sans text-sm sm:text-base">— Light in the Dark</span>
        </p>

        <p className="max-w-xl mx-auto text-xs sm:text-sm text-gray-400 leading-relaxed mb-6">
          Welcome to Fireflies. Browse our complete menu of traditional Nepali delicacies, 
          wood-fired pizzas, gourmet burgers, artisan cocktails, and premium spirits.
        </p>

        {/* Dual Quick Action CTA Buttons */}
        <div className="flex flex-col xs:flex-row items-center justify-center gap-3 sm:gap-4 mb-6">
          <button
            onClick={onExploreFood}
            className="w-full xs:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#E5A93C] text-[#0A0C10] font-semibold text-sm shadow-lg hover:brightness-110 active:scale-98 transition-all cursor-pointer"
          >
            <Utensils className="w-4 h-4 text-[#0A0C10]" />
            <span>Food Menu (68 Items)</span>
          </button>
          
          <button
            onClick={onExploreDrinks}
            className="w-full xs:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-[#18202F] hover:bg-[#20293C] text-[#F8FAFC] border border-[#E5A93C]/40 font-semibold text-sm hover:border-[#E5A93C] active:scale-98 transition-all cursor-pointer"
          >
            <Wine className="w-4 h-4 text-[#E5A93C]" />
            <span>Drinks & Bar (57 SKUs)</span>
          </button>
        </div>

        {/* Quick Highlights Row */}
        <div className="inline-flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-gray-400 border-t border-gray-800/80 pt-4">
          <div className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-[#E5A93C]" />
            <span>Delivery: <a href="tel:9841960700" className="text-gray-300 underline hover:text-[#E5A93C]">9841960700</a></span>
          </div>
          <span className="hidden sm:inline text-gray-700">•</span>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-emerald-400" />
            <span>Dine-in & Bar Open Daily</span>
          </div>
          <span className="hidden sm:inline text-gray-700">•</span>
          <div className="flex items-center gap-1.5">
            <QrCode className="w-3.5 h-3.5 text-blue-400" />
            <span>Table Order & Service</span>
          </div>
        </div>

      </div>
    </section>
  )
}
