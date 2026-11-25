import React from 'react'
import { Phone, ArrowUp, ShieldCheck } from 'lucide-react'

export default function Footer({ onOpenAudit }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="mt-16 border-t border-[#A58E70]/30 bg-[#F2EFEB] text-[#5A5255] py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Brand & Hotline Section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-[#A58E70]/25">
          
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full border border-[#A58E70]/30 overflow-hidden shadow-sm flex-shrink-0 bg-white p-0.5">
              <img
                src="/logo.jpg"
                alt="Fireflies Logo"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <div className="space-y-0.5">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-serif font-bold text-lg sm:text-xl text-[#741C2B] tracking-wide">
                  Fireflies
                </span>
                <span className="font-serif italic text-base text-[#B83240]">
                  Flavours & Fizz
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#B83240]/10 text-[#B83240] font-devanagari font-semibold border border-[#B83240]/25">
                  जुनकिरी
                </span>
              </div>
              <p className="font-serif italic text-sm text-[#741C2B]/90 font-medium">
                Light in the Dark
              </p>
              <p className="text-xs text-[#A58E70]">
                Official QR Digital Table Menu
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:items-end gap-2">
            <span className="text-xs text-[#5A5255] font-medium">Home Delivery & Table Reservations</span>
            <a
              href="tel:9841960700"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FFFDF9] hover:bg-white border border-[#B83240]/40 text-[#B83240] text-sm font-bold shadow-xs transition-colors"
            >
              <Phone className="w-4 h-4 text-[#B83240]" />
              <span>Call: 9841960700</span>
            </a>
          </div>

        </div>

        {/* Middle Navigation & Info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
          
          <div>
            <h5 className="font-serif font-bold text-[#741C2B] mb-2 uppercase tracking-wider text-[11px]">
              Menu Inclusions
            </h5>
            <ul className="space-y-1.5 text-[#5A5255]">
              <li>• 68 Food Items Across 11 Categories</li>
              <li>• 57 Drinks, Beers, Spirits & Shisha</li>
              <li>• Traditional Nepali Thakali Sets</li>
              <li>• Handcrafted 12" & 18" Wood-Style Pizzas</li>
            </ul>
          </div>

          <div>
            <h5 className="font-serif font-bold text-[#741C2B] mb-2 uppercase tracking-wider text-[11px]">
              Dining & Service Notes
            </h5>
            <ul className="space-y-1.5 text-[#5A5255]">
              <li>• Thakali Khana: Min 4 packs, 30-50 mins wait</li>
              <li>• Hard Drinks: Quarter, Half & Full Bottle pours</li>
              <li>• 18+ verification strictly enforced on alcoholic beverages</li>
              <li>• All prices displayed in Nepalese Rupees (NPR)</li>
            </ul>
          </div>

          <div>
            <h5 className="font-serif font-bold text-[#741C2B] mb-2 uppercase tracking-wider text-[11px]">
              Data Quality & Transparency
            </h5>
            <p className="text-[#5A5255] leading-relaxed mb-3">
              This digital menu is backed by a verified Google Drive extraction audit. Zero items or prices are fabricated.
            </p>
            <button
              onClick={onOpenAudit}
              className="inline-flex items-center gap-1.5 text-xs text-[#B83240] font-semibold hover:underline cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4 text-[#B83240]" />
              <span>Review Menu Audit Register</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar & Back to Top */}
        <div className="pt-6 border-t border-[#A58E70]/25 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A58E70]">
          <p>
            © {new Date().getFullYear()} Fireflies Restaurant & Bar (जुनकिरी). All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FFFDF9] hover:bg-white text-[#211D1E] border border-[#A58E70]/30 transition-colors cursor-pointer shadow-xs font-semibold"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#B83240]" />
          </button>
        </div>

      </div>
    </footer>
  )
}
