import ProductCard from "../ProductCard";

export default function ShopProductGrid({ products = [], title = "Fragrances" }) {
  return (
    <section className="bg-white text-black">
      <div className="site-container py-12 md:py-16">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="luxury-section-title">{title}</h2>

            <p className="mt-3 text-[13px] leading-[20px] text-black/55">
              {products.length} fragrance{products.length === 1 ? "" : "s"} found
            </p>
          </div>
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex min-h-[320px] items-center justify-center border border-black/10 bg-black/[0.03] text-center">
            <div>
              <h3 className="luxury-section-title">No Fragrance Found</h3>

              <p className="mt-3 text-[13px] leading-[20px] text-black/55">
                Try changing category, mood or search keyword.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}