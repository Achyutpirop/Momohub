import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { Clock, MapPin, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-stone-900/40 relative border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Authentic Text Content */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="text-xs uppercase tracking-widest text-amber-500 font-semibold mb-2">
              Our Identity
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display mb-6">
              MORE THAN JUST MOMOS.
            </h2>

            <p className="text-base sm:text-lg text-stone-300 leading-relaxed mb-6">
              THE MOMO HUB is a momo restaurant in Butwal focused on serving delicious, affordable and satisfying food. From classic steamed momos to flavorful jhol and kothey momos, every dish is prepared to deliver great taste and generous portions.
            </p>

            {/* Factual commitments */}
            <div className="space-y-3.5 mb-8 w-full">
              <div className="flex items-start gap-3 text-sm text-stone-300">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span>Hand-crafted daily fillings using local ingredients and authentic Himalayan spices.</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-stone-300">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span>Distinct dipping achars brewed from roasted sesame, ripe tomatoes, and timur pepper.</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-stone-300">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span>Warm dining atmosphere at Horizon Chowk, welcoming friends, students, and families.</span>
              </div>
            </div>

            {/* Quick Fact cards */}
            <div className="grid grid-cols-2 gap-4 w-full pt-4 border-t border-stone-800">
              <div className="p-3.5 bg-stone-950/70 rounded-xl border border-stone-800">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold mb-1">
                  <Clock className="w-4 h-4" />
                  <span>Late Night Dining</span>
                </div>
                <p className="text-xs text-stone-300 font-medium">Open until 12:00 AM daily</p>
              </div>

              <div className="p-3.5 bg-stone-950/70 rounded-xl border border-stone-800">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold mb-1">
                  <MapPin className="w-4 h-4" />
                  <span>Central Butwal</span>
                </div>
                <p className="text-xs text-stone-300 font-medium">Horizon Chowk, Lumbini</p>
              </div>
            </div>

          </div>

          {/* Right Column: Restaurant Ambiance Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-stone-700/60 shadow-2xl shadow-black/80 aspect-[16/11] group">
              <img
                src="/src/assets/images/restaurant_ambiance_1791081614792.jpg"
                alt="The Momo Hub interior dining hall at Horizon Chowk Butwal"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover transform group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 p-4 bg-stone-950/85 backdrop-blur-md rounded-xl border border-stone-800 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-white font-display">The Momo Hub Dining Hall</p>
                  <p className="text-xs text-stone-400">Horizon Chowk, Butwal, Nepal</p>
                </div>
                <span className="text-xs font-mono text-amber-400 bg-stone-900 px-2.5 py-1 rounded border border-stone-800">
                  {RESTAURANT_INFO.phone}
                </span>
              </div>
            </div>

            {/* Corner Decorative frame element */}
            <div className="absolute -bottom-3 -right-3 w-28 h-28 border-r-2 border-b-2 border-amber-500/40 rounded-br-2xl pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
};
