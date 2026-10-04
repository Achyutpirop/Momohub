import React from 'react';
import { RESTAURANT_INFO, TRUST_BADGES } from '../data/restaurantData';
import { Star, Utensils, Truck, Tag, ChevronDown, Compass, ExternalLink } from 'lucide-react';

interface HeroProps {
  onOpenOrder: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrder }) => {
  const getBadgeIcon = (iconName: string) => {
    switch (iconName) {
      case 'star':
        return <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />;
      case 'utensils':
        return <Utensils className="w-3.5 h-3.5 text-amber-400" />;
      case 'truck':
        return <Truck className="w-3.5 h-3.5 text-amber-400" />;
      case 'tag':
      default:
        return <Tag className="w-3.5 h-3.5 text-amber-400" />;
    }
  };

  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] lg:min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Cinematic dark moody background with subtle radial glow */}
      <div className="absolute inset-0 bg-stone-950 -z-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(180,83,9,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,53,15,0.15),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-stone-950/30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand, Story, CTAs, Trust Badges */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            
            {/* Location context - subtle quiet text */}
            <div className="flex items-center gap-2 text-xs sm:text-sm uppercase tracking-widest text-amber-500/90 font-medium mb-3">
              <span>Horizon Chowk</span>
              <span aria-hidden="true">·</span>
              <span>Butwal, Nepal</span>
              <span aria-hidden="true">·</span>
              <span className="text-emerald-400 font-semibold">Open until 12:00 AM</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white font-display leading-[1.08] mb-4">
              THE MOMO HUB
            </h1>

            {/* Subheading */}
            <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-amber-400 font-display mb-4">
              Where Every Momo Tells a Story.
            </p>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-stone-300 max-w-2xl leading-relaxed mb-8">
              Freshly prepared momos, bold flavors, generous portions, and unbeatable value in the heart of Butwal.
            </p>

            {/* Two Primary CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-8 w-full sm:w-auto">
              <button
                type="button"
                onClick={onOpenOrder}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-amber-950/60 hover:shadow-amber-500/30 transition-all transform active:scale-98 cursor-pointer text-base"
              >
                <Utensils className="w-5 h-5 text-stone-950" />
                <span>ORDER NOW</span>
              </button>

              <a
                href={RESTAURANT_INFO.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-stone-900/90 hover:bg-stone-800 text-stone-100 hover:text-white font-semibold px-6 py-3.5 rounded-xl border border-stone-700/80 hover:border-amber-500/50 transition-all text-base"
              >
                <Compass className="w-5 h-5 text-amber-400" />
                <span>GET DIRECTIONS</span>
                <ExternalLink className="w-3.5 h-3.5 text-stone-400 ml-0.5" />
              </a>
            </div>

            {/* Secondary Action */}
            <button
              type="button"
              onClick={() => handleScrollTo('#menu')}
              className="group inline-flex items-center gap-2 text-sm font-medium text-stone-400 hover:text-amber-400 transition-colors mb-10 cursor-pointer"
            >
              <span>Explore Menu</span>
              <ChevronDown className="w-4 h-4 transform group-hover:translate-y-1 transition-transform" />
            </button>

            {/* Trust Badges - Clean unboxed text metadata with subtle containers */}
            <div className="w-full pt-6 border-t border-stone-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {TRUST_BADGES.map((badge) => (
                <div key={badge.label} className="flex flex-col">
                  <div className="flex items-center gap-1.5 text-stone-200 text-sm font-semibold">
                    {getBadgeIcon(badge.icon)}
                    <span className="font-mono tabular-nums">{badge.label}</span>
                  </div>
                  <span className="text-xs text-stone-400 mt-0.5">{badge.sub}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Hero Momo Showcase with Subtle Steam */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Visual glow backdrop */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-amber-600/20 via-orange-600/10 to-transparent rounded-3xl blur-2xl -z-10" />

            <div className="relative w-full max-w-lg mx-auto group">
              
              {/* Subtle steam elements positioned over the steamer */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none flex gap-8">
                <div className="w-12 h-20 bg-gradient-to-t from-stone-200/40 via-stone-300/15 to-transparent rounded-full blur-md animate-steam-1" />
                <div className="w-14 h-24 bg-gradient-to-t from-stone-200/35 via-stone-300/10 to-transparent rounded-full blur-lg animate-steam-2" />
                <div className="w-10 h-20 bg-gradient-to-t from-stone-200/30 via-stone-300/10 to-transparent rounded-full blur-md animate-steam-3" />
              </div>

              {/* Main Momo Visual Container */}
              <div className="relative rounded-2xl overflow-hidden border border-stone-700/60 shadow-2xl shadow-black/80 aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src="/src/assets/images/hero_steaming_momos_1791081562180.jpg"
                  alt="Authentic freshly steamed Nepalese momos in bamboo basket with spicy red sesame achar"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform group-hover:scale-103 transition-transform duration-700"
                  loading="eager"
                />
                
                {/* Contrast gradient overlay for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />

                {/* Subdued overlay floating card */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-stone-900/90 backdrop-blur-md rounded-xl border border-stone-800 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-amber-400 font-semibold">Specialty of Butwal</p>
                    <p className="text-sm font-bold text-white">Classic Steamed & Jhol Momo</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-stone-400 block">Starting at</span>
                    <span className="text-sm font-bold text-amber-400 font-mono">Rs 160</span>
                  </div>
                </div>
              </div>

              {/* Decorative culinary accent stamp */}
              <div className="hidden sm:flex absolute -top-4 -right-4 bg-amber-500 text-stone-950 text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg border border-amber-300/40 uppercase tracking-wider">
                100% Fresh Daily
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Elegant animated scroll indicator */}
      <div className="hidden md:flex absolute bottom-5 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 text-stone-400 text-xs pointer-events-none">
        <span className="tracking-widest uppercase text-[10px] text-stone-400">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-stone-700 flex items-start justify-center p-1">
          <div className="w-1.5 h-2 bg-amber-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};
