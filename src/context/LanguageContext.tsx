import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "en" | "sw" | "fr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    about: "About",
    featured: "Featured",
    testimonials: "Testimonials",
    shop: "Shop",
    cart: "Cart",
    clear: "Clear",
    checkout: "Proceed to Checkout",
    subtotal: "Subtotal",
    emptyCart: "Your cart is empty.",
    yourCart: "Your Cart",
    close: "Close",
    remove: "Remove",
  },
  sw: {
    about: "Kuhusu",
    featured: "Bidhaa Bora",
    testimonials: "Ushuhuda",
    shop: "Duka",
    cart: "Kikapu",
    clear: "Futa",
    checkout: "Endelea Kulipa",
    subtotal: "Jumla Ndogo",
    emptyCart: "Kikapu chako ni tupu.",
    yourCart: "Kikapu Chako",
    close: "Funga",
    remove: "Ondoa",
  },
  fr: {
    about: "À propos",
    featured: "En vedette",
    testimonials: "Témoignages",
    shop: "Boutique",
    cart: "Panier",
    clear: "Vider",
    checkout: "Passer à la caisse",
    subtotal: "Sous-total",
    emptyCart: "Votre panier est vide.",
    yourCart: "Votre Panier",
    close: "Fermer",
    remove: "Supprimer",
  },
};

export const languageOptions: { value: Language; label: string; full: string }[] = [
  { value: "en", label: "EN", full: "English" },
  { value: "sw", label: "SW", full: "Kiswahili" },
  { value: "fr", label: "FR", full: "Français" },
];

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
