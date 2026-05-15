import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { products } from "../data/product";

const checkoutItems = [
  { ...products[0], qty: 1, size: "50ml" },
  { ...products[2], qty: 1, size: "50ml" },
];

export default function Checkout() {
  const navigate = useNavigate();

  const subtotal = checkoutItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );
  const delivery = subtotal > 5000 ? 0 : 250;
  const grandTotal = subtotal + delivery;

  function placeOrder(event) {
    event.preventDefault();
    navigate("/order-received?order=SBA-1027");
  }

  return (
    <main className="min-h-screen bg-white text-black">
      <Header variant="white" />

      <section className="bg-white text-black">
        <div className="site-container py-16 md:py-24">
          <p className="mb-4 font-heading text-xl uppercase tracking-wideLuxury text-brand-primary">
            Secure Checkout
          </p>

          <h1 className="heading-section">Checkout</h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-black/60">
            Enter your delivery details and confirm your order.
          </p>
        </div>
      </section>

      <form onSubmit={placeOrder} className="bg-white text-black">
        <div className="site-container grid gap-10 pb-16 lg:grid-cols-12 md:pb-24">
          <div className="space-y-8 lg:col-span-8">
            <section className="border border-black/10 p-6 md:p-8">
              <h2 className="font-heading text-[42px] uppercase tracking-wideLuxury">
                Contact Details
              </h2>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <input
                  required
                  placeholder="FIRST NAME*"
                  className="h-14 border border-black/10 bg-black/[0.04] px-4 text-sm uppercase tracking-[0.08em] outline-none focus:border-black"
                />

                <input
                  required
                  placeholder="LAST NAME*"
                  className="h-14 border border-black/10 bg-black/[0.04] px-4 text-sm uppercase tracking-[0.08em] outline-none focus:border-black"
                />

                <input
                  required
                  type="email"
                  placeholder="EMAIL*"
                  className="h-14 border border-black/10 bg-black/[0.04] px-4 text-sm uppercase tracking-[0.08em] outline-none focus:border-black"
                />

                <input
                  required
                  placeholder="PHONE / WHATSAPP*"
                  className="h-14 border border-black/10 bg-black/[0.04] px-4 text-sm uppercase tracking-[0.08em] outline-none focus:border-black"
                />
              </div>
            </section>

            <section className="border border-black/10 p-6 md:p-8">
              <h2 className="font-heading text-[42px] uppercase tracking-wideLuxury">
                Delivery Address
              </h2>

              <div className="mt-6 grid gap-4">
                <input
                  required
                  placeholder="ADDRESS*"
                  className="h-14 border border-black/10 bg-black/[0.04] px-4 text-sm uppercase tracking-[0.08em] outline-none focus:border-black"
                />

                <div className="grid gap-4 md:grid-cols-3">
                  <input
                    required
                    placeholder="CITY*"
                    className="h-14 border border-black/10 bg-black/[0.04] px-4 text-sm uppercase tracking-[0.08em] outline-none focus:border-black"
                  />

                  <input
                    placeholder="AREA"
                    className="h-14 border border-black/10 bg-black/[0.04] px-4 text-sm uppercase tracking-[0.08em] outline-none focus:border-black"
                  />

                  <input
                    placeholder="POSTAL CODE"
                    className="h-14 border border-black/10 bg-black/[0.04] px-4 text-sm uppercase tracking-[0.08em] outline-none focus:border-black"
                  />
                </div>

                <textarea
                  rows={5}
                  placeholder="ORDER NOTE"
                  className="border border-black/10 bg-black/[0.04] px-4 py-4 text-sm uppercase tracking-[0.08em] outline-none focus:border-black"
                />
              </div>
            </section>

            <section className="border border-black/10 p-6 md:p-8">
              <h2 className="font-heading text-[42px] uppercase tracking-wideLuxury">
                Payment Method
              </h2>

              <div className="mt-6 grid gap-3">
                <label className="flex items-center gap-3 border border-black/10 p-4">
                  <input type="radio" name="payment" defaultChecked />
                  <span className="font-heading text-[18px] uppercase tracking-wideLuxury">
                    Cash On Delivery
                  </span>
                </label>

                <label className="flex items-center gap-3 border border-black/10 p-4 opacity-60">
                  <input type="radio" name="payment" disabled />
                  <span className="font-heading text-[18px] uppercase tracking-wideLuxury">
                    Bank Transfer Coming Soon
                  </span>
                </label>
              </div>
            </section>
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-[calc(var(--header-height)+28px)] border border-black/10 bg-black/[0.03] p-6 md:p-8">
              <h2 className="font-heading text-[44px] uppercase leading-none tracking-wideLuxury">
                Your Order
              </h2>

              <div className="mt-7 space-y-5">
                {checkoutItems.map((item) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-[76px_1fr] gap-4 border-b border-black/10 pb-5"
                  >
                    <div className={`theme-${item.theme} product-card-bg relative h-24`}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="absolute inset-0 m-auto h-[82%] w-[82%] object-contain"
                      />
                    </div>

                    <div>
                      <h3 className="font-heading text-[22px] uppercase leading-none tracking-wideLuxury">
                        {item.name}
                      </h3>
                      <p className="mt-2 text-xs text-black/50">
                        {item.size} × {item.qty}
                      </p>
                      <p className="mt-2 font-heading text-[18px] uppercase tracking-wideLuxury">
                        Rs. {(item.price * item.qty).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-4 border-b border-black/10 pb-6 text-sm text-black/65">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>Rs. {subtotal.toLocaleString()}</span>
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

              <button
                type="submit"
                className="luxury-btn-dark luxury-btn mt-8 w-full"
              >
                Place Order
              </button>

              <Link to="/cart" className="luxury-link mt-6 text-black">
                Back To Cart
              </Link>
            </div>
          </aside>
        </div>
      </form>

      <Footer />
    </main>
  );
}