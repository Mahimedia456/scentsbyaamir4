import ProductRail from "../ProductRail";
import { products } from "../../data/product";

export default function RelatedProducts({ product }) {
  const related = products
    .filter((item) => item.id !== product.id)
    .filter(
      (item) =>
        item.category === product.category ||
        item.theme === product.theme ||
        item.family?.split(" ")?.some((word) =>
          product.family?.toLowerCase().includes(word.toLowerCase())
        )
    )
    .slice(0, 4);

  const fallback = products.filter((item) => item.id !== product.id).slice(0, 4);

  return (
    <ProductRail
      eyebrow="You May Also Like"
      title="Related Fragrances"
      description="Explore perfumes with a similar mood, fragrance family or category."
      products={related.length ? related : fallback}
    />
  );
}