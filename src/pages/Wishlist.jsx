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
        <div className="site-container py-16 md:py-24">
          <p className="mb-4 font-heading text-xl uppercase tracking-wideLuxury text-brand-primary">
            Saved Fragrances
          </p>

          <h1 className="heading-section">Wishlist</h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-black/60">
            Your favorite Scents By Aamir perfumes are saved here for quick
            shopping.
          </p>
        </div>
      </section>

      <section className="bg-white text-black">
        <div className="site-container pb-16 md:pb-24">
          {wishlistItems.length ? (
            <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-4">
              {wishlistItems.map((product) => (
                <article
                  key={product.id}
                  className={`theme-${product.theme} border border-black/10 bg-white`}
                >
                  <Link to={`/product/${product.slug}`} className="block">
                    <div className="product-card-bg relative min-h-[420px] overflow-hidden">
                      <span className="absolute left-5 top-5 z-10 bg-white px-3 py-1 font-heading text-[14px] uppercase tracking-wideLuxury text-black">
                        <Heart size={14} className="mr-1 inline" />
                        Saved
                      </span>

                      <img
                        src={product.image}
                        alt={product.name}
                        className="absolute inset-0 m-auto h-[72%] w-[72%] object-contain"
                      />
                    </div>
                  </Link>

                  <div className="p-5">
                    <h2 className="font-heading text-[26px] uppercase leading-none tracking-wideLuxury">
                      {product.name}
                    </h2>

                    <p className="mt-2 text-sm text-black/55">
                      {product.inspiredBy}
                    </p>

                    <p className="mt-4 font-heading text-[22px] uppercase tracking-wideLuxury">
                      Rs. {product.price.toLocaleString()}
                    </p>

                    <div className="mt-5 grid grid-cols-[1fr_52px] gap-3">
                      <button
                        type="button"
                        className="flex h-12 items-center justify-center gap-2 bg-black font-heading text-[16px] uppercase tracking-wideLuxury text-white transition hover:bg-brand-primary hover:text-black"
                      >
                        <ShoppingBag size={17} />
                        Add To Cart
                      </button>

                      <button
                        type="button"
                        className="grid h-12 place-items-center border border-black/10 transition hover:bg-black hover:text-white"
                        aria-label="Remove"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="flex min-h-[420px] items-center justify-center border border-black/10 bg-black/[0.03] text-center">
              <div>
                <h2 className="heading-section">Wishlist Is Empty</h2>
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