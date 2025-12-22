import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "en" | "sw";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
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
    checkout: "Checkout",
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
    checkout: "Lipia",
    subtotal: "Jumla Ndogo",
    emptyCart: "Kikapu chako ni tupu.",
    yourCart: "Kikapu Chako",
    close: "Funga",
    remove: "Ondoa",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "sw" : "en"));
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
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
