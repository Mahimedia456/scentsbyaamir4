const noteDescriptions = {
  top: "The opening impression — bright, expressive and immediate.",
  heart: "The main character of the scent after the opening settles.",
  base: "The final trail — deeper, warmer and longer lasting.",
};

export default function ProductNotes({ product }) {
  const groups = [
    { key: "top", title: "Top Notes", notes: product.notes?.top || [] },
    { key: "heart", title: "Heart Notes", notes: product.notes?.heart || [] },
    { key: "base", title: "Base Notes", notes: product.notes?.base || [] },
  ];

  return (
    <section className={`bg-brand-bg text-brand-text theme-${product.theme}`}>
      <div className="site-container py-14 md:py-20">
        <div className="mb-10 text-center">
          <p className="mb-3 font-heading text-[13px] font-normal uppercase leading-[16px] tracking-[0.4px] text-brand-primary">
            Fragrance Pyramid
          </p>

          <h2 className="luxury-section-title text-brand-text">
            Notes Of {product.name}
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-[13px] leading-[20px] text-brand-muted">
            Every scent moves in stages: the first impression, the emotional
            heart and the final trail that stays on skin.
          </p>
        </div>

        <div className="grid gap-px md:grid-cols-3">
          {groups.map((group) => (
            <div
              key={group.key}
              className="border border-white/15 bg-white/8 p-7 backdrop-blur md:p-8"
            >
              <h3 className="product-card-title text-brand-text">
                {group.title}
              </h3>

              <p className="mt-4 min-h-[44px] text-[13px] leading-[20px] text-brand-muted">
                {noteDescriptions[group.key]}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {group.notes.map((note) => (
                  <span
                    key={note}
                    className="border border-white/18 px-3 py-2 product-badge-text text-brand-text"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}