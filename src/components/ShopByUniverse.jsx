import { useState } from "react";
import { Link } from "react-router-dom";
import { universeCategories } from "../data/banners";

const tabs = [
  { key: "all", label: "All" },
  { key: "men", label: "Men's Fragrances" },
  { key: "women", label: "Women's Fragrances" },
  { key: "unisex", label: "Unisex" },
];

export default function ShopByUniverse() {
  const [active, setActive] = useState("all");

  const categories =
    active === "all"
      ? universeCategories
      : universeCategories.filter((item) =>
          item.title.toLowerCase().includes(active)
        );

  return (
    <section className="bg-black text-white">
      <div className="site-container py-14 md:py-20">
        <div className="mb-10 text-center">
          <h2 className="font-heading text-[30px] uppercase leading-none tracking-[0.055em] text-white md:text-[44px]">
            Shop By Universe
          </h2>

          <div className="mx-auto mt-10 flex max-w-[860px] items-center justify-center border-b border-white/35">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActive(tab.key)}
                className={`relative flex-1 px-3 pb-4 font-heading text-[12px] uppercase tracking-[0.08em] transition md:text-[15px] ${
                  active === tab.key ? "text-white" : "text-white/42"
                }`}
              >
                {tab.label}

                {active === tab.key && (
                  <span className="absolute bottom-[-1px] left-0 h-[1px] w-full bg-white" />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="mx-auto grid max-w-[1580px] grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className="group relative min-h-[440px] overflow-hidden bg-[#111] md:min-h-[520px]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-[1.035] group-hover:opacity-100"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/86 via-black/10 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="font-heading text-[15px] uppercase leading-none tracking-[0.055em] text-white md:text-[15px]">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-[260px] text-[12px] leading-5 text-white/68">
                  {item.subtitle}
                </p>

                <span className="mt-5 inline-flex items-center gap-3 font-heading text-[12px] uppercase tracking-[0.09em] text-white">
                  Explore
                  <span className="h-px w-9 bg-white transition-all duration-300 group-hover:w-14" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}