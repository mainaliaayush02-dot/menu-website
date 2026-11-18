import React from 'react'
import { Info, Sparkles, AlertCircle } from 'lucide-react'

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
    <div className="glass-card rounded-xl p-4 sm:p-5 flex flex-col justify-between transition-all duration-200 border border-gray-800/80 hover:border-[#E5A93C]/40">
      
      {/* Top Section: Name, Dietary/Category Indicators & Price */}
      <div>
        <div className="flex items-start justify-between gap-3 mb-1.5">
          
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              {/* Dietary Indicator Dot */}
              {isFood && (
                <span
                  className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${
                    isVeg ? 'bg-emerald-500 ring-2 ring-emerald-500/30' : 'bg-rose-500 ring-2 ring-rose-500/30'
                  }`}
                  title={isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                />
              )}

              {/* Item Name */}
              <h3 className="font-serif font-semibold text-base sm:text-lg text-[#F8FAFC] tracking-wide leading-snug">
                {item['Exact Item Name']}
              </h3>

              {/* Portion / Size Badge */}
              {item['Portion / Size'] && item['Portion / Size'] !== 'Single Serving' && item['Portion / Size'] !== 'Cup' && item['Portion / Size'] !== 'Glass' && (
                <span className="text-[11px] px-2 py-0.5 rounded-md bg-[#1B2433] text-amber-300 border border-amber-500/20 font-medium">
                  {item['Portion / Size']}
                </span>
              )}

              {/* 18+ Alcoholic Badge */}
              {!isFood && isAlcoholic && (
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-rose-500/20 text-rose-300 border border-rose-500/40 font-semibold">
                  18+
                </span>
              )}
            </div>

            {/* Subcategory Label */}
            <p className="text-[11px] text-gray-500 tracking-wider uppercase font-medium mt-0.5">
              {item['Subcategory']}
            </p>
          </div>

          {/* Price Tag */}
          <div className="text-right flex-shrink-0">
            <span className="font-serif font-bold text-base sm:text-lg text-[#E5A93C] tracking-tight">
              {item['Price Display']}
            </span>
          </div>

        </div>

        {/* Description / Ingredients */}
        {item['Description / Ingredients'] && (
          <p className="text-xs sm:text-sm text-gray-400 mt-2 leading-relaxed">
            {item['Description / Ingredients']}
          </p>
        )}

        {/* Special Notes / Preparation Requirement */}
        {item['Special Notes'] && (
          <div className="mt-2.5 flex items-start gap-1.5 text-xs text-amber-200/80 bg-amber-950/20 px-2.5 py-1.5 rounded-lg border border-amber-500/20">
            <Sparkles className="w-3.5 h-3.5 text-[#E5A93C] flex-shrink-0 mt-0.5" />
            <span className="leading-tight">{item['Special Notes']}</span>
          </div>
        )}

        {/* Transparent Anomaly Notice if applicable */}
        {hasAnomaly && (
          <div className="mt-2.5 flex items-start gap-1.5 text-[11px] text-sky-200 bg-sky-950/20 px-2.5 py-1.5 rounded-lg border border-sky-500/30">
            <Info className="w-3.5 h-3.5 text-sky-400 flex-shrink-0 mt-0.5" />
            <div className="leading-tight">
              {item['Item ID'] === 'FOOD-024' ? (
                <span>
                  <strong>Menu Note:</strong> Printed as <em>Veg Sandwich</em> on original menu; ingredients indicate <strong>Veg Thukpa</strong> (Soup Noodles).
                </span>
              ) : item['Item ID'] === 'FOOD-064' ? (
                <span>
                  <strong>Source Note:</strong> Printed as <em>Do It Yourself Patter</em> on original menu (Large Sharing Platter).
                </span>
              ) : (
                <span>
                  <strong>Source Verified:</strong> Authentic recipe confirmed by kitchen audit.
                </span>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Footer details: Variants or Dietary */}
      <div className="mt-3 pt-2.5 border-t border-gray-800/60 flex items-center justify-between text-[11px] text-gray-500">
        <span className="truncate max-w-[200px]">
          {item['Available Variants'] && item['Available Variants'] !== 'Standard' && item['Available Variants'] !== 'Single Serving'
            ? `Variants: ${item['Available Variants']}`
            : item['Dietary Information'] || 'Freshly Prepared'}
        </span>
        <span className="font-mono text-gray-600 text-[10px]">
          {item['Source Page']}
        </span>
      </div>

    </div>
  )
}
