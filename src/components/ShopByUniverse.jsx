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
      <div className="site-container section-padding">
        <div className="mb-12 text-center">
          <h2 className="heading-section">
            Shop By Universe
          </h2>

          <div className="mx-auto mt-10 flex max-w-4xl items-center justify-center border-b border-white/30">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActive(tab.key)}
                className={`relative flex-1 px-3 pb-5 font-heading text-[18px] uppercase tracking-wideLuxury transition ${
                  active === tab.key ? "text-white" : "text-white/45"
                }`}
              >
                {tab.label}
                {active === tab.key && (
                  <span className="absolute bottom-[-1px] left-0 h-[2px] w-full bg-white" />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className="group relative min-h-[520px] overflow-hidden bg-brand-surface"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />

              <div className="absolute bottom-7 left-7 right-7">
                <h3 className="font-heading text-[36px] uppercase leading-none tracking-wideLuxury">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/70">
                  {item.subtitle}
                </p>

                <span className="luxury-link mt-5 text-white">
                  Explore
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}