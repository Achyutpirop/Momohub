import React, { useState, useEffect } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { Menu as MenuIcon, X, Phone, ShoppingBag, ExternalLink } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenOrder: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenOrder }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location', href: '#location' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-stone-950/85 backdrop-blur-md border-b border-stone-800/80 py-3 shadow-lg shadow-black/40'
            : 'bg-gradient-to-b from-stone-950/90 via-stone-950/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Single Brand Wordmark */}
            <a
              href="#home"
              className="text-xl sm:text-2xl font-bold tracking-tight text-white font-display hover:text-amber-400 transition-colors"
            >
              THE MOMO HUB
            </a>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-300">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="hover:text-amber-400 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-500 hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary Action & Quick Tray */}
            <div className="flex items-center gap-3">
              <a
                href={RESTAURANT_INFO.phoneCallable}
                className="hidden lg:flex items-center gap-1.5 text-xs text-stone-300 hover:text-amber-400 transition-colors py-2 px-3 rounded-lg border border-stone-800 hover:border-stone-700 bg-stone-900/60"
                title="Call The Momo Hub Butwal"
              >
                <Phone className="w-3.5 h-3.5 text-amber-500" />
                <span className="font-mono">{RESTAURANT_INFO.phone}</span>
              </a>

              {/* Quick Tray / Order button */}
              <button
                type="button"
                onClick={onOpenOrder}
                className="relative inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 text-xs sm:text-sm font-bold px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg shadow-md shadow-amber-950/40 hover:shadow-amber-600/30 transition-all transform active:scale-95 cursor-pointer whitespace-nowrap"
              >
                <ShoppingBag className="w-4 h-4 text-stone-950" />
                <span>ORDER NOW</span>
                {cartCount > 0 && (
                  <span className="bg-stone-950 text-amber-400 text-xs font-mono font-bold w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile hamburger toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-stone-400 hover:text-white rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-stone-950/95 backdrop-blur-xl pt-20 px-6 pb-6 flex flex-col justify-between animate-in fade-in duration-200">
          <div className="flex flex-col gap-4 mt-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xl font-semibold text-stone-200 hover:text-amber-400 py-2 border-b border-stone-800/80 transition-colors font-display"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-stone-800">
            <a
              href={RESTAURANT_INFO.phoneCallable}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-stone-900 border border-stone-800 text-stone-200 font-medium text-sm"
            >
              <Phone className="w-4 h-4 text-amber-500" />
              <span>Call: {RESTAURANT_INFO.phone}</span>
            </a>
            <a
              href={RESTAURANT_INFO.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm"
            >
              <span>MenuMakchha Online Order</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </>
  );
};
