import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductDetailHero from "../components/product/ProductDetailHero";
import ProductNotes from "../components/product/ProductNotes";
import ProductStory from "../components/product/ProductStory";
import ProductPurchaseBox from "../components/product/ProductPurchaseBox";
import RelatedProducts from "../components/product/RelatedProducts";
import { getProductBySlug } from "../data/product";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <main className="min-h-screen bg-white text-black">
        <Header variant="white" />

        <section className="site-container flex min-h-[70vh] items-center justify-center text-center">
          <div>
            <h1 className="heading-section">
              Product Not Found
            </h1>

            <p className="mt-5 text-black/60">
              This fragrance does not exist or the product link is incorrect.
            </p>

            <Link to="/shop" className="luxury-btn-dark luxury-btn mt-8">
              Back To Shop
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    );
  }

  return (
    <main className={`min-h-screen bg-brand-bg text-brand-text theme-${product.theme}`}>
      <Header variant="dark" />

      <ProductDetailHero product={product} />

      <section className="bg-white text-black">
        <div className="site-container grid gap-10 py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-7">
            <div className={`theme-${product.theme} relative min-h-[760px] overflow-hidden bg-brand-bg`}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,var(--color-glow),transparent_36%)]" />

              <img
                src={product.image}
                alt={product.name}
                className="absolute inset-0 m-auto h-[78%] w-[78%] object-contain drop-shadow-[0_50px_90px_rgba(0,0,0,0.45)]"
              />

              <div className="absolute bottom-7 left-7 right-7 border border-white/15 bg-white/8 p-6 text-white backdrop-blur">
                <p className="font-heading text-[30px] uppercase tracking-wideLuxury">
                  {product.family}
                </p>

                <p className="mt-2 text-sm leading-6 text-white/65">
                  {product.notes?.top?.[0]} opening, {product.notes?.heart?.[0]} heart,
                  and {product.notes?.base?.[0]} base.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <ProductPurchaseBox product={product} />
          </div>
        </div>
      </section>

      <ProductNotes product={product} />

      <ProductStory product={product} />

      <section className={`bg-brand-bg text-brand-text theme-${product.theme}`}>
        <div className="site-container grid gap-8 py-16 md:grid-cols-4 md:py-24">
          {[
            ["01", "Opening", product.notes?.top?.join(" / ")],
            ["02", "Heart", product.notes?.heart?.join(" / ")],
            ["03", "Dry Down", product.notes?.base?.join(" / ")],
            ["04", "Identity", product.family],
          ].map(([number, title, text]) => (
            <div
              key={title}
              className="border border-white/15 bg-white/8 p-7 backdrop-blur"
            >
              <p className="font-heading text-[22px] uppercase tracking-wideLuxury text-brand-primary">
                {number}
              </p>

              <h3 className="mt-5 font-heading text-[38px] uppercase leading-none tracking-wideLuxury">
                {title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-brand-muted">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <RelatedProducts product={product} />

      <Footer />
    </main>
  );
}