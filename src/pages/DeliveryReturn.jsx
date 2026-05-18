import InfoPageLayout from "../components/info/InfoPageLayout";

export default function DeliveryReturn() {
  return (
    <InfoPageLayout
      title="Delivery Return"
      description="Delivery, failed delivery and return-to-sender information for Scents By Aamir orders."
      ctaLabel="Track Order"
      ctaTo="/order-tracking"
    >
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="font-heading text-[15px] uppercase tracking-[0.16em] text-brand-primary">
            Delivery Support
          </p>

          <h2 className="luxury-section-title mt-3">Courier & Return Flow</h2>

          <p className="mt-4 text-[14px] leading-7 text-black/60">
            Please make sure your phone number, city and complete address are
            correct before placing an order. Courier delays can happen during
            holidays, weather issues or high-volume sale periods.
          </p>
        </div>

        <div className="grid gap-5 lg:col-span-7">
          {[
            [
              "Delivery Timeline",
              "Standard delivery usually takes 3 to 5 working days after order confirmation.",
            ],
            [
              "Failed Delivery",
              "If courier cannot contact you or address details are incomplete, the parcel may be returned to us.",
            ],
            [
              "Return To Sender",
              "Returned parcels may require re-delivery charges before dispatching again.",
            ],
            [
              "Order Confirmation",
              "For cash on delivery orders, confirmation may be required before dispatch.",
            ],
          ].map(([title, text], index) => (
            <div key={title} className="border border-black/10 p-6">
              <p className="product-card-title text-brand-primary">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 product-card-title text-black">{title}</h3>
              <p className="mt-3 text-[14px] leading-7 text-black/60">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </InfoPageLayout>
  );
}