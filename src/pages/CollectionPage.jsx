import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ShopHero from "../components/shop/ShopHero";
import ShopProductGrid from "../components/shop/ShopProductGrid";
import CollectionShowcase from "../components/shop/CollectionShowcase";
import CategoryUniverseBanner from "../components/shop/CategoryUniverseBanner";
import ProductRail from "../components/ProductRail";
import { products, topSellingProducts } from "../data/product";

const collectionMeta = {
  men: {
    type: "men",
    title: "Men's Fragrances",
    description:
      "Fresh, woody, spicy and powerful masculine perfumes for daily confidence and evening presence.",
    themeClass: "theme-blue-dark",
  },
  women: {
    type: "women",
    title: "Women's Fragrances",
    description:
      "Elegant florals, sweet gourmands, soft musks and seductive night fragrances.",
    themeClass: "theme-sweet-red",
  },
  unisex: {
    type: "unisex",
    title: "Unisex Fragrances",
    description:
      "Oud, amber, rose, musk and signature scents made for anyone who wants a bold trail.",
    themeClass: "theme-oud-amber",
  },
  testers: {
    type: "testers",
    title: "Tester Boxes",
    description:
      "Discovery sets for trying different scents before selecting your full bottle.",
    themeClass: "theme-vanilla-cream",
  },
};

function getCollectionProducts(type) {
  if (type === "testers") {
    return products.filter((product) => product.category === "tester");
  }

  return products.filter((product) => product.category === type);
}

export default function CollectionPage() {
  const { slug } = useParams();
  const collection = collectionMeta[slug] || collectionMeta.men;

  const collectionProducts = useMemo(
    () => getCollectionProducts(collection.type),
    [collection.type]
  );

  return (
    <main className={`min-h-screen bg-white text-black ${collection.themeClass}`}>
      <Header variant="white" />

      <ShopHero type={collection.type} />

      <section className="bg-white text-black">
        <div className="site-container py-16 text-center md:py-24">
          <p className="mb-4 font-heading text-xl uppercase tracking-wideLuxury text-brand-primary">
            Scents By Aamir
          </p>

          <h1 className="heading-section">{collection.title}</h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-black/60 md:text-lg">
            {collection.description}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/collection/men" className="luxury-btn text-black">
              Men
            </Link>
            <Link to="/collection/women" className="luxury-btn text-black">
              Women
            </Link>
            <Link to="/collection/unisex" className="luxury-btn text-black">
              Unisex
            </Link>
            <Link to="/collection/testers" className="luxury-btn text-black">
              Testers
            </Link>
          </div>
        </div>
      </section>

      <CollectionShowcase type={collection.type} />

      <ShopProductGrid products={collectionProducts} title={collection.title} />

      <section className="bg-white text-black">
        <div className="site-container grid gap-8 py-16 md:grid-cols-3 md:py-24">
          <div className="border border-black/10 p-8">
            <h3 className="font-heading text-[36px] uppercase tracking-wideLuxury">
              Long Lasting
            </h3>
            <p className="mt-4 text-sm leading-7 text-black/58">
              Designed around strong fragrance profiles with memorable dry-downs.
            </p>
          </div>

          <div className="border border-black/10 p-8">
            <h3 className="font-heading text-[36px] uppercase tracking-wideLuxury">
              Inspired Luxury
            </h3>
            <p className="mt-4 text-sm leading-7 text-black/58">
              Premium inspired scents with a modern Scents By Aamir presentation.
            </p>
          </div>

          <div className="border border-black/10 p-8">
            <h3 className="font-heading text-[36px] uppercase tracking-wideLuxury">
              Scent Identity
            </h3>
            <p className="mt-4 text-sm leading-7 text-black/58">
              Each perfume has its own mood, color palette and fragrance story.
            </p>
          </div>
        </div>
      </section>

      <CategoryUniverseBanner />

      <ProductRail
        eyebrow="Most Loved"
        title="Top Selling"
        description="Explore customer favorites across the house."
        products={topSellingProducts}
      />

      <Footer />
    </main>
  );
}