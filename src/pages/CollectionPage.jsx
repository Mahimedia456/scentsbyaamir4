import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ShopHero from "../components/shop/ShopHero";
import ShopProductGrid from "../components/shop/ShopProductGrid";
import CollectionShowcase from "../components/shop/CollectionShowcase";
import CategoryUniverseBanner from "../components/shop/CategoryUniverseBanner";
import ProductRail from "../components/ProductRail";
import { products as localProducts, topSellingProducts } from "../data/product";
import { fetchWooProducts } from "../services/wooService";
import { adaptProductsForTemplate } from "../utils/productAdapter";

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

const categoryLinks = [
  { label: "Men", to: "/collection/men", key: "men" },
  { label: "Women", to: "/collection/women", key: "women" },
  { label: "Unisex", to: "/collection/unisex", key: "unisex" },
  { label: "Testers", to: "/collection/testers", key: "testers" },
];

const featureCards = [
  {
    title: "Long Lasting",
    text: "Designed around strong fragrance profiles with memorable dry-downs.",
  },
  {
    title: "Inspired Luxury",
    text: "Premium inspired scents with a modern Scents By Aamir presentation.",
  },
  {
    title: "Scent Identity",
    text: "Each perfume has its own mood, color palette and fragrance story.",
  },
];

function getCollectionProducts(items, type) {
  if (type === "testers") {
    return items.filter((product) => product.category === "tester");
  }

  return items.filter((product) => product.category === type);
}

export default function CollectionPage() {
  const { slug } = useParams();
  const collection = collectionMeta[slug] || collectionMeta.men;

  const [wooProducts, setWooProducts] = useState([]);

  useEffect(() => {
    let isMounted = true;

    async function loadProducts() {
      try {
        const response = await fetchWooProducts({
          per_page: 100,
          orderby: "date",
          order: "desc",
        });

        if (!isMounted) return;

        setWooProducts(adaptProductsForTemplate(response.products || []));
      } catch (error) {
        console.error("[CollectionPage] WooCommerce fallback:", error);
        if (isMounted) setWooProducts([]);
      }
    }

    loadProducts();

    return () => {
      isMounted = false;
    };
  }, []);

  const allProducts = useMemo(
    () =>
      wooProducts.length
        ? wooProducts
        : adaptProductsForTemplate(localProducts),
    [wooProducts]
  );

  const collectionProducts = useMemo(
    () => getCollectionProducts(allProducts, collection.type),
    [allProducts, collection.type]
  );

const railProducts = wooProducts.length
  ? [...allProducts]
      .sort((a, b) => Number(b.totalSales || 0) - Number(a.totalSales || 0))
      .slice(0, 8)
  : topSellingProducts.slice(0, 8);
  return (
    <main className={`min-h-screen bg-white text-black ${collection.themeClass}`}>
      <Header variant="white" />

      <ShopHero type={collection.type} />

      <section className="bg-white text-black">
        <div className="site-container py-12 text-center md:py-16">
          <p className="mb-3 font-heading text-[13px] font-normal uppercase leading-[16px] tracking-[0.4px] text-brand-primary">
            Scents By Aamir
          </p>

          <h1 className="luxury-section-title">{collection.title}</h1>

          <p className="mx-auto mt-4 max-w-3xl text-[13px] leading-[20px] text-black/60">
            {collection.description}
          </p>

          <div className="mx-auto mt-8 flex max-w-[720px] flex-wrap justify-center gap-2 border-y border-black/10 py-4">
            {categoryLinks.map((item) => {
              const active = item.key === collection.type;

              return (
                <Link
                  key={item.key}
                  to={item.to}
                  className={`inline-flex min-h-[34px] items-center justify-center border px-5 pt-[2px] font-heading text-[13px] font-normal uppercase leading-none tracking-[0.4px] transition ${
                    active
                      ? "border-black bg-black text-white"
                      : "border-black/15 bg-white text-black hover:border-black"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CollectionShowcase type={collection.type} />

      <ShopProductGrid
        products={collectionProducts}
        title={collection.title}
      />

      <section className="bg-white text-black">
        <div className="site-container grid gap-px py-12 md:grid-cols-3 md:py-16">
          {featureCards.map((card) => (
            <div
              key={card.title}
              className="border border-black/10 bg-white p-7 md:p-8"
            >
              <h3 className="product-card-title text-black">{card.title}</h3>

              <p className="mt-4 text-[13px] leading-[20px] text-black/58">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <CategoryUniverseBanner />

      <ProductRail
        eyebrow="Most Loved"
        title="Top Selling"
        description="Explore customer favorites across the house."
        products={railProducts}
      />

      <Footer />
    </main>
  );
}