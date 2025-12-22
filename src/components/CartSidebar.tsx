import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import { Link } from "react-router-dom";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";

const CartSidebar = () => {
  const { isOpen, items, total, increment, decrement, remove, closeCart, clear } = useCart();
  const { t } = useLanguage();

  return (
    <div aria-hidden={!isOpen} className={`fixed inset-0 z-50 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      {/* Overlay */}
      <div
        onClick={closeCart}
        className={`absolute inset-0 bg-black/20 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`}
      />

      {/* Sidebar */}
      <aside
        className={`absolute right-0 top-0 h-full w-full sm:w-[420px] bg-background border-l shadow-xl transform transition-transform ${isOpen ? 'translate-x-0 animate-slide-in-right' : 'translate-x-full animate-slide-out-right'} flex flex-col`}
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h3 className="font-serif text-xl flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            {t("cart")}
          </h3>
          <button 
            type="button" 
            onClick={closeCart} 
            className="p-2 hover:bg-muted/50 rounded-md transition-colors"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-3 space-y-3">
          {items.length === 0 ? (
            <p className="text-base text-muted-foreground">{t("emptyCart")}</p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-3 border-b border-border/50 pb-3">
                <img src={item.image} alt={item.alt} className="h-14 w-14 rounded-md border object-cover flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-base font-medium leading-tight truncate">{item.name}</p>
                  <p className="text-base text-muted-foreground">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex flex-col items-end justify-center gap-2">
                  {/* Quantity picker */}
                  <div className="flex items-center border rounded-md">
                    <button 
                      onClick={() => decrement(item.id)} 
                      className="p-2 hover:bg-muted/50 transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-8 text-center text-base">{item.quantity}</span>
                    <button 
                      onClick={() => increment(item.id)} 
                      className="p-2 hover:bg-muted/50 transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <button onClick={() => remove(item.id)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("remove")}</button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-base text-muted-foreground">{t("subtotal")}</span>
            <span className="text-base font-medium">${total.toFixed(2)}</span>
          </div>
          <div className="flex gap-3">
            <button onClick={clear} className="btn-ghost flex-1 text-base">{t("clear")}</button>
            <Link to="/checkout" onClick={closeCart} className="btn flex-1 text-center text-base">{t("checkout")}</Link>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default CartSidebar;
