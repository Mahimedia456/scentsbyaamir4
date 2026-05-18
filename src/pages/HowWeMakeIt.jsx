import InfoPageLayout from "../components/info/InfoPageLayout";

export default function HowWeMakeIt() {
  return (
    <InfoPageLayout
      title="How We Make It"
      description="A closer look at how Scents By Aamir fragrances are selected, blended, tested and prepared."
      ctaLabel="Explore Collection"
      ctaTo="/shop"
    >
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="font-heading text-[15px] uppercase tracking-[0.16em] text-brand-primary">
            Fragrance Process
          </p>

          <h2 className="luxury-section-title mt-3">Built Around Character</h2>

          <p className="mt-4 text-[14px] leading-7 text-black/60">
            Every scent is selected for mood, performance, note balance and the
            impression it leaves behind. Our focus is simple: wearable luxury
            with strong identity.
          </p>
        </div>

        <div className="grid gap-px bg-black/10 lg:col-span-7">
          {[
            [
              "01",
              "Scent Direction",
              "We start by defining the mood: fresh, oud, floral, sweet, amber, woody or signature evening wear.",
            ],
            [
              "02",
              "Note Balance",
              "Top, heart and base notes are reviewed so the opening, middle and dry down feel complete.",
            ],
            [
              "03",
              "Performance Testing",
              "Projection, longevity and trail are tested across different conditions before final selection.",
            ],
            [
              "04",
              "Bottle Preparation",
              "Each order is prepared with care so the product presentation matches the fragrance experience.",
            ],
          ].map(([number, title, text]) => (
            <div key={title} className="bg-white p-6 md:p-7">
              <p className="product-card-title text-brand-primary">
                {number}
              </p>

              <h3 className="mt-5 product-card-title text-black">{title}</h3>

              <p className="mt-4 text-[14px] leading-7 text-black/60">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 overflow-hidden bg-black text-white">
        <div className="grid min-h-[420px] items-end lg:grid-cols-2">
          <div className="p-8 md:p-10">
            <p className="font-heading text-[15px] uppercase tracking-[0.16em] text-brand-primary">
              Editorial Standard
            </p>
            <h2 className="luxury-section-title mt-3">
              From Raw Mood To Finished Scent
            </h2>
            <p className="mt-5 max-w-xl text-[14px] leading-7 text-white/65">
              The final perfume should feel complete from first spray to dry
              down. That means the scent must open beautifully, settle smoothly
              and leave a recognizable trail.
            </p>
          </div>

          <div className="min-h-[420px] bg-[radial-gradient(circle_at_50%_45%,var(--color-glow),transparent_34%),#050505]" />
        </div>
      </div>
    </InfoPageLayout>
  );
}