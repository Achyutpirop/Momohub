import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { SignatureDish } from './components/SignatureDish';
import { WhyUs } from './components/WhyUs';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { Location } from './components/Location';
import { OrderSection } from './components/OrderSection';
import { Footer } from './components/Footer';
import { OrderDrawer, CartItem } from './components/OrderDrawer';
import { MobileQuickBar } from './components/MobileQuickBar';
import { MENU_ITEMS, MenuItem } from './data/restaurantData';
import { setupAnchorSmoothScroll } from './utils/smoothScroll';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isOrderDrawerOpen, setIsOrderDrawerOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Setup smooth scrolling for anchor links with sticky navbar offset
  useEffect(() => {
    const cleanup = setupAnchorSmoothScroll();
    return cleanup;
  }, []);

  const handleAddToCart = (item: MenuItem) => {
    setCart((prevCart) => {
      const existing = prevCart.find((ci) => ci.item.id === item.id);
      if (existing) {
        return prevCart.map((ci) =>
          ci.item.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [
        ...prevCart,
        {
          item,
          quantity: 1,
          spicyPreference: item.spiciness || 'Medium',
        },
      ];
    });

    setToastMessage(`Added ${item.name} to order`);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  const handleUpdateQuantity = (itemId: string, newQty: number) => {
    if (newQty <= 0) {
      setCart((prev) => prev.filter((ci) => ci.item.id !== itemId));
    } else {
      setCart((prev) =>
        prev.map((ci) => (ci.item.id === itemId ? { ...ci, quantity: newQty } : ci))
      );
    }
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const totalItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col font-sans selection:bg-amber-500 selection:text-stone-950">
      {/* Toast feedback notification */}
      {toastMessage && (
        <div className="fixed top-20 right-5 z-50 bg-stone-900 border border-amber-500/50 text-white text-xs px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Sticky Top Navigation */}
      <Navbar
        cartCount={totalItemCount}
        onOpenOrder={() => setIsOrderDrawerOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Full-screen Hero Section */}
        <Hero onOpenOrder={() => setIsOrderDrawerOpen(true)} />

        {/* Featured Menu Section */}
        <Menu onAddToCart={handleAddToCart} />

        {/* Split-screen Signature Dish Section: The Chicken Momo Platter */}
        <SignatureDish onOpenOrder={() => setIsOrderDrawerOpen(true)} />

        {/* Why The Momo Hub Feature Cards */}
        <WhyUs />

        {/* Story & About The Momo Hub */}
        <About />

        {/* Masonry Food & Restaurant Gallery with Lightbox */}
        <Gallery />

        {/* Verified Customer Reviews & 3.8/5 Rating */}
        <Reviews />

        {/* Central Butwal Horizon Chowk Location & Interactive Map */}
        <Location />

        {/* Dramatic Order Online Conversion Section */}
        <OrderSection onOpenOrder={() => setIsOrderDrawerOpen(true)} />
      </main>

      {/* Dark Footer */}
      <Footer />

      {/* Interactive Quick Order Drawer */}
      <OrderDrawer
        isOpen={isOrderDrawerOpen}
        onClose={() => setIsOrderDrawerOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
        onAddQuickItem={handleAddToCart}
        availableItems={MENU_ITEMS}
      />

      {/* Mobile Sticky Quick Action Bar & Back to top */}
      <MobileQuickBar
        onOpenOrder={() => setIsOrderDrawerOpen(true)}
        cartCount={totalItemCount}
      />
    </div>
  );
}
