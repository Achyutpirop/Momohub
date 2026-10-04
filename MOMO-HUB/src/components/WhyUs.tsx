import React from 'react';
import { WHY_US_FEATURES } from '../data/restaurantData';
import { ScrollReveal } from './ScrollReveal';
import { Sparkles, Flame, Coins, Truck, HeartHandshake, MapPin } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-amber-400" />;
      case 'Flame':
        return <Flame className="w-6 h-6 text-orange-500" />;
      case 'Coins':
        return <Coins className="w-6 h-6 text-amber-400" />;
      case 'Truck':
        return <Truck className="w-6 h-6 text-amber-400" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-rose-400" />;
      case 'MapPin':
      default:
        return <MapPin className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section className="py-20 bg-stone-950 relative border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs uppercase tracking-widest text-amber-500 font-semibold mb-2">
              The Butwal Favorite
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
              WHY PEOPLE LOVE THE MOMO HUB
            </h2>
            <p className="text-stone-400 text-sm sm:text-base mt-3">
              Honest Himalayan taste, passionate craftsmanship, and heartfelt hospitality.
            </p>
          </div>
        </ScrollReveal>

        {/* 6 Feature Cards with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_US_FEATURES.map((feature, idx) => (
            <ScrollReveal key={feature.id} delayMs={idx * 90} className="h-full">
              <div className="h-full p-7 rounded-2xl bg-stone-900/60 border border-stone-800/80 hover:border-amber-500/50 hover:bg-stone-900/90 transition-all duration-300 group flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-stone-800/80 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-amber-950/40 transition-all duration-300">
                    {getIcon(feature.iconName)}
                  </div>
                  <h3 className="text-lg font-bold text-white font-display mb-2 group-hover:text-amber-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-stone-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-800/60 flex items-center justify-between text-xs text-stone-400">
                  <span className="font-mono text-stone-400">0{idx + 1}</span>
                  <span className="text-amber-500/80 group-hover:translate-x-1 transition-transform">
                    Horizon Chowk Standard →
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
