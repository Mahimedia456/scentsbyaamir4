import InfoPageLayout from "../components/info/InfoPageLayout";

export default function TermsOfServices() {
  return (
    <InfoPageLayout
      title="Terms Of Services"
      description="Terms and conditions for using the Scents By Aamir website and placing orders."
      ctaLabel="Shop Collection"
      ctaTo="/shop"
    >
      <article className="mx-auto max-w-5xl">
        <p className="font-heading text-[15px] uppercase tracking-[0.16em] text-brand-primary">
          Website Terms
        </p>

        <h2 className="luxury-section-title mt-3">Terms & Conditions</h2>

        <div className="mt-8 grid gap-6">
          {[
            [
              "Use Of Website",
              "By using this website, you agree to use it only for lawful shopping, browsing and customer support purposes.",
            ],
            [
              "Product Information",
              "We try to display product details, notes, sizes and prices accurately. However, minor differences in packaging, imagery or availability may occur.",
            ],
            [
              "Order Acceptance",
              "Placing an order does not guarantee acceptance. Orders may be cancelled due to stock issues, payment issues, incorrect details or suspicious activity.",
            ],
            [
              "Pricing",
              "Prices may change without prior notice. Promotions and discounts are valid only during the announced period.",
            ],
            [
              "Payments",
              "Payment methods, transaction records and payment confirmations will be managed through backend and payment integrations.",
            ],
            [
              "Returns",
              "Returns and exchanges are subject to our Returns & Exchanges policy, especially because perfumes are personal-care products.",
            ],
            [
              "Limitation",
              "Scents By Aamir is not responsible for delays caused by courier companies, incorrect customer details or external service interruptions.",
            ],
          ].map(([title, text], index) => (
            <section key={title} className="border border-black/10 p-6">
              <p className="product-card-title text-brand-primary">
                {String(index + 1).padStart(2, "0")}
              </p>

              <h3 className="mt-4 product-card-title text-black">{title}</h3>

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