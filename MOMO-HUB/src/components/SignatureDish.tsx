import React from 'react';
import { Sparkles, Utensils, Clock, Wallet, ShoppingBag } from 'lucide-react';

interface SignatureDishProps {
  onOpenOrder: () => void;
}

export const SignatureDish: React.FC<SignatureDishProps> = ({ onOpenOrder }) => {
  const pillars = [
    {
      icon: Sparkles,
      title: 'Fresh ingredients',
      desc: 'Premium poultry and authentic Himalayan hand-ground aromatics.',
    },
    {
      icon: Utensils,
      title: 'Generous portions',
      desc: 'Abundant servings designed for hearty appetites and sharing.',
    },
    {
      icon: Clock,
      title: 'Fast service',
      desc: 'Hot, steaming dishes brought swiftly to your table or doorstep.',
    },
    {
      icon: Wallet,
      title: 'Affordable prices',
      desc: 'Exceptional gourmet quality starting at pocket-friendly Butwal rates.',
    },
  ];

  return (
    <section className="py-20 bg-stone-900/60 relative overflow-hidden border-t border-stone-800">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Big Visual Presentation */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-stone-700/70 shadow-2xl shadow-black/80 aspect-[4/3] group">
              <img
                src="/src/assets/images/platter_chicken_momo_1791081578028.jpg"
                alt="The Signature Chicken Momo Platter at The Momo Hub Butwal"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />

              {/* Floating pill badge */}
              <div className="absolute bottom-5 left-5 right-5 p-4 bg-stone-950/85 backdrop-blur-md rounded-xl border border-stone-800 flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold block">Chef's Recommendation</span>
                  <span className="text-sm font-bold text-white">Triple Style: Steam · Kothey · Fried</span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-stone-400 block">Only</span>
                  <span className="text-base font-extrabold text-amber-400 font-mono">Rs 360</span>
                </div>
              </div>
            </div>

            {/* Accent badge */}
            <div className="absolute -top-3 -left-3 bg-red-600 text-white font-bold text-xs uppercase px-3 py-1.5 rounded-lg shadow-lg tracking-wider">
              Signature Dish
            </div>
          </div>

          {/* Right Column: Split Content */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="text-xs uppercase tracking-widest text-amber-500 font-semibold mb-2">
              The Star of Butwal
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display mb-3">
              THE CHICKEN MOMO PLATTER
            </h2>

            <p className="text-xl sm:text-2xl font-semibold text-amber-400/90 font-display mb-4">
              More momos. More flavor. More reasons to come back.
            </p>

            <p className="text-stone-300 text-base leading-relaxed mb-8">
              Why settle for just one cooking style when you can feast on all three? Our signature platter combines tender steamed momos, crispy pan-seared kothey, and golden crunchy fried momos served around bowls of house-made sesame-tomato achar and chili timur dip.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="p-4 rounded-xl bg-stone-950/60 border border-stone-800/80 flex flex-col"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <Icon className="w-4 h-4 text-amber-400 shrink-0" />
                      <h4 className="text-sm font-bold text-stone-100">{pillar.title}</h4>
                    </div>
                    <p className="text-xs text-stone-400 leading-normal">{pillar.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Order Now CTA */}
            <button
              type="button"
              onClick={onOpenOrder}
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-amber-950/60 transition-all transform active:scale-98 cursor-pointer text-base"
            >
              <ShoppingBag className="w-5 h-5 text-stone-950" />
              <span>ORDER NOW</span>
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};
