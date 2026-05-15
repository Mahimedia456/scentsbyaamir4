export default function ProductStory({ product }) {
  return (
    <section className={`bg-white text-black theme-${product.theme}`}>
      <div className="grid lg:grid-cols-2">
        <div className="min-h-[620px] bg-black">
          <img
            src={product.hoverImage || product.image}
            alt={`${product.name} detail`}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex min-h-[620px] items-center px-[var(--page-padding-x)] py-16">
          <div className="max-w-2xl">
            <p className="mb-4 font-heading text-xl uppercase tracking-wideLuxury text-brand-primary">
              The Scent Story
            </p>

            <h2 className="heading-section">
              Built Around Mood, Memory And Trail.
            </h2>

            <p className="mt-6 text-base leading-8 text-black/65 md:text-lg">
              {product.name} belongs to the {product.family} family. It opens
              with {product.notes?.top?.join(", ")}, develops into{" "}
              {product.notes?.heart?.join(", ")}, and settles with{" "}
              {product.notes?.base?.join(", ")}.
            </p>

            <p className="mt-5 text-base leading-8 text-black/65 md:text-lg">
              The result is a fragrance made for presence: expressive at first,
              refined in the middle and memorable in the dry-down.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-3">
              <div className="border border-black/10 p-5">
                <h3 className="font-heading text-[30px] uppercase tracking-wideLuxury">
                  Mood
                </h3>
                <p className="mt-2 text-sm text-black/55">
                  Luxury identity
                </p>
              </div>

              <div className="border border-black/10 p-5">
                <h3 className="font-heading text-[30px] uppercase tracking-wideLuxury">
                  Trail
                </h3>
                <p className="mt-2 text-sm text-black/55">
                  Lasting impression
                </p>
              </div>

              <div className="border border-black/10 p-5">
                <h3 className="font-heading text-[30px] uppercase tracking-wideLuxury">
                  Style
                </h3>
                <p className="mt-2 text-sm text-black/55">
                  Modern inspired
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}