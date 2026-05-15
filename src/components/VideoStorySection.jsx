import { Link } from "react-router-dom";

export default function VideoStorySection() {
  return (
    <section className="bg-white text-black">
      <div className="site-container py-16 text-center md:py-24">
        <h2 className="heading-section">
          The Art Of Scent
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-black/65 md:text-lg">
          Each fragrance is created like a mood: first the raw note, then the
          emotion, then the final trail that stays in memory.
        </p>
      </div>

      <div className="relative min-h-[560px] overflow-hidden bg-black md:min-h-[760px]">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/images/videos/perfume-story.mp4"
          poster="/images/videos/perfume-story-poster.png"
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="media-overlay-dark absolute inset-0" />

        <div className="site-container relative z-10 flex min-h-[560px] items-end pb-12 text-white md:min-h-[760px] md:pb-20">
          <div className="max-w-2xl">
            <p className="mb-4 font-heading text-xl uppercase tracking-wideLuxury text-brand-primary">
              Behind The Bottle
            </p>

            <h3 className="heading-section">
              Raw Notes. Modern Luxury.
            </h3>

            <p className="mt-5 text-base leading-8 text-white/72 md:text-lg">
              From citrus freshness to dark oud and amber, every Scents By
              Aamir perfume is built around a clear identity.
            </p>

            <Link to="/about" className="luxury-link mt-8 text-white">
              How We Make It
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}