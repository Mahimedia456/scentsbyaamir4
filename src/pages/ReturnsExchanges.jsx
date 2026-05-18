import InfoPageLayout from "../components/info/InfoPageLayout";

export default function ReturnsExchanges() {
  return (
    <InfoPageLayout
      title="Returns & Exchanges"
      description="Review our return and exchange conditions before requesting support."
      ctaLabel="Contact Support"
      ctaTo="/contact"
    >
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="font-heading text-[15px] uppercase tracking-[0.16em] text-brand-primary">
            Return Policy
          </p>

          <h2 className="luxury-section-title mt-3">Simple & Clear</h2>

          <p className="mt-4 text-[14px] leading-7 text-black/60">
            Perfume products are personal-care items, so returns and exchanges
            are only accepted under specific conditions.
          </p>
        </div>

        <div className="grid gap-6 lg:col-span-8">
          {[
            [
              "Eligibility",
              "Products must be unused, sealed, undamaged and in original packaging. Opened or used perfumes cannot be returned for hygiene and safety reasons.",
            ],
            [
              "Damaged Parcel",
              "If your order arrives damaged, contact us as soon as possible with clear photos of the parcel, product and invoice.",
            ],
            [
              "Wrong Product",
              "If you receive the wrong fragrance or size, we will verify the order and arrange replacement according to availability.",
            ],
            [
              "Exchange Window",
              "Exchange requests should be made within the allowed period after delivery. Late requests may not be accepted.",
            ],
            [
              "Non-Returnable Items",
              "Used perfumes, tester items, sale items, custom bundles and products without original packaging may not be eligible.",
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