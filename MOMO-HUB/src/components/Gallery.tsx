import React, { useState, useEffect, useCallback } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/restaurantData';
import { X, ChevronLeft, ChevronRight, Maximize2, Camera } from 'lucide-react';

const CATEGORIES = ['ALL', 'MOMOS', 'FOOD & DRINK', 'VIBE', 'RESTAURANT'] as const;

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const filteredItems = activeCategory === 'ALL'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const handleOpenLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleCloseLightbox = () => {
    setSelectedImageIndex(null);
  };

  const handleNext = useCallback(() => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) => ((prev! + 1) % filteredItems.length));
  }, [selectedImageIndex, filteredItems.length]);

  const handlePrev = useCallback(() => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) => (prev! === 0 ? filteredItems.length - 1 : prev! - 1));
  }, [selectedImageIndex, filteredItems.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') handleCloseLightbox();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, handleNext, handlePrev]);

  return (
    <section id="gallery" className="py-20 bg-stone-950 relative border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-amber-500 font-semibold mb-2">
            <Camera className="w-3.5 h-3.5" />
            <span>Visual Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display mb-3">
            FOOD GALLERY
          </h2>
          <p className="text-stone-400 text-sm sm:text-base">
            Glimpse into the momo craftsmanship, vibrant dishes, and hospitable vibe of Butwal.
          </p>
        </div>

        {/* Gallery Filter Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setActiveCategory(cat);
                setSelectedImageIndex(null);
              }}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-amber-500 text-stone-950 shadow-md'
                  : 'bg-stone-900 text-stone-400 hover:text-white border border-stone-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(idx)}
              className="group relative rounded-2xl overflow-hidden bg-stone-900 border border-stone-800/80 cursor-pointer aspect-[4/3] shadow-lg shadow-black/40"
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
              />

              {/* Hover overlay with caption & expand icon */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-semibold mb-1">
                  {item.category}
                </span>
                <h3 className="text-base font-bold text-white font-display mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-300 line-clamp-2">
                  {item.caption}
                </p>
                
                <div className="absolute top-4 right-4 p-2 rounded-full bg-stone-950/60 backdrop-blur-md text-stone-300">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && filteredItems[selectedImageIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={handleCloseLightbox}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={handleCloseLightbox}
            className="absolute top-6 right-6 p-2 rounded-full bg-stone-900/80 hover:bg-stone-800 text-stone-200 hover:text-white border border-stone-700 transition-colors z-50 cursor-pointer"
            aria-label="Close image lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls */}
          {filteredItems.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-stone-900/80 hover:bg-stone-800 text-stone-200 hover:text-white border border-stone-700 transition-colors z-50 cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-stone-900/80 hover:bg-stone-800 text-stone-200 hover:text-white border border-stone-700 transition-colors z-50 cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Central Modal Content */}
          <div
            className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-2xl overflow-hidden border border-stone-800 shadow-2xl max-h-[70vh]">
              <img
                src={filteredItems[selectedImageIndex].image}
                alt={filteredItems[selectedImageIndex].title}
                referrerPolicy="no-referrer"
                className="max-h-[70vh] w-auto object-contain mx-auto"
              />
            </div>

            <div className="mt-4 text-center">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
                {filteredItems[selectedImageIndex].category} · {selectedImageIndex + 1} of {filteredItems.length}
              </span>
              <h4 className="text-lg font-bold text-white font-display mt-0.5">
                {filteredItems[selectedImageIndex].title}
              </h4>
              <p className="text-xs sm:text-sm text-stone-400 mt-1 max-w-lg mx-auto">
                {filteredItems[selectedImageIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
