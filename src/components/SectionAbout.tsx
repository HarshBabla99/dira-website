import { useLanguage } from "@/context/LanguageContext";
import foundersImage from "@/assets/founders.jpg";

const SectionAbout = () => {
  const { t } = useLanguage();

  return (
    <section id="about" aria-labelledby="about-title" className="section scroll-mt-16 md:scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-6 md:gap-10">
          {/* Left Column - All Text Content */}
          <div className="order-2 md:order-1 space-y-8">
            {/* Our Story & Meet the Creators */}
            <div>
              <h2 id="about-title" className="font-serif text-2xl sm:text-3xl md:text-4xl leading-snug mb-4">
                {t("ourStory")}
              </h2>
              <h3 className="font-serif text-xl sm:text-2xl mb-4">Meet the Creators</h3>
              <p className="text-base text-muted-foreground leading-relaxed text-justify mb-3">
                Dira Naturals was born from a mother-daughter passion for natural skincare. 
                Sarah and Amelia started experimenting with cold-process soap making in their 
                home kitchen in 2018, driven by a desire to create gentle, effective products 
                free from harsh chemicals.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed text-justify">
                Today, every bar is still handcrafted in small batches at our workshop in 
                Dar es Salaam, using locally sourced botanicals and time-honored techniques 
                passed down through generations.
              </p>
            </div>

            {/* Artisanal Section */}
            <div>
              <h3 className="font-serif text-xl sm:text-2xl mb-4">Artisanal. Sustainable. Pure.</h3>
              <p className="text-base text-muted-foreground leading-relaxed text-justify">
                We craft small-batch soaps using cold-process methods, botanical oils,
                and mineral-rich clays. Our formulas are free from synthetic dyes and harsh sulfates,
                designed to nourish skin and calm the senses.
              </p>
              <ul className="mt-5 space-y-2 text-sm sm:text-base text-muted-foreground">
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
          </div>

          {/* Right Column - Image & Quote */}
          <div className="order-1 md:order-2 flex flex-col gap-6">
            <div className="rounded-xl overflow-hidden border shadow-md flex-1">
              <img 
                src={foundersImage} 
                alt="Sarah and Amelia, founders of Dira Naturals, crafting artisanal soaps in their workshop" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="card-lux">
              <blockquote className="text-sm sm:text-base text-muted-foreground italic leading-relaxed">
                "We believe in quiet luxury—considered materials, elevated textures, and thoughtful details.
                Each bar is cured for weeks to achieve a gentle, creamy lather."
              </blockquote>
              <p className="mt-4 font-serif text-sm">— Sarah & Amelia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
