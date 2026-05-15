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
      <div className="site-container section-padding">
        <div className="mb-12 text-center">
          <p className="mb-4 font-heading text-xl uppercase tracking-wideLuxury text-brand-primary">
            Fragrance Pyramid
          </p>

          <h2 className="heading-section">
            Notes Of {product.name}
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-brand-muted">
            Every scent moves in stages: the first impression, the emotional
            heart and the final trail that stays on skin.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {groups.map((group) => (
            <div
              key={group.key}
              className="border border-white/15 bg-white/8 p-8 backdrop-blur"
            >
              <h3 className="font-heading text-[42px] uppercase leading-none tracking-wideLuxury">
                {group.title}
              </h3>

              <p className="mt-4 min-h-[52px] text-sm leading-6 text-brand-muted">
                {noteDescriptions[group.key]}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {group.notes.map((note) => (
                  <span
                    key={note}
                    className="border border-white/18 px-4 py-2 font-heading text-[17px] uppercase tracking-wideLuxury text-brand-text"
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