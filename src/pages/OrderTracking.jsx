import { useState } from "react";
import InfoPageLayout from "../components/info/InfoPageLayout";

export default function OrderTracking() {
  const [form, setForm] = useState({
    orderNumber: "",
    email: "",
  });

  const [message, setMessage] = useState("");

  function updateField(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setMessage("Order tracking API will be connected after backend setup.");
  }

  return (
    <InfoPageLayout
      title="Order Tracking"
      description="Track your Scents By Aamir order using your order number and email address."
      ctaLabel="Need Help?"
      ctaTo="/contact"
    >
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="font-heading text-[15px] uppercase tracking-[0.16em] text-brand-primary">
            Track Your Fragrance
          </p>

          <h2 className="luxury-section-title mt-3">Where Is My Order?</h2>

          <p className="mt-4 max-w-md text-[14px] leading-7 text-black/60">
            Enter your order number and billing email to check your order
            progress. Once backend APIs are connected, this page will show live
            processing, shipped and completed status.
          </p>

          <div className="mt-8 grid gap-4">
            {[
              ["01", "Processing", "Your order has been received."],
              ["02", "Packed", "Your perfume is being prepared."],
              ["03", "Shipped", "Your order has been handed to courier."],
              ["04", "Delivered", "Your fragrance has arrived."],
            ].map(([number, title, text]) => (
              <div key={title} className="border border-black/10 p-5">
                <p className="product-card-title text-brand-primary">
                  {number}
                </p>
                <h3 className="mt-3 product-card-title text-black">{title}</h3>
                <p className="mt-2 text-[13px] leading-5 text-black/55">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="border border-black/10 bg-white p-6 md:p-8"
          >
            <div className="grid gap-5">
              <label className="block">
                <span className="mb-2 block font-heading text-[13px] uppercase tracking-[0.12em] text-black">
                  Order Number *
                </span>
                <input
                  name="orderNumber"
                  value={form.orderNumber}
                  onChange={updateField}
                  placeholder="Example: SBA-10021"
                  required
                  className="h-12 w-full border border-black/15 bg-white px-4 text-[14px] text-black outline-none transition focus:border-black"
                />
              </label>

              <label className="block">
                <span className="mb-2 block font-heading text-[13px] uppercase tracking-[0.12em] text-black">
                  Billing Email *
                </span>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={updateField}
                  placeholder="you@example.com"
                  required
                  className="h-12 w-full border border-black/15 bg-white px-4 text-[14px] text-black outline-none transition focus:border-black"
                />
              </label>

              {message ? (
                <p className="border border-amber-700/20 bg-amber-50 px-4 py-3 text-[13px] text-amber-900">
                  {message}
                </p>
              ) : null}

              <button type="submit" className="luxury-btn luxury-btn-dark">
                Track Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </InfoPageLayout>
  );
}