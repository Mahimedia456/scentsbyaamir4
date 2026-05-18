import InfoPageLayout from "../components/info/InfoPageLayout";

export default function PrivacyPolicy() {
  return (
    <InfoPageLayout
      title="Privacy Policy"
      description="How Scents By Aamir collects, uses and protects customer information."
      ctaLabel="Contact Support"
      ctaTo="/contact"
    >
      <article className="mx-auto max-w-5xl">
        <p className="font-heading text-[15px] uppercase tracking-[0.16em] text-brand-primary">
          Customer Privacy
        </p>

        <h2 className="luxury-section-title mt-3">Your Information</h2>

        <div className="mt-8 grid gap-6">
          {[
            [
              "Information We Collect",
              "We may collect your name, email, phone number, billing address, shipping address, order details and payment-related information required to process your purchase.",
            ],
            [
              "How We Use Information",
              "Your information is used for order processing, delivery coordination, account support, customer service, fraud prevention and improving the shopping experience.",
            ],
            [
              "Order Communication",
              "We may contact you regarding order confirmation, payment, shipping, delivery, returns or support requests.",
            ],
            [
              "Data Security",
              "We aim to protect customer data using reasonable technical and operational safeguards. Payment and transaction handling will be secured through backend integrations.",
            ],
            [
              "Third-Party Services",
              "Courier, payment, analytics or email services may process limited information required to complete their service.",
            ],
            [
              "Contact",
              "For privacy-related requests, contact Scents By Aamir support through the contact page.",
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