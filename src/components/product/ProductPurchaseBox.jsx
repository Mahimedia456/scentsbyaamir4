import { Minus, Plus, Heart, ShoppingBag, Truck, ShieldCheck, RotateCcw } from "lucide-react";
import { useState } from "react";

export default function ProductPurchaseBox({ product }) {
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("50ml");

  return (
    <aside className="bg-white text-black">
      <div className="sticky top-[calc(var(--header-height)+28px)] border border-black/10 p-6 md:p-8">
        {product.badge && (
          <span className="mb-5 inline-flex bg-black px-3 py-1 font-heading text-[15px] uppercase tracking-wideLuxury text-white">
            {product.badge}
          </span>
        )}

        <h1 className="font-heading text-[54px] uppercase leading-[0.9] tracking-wideLuxury md:text-[72px]">
          {product.name}
        </h1>

        <p className="mt-4 text-base tracking-[0.04em] text-black/55">
          {product.inspiredBy}
        </p>

        <p className="mt-5 text-sm uppercase tracking-[0.16em] text-black/45">
          {product.family}
        </p>

        <div className="mt-7 flex items-center gap-4">
          <span className="font-heading text-[34px] uppercase tracking-wideLuxury">
            Rs. {product.price?.toLocaleString()}
          </span>

          {product.oldPrice && (
            <span className="text-base text-black/40 line-through">
              Rs. {product.oldPrice.toLocaleString()}
            </span>
          )}
        </div>

        <p className="mt-6 text-base leading-7 text-black/65">
          {product.shortDescription}
        </p>

        <div className="mt-8">
          <p className="mb-3 font-heading text-[18px] uppercase tracking-wideLuxury">
            Size
          </p>

          <div className="grid grid-cols-3 gap-3">
            {["30ml", "50ml", "100ml"].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setSize(item)}
                className={`h-12 border font-heading text-[17px] uppercase tracking-wideLuxury transition ${
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
          <p className="mb-3 font-heading text-[18px] uppercase tracking-wideLuxury">
            Quantity
          </p>

          <div className="flex h-12 w-36 items-center border border-black/15">
            <button
              type="button"
              onClick={() => setQty((value) => Math.max(1, value - 1))}
              className="grid h-full w-12 place-items-center transition hover:bg-black hover:text-white"
              aria-label="Decrease quantity"
            >
              <Minus size={17} />
            </button>

            <span className="flex-1 text-center font-heading text-[18px]">
              {qty}
            </span>

            <button
              type="button"
              onClick={() => setQty((value) => value + 1)}
              className="grid h-full w-12 place-items-center transition hover:bg-black hover:text-white"
              aria-label="Increase quantity"
            >
              <Plus size={17} />
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-3">
          <button
            type="button"
            className="luxury-btn-dark luxury-btn w-full"
          >
            <ShoppingBag size={18} />
            Add To Cart
          </button>

          <button
            type="button"
            className="luxury-btn w-full text-black"
          >
            Buy Now
          </button>

          <button
            type="button"
            className="flex h-12 items-center justify-center gap-2 border border-black/10 font-heading text-[17px] uppercase tracking-wideLuxury transition hover:border-black"
          >
            <Heart size={18} />
            Add To Wishlist
          </button>
        </div>

        <div className="mt-8 grid gap-4 border-t border-black/10 pt-7 text-sm text-black/62">
          <div className="flex items-start gap-3">
            <Truck className="mt-0.5 shrink-0" size={19} strokeWidth={1.7} />
            <p>Fast delivery available across Pakistan.</p>
          </div>

          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-0.5 shrink-0" size={19} strokeWidth={1.7} />
            <p>Premium inspired fragrance with quality presentation.</p>
          </div>

          <div className="flex items-start gap-3">
            <RotateCcw className="mt-0.5 shrink-0" size={19} strokeWidth={1.7} />
            <p>Easy support for order issues and delivery concerns.</p>
          </div>
        </div>
      </div>
    </aside>
  );
}