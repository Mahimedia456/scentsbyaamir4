import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ShopHero from "../components/shop/ShopHero";
import ShopFilters from "../components/shop/ShopFilters";
import ShopProductGrid from "../components/shop/ShopProductGrid";
import CategoryUniverseBanner from "../components/shop/CategoryUniverseBanner";
import ProductRail from "../components/ProductRail";
import {
  newArrivalProducts,
  products as localProducts,
  topSellingProducts,
} from "../data/product";
import { fetchWooProducts } from "../services/wooService";
import { adaptProductsForTemplate } from "../utils/productAdapter";

const WOO_PRODUCTS_CACHE_KEY = "sba_woo_products_cache_v1";
const WOO_PRODUCTS_CACHE_TTL = 1000 * 60 * 10; // 10 minutes

function getCachedWooProducts() {
  try {
    const raw = sessionStorage.getItem(WOO_PRODUCTS_CACHE_KEY);
    if (!raw) return [];

    const parsed = JSON.parse(raw);
    const expired = Date.now() - parsed.savedAt > WOO_PRODUCTS_CACHE_TTL;

    if (expired) {
      sessionStorage.removeItem(WOO_PRODUCTS_CACHE_KEY);
      return [];
    }

    return Array.isArray(parsed.products) ? parsed.products : [];
  } catch {
    return [];
  }
}

function saveCachedWooProducts(products) {
  try {
    sessionStorage.setItem(
      WOO_PRODUCTS_CACHE_KEY,
      JSON.stringify({
        savedAt: Date.now(),
        products,
      })
    );
  } catch {
    // ignore cache errors
  }
}

function productMatchesMood(product, mood) {
  if (mood === "all") return true;

  const text = [
    product.family,
    product.shortDescription,
    product.inspiredBy,
    ...(product.notes?.top || []),
    ...(product.notes?.heart || []),
    ...(product.notes?.base || []),
  ]
    .join(" ")
    .toLowerCase();

  if (mood === "oud") {
    return (
      text.includes("oud") ||
      text.includes("smoke") ||
      text.includes("smoky") ||
      text.includes("incense")
    );
  }

  if (mood === "fresh") {
    return (
      text.includes("fresh") ||
      text.includes("citrus") ||
      text.includes("grapefruit") ||
      text.includes("bergamot") ||
      text.includes("aquatic") ||
      text.includes("marine")
    );
  }

  if (mood === "sweet") {
    return (
      text.includes("sweet") ||
      text.includes("vanilla") ||
      text.includes("coffee") ||
      text.includes("tonka") ||
      text.includes("cacao") ||
      text.includes("praline")
    );
  }

  if (mood === "floral") {
    return (
      text.includes("floral") ||
      text.includes("rose") ||
      text.includes("jasmine") ||
      text.includes("ylang") ||
      text.includes("peony")
    );
  }

  if (mood === "amber") {
    return (
      text.includes("amber") ||
      text.includes("ambergris") ||
      text.includes("amberwood")
    );
  }

  return true;
}

function sortProducts(items, sort) {
  const result = [...items];

  if (sort === "price_low") {
    return result.sort((a, b) => Number(a.price || 0) - Number(b.price || 0));
  }

  if (sort === "price_high") {
    return result.sort((a, b) => Number(b.price || 0) - Number(a.price || 0));
  }

  if (sort === "new") {
    return result.sort((a, b) => {
      const aNew = a.badge?.toLowerCase().includes("new") ? 1 : 0;
      const bNew = b.badge?.toLowerCase().includes("new") ? 1 : 0;
      return bNew - aNew;
    });
  }

  if (sort === "best") {
    return result.sort((a, b) => {
      const aBest = a.badge?.toLowerCase().includes("best") ? 1 : 0;
      const bBest = b.badge?.toLowerCase().includes("best") ? 1 : 0;
      return bBest - aBest;
    });
  }

  return result;
}

export default function Shop() {
  const [searchParams] = useSearchParams();

  const initialCategory = searchParams.get("category") || "all";
  const initialSort = searchParams.get("sort") || "featured";
  const initialMood = searchParams.get("mood") || "all";

  const [category, setCategory] = useState(initialCategory);
  const [mood, setMood] = useState(initialMood);
  const [sort, setSort] = useState(initialSort);
  const [search, setSearch] = useState("");

  const [wooProducts, setWooProducts] = useState(() => getCachedWooProducts());
  const [wooError, setWooError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadWooProductsInBackground() {
      try {
        setWooError("");

        const response = await fetchWooProducts({
          per_page: 100,
          orderby: "date",
          order: "desc",
        });

        if (!isMounted) return;

        const adapted = adaptProductsForTemplate(response.products || []);

        if (adapted.length) {
          setWooProducts(adapted);
          saveCachedWooProducts(adapted);
        }
      } catch (error) {
        if (!isMounted) return;

        console.error("[Shop] WooCommerce products fallback:", error);
        setWooError(error.message || "WooCommerce products unavailable.");
      }
    }

    loadWooProductsInBackground();

    return () => {
      isMounted = false;
    };
  }, []);

  const sourceProducts = wooProducts.length
    ? wooProducts
    : adaptProductsForTemplate(localProducts);

  const filteredProducts = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    const filtered = sourceProducts.filter((product) => {
      const categoryMatch =
        category === "all" ||
        product.category === category ||
        product.category?.toLowerCase() === category ||
        product.categories?.some(
          (item) =>
            item.slug === category ||
            item.name?.toLowerCase() === category.toLowerCase()
        ) ||
        (category === "tester" && product.category === "tester");

      const moodMatch = productMatchesMood(product, mood);

      const searchMatch =
        !normalizedSearch ||
        product.name?.toLowerCase().includes(normalizedSearch) ||
        product.inspiredBy?.toLowerCase().includes(normalizedSearch) ||
        product.family?.toLowerCase().includes(normalizedSearch) ||
        product.shortDescription?.toLowerCase().includes(normalizedSearch);

      return categoryMatch && moodMatch && searchMatch;
    });

    return sortProducts(filtered, sort);
  }, [category, mood, search, sort, sourceProducts]);

  const railTopSelling = wooProducts.length
    ? sourceProducts.slice(0, 8)
    : topSellingProducts.slice(0, 8);

  const railNewArrivals = wooProducts.length
    ? sourceProducts.slice(0, 8)
    : newArrivalProducts.slice(0, 8);

  return (
    <main className="min-h-screen bg-white text-black">
      <Header variant="white" />

      <ShopHero type="shop" />

      <ShopFilters
        category={category}
        setCategory={setCategory}
        mood={mood}
        setMood={setMood}
        sort={sort}
        setSort={setSort}
        search={search}
        setSearch={setSearch}
      />

      {wooError && !wooProducts.length ? (
        <section className="bg-white text-black">
          <div className="site-container py-6">
            <div className="border border-amber-700/20 bg-amber-50 p-5">
              <p className="product-card-title text-amber-900">
                Showing Local Products
              </p>
              <p className="mt-2 text-[13px] leading-[20px] text-amber-900/75">
                WooCommerce API is not available right now. Local template
                products are being used as fallback.
              </p>
            </div>
          </div>
        </section>
      ) : null}

      <ShopProductGrid products={filteredProducts} title="All Fragrances" />

      <CategoryUniverseBanner />

      <ProductRail
        eyebrow="Customer Favorites"
        title="Top Selling"
        description="Best-loved perfumes with strong identity, long-lasting impression and premium inspired profiles."
        products={railTopSelling}
      />

      <ProductRail
        eyebrow="Fresh From The House"
        title="New Arrivals"
        description="Recently added fragrances created for modern scent lovers."
        products={railNewArrivals}
      />

      <Footer />
    </main>
  );
}