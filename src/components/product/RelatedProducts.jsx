import { useEffect, useMemo, useState } from "react";
import ProductRail from "../ProductRail";
import { products as localProducts } from "../../data/product";
import { fetchWooProducts } from "../../services/wooService";
import { adaptProductsForTemplate } from "../../utils/productAdapter";

function getRelatedProducts(items, product) {
  const related = items
    .filter((item) => String(item.id) !== String(product.id))
    .filter((item) => {
      const sameCategory = item.category === product.category;
      const sameTheme = item.theme === product.theme;

      const sameFamily =
        item.family
          ?.split(" ")
          ?.some((word) =>
            product.family?.toLowerCase().includes(word.toLowerCase())
          ) || false;

      return sameCategory || sameTheme || sameFamily;
    })
    .slice(0, 4);

  const fallback = items
    .filter((item) => String(item.id) !== String(product.id))
    .slice(0, 4);

  return related.length ? related : fallback;
}

export default function RelatedProducts({ product }) {
  const [wooProducts, setWooProducts] = useState([]);

  useEffect(() => {
    let isMounted = true;

    async function loadProducts() {
      try {
        const response = await fetchWooProducts({
          per_page: 100,
          orderby: "date",
          order: "desc",
        });

        if (!isMounted) return;

        setWooProducts(adaptProductsForTemplate(response.products || []));
      } catch (error) {
        console.error("[RelatedProducts] WooCommerce fallback:", error);
        if (isMounted) setWooProducts([]);
      }
    }

    loadProducts();

    return () => {
      isMounted = false;
    };
  }, []);

  const sourceProducts = useMemo(
    () =>
      wooProducts.length
        ? wooProducts
        : adaptProductsForTemplate(localProducts),
    [wooProducts]
  );

  const relatedProducts = useMemo(
    () => getRelatedProducts(sourceProducts, product),
    [sourceProducts, product]
  );

  return (
    <ProductRail
      eyebrow="You May Also Like"
      title="Related Fragrances"
      description="Explore perfumes with a similar mood, fragrance family or category."
      products={relatedProducts}
      seeAllTo="/shop"
    />
  );
}