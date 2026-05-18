import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductDetailHero from "../components/product/ProductDetailHero";
import ProductNotes from "../components/product/ProductNotes";
import ProductStory from "../components/product/ProductStory";
import ProductPurchaseBox from "../components/product/ProductPurchaseBox";
import RelatedProducts from "../components/product/RelatedProducts";
import { getProductBySlug } from "../data/product";
import { fetchWooProductBySlug } from "../services/wooService";
import { adaptProductForTemplate } from "../utils/productAdapter";

function ProductNotFound() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header variant="white" />

      <section className="site-container flex min-h-[70vh] items-center justify-center text-center">
        <div>
          <h1 className="luxury-section-title">Product Not Found</h1>

          <p className="mt-4 text-[13px] leading-[20px] text-black/60">
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

function ProductLoading() {
  return (
    <main className="min-h-screen bg-brand-bg text-brand-text">
      <Header variant="dark" />

      <section className="site-container flex min-h-[70vh] items-center justify-center text-center">
        <div>
          <p className="mb-3 font-heading text-[15px] uppercase tracking-[0.16em] text-brand-primary">
            Scents By Aamir
          </p>

          <h1 className="luxury-section-title text-brand-text">
            Loading Fragrance
          </h1>

          <p className="mt-4 text-[13px] leading-[20px] text-brand-muted">
            Fetching latest product details from WooCommerce.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();

  const [product, setProduct] = useState(() => {
    const localProduct = getProductBySlug(slug);
    return localProduct ? adaptProductForTemplate(localProduct) : null;
  });

  const [selectedImage, setSelectedImage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [apiAttemptFinished, setApiAttemptFinished] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function loadProduct() {
      try {
        setIsLoading(true);

        const wooProduct = await fetchWooProductBySlug(slug);

        if (!isMounted) return;

        const adapted = adaptProductForTemplate(wooProduct);
        setProduct(adapted);
        setSelectedImage(adapted.image);
      } catch (error) {
        console.error("[ProductDetail] WooCommerce product fallback:", error);

        if (!isMounted) return;

        const localProduct = getProductBySlug(slug);
        const adapted = localProduct ? adaptProductForTemplate(localProduct) : null;

        setProduct(adapted);
        setSelectedImage(adapted?.image || "");
      } finally {
        if (isMounted) {
          setIsLoading(false);
          setApiAttemptFinished(true);
        }
      }
    }

    loadProduct();

    return () => {
      isMounted = false;
    };
  }, [slug]);

  const galleryImages = useMemo(() => {
    const images = Array.isArray(product?.images) ? product.images : [];

    if (!images.length && product?.image) {
      return [{ id: product.image, src: product.image, alt: product.name }];
    }

    return images;
  }, [product]);

  useEffect(() => {
    if (product?.image && !selectedImage) {
      setSelectedImage(product.image);
    }
  }, [product, selectedImage]);

  if (isLoading && !product) {
    return <ProductLoading />;
  }

  if (!product && apiAttemptFinished) {
    return <ProductNotFound />;
  }

  if (!product) {
    return <ProductLoading />;
  }

  const activeImage = selectedImage || product.image;

  return (
    <main
      className={`min-h-screen bg-brand-bg text-brand-text theme-${product.theme}`}
    >
      <Header variant="dark" />

      <ProductDetailHero product={product} />

      <section className="bg-white text-black">
        <div className="site-container grid gap-10 py-12 lg:grid-cols-12 md:py-16">
          <div className="lg:col-span-7">
            <div
              className={`theme-${product.theme} relative min-h-[520px] overflow-hidden bg-brand-bg md:min-h-[680px]`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,var(--color-glow),transparent_36%)]" />

              <img
                src={activeImage}
                alt={product.name}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute bottom-6 left-6 right-6 border border-white/15 bg-white/8 p-5 text-white backdrop-blur">
                <p className="product-card-title text-white">
                  {product.family}
                </p>

                <p className="mt-2 text-[13px] leading-[20px] text-white/65">
                  {product.notes?.top?.[0]} opening,{" "}
                  {product.notes?.heart?.[0]} heart, and{" "}
                  {product.notes?.base?.[0]} base.
                </p>
              </div>
            </div>

            {galleryImages.length > 1 ? (
              <div className="mt-4 grid grid-cols-4 gap-3 md:grid-cols-6">
                {galleryImages.map((image, index) => {
                  const active = activeImage === image.src;

                  return (
                    <button
                      key={image.id || image.src || index}
                      type="button"
                      onClick={() => setSelectedImage(image.src)}
                      className={`relative aspect-square overflow-hidden border bg-[#f3f3f3] transition ${
                        active
                          ? "border-black"
                          : "border-black/10 hover:border-black/40"
                      }`}
                    >
                      <img
                        src={image.src}
                        alt={image.alt || product.name}
                        className="h-full w-full object-cover"
                      />
                    </button>
                  );
                })}
              </div>
            ) : null}
          </div>

          <div className="lg:col-span-5">
            <ProductPurchaseBox product={product} />
          </div>
        </div>
      </section>

      <ProductNotes product={product} />

      <ProductStory product={product} />

      <section className={`bg-brand-bg text-brand-text theme-${product.theme}`}>
        <div className="site-container grid gap-px py-14 md:grid-cols-4 md:py-20">
          {[
            ["01", "Opening", product.notes?.top?.join(" / ")],
            ["02", "Heart", product.notes?.heart?.join(" / ")],
            ["03", "Dry Down", product.notes?.base?.join(" / ")],
            ["04", "Identity", product.family],
          ].map(([number, title, text]) => (
            <div
              key={title}
              className="border border-white/15 bg-white/8 p-6 backdrop-blur md:p-7"
            >
              <p className="product-card-title text-brand-primary">
                {number}
              </p>

              <h3 className="mt-5 product-card-title text-brand-text">
                {title}
              </h3>

              <p className="mt-4 text-[13px] leading-[20px] text-brand-muted">
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