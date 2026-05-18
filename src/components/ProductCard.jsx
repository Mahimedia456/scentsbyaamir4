import { Link } from "react-router-dom";
import { Heart, ShoppingBag } from "lucide-react";

export default function ProductCard({ product }) {
  const sizes = product.sizes || ["30 ml", "50 ml", "100 ml"];

  return (
    <article className={`product-card group bg-white text-black theme-${product.theme}`}>
      <div className="relative">
        <Link to={`/product/${product.slug}`} className="block">
          <div className="product-card-media relative min-h-[430px] overflow-hidden bg-[#f3f3f3] md:min-h-[520px]">
            <div className="absolute left-5 top-5 z-20 flex flex-col items-start gap-2">
              {product.badge && (
                <span className="bg-white px-3 py-1 product-badge-text text-black shadow-sm">
                  {product.badge}
                </span>
              )}

              {product.badge?.toLowerCase() !== "new" && (
                <span className="bg-white px-3 py-1 product-badge-text text-black shadow-sm">
                  New
                </span>
              )}
            </div>

            <img
              src={product.image}
              alt={product.name}
              className="product-image-transition product-main-image absolute inset-0 h-full w-full object-cover"
            />

            <img
              src={product.hoverImage || product.image}
              alt={`${product.name} hover`}
              className="product-image-transition product-hover-image absolute inset-0 h-full w-full object-cover opacity-0"
            />

            <div className="product-hover-shade absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100" />

            <div className="product-hover-details absolute inset-x-0 bottom-0 z-30 translate-y-6 bg-white px-5 py-5 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <h3 className="product-card-title text-black">
                {product.name}
              </h3>

              <p className="mt-4 product-card-desc text-black/58">
                {product.family || product.inspiredBy}
              </p>

              <div className="mt-4 flex flex-wrap gap-4 product-card-desc text-black/58">
                {sizes.map((size) => (
                  <span key={size}>{size}</span>
                ))}
              </div>

              <div className="mt-5 grid grid-cols-[1fr_48px] gap-2">
                <button
                  type="button"
                  className="flex h-12 items-center justify-center gap-2 bg-black px-4 product-action-text text-white transition hover:bg-brand-primary hover:text-black"
                  onClick={(event) => event.preventDefault()}
                >
                  <ShoppingBag size={16} strokeWidth={1.7} />
                  Add To Cart
                </button>

                <button
                  type="button"
                  className="grid h-12 place-items-center border border-black/15 bg-white text-black transition hover:bg-black hover:text-white"
                  aria-label="Wishlist"
                  onClick={(event) => event.preventDefault()}
                >
                  <Heart size={18} strokeWidth={1.7} />
                </button>
              </div>
            </div>
          </div>
        </Link>

        <div className="min-h-[104px] border-b border-black/10 bg-white px-5 py-5">
          <Link to={`/product/${product.slug}`}>
            <h3 className="product-card-title text-black transition group-hover:text-black/70">
              {product.name}
            </h3>
          </Link>

          <p className="mt-2 min-h-[18px] product-card-desc text-black/50">
            {product.inspiredBy}
          </p>

          <div className="mt-3 flex items-center gap-3">
            <span className="product-card-price text-black">
              Rs. {product.price?.toLocaleString()}
            </span>

            {product.oldPrice && (
              <span className="text-[12px] font-normal text-black/35 line-through">
                Rs. {product.oldPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}