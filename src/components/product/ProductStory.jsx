export default function ProductStory({ product }) {
  return (
    <section className="bg-white text-black">
      <div className="grid lg:grid-cols-2">
        <div className="min-h-[460px] bg-black md:min-h-[620px]">
          <img
            src={product.storyImage || product.hoverImage || product.image}
            alt={`${product.name} detail`}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex min-h-[460px] items-center px-[var(--page-padding-x)] py-12 md:min-h-[620px] md:py-16">
          <div className="max-w-2xl">
            <p className="mb-3 font-heading text-[13px] font-normal uppercase leading-[16px] tracking-[0.4px] text-brand-primary">
              The Scent Story
            </p>

            <h2 className="luxury-section-title">
              Built Around Mood, Memory And Trail.
            </h2>

            <p className="mt-5 text-[13px] leading-[22px] text-black/65">
              {product.name} belongs to the {product.family} family. It opens
              with {product.notes?.top?.join(", ")}, develops into{" "}
              {product.notes?.heart?.join(", ")}, and settles with{" "}
              {product.notes?.base?.join(", ")}.
            </p>

            <p className="mt-4 text-[13px] leading-[22px] text-black/65">
              The result is a fragrance made for presence: expressive at first,
              refined in the middle and memorable in the dry-down.
            </p>

            <div className="mt-8 grid gap-px border border-black/10 sm:grid-cols-3">
              {[
                ["Mood", "Luxury identity"],
                ["Trail", "Lasting impression"],
                ["Style", "Modern inspired"],
              ].map(([title, text]) => (
                <div key={title} className="border-black/10 p-5 sm:border-r last:border-r-0">
                  <h3 className="product-card-title text-black">{title}</h3>
                  <p className="mt-2 text-[13px] leading-[20px] text-black/55">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}