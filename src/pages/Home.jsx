import Header from "../components/Header";
import HeroSlider from "../components/HeroSlider";
import ProductRail from "../components/ProductRail";
import VideoStorySection from "../components/VideoStorySection";
import ShopByUniverse from "../components/ShopByUniverse";
import Footer from "../components/Footer";
import { heroSlides } from "../data/banners";
import {
  newArrivalProducts,
  products,
  topSellingProducts,
} from "../data/product";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-bg text-brand-text">
      <Header variant="dark" />

      <HeroSlider slides={heroSlides} />

      <ProductRail
        eyebrow="Scents By Aamir"
        title="Fragrances: You Love Them"
        description="Explore our most loved perfumes, from fresh masculine signatures to dark oud, sweet florals and modern unisex luxury."
        products={products.slice(0, 4)}
      />

      <section className="bg-white text-black">
        <div className="site-container py-14 text-center md:py-20">
          <h2 className="luxury-section-title">La Collection Scents</h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-black/62 md:text-base">
            In line with modern luxury fragrance culture, each scent draws its
            power from raw notes, lasting character and a memorable trail.
          </p>

          <Link to="/shop" className="luxury-link mt-7 text-black">
            Explore Collection
          </Link>
        </div>

        <div className="relative min-h-[500px] overflow-hidden bg-black md:min-h-[680px]">
          <img
            src="/images/hero/collection-story.png"
            alt="Scents By Aamir Collection"
            className="absolute inset-0 h-full w-full object-cover opacity-95"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/10 to-transparent" />

          <div className="site-container relative z-10 flex min-h-[500px] items-end justify-center pb-10 text-center text-white md:min-h-[680px] md:pb-14">
            <Link to="/collection/luxury" className="luxury-btn-light luxury-btn">
              Discover La Collection
            </Link>
          </div>
        </div>
      </section>

      <VideoStorySection />

      <ShopByUniverse />

      <ProductRail
        eyebrow="Customer Favorites"
        title="Top Selling"
        description="The perfumes customers return to again and again — bold, lasting and made for everyday confidence."
        products={topSellingProducts.slice(0, 6)}
      />

      <section className="relative overflow-hidden bg-black text-white">
        <div className="absolute inset-0 opacity-34">
          <img
            src="/images/hero/dark-editorial.png"
            alt="Luxury fragrance editorial"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/68" />

        <div className="site-container relative z-10 grid min-h-[560px] items-center gap-10 py-16 md:grid-cols-2 md:py-20">
          <div>
            <p className="mb-3 font-heading text-[15px] uppercase tracking-[0.16em] text-brand-primary">
              Signature Mood
            </p>

            <h2 className="luxury-section-title">
              Choose Your Fragrance By Feeling
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/68 md:text-base">
              Fresh for daytime. Oud for statement nights. Floral for elegance.
              Sweet amber for a deeper impression.
            </p>

            <Link to="/scent-finder" className="luxury-link mt-7 text-white">
              Start Scent Finder
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Fresh", "Citrus, aquatic, clean woods"],
              ["Oud", "Dark, smoky, amber-rich"],
              ["Floral", "Rose, jasmine, soft musk"],
              ["Sweet", "Vanilla, coffee, tonka"],
            ].map(([title, text]) => (
              <Link
                key={title}
                to={`/shop?mood=${title.toLowerCase()}`}
                className="group border border-white/18 bg-white/8 p-6 backdrop-blur transition hover:border-brand-primary hover:bg-white/12"
              >
                <h3 className="font-heading text-[28px] uppercase tracking-[0.07em]">
                  {title}
                </h3>

                <p className="mt-3 text-xs leading-5 text-white/60">{text}</p>

                <span className="mt-5 inline-block font-heading text-[13px] uppercase tracking-[0.14em] text-brand-primary">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ProductRail
        eyebrow="Recently Added"
        title="New Arrivals"
        description="New fragrances added to the house — created for stronger identity, better performance and a luxury finish."
        products={newArrivalProducts.slice(0, 6)}
      />

      <Footer />
    </main>
  );
}