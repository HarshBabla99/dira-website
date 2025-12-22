import BrandHeader from "@/components/BrandHeader";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";

const Shop = () => {
  const { add, openCart } = useCart();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <BrandHeader />
      <main className="section">
        <div className="container mx-auto px-6">
          <header className="mb-6 sm:mb-8 text-center md:text-left">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl">The Collection</h1>
            <p className="mt-2 sm:mt-3 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto md:mx-0">
              Elevated bars crafted for balance, clarity, and quiet luxury.
            </p>
          </header>
          <div className="grid gap-4 sm:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((p) => (
              <article key={p.id} className="card-lux hover-scale flex flex-col">
                <div className="aspect-square overflow-hidden rounded-lg border">
                  <img src={p.image} alt={p.alt} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="mt-3 sm:mt-4 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h2 className="font-serif text-base sm:text-lg leading-tight">{p.name}</h2>
                    <span className="shrink-0 font-medium text-sm sm:text-base">${p.price.toFixed(2)}</span>
                  </div>
                  <p className="mt-1 text-xs sm:text-sm text-muted-foreground line-clamp-2">{p.description}</p>
                </div>
                <div className="mt-3 sm:mt-4">
                  <button 
                    className="btn w-full text-sm sm:text-base py-2 sm:py-3" 
                    onClick={() => { add(p); openCart(); }}
                  >
                    {t("cart")} +
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
