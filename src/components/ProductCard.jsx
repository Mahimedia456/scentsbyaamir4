import { Link } from "react-router-dom";
import { Heart, ShoppingBag } from "lucide-react";

export default function ProductCard({ product }) {
  return (
    <article className={`product-card group bg-white text-black theme-${product.theme}`}>
      <Link to={`/product/${product.slug}`} className="block">
        <div className="product-card-bg relative min-h-[430px] overflow-hidden border border-black/5 md:min-h-[520px]">
          <div className="absolute left-5 top-5 z-10 flex flex-col items-start gap-2">
            {product.badge && (
              <span className="bg-white px-3 py-1 font-heading text-[14px] uppercase tracking-wideLuxury text-black">
                {product.badge}
              </span>
            )}
            <span className="bg-white px-3 py-1 font-heading text-[14px] uppercase tracking-wideLuxury text-black/70">
              {product.category}
            </span>
          </div>

          <img
            src={product.image}
            alt={product.name}
            className="product-image-transition product-main-image absolute inset-0 m-auto h-[72%] w-[72%] object-contain"
          />

          <img
            src={product.hoverImage || product.image}
            alt={`${product.name} hover`}
            className="product-image-transition product-hover-image absolute inset-0 m-auto h-[76%] w-[76%] object-contain opacity-0"
          />

          <div className="product-quick-actions absolute bottom-5 left-5 right-5 z-20 flex translate-y-4 items-center gap-3 opacity-0 transition duration-500">
            <button
              type="button"
              className="flex h-12 flex-1 items-center justify-center gap-2 bg-black px-4 font-heading text-[16px] uppercase tracking-wideLuxury text-white transition hover:bg-brand-primary hover:text-black"
            >
              <ShoppingBag size={18} strokeWidth={1.7} />
              Add
            </button>

            <button
              type="button"
              className="grid h-12 w-12 place-items-center bg-white text-black shadow transition hover:bg-black hover:text-white"
              aria-label="Wishlist"
            >
              <Heart size={19} strokeWidth={1.7} />
            </button>
          </div>
        </div>

        <div className="border-b border-black/10 px-4 py-5">
          <h3 className="font-heading text-[23px] uppercase leading-none tracking-wideLuxury">
            {product.name}
          </h3>

          <p className="mt-2 min-h-[22px] text-sm tracking-[0.04em] text-black/55">
            {product.inspiredBy}
          </p>

          <div className="mt-4 flex items-center gap-3">
            <span className="font-heading text-[20px] uppercase tracking-wideLuxury">
              Rs. {product.price?.toLocaleString()}
            </span>

            {product.oldPrice && (
              <span className="text-sm text-black/40 line-through">
                Rs. {product.oldPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>
      </Link>
    </article>
  );
}