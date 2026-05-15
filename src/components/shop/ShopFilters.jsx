const categoryOptions = [
  { label: "All", value: "all" },
  { label: "Men", value: "men" },
  { label: "Women", value: "women" },
  { label: "Unisex", value: "unisex" },
  { label: "Tester Box", value: "tester" },
];

const moodOptions = [
  { label: "All Moods", value: "all" },
  { label: "Fresh", value: "fresh" },
  { label: "Oud", value: "oud" },
  { label: "Sweet", value: "sweet" },
  { label: "Floral", value: "floral" },
  { label: "Amber", value: "amber" },
];

const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "New Arrivals", value: "new" },
  { label: "Best Selling", value: "best" },
  { label: "Price Low To High", value: "price_low" },
  { label: "Price High To Low", value: "price_high" },
];

export default function ShopFilters({
  category,
  setCategory,
  mood,
  setMood,
  sort,
  setSort,
  search,
  setSearch,
}) {
  return (
    <section className="sticky top-[var(--header-height)] z-30 border-b border-black/10 bg-white text-black">
      <div className="site-container grid gap-4 py-5 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="SEARCH FRAGRANCE"
          className="h-12 border border-black/10 bg-black/[0.04] px-4 font-heading text-[17px] uppercase tracking-wideLuxury outline-none transition focus:border-black"
        />

        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="h-12 border border-black/10 bg-black/[0.04] px-4 font-heading text-[17px] uppercase tracking-wideLuxury outline-none transition focus:border-black"
        >
          {categoryOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <select
          value={mood}
          onChange={(event) => setMood(event.target.value)}
          className="h-12 border border-black/10 bg-black/[0.04] px-4 font-heading text-[17px] uppercase tracking-wideLuxury outline-none transition focus:border-black"
        >
          {moodOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <select
          value={sort}
          onChange={(event) => setSort(event.target.value)}
          className="h-12 border border-black/10 bg-black/[0.04] px-4 font-heading text-[17px] uppercase tracking-wideLuxury outline-none transition focus:border-black"
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
}