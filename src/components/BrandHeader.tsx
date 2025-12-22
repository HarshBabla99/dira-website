import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import { ShoppingBag, Store, Languages } from "lucide-react";

const BrandHeader = () => {
  const { openCart, items } = useCart();
  const { language, toggleLanguage, t } = useLanguage();
  const count = items.reduce((s, i) => s + i.quantity, 0);

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-serif text-xl tracking-wide">Dira Naturals</Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#about" className="story-link">{t("about")}</a>
          <a href="#featured" className="story-link">{t("featured")}</a>
          <a href="#testimonials" className="story-link">{t("testimonials")}</a>
          <Link className="story-link" to="/shop">{t("shop")}</Link>
        </nav>
        <div className="flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="btn-ghost flex items-center gap-1.5"
            aria-label="Toggle language"
          >
            <Languages className="h-4 w-4" />
            <span className={language === "en" ? "text-foreground" : "text-muted-foreground"}>EN</span>
            <span className="text-muted-foreground">/</span>
            <span className={language === "sw" ? "text-foreground" : "text-muted-foreground"}>SW</span>
          </button>
          <Link to="/shop" className="btn-ghost hidden sm:inline-flex items-center gap-2">
            <Store className="h-4 w-4" /> {t("shop")}
          </Link>
          <button aria-label="Open cart" onClick={openCart} className="btn relative">
            <ShoppingBag className="mr-2 h-4 w-4" /> {t("cart")}
            {count > 0 && (
              <span className="ml-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-2 text-xs text-accent-foreground">{count}</span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default BrandHeader;
