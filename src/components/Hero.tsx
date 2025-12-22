import heroImage from "@/assets/hero-soaps.jpg";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section aria-label="Hero" className="relative">
      <div className="relative h-[60vh] sm:h-[70vh] md:h-[78vh] overflow-hidden rounded-none sm:rounded-2xl sm:mx-4 md:mx-6 sm:mt-4 border-y sm:border">
        <img
          src={heroImage}
          alt="Luxurious artisanal handmade soap bars on natural stone"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
        <div className="relative z-10 h-full flex items-end">
          <div className="container mx-auto px-6 pb-10 sm:pb-12 md:pb-16 animate-fade-in">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight max-w-3xl">
              Luxury in Every Lather – Handmade with All‑Natural Ingredients
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mt-4 max-w-2xl">
              Refined, minimal, and meticulously crafted soaps that elevate your daily ritual.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link to="/shop" className="btn text-center">{t("shop")} Now</Link>
              <a href="#about" className="btn-ghost text-center">{t("about")}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
