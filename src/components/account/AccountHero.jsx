export default function AccountHero({
  eyebrow = "Scents By Aamir",
  title = "My Account",
  description = "Manage your fragrance orders, saved addresses and account details.",
}) {
  return (
    <section className="relative overflow-hidden bg-brand-bg text-brand-text">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,var(--color-glow),transparent_34%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.72),transparent_55%,rgba(0,0,0,0.68))]" />

      <div className="site-container relative z-10 flex min-h-[360px] items-end py-12 md:min-h-[430px] md:py-16">
        <div className="max-w-3xl">
          <p className="mb-3 font-heading text-[15px] uppercase tracking-[0.16em] text-brand-primary">
            {eyebrow}
          </p>

          <h1 className="heading-hero">{title}</h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-brand-muted md:text-base">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}