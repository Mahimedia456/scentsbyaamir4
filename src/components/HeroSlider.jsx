import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroSlider({ slides = [] }) {
  const [active, setActive] = useState(0);

  const current = slides[active];

  function goNext() {
    setActive((prev) => (prev + 1) % slides.length);
  }

  function goPrev() {
    setActive((prev) => (prev - 1 + slides.length) % slides.length);
  }

  useEffect(() => {
    if (!slides.length) return;

    const timer = setInterval(goNext, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  if (!current) return null;

  return (
    <section className={`relative min-h-[calc(100vh-116px)] overflow-hidden bg-black text-white ${current.theme || ""}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <img
            src={current.image}
            alt={current.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.78),rgba(0,0,0,0.18),rgba(0,0,0,0.55))]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.72),transparent_45%,rgba(0,0,0,0.35))]" />
        </motion.div>
      </AnimatePresence>

      <div className="site-container relative z-10 flex min-h-[calc(100vh-116px)] items-end pb-14 md:pb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id + "-content"}
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl"
          >
            <p className="mb-4 font-heading text-xl uppercase tracking-wideLuxury text-brand-primary md:text-2xl">
              {current.eyebrow}
            </p>

            <h1 className="heading-hero">
              {current.title}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/78 md:text-xl">
              {current.subtitle}
            </p>

            <Link to={current.link} className="luxury-link mt-8 text-white">
              {current.cta}
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        type="button"
        onClick={goPrev}
        className="absolute left-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 place-items-center border border-white/30 bg-black/20 text-white backdrop-blur transition hover:bg-white hover:text-black md:grid"
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} strokeWidth={1.5} />
      </button>

      <button
        type="button"
        onClick={goNext}
        className="absolute right-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 place-items-center border border-white/30 bg-black/20 text-white backdrop-blur transition hover:bg-white hover:text-black md:grid"
        aria-label="Next slide"
      >
        <ChevronRight size={28} strokeWidth={1.5} />
      </button>

      <div className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setActive(index)}
            className={`h-[3px] transition-all ${
              index === active
                ? "w-12 bg-white"
                : "w-5 bg-white/35 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}