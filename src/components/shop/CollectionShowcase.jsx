import { Link } from "react-router-dom";

const showcases = {
  men: {
    eyebrow: "The Masculine Edit",
    title: "For Confidence That Stays.",
    text: "Men's fragrances built around citrus brightness, aromatic spices, smoky woods, amber and leather depth.",
    image: "/images/shop/men-editorial.png",
    cards: [
      ["Fresh", "Citrus, grapefruit, aquatic woods"],
      ["Intense", "Amber, leather, smoke"],
      ["Elegant", "Spices, patchouli, musk"],
    ],
  },
  women: {
    eyebrow: "The Feminine Edit",
    title: "For Elegance And Seduction.",
    text: "Women's perfumes with floral bouquets, sweet gourmands, vanilla warmth, coffee depth and musky trails.",
    image: "/images/shop/women-editorial.png",
    cards: [
      ["Floral", "Rose, jasmine, ylang-ylang"],
      ["Sweet", "Vanilla, coffee, almond"],
      ["Soft", "Musk, pear, powdery woods"],
    ],
  },
  unisex: {
    eyebrow: "The Oud Edit",
    title: "For Statement Fragrance Lovers.",
    text: "Unisex fragrances with oud, amber, rose, incense, saffron and deep oriental texture.",
    image: "/images/shop/unisex-editorial.png",
    cards: [
      ["Oud", "Dark woods, smoke, depth"],
      ["Amber", "Warm resin, golden trail"],
      ["Rose", "Velvet floral richness"],
    ],
  },
  testers: {
    eyebrow: "The Discovery Edit",
    title: "Find Your Signature First.",
    text: "Tester boxes made for trying multiple perfumes before choosing your full bottle.",
    image: "/images/shop/testers-editorial.png",
    cards: [
      ["Men Box", "Fresh and bold masculine scents"],
      ["Women Box", "Floral, sweet and soft perfumes"],
      ["Custom Box", "Choose your own selection"],
    ],
  },
};

export default function CollectionShowcase({ type = "men" }) {
  const data = showcases[type] || showcases.men;

  return (
    <section className="relative overflow-hidden bg-black text-white">
      <img
        src={data.image}
        alt={data.title}
        className="absolute inset-0 h-full w-full object-cover opacity-50"
      />

      <div className="absolute inset-0 bg-black/68" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,var(--color-glow),transparent_38%)]" />

      <div className="site-container relative z-10 grid min-h-[560px] items-center gap-10 py-16 lg:grid-cols-2 md:py-20">
        <div>
          <p className="mb-3 font-heading text-[13px] font-normal uppercase leading-[16px] tracking-[0.4px] text-brand-primary">
            {data.eyebrow}
          </p>

          <h2 className="luxury-section-title text-white">{data.title}</h2>

          <p className="mt-4 max-w-xl text-[13px] leading-[20px] text-white/68">
            {data.text}
          </p>

          <Link to="/shop" className="luxury-link mt-7 text-white">
            View All Fragrances
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
          {data.cards.map(([title, text]) => (
            <div
              key={title}
              className="border border-white/15 bg-white/8 p-6 backdrop-blur"
            >
              <h3 className="product-card-title text-white">{title}</h3>

              <p className="mt-3 text-[12px] leading-5 text-white/62">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}