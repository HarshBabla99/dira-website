import { useLanguage } from "@/context/LanguageContext";

const SectionAbout = () => {
  const { t } = useLanguage();

  return (
    <section id="about" aria-labelledby="about-title" className="section scroll-mt-16 md:scroll-mt-20">
      <div className="container mx-auto px-6 grid md:grid-cols-12 gap-8 md:gap-12 items-center">
        <div className="md:col-span-7">
          <h2 id="about-title" className="font-serif text-2xl sm:text-3xl md:text-4xl leading-snug">
            Artisanal. Sustainable. Pure.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Dira Naturals crafts small-batch soaps using cold-process methods, botanical oils,
            and mineral-rich clays. Our formulas are free from synthetic dyes and harsh sulfates,
            designed to nourish skin and calm the senses.
          </p>
          <ul className="mt-6 space-y-2 text-sm sm:text-base text-muted-foreground">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Ethically sourced, plant-based ingredients
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Recyclable, minimal packaging
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              No parabens, no phthalates, no silicones
            </li>
          </ul>
        </div>
        <div className="md:col-span-5">
          <div className="card-lux animate-enter">
            <blockquote className="text-sm sm:text-base text-muted-foreground italic leading-relaxed">
              "We believe in quiet luxury—considered materials, elevated textures, and thoughtful details.
              Each bar is cured for weeks to achieve a gentle, creamy lather."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
