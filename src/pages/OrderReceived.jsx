import { Link, useSearchParams } from "react-router-dom";
import { CheckCircle2, Package, Phone, Truck } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { products } from "../data/product";

const orderItems = [
  { ...products[0], qty: 1, size: "50ml" },
  { ...products[2], qty: 1, size: "50ml" },
];

export default function OrderReceived() {
  const [searchParams] = useSearchParams();
  const orderNo = searchParams.get("order") || "SBA-1027";

  const subtotal = orderItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <main className="min-h-screen bg-white text-black">
      <Header variant="white" />

      <section className="relative overflow-hidden bg-black text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,var(--color-glow),transparent_34%)]" />

        <div className="site-container relative z-10 flex min-h-[520px] items-center justify-center py-20 text-center">
          <div className="max-w-4xl">
            <div className="mx-auto mb-8 grid h-20 w-20 place-items-center rounded-full border border-white/20 bg-white/10">
              <CheckCircle2 size={44} className="text-brand-primary" />
            </div>

            <p className="mb-4 font-heading text-xl uppercase tracking-wideLuxury text-brand-primary">
              Thank You
            </p>

            <h1 className="heading-hero">Order Received</h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/70 md:text-xl">
              Your order has been placed successfully. Our team will contact you
              for confirmation.
            </p>

            <p className="mt-7 font-heading text-[30px] uppercase tracking-wideLuxury">
              Order No: {orderNo}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white text-black">
        <div className="site-container grid gap-10 py-16 lg:grid-cols-12 md:py-24">
          <div className="lg:col-span-8">
            <h2 className="heading-section">Order Summary</h2>

            <div className="mt-8 border border-black/10">
              {orderItems.map((item) => (
                <div
                  key={item.id}
                  className="grid gap-5 border-b border-black/10 p-5 last:border-b-0 md:grid-cols-[130px_1fr_auto]"
                >
                  <div className={`theme-${item.theme} product-card-bg relative h-[140px]`}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="absolute inset-0 m-auto h-[82%] w-[82%] object-contain"
                    />
                  </div>

                  <div>
                    <h3 className="font-heading text-[32px] uppercase leading-none tracking-wideLuxury">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-sm text-black/55">
                      {item.inspiredBy}
                    </p>
                    <p className="mt-3 text-sm uppercase tracking-[0.12em] text-black/45">
                      {item.size} × {item.qty}
                    </p>
                  </div>

                  <p className="font-heading text-[26px] uppercase tracking-wideLuxury md:text-right">
                    Rs. {(item.price * item.qty).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/shop" className="luxury-btn-dark luxury-btn">
                Continue Shopping
              </Link>

              <Link to="/order-tracking" className="luxury-btn text-black">
                Track Order
              </Link>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="border border-black/10 bg-black/[0.03] p-6 md:p-8">
              <h2 className="font-heading text-[44px] uppercase leading-none tracking-wideLuxury">
                Next Steps
              </h2>

              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <Phone className="mt-1 shrink-0" size={22} />
                  <div>
                    <h3 className="font-heading text-[22px] uppercase tracking-wideLuxury">
                      Confirmation Call
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/60">
                      We may contact you on WhatsApp or phone to confirm your
                      order details.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Package className="mt-1 shrink-0" size={22} />
                  <div>
                    <h3 className="font-heading text-[22px] uppercase tracking-wideLuxury">
                      Packing
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/60">
                      Your fragrance will be prepared and packed carefully.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Truck className="mt-1 shrink-0" size={22} />
                  <div>
                    <h3 className="font-heading text-[22px] uppercase tracking-wideLuxury">
                      Delivery
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/60">
                      You will receive your parcel according to courier delivery
                      timing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-black/10 pt-6">
                <div className="flex justify-between text-sm text-black/60">
                  <span>Subtotal</span>
                  <span>Rs. {subtotal.toLocaleString()}</span>
                </div>

                <div className="mt-4 flex justify-between font-heading text-[28px] uppercase tracking-wideLuxury">
                  <span>Total</span>
                  <span>Rs. {subtotal.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}