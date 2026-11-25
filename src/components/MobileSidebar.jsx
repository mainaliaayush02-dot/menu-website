import React, { useState, useEffect } from 'react'
import { X, Utensils, Wine, Home, Phone, ChevronDown, ChevronRight, MessageSquare, Sparkles } from 'lucide-react'

// Canonical mapping for user-friendly category labels
const CATEGORY_DISPLAY_NAMES = {
  'Fireflies Pizza Corner': 'Pizza Corner',
  'Do It Yourself Patter': 'DIY Platter',
  'Hot Beverage': 'Hot Beverages',
  'Refresher': 'Refreshers'
}

export default function MobileSidebar({
  isOpen,
  onClose,
  activeSection,
  setActiveSection,
  selectedCategory,
  onSelectCategory,
  foodCategories = [],
  beverageCategories = [],
  categoryCounts = {}
}) {
  // Expandable state for Food and Drinks categories
  const [foodExpanded, setFoodExpanded] = useState(true)
  const [drinksExpanded, setDrinksExpanded] = useState(true)

  // Prevent background scrolling when sidebar is open
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

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    onClose()
  }

  const handleSectionSwitch = (section) => {
    setActiveSection(section)
    onSelectCategory(section, 'All')
    // Scroll to menu root
    const menuRoot = document.getElementById('menu-root')
    if (menuRoot) {
      menuRoot.scrollIntoView({ behavior: 'smooth' })
    }
    onClose()
  }

  const handleCategoryClick = (section, category) => {
    onSelectCategory(section, category)
    onClose()
  }

  return (
    <>
      {/* Background Overlay Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/65 backdrop-blur-xs transition-opacity duration-300 ease-in-out ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-out Sidebar Drawer */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-[84vw] max-w-xs sm:max-w-sm bg-[#241C20] border-r border-[#A58E70]/30 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-label="Mobile Navigation Sidebar"
      >
        {/* Top Header of Sidebar */}
        <div className="p-4 sm:p-5 bg-[#302328] border-b border-[#A58E70]/30 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full border border-[#A58E70]/40 overflow-hidden bg-white p-0.5 shadow-sm flex-shrink-0">
              <img
                src="/logo.jpg"
                alt="Fireflies Logo"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif font-bold text-base text-[#FFFDF9] tracking-wide">
                  Fireflies
                </span>
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-[#B83240]/25 text-[#FFA4AD] border border-[#B83240]/40 font-semibold font-devanagari">
                  जुनकिरी
                </span>
              </div>
              <p className="font-serif italic text-xs text-[#D6C7C2]">
                Light in the Dark
              </p>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#38282D] text-[#D6C7C2] hover:text-[#FFFDF9] hover:bg-[#443137] border border-[#A58E70]/30 transition-colors cursor-pointer"
            aria-label="Close navigation sidebar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Navigation Body */}
        <div className="flex-1 overflow-y-auto px-3.5 py-4 space-y-5">
          
          {/* Main Navigation Section */}
          <div className="space-y-1">
            <span className="px-3 text-[10px] font-bold uppercase tracking-wider text-[#A58E70]">
              Navigation
            </span>

            {/* Home Link */}
            <button
              onClick={handleHomeClick}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-[#D6C7C2] hover:text-[#FFFDF9] hover:bg-[#302328] transition-colors text-left cursor-pointer"
            >
              <Home className="w-4 h-4 text-[#B83240]" />
              <span>Home & Header</span>
            </button>

            {/* Primary Section Switchers */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                onClick={() => handleSectionSwitch('food')}
                className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeSection === 'food'
                    ? 'bg-[#B83240] text-white shadow-xs'
                    : 'bg-[#302328] text-[#D6C7C2] hover:bg-[#38282D] border border-[#A58E70]/25'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Utensils className="w-4 h-4" />
                  <span>Food Menu</span>
                </div>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                  activeSection === 'food' ? 'bg-white/20 text-white' : 'bg-[#38282D] text-[#D6C7C2]'
                }`}>
                  68
                </span>
              </button>

              <button
                onClick={() => handleSectionSwitch('beverage')}
                className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeSection === 'beverage'
                    ? 'bg-[#B83240] text-white shadow-xs'
                    : 'bg-[#302328] text-[#D6C7C2] hover:bg-[#38282D] border border-[#A58E70]/25'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Wine className="w-4 h-4" />
                  <span>Drinks & Bar</span>
                </div>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                  activeSection === 'beverage' ? 'bg-white/20 text-white' : 'bg-[#38282D] text-[#D6C7C2]'
                }`}>
                  57
                </span>
              </button>
            </div>
          </div>

          {/* Food Categories Accordion */}
          <div className="space-y-1.5 pt-2 border-t border-[#A58E70]/20">
            <button
              onClick={() => setFoodExpanded(!foodExpanded)}
              className="w-full flex items-center justify-between px-3 py-2 rounded-xl bg-[#302328]/60 hover:bg-[#302328] transition-colors text-left cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <Utensils className="w-4 h-4 text-[#B83240]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#FFFDF9]">
                  Food Categories
                </span>
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-[#38282D] text-[#D6C7C2] border border-[#A58E70]/20 font-semibold">
                  11
                </span>
              </div>
              {foodExpanded ? (
                <ChevronDown className="w-4 h-4 text-[#A58E70]" />
              ) : (
                <ChevronRight className="w-4 h-4 text-[#A58E70]" />
              )}
            </button>

            {foodExpanded && (
              <div className="space-y-1 pl-2 pr-1 pt-1">
                {/* View All Food */}
                <button
                  onClick={() => handleCategoryClick('food', 'All')}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-colors text-left cursor-pointer ${
                    activeSection === 'food' && selectedCategory === 'All'
                      ? 'bg-[#B83240] text-white font-semibold'
                      : 'text-[#D6C7C2] hover:bg-[#38282D] hover:text-[#FFFDF9]'
                  }`}
                >
                  <span>All Food Items</span>
                  <span className="text-[10px] opacity-75">68</span>
                </button>

                {foodCategories.map((category) => {
                  const count = categoryCounts[category] || 0
                  const displayName = CATEGORY_DISPLAY_NAMES[category] || category
                  const isActive = activeSection === 'food' && selectedCategory === category

                  return (
                    <button
                      key={category}
                      onClick={() => handleCategoryClick('food', category)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-colors text-left cursor-pointer ${
                        isActive
                          ? 'bg-[#443137] border-l-3 border-[#B83240] text-[#FFFDF9] font-semibold'
                          : 'text-[#D6C7C2] hover:bg-[#302328] hover:text-[#FFFDF9]'
                      }`}
                    >
                      <span className="truncate pr-2">{displayName}</span>
                      <span className={`text-[10px] px-1.5 py-0.2 rounded-full flex-shrink-0 ${
                        isActive
                          ? 'bg-[#B83240] text-white font-bold'
                          : 'bg-[#38282D] text-[#B5A4A0]'
                      }`}>
                        {count}
                      </span>
                    </button>
                  )
                })}
              </div>
            )}
          </div>

          {/* Drinks Categories Accordion */}
          <div className="space-y-1.5 pt-2 border-t border-[#A58E70]/20">
            <button
              onClick={() => setDrinksExpanded(!drinksExpanded)}
              className="w-full flex items-center justify-between px-3 py-2 rounded-xl bg-[#302328]/60 hover:bg-[#302328] transition-colors text-left cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <Wine className="w-4 h-4 text-[#B83240]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#FFFDF9]">
                  Drinks & Bar Categories
                </span>
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-[#38282D] text-[#D6C7C2] border border-[#A58E70]/20 font-semibold">
                  7
                </span>
              </div>
              {drinksExpanded ? (
                <ChevronDown className="w-4 h-4 text-[#A58E70]" />
              ) : (
                <ChevronRight className="w-4 h-4 text-[#A58E70]" />
              )}
            </button>

            {drinksExpanded && (
              <div className="space-y-1 pl-2 pr-1 pt-1">
                {/* View All Drinks */}
                <button
                  onClick={() => handleCategoryClick('beverage', 'All')}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-colors text-left cursor-pointer ${
                    activeSection === 'beverage' && selectedCategory === 'All'
                      ? 'bg-[#B83240] text-white font-semibold'
                      : 'text-[#D6C7C2] hover:bg-[#38282D] hover:text-[#FFFDF9]'
                  }`}
                >
                  <span>All Drinks & Bar</span>
                  <span className="text-[10px] opacity-75">57</span>
                </button>

                {beverageCategories.map((category) => {
                  const count = categoryCounts[category] || 0
                  const displayName = CATEGORY_DISPLAY_NAMES[category] || category
                  const isActive = activeSection === 'beverage' && selectedCategory === category

                  return (
                    <button
                      key={category}
                      onClick={() => handleCategoryClick('beverage', category)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-colors text-left cursor-pointer ${
                        isActive
                          ? 'bg-[#443137] border-l-3 border-[#B83240] text-[#FFFDF9] font-semibold'
                          : 'text-[#D6C7C2] hover:bg-[#302328] hover:text-[#FFFDF9]'
                      }`}
                    >
                      <span className="truncate pr-2">{displayName}</span>
                      <span className={`text-[10px] px-1.5 py-0.2 rounded-full flex-shrink-0 ${
                        isActive
                          ? 'bg-[#B83240] text-white font-bold'
                          : 'bg-[#38282D] text-[#B5A4A0]'
                      }`}>
                        {count}
                      </span>
                    </button>
                  )
                })}
              </div>
            )}
          </div>

        </div>

        {/* Bottom Drawer Footer */}
        <div className="p-4 bg-[#302328] border-t border-[#A58E70]/30 space-y-2.5">
          <div className="flex items-center justify-between gap-2">
            <a
              href="tel:9841960700"
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-[#38282D] hover:bg-[#443137] border border-[#A58E70]/30 text-xs font-bold text-[#FFA4AD] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#B83240]" />
              <span>9841960700</span>
            </a>

            <a
              href="https://wa.me/9779841960700?text=Hello%20Fireflies%20Restaurant%20%26%20Bar!%20I%20visited%20your%20digital%20menu%20and%20would%20like%20to%20know%20more."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/40 text-[#25D366] text-xs font-bold transition-colors"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="text-center text-[10px] text-[#B5A4A0]">
            Fireflies Restaurant & Bar • Kathmandu, Nepal
          </div>
        </div>

      </aside>
    </>
  )
}
