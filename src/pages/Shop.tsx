import BrandHeader from "@/components/BrandHeader";
import Footer from "@/components/Footer";
import { products, Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";

const Shop = () => {
  const { add, openCart } = useCart();
  const { t } = useLanguage();
  const [quantities, setQuantities] = useState<Record<string, number>>(
    () => Object.fromEntries(products.map((p) => [p.id, 1]))
  );

  const signatureProducts = products.filter((p) => p.collection === "signature");
  const seasonalProducts = products.filter((p) => p.collection === "seasonal");

  const updateQuantity = (id: string, value: number) => {
    const clamped = Math.max(1, Math.min(99, value));
    setQuantities((prev) => ({ ...prev, [id]: clamped }));
  };

  const handleInputChange = (id: string, inputValue: string) => {
    const parsed = parseInt(inputValue, 10);
    if (!isNaN(parsed)) {
      updateQuantity(id, parsed);
    } else if (inputValue === "") {
      setQuantities((prev) => ({ ...prev, [id]: 1 }));
    }
  };

  const handleAddToCart = (product: Product) => {
    const qty = quantities[product.id] || 1;
    for (let i = 0; i < qty; i++) {
      add(product);
    }
    openCart();
    setQuantities((prev) => ({ ...prev, [product.id]: 1 }));
  };

  const ProductCard = ({ p }: { p: Product }) => (
    <article className="card-lux hover-scale flex flex-col">
      <div className="aspect-square overflow-hidden rounded-lg border">
        <img src={p.image} alt={p.alt} loading="lazy" className="h-full w-full object-cover" />
      </div>
      <div className="mt-3 sm:mt-4 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-serif text-base sm:text-lg leading-tight">{p.name}</h3>
          <span className="shrink-0 font-medium text-sm sm:text-base">${p.price.toFixed(2)}</span>
        </div>
        <p className="mt-1 text-xs sm:text-sm text-muted-foreground line-clamp-2">{p.description}</p>
      </div>

      {/* Quantity & Add Button - Same row, equal widths */}
      <div className="mt-3 sm:mt-4 flex items-stretch gap-2">
        <div className="flex-1 flex items-center justify-between border rounded-md">
          <button
            type="button"
            onClick={() => updateQuantity(p.id, (quantities[p.id] || 1) - 1)}
            className="p-2 hover:bg-muted/50 transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus className="h-4 w-4" />
          </button>
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            value={quantities[p.id] || 1}
            onChange={(e) => handleInputChange(p.id, e.target.value)}
            className="w-8 text-center bg-transparent text-foreground focus:outline-none text-sm"
            aria-label="Quantity"
          />
          <button
            type="button"
            onClick={() => updateQuantity(p.id, (quantities[p.id] || 1) + 1)}
            className="p-2 hover:bg-muted/50 transition-colors"
            aria-label="Increase quantity"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
        <button 
          className="btn flex-1 text-sm py-2" 
          onClick={() => handleAddToCart(p)}
        >
          Add
        </button>
      </div>
    </article>
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <BrandHeader />
      <main className="py-8 sm:py-12">
        <div className="container mx-auto px-6">
          {/* Signature Collection */}
          <section className="mb-12 sm:mb-16">
            <header className="mb-6 text-center md:text-left">
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl">Signature Collection</h1>
              <p className="mt-2 text-base text-muted-foreground max-w-2xl mx-auto md:mx-0">
                Our timeless essentials — crafted for everyday luxury.
              </p>
            </header>
            <div className="grid gap-4 sm:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {signatureProducts.map((p) => (
                <ProductCard key={p.id} p={p} />
              ))}
            </div>
          </section>

          {/* Seasonal Collection */}
          <section>
            <header className="mb-6 text-center md:text-left">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl">Seasonal Collection</h2>
              <p className="mt-2 text-base text-muted-foreground max-w-2xl mx-auto md:mx-0">
                Limited edition bars inspired by the changing seasons.
              </p>
            </header>
            <div className="grid gap-4 sm:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {seasonalProducts.map((p) => (
                <ProductCard key={p.id} p={p} />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
