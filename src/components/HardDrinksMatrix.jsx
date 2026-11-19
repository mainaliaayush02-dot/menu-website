import React from 'react'
import { Wine, ShieldAlert } from 'lucide-react'

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
      savings: 'Save Rs.700 on Full'
    },
    {
      name: 'Vodka',
      category: 'Pure Distilled Neutral Spirit',
      notes: 'Triple filtered smooth pour',
      quarter: 'Rs.950',
      half: 'Rs.1700',
      full: 'Rs.3200',
      savings: 'Save Rs.600 on Full'
    },
    {
      name: 'Rum',
      category: 'Aged Molasses Spirit',
      notes: 'Classic dark / golden aged rum',
      quarter: 'Rs.950',
      half: 'Rs.1700',
      full: 'Rs.3200',
      savings: 'Save Rs.600 on Full'
    },
    {
      name: 'Gin',
      category: 'Botanical Juniper Spirit',
      notes: 'Crisp aromatic dry gin',
      quarter: 'Rs.950',
      half: 'Rs.1700',
      full: 'Rs.3200',
      savings: 'Save Rs.600 on Full'
    }
  ]

  return (
    <div className="space-y-4">
      {/* 18+ Legal Warning Banner */}
      <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-rose-50 border border-[#B83240]/30 text-[#741C2B] text-xs font-medium">
        <ShieldAlert className="w-4 h-4 flex-shrink-0 text-[#B83240]" />
        <span>
          <strong>18+ Age Notice:</strong> Alcohol consumption is strictly restricted to patrons aged 18 and above. Please drink responsibly.
        </span>
      </div>

      {/* Responsive Table / Cards View */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {spirits.map((spirit) => (
          <div
            key={spirit.name}
            className="card-warm rounded-xl p-4 sm:p-5"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center gap-2">
                  <Wine className="w-4 h-4 text-[#B83240]" />
                  <h3 className="font-serif font-bold text-lg text-[#741C2B]">
                    {spirit.name}
                  </h3>
                </div>
                <p className="text-xs text-[#5A5255] mt-0.5">{spirit.category}</p>
              </div>
              <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#B83240]/10 text-[#B83240] border border-[#B83240]/25 font-bold">
                {spirit.savings}
              </span>
            </div>

            {/* Price Matrix Grid */}
            <div className="grid grid-cols-3 gap-2 bg-[#FAF7F2] p-2.5 rounded-lg border border-[#A58E70]/25 text-center">
              <div className="p-2 rounded bg-white border border-[#A58E70]/20">
                <span className="block text-[11px] text-[#A58E70] font-bold uppercase tracking-wider">
                  Quarter
                </span>
                <span className="block text-[10px] text-[#5A5255] mb-1">~180 ml</span>
                <span className="font-serif font-bold text-sm sm:text-base text-[#741C2B]">
                  {spirit.quarter}
                </span>
              </div>

              <div className="p-2 rounded bg-white border border-[#A58E70]/20">
                <span className="block text-[11px] text-[#A58E70] font-bold uppercase tracking-wider">
                  Half
                </span>
                <span className="block text-[10px] text-[#5A5255] mb-1">~375 ml</span>
                <span className="font-serif font-bold text-sm sm:text-base text-[#741C2B]">
                  {spirit.half}
                </span>
              </div>

              <div className="p-2 rounded bg-[#FFFDF9] border border-[#B83240]/30 shadow-xs">
                <span className="block text-[11px] text-[#B83240] font-bold uppercase tracking-wider">
                  Full Bottle
                </span>
                <span className="block text-[10px] text-[#5A5255] mb-1">~750 ml</span>
                <span className="font-serif font-bold text-sm sm:text-base text-[#741C2B]">
                  {spirit.full}
                </span>
              </div>
            </div>

            <p className="text-[11px] text-[#A58E70] mt-2.5 italic">
              * Served with fresh ice bucket. Soft drinks, tonic water and soda available separately.
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
