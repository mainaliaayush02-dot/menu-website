import React, { useRef } from 'react'
import { Search, X, Utensils, Wine } from 'lucide-react'

export default function MenuControls({
  activeSection,
  setActiveSection,
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  dietaryFilter,
  setDietaryFilter,
  categories,
  categoryCounts
}) {
  const scrollContainerRef = useRef(null)

  const handleCategoryClick = (category) => {
    setSelectedCategory(category)
    const element = document.getElementById(`cat-${encodeURIComponent(category)}`)
    if (element) {
      const yOffset = -90
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <div className="sticky top-0 z-40 bg-[#FFFDF9]/95 backdrop-blur-md border-b border-[#A58E70]/30 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-3 pb-2.5 space-y-3">
        
        {/* Row 1: Primary Section Toggle & Instant Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          
          {/* Main Food vs Drinks Switcher */}
          <div className="inline-flex p-1 rounded-xl bg-[#F2EFEB] border border-[#A58E70]/30 flex-shrink-0">
            <button
              onClick={() => {
                setActiveSection('food')
                setSelectedCategory('All')
              }}
              className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeSection === 'food'
                  ? 'bg-[#B83240] text-white shadow-xs'
                  : 'text-[#5A5255] hover:text-[#211D1E]'
              }`}
            >
              <Utensils className="w-3.5 h-3.5" />
              <span>Food Menu</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                activeSection === 'food' ? 'bg-white/20 text-white' : 'bg-[#EAE4DC] text-[#741C2B]'
              }`}>
                68
              </span>
            </button>

            <button
              onClick={() => {
                setActiveSection('beverage')
                setSelectedCategory('All')
              }}
              className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeSection === 'beverage'
                  ? 'bg-[#B83240] text-white shadow-xs'
                  : 'text-[#5A5255] hover:text-[#211D1E]'
              }`}
            >
              <Wine className="w-3.5 h-3.5" />
              <span>Drinks & Bar</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                activeSection === 'beverage' ? 'bg-white/20 text-white' : 'bg-[#EAE4DC] text-[#741C2B]'
              }`}>
                57
              </span>
            </button>
          </div>

          {/* Instant Search Bar */}
          <div className="relative flex-1 sm:max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="w-4 h-4 text-[#A58E70]" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search in ${activeSection === 'food' ? '68 Food' : '57 Drink'} items...`}
              className="w-full pl-9 pr-9 py-2 rounded-xl bg-[#F2EFEB] border border-[#A58E70]/40 focus:border-[#B83240] focus:ring-1 focus:ring-[#B83240]/30 text-xs sm:text-sm text-[#211D1E] placeholder-[#5A5255]/70 transition-all outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#5A5255] hover:text-[#211D1E] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

        </div>

        {/* Row 2: Dietary Filters & Category Carousel */}
        <div className="flex items-center gap-2 pt-0.5 pb-0.5">
          
          {/* Quick Dietary Filter Pill Toggle */}
          <div className="flex-shrink-0 flex items-center gap-1 border-r border-[#A58E70]/30 pr-2">
            {activeSection === 'food' ? (
              <>
                <button
                  onClick={() => setDietaryFilter('All')}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-colors cursor-pointer ${
                    dietaryFilter === 'All'
                      ? 'bg-[#741C2B] text-white'
                      : 'bg-[#F2EFEB] text-[#5A5255] hover:text-[#211D1E] border border-[#A58E70]/30'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setDietaryFilter('Veg')}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-colors flex items-center gap-1 cursor-pointer ${
                    dietaryFilter === 'Veg'
                      ? 'bg-emerald-700 text-white'
                      : 'bg-[#F2EFEB] text-emerald-800 hover:text-emerald-900 border border-emerald-300'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Veg
                </button>
                <button
                  onClick={() => setDietaryFilter('NonVeg')}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-colors flex items-center gap-1 cursor-pointer ${
                    dietaryFilter === 'NonVeg'
                      ? 'bg-[#B83240] text-white'
                      : 'bg-[#F2EFEB] text-[#B83240] hover:text-[#9E2835] border border-[#B83240]/30'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B83240]"></span>
                  Non-Veg
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setDietaryFilter('All')}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-colors cursor-pointer ${
                    dietaryFilter === 'All'
                      ? 'bg-[#741C2B] text-white'
                      : 'bg-[#F2EFEB] text-[#5A5255] hover:text-[#211D1E] border border-[#A58E70]/30'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setDietaryFilter('Alcoholic')}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-colors cursor-pointer ${
                    dietaryFilter === 'Alcoholic'
                      ? 'bg-[#741C2B] text-white'
                      : 'bg-[#F2EFEB] text-[#741C2B] hover:text-[#211D1E] border border-[#741C2B]/30'
                  }`}
                >
                  Bar (18+)
                </button>
                <button
                  onClick={() => setDietaryFilter('NonAlcoholic')}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-colors cursor-pointer ${
                    dietaryFilter === 'NonAlcoholic'
                      ? 'bg-emerald-700 text-white'
                      : 'bg-[#F2EFEB] text-emerald-800 hover:text-emerald-900 border border-emerald-300'
                  }`}
                >
                  Non-Alc
                </button>
              </>
            )}
          </div>

          {/* Horizontally scrollable category pills */}
          <div
            ref={scrollContainerRef}
            className="flex items-center gap-1.5 overflow-x-auto no-scrollbar scroll-smooth pl-1"
          >
            <button
              onClick={() => handleCategoryClick('All')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors flex-shrink-0 cursor-pointer ${
                selectedCategory === 'All'
                  ? 'bg-[#B83240] text-white'
                  : 'bg-[#F2EFEB] text-[#5A5255] hover:text-[#211D1E] border border-[#A58E70]/30'
              }`}
            >
              All Categories
            </button>
            {categories.map((cat) => {
              const count = categoryCounts[cat] || 0
              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryClick(cat)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors flex-shrink-0 flex items-center gap-1.5 cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#B83240] text-white'
                      : 'bg-[#F2EFEB] text-[#211D1E] hover:bg-[#EAE4DC] border border-[#A58E70]/30'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] px-1 py-0.2 rounded-full font-bold ${
                    selectedCategory === cat ? 'bg-white/20 text-white' : 'bg-[#EAE4DC] text-[#741C2B]'
                  }`}>
                    {count}
                  </span>
                </button>
              )
            })}
          </div>

        </div>

      </div>
    </div>
  )
}
