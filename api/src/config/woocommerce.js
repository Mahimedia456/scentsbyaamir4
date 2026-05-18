import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const siteUrl = process.env.WC_SITE_URL?.replace(/\/+$/, "");
const apiVersion = process.env.WC_API_VERSION || "wc/v3";

if (!siteUrl) {
  throw new Error("WC_SITE_URL is missing in api/.env");
}

if (!process.env.WC_CONSUMER_KEY || !process.env.WC_CONSUMER_SECRET) {
  throw new Error("WooCommerce consumer key/secret are missing in api/.env");
}

export const wooClient = axios.create({
  baseURL: `${siteUrl}/wp-json/${apiVersion}`,
  auth: {
    username: process.env.WC_CONSUMER_KEY,
    password: process.env.WC_CONSUMER_SECRET,
  },
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export function stripHtml(html = "") {
  return String(html)
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function normalizeWooImage(product) {
  return (
    product?.images?.[0]?.src ||
    product?.image ||
    "/images/products/placeholder.png"
  );
}

export function normalizeWooProduct(product) {
  const categories = Array.isArray(product.categories) ? product.categories : [];
  const images = Array.isArray(product.images) ? product.images : [];
  const attributes = Array.isArray(product.attributes) ? product.attributes : [];

  const firstCategory = categories[0]?.name || "Fragrance";

  return {
    id: product.id,
    wordpressId: product.id,

    name: product.name,
    slug: product.slug,
    permalink: product.permalink,
    type: product.type,
    status: product.status,

    sku: product.sku,
    price: product.price,
    regularPrice: product.regular_price,
    salePrice: product.sale_price,
    onSale: product.on_sale,

    stockStatus: product.stock_status,
    stockQuantity: product.stock_quantity,
    manageStock: product.manage_stock,

    totalSales: Number(product.total_sales || 0),
    featured: Boolean(product.featured),

    description: product.description,
    shortDescription: product.short_description,
    plainDescription: stripHtml(product.description),
    plainShortDescription: stripHtml(product.short_description),

    categories,
    category: firstCategory,
    family: firstCategory,

    tags: product.tags || [],
    attributes,
    images,
    image: normalizeWooImage(product),
    hoverImage: images[1]?.src || normalizeWooImage(product),

    averageRating: product.average_rating,
    ratingCount: product.rating_count,

    dateCreated: product.date_created,
    dateModified: product.date_modified,

    theme: "oud-amber",
    sizes: ["50 ml"],
  };
}

export function normalizeWooCategory(category) {
  return {
    id: category.id,
    name: category.name,
    slug: category.slug,
    parent: category.parent,
    description: category.description,
    count: category.count,
    image: category.image?.src || null,
  };
}

export function normalizeWooOrder(order) {
  return {
    id: order.id,
    number: order.number,
    status: order.status,
    currency: order.currency,
    total: order.total,
    subtotal: order.total,
    paymentMethod: order.payment_method,
    paymentMethodTitle: order.payment_method_title,
    dateCreated: order.date_created,
    dateModified: order.date_modified,
    billing: order.billing,
    shipping: order.shipping,
    lineItems: order.line_items || [],
    shippingLines: order.shipping_lines || [],
    customerNote: order.customer_note,
  };
}