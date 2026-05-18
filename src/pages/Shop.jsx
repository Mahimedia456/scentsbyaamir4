import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ShopHero from "../components/shop/ShopHero";
import ShopFilters from "../components/shop/ShopFilters";
import ShopProductGrid from "../components/shop/ShopProductGrid";
import CategoryUniverseBanner from "../components/shop/CategoryUniverseBanner";
import ProductRail from "../components/ProductRail";
import { newArrivalProducts, products, topSellingProducts } from "../data/product";

function productMatchesMood(product, mood) {
  if (mood === "all") return true;

  const text = [
    product.family,
    product.shortDescription,
    ...(product.notes?.top || []),
    ...(product.notes?.heart || []),
    ...(product.notes?.base || []),
  ]
    .join(" ")
    .toLowerCase();

  if (mood === "oud") {
    return text.includes("oud") || text.includes("smoke") || text.includes("incense");
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
    return text.includes("amber") || text.includes("ambergris") || text.includes("amberwood");
  }

  return true;
}

function sortProducts(items, sort) {
  const result = [...items];

  if (sort === "price_low") {
    return result.sort((a, b) => a.price - b.price);
  }

  if (sort === "price_high") {
    return result.sort((a, b) => b.price - a.price);
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

  const filteredProducts = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    const filtered = products.filter((product) => {
      const categoryMatch =
        category === "all" ||
        product.category === category ||
        (category === "tester" && product.category === "tester");

      const moodMatch = productMatchesMood(product, mood);

      const searchMatch =
        !normalizedSearch ||
        product.name.toLowerCase().includes(normalizedSearch) ||
        product.inspiredBy.toLowerCase().includes(normalizedSearch) ||
        product.family.toLowerCase().includes(normalizedSearch);

      return categoryMatch && moodMatch && searchMatch;
    });

    return sortProducts(filtered, sort);
  }, [category, mood, search, sort]);

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

      <ShopProductGrid products={filteredProducts} title="All Fragrances" />

      <CategoryUniverseBanner />

      <ProductRail
        eyebrow="Customer Favorites"
        title="Top Selling"
        description="Best-loved perfumes with strong identity, long-lasting impression and premium inspired profiles."
        products={topSellingProducts.slice(0, 8)}
      />

      <ProductRail
        eyebrow="Fresh From The House"
        title="New Arrivals"
        description="Recently added fragrances created for modern scent lovers."
        products={newArrivalProducts.slice(0, 8)}
      />

      <Footer />
    </main>
  );
}