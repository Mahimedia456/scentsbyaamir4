import { Link } from "react-router-dom";

const categories = [
  {
    title: "Men",
    link: "/collection/men",
    image: "/images/categories/men.png",
  },
  {
    title: "Women",
    link: "/collection/women",
    image: "/images/categories/women.png",
  },
  {
    title: "Unisex",
    link: "/collection/unisex",
    image: "/images/categories/unisex.png",
  },
  {
    title: "Testers",
    link: "/collection/testers",
    image: "/images/categories/tester.png",
  },
];

export default function CategoryUniverseBanner() {
  return (
    <section className="bg-black text-white">
      <div className="site-container py-16 md:py-24">
        <div className="mb-12 text-center">
          <h2 className="heading-section">Shop By Category</h2>
          <p className="mx-auto mt-5 max-w-2xl text-white/60">
            Choose your fragrance universe and discover perfumes designed around
            your mood.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.title}
              to={category.link}
              className="group relative min-h-[430px] overflow-hidden bg-white/5"
            >
              <img
                src={category.image}
                alt={category.title}
                className="absolute inset-0 h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

              <div className="absolute bottom-7 left-7 right-7">
                <h3 className="font-heading text-[42px] uppercase leading-none tracking-wideLuxury">
                  {category.title}
                </h3>
                <span className="luxury-link mt-5 text-white">Explore</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}