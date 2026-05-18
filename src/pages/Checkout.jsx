import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { products } from "../data/product";

const checkoutItems = [
  { ...products[0], qty: 1, size: "50ml" },
  { ...products[2], qty: 1, size: "50ml" },
];

const fieldClass =
  "h-11 border border-black/10 bg-black/[0.035] px-4 text-[13px] font-normal uppercase leading-[19px] tracking-[0.4px] text-black outline-none transition placeholder:text-black/35 focus:border-black";

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
        <div className="site-container py-12 md:py-16">
          <p className="mb-3 font-heading text-[13px] font-normal uppercase leading-[16px] tracking-[0.4px] text-brand-primary">
            Secure Checkout
          </p>

          <h1 className="luxury-section-title">Checkout</h1>

          <p className="mt-4 max-w-2xl text-[13px] leading-[20px] text-black/60">
            Enter your delivery details and confirm your order.
          </p>
        </div>
      </section>

      <form onSubmit={placeOrder} className="bg-white text-black">
        <div className="site-container grid gap-10 pb-14 lg:grid-cols-12 md:pb-20">
          <div className="space-y-7 lg:col-span-8">
            <section className="border border-black/10 p-6 md:p-8">
              <h2 className="product-card-title text-black">Contact Details</h2>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <input required placeholder="First Name*" className={fieldClass} />
                <input required placeholder="Last Name*" className={fieldClass} />
                <input required type="email" placeholder="Email*" className={fieldClass} />
                <input required placeholder="Phone / WhatsApp*" className={fieldClass} />
              </div>
            </section>

            <section className="border border-black/10 p-6 md:p-8">
              <h2 className="product-card-title text-black">Delivery Address</h2>

              <div className="mt-6 grid gap-4">
                <input required placeholder="Address*" className={fieldClass} />

                <div className="grid gap-4 md:grid-cols-3">
                  <input required placeholder="City*" className={fieldClass} />
                  <input placeholder="Area" className={fieldClass} />
                  <input placeholder="Postal Code" className={fieldClass} />
                </div>

                <textarea
                  rows={5}
                  placeholder="Order Note"
                  className="border border-black/10 bg-black/[0.035] px-4 py-4 text-[13px] font-normal uppercase leading-[19px] tracking-[0.4px] text-black outline-none transition placeholder:text-black/35 focus:border-black"
                />
              </div>
            </section>

            <section className="border border-black/10 p-6 md:p-8">
              <h2 className="product-card-title text-black">Payment Method</h2>

              <div className="mt-6 grid gap-3">
                <label className="flex items-center gap-3 border border-black/10 p-4">
                  <input type="radio" name="payment" defaultChecked />
                  <span className="product-card-title text-black">
                    Cash On Delivery
                  </span>
                </label>

                <label className="flex items-center gap-3 border border-black/10 p-4 opacity-50">
                  <input type="radio" name="payment" disabled />
                  <span className="product-card-title text-black">
                    Bank Transfer Coming Soon
                  </span>
                </label>
              </div>
            </section>
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-[calc(var(--header-height)+24px)] border border-black/10 bg-black/[0.03] p-6 md:p-8">
              <h2 className="luxury-section-title">Your Order</h2>

              <div className="mt-7 space-y-5">
                {checkoutItems.map((item) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-[76px_1fr] gap-4 border-b border-black/10 pb-5"
                  >
                    <div className={`theme-${item.theme} product-card-bg relative h-24 overflow-hidden`}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </div>

                    <div>
                      <h3 className="product-card-title text-black">
                        {item.name}
                      </h3>

                      <p className="mt-2 product-card-desc text-black/50">
                        {item.size} × {item.qty}
                      </p>

                      <p className="mt-2 product-card-price text-black">
                        Rs. {(item.price * item.qty).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-4 border-b border-black/10 pb-6 text-[13px] leading-[20px] text-black/65">
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
                <span className="product-card-title text-black">Total</span>
                <span className="product-card-price text-black">
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