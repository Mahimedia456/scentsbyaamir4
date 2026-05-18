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
        <div className="site-container py-12 md:py-16">
          <p className="mb-3 font-heading text-[13px] font-normal uppercase leading-[16px] tracking-[0.4px] text-brand-primary">
            Your Selection
          </p>

          <h1 className="luxury-section-title">Shopping Cart</h1>

          <p className="mt-4 max-w-2xl text-[13px] leading-[20px] text-black/60">
            Review your fragrance order before checkout.
          </p>
        </div>
      </section>

      <section className="bg-white text-black">
        <div className="site-container grid gap-10 pb-14 lg:grid-cols-12 md:pb-20">
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
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </Link>

                  <div>
                    <h2 className="product-card-title text-black">{item.name}</h2>

                    <p className="mt-2 product-card-desc text-black/55">
                      {item.inspiredBy}
                    </p>

                    <p className="mt-3 product-card-desc uppercase text-black/45">
                      Size: {item.size}
                    </p>

                    <div className="mt-5 flex h-10 w-28 items-center border border-black/15">
                      <button
                        type="button"
                        className="grid h-full w-10 place-items-center transition hover:bg-black hover:text-white"
                      >
                        <Minus size={15} />
                      </button>

                      <span className="flex-1 text-center product-card-price">
                        {item.qty}
                      </span>

                      <button
                        type="button"
                        className="grid h-full w-10 place-items-center transition hover:bg-black hover:text-white"
                      >
                        <Plus size={15} />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start justify-between gap-5 md:block md:text-right">
                    <p className="product-card-price text-black">
                      Rs. {(item.price * item.qty).toLocaleString()}
                    </p>

                    <button
                      type="button"
                      className="mt-0 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.4px] text-black/45 transition hover:text-black md:mt-8"
                    >
                      <Trash2 size={15} />
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
            <div className="sticky top-[calc(var(--header-height)+24px)] border border-black/10 bg-black/[0.03] p-6 md:p-8">
              <h2 className="luxury-section-title">Order Summary</h2>

              <div className="mt-7 space-y-4 border-b border-black/10 pb-6 text-[13px] leading-[20px] text-black/65">
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
                <span className="product-card-title">Total</span>
                <span className="product-card-price">
                  Rs. {grandTotal.toLocaleString()}
                </span>
              </div>

              <Link
                to="/checkout"
                className="luxury-btn-dark luxury-btn mt-8 w-full"
              >
                <ShoppingBag size={16} />
                Checkout
              </Link>

              <p className="mt-5 text-center text-[12px] leading-[20px] text-black/45">
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