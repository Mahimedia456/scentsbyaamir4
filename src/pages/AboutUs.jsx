import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const values = [
  {
    title: "Inspired Luxury",
    text: "Premium inspired fragrances focused on character, projection and memorable dry-downs.",
  },
  {
    title: "Scent Identity",
    text: "Every perfume is shaped around a mood: fresh, floral, oud, amber, sweet, smoky or elegant.",
  },
  {
    title: "Accessible Elegance",
    text: "Luxury-style fragrance experiences made more reachable without losing the premium feel.",
  },
];

const process = [
  [
    "01",
    "Select The Mood",
    "We start by defining the fragrance personality and the impression it should leave.",
  ],
  [
    "02",
    "Build The Notes",
    "Top, heart and base notes are arranged to create a clear scent journey.",
  ],
  [
    "03",
    "Refine The Trail",
    "The final composition is shaped for wearability, confidence and lasting presence.",
  ],
];

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header variant="white" />

      <section className="relative min-h-[460px] overflow-hidden bg-black text-white md:min-h-[560px]">
        <img
          src="/images/about/about-hero.png"
          alt="About Scents By Aamir"
          className="absolute inset-0 h-full w-full object-cover opacity-85"
        />

        <div className="absolute inset-0 bg-black/42" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.74),rgba(0,0,0,0.12)_52%,rgba(0,0,0,0.46))]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.72),transparent_54%)]" />

        <div className="site-container relative z-10 flex min-h-[460px] items-end pb-12 md:min-h-[560px] md:pb-14">
          <div className="max-w-[680px]">
            <p className="mb-3 font-heading text-[13px] font-normal uppercase leading-[16px] tracking-[0.4px] text-brand-primary">
              Our House
            </p>

            <h1 className="home-hero-title">About Scents By Aamir</h1>

            <p className="mt-3 max-w-[480px] text-[13px] leading-[20px] tracking-[0.2px] text-white/76">
              A fragrance house built around inspired luxury, expressive scent
              identities and perfumes made to become part of your personal style.
            </p>

            <Link to="/shop" className="luxury-link mt-7 text-white">
              Explore Fragrances
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white text-black">
        <div className="site-container grid gap-10 py-12 lg:grid-cols-12 md:py-16">
          <div className="lg:col-span-5">
            <p className="mb-3 font-heading text-[13px] font-normal uppercase leading-[16px] tracking-[0.4px] text-brand-primary">
              Brand Story
            </p>

            <h2 className="luxury-section-title">A Modern Perfume House</h2>
          </div>

          <div className="space-y-5 text-[13px] leading-[22px] text-black/62 lg:col-span-7">
            <p>
              Scents By Aamir is created for fragrance lovers who want premium,
              memorable and expressive perfumes. Each scent is selected around a
              clear identity, from fresh masculine confidence to dark oud,
              floral elegance and sweet night-time seduction.
            </p>

            <p>
              Our collection is designed to help customers discover a signature
              scent that feels personal. The experience is not just about buying
              a bottle; it is about choosing a mood, a style and a trail that
              people remember.
            </p>

            <Link to="/scent-finder" className="luxury-link mt-3 text-black">
              Find Your Scent
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-black text-white">
        <div className="site-container py-14 md:py-20">
          <div className="mb-10 text-center">
            <p className="mb-3 font-heading text-[13px] font-normal uppercase leading-[16px] tracking-[0.4px] text-brand-primary">
              What We Believe
            </p>

            <h2 className="luxury-section-title text-white">
              Luxury With Character
            </h2>
          </div>

          <div className="grid gap-px md:grid-cols-3">
            {values.map((item) => (
              <div
                key={item.title}
                className="border border-white/15 bg-white/8 p-7 backdrop-blur md:p-8"
              >
                <h3 className="product-card-title text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-[13px] leading-[20px] text-white/62">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white text-black">
        <div className="grid lg:grid-cols-2">
          <div className="min-h-[460px] bg-black md:min-h-[560px]">
            <img
              src="/images/about/about-story.png"
              alt="Fragrance process"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex min-h-[460px] items-center px-[var(--page-padding-x)] py-12 md:min-h-[560px] md:py-16">
            <div className="max-w-2xl">
              <p className="mb-3 font-heading text-[13px] font-normal uppercase leading-[16px] tracking-[0.4px] text-brand-primary">
                Our Process
              </p>

              <h2 className="luxury-section-title">From Notes To Memory</h2>

              <div className="mt-8 space-y-5">
                {process.map(([number, title, text]) => (
                  <div
                    key={number}
                    className="grid grid-cols-[52px_1fr] gap-5 border-b border-black/10 pb-5"
                  >
                    <p className="product-card-title text-brand-primary">
                      {number}
                    </p>

                    <div>
                      <h3 className="product-card-title text-black">{title}</h3>

                      <p className="mt-2 text-[13px] leading-[20px] text-black/60">
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/scent-finder" className="luxury-btn-dark luxury-btn mt-8">
                Start Scent Finder
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}