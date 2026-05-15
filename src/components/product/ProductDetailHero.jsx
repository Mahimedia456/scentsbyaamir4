import { Link } from "react-router-dom";

export default function ProductDetailHero({ product }) {
  return (
    <section className={`relative overflow-hidden bg-brand-bg text-brand-text theme-${product.theme}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_40%,var(--color-glow),transparent_32%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.72),transparent_50%,rgba(0,0,0,0.65))]" />

      <div className="site-container relative z-10 grid min-h-[calc(100vh-116px)] items-center gap-10 py-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="mb-4 font-heading text-xl uppercase tracking-wideLuxury text-brand-primary">
            {product.family}
          </p>

          <h1 className="heading-hero">
            {product.name}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-brand-muted md:text-lg">
            {product.shortDescription}
          </p>

          <Link to="/shop" className="luxury-link mt-8 text-brand-text">
            Back To Shop
          </Link>
        </div>

        <div className="relative flex min-h-[520px] items-center justify-center lg:col-span-4">
          <div className="absolute h-[420px] w-[420px] rounded-full bg-brand-primary/20 blur-[80px]" />

          <img
            src={product.image}
            alt={product.name}
            className="relative z-10 h-[520px] w-full object-contain drop-shadow-[0_50px_80px_rgba(0,0,0,0.55)] md:h-[680px]"
          />
        </div>

        <div className="lg:col-span-4">
          <div className="border border-white/15 bg-white/8 p-7 backdrop-blur-md">
            <p className="font-heading text-[24px] uppercase tracking-wideLuxury text-brand-primary">
              Inspired Character
            </p>

            <p className="mt-4 text-base leading-8 text-brand-muted">
              {product.inspiredBy}. A fragrance mood built around projection,
              elegance and a memorable dry-down.
            </p>

            <div className="mt-7 grid grid-cols-3 gap-3">
              <div className="border border-white/12 p-4">
                <p className="font-heading text-[28px] uppercase tracking-wideLuxury">
                  Top
                </p>
                <p className="mt-2 text-xs leading-5 text-brand-muted">
                  {product.notes?.top?.slice(0, 2).join(", ")}
                </p>
              </div>

              <div className="border border-white/12 p-4">
                <p className="font-heading text-[28px] uppercase tracking-wideLuxury">
                  Heart
                </p>
                <p className="mt-2 text-xs leading-5 text-brand-muted">
                  {product.notes?.heart?.slice(0, 2).join(", ")}
                </p>
              </div>

              <div className="border border-white/12 p-4">
                <p className="font-heading text-[28px] uppercase tracking-wideLuxury">
                  Base
                </p>
                <p className="mt-2 text-xs leading-5 text-brand-muted">
                  {product.notes?.base?.slice(0, 2).join(", ")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}