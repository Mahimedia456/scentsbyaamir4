import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

export default function ProductRail({
  eyebrow,
  title,
  description,
  products = [],
  dark = false,
}) {
  return (
    <section className={dark ? "bg-black text-white" : "bg-white text-black"}>
      <div className="site-container section-padding">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            {eyebrow && (
              <p className="mb-3 font-heading text-lg uppercase tracking-wideLuxury text-brand-primary">
                {eyebrow}
              </p>
            )}

            <h2 className="heading-section">
              {title}
            </h2>

            {description && (
              <p className={`mt-5 max-w-2xl text-base leading-7 ${dark ? "text-white/65" : "text-black/60"}`}>
                {description}
              </p>
            )}
          </div>

          <Link
            to="/shop"
            className={`luxury-link shrink-0 ${dark ? "text-white" : "text-black"}`}
          >
            See All
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}