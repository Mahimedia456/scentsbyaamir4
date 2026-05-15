import { Link } from "react-router-dom";

const heroContent = {
  shop: {
    eyebrow: "Scents By Aamir",
    title: "Shop Fragrances",
    subtitle:
      "Discover luxury inspired perfumes crafted for identity, projection and lasting memory.",
    image: "/images/shop/shop-hero.png",
    cta: "Explore All",
  },
  men: {
    eyebrow: "Men's Fragrances",
    title: "Bold. Fresh. Magnetic.",
    subtitle:
      "Fresh citrus, smoky woods, spicy amber and modern masculine signatures.",
    image: "/images/shop/men-hero.png",
    cta: "Shop Men",
  },
  women: {
    eyebrow: "Women's Fragrances",
    title: "Elegant. Sweet. Seductive.",
    subtitle:
      "Florals, vanilla, coffee, musk and soft luxury trails made for every mood.",
    image: "/images/shop/women-hero.png",
    cta: "Shop Women",
  },
  unisex: {
    eyebrow: "Unisex Fragrances",
    title: "Oud. Amber. Identity.",
    subtitle:
      "Dark oud, refined amber, rose, musk and statement fragrances beyond gender.",
    image: "/images/shop/unisex-hero.png",
    cta: "Shop Unisex",
  },
  testers: {
    eyebrow: "Tester Boxes",
    title: "Try Before Your Signature.",
    subtitle:
      "Explore multiple scents before choosing your full-size luxury perfume.",
    image: "/images/shop/testers-hero.png",
    cta: "Shop Testers",
  },
};

export default function ShopHero({ type = "shop" }) {
  const data = heroContent[type] || heroContent.shop;

  return (
    <section className="relative min-h-[620px] overflow-hidden bg-black text-white">
      <img
        src={data.image}
        alt={data.title}
        className="absolute inset-0 h-full w-full object-cover opacity-85"
      />

      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.86),rgba(0,0,0,0.18),rgba(0,0,0,0.58))]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.75),transparent_55%)]" />

      <div className="site-container relative z-10 flex min-h-[620px] items-end pb-16">
        <div className="max-w-5xl">
          <p className="mb-4 font-heading text-xl uppercase tracking-wideLuxury text-brand-primary md:text-2xl">
            {data.eyebrow}
          </p>

          <h1 className="heading-hero">{data.title}</h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/74 md:text-xl">
            {data.subtitle}
          </p>

          <Link to="/shop" className="luxury-link mt-8 text-white">
            {data.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}