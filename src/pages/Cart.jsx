import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { products } from "../data/product";

const cartItems = [
  { ...products[0], qty: 1, size: "50ml" },
  { ...products[2], qty: 1, size: "50ml" },
  { ...products[7], qty: 2, size: "30ml" },
];

export default function Cart() {
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  const discount = subtotal > 8000 ? 500 : 0;
  const delivery = subtotal > 5000 ? 0 : 250;
  const grandTotal = subtotal - discount + delivery;

  return (
    <main className="min-h-screen bg-white text-black">
      <Header variant="white" />

      <section className="bg-white text-black">
        <div className="site-container py-16 md:py-24">
          <p className="mb-4 font-heading text-xl uppercase tracking-wideLuxury text-brand-primary">
            Your Selection
          </p>

          <h1 className="heading-section">Shopping Cart</h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-black/60">
            Review your fragrance order before checkout.
          </p>
        </div>
      </section>

      <section className="bg-white text-black">
        <div className="site-container grid gap-10 pb-16 lg:grid-cols-12 md:pb-24">
          <div className="lg:col-span-8">
            <div className="border border-black/10">
              {cartItems.map((item) => (
                <div
                  key={`${item.id}-${item.size}`}
                  className="grid gap-5 border-b border-black/10 p-5 last:border-b-0 md:grid-cols-[150px_1fr_auto]"
                >
                  <Link
                    to={`/product/${item.slug}`}
                    className={`theme-${item.theme} product-card-bg relative h-[170px] overflow-hidden bg-black/[0.03]`}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="absolute inset-0 m-auto h-[82%] w-[82%] object-contain"
                    />
                  </Link>

                  <div>
                    <h2 className="font-heading text-[34px] uppercase leading-none tracking-wideLuxury">
                      {item.name}
                    </h2>

                    <p className="mt-2 text-sm text-black/55">
                      {item.inspiredBy}
                    </p>

                    <p className="mt-3 text-sm uppercase tracking-[0.12em] text-black/45">
                      Size: {item.size}
                    </p>

                    <div className="mt-5 flex h-11 w-32 items-center border border-black/15">
                      <button
                        type="button"
                        className="grid h-full w-11 place-items-center transition hover:bg-black hover:text-white"
                      >
                        <Minus size={16} />
                      </button>

                      <span className="flex-1 text-center font-heading text-[18px]">
                        {item.qty}
                      </span>

                      <button
                        type="button"
                        className="grid h-full w-11 place-items-center transition hover:bg-black hover:text-white"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start justify-between gap-5 md:block md:text-right">
                    <p className="font-heading text-[26px] uppercase tracking-wideLuxury">
                      Rs. {(item.price * item.qty).toLocaleString()}
                    </p>

                    <button
                      type="button"
                      className="mt-0 inline-flex items-center gap-2 text-sm uppercase tracking-[0.12em] text-black/45 transition hover:text-black md:mt-8"
                    >
                      <Trash2 size={16} />
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/shop" className="luxury-link mt-8 text-black">
              Continue Shopping
            </Link>
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-[calc(var(--header-height)+28px)] border border-black/10 bg-black/[0.03] p-6 md:p-8">
              <h2 className="font-heading text-[44px] uppercase leading-none tracking-wideLuxury">
                Order Summary
              </h2>

              <div className="mt-8 space-y-4 border-b border-black/10 pb-6 text-sm text-black/65">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>Rs. {subtotal.toLocaleString()}</span>
                </div>

                <div className="flex justify-between">
                  <span>Discount</span>
                  <span>- Rs. {discount.toLocaleString()}</span>
                </div>

                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span>{delivery === 0 ? "Free" : `Rs. ${delivery}`}</span>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <span className="font-heading text-[24px] uppercase tracking-wideLuxury">
                  Total
                </span>
                <span className="font-heading text-[32px] uppercase tracking-wideLuxury">
                  Rs. {grandTotal.toLocaleString()}
                </span>
              </div>

              <Link
                to="/checkout"
                className="luxury-btn-dark luxury-btn mt-8 w-full"
              >
                <ShoppingBag size={18} />
                Checkout
              </Link>

              <p className="mt-5 text-center text-xs leading-5 text-black/45">
                Delivery charges and discounts can be adjusted at checkout.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}