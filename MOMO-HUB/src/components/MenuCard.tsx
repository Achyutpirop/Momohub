import React, { useState } from 'react';
import { MenuItem } from '../data/restaurantData';
import { Plus, Check, Flame } from 'lucide-react';

interface MenuCardProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem) => void;
}

export const MenuCard: React.FC<MenuCardProps> = ({ item, onAddToCart }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(item);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  return (
    <div className="group flex flex-col bg-stone-900/70 border border-stone-800/80 rounded-2xl overflow-hidden hover:border-amber-500/40 hover:shadow-xl hover:shadow-black/50 transition-all duration-300">
      {/* Product Image Slot with Fallback */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-950">
        <img
          src={item.image}
          alt={item.name}
          referrerPolicy="no-referrer"
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Fallback styling during load or if missing */}
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-stone-900 to-stone-950 text-stone-600 text-xs">
            <span>Loading Momo Hub specialty...</span>
          </div>
        )}

        {/* Contrast media scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />

        {/* Top badges (Non-veg marker & Spiciness) */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          {/* Minimalist Veg / Non-Veg Indicator */}
          <div className="flex items-center gap-1.5 bg-stone-950/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-stone-800 text-[11px] font-medium">
            <span
              className={`w-2 h-2 rounded-full ${
                item.isNonVeg ? 'bg-red-500 ring-2 ring-red-500/20' : 'bg-emerald-500 ring-2 ring-emerald-500/20'
              }`}
            />
            <span className={item.isNonVeg ? 'text-red-300' : 'text-emerald-300'}>
              {item.isNonVeg ? item.meatType || 'Non-Veg' : 'Veg'}
            </span>
          </div>

          {/* Spicy tag if medium/hot */}
          {item.spiciness && item.spiciness !== 'Mild' && (
            <div className="flex items-center gap-1 bg-stone-950/80 backdrop-blur-md px-2 py-1 rounded-md border border-stone-800 text-[11px] text-amber-300 font-medium">
              <Flame className="w-3 h-3 text-orange-500 fill-orange-500" />
              <span>{item.spiciness}</span>
            </div>
          )}
        </div>

        {/* Bottom category subtle tag */}
        <div className="absolute bottom-2.5 left-3 text-[11px] font-mono tracking-wider uppercase text-amber-400 font-semibold drop-shadow">
          {item.category}
        </div>
      </div>

      {/* Card Content Area */}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-400 transition-colors font-display line-clamp-1">
            {item.name}
          </h3>
          <span className="text-base font-extrabold text-amber-400 font-mono tabular-nums shrink-0">
            {item.formattedPrice}
          </span>
        </div>

        <p className="text-xs sm:text-sm text-stone-400 leading-relaxed mb-5 line-clamp-2 flex-1">
          {item.description}
        </p>

        {/* Action Button */}
        <button
          type="button"
          onClick={handleAdd}
          className={`w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
            justAdded
              ? 'bg-emerald-600 text-white'
              : 'bg-stone-800 hover:bg-amber-500 text-stone-200 hover:text-stone-950 border border-stone-700/60 hover:border-amber-400'
          }`}
        >
          {justAdded ? (
            <>
              <Check className="w-4 h-4" />
              <span>Added to Order</span>
            </>
          ) : (
            <>
              <Plus className="w-4 h-4" />
              <span>Add to Order</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
