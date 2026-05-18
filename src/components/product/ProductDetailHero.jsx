import { Link } from "react-router-dom";

export default function ProductDetailHero({ product }) {
  return (
    <section
      className={`relative overflow-hidden bg-brand-bg text-brand-text theme-${product.theme}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_40%,var(--color-glow),transparent_34%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.72),rgba(0,0,0,0.08)_52%,rgba(0,0,0,0.56))]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.62),transparent_52%)]" />

      <div className="site-container relative z-10 grid min-h-[560px] items-center gap-10 py-12 lg:grid-cols-12 md:min-h-[680px] md:py-16">
        <div className="lg:col-span-4">
          <p className="mb-3 font-heading text-[13px] font-normal uppercase leading-[16px] tracking-[0.4px] text-brand-primary">
            {product.family}
          </p>

          <h1 className="home-hero-title">{product.name}</h1>

          <p className="mt-4 max-w-[460px] text-[13px] leading-[20px] tracking-[0.2px] text-brand-muted">
            {product.shortDescription}
          </p>

          <Link to="/shop" className="luxury-link mt-7 text-brand-text">
            Back To Shop
          </Link>
        </div>

        <div className="relative flex min-h-[430px] items-center justify-center lg:col-span-4 md:min-h-[560px]">
          <div className="absolute h-[340px] w-[340px] rounded-full bg-brand-primary/20 blur-[80px] md:h-[440px] md:w-[440px]" />

          <img
            src={product.image}
            alt={product.name}
            className="relative z-10 h-[430px] w-full object-contain drop-shadow-[0_45px_80px_rgba(0,0,0,0.48)] md:h-[580px]"
          />
        </div>

        <div className="lg:col-span-4">
          <div className="border border-white/15 bg-white/8 p-6 backdrop-blur-md md:p-7">
            <p className="product-card-title text-brand-primary">
              Inspired Character
            </p>

            <p className="mt-4 text-[13px] leading-[20px] text-brand-muted">
              {product.inspiredBy}. A fragrance mood built around projection,
              elegance and a memorable dry-down.
            </p>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                ["Top", product.notes?.top?.slice(0, 2).join(", ")],
                ["Heart", product.notes?.heart?.slice(0, 2).join(", ")],
                ["Base", product.notes?.base?.slice(0, 2).join(", ")],
              ].map(([title, text]) => (
                <div key={title} className="border border-white/12 p-4">
                  <p className="product-card-title text-brand-text">{title}</p>
                  <p className="mt-2 text-[12px] leading-[18px] text-brand-muted">
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