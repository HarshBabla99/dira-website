import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t bg-secondary/30">
      <div className="container mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">
        {/* Brand */}
        <div>
          <Link to="/" className="flex items-center gap-2 font-serif text-xl tracking-wide">
            <Leaf className="h-5 w-5 text-primary" />
            Dira Naturals
          </Link>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Luxury handmade soaps crafted with all‑natural ingredients.
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-3 text-sm">
          <span className="font-serif text-base font-medium mb-1">{t("featured")}</span>
          <a href="#about" className="story-link text-muted-foreground hover:text-foreground transition-colors">
            {t("about")}
          </a>
          <a href="#featured" className="story-link text-muted-foreground hover:text-foreground transition-colors">
            {t("featured")}
          </a>
          <a href="#testimonials" className="story-link text-muted-foreground hover:text-foreground transition-colors">
            {t("testimonials")}
          </a>
          <Link to="/shop" className="story-link text-muted-foreground hover:text-foreground transition-colors">
            {t("shop")}
          </Link>
        </nav>

        {/* Contact */}
        <div className="text-sm text-muted-foreground space-y-3">
          <span className="font-serif text-base font-medium text-foreground block mb-1">Contact</span>
          <p>hello@diranaturals.com</p>
          <p className="pt-4 border-t border-border/50">
            © {new Date().getFullYear()} Dira Naturals. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
