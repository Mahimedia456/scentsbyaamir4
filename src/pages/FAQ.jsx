import InfoPageLayout from "../components/info/InfoPageLayout";

const faqs = [
  {
    question: "How long does delivery take?",
    answer:
      "Standard delivery usually takes 3 to 5 working days depending on your city and courier availability.",
  },
  {
    question: "Are Scents By Aamir perfumes long lasting?",
    answer:
      "Our fragrances are created for strong projection, lasting character and a memorable trail. Longevity can vary depending on skin type, weather and application.",
  },
  {
    question: "Do you offer cash on delivery?",
    answer:
      "Cash on delivery can be enabled depending on city and order value. Final payment options will be confirmed at checkout.",
  },
  {
    question: "Can I exchange a perfume?",
    answer:
      "Exchanges are only accepted for eligible unused, sealed and undamaged products within the allowed return/exchange period.",
  },
  {
    question: "How should I apply perfume?",
    answer:
      "Apply on pulse points such as neck, wrists and behind ears. Avoid rubbing the fragrance after applying because it can disturb the scent development.",
  },
  {
    question: "Do you sell inspired perfumes?",
    answer:
      "Some Scents By Aamir fragrances may be inspired by popular scent profiles, while others are original house-style blends.",
  },
];

export default function FAQ() {
  return (
    <InfoPageLayout
      title="FAQ"
      description="Answers to common questions about orders, delivery, perfumes, returns and account support."
      ctaLabel="Contact Support"
      ctaTo="/contact"
    >
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="font-heading text-[15px] uppercase tracking-[0.16em] text-brand-primary">
            Help Center
          </p>

          <h2 className="luxury-section-title mt-3">Frequently Asked</h2>

          <p className="mt-4 text-[14px] leading-7 text-black/60">
            Find quick answers before placing your order. For order-specific
            support, contact us with your order number.
          </p>
        </div>

        <div className="grid gap-4 lg:col-span-8">
          {faqs.map((item, index) => (
            <div key={item.question} className="border border-black/10 p-6">
              <p className="product-card-title text-brand-primary">
                {String(index + 1).padStart(2, "0")}
              </p>

              <h3 className="mt-4 product-card-title text-black">
                {item.question}
              </h3>

              <p className="mt-3 text-[14px] leading-7 text-black/60">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </InfoPageLayout>
  );
}