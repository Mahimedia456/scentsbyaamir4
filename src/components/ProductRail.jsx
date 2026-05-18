import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

export default function ProductRail({
  eyebrow,
  title,
  description,
  products = [],
  dark = false,
  seeAllTo = "/shop",
}) {
  if (!products.length) {
    return null;
  }

  return (
    <section className={dark ? "bg-black text-white" : "bg-white text-black"}>
      <div className="site-container py-12 md:py-16">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            {eyebrow ? (
              <p className="mb-3 font-heading text-[13px] font-normal uppercase leading-[16px] tracking-[0.4px] text-brand-primary">
                {eyebrow}
              </p>
            ) : null}

            <h2 className="luxury-section-title">{title}</h2>

            {description ? (
              <p
                className={`mt-3 max-w-2xl text-[13px] leading-[20px] ${
                  dark ? "text-white/62" : "text-black/58"
                }`}
              >
                {description}
              </p>
            ) : null}
          </div>

          <Link
            to={seeAllTo}
            className={`luxury-link shrink-0 ${
              dark ? "text-white" : "text-black"
            }`}
          >
            See All
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id || product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}