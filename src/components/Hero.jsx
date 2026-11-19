import React from 'react'
import { Utensils, Wine, Phone, QrCode, Sparkles, Clock } from 'lucide-react'

export default function Hero({ onExploreFood, onExploreDrinks }) {
  return (
    <section className="relative overflow-hidden py-10 sm:py-14 border-b border-[#A58E70]/30 bg-gradient-to-b from-[#FFFDF9] via-[#FAF7F2] to-[#F2EFEB]">
      {/* Subtle brand ambiance accent */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#B83240]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-[#A58E70]/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Brand Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFFDF9] border border-[#A58E70]/40 text-xs text-[#741C2B] font-medium mb-4 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#B83240]" />
          <span className="tracking-wide">Official QR Digital Menu • Table Service</span>
        </div>

        {/* Main Brand Title */}
        <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#741C2B] mb-2 leading-tight">
          Fireflies <span className="text-[#B83240] italic font-editorial">Flavours & Fizz</span>
        </h1>

        {/* Nepali Name & Tagline */}
        <p className="font-devanagari text-lg sm:text-2xl text-[#211D1E] font-medium tracking-wide mb-3">
          जुनकिरी <span className="font-serif font-normal text-base sm:text-lg text-[#5A5255]">— Light in the Dark</span>
        </p>

        {/* Brand Promise Quote */}
        <p className="font-editorial italic text-base sm:text-lg text-[#741C2B]/90 max-w-lg mx-auto mb-3">
          “Good Food. Great Drinks. Memorable Moments.”
        </p>

        <p className="max-w-xl mx-auto text-xs sm:text-sm text-[#5A5255] leading-relaxed mb-8">
          Welcome to Fireflies Restaurant & Bar. Browse our complete menu of traditional Nepali delicacies, 
          wood-style pizzas, flame-grilled burgers, fresh refreshers, and premium spirits.
        </p>

        {/* Dual Quick Action CTA Buttons */}
        <div className="flex flex-col xs:flex-row items-center justify-center gap-3 sm:gap-4 mb-8">
          <button
            onClick={onExploreFood}
            className="w-full xs:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-[#B83240] hover:bg-[#9E2835] text-white font-semibold text-sm shadow-sm hover:shadow-md active:scale-98 transition-all cursor-pointer"
          >
            <Utensils className="w-4 h-4 text-white" />
            <span>Explore Food Menu (68)</span>
          </button>
          
          <button
            onClick={onExploreDrinks}
            className="w-full xs:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-[#FFFDF9] hover:bg-[#F2EFEB] text-[#741C2B] border border-[#B83240]/40 hover:border-[#B83240] font-semibold text-sm shadow-xs active:scale-98 transition-all cursor-pointer"
          >
            <Wine className="w-4 h-4 text-[#B83240]" />
            <span>Explore Drinks & Bar (57)</span>
          </button>
        </div>

        {/* Verified Quick Info Row */}
        <div className="inline-flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[#5A5255] border-t border-[#A58E70]/30 pt-4">
          <div className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-[#B83240]" />
            <span>Delivery & Takeaway: <a href="tel:9841960700" className="text-[#741C2B] font-semibold underline hover:text-[#B83240]">9841960700</a></span>
          </div>
          <span className="hidden sm:inline text-[#A58E70]/60">•</span>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#B83240]" />
            <span>Dine-in & Bar Open Daily</span>
          </div>
          <span className="hidden sm:inline text-[#A58E70]/60">•</span>
          <div className="flex items-center gap-1.5">
            <QrCode className="w-3.5 h-3.5 text-[#741C2B]" />
            <span>Instant Tabletop QR Access</span>
          </div>
        </div>

      </div>
    </section>
  )
}
