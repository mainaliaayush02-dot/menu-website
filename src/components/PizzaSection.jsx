import React from 'react'
import { Pizza, Sparkles, PlusCircle } from 'lucide-react'

export default function PizzaSection({ pizzaItems }) {
  // Group pizzas by flavor to display 12" and 18" side-by-side
  const pizzas = [
    {
      name: 'Vegetarian Pizza',
      desc: 'Tomato sauce base, mozzarella cheese, and fresh seasonal vegetables.',
      p12: 'Rs.690',
      p18: 'Rs.990',
      dietary: 'Vegetarian'
    },
    {
      name: 'Chicken Lovers Pizza',
      desc: 'House marinara, shredded mozzarella, and spiced tender chicken chunks.',
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
      <div className="rounded-xl p-4 sm:p-5 bg-[#F2EFEB] border border-[#A58E70]/40 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-[#B83240]/10 border border-[#B83240]/25 flex items-center justify-center">
              <Pizza className="w-5 h-5 text-[#B83240]" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-base sm:text-lg text-[#741C2B]">
                Do It Yourself Pizza (Custom Creation)
              </h4>
              <p className="text-xs text-[#B83240] font-semibold">
                Choose any 3 mains for free!
              </p>
            </div>
          </div>
          
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B83240] text-xs text-white font-semibold self-start sm:self-auto shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            Chef Custom Special
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2.5 border-t border-[#A58E70]/30 text-xs">
          <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-[#A58E70]/25">
            <PlusCircle className="w-4 h-4 text-emerald-700 flex-shrink-0" />
            <span className="text-[#211D1E]">
              <strong>Add-on Each Item:</strong> <span className="text-[#741C2B] font-bold">Rs.75</span>
            </span>
          </div>
          <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-[#A58E70]/25">
            <PlusCircle className="w-4 h-4 text-[#B83240] flex-shrink-0" />
            <span className="text-[#211D1E]">
              <strong>Add-on Extra Cheese:</strong> <span className="text-[#741C2B] font-bold">Rs.50</span>
            </span>
          </div>
        </div>
      </div>

      {/* Standard Pizza Flavors with 12" & 18" Side-by-Side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {pizzas.map((pizza) => (
          <div
            key={pizza.name}
            className="card-warm rounded-xl p-4 sm:p-5 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-3.5 h-3.5 rounded-sm border flex items-center justify-center flex-shrink-0 ${
                      pizza.dietary === 'Vegetarian' ? 'border-emerald-700 bg-emerald-50' : 'border-[#B83240] bg-rose-50'
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        pizza.dietary === 'Vegetarian' ? 'bg-emerald-700' : 'bg-[#B83240]'
                      }`}
                    />
                  </span>
                  <h4 className="font-serif font-bold text-base sm:text-lg text-[#211D1E]">
                    {pizza.name}
                  </h4>
                </div>
              </div>

              <p className="text-xs text-[#5A5255] leading-relaxed mb-4">
                {pizza.desc}
              </p>
            </div>

            {/* Sizes & Pricing Columns */}
            <div className="grid grid-cols-2 gap-2.5 bg-[#FAF7F2] p-2.5 rounded-lg border border-[#A58E70]/25 text-center">
              <div className="p-2 rounded bg-white border border-[#A58E70]/20">
                <span className="block text-[11px] text-[#A58E70] font-bold uppercase tracking-wider">
                  12" Medium
                </span>
                <span className="font-serif font-bold text-base text-[#741C2B] mt-0.5">
                  {pizza.p12}
                </span>
              </div>

              <div className="p-2 rounded bg-[#FFFDF9] border border-[#B83240]/25">
                <span className="block text-[11px] text-[#B83240] font-bold uppercase tracking-wider">
                  18" Party Size
                </span>
                <span className="font-serif font-bold text-base text-[#741C2B] mt-0.5">
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
