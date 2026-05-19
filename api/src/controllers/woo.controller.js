import {
  normalizeWooOrder,
  normalizeWooProduct,
  wooClient,
} from "../config/woocommerce.js";
import { blobPaths, readBlobJson } from "../utils/blobCache.js";

const memoryCache = {
  products: [],
  categories: [],
  productsSavedAt: 0,
  categoriesSavedAt: 0,
};

const MEMORY_TTL = 1000 * 60 * 10;

function getPagination(req) {
  const page = Number(req.query.page || 1);
  const perPage = Number(req.query.per_page || req.query.limit || 12);

  return {
    page: Number.isFinite(page) && page > 0 ? page : 1,
    per_page:
      Number.isFinite(perPage) && perPage > 0 && perPage <= 100 ? perPage : 12,
  };
}

function getWooError(error) {
  return {
    status: error?.response?.status || 500,
    data: error?.response?.data || null,
    message: error?.response?.data?.message || error.message || "API error",
  };
}

function paginate(data, req) {
  const page = Number(req.query.page || 1);
  const perPage = Number(req.query.per_page || req.query.limit || 100);
  const start = (page - 1) * perPage;

  return {
    page,
    per_page: perPage,
    total: data.length,
    totalPages: Math.ceil(data.length / perPage),
    data: data.slice(start, start + perPage),
  };
}

function productMatchesSearch(product, searchValue) {
  const search = String(searchValue || "").toLowerCase();

  return [
    product.name,
    product.slug,
    product.sku,
    product.family,
    product.shortDescription,
    product.plainShortDescription,
    product.plainDescription,
  ]
    .join(" ")
    .toLowerCase()
    .includes(search);
}

function productMatchesCategory(product, categoryValue) {
  const category = String(categoryValue || "").toLowerCase();

  return (
    String(product.category || "").toLowerCase() === category ||
    product.categories?.some(
      (item) =>
        String(item.id) === category ||
        String(item.slug || "").toLowerCase() === category ||
        String(item.name || "").toLowerCase() === category
    )
  );
}

function filterAndSortProducts(products, req) {
  let data = [...products];

  if (req.query.search) {
    data = data.filter((product) =>
      productMatchesSearch(product, req.query.search)
    );
  }

  if (req.query.category) {
    data = data.filter((product) =>
      productMatchesCategory(product, req.query.category)
    );
  }

  if (req.query.featured !== undefined) {
    const featured = req.query.featured === "true";
    data = data.filter((product) => Boolean(product.featured) === featured);
  }

  if (req.query.on_sale !== undefined) {
    const onSale = req.query.on_sale === "true";
    data = data.filter((product) => Boolean(product.onSale) === onSale);
  }

  const orderby = String(req.query.orderby || "").toLowerCase();

  if (
    orderby === "popularity" ||
    orderby === "total_sales" ||
    orderby === "sales"
  ) {
    data.sort((a, b) => Number(b.totalSales || 0) - Number(a.totalSales || 0));
  } else if (orderby === "price") {
    data.sort((a, b) => Number(a.price || 0) - Number(b.price || 0));
  } else if (orderby === "rating") {
    data.sort(
      (a, b) => Number(b.averageRating || 0) - Number(a.averageRating || 0)
    );
  } else {
    data.sort(
      (a, b) =>
        new Date(b.dateCreated || 0).getTime() -
        new Date(a.dateCreated || 0).getTime()
    );
  }

  if (req.query.order === "asc") {
    data.reverse();
  }

  return data;
}

async function fetchAllWooProductsLive() {
  const allProducts = [];
  let page = 1;
  let totalPages = 1;

  do {
    const response = await wooClient.get("/products", {
      params: {
        status: "publish",
        per_page: 100,
        page,
        orderby: "date",
        order: "desc",
      },
    });

    const products = response.data || [];
    totalPages = Number(response.headers["x-wp-totalpages"] || 1);

    allProducts.push(...products.map(normalizeWooProduct));
    page += 1;
  } while (page <= totalPages);

  memoryCache.products = allProducts;
  memoryCache.productsSavedAt = Date.now();

  return allProducts;
}

async function getProductSource() {
  const memoryFresh =
    memoryCache.products.length > 0 &&
    Date.now() - memoryCache.productsSavedAt < MEMORY_TTL;

  if (memoryFresh) {
    return {
      source: "memory-cache",
      products: memoryCache.products,
    };
  }

  const blobProducts = await readBlobJson(blobPaths.products, []);

  if (Array.isArray(blobProducts) && blobProducts.length > 0) {
    memoryCache.products = blobProducts;
    memoryCache.productsSavedAt = Date.now();

    return {
      source: "vercel-blob",
      products: blobProducts,
    };
  }

  const liveProducts = await fetchAllWooProductsLive();

  return {
    source: "woocommerce-live-fallback",
    products: liveProducts,
  };
}

async function getCategorySource() {
  const memoryFresh =
    memoryCache.categories.length > 0 &&
    Date.now() - memoryCache.categoriesSavedAt < MEMORY_TTL;

  if (memoryFresh) {
    return {
      source: "memory-cache",
      categories: memoryCache.categories,
    };
  }

  const blobCategories = await readBlobJson(blobPaths.categories, []);

  if (Array.isArray(blobCategories) && blobCategories.length > 0) {
    memoryCache.categories = blobCategories;
    memoryCache.categoriesSavedAt = Date.now();

    return {
      source: "vercel-blob",
      categories: blobCategories,
    };
  }

  return {
    source: "empty-cache",
    categories: [],
  };
}

export async function healthCheck(req, res) {
  return res.json({
    ok: true,
    message: "Scents By Aamir WooCommerce proxy API is running.",
    timestamp: new Date().toISOString(),
  });
}

export async function getProducts(req, res) {
  try {
    const { source, products } = await getProductSource();

    const filtered = filterAndSortProducts(products, req);
    const pagination = paginate(filtered, req);

    return res.json({
      ok: true,
      source,
      data: pagination.data,
      pagination: {
        page: pagination.page,
        per_page: pagination.per_page,
        total: pagination.total,
        totalPages: pagination.totalPages,
      },
    });
  } catch (error) {
    const wooError = getWooError(error);
    console.error("[getProducts]", wooError);

    return res.status(wooError.status).json({
      ok: false,
      message: "Failed to fetch WooCommerce products.",
      error: wooError.data || wooError.message,
    });
  }
}

export async function getProductBySlug(req, res) {
  try {
    const { slug } = req.params;
    const { source, products } = await getProductSource();

    const product = products.find((item) => item.slug === slug);

    if (!product) {
      return res.status(404).json({
        ok: false,
        message: "Product not found.",
      });
    }

    return res.json({
      ok: true,
      source,
      data: product,
    });
  } catch (error) {
    const wooError = getWooError(error);
    console.error("[getProductBySlug]", wooError);

    return res.status(wooError.status).json({
      ok: false,
      message: "Failed to fetch WooCommerce product.",
      error: wooError.data || wooError.message,
    });
  }
}

export async function getProductById(req, res) {
  try {
    const { id } = req.params;
    const { source, products } = await getProductSource();

    const product = products.find((item) => String(item.id) === String(id));

    if (!product) {
      return res.status(404).json({
        ok: false,
        message: "Product not found.",
      });
    }

    return res.json({
      ok: true,
      source,
      data: product,
    });
  } catch (error) {
    const wooError = getWooError(error);
    console.error("[getProductById]", wooError);

    return res.status(wooError.status).json({
      ok: false,
      message: "Failed to fetch WooCommerce product.",
      error: wooError.data || wooError.message,
    });
  }
}

export async function getCategories(req, res) {
  try {
    const { source, categories } = await getCategorySource();

    return res.json({
      ok: true,
      source,
      data: categories,
    });
  } catch (error) {
    const wooError = getWooError(error);
    console.error("[getCategories]", wooError);

    return res.status(wooError.status).json({
      ok: false,
      message: "Failed to fetch WooCommerce categories.",
      error: wooError.data || wooError.message,
    });
  }
}

export async function getOrders(req, res) {
  try {
    const { page, per_page } = getPagination(req);

    const params = {
      page,
      per_page,
    };

    if (req.query.status) params.status = req.query.status;
    if (req.query.search) params.search = req.query.search;
    if (req.query.customer) params.customer = req.query.customer;
    if (req.query.after) params.after = req.query.after;
    if (req.query.before) params.before = req.query.before;
    if (req.query.orderby) params.orderby = req.query.orderby;
    if (req.query.order) params.order = req.query.order;

    const response = await wooClient.get("/orders", { params });

    return res.json({
      ok: true,
      source: "woocommerce-live",
      data: response.data.map(normalizeWooOrder),
      pagination: {
        page,
        per_page,
        total: Number(response.headers["x-wp-total"] || 0),
        totalPages: Number(response.headers["x-wp-totalpages"] || 0),
      },
    });
  } catch (error) {
    const wooError = getWooError(error);
    console.error("[getOrders]", wooError);

    return res.status(wooError.status).json({
      ok: false,
      message: "Failed to fetch WooCommerce orders.",
      error: wooError.data || wooError.message,
    });
  }
}

export async function createOrder(req, res) {
  try {
    const {
      payment_method = "cod",
      payment_method_title = "Cash on Delivery",
      set_paid = false,
      billing,
      shipping,
      line_items,
      shipping_lines = [],
      customer_note = "",
      coupon_lines = [],
    } = req.body;

    if (!billing?.email || !billing?.first_name || !billing?.phone) {
      return res.status(400).json({
        ok: false,
        message: "Billing first name, email and phone are required.",
      });
    }

    if (!Array.isArray(line_items) || line_items.length === 0) {
      return res.status(400).json({
        ok: false,
        message: "Order must contain at least one product.",
      });
    }

    const payload = {
      payment_method,
      payment_method_title,
      set_paid,
      billing,
      shipping: shipping || billing,
      line_items,
      shipping_lines,
      coupon_lines,
      customer_note,
    };

    const response = await wooClient.post("/orders", payload);

    return res.status(201).json({
      ok: true,
      message: "Order created successfully.",
      data: normalizeWooOrder(response.data),
      raw: response.data,
    });
  } catch (error) {
    const wooError = getWooError(error);
    console.error("[createOrder]", wooError);

    return res.status(wooError.status).json({
      ok: false,
      message: "Failed to create WooCommerce order.",
      error: wooError.data || wooError.message,
    });
  }
}

export async function getOrderById(req, res) {
  try {
    const { id } = req.params;

    const response = await wooClient.get(`/orders/${id}`);

    return res.json({
      ok: true,
      source: "woocommerce-live",
      data: normalizeWooOrder(response.data),
      raw: response.data,
    });
  } catch (error) {
    const wooError = getWooError(error);
    console.error("[getOrderById]", wooError);

    return res.status(wooError.status).json({
      ok: false,
      message: "Failed to fetch WooCommerce order.",
      error: wooError.data || wooError.message,
    });
  }
}

export async function trackOrder(req, res) {
  try {
    const { orderNumber, email } = req.query;

    if (!orderNumber || !email) {
      return res.status(400).json({
        ok: false,
        message: "Order number and email are required.",
      });
    }

    const response = await wooClient.get("/orders", {
      params: {
        search: orderNumber,
        per_page: 10,
      },
    });

    const orders = response.data || [];

    const matchedOrder = orders.find((order) => {
      const sameNumber = String(order.number) === String(orderNumber);
      const sameId = String(order.id) === String(orderNumber);
      const sameEmail =
        String(order.billing?.email || "").toLowerCase() ===
        String(email).toLowerCase();

      return (sameNumber || sameId) && sameEmail;
    });

    if (!matchedOrder) {
      return res.status(404).json({
        ok: false,
        message: "No order found with this order number and email.",
      });
    }

    return res.json({
      ok: true,
      source: "woocommerce-live",
      data: normalizeWooOrder(matchedOrder),
      raw: matchedOrder,
    });
  } catch (error) {
    const wooError = getWooError(error);
    console.error("[trackOrder]", wooError);

    return res.status(wooError.status).json({
      ok: false,
      message: "Failed to track WooCommerce order.",
      error: wooError.data || wooError.message,
    });
  }
}