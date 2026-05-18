import {
  Minus,
  Plus,
  Heart,
  ShoppingBag,
  Truck,
  ShieldCheck,
  RotateCcw,
} from "lucide-react";
import { useState } from "react";

export default function ProductPurchaseBox({ product }) {
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("50ml");

  return (
    <aside className="bg-white text-black">
      <div className="sticky top-[calc(var(--header-height)+24px)] border border-black/10 p-6 md:p-8">
        {product.badge && (
          <span className="mb-5 inline-flex bg-black px-3 py-1 product-badge-text text-white">
            {product.badge}
          </span>
        )}

        <h1 className="luxury-section-title">{product.name}</h1>

        <p className="mt-4 product-card-desc text-black/55">
          {product.inspiredBy}
        </p>

        <p className="mt-3 product-card-desc uppercase text-black/45">
          {product.family}
        </p>

        <div className="mt-6 flex items-center gap-4">
          <span className="product-card-price text-black">
            Rs. {product.price?.toLocaleString()}
          </span>

          {product.oldPrice && (
            <span className="text-[12px] text-black/38 line-through">
              Rs. {product.oldPrice.toLocaleString()}
            </span>
          )}
        </div>

        <p className="mt-5 text-[13px] leading-[22px] text-black/65">
          {product.shortDescription}
        </p>

        <div className="mt-7">
          <p className="mb-3 product-card-title text-black">Size</p>

          <div className="grid grid-cols-3 gap-2">
            {["30ml", "50ml", "100ml"].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setSize(item)}
                className={`h-10 border product-action-text transition ${
                  size === item
                    ? "border-black bg-black text-white"
                    : "border-black/15 bg-white text-black hover:border-black"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-7">
          <p className="mb-3 product-card-title text-black">Quantity</p>

          <div className="flex h-10 w-32 items-center border border-black/15">
            <button
              type="button"
              onClick={() => setQty((value) => Math.max(1, value - 1))}
              className="grid h-full w-10 place-items-center transition hover:bg-black hover:text-white"
              aria-label="Decrease quantity"
            >
              <Minus size={15} />
            </button>

            <span className="flex-1 text-center product-card-price">{qty}</span>

            <button
              type="button"
              onClick={() => setQty((value) => value + 1)}
              className="grid h-full w-10 place-items-center transition hover:bg-black hover:text-white"
              aria-label="Increase quantity"
            >
              <Plus size={15} />
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-3">
          <button type="button" className="luxury-btn-dark luxury-btn w-full">
            <ShoppingBag size={16} />
            Add To Cart
          </button>

          <button type="button" className="luxury-btn w-full text-black">
            Buy Now
          </button>

          <button
            type="button"
            className="flex h-11 items-center justify-center gap-2 border border-black/10 product-action-text transition hover:border-black"
          >
            <Heart size={16} />
            Add To Wishlist
          </button>
        </div>

        <div className="mt-8 grid gap-4 border-t border-black/10 pt-7 text-[13px] leading-[20px] text-black/62">
          <div className="flex items-start gap-3">
            <Truck className="mt-0.5 shrink-0" size={18} strokeWidth={1.6} />
            <p>Fast delivery available across Pakistan.</p>
          </div>

          <div className="flex items-start gap-3">
            <ShieldCheck
              className="mt-0.5 shrink-0"
              size={18}
              strokeWidth={1.6}
            />
            <p>Premium inspired fragrance with quality presentation.</p>
          </div>

          <div className="flex items-start gap-3">
            <RotateCcw
              className="mt-0.5 shrink-0"
              size={18}
              strokeWidth={1.6}
            />
            <p>Easy support for order issues and delivery concerns.</p>
          </div>
        </div>
      </div>
    </aside>
  );
}