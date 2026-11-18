import React, { useState, useMemo } from 'react'
import { menuData } from './data/menuData.js'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import MenuControls from './components/MenuControls.jsx'
import MenuItemCard from './components/MenuItemCard.jsx'
import HardDrinksMatrix from './components/HardDrinksMatrix.jsx'
import PizzaSection from './components/PizzaSection.jsx'
import AuditModal from './components/AuditModal.jsx'
import Footer from './components/Footer.jsx'
import FloatingActions from './components/FloatingActions.jsx'
import { Sparkles, Utensils, Wine, Clock, AlertTriangle, ShieldCheck } from 'lucide-react'

// Canonical category order from source PDF documents
const FOOD_CATEGORY_ORDER = [
  'Healthy Hub',
  'Spicy Bites',
  'Short Crunches',
  'Veggie Corner',
  'Big Biggy',
  'Thakali Khana Set',
  'More Biggy',
  'Fireflies Pizza Corner',
  'Chips Corner',
  'Do It Yourself Patter',
  'Fireflies Breaki'
]

const BEV_CATEGORY_ORDER = [
  'Hot Beverage',
  'Chilled Corner',
  'Refresher',
  'Chilled Coffee',
  'Beer',
  'Hard Drinks',
  'Smokey Corner'
]

export default function App() {
  const [activeSection, setActiveSection] = useState('food') // 'food' | 'beverage'
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [dietaryFilter, setDietaryFilter] = useState('All')
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false)

  // Current raw item list based on active section
  const currentRawItems = activeSection === 'food' ? menuData.foodItems : menuData.beverageItems
  const currentCategoryOrder = activeSection === 'food' ? FOOD_CATEGORY_ORDER : BEV_CATEGORY_ORDER

  // Calculate live category counts
  const categoryCounts = useMemo(() => {
    const counts = {}
    currentCategoryOrder.forEach(cat => { counts[cat] = 0 })
    currentRawItems.forEach(item => {
      const cat = item['Main Category']
      if (counts[cat] !== undefined) {
        counts[cat]++
      } else {
        counts[cat] = 1
      }
    })
    return counts
  }, [currentRawItems, currentCategoryOrder])

  // Filter items based on search and dietary filters
  const filteredItems = useMemo(() => {
    return currentRawItems.filter(item => {
      // 1. Search Query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim()
        const nameMatch = item['Exact Item Name']?.toLowerCase().includes(query)
        const descMatch = item['Description / Ingredients']?.toLowerCase().includes(query)
        const catMatch = item['Main Category']?.toLowerCase().includes(query)
        const subMatch = item['Subcategory']?.toLowerCase().includes(query)
        const notesMatch = item['Special Notes']?.toLowerCase().includes(query)
        if (!nameMatch && !descMatch && !catMatch && !subMatch && !notesMatch) {
          return false
        }
      }

      // 2. Category selection
      if (selectedCategory !== 'All' && item['Main Category'] !== selectedCategory) {
        return false
      }

      // 3. Dietary / Type filter
      if (dietaryFilter !== 'All') {
        if (activeSection === 'food') {
          const isVeg = item['Dietary Information']?.toLowerCase().includes('vegetarian') ||
                        item['Dietary Information']?.toLowerCase().includes('vegan')
          if (dietaryFilter === 'Veg' && !isVeg) return false
          if (dietaryFilter === 'NonVeg' && isVeg) return false
        } else {
          const isAlcoholic = item['Alcoholic / Type']?.toLowerCase().includes('alcoholic') ||
                              item['Alcoholic / Type']?.toLowerCase().includes('18+')
          if (dietaryFilter === 'Alcoholic' && !isAlcoholic) return false
          if (dietaryFilter === 'NonAlcoholic' && isAlcoholic) return false
        }
      }

      return true
    })
  }, [currentRawItems, searchQuery, selectedCategory, dietaryFilter, activeSection])

  // Group filtered items by category preserving canonical order
  const groupedCategories = useMemo(() => {
    const groups = []
    currentCategoryOrder.forEach(catName => {
      const itemsInCat = filteredItems.filter(item => item['Main Category'] === catName)
      if (itemsInCat.length > 0) {
        groups.push({
          categoryName: catName,
          items: itemsInCat
        })
      }
    })
    return groups
  }, [filteredItems, currentCategoryOrder])

  // Handlers for hero exploration buttons
  const handleExploreFood = () => {
    setActiveSection('food')
    setSelectedCategory('All')
    setSearchQuery('')
    const element = document.getElementById('menu-root')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleExploreDrinks = () => {
    setActiveSection('beverage')
    setSelectedCategory('All')
    setSearchQuery('')
    const element = document.getElementById('menu-root')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0C10] text-[#E2E8F0]">
      
      {/* 1. Header */}
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenAudit={() => setIsAuditModalOpen(true)}
      />

      {/* 2. Hero Section */}
      <Hero
        onExploreFood={handleExploreFood}
        onExploreDrinks={handleExploreDrinks}
      />

      {/* 3. Sticky Menu Controls (Search, Filters, Categories) */}
      <div id="menu-root">
        <MenuControls
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          dietaryFilter={dietaryFilter}
          setDietaryFilter={setDietaryFilter}
          categories={currentCategoryOrder}
          categoryCounts={categoryCounts}
        />
      </div>

      {/* 4. Menu Content Display */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-8">
        
        {/* Results Counter / Active Filter Bar */}
        {(searchQuery || selectedCategory !== 'All' || dietaryFilter !== 'All') && (
          <div className="mb-6 flex items-center justify-between p-3 rounded-xl bg-[#141A24] border border-gray-800 text-xs text-gray-300">
            <span>
              Showing <strong>{filteredItems.length}</strong> items {searchQuery && `matching "${searchQuery}"`}
            </span>
            <button
              onClick={() => {
                setSearchQuery('')
                setSelectedCategory('All')
                setDietaryFilter('All')
              }}
              className="text-[#E5A93C] hover:underline font-medium cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Empty State */}
        {groupedCategories.length === 0 ? (
          <div className="py-20 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#18202F] flex items-center justify-center text-gray-500">
              <Utensils className="w-8 h-8" />
            </div>
            <h3 className="font-serif font-bold text-xl text-white">No menu items found</h3>
            <p className="text-gray-400 text-sm max-w-sm mx-auto">
              We couldn't find any items matching your search or filters. Try adjusting your query or resetting filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('')
                setSelectedCategory('All')
                setDietaryFilter('All')
              }}
              className="px-5 py-2 rounded-xl bg-[#E5A93C] text-[#0A0C10] font-semibold text-xs hover:brightness-110 cursor-pointer"
            >
              Show All Items
            </button>
          </div>
        ) : (
          /* Render Categories in Order */
          <div className="space-y-12">
            {groupedCategories.map(({ categoryName, items }) => (
              <section
                key={categoryName}
                id={`cat-${encodeURIComponent(categoryName)}`}
                className="scroll-mt-40 space-y-4"
              >
                {/* Category Header */}
                <div className="flex items-end justify-between border-b border-gray-800/80 pb-3">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <h2 className="font-serif font-bold text-xl sm:text-2xl text-[#F8FAFC] tracking-wide">
                        {categoryName === 'Do It Yourself Patter' ? 'Do It Yourself Platter' : categoryName}
                      </h2>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-[#18202F] text-amber-300 border border-gray-800 font-medium">
                        {items.length} {items.length === 1 ? 'item' : 'items'}
                      </span>
                    </div>

                    {/* Subtitle / Source info */}
                    <p className="text-xs text-gray-500 mt-0.5">
                      {categoryName === 'Thakali Khana Set' && 'Traditional Nepali Thali Platter'}
                      {categoryName === 'Fireflies Pizza Corner' && 'Artisan Thin-Crust & Party Size Pizzas'}
                      {categoryName === 'Hard Drinks' && 'Domestic & International Spirit Bottle Service'}
                      {categoryName === 'Do It Yourself Patter' && 'Large Sharing Platter with Meats, Veggies & Dips'}
                      {categoryName === 'Smokey Corner' && 'Table Shisha & Premium Tobacco Selection'}
                    </p>
                  </div>
                </div>

                {/* Special Mandatory Notice for Thakali Khana Set */}
                {categoryName === 'Thakali Khana Set' && (
                  <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-amber-950/25 border border-amber-500/30 text-amber-200 text-xs sm:text-sm">
                    <Clock className="w-4 h-4 text-[#E5A93C] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#E5A93C]">Mandatory Kitchen Notice:</strong> Minimum 4 Packs Order & Wait time 30-50 mins for fresh Thakali preparation.
                    </div>
                  </div>
                )}

                {/* Special Category Views */}
                {/* 1. Fireflies Pizza Corner (Custom Layout if not searching) */}
                {categoryName === 'Fireflies Pizza Corner' && !searchQuery ? (
                  <PizzaSection pizzaItems={items} />
                ) : categoryName === 'Hard Drinks' && !searchQuery ? (
                  /* 2. Hard Drinks Matrix (Quarter / Half / Full) */
                  <HardDrinksMatrix hardDrinkItems={items} />
                ) : (
                  /* 3. Standard Responsive Item Grid */
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {items.map((item) => (
                      <MenuItemCard
                        key={item['Item ID']}
                        item={item}
                        isFood={activeSection === 'food'}
                      />
                    ))}
                  </div>
                )}

              </section>
            ))}
          </div>
        )}

      </main>

      {/* 5. Footer */}
      <Footer onOpenAudit={() => setIsAuditModalOpen(true)} />

      {/* 6. Floating Action Buttons (Scroll to Top & Mobile Call) */}
      <FloatingActions />

      {/* 7. Menu Quality Assurance & Transparency Modal */}
      <AuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
        anomalies={menuData.anomalies}
      />

    </div>
  )
}
