import React from 'react'
import { Sparkles, Phone, ArrowUp, ShieldCheck } from 'lucide-react'

export default function Footer({ onOpenAudit }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="mt-16 border-t border-gray-800/80 bg-[#080A0E] text-gray-400 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Brand & Hotline Section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-gray-800/60">
          
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="font-brand font-bold text-lg text-white tracking-wider">
                FIREFLIES
              </span>
              <span className="text-xs px-2 py-0.5 rounded bg-[#E5A93C]/15 text-[#E5A93C] font-medium border border-[#E5A93C]/30">
                जुनेकिरी
              </span>
            </div>
            <p className="font-serif italic text-sm text-gray-300">
              Light in the Dark • Flavors and Fizz
            </p>
            <p className="text-xs text-gray-500">
              Digital Table Menu — Official Restaurant Catalogue
            </p>
          </div>

          <div className="flex flex-col sm:items-end gap-2">
            <span className="text-xs text-gray-400">Home Delivery & Table Reservations</span>
            <a
              href="tel:9841960700"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#161D2B] hover:bg-[#1E273A] border border-[#E5A93C]/40 text-[#E5A93C] text-sm font-semibold transition-colors"
            >
              <Phone className="w-4 h-4 text-[#E5A93C]" />
              <span>Call: 9841960700</span>
            </a>
          </div>

        </div>

        {/* Middle Navigation & Info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
          
          <div>
            <h5 className="font-serif font-semibold text-gray-200 mb-2 uppercase tracking-wider text-[11px]">
              Menu Inclusions
            </h5>
            <ul className="space-y-1.5 text-gray-400">
              <li>• 68 Food Items Across 10 Categories</li>
              <li>• 57 Drinks, Beers, Spirits & Shisha</li>
              <li>• Traditional Nepali Thakali Sets</li>
              <li>• Handcrafted 12" & 18" Wood-Style Pizzas</li>
            </ul>
          </div>

          <div>
            <h5 className="font-serif font-semibold text-gray-200 mb-2 uppercase tracking-wider text-[11px]">
              Dining & Order Notes
            </h5>
            <ul className="space-y-1.5 text-gray-400">
              <li>• Thakali Khana: Min 4 packs, 30-50 mins wait</li>
              <li>• Hard Drinks: Quarter, Half & Full Bottle pours</li>
              <li>• 18+ verification strictly enforced on alcoholic drinks</li>
              <li>• All prices displayed in Nepalese Rupees (NPR)</li>
            </ul>
          </div>

          <div>
            <h5 className="font-serif font-semibold text-gray-200 mb-2 uppercase tracking-wider text-[11px]">
              Data Quality & Transparency
            </h5>
            <p className="text-gray-400 leading-relaxed mb-3">
              This digital menu is backed by a verified Google Drive extraction audit. Zero items or prices are fabricated.
            </p>
            <button
              onClick={onOpenAudit}
              className="inline-flex items-center gap-1.5 text-xs text-[#E5A93C] hover:underline cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Review Menu Audit Register</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar & Back to Top */}
        <div className="pt-6 border-t border-gray-800/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} Fireflies Restaurant & Bar (जुनेकिरी). All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141A26] hover:bg-[#1C2436] text-gray-300 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  )
}
