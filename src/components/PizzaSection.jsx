import React from 'react'
import { Pizza, Sparkles, PlusCircle } from 'lucide-react'

export default function PizzaSection({ pizzaItems }) {
  // Group pizzas by flavor to display 12" and 18" side-by-side
  const pizzas = [
    {
      name: 'Vegetarian Pizza',
      desc: 'Tomato sauce base, mozzarella cheese, and fresh garden vegetables.',
      p12: 'Rs.690',
      p18: 'Rs.990',
      dietary: 'Vegetarian'
    },
    {
      name: 'Chicken Lovers Pizza',
      desc: 'House marinara, shredded mozzarella, and seasoned tender chicken chunks.',
      p12: 'Rs.890',
      p18: 'Rs.1140',
      dietary: 'Non-Vegetarian'
    },
    {
      name: 'Meat Lovers Pizza',
      desc: 'Loaded feast of assorted seasoned meats, sausage, and rich mozzarella.',
      p12: 'Rs.990',
      p18: 'Rs.1240',
      dietary: 'Non-Vegetarian'
    },
    {
      name: 'Mixed Supreme Pizza',
      desc: 'Deluxe combination of seasoned meats, bell peppers, onions, mushrooms & cheese.',
      p12: 'Rs.990',
      p18: 'Rs.1240',
      dietary: 'Non-Vegetarian'
    }
  ]

  return (
    <div className="space-y-4">
      
      {/* DIY Pizza Customizer Box */}
      <div className="rounded-xl p-4 sm:p-5 bg-gradient-to-r from-[#18202F] to-[#141A26] border border-[#E5A93C]/40 gold-glow-subtle">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#E5A93C]/15 border border-[#E5A93C]/30 flex items-center justify-center">
              <Pizza className="w-4 h-4 text-[#E5A93C]" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-base text-[#F8FAFC]">
                Do It Yourself Pizza (Custom Creation)
              </h4>
              <p className="text-xs text-amber-300 font-medium">
                Choose any 3 mains for free!
              </p>
            </div>
          </div>
          
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#E5A93C]/10 text-xs text-[#E5A93C] font-semibold border border-[#E5A93C]/30 self-start sm:self-auto">
            <Sparkles className="w-3.5 h-3.5" />
            Chef Custom Special
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-gray-800/80 text-xs">
          <div className="flex items-center gap-2 p-2 rounded-lg bg-[#0E121A]">
            <PlusCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span className="text-gray-300">
              <strong>Add-on Each Item:</strong> <span className="text-[#E5A93C] font-semibold">Rs.75</span>
            </span>
          </div>
          <div className="flex items-center gap-2 p-2 rounded-lg bg-[#0E121A]">
            <PlusCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <span className="text-gray-300">
              <strong>Add-on Extra Cheese:</strong> <span className="text-[#E5A93C] font-semibold">Rs.50</span>
            </span>
          </div>
        </div>
      </div>

      {/* Standard Pizza Flavors with 12" & 18" Side-by-Side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {pizzas.map((pizza) => (
          <div
            key={pizza.name}
            className="glass-card rounded-xl p-4 sm:p-5 border border-gray-800/80 hover:border-[#E5A93C]/40 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full flex-shrink-0 ${
                      pizza.dietary === 'Vegetarian' ? 'bg-emerald-500' : 'bg-rose-500'
                    }`}
                  />
                  <h4 className="font-serif font-bold text-base text-[#F8FAFC]">
                    {pizza.name}
                  </h4>
                </div>
              </div>

              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                {pizza.desc}
              </p>
            </div>

            {/* Sizes & Pricing Columns */}
            <div className="grid grid-cols-2 gap-2 bg-[#121722]/80 p-2 rounded-lg border border-gray-800/60 text-center">
              <div className="p-1.5 rounded bg-[#18202F]/60">
                <span className="block text-[11px] text-gray-400 font-medium uppercase tracking-wider">
                  12" Medium
                </span>
                <span className="font-serif font-bold text-base text-[#E5A93C]">
                  {pizza.p12}
                </span>
              </div>

              <div className="p-1.5 rounded bg-[#1E2638] border border-[#E5A93C]/20">
                <span className="block text-[11px] text-amber-300 font-semibold uppercase tracking-wider">
                  18" Party Size
                </span>
                <span className="font-serif font-bold text-base text-[#E5A93C]">
                  {pizza.p18}
                </span>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  )
}
