import React, { useState } from 'react';
import { MenuItem, RESTAURANT_INFO } from '../data/restaurantData';
import { X, Trash2, Plus, Minus, ShoppingBag, Phone, ExternalLink, Check } from 'lucide-react';

export interface CartItem {
  item: MenuItem;
  quantity: number;
  spicyPreference: 'Mild' | 'Medium' | 'Hot';
}

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (itemId: string, newQty: number) => void;
  onClearCart: () => void;
  onAddQuickItem: (item: MenuItem) => void;
  availableItems: MenuItem[];
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onClearCart,
  onAddQuickItem,
  availableItems,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [deliveryNote, setDeliveryNote] = useState('');
  const [orderSent, setOrderSent] = useState(false);

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, entry) => sum + entry.item.price * entry.quantity, 0);

  // Pre-formatted message for phone/WhatsApp order
  const formatOrderText = () => {
    let text = `Hello The Momo Hub Butwal, I would like to place an order:%0A`;
    cart.forEach((c) => {
      text += `- ${c.quantity}x ${c.item.name} (${c.spicyPreference}) = Rs ${c.item.price * c.quantity}%0A`;
    });
    text += `%0ATotal: Rs ${subtotal}%0A`;
    if (customerName) text += `Name: ${encodeURIComponent(customerName)}%0A`;
    if (deliveryNote) text += `Address / Note: ${encodeURIComponent(deliveryNote)}%0A`;
    return text;
  };

  const handlePhoneOrder = () => {
    setOrderSent(true);
    // Open tel or whatsapp
    window.location.href = `tel:+9779742907471`;
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        className="w-full max-w-lg bg-stone-950 border-l border-stone-800 h-full flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-stone-800 flex items-center justify-between bg-stone-900/50">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-amber-500" />
            <div>
              <h3 className="text-base font-bold text-white font-display">Your Momo Hub Order</h3>
              <p className="text-xs text-stone-400">Horizon Chowk, Butwal · Open until 12:00 AM</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
            aria-label="Close order drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          
          {cart.length === 0 ? (
            <div className="py-12 text-center flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center mb-4 text-stone-500">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-white font-display mb-1">Your tray is empty</h4>
              <p className="text-xs text-stone-400 max-w-xs mb-6">
                Add your favorite momos from our menu below to build your order.
              </p>

              {/* Quick suggestions */}
              <div className="w-full text-left">
                <p className="text-xs uppercase tracking-wider text-amber-500 font-semibold mb-3">
                  Popular Quick Adds:
                </p>
                <div className="space-y-2">
                  {availableItems.slice(0, 3).map((item) => (
                    <div
                      key={item.id}
                      className="p-3 bg-stone-900/80 rounded-xl border border-stone-800 flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          referrerPolicy="no-referrer"
                          className="w-10 h-10 rounded-lg object-cover"
                        />
                        <div>
                          <p className="text-xs font-bold text-white">{item.name}</p>
                          <span className="text-xs font-mono text-amber-400">{item.formattedPrice}</span>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => onAddQuickItem(item)}
                        className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs cursor-pointer"
                      >
                        + Add
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <>
              {/* Order items list */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-stone-400 pb-1">
                  <span>Selected Items ({cart.length})</span>
                  <button
                    type="button"
                    onClick={onClearCart}
                    className="text-red-400 hover:text-red-300 flex items-center gap-1 cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Clear all</span>
                  </button>
                </div>

                {cart.map((entry) => (
                  <div
                    key={entry.item.id}
                    className="p-3.5 rounded-xl bg-stone-900/80 border border-stone-800 flex items-center justify-between gap-3"
                  >
                    <img
                      src={entry.item.image}
                      alt={entry.item.name}
                      referrerPolicy="no-referrer"
                      className="w-12 h-12 rounded-lg object-cover shrink-0"
                    />

                    <div className="flex-1 min-w-0">
                      <h5 className="text-xs sm:text-sm font-bold text-white truncate">
                        {entry.item.name}
                      </h5>
                      <div className="flex items-center gap-2 text-xs text-stone-400 mt-0.5">
                        <span className="font-mono text-amber-400 font-bold">
                          Rs {entry.item.price * entry.quantity}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span className="text-[11px] text-stone-400">
                          Rs {entry.item.price} each
                        </span>
                      </div>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 bg-stone-950 px-2 py-1 rounded-lg border border-stone-800">
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(entry.item.id, entry.quantity - 1)}
                        className="p-1 text-stone-400 hover:text-white cursor-pointer"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-xs font-mono font-bold text-white w-4 text-center">
                        {entry.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(entry.item.id, entry.quantity + 1)}
                        className="p-1 text-stone-400 hover:text-white cursor-pointer"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Optional note / address field for quick phone calling */}
              <div className="pt-2 space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">
                    Your Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. Binod Sharma"
                    className="w-full text-xs p-2.5 rounded-lg bg-stone-900 border border-stone-800 text-stone-200 placeholder:text-stone-600 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">
                    Delivery Address / Table Number in Butwal (Optional)
                  </label>
                  <input
                    type="text"
                    value={deliveryNote}
                    onChange={(e) => setDeliveryNote(e.target.value)}
                    placeholder="e.g. Near Horizon Chowk / Golpark"
                    className="w-full text-xs p-2.5 rounded-lg bg-stone-900 border border-stone-800 text-stone-200 placeholder:text-stone-600 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>
            </>
          )}

        </div>

        {/* Footer Subtotal & Direct Ordering Channels */}
        {cart.length > 0 && (
          <div className="p-5 border-t border-stone-800 bg-stone-900/90 space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-stone-300">Estimated Total:</span>
              <span className="text-xl font-extrabold text-amber-400 font-mono">
                Rs {subtotal}
              </span>
            </div>

            <p className="text-[11px] text-stone-400">
              *Taxes and complimentary house achars included. Free delivery available in Butwal.
            </p>

            <div className="space-y-2 pt-1">
              {/* Option 1: Direct link to MenuMakchha */}
              <a
                href={RESTAURANT_INFO.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <span>Complete on MenuMakchha</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              {/* Option 2: Direct Call with prepped order */}
              <button
                type="button"
                onClick={handlePhoneOrder}
                className="w-full py-3 px-4 rounded-xl bg-stone-800 hover:bg-stone-700 text-white font-semibold text-xs flex items-center justify-center gap-2 border border-stone-700 transition-all cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call Kitchen: {RESTAURANT_INFO.phone}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
