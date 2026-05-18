import {
  normalizeWooCategory,
  normalizeWooProduct,
  wooClient,
} from "../config/woocommerce.js";
import { cacheFiles, readJsonCache, writeJsonCache } from "../utils/localCache.js";

function checkSyncAuth(req, res) {
  const expectedToken = process.env.SYNC_ADMIN_TOKEN;

  if (!expectedToken) {
    return {
      ok: false,
      response: res.status(500).json({
        ok: false,
        message: "SYNC_ADMIN_TOKEN is missing in api/.env",
      }),
    };
  }

  const token =
    req.headers["x-sync-token"] ||
    req.body?.token ||
    req.query?.token;

  if (token !== expectedToken) {
    return {
      ok: false,
      response: res.status(401).json({
        ok: false,
        message: "Unauthorized sync request.",
      }),
    };
  }

  return { ok: true };
}

async function fetchAllWooProducts() {
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

  return allProducts;
}

async function fetchAllWooCategories() {
  const allCategories = [];
  let page = 1;
  let totalPages = 1;

  do {
    const response = await wooClient.get("/products/categories", {
      params: {
        per_page: 100,
        page,
        hide_empty: false,
        orderby: "name",
        order: "asc",
      },
    });

    const categories = response.data || [];
    totalPages = Number(response.headers["x-wp-totalpages"] || 1);

    allCategories.push(...categories.map(normalizeWooCategory));
    page += 1;
  } while (page <= totalPages);

  return allCategories;
}

export async function syncWooProducts(req, res) {
  const auth = checkSyncAuth(req, res);
  if (!auth.ok) return auth.response;

  try {
    const products = await fetchAllWooProducts();

    const sortedProducts = products.sort((a, b) => {
      const bDate = new Date(b.dateCreated || 0).getTime();
      const aDate = new Date(a.dateCreated || 0).getTime();
      return bDate - aDate;
    });

    await writeJsonCache(cacheFiles.products, sortedProducts);

    return res.json({
      ok: true,
      message: "Products synced successfully.",
      count: sortedProducts.length,
      syncedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error("[syncWooProducts]", error?.response?.data || error.message);

    return res.status(error?.response?.status || 500).json({
      ok: false,
      message: "Failed to sync WooCommerce products.",
      error: error?.response?.data || error.message,
    });
  }
}

export async function syncWooCategories(req, res) {
  const auth = checkSyncAuth(req, res);
  if (!auth.ok) return auth.response;

  try {
    const categories = await fetchAllWooCategories();

    await writeJsonCache(cacheFiles.categories, categories);

    return res.json({
      ok: true,
      message: "Categories synced successfully.",
      count: categories.length,
      syncedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error("[syncWooCategories]", error?.response?.data || error.message);

    return res.status(error?.response?.status || 500).json({
      ok: false,
      message: "Failed to sync WooCommerce categories.",
      error: error?.response?.data || error.message,
    });
  }
}

export async function syncWooAll(req, res) {
  const auth = checkSyncAuth(req, res);
  if (!auth.ok) return auth.response;

  try {
    const [products, categories] = await Promise.all([
      fetchAllWooProducts(),
      fetchAllWooCategories(),
    ]);

    await writeJsonCache(cacheFiles.products, products);
    await writeJsonCache(cacheFiles.categories, categories);

    return res.json({
      ok: true,
      message: "WooCommerce data synced successfully.",
      data: {
        products: products.length,
        categories: categories.length,
      },
      syncedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error("[syncWooAll]", error?.response?.data || error.message);

    return res.status(error?.response?.status || 500).json({
      ok: false,
      message: "Failed to sync WooCommerce data.",
      error: error?.response?.data || error.message,
    });
  }
}

export async function getSyncStatus(req, res) {
  const products = await readJsonCache(cacheFiles.products, []);
  const categories = await readJsonCache(cacheFiles.categories, []);

  return res.json({
    ok: true,
    data: {
      products: Array.isArray(products) ? products.length : 0,
      categories: Array.isArray(categories) ? categories.length : 0,
    },
  });
}