import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { Phone, MapPin, Clock, ExternalLink, Instagram, Facebook, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location', href: '#location' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-stone-950 border-t border-stone-800/90 text-stone-400 pt-16 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand & Tagline Column */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <a
              href="#home"
              className="text-2xl font-extrabold text-white font-display tracking-tight hover:text-amber-400 transition-colors"
            >
              THE MOMO HUB
            </a>
            <p className="text-amber-400 font-medium text-sm mt-1">
              Fresh Momos. Big Flavor.
            </p>
            <p className="text-xs text-stone-400 leading-relaxed mt-4 max-w-sm">
              Authentic Himalayan momos, flavorful jhol, sizzling kothey, and unbeatable value located at Horizon Chowk, Butwal, Nepal.
            </p>

            {/* Social placeholders */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href={RESTAURANT_INFO.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-stone-900 hover:bg-amber-500 hover:text-stone-950 text-stone-300 flex items-center justify-center border border-stone-800 transition-colors"
                aria-label="The Momo Hub Ordering Portal"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-stone-900 hover:bg-amber-500 hover:text-stone-950 text-stone-300 flex items-center justify-center border border-stone-800 transition-colors"
                aria-label="The Momo Hub on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-stone-900 hover:bg-amber-500 hover:text-stone-950 text-stone-300 flex items-center justify-center border border-stone-800 transition-colors"
                aria-label="The Momo Hub on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-mono">
              QUICK LINKS
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-amber-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-mono">
              CONTACT
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <a
                  href={RESTAURANT_INFO.phoneCallable}
                  className="hover:text-white font-mono transition-colors"
                >
                  {RESTAURANT_INFO.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>Horizon Chowk, Butwal, Nepal</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>Open until 12:00 AM</span>
              </li>
            </ul>
          </div>

          {/* Order Column */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-mono">
              ORDER
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={RESTAURANT_INFO.orderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Order Online</span>
                  <ExternalLink className="w-3 h-3 text-stone-500" />
                </a>
              </li>
              <li>
                <a
                  href={RESTAURANT_INFO.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Get Directions</span>
                  <ExternalLink className="w-3 h-3 text-stone-500" />
                </a>
              </li>
              <li>
                <a
                  href={RESTAURANT_INFO.phoneCallable}
                  className="hover:text-amber-400 transition-colors"
                >
                  Call Now
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© 2026 THE MOMO HUB, Butwal. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href="/momo-hub.zip"
              download="momo-hub.zip"
              className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-medium py-1 px-2.5 rounded bg-stone-900 border border-stone-800 transition-colors"
              title="Download entire MOMO-HUB folder for your PC"
            >
              <span>Download MOMO-HUB Code (.zip)</span>
            </a>
            <span>Horizon Chowk · Butwal · Lumbini Province</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
