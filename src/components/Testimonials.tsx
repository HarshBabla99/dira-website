import { useLanguage } from "@/context/LanguageContext";

const Testimonials = () => {
  const { t } = useLanguage();

  const quotes = [
    {
      name: "Anaïs",
      text: "The only soap that feels truly indulgent—soft, creamy lather and a scent that lingers subtly.",
    },
    {
      name: "Marcus",
      text: "Minimal packaging, maximal experience. My skin feels balanced and calm.",
    },
    {
      name: "Harper",
      text: "Quiet luxury in a bar. It transformed my morning routine.",
    },
  ];

  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="section scroll-mt-16 md:scroll-mt-20 bg-secondary/40 border-y">
      <div className="container mx-auto px-6">
        <h2 id="testimonials-title" className="font-serif text-2xl sm:text-3xl md:text-4xl leading-snug">
          {t("testimonials")}
        </h2>
        <div className="mt-6 sm:mt-8 grid gap-4 sm:gap-6 md:grid-cols-3">
          {quotes.map((q) => (
            <figure key={q.name} className="card-lux">
              <blockquote className="text-sm sm:text-base text-muted-foreground italic">
                "{q.text}"
              </blockquote>
              <figcaption className="mt-4 font-serif font-medium text-foreground">— {q.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
