import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const values = [
  {
    title: "Inspired Luxury",
    text: "We create premium inspired fragrances with a focus on character, projection and memorable dry-downs.",
  },
  {
    title: "Scent Identity",
    text: "Every perfume is treated as a mood: fresh, floral, oud, amber, sweet, smoky or elegant.",
  },
  {
    title: "Accessible Elegance",
    text: "Our goal is to make luxury-style fragrance experiences more reachable without losing the premium feel.",
  },
];

const process = [
  ["01", "Select The Mood", "We start by defining the fragrance personality and the impression it should leave."],
  ["02", "Build The Notes", "Top, heart and base notes are arranged to create a clear scent journey."],
  ["03", "Refine The Trail", "The final composition is shaped for wearability, confidence and lasting presence."],
];

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header variant="white" />

      <section className="relative min-h-[650px] overflow-hidden bg-black text-white">
        <img
          src="/images/about/about-hero.png"
          alt="About Scents By Aamir"
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />

        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_42%,var(--color-glow),transparent_36%)]" />

        <div className="site-container relative z-10 flex min-h-[650px] items-end pb-16">
          <div className="max-w-5xl">
            <p className="mb-4 font-heading text-xl uppercase tracking-wideLuxury text-brand-primary">
              Our House
            </p>

            <h1 className="heading-hero">About Scents By Aamir</h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-white/72 md:text-xl">
              A fragrance house built around inspired luxury, expressive scent
              identities and perfumes made to become part of your personal style.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white text-black">
        <div className="site-container grid gap-12 py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-5">
            <p className="mb-4 font-heading text-xl uppercase tracking-wideLuxury text-brand-primary">
              Brand Story
            </p>

            <h2 className="heading-section">A Modern Perfume House</h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-black/65 md:text-lg lg:col-span-7">
            <p>
              Scents By Aamir is created for fragrance lovers who want premium,
              memorable and expressive perfumes. Each scent is selected and
              presented around a clear identity, from fresh masculine confidence
              to dark oud, floral elegance and sweet night-time seduction.
            </p>

            <p>
              Our collection is designed to help customers discover a signature
              scent that feels personal. The experience is not just about buying
              a bottle; it is about choosing a mood, a style and a trail that
              people remember.
            </p>

            <Link to="/shop" className="luxury-link mt-4 text-black">
              Explore Fragrances
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-black text-white">
        <div className="site-container py-16 md:py-24">
          <div className="mb-12 text-center">
            <p className="mb-4 font-heading text-xl uppercase tracking-wideLuxury text-brand-primary">
              What We Believe
            </p>

            <h2 className="heading-section">Luxury With Character</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {values.map((item) => (
              <div key={item.title} className="border border-white/15 bg-white/8 p-8 backdrop-blur">
                <h3 className="font-heading text-[42px] uppercase leading-none tracking-wideLuxury">
                  {item.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-white/65">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white text-black">
        <div className="grid lg:grid-cols-2">
          <div className="min-h-[620px] bg-black">
            <img
              src="/images/about/about-story.png"
              alt="Fragrance process"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex min-h-[620px] items-center px-[var(--page-padding-x)] py-16">
            <div className="max-w-2xl">
              <p className="mb-4 font-heading text-xl uppercase tracking-wideLuxury text-brand-primary">
                Our Process
              </p>

              <h2 className="heading-section">From Notes To Memory</h2>

              <div className="mt-10 space-y-6">
                {process.map(([number, title, text]) => (
                  <div key={number} className="grid grid-cols-[70px_1fr] gap-5 border-b border-black/10 pb-6">
                    <p className="font-heading text-[34px] uppercase tracking-wideLuxury text-brand-primary">
                      {number}
                    </p>

                    <div>
                      <h3 className="font-heading text-[30px] uppercase tracking-wideLuxury">
                        {title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-black/60">
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/scent-finder" className="luxury-btn-dark luxury-btn mt-9">
                Find Your Scent
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}