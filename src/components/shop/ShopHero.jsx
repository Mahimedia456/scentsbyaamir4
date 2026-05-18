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
    <section className="relative min-h-[460px] overflow-hidden bg-black text-white md:min-h-[560px]">
      <img
        src={data.image}
        alt={data.title}
        className="absolute inset-0 h-full w-full object-cover opacity-90"
      />

      <div className="absolute inset-0 bg-black/28" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.72),rgba(0,0,0,0.08)_52%,rgba(0,0,0,0.45))]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.70),transparent_52%)]" />

      <div className="site-container relative z-10 flex min-h-[460px] items-end pb-12 md:min-h-[560px] md:pb-14">
        <div className="max-w-[680px]">
          <p className="mb-3 font-heading text-[13px] font-normal uppercase leading-[16px] tracking-[0.4px] text-brand-primary">
            {data.eyebrow}
          </p>

          <h1 className="home-hero-title">{data.title}</h1>

          <p className="mt-3 max-w-[460px] text-[13px] leading-[20px] tracking-[0.2px] text-white/76">
            {data.subtitle}
          </p>

          <Link to="/shop" className="luxury-link mt-7 text-white">
            {data.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}