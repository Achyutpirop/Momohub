import React, { useState } from 'react';
import { CUSTOMER_REVIEWS, RESTAURANT_INFO } from '../data/restaurantData';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle } from 'lucide-react';

export const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % CUSTOMER_REVIEWS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? CUSTOMER_REVIEWS.length - 1 : prev - 1));
  };

  return (
    <section id="reviews" className="py-20 bg-stone-900/60 relative border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Prominent 3.8/5 rating */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-widest text-amber-500 font-semibold mb-2">
            Verified Experiences
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display mb-6">
            WHAT OUR CUSTOMERS SAY
          </h2>

          {/* Prominent Rating Card */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-stone-950/80 px-6 py-3.5 rounded-2xl border border-stone-800 shadow-xl">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < 4 ? 'text-amber-400 fill-amber-400' : 'text-amber-400/40 fill-amber-400/40'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2 text-stone-200 text-sm font-semibold">
              <span className="text-xl font-extrabold text-white font-mono">{RESTAURANT_INFO.rating}</span>
              <span className="text-stone-400 font-normal">/ 5</span>
              <span aria-hidden="true" className="text-stone-700">·</span>
              <span className="text-amber-400 font-mono font-bold">{RESTAURANT_INFO.reviewCount}</span>
              <span className="text-stone-400 font-normal">Google Reviews</span>
            </div>
          </div>
        </div>

        {/* Testimonials Carousel & Cards */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Main active review spotlight card */}
          <div className="relative p-8 sm:p-12 rounded-3xl bg-stone-950/90 border border-stone-800/90 shadow-2xl overflow-hidden min-h-[260px] flex flex-col justify-between">
            {/* Background quote emblem */}
            <Quote className="absolute top-6 right-6 w-20 h-20 text-stone-900 pointer-events-none -z-0" />

            <div className="relative z-10">
              <div className="flex items-center gap-1 mb-5">
                {[...Array(CUSTOMER_REVIEWS[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              <blockquote className="text-lg sm:text-xl text-stone-200 font-normal leading-relaxed italic mb-8">
                "{CUSTOMER_REVIEWS[currentIndex].comment}"
              </blockquote>
            </div>

            <div className="relative z-10 flex items-center justify-between pt-6 border-t border-stone-800/80">
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-base font-bold text-white font-display">
                    {CUSTOMER_REVIEWS[currentIndex].author}
                  </h4>
                  <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Verified Customer</span>
                  </span>
                </div>
                <p className="text-xs text-stone-400 mt-0.5">
                  {CUSTOMER_REVIEWS[currentIndex].dateText}
                </p>
              </div>

              {/* Carousel navigation controls */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="p-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-800 transition-colors cursor-pointer"
                  aria-label="Previous customer review"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="p-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-800 transition-colors cursor-pointer"
                  aria-label="Next customer review"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Indicator pagination pills */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {CUSTOMER_REVIEWS.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 transition-all rounded-full cursor-pointer ${
                  currentIndex === idx ? 'w-8 bg-amber-500' : 'w-2 bg-stone-700 hover:bg-stone-600'
                }`}
                aria-label={`Jump to review ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
