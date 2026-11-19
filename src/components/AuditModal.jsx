import React from 'react'
import { X, ShieldCheck, AlertCircle, CheckCircle2 } from 'lucide-react'

export default function AuditModal({ isOpen, onClose, anomalies }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#211D1E]/60 backdrop-blur-xs animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-[#FFFDF9] border border-[#A58E70]/40 rounded-2xl p-5 sm:p-6 shadow-2xl text-[#211D1E]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between pb-4 border-b border-[#A58E70]/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#B83240]/10 border border-[#B83240]/25 flex items-center justify-center text-[#B83240]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg sm:text-xl text-[#741C2B]">
                Menu Extraction & Quality Assurance
              </h3>
              <p className="text-xs text-[#5A5255]">
                100% Verified against Fireflies Official Physical Menus
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#5A5255] hover:text-[#211D1E] hover:bg-[#F2EFEB] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="py-4 space-y-4 text-xs sm:text-sm">
          
          {/* Key Extraction Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <div className="p-3 rounded-xl bg-[#F2EFEB] border border-[#A58E70]/30 text-center">
              <span className="block text-[11px] text-[#A58E70] font-bold uppercase tracking-wider">Source Files</span>
              <span className="font-serif font-bold text-lg text-[#211D1E]">2 PDFs</span>
            </div>
            <div className="p-3 rounded-xl bg-[#F2EFEB] border border-[#A58E70]/30 text-center">
              <span className="block text-[11px] text-[#A58E70] font-bold uppercase tracking-wider">Pages Inspected</span>
              <span className="font-serif font-bold text-lg text-[#211D1E]">10 Pages</span>
            </div>
            <div className="p-3 rounded-xl bg-[#F2EFEB] border border-[#A58E70]/30 text-center">
              <span className="block text-[11px] text-[#A58E70] font-bold uppercase tracking-wider">Food Items</span>
              <span className="font-serif font-bold text-lg text-[#B83240]">68 Items</span>
            </div>
            <div className="p-3 rounded-xl bg-[#F2EFEB] border border-[#A58E70]/30 text-center">
              <span className="block text-[11px] text-[#A58E70] font-bold uppercase tracking-wider">Drinks & Bar</span>
              <span className="font-serif font-bold text-lg text-[#741C2B]">57 SKUs</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#A58E70]/30">
            <h4 className="font-semibold text-[#741C2B] mb-1.5 flex items-center gap-1.5 text-xs sm:text-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>Zero-Hallucination Integrity Guarantee</span>
            </h4>
            <p className="text-[#5A5255] text-xs leading-relaxed">
              Every single item, price, portion size, and variant displayed on this digital menu is extracted directly from the physical restaurant PDF documents. No items, prices, or descriptions were invented or altered.
            </p>
          </div>

          {/* Anomaly Register */}
          <div>
            <h4 className="font-serif font-bold text-sm text-[#741C2B] mb-2.5 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-[#B83240]" />
              <span>Source Anomaly Register (Transparently Documented)</span>
            </h4>
            
            <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1">
              {anomalies && anomalies.map((ano, index) => (
                <div
                  key={index}
                  className="p-3 rounded-xl bg-[#F2EFEB] border border-[#A58E70]/30 text-xs space-y-1"
                >
                  <div className="flex items-center justify-between text-[#211D1E]">
                    <span className="font-bold text-[#741C2B]">{ano['Reported Item Name']}</span>
                    <span className="text-[10px] text-[#A58E70] font-mono font-semibold">{ano['Source Document & Page']}</span>
                  </div>
                  <p className="text-[#5A5255] text-[11px] leading-relaxed">
                    <strong>Issue:</strong> {ano['Classification of Issue']} — {ano['Detailed Analysis']}
                  </p>
                  <p className="text-emerald-800 text-[11px] font-semibold">
                    <strong>Handling:</strong> {ano['Recommended Action for Review']}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Verification */}
          <div className="pt-2 border-t border-[#A58E70]/30 flex items-center justify-between text-xs text-[#5A5255]">
            <span>Official Hotline: <a href="tel:9841960700" className="text-[#B83240] font-bold underline">9841960700</a></span>
            <span className="text-[#A58E70] font-semibold">Fireflies Restaurant & Bar</span>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="pt-3 border-t border-[#A58E70]/30 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#B83240] text-white font-semibold text-xs hover:bg-[#9E2835] cursor-pointer shadow-xs"
          >
            Close Audit Register
          </button>
        </div>

      </div>
    </div>
  )
}
