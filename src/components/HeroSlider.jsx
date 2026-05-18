import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

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
    if (!slides.length) return undefined;

    const timer = setInterval(goNext, 6500);
    return () => clearInterval(timer);
  }, [slides.length]);

  if (!current) return null;

  return (
    <section
      className={`home-hero relative overflow-hidden bg-black text-white ${
        current.theme || ""
      }`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, scale: 1.025 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.015 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <img
            src={current.image}
            alt={current.title}
            className="home-hero-image h-full w-full object-cover"
          />

          <div className="home-hero-overlay absolute inset-0" />
        </motion.div>
      </AnimatePresence>

      <div className="site-container relative z-10 flex h-full min-h-[inherit] items-end">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${current.id}-content`}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="home-hero-content max-w-[720px]"
          >
            <p className="mb-3 font-heading text-[13px] font-normal uppercase leading-[16px] tracking-[0.4px] text-brand-primary">
              {current.eyebrow}
            </p>

            <h1 className="home-hero-title">{current.title}</h1>

            <p className="mt-3 max-w-[420px] text-[13px] font-normal leading-[19px] tracking-[0.2px] text-white/78">
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
        className="absolute left-2 top-1/2 z-20 hidden h-[54px] w-[54px] -translate-y-1/2 place-items-center border border-white/30 bg-black/10 text-white backdrop-blur-sm transition hover:bg-white hover:text-black md:grid"
        aria-label="Previous slide"
      >
        <ChevronLeft size={30} strokeWidth={1.45} />
      </button>

      <button
        type="button"
        onClick={goNext}
        className="absolute right-2 top-1/2 z-20 hidden h-[54px] w-[54px] -translate-y-1/2 place-items-center border border-white/30 bg-black/10 text-white backdrop-blur-sm transition hover:bg-white hover:text-black md:grid"
        aria-label="Next slide"
      >
        <ChevronRight size={30} strokeWidth={1.45} />
      </button>

      <div className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 items-center gap-4">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setActive(index)}
            className={`h-[3px] transition-all ${
              index === active ? "w-12 bg-white" : "w-4 bg-white/32"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}