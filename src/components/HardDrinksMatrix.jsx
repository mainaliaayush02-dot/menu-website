import React from 'react'
import { Wine, ShieldAlert, Sparkles } from 'lucide-react'

export default function HardDrinksMatrix({ hardDrinkItems }) {
  // Group the 12 items into 4 spirits: Whiskey, Vodka, Rum, Gin
  const spirits = [
    {
      name: 'Whiskey',
      category: 'Distilled Grain Spirit',
      notes: 'Domestic & Premium selection',
      quarter: 'Rs.1050',
      half: 'Rs.1900',
      full: 'Rs.3500',
      savings: 'Save Rs.700 on Full Bottle'
    },
    {
      name: 'Vodka',
      category: 'Pure Distilled Neutral Spirit',
      notes: 'Triple filtered smooth pour',
      quarter: 'Rs.950',
      half: 'Rs.1700',
      full: 'Rs.3200',
      savings: 'Save Rs.600 on Full Bottle'
    },
    {
      name: 'Rum',
      category: 'Aged Molasses Spirit',
      notes: 'Classic dark / golden aged rum',
      quarter: 'Rs.950',
      half: 'Rs.1700',
      full: 'Rs.3200',
      savings: 'Save Rs.600 on Full Bottle'
    },
    {
      name: 'Gin',
      category: 'Botanical Juniper Spirit',
      notes: 'Crisp aromatic dry gin',
      quarter: 'Rs.950',
      half: 'Rs.1700',
      full: 'Rs.3200',
      savings: 'Save Rs.600 on Full Bottle'
    }
  ]

  return (
    <div className="space-y-4">
      {/* 18+ Legal Warning Banner */}
      <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-rose-950/20 border border-rose-500/30 text-rose-300 text-xs font-medium">
        <ShieldAlert className="w-4 h-4 flex-shrink-0 text-rose-400" />
        <span>
          <strong>18+ Notice:</strong> Alcohol consumption is strictly restricted to patrons aged 18 and above. Please drink responsibly.
        </span>
      </div>

      {/* Responsive Table / Cards View */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {spirits.map((spirit) => (
          <div
            key={spirit.name}
            className="glass-card rounded-xl p-4 sm:p-5 border border-gray-800/80 hover:border-[#E5A93C]/40 transition-all"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center gap-2">
                  <Wine className="w-4 h-4 text-[#E5A93C]" />
                  <h3 className="font-serif font-bold text-lg text-[#F8FAFC]">
                    {spirit.name}
                  </h3>
                </div>
                <p className="text-xs text-gray-400 mt-0.5">{spirit.category}</p>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-medium">
                {spirit.savings}
              </span>
            </div>

            {/* Price Matrix Grid */}
            <div className="grid grid-cols-3 gap-2 bg-[#121722]/80 p-2.5 rounded-lg border border-gray-800/60 text-center">
              <div className="p-1.5 rounded bg-[#18202F]/60">
                <span className="block text-[11px] text-gray-400 font-medium uppercase tracking-wider">
                  Quarter
                </span>
                <span className="block text-[10px] text-gray-500 mb-1">~180 ml</span>
                <span className="font-serif font-bold text-sm sm:text-base text-[#E5A93C]">
                  {spirit.quarter}
                </span>
              </div>

              <div className="p-1.5 rounded bg-[#18202F]/60">
                <span className="block text-[11px] text-gray-400 font-medium uppercase tracking-wider">
                  Half
                </span>
                <span className="block text-[10px] text-gray-500 mb-1">~375 ml</span>
                <span className="font-serif font-bold text-sm sm:text-base text-[#E5A93C]">
                  {spirit.half}
                </span>
              </div>

              <div className="p-1.5 rounded bg-[#1E2638] border border-[#E5A93C]/20">
                <span className="block text-[11px] text-amber-300 font-semibold uppercase tracking-wider">
                  Full Bottle
                </span>
                <span className="block text-[10px] text-gray-400 mb-1">~750 ml</span>
                <span className="font-serif font-bold text-sm sm:text-base text-[#E5A93C]">
                  {spirit.full}
                </span>
              </div>
            </div>

            <p className="text-[11px] text-gray-500 mt-2.5 italic">
              * Served with complimentary ice bucket. Soft drinks & tonic available separately.
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
