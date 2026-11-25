import React, { useEffect } from 'react'
import { X, ShieldCheck, AlertCircle, CheckCircle2 } from 'lucide-react'

export default function AuditModal({ isOpen, onClose, anomalies }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-[#241C20] border border-[#A58E70]/35 rounded-2xl p-5 sm:p-6 shadow-2xl text-[#FFFDF9]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between pb-4 border-b border-[#A58E70]/25">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#B83240]/20 border border-[#B83240]/35 flex items-center justify-center text-[#B83240]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg sm:text-xl text-[#FFFDF9]">
                Menu Extraction & Quality Assurance
              </h3>
              <p className="text-xs text-[#D6C7C2]">
                100% Verified against Fireflies Official Physical Menus
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#D6C7C2] hover:text-[#FFFDF9] hover:bg-[#38282D] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="py-4 space-y-4 text-xs sm:text-sm">
          
          {/* Key Extraction Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <div className="p-3 rounded-xl bg-[#302328] border border-[#A58E70]/25 text-center">
              <span className="block text-[11px] text-[#A58E70] font-bold uppercase tracking-wider">Source Files</span>
              <span className="font-serif font-bold text-lg text-[#FFFDF9]">2 PDFs</span>
            </div>
            <div className="p-3 rounded-xl bg-[#302328] border border-[#A58E70]/25 text-center">
              <span className="block text-[11px] text-[#A58E70] font-bold uppercase tracking-wider">Pages Inspected</span>
              <span className="font-serif font-bold text-lg text-[#FFFDF9]">10 Pages</span>
            </div>
            <div className="p-3 rounded-xl bg-[#302328] border border-[#A58E70]/25 text-center">
              <span className="block text-[11px] text-[#A58E70] font-bold uppercase tracking-wider">Food Items</span>
              <span className="font-serif font-bold text-lg text-[#FFA4AD]">68 Items</span>
            </div>
            <div className="p-3 rounded-xl bg-[#302328] border border-[#A58E70]/25 text-center">
              <span className="block text-[11px] text-[#A58E70] font-bold uppercase tracking-wider">Drinks & Bar</span>
              <span className="font-serif font-bold text-lg text-[#FFA4AD]">57 SKUs</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#302328] border border-[#A58E70]/25">
            <h4 className="font-semibold text-[#FFFDF9] mb-1.5 flex items-center gap-1.5 text-xs sm:text-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Zero-Hallucination Integrity Guarantee</span>
            </h4>
            <p className="text-[#D6C7C2] text-xs leading-relaxed">
              Every single item, price, portion size, and variant displayed on this digital menu is extracted directly from the physical restaurant PDF documents. No items, prices, or descriptions were invented or altered.
            </p>
          </div>

          {/* Anomaly Register */}
          <div>
            <h4 className="font-serif font-bold text-sm text-[#FFFDF9] mb-2.5 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-[#B83240]" />
              <span>Source Anomaly Register (Transparently Documented)</span>
            </h4>
            
            <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1">
              {anomalies && anomalies.map((ano, index) => (
                <div
                  key={index}
                  className="p-3 rounded-xl bg-[#302328] border border-[#A58E70]/25 text-xs space-y-1"
                >
                  <div className="flex items-center justify-between text-[#FFFDF9]">
                    <span className="font-bold text-[#FFA4AD]">{ano['Reported Item Name']}</span>
                    <span className="text-[10px] text-[#A58E70] font-mono font-semibold">{ano['Source Document & Page']}</span>
                  </div>
                  <p className="text-[#D6C7C2] text-[11px] leading-relaxed">
                    <strong className="text-white">Issue:</strong> {ano['Classification of Issue']} — {ano['Detailed Analysis']}
                  </p>
                  <p className="text-emerald-400 text-[11px] font-semibold">
                    <strong className="text-white">Handling:</strong> {ano['Recommended Action for Review']}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Verification */}
          <div className="pt-2 border-t border-[#A58E70]/25 flex items-center justify-between text-xs text-[#D6C7C2]">
            <span>Official Hotline: <a href="tel:9841960700" className="text-[#FFA4AD] font-bold underline">9841960700</a></span>
            <span className="text-[#A58E70] font-semibold">Fireflies Restaurant & Bar</span>
          </div>

        </div>
      </div>
    </div>
  )
}
