import { Link } from "react-router-dom";
import { Heart, ShoppingBag, Trash2 } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { products } from "../data/product";

const wishlistItems = products.slice(0, 4);

export default function Wishlist() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header variant="white" />

      <section className="bg-white text-black">
        <div className="site-container py-12 md:py-16">
          <p className="mb-3 font-heading text-[13px] font-normal uppercase leading-[16px] tracking-[0.4px] text-brand-primary">
            Saved Fragrances
          </p>

          <h1 className="luxury-section-title">Wishlist</h1>

          <p className="mt-4 max-w-2xl text-[13px] leading-[20px] text-black/60">
            Your favorite Scents By Aamir perfumes are saved here for quick
            shopping.
          </p>
        </div>
      </section>

      <section className="bg-white text-black">
        <div className="site-container pb-14 md:pb-20">
          {wishlistItems.length ? (
            <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-4">
              {wishlistItems.map((product) => (
                <article
                  key={product.id}
                  className={`theme-${product.theme} border border-black/10 bg-white`}
                >
                  <Link to={`/product/${product.slug}`} className="block">
                    <div className="product-card-media relative min-h-[430px] overflow-hidden bg-[#f3f3f3] md:min-h-[520px]">
                      <span className="absolute left-5 top-5 z-10 bg-white px-3 py-1 product-badge-text text-black shadow-sm">
                        <Heart size={13} className="mr-1 inline" />
                        Saved
                      </span>

                      <img
                        src={product.image}
                        alt={product.name}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </div>
                  </Link>

                  <div className="min-h-[118px] bg-white p-5">
                    <Link to={`/product/${product.slug}`}>
                      <h2 className="product-card-title text-black transition hover:text-black/65">
                        {product.name}
                      </h2>
                    </Link>

                    <p className="mt-2 product-card-desc text-black/55">
                      {product.inspiredBy}
                    </p>

                    <p className="mt-3 product-card-price text-black">
                      Rs. {product.price.toLocaleString()}
                    </p>

                    <div className="mt-5 grid grid-cols-[1fr_48px] gap-2">
                      <button
                        type="button"
                        className="flex h-11 items-center justify-center gap-2 bg-black px-4 product-action-text text-white transition hover:bg-brand-primary hover:text-black"
                      >
                        <ShoppingBag size={16} />
                        Add To Cart
                      </button>

                      <button
                        type="button"
                        className="grid h-11 place-items-center border border-black/10 transition hover:bg-black hover:text-white"
                        aria-label="Remove"
                      >
                        <Trash2 size={17} />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="flex min-h-[360px] items-center justify-center border border-black/10 bg-black/[0.03] text-center">
              <div>
                <h2 className="luxury-section-title">Wishlist Is Empty</h2>

                <Link to="/shop" className="luxury-btn-dark luxury-btn mt-8">
                  Shop Fragrances
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}