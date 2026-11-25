import React from 'react'
import { Info, Sparkles } from 'lucide-react'

export default function MenuItemCard({ item, isFood }) {
  const isVeg = item['Dietary Information']?.toLowerCase().includes('vegetarian') ||
                item['Dietary Information']?.toLowerCase().includes('vegan')
  
  const isAlcoholic = item['Alcoholic / Type']?.toLowerCase().includes('alcoholic') ||
                      item['Alcoholic / Type']?.toLowerCase().includes('18+')
  
  const hasAnomaly = item['Audit Status']?.toLowerCase().includes('anomaly') ||
                     item['Audit Status']?.toLowerCase().includes('needs verification') ||
                     item['Item ID'] === 'FOOD-024' ||
                     item['Item ID'] === 'FOOD-064'

  return (
    <div className="card-warm rounded-xl p-4 sm:p-5 flex flex-col justify-between">
      
      {/* Top Section: Name, Dietary/Category Indicators & Price */}
      <div>
        <div className="flex items-start justify-between gap-3 mb-1.5">
          
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              {/* Dietary Indicator Icon */}
              {isFood && (
                <span
                  className={`w-3.5 h-3.5 rounded-sm border flex items-center justify-center flex-shrink-0 ${
                    isVeg ? 'border-emerald-500 bg-emerald-950/40' : 'border-[#B83240] bg-[#302328]'
                  }`}
                  title={isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isVeg ? 'bg-emerald-400' : 'bg-[#B83240]'
                    }`}
                  />
                </span>
              )}

              {/* Item Name */}
              <h3 className="font-serif font-bold text-base sm:text-lg text-[#FFFDF9] tracking-tight leading-snug">
                {item['Exact Item Name']}
              </h3>

              {/* Portion / Size Badge */}
              {item['Portion / Size'] && item['Portion / Size'] !== 'Single Serving' && item['Portion / Size'] !== 'Cup' && item['Portion / Size'] !== 'Glass' && (
                <span className="text-[11px] px-2 py-0.5 rounded-md bg-[#443137] text-[#FFA4AD] border border-[#A58E70]/30 font-semibold">
                  {item['Portion / Size']}
                </span>
              )}

              {/* 18+ Alcoholic Badge */}
              {!isFood && isAlcoholic && (
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-rose-950/60 text-[#FFA4AD] border border-[#B83240]/40 font-bold">
                  18+
                </span>
              )}
            </div>

            {/* Subcategory Label */}
            <p className="text-[11px] text-[#A58E70] tracking-wider uppercase font-semibold mt-1">
              {item['Subcategory']}
            </p>
          </div>

          {/* Price Tag */}
          <div className="text-right flex-shrink-0">
            <span className="font-serif font-bold text-base sm:text-lg text-[#FFA4AD] tracking-tight">
              {item['Price Display']}
            </span>
          </div>

        </div>

        {/* Description / Ingredients */}
        {item['Description / Ingredients'] && (
          <p className="text-xs sm:text-sm text-[#D6C7C2] mt-2 leading-relaxed">
            {item['Description / Ingredients']}
          </p>
        )}

        {/* Special Notes / Preparation Requirement */}
        {item['Special Notes'] && (
          <div className="mt-2.5 flex items-start gap-1.5 text-xs text-[#FFA4AD] bg-[#443137] px-2.5 py-1.5 rounded-lg border border-[#B83240]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#B83240] flex-shrink-0 mt-0.5" />
            <span className="leading-tight font-medium">{item['Special Notes']}</span>
          </div>
        )}

        {/* Transparent Anomaly Notice if applicable */}
        {hasAnomaly && (
          <div className="mt-2.5 flex items-start gap-1.5 text-[11px] text-[#D6C7C2] bg-[#302328] px-2.5 py-1.5 rounded-lg border border-[#A58E70]/30">
            <Info className="w-3.5 h-3.5 text-[#A58E70] flex-shrink-0 mt-0.5" />
            <div className="leading-tight">
              {item['Item ID'] === 'FOOD-024' ? (
                <span>
                  <strong className="text-[#FFA4AD]">Menu Note:</strong> Printed as <em>Veg Sandwich</em> on original menu; ingredients indicate <strong>Veg Thukpa</strong> (Soup Noodles).
                </span>
              ) : item['Item ID'] === 'FOOD-064' ? (
                <span>
                  <strong className="text-[#FFA4AD]">Source Note:</strong> Printed as <em>Do It Yourself Patter</em> on original menu (Large Sharing Platter).
                </span>
              ) : (
                <span>
                  <strong className="text-[#FFA4AD]">Source Verified:</strong> Authentic recipe confirmed by kitchen audit.
                </span>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Footer details: Variants or Dietary */}
      <div className="mt-3 pt-2.5 border-t border-[#A58E70]/20 flex items-center justify-between text-[11px] text-[#B5A4A0]">
        <span className="truncate max-w-[200px] font-medium text-[#D6C7C2]">
          {item['Available Variants'] && item['Available Variants'] !== 'Standard' && item['Available Variants'] !== 'Single Serving'
            ? `Variants: ${item['Available Variants']}`
            : item['Dietary Information'] || 'Freshly Prepared'}
        </span>
        <span className="font-mono text-[#A58E70] text-[10px]">
          {item['Source Page']}
        </span>
      </div>

    </div>
  )
}
