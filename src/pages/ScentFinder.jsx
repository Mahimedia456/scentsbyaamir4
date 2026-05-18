import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { products } from "../data/product";

const questions = [
  {
    key: "category",
    title: "Who Is The Fragrance For?",
    options: [
      { label: "Men", value: "men" },
      { label: "Women", value: "women" },
      { label: "Unisex", value: "unisex" },
    ],
  },
  {
    key: "mood",
    title: "Choose Your Scent Mood",
    options: [
      { label: "Fresh", value: "fresh" },
      { label: "Oud", value: "oud" },
      { label: "Sweet", value: "sweet" },
      { label: "Floral", value: "floral" },
      { label: "Amber", value: "amber" },
    ],
  },
  {
    key: "occasion",
    title: "When Will You Wear It?",
    options: [
      { label: "Daily", value: "daily" },
      { label: "Office", value: "office" },
      { label: "Evening", value: "evening" },
      { label: "Special Event", value: "special" },
    ],
  },
];

function productText(product) {
  return [
    product.name,
    product.family,
    product.shortDescription,
    ...(product.notes?.top || []),
    ...(product.notes?.heart || []),
    ...(product.notes?.base || []),
  ]
    .join(" ")
    .toLowerCase();
}

function matchMood(product, mood) {
  const text = productText(product);

  if (!mood) return true;

  if (mood === "fresh") {
    return /fresh|citrus|bergamot|grapefruit|aquatic|marine|green|lemon/.test(text);
  }

  if (mood === "oud") {
    return /oud|smoky|smoke|incense|leather|saffron/.test(text);
  }

  if (mood === "sweet") {
    return /sweet|vanilla|coffee|tonka|cacao|praline|almond/.test(text);
  }

  if (mood === "floral") {
    return /floral|rose|jasmine|ylang|peony|flowers/.test(text);
  }

  if (mood === "amber") {
    return /amber|ambergris|amberwood|resin|warm/.test(text);
  }

  return true;
}

export default function ScentFinder() {
  const [answers, setAnswers] = useState({
    category: "",
    mood: "",
    occasion: "",
  });

  const recommended = useMemo(() => {
    const filtered = products.filter((product) => {
      const categoryMatch =
        !answers.category || product.category === answers.category;

      const moodMatch = matchMood(product, answers.mood);

      return categoryMatch && moodMatch;
    });

    return filtered.slice(0, 4);
  }, [answers]);

  function setAnswer(key, value) {
    setAnswers((prev) => ({
      ...prev,
      [key]: prev[key] === value ? "" : value,
    }));
  }

  return (
    <main className="min-h-screen bg-white text-black">
      <Header variant="white" />

      <section className="relative min-h-[460px] overflow-hidden bg-black text-white md:min-h-[560px]">
        <img
          src="/images/hero/dark-editorial.png"
          alt="Scent Finder"
          className="absolute inset-0 h-full w-full object-cover opacity-85"
        />

        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.76),rgba(0,0,0,0.10)_52%,rgba(0,0,0,0.50))]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.72),transparent_54%)]" />

        <div className="site-container relative z-10 flex min-h-[460px] items-end pb-12 md:min-h-[560px] md:pb-14">
          <div className="max-w-[680px]">
            <p className="mb-3 font-heading text-[13px] font-normal uppercase leading-[16px] tracking-[0.4px] text-brand-primary">
              Find Your Signature
            </p>

            <h1 className="home-hero-title">Scent Finder</h1>

            <p className="mt-3 max-w-[500px] text-[13px] leading-[20px] tracking-[0.2px] text-white/76">
              Answer a few simple questions and discover the Scents By Aamir
              fragrances that match your mood, style and occasion.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white text-black">
        <div className="site-container grid gap-10 py-12 lg:grid-cols-12 md:py-16">
          <div className="lg:col-span-5">
            <p className="mb-3 font-heading text-[13px] font-normal uppercase leading-[16px] tracking-[0.4px] text-brand-primary">
              Fragrance Match
            </p>

            <h2 className="luxury-section-title">Choose Your Mood</h2>

            <p className="mt-4 max-w-xl text-[13px] leading-[20px] text-black/60">
              Your answers help us recommend perfumes by category, note profile
              and personality.
            </p>

            <div className="mt-8 border border-black/10 bg-black/[0.03] p-6">
              <h3 className="product-card-title text-black">Your Selection</h3>

              <div className="mt-5 grid gap-3 text-[13px] leading-[20px] text-black/60">
                <p>
                  Category:{" "}
                  <span className="product-card-price text-black">
                    {answers.category || "Any"}
                  </span>
                </p>
                <p>
                  Mood:{" "}
                  <span className="product-card-price text-black">
                    {answers.mood || "Any"}
                  </span>
                </p>
                <p>
                  Occasion:{" "}
                  <span className="product-card-price text-black">
                    {answers.occasion || "Any"}
                  </span>
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  setAnswers({ category: "", mood: "", occasion: "" })
                }
                className="luxury-btn mt-7 text-black"
              >
                Reset
              </button>
            </div>
          </div>

          <div className="space-y-6 lg:col-span-7">
            {questions.map((question) => (
              <div key={question.key} className="border border-black/10 p-6 md:p-8">
                <h3 className="product-card-title text-black">
                  {question.title}
                </h3>

                <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {question.options.map((option) => {
                    const active = answers[question.key] === option.value;

                    return (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setAnswer(question.key, option.value)}
                        className={`h-11 border px-4 product-action-text transition ${
                          active
                            ? "border-black bg-black text-white"
                            : "border-black/15 bg-white text-black hover:border-black"
                        }`}
                      >
                        {option.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black text-white">
        <div className="site-container py-14 md:py-20">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 font-heading text-[13px] font-normal uppercase leading-[16px] tracking-[0.4px] text-brand-primary">
                Recommended For You
              </p>

              <h2 className="luxury-section-title text-white">Your Match</h2>
            </div>

            <Link to="/shop" className="luxury-link text-white">
              Shop All
            </Link>
          </div>

          {recommended.length ? (
            <div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4">
              {recommended.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="border border-white/15 bg-white/8 p-10 text-center">
              <h3 className="luxury-section-title text-white">No Match Found</h3>

              <p className="mt-3 text-[13px] leading-[20px] text-white/60">
                Try another category or mood.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}