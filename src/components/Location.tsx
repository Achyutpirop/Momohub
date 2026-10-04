import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { MapPin, Phone, Clock, Compass, ExternalLink, Navigation } from 'lucide-react';

export const Location: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-stone-950 relative border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-widest text-amber-500 font-semibold mb-2">
            Visit Our Restaurant
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
            FIND US IN BUTWAL
          </h2>
          <p className="text-stone-400 text-sm sm:text-base mt-3">
            Right in the heart of town at Horizon Chowk. Easy access, cozy seating, and late-night momo cravings satisfied until 12:00 AM.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Business Details Cards & Direct CTAs */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              {/* Address Card */}
              <div className="p-6 rounded-2xl bg-stone-900/70 border border-stone-800 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-display mb-1">Address</h4>
                  <p className="text-sm text-stone-300 leading-relaxed">
                    {RESTAURANT_INFO.address}
                  </p>
                  <span className="text-xs text-amber-400/90 font-medium block mt-1">
                    Landmark: Near Horizon Chowk Intersection
                  </span>
                </div>
              </div>

              {/* Phone Card */}
              <div className="p-6 rounded-2xl bg-stone-900/70 border border-stone-800 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-display mb-1">Direct Phone</h4>
                  <p className="text-base font-bold text-white font-mono">
                    {RESTAURANT_INFO.phone}
                  </p>
                  <span className="text-xs text-stone-400 block mt-1">
                    Call for takeaway pre-orders & direct delivery
                  </span>
                </div>
              </div>

              {/* Opening Hours Card */}
              <div className="p-6 rounded-2xl bg-stone-900/70 border border-stone-800 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-display mb-1">Hours of Service</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-emerald-400">
                      {RESTAURANT_INFO.openingHours}
                    </span>
                    <span className="text-xs text-stone-400">(Mon - Sun)</span>
                  </div>
                  <p className="text-xs text-stone-400 mt-1">
                    10:00 AM – 12:00 AM daily
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons: 📍 GET DIRECTIONS & 📞 CALL NOW */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <a
                href={RESTAURANT_INFO.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm shadow-md transition-all cursor-pointer"
              >
                <Compass className="w-4 h-4" />
                <span>GET DIRECTIONS</span>
                <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
              </a>

              <a
                href={RESTAURANT_INFO.phoneCallable}
                className="inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-semibold text-sm border border-stone-700/80 hover:border-amber-500/50 transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>CALL NOW</span>
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Style Interactive Visual Embed */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-stone-800 bg-stone-900 relative min-h-[380px] shadow-2xl flex flex-col">
            {/* Map Frame */}
            <div className="relative w-full flex-1 min-h-[300px] bg-stone-900">
              <iframe
                title="The Momo Hub Location Map Horizon Chowk Butwal"
                src="https://maps.google.com/maps?q=Horizon+Chowk,+Butwal,+Nepal&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                className="w-full h-full border-0 filter grayscale contrast-125 opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                loading="lazy"
                aria-label="Map location of The Momo Hub Butwal"
              />
            </div>

            {/* Map overlay card at bottom */}
            <div className="p-4 sm:p-5 bg-stone-950 border-t border-stone-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-amber-500 font-semibold block">Horizon Chowk, Butwal</span>
                <p className="text-sm font-bold text-white">THE MOMO HUB — BUTWAL</p>
                <p className="text-xs text-stone-400">Convenient parking & easy pickup point</p>
              </div>

              <a
                href={RESTAURANT_INFO.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 bg-stone-900 hover:bg-stone-800 px-3.5 py-2 rounded-lg border border-stone-700 transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open in Maps</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
