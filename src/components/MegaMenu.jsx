import { Link } from "react-router-dom";

const leftColumn = [
  {
    title: "Fragrance Home",
    links: [{ label: "See All", to: "/shop" }],
  },
  {
    title: "Explore",
    links: [
      { label: "New In", to: "/shop?sort=new" },
      { label: "Best Sellers", to: "/shop?sort=best" },
      { label: "Tester Box", to: "/shop?category=tester" },
      { label: "Summer Collection", to: "/shop?collection=summer" },
    ],
  },
  {
    title: "Online Exclusives",
    links: [
      { label: "Luxury Collection", to: "/collection/luxury" },
      { label: "Oud Collection", to: "/collection/oud" },
      { label: "Fresh Collection", to: "/collection/fresh" },
    ],
  },
];

const men = [
  "Vauren",
  "Elyndor",
  "Night Rider",
  "Royal Noxis",
  "Ocean Spirit",
  "Bold Heat",
];

const women = [
  "Delure",
  "Amerel",
  "Dark Seduction",
  "Blossom Shine",
  "Floral Charm",
  "Le Reve Dore",
];

const unisex = [
  "Desert Soul",
  "Dark Aure",
  "Cherelle",
  "Kavian",
  "Hivalta",
  "Silver Breeze",
];

function ProductList({ title, items, category }) {
  return (
    <div>
      <h3 className="mb-5 font-heading text-[18px] uppercase tracking-wideLuxury text-black">
        {title}
      </h3>

      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item}>
            <Link
              to={`/shop?category=${category}`}
              className="font-body text-[16px] tracking-[0.04em] text-black/55 transition hover:text-black"
            >
              {item}
            </Link>
          </li>
        ))}

        <li className="pt-1">
          <Link
            to={`/shop?category=${category}`}
            className="font-heading text-[16px] uppercase tracking-wideLuxury text-black"
          >
            &gt; See All
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default function MegaMenu({ open }) {
  if (!open) return null;

  return (
    <div className="mega-menu-shadow absolute left-0 top-full z-40 w-full border-t border-black/10 bg-white text-black">
      <div className="site-container grid grid-cols-12 gap-10 py-10">
        <div className="col-span-2 space-y-10">
          {leftColumn.map((group) => (
            <div key={group.title}>
              <h3 className="mb-5 font-heading text-[18px] uppercase tracking-wideLuxury">
                {group.title}
              </h3>

              <ul className="space-y-4">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="font-body text-[16px] tracking-[0.04em] text-black/55 transition hover:text-black"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="col-span-2">
          <ProductList title="Men's Fragrances" items={men} category="men" />
        </div>

        <div className="col-span-2">
          <ProductList
            title="Women's Fragrances"
            items={women}
            category="women"
          />
        </div>

        <div className="col-span-2">
          <ProductList title="Unisex / Oud" items={unisex} category="unisex" />
        </div>

        <div className="col-span-4 grid grid-cols-2 gap-5">
          <Link
            to="/product/night-rider-bleu-de-chanel-inspired"
            className="group relative min-h-[440px] overflow-hidden bg-black"
          >
            <img
              src="/images/categories/mega-men.png"
              alt="Night Rider"
              className="h-full w-full object-cover opacity-95 transition duration-700 group-hover:scale-105"
            />
            <div className="media-overlay-bottom absolute inset-0" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-heading text-[22px] uppercase tracking-wideLuxury text-white">
                New: Night Rider
              </p>
            </div>
          </Link>

          <Link
            to="/product/dark-seduction"
            className="group relative min-h-[440px] overflow-hidden bg-black"
          >
            <img
              src="/images/categories/mega-women.png"
              alt="Dark Seduction"
              className="h-full w-full object-cover opacity-95 transition duration-700 group-hover:scale-105"
            />
            <div className="media-overlay-bottom absolute inset-0" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-heading text-[22px] uppercase tracking-wideLuxury text-white">
                New: Dark Seduction
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}