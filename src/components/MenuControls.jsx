import React, { useRef } from 'react'
import { Search, X, Utensils, Wine, Filter } from 'lucide-react'

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
      const yOffset = -150
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <div className="sticky top-18 sm:top-20 z-40 bg-[#0C0F15]/95 backdrop-blur-md border-b border-gray-800/80 shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-3 pb-2 space-y-3">
        
        {/* Row 1: Section Switcher & Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          
          {/* Main Food vs Drinks Switcher */}
          <div className="inline-flex p-1 rounded-xl bg-[#141A24] border border-gray-800 flex-shrink-0">
            <button
              onClick={() => {
                setActiveSection('food')
                setSelectedCategory('All')
              }}
              className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeSection === 'food'
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#E5A93C] text-[#0A0C10] shadow-sm'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Utensils className="w-3.5 h-3.5" />
              <span>Food Menu</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                activeSection === 'food' ? 'bg-black/20 text-[#0A0C10]' : 'bg-gray-800 text-gray-400'
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
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#E5A93C] text-[#0A0C10] shadow-sm'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Wine className="w-3.5 h-3.5" />
              <span>Drinks & Bar</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                activeSection === 'beverage' ? 'bg-black/20 text-[#0A0C10]' : 'bg-gray-800 text-gray-400'
              }`}>
                57
              </span>
            </button>
          </div>

          {/* Instant Search Bar */}
          <div className="relative flex-1 sm:max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="w-4 h-4 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search in ${activeSection === 'food' ? '68 Food' : '57 Drink'} items...`}
              className="w-full pl-9 pr-9 py-2 rounded-xl bg-[#141A24] border border-gray-800 focus:border-[#E5A93C]/60 focus:ring-1 focus:ring-[#E5A93C]/40 text-xs sm:text-sm text-gray-200 placeholder-gray-500 transition-all outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-200"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

        </div>

        {/* Row 2: Dietary Filters & Category Carousel */}
        <div className="flex items-center gap-2 pt-1 pb-1">
          
          {/* Quick Dietary Filter Pill Toggle */}
          <div className="flex-shrink-0 flex items-center gap-1 border-r border-gray-800 pr-2">
            {activeSection === 'food' ? (
              <>
                <button
                  onClick={() => setDietaryFilter('All')}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-colors ${
                    dietaryFilter === 'All'
                      ? 'bg-amber-500/20 text-[#E5A93C] border border-[#E5A93C]/40'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setDietaryFilter('Veg')}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-colors flex items-center gap-1 ${
                    dietaryFilter === 'Veg'
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Veg
                </button>
                <button
                  onClick={() => setDietaryFilter('NonVeg')}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-colors flex items-center gap-1 ${
                    dietaryFilter === 'NonVeg'
                      ? 'bg-rose-500/20 text-rose-400 border border-rose-500/40'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                  Non-Veg
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setDietaryFilter('All')}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-colors ${
                    dietaryFilter === 'All'
                      ? 'bg-amber-500/20 text-[#E5A93C] border border-[#E5A93C]/40'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setDietaryFilter('Alcoholic')}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-colors ${
                    dietaryFilter === 'Alcoholic'
                      ? 'bg-amber-500/20 text-[#E5A93C] border border-[#E5A93C]/40'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  Bar (18+)
                </button>
                <button
                  onClick={() => setDietaryFilter('NonAlcoholic')}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-colors ${
                    dietaryFilter === 'NonAlcoholic'
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                      : 'text-gray-400 hover:text-gray-200'
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
              className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-colors flex-shrink-0 ${
                selectedCategory === 'All'
                  ? 'bg-[#E5A93C] text-[#0A0C10] font-semibold'
                  : 'bg-[#141A24] text-gray-400 hover:text-white border border-gray-800'
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
                  className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-colors flex-shrink-0 flex items-center gap-1.5 ${
                    selectedCategory === cat
                      ? 'bg-[#E5A93C] text-[#0A0C10] font-semibold'
                      : 'bg-[#141A24] text-gray-300 hover:text-white border border-gray-800'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] px-1 py-0.2 rounded-full ${
                    selectedCategory === cat ? 'bg-black/20 text-[#0A0C10]' : 'bg-gray-800 text-gray-400'
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
