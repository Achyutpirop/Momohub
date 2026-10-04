import React, { useState, useEffect } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { Phone, ArrowUp, ShoppingBag } from 'lucide-react';

interface MobileQuickBarProps {
  onOpenOrder: () => void;
  cartCount?: number;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onOpenOrder, cartCount = 0 }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Back-to-Top Button */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-24 md:bottom-8 right-5 z-40 p-3 rounded-full bg-stone-900/90 hover:bg-amber-500 text-stone-200 hover:text-stone-950 border border-stone-700/80 shadow-2xl transition-all cursor-pointer backdrop-blur-md active:scale-95"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Sticky Call to Order Button fixed at bottom of viewport for Mobile */}
      <aside
        aria-label="Mobile Call to Order bar"
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-stone-950/95 backdrop-blur-xl border-t border-stone-800/90 p-3 shadow-2xl shadow-black"
      >
        <div className="flex items-center gap-2 max-w-md mx-auto">
          {/* Main Primary Sticky "Call to Order" Button targeting 974-2907471 */}
          <a
            href="tel:9742907471"
            className="flex-1 flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-stone-950 font-extrabold text-sm shadow-lg shadow-amber-950/50 active:scale-98 transition-all border border-amber-300/40"
            title="Call The Momo Hub at 974-2907471"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-stone-950 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-stone-950"></span>
            </span>
            <Phone className="w-4 h-4 text-stone-950 fill-stone-950" />
            <span className="tracking-wide">CALL TO ORDER · 974-2907471</span>
          </a>

          {/* Quick Order Cart / Online Drawer Icon Button */}
          <button
            type="button"
            onClick={onOpenOrder}
            className="relative p-3 rounded-xl bg-stone-900 hover:bg-stone-800 border border-stone-800 text-stone-200 active:scale-95 transition-all cursor-pointer shrink-0"
            aria-label="Open order bag"
          >
            <ShoppingBag className="w-5 h-5 text-amber-400" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-amber-500 text-stone-950 text-[10px] font-mono font-bold w-4 h-4 rounded-full flex items-center justify-center shadow">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </aside>
    </>
  );
};
