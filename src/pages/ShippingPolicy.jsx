import InfoPageLayout from "../components/info/InfoPageLayout";

export default function ShippingPolicy() {
  return (
    <InfoPageLayout
      title="Shipping Policy"
      description="Shipping timelines, courier handling and delivery support for Scents By Aamir orders."
      ctaLabel="Track Order"
      ctaTo="/order-tracking"
    >
      <article className="mx-auto max-w-5xl">
        <p className="font-heading text-[15px] uppercase tracking-[0.16em] text-brand-primary">
          Delivery Information
        </p>

        <h2 className="luxury-section-title mt-3">Shipping Terms</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[
            [
              "Processing Time",
              "Orders are usually processed after confirmation. During sale periods, processing may take longer due to higher order volume.",
            ],
            [
              "Delivery Time",
              "Standard delivery usually takes 3 to 5 working days depending on destination and courier operations.",
            ],
            [
              "Shipping Charges",
              "Shipping charges are calculated at checkout or confirmed before dispatch depending on the order type.",
            ],
            [
              "Cash On Delivery",
              "COD availability may depend on city, order value and courier service coverage.",
            ],
            [
              "Incomplete Address",
              "Orders with incomplete address or unreachable phone number may be delayed, cancelled or returned.",
            ],
            [
              "Courier Delays",
              "Courier delays due to weather, public holidays or logistics issues are outside our direct control, but we will assist where possible.",
            ],
          ].map(([title, text]) => (
            <section key={title} className="border border-black/10 p-6">
              <h3 className="product-card-title text-black">{title}</h3>
              <p className="mt-3 text-[14px] leading-7 text-black/60">
                {text}
              </p>
            </section>
          ))}
        </div>
      </article>
    </InfoPageLayout>
  );
}