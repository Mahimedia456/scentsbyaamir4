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

  const steps = [
    {
      title: "Confirmation Call",
      text: "We may contact you on WhatsApp or phone to confirm your order details.",
      icon: Phone,
    },
    {
      title: "Packing",
      text: "Your fragrance will be prepared and packed carefully.",
      icon: Package,
    },
    {
      title: "Delivery",
      text: "You will receive your parcel according to courier delivery timing.",
      icon: Truck,
    },
  ];

  return (
    <main className="min-h-screen bg-white text-black">
      <Header variant="white" />

      <section className="relative overflow-hidden bg-black text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,var(--color-glow),transparent_34%)]" />

        <div className="site-container relative z-10 flex min-h-[460px] items-center justify-center py-16 text-center md:min-h-[520px]">
          <div className="max-w-4xl">
            <div className="mx-auto mb-7 grid h-16 w-16 place-items-center rounded-full border border-white/20 bg-white/10">
              <CheckCircle2 size={34} className="text-brand-primary" />
            </div>

            <p className="mb-3 font-heading text-[13px] font-normal uppercase leading-[16px] tracking-[0.4px] text-brand-primary">
              Thank You
            </p>

            <h1 className="home-hero-title">Order Received</h1>

            <p className="mx-auto mt-4 max-w-2xl text-[13px] leading-[20px] text-white/70">
              Your order has been placed successfully. Our team will contact you
              for confirmation.
            </p>

            <p className="mt-6 product-card-title text-white">
              Order No: {orderNo}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white text-black">
        <div className="site-container grid gap-10 py-12 lg:grid-cols-12 md:py-16">
          <div className="lg:col-span-8">
            <h2 className="luxury-section-title">Order Summary</h2>

            <div className="mt-8 border border-black/10">
              {orderItems.map((item) => (
                <div
                  key={item.id}
                  className="grid gap-5 border-b border-black/10 p-5 last:border-b-0 md:grid-cols-[130px_1fr_auto]"
                >
                  <div className={`theme-${item.theme} product-card-bg relative h-[140px] overflow-hidden`}>
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

                    <p className="mt-2 product-card-desc text-black/55">
                      {item.inspiredBy}
                    </p>

                    <p className="mt-3 product-card-desc uppercase text-black/45">
                      {item.size} × {item.qty}
                    </p>
                  </div>

                  <p className="product-card-price text-black md:text-right">
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
              <h2 className="luxury-section-title">Next Steps</h2>

              <div className="mt-7 space-y-6">
                {steps.map((step) => {
                  const Icon = step.icon;

                  return (
                    <div key={step.title} className="flex gap-4">
                      <Icon className="mt-1 shrink-0" size={20} strokeWidth={1.5} />

                      <div>
                        <h3 className="product-card-title text-black">
                          {step.title}
                        </h3>

                        <p className="mt-2 text-[13px] leading-[20px] text-black/60">
                          {step.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 border-t border-black/10 pt-6">
                <div className="flex justify-between text-[13px] leading-[20px] text-black/60">
                  <span>Subtotal</span>
                  <span>Rs. {subtotal.toLocaleString()}</span>
                </div>

                <div className="mt-4 flex justify-between">
                  <span className="product-card-title text-black">Total</span>
                  <span className="product-card-price text-black">
                    Rs. {subtotal.toLocaleString()}
                  </span>
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