import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ExternalLink, Phone, Utensils, Sparkles, ShoppingBag } from 'lucide-react';

interface OrderSectionProps {
  onOpenOrder: () => void;
}

export const OrderSection: React.FC<OrderSectionProps> = ({ onOpenOrder }) => {
  return (
    <section className="py-24 bg-stone-950 relative overflow-hidden border-t border-stone-800">
      {/* Dramatic atmospheric backdrop */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/90 to-stone-950" />
        <img
          src="/src/assets/images/hero_steaming_momos_1791081562180.jpg"
          alt="The Momo Hub fresh steaming momos"
          referrerPolicy="no-referrer"
          loading="lazy"
          className="w-full h-full object-cover opacity-15 filter blur-xs"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Subtle kicker */}
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Fast Service · Hot Delivery</span>
        </div>

        {/* Large Conversion Headline */}
        <h2 className="text-4xl sm:text-6xl font-extrabold text-white font-display tracking-tight mb-4">
          HUNGRY YET?
        </h2>

        {/* Subtitle */}
        <p className="text-lg sm:text-2xl text-stone-300 font-medium max-w-2xl mx-auto mb-10">
          Your favorite momos are just a few clicks away.
        </p>

        {/* Action Buttons Hub */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 max-w-xl mx-auto mb-12">
          
          {/* External MenuMakchha Direct Link */}
          <a
            href={RESTAURANT_INFO.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-extrabold text-base shadow-xl shadow-amber-950/70 hover:shadow-amber-500/40 transition-all transform active:scale-98 cursor-pointer"
          >
            <Utensils className="w-5 h-5 text-stone-950" />
            <span>ORDER ONLINE (MENUMAKCHHA)</span>
            <ExternalLink className="w-4 h-4 text-stone-950 ml-1" />
          </a>

          {/* Quick interactive order tray modal trigger */}
          <button
            type="button"
            onClick={onOpenOrder}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-stone-900/90 hover:bg-stone-800 text-amber-400 hover:text-white font-bold text-base border border-stone-700/80 transition-all cursor-pointer"
          >
            <ShoppingBag className="w-5 h-5 text-amber-400" />
            <span>QUICK ORDER BUILDER</span>
          </button>
        </div>

        {/* Phone Call Alternative */}
        <div className="pt-8 border-t border-stone-800/80 inline-flex flex-col sm:flex-row items-center gap-3 text-stone-400 text-sm">
          <span>Prefer ordering by phone?</span>
          <a
            href={RESTAURANT_INFO.phoneCallable}
            className="inline-flex items-center gap-2 text-white font-bold text-base font-mono hover:text-amber-400 transition-colors bg-stone-900/90 px-4 py-2 rounded-lg border border-stone-800"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span>CALL TO ORDER: {RESTAURANT_INFO.phone}</span>
          </a>
        </div>

        {/* Price & Delivery reassurance */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-stone-400">
          <span>✓ Free delivery on eligible Butwal orders</span>
          <span aria-hidden="true">·</span>
          <span>✓ Price Range: Rs 1–500 per person</span>
          <span aria-hidden="true">·</span>
          <span>✓ Open until 12:00 AM daily</span>
        </div>

      </div>
    </section>
  );
};
