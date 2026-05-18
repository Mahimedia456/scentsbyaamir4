function stripHtml(html = "") {
  return String(html)
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function toNumber(value, fallback = 0) {
  const number = Number(value);
  return Number.isFinite(number) ? number : fallback;
}

function getAttributeValue(product, names = []) {
  const attributes = Array.isArray(product?.attributes) ? product.attributes : [];

  const found = attributes.find((attribute) => {
    const attrName = String(attribute?.name || "").toLowerCase();
    return names.some((name) => attrName.includes(String(name).toLowerCase()));
  });

  if (!found) return "";

  if (Array.isArray(found.options)) {
    return found.options.join(" / ");
  }

  return found.option || found.value || "";
}

function splitNotes(value) {
  if (!value) return [];

  return String(value)
    .split(/[,/|•]+/g)
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 4);
}

function normalizeImages(product) {
  const sourceImages = Array.isArray(product?.images) ? product.images : [];

  const images = sourceImages
    .map((image) => {
      if (typeof image === "string") {
        return {
          id: image,
          src: image,
          alt: product?.name || "Product image",
        };
      }

      return {
        id: image?.id || image?.src,
        src: image?.src,
        alt: image?.alt || product?.name || "Product image",
      };
    })
    .filter((image) => Boolean(image.src));

  if (product?.image && !images.some((image) => image.src === product.image)) {
    images.unshift({
      id: product.image,
      src: product.image,
      alt: product?.name || "Product image",
    });
  }

  if (!images.length) {
    images.push({
      id: "placeholder",
      src: "/images/products/placeholder.png",
      alt: product?.name || "Product image",
    });
  }

  return images;
}

function inferTheme(product) {
  const text = [
    product?.name,
    product?.category,
    product?.family,
    product?.shortDescription,
    product?.plainShortDescription,
    product?.plainDescription,
    product?.inspiredBy,
  ]
    .join(" ")
    .toLowerCase();

  if (
    text.includes("blue") ||
    text.includes("aquatic") ||
    text.includes("ocean") ||
    text.includes("fresh") ||
    text.includes("citrus")
  ) {
    return "blue-dark";
  }

  if (
    text.includes("floral") ||
    text.includes("rose") ||
    text.includes("jasmine") ||
    text.includes("women") ||
    text.includes("female")
  ) {
    return "floral-gold";
  }

  if (
    text.includes("vanilla") ||
    text.includes("sweet") ||
    text.includes("coffee") ||
    text.includes("tonka")
  ) {
    return "sweet-red";
  }

  if (
    text.includes("green") ||
    text.includes("aventus") ||
    text.includes("elysium") ||
    text.includes("hacivat")
  ) {
    return "fresh-green";
  }

  return product?.theme || "oud-amber";
}

function inferCategory(product) {
  const categories = Array.isArray(product?.categories) ? product.categories : [];

  const categoryText = categories
    .map((category) => category?.slug || category?.name || "")
    .join(" ")
    .toLowerCase();

  const fullText = [
    product?.name,
    product?.category,
    product?.family,
    categoryText,
    product?.plainShortDescription,
    product?.plainDescription,
  ]
    .join(" ")
    .toLowerCase();

  if (fullText.includes("women") || fullText.includes("female")) return "women";
  if (fullText.includes("men") || fullText.includes("male")) return "men";
  if (fullText.includes("tester") || fullText.includes("discovery")) return "tester";
  if (fullText.includes("unisex")) return "unisex";

  return product?.category || categories[0]?.slug || "unisex";
}

function buildNotes(product) {
  const top = splitNotes(
    getAttributeValue(product, ["top", "top notes", "opening"])
  );

  const heart = splitNotes(
    getAttributeValue(product, ["heart", "middle", "heart notes"])
  );

  const base = splitNotes(
    getAttributeValue(product, ["base", "base notes", "dry down", "drydown"])
  );

  if (top.length || heart.length || base.length) {
    return {
      top: top.length ? top : ["Fresh Opening", "Citrus", "Spice"],
      heart: heart.length ? heart : ["Aromatic Heart", "Amber", "Woods"],
      base: base.length ? base : ["Musk", "Cedar", "Warm Notes"],
    };
  }

  if (product?.notes?.top || product?.notes?.heart || product?.notes?.base) {
    return product.notes;
  }

  return {
    top: ["Fresh Opening", "Citrus", "Spice"],
    heart: ["Aromatic Heart", "Amber", "Woods"],
    base: ["Musk", "Cedar", "Warm Notes"],
  };
}

export function adaptProductForTemplate(product) {
  const images = normalizeImages(product);
  const categories = Array.isArray(product?.categories) ? product.categories : [];
  const categoryName = categories[0]?.name || product?.category || "Fragrance";

  const plainShortDescription =
    product?.plainShortDescription ||
    stripHtml(product?.shortDescription || product?.short_description || "");

  const plainDescription =
    product?.plainDescription || stripHtml(product?.description || "");

  const adapted = {
    ...product,

    id: product?.id || product?.wordpressId || product?.slug,
    wordpressId: product?.wordpressId || product?.id,

    name: product?.name || "Untitled Fragrance",
    slug: product?.slug || String(product?.id || ""),

    inspiredBy:
      product?.inspiredBy ||
      getAttributeValue(product, ["inspired", "inspired by"]) ||
      product?.sku ||
      categoryName,

    category: inferCategory({
      ...product,
      plainShortDescription,
      plainDescription,
    }),

    badge:
      product?.badge ||
      (product?.onSale ? "Sale" : "") ||
      (product?.featured ? "Featured" : "New"),

    price: toNumber(product?.price, 0),
    oldPrice: toNumber(product?.oldPrice || product?.regularPrice, 0),

    images,
    image: images[0]?.src,
    hoverImage: images[1]?.src || images[0]?.src,
    storyImage: product?.storyImage || images[2]?.src || images[1]?.src || images[0]?.src,

    theme: inferTheme({
      ...product,
      plainShortDescription,
      plainDescription,
    }),

    family:
      product?.family ||
      getAttributeValue(product, ["family", "scent family", "fragrance family"]) ||
      categoryName ||
      "Luxury Fragrance",

    shortDescription:
      product?.shortDescription ||
      plainShortDescription ||
      "A luxury fragrance by Scents By Aamir with a memorable trail and refined character.",

    plainShortDescription,
    plainDescription,

    notes: buildNotes(product),

    // Your products are only 50 ml
    sizes: ["50 ml"],
  };

  if (!adapted.oldPrice || adapted.oldPrice <= adapted.price) {
    adapted.oldPrice = null;
  }

  return adapted;
}

export function adaptProductsForTemplate(products = []) {
  return products.map(adaptProductForTemplate);
}