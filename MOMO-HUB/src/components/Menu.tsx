import React, { useState, useMemo } from 'react';
import { MENU_ITEMS, MENU_CATEGORIES, MenuItem, RESTAURANT_INFO } from '../data/restaurantData';
import { MenuCard } from './MenuCard';
import { ScrollReveal } from './ScrollReveal';
import { ExternalLink, Filter, Sparkles } from 'lucide-react';

interface MenuProps {
  onAddToCart: (item: MenuItem) => void;
}

export const Menu: React.FC<MenuProps> = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [isFading, setIsFading] = useState<boolean>(false);

  // Filter helper matching categories accurately
  const filterItemByCategory = (item: MenuItem, category: string): boolean => {
    if (category === 'ALL') return true;

    switch (category) {
      case 'STEAM MOMO':
        return (
          item.category === 'STEAM MOMO' ||
          item.name.toLowerCase().includes('steam') ||
          item.id.includes('steam')
        );
      case 'JHOL MOMO':
        return (
          item.category === 'JHOL MOMO' ||
          item.name.toLowerCase().includes('jhol') ||
          item.id.includes('jhol')
        );
      case 'KOTHEY MOMO':
        return (
          item.category === 'KOTHEY MOMO' ||
          item.name.toLowerCase().includes('kothey') ||
          item.id.includes('kothey')
        );
      case 'FRIED MOMO':
        return (
          item.category === 'FRIED MOMO' ||
          item.name.toLowerCase().includes('fried') ||
          item.id.includes('fried')
        );
      case 'CHICKEN MOMO':
        return item.meatType === 'Chicken' || item.category === 'CHICKEN MOMO';
      case 'BUFF MOMO':
        return item.meatType === 'Buff' || item.category === 'BUFF MOMO';
      case 'CHICKEN MOMO PLATTER':
        return (
          item.category === 'CHICKEN MOMO PLATTER' ||
          item.id === 'chicken-platter' ||
          item.name.toLowerCase().includes('platter')
        );
      case 'SPECIAL MOMO':
        return (
          item.category === 'SPECIAL MOMO' ||
          item.id.includes('special') ||
          item.isPopular === true
        );
      default:
        return item.category === category;
    }
  };

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => filterItemByCategory(item, activeCategory));
  }, [activeCategory]);

  // Compute item count per category for intuitive UX
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    MENU_CATEGORIES.forEach((cat) => {
      counts[cat] = MENU_ITEMS.filter((item) => filterItemByCategory(item, cat)).length;
    });
    return counts;
  }, []);

  const handleCategorySelect = (category: string) => {
    if (category === activeCategory) return;
    setIsFading(true);
    setTimeout(() => {
      setActiveCategory(category);
      setIsFading(false);
    }, 120);
  };

  return (
    <section id="menu" className="py-20 bg-stone-950 relative border-t border-stone-800/80">
      {/* Background glow styling */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal>
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-500 font-semibold mb-2">
              <Filter className="w-3.5 h-3.5" />
              <span>Horizon Chowk Kitchen Selection</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display mb-3">
              CRAVE-WORTHY MOMOS
            </h2>
            <p className="text-base sm:text-lg text-stone-400">
              Made fresh. Served hot. Loved by Butwal.
            </p>
          </div>
        </ScrollReveal>

        {/* Category Filter Tabs - Interactive Filtering with Smooth Transitions */}
        <ScrollReveal delayMs={100}>
          <div className="relative mb-10">
            <div
              role="tablist"
              aria-label="Momo Menu Categories"
              className="flex items-center gap-2 overflow-x-auto pb-3 pt-1 scrollbar-none sm:justify-center no-scrollbar"
            >
              {MENU_CATEGORIES.map((category) => {
                const isActive = activeCategory === category;
                const count = categoryCounts[category] || 0;
                return (
                  <button
                    key={category}
                    role="tab"
                    aria-selected={isActive}
                    type="button"
                    onClick={() => handleCategorySelect(category)}
                    className={`relative px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                      isActive
                        ? 'bg-amber-500 text-stone-950 shadow-lg shadow-amber-500/25 font-bold scale-[1.02]'
                        : 'bg-stone-900/80 hover:bg-stone-800 text-stone-300 border border-stone-800/80 hover:border-stone-700'
                    }`}
                  >
                    <span>{category}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono font-bold ${
                        isActive
                          ? 'bg-stone-950 text-amber-400'
                          : 'bg-stone-800 text-stone-400'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Menu Items Grid with Smooth Animated Transition between filter states */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 min-h-[380px] transition-opacity duration-150 ${
            isFading ? 'opacity-30' : 'opacity-100'
          }`}
        >
          {filteredItems.map((item, index) => (
            <div
              key={`${activeCategory}-${item.id}`}
              className="animate-filter-card"
              style={{
                animationDelay: `${Math.min(index * 40, 240)}ms`,
              }}
            >
              <MenuCard item={item} onAddToCart={onAddToCart} />
            </div>
          ))}
        </div>

        {/* Fallback empty state if filter has no items */}
        {filteredItems.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-stone-400 text-sm">No momos found in this category.</p>
            <button
              type="button"
              onClick={() => setActiveCategory('ALL')}
              className="mt-3 px-4 py-2 rounded-xl bg-amber-500 text-stone-950 text-xs font-bold"
            >
              Reset to All Momos
            </button>
          </div>
        )}

        {/* Callout & Link to Full MenuMakchha Platform */}
        <ScrollReveal delayMs={150}>
          <div className="mt-14 pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-6 bg-stone-900/40 p-6 rounded-2xl border border-stone-800/80">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 mt-0.5">
                <Sparkles className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-display">Looking for our full digital menu?</h3>
                <p className="text-xs sm:text-sm text-stone-400 mt-1">
                  Browse complete drinks, noodles, combos, and live kitchen availability on MenuMakchha.
                </p>
              </div>
            </div>

            <a
              href={RESTAURANT_INFO.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm shadow-md transition-all shrink-0 cursor-pointer"
            >
              <span>VIEW FULL MENU</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
