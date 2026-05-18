import { Link } from "react-router-dom";

export default function VideoStorySection() {
  return (
    <section className="bg-white text-black">
      <div className="site-container py-14 text-center md:py-20">
        <h2 className="luxury-section-title">The Art Of Scent</h2>

        <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-black/62 md:text-base">
          Each fragrance is created like a mood: first the raw note, then the
          emotion, then the final trail that stays in memory.
        </p>
      </div>

      <div className="relative min-h-[540px] overflow-hidden bg-black md:min-h-[700px]">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/images/videos/perfume-story.mp4"
          poster="/images/videos/perfume-story-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="media-overlay-dark absolute inset-0" />

        <div className="site-container relative z-10 flex min-h-[540px] items-end pb-12 text-white md:min-h-[700px] md:pb-16">
          <div className="max-w-2xl">
            <p className="mb-3 font-heading text-[15px] uppercase tracking-[0.16em] text-brand-primary">
              Behind The Bottle
            </p>

            <h3 className="luxury-section-title">Raw Notes. Modern Luxury.</h3>

            <p className="mt-4 text-sm leading-7 text-white/68 md:text-base">
              From citrus freshness to dark oud and amber, every Scents By
              Aamir perfume is built around a clear identity.
            </p>

            <Link to="/about-us" className="luxury-link mt-7 text-white">
              How We Make It
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}