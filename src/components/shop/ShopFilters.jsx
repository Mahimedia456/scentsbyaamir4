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
  const inputClass =
    "h-11 border border-black/10 bg-black/[0.035] px-4 text-[13px] font-normal uppercase leading-[19px] tracking-[0.4px] text-black outline-none transition placeholder:text-black/35 focus:border-black";

  return (
    <section className="sticky top-[var(--header-height)] z-30 border-b border-black/10 bg-white text-black">
      <div className="site-container grid gap-4 py-4 lg:grid-cols-[1.35fr_1fr_1fr_1fr]">
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search Fragrance"
          className={inputClass}
        />

        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className={inputClass}
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
          className={inputClass}
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
          className={inputClass}
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