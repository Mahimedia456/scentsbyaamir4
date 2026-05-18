import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

export default function InfoPageLayout({
  eyebrow = "Scents By Aamir",
  title,
  description,
  children,
  ctaLabel = "Shop Collection",
  ctaTo = "/shop",
}) {
  return (
    <main className="min-h-screen bg-brand-bg text-brand-text">
      <Header variant="dark" />

      <section className="relative overflow-hidden bg-brand-bg text-brand-text">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,var(--color-glow),transparent_34%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.74),transparent_55%,rgba(0,0,0,0.68))]" />

        <div className="site-container relative z-10 flex min-h-[360px] items-end py-12 md:min-h-[440px] md:py-16">
          <div className="max-w-3xl">
            <p className="mb-3 font-heading text-[15px] uppercase tracking-[0.16em] text-brand-primary">
              {eyebrow}
            </p>

            <h1 className="heading-hero">{title}</h1>

            {description ? (
              <p className="mt-5 max-w-2xl text-sm leading-7 text-brand-muted md:text-base">
                {description}
              </p>
            ) : null}

            {ctaLabel ? (
              <Link to={ctaTo} className="luxury-link mt-7 text-brand-text">
                {ctaLabel}
              </Link>
            ) : null}
          </div>
        </div>
      </section>

      <section className="bg-white text-black">
        <div className="site-container py-12 md:py-16">{children}</div>
      </section>

      <Footer />
    </main>
  );
}