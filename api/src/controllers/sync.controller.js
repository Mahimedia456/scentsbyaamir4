import {
  normalizeWooCategory,
  normalizeWooProduct,
  wooClient,
} from "../config/woocommerce.js";
import { blobPaths, readBlobJson, writeBlobJson } from "../utils/blobCache.js";

function checkSyncAuth(req, res, { allowCron = false } = {}) {
  const expectedToken = process.env.SYNC_ADMIN_TOKEN;
  const cronSecret = process.env.CRON_SECRET;

  if (allowCron) {
    const cronHeader = req.headers["authorization"];
    const expectedCronHeader = cronSecret ? `Bearer ${cronSecret}` : "";

    if (cronSecret && cronHeader === expectedCronHeader) {
      return { ok: true };
    }
  }

  if (!expectedToken) {
    return {
      ok: false,
      response: res.status(500).json({
        ok: false,
        message: "SYNC_ADMIN_TOKEN is missing in environment variables.",
      }),
    };
  }

  const token = req.headers["x-sync-token"] || req.body?.token || req.query?.token;

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

    await writeBlobJson(blobPaths.products, products);

    return res.json({
      ok: true,
      source: "vercel-blob",
      message: "Products synced successfully to Vercel Blob.",
      count: products.length,
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

    await writeBlobJson(blobPaths.categories, categories);

    return res.json({
      ok: true,
      source: "vercel-blob",
      message: "Categories synced successfully to Vercel Blob.",
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

    await Promise.all([
      writeBlobJson(blobPaths.products, products),
      writeBlobJson(blobPaths.categories, categories),
    ]);

    return res.json({
      ok: true,
      source: "vercel-blob",
      message: "WooCommerce data synced successfully to Vercel Blob.",
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

export async function syncWooAllCron(req, res) {
  const auth = checkSyncAuth(req, res, { allowCron: true });
  if (!auth.ok) return auth.response;

  try {
    const [products, categories] = await Promise.all([
      fetchAllWooProducts(),
      fetchAllWooCategories(),
    ]);

    await Promise.all([
      writeBlobJson(blobPaths.products, products),
      writeBlobJson(blobPaths.categories, categories),
    ]);

    return res.json({
      ok: true,
      source: "vercel-blob-cron",
      message: "Cron sync completed successfully.",
      data: {
        products: products.length,
        categories: categories.length,
      },
      syncedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error("[syncWooAllCron]", error?.response?.data || error.message);

    return res.status(error?.response?.status || 500).json({
      ok: false,
      message: "Cron sync failed.",
      error: error?.response?.data || error.message,
    });
  }
}

export async function getSyncStatus(req, res) {
  const products = await readBlobJson(blobPaths.products, []);
  const categories = await readBlobJson(blobPaths.categories, []);

  return res.json({
    ok: true,
    source: "vercel-blob",
    data: {
      products: Array.isArray(products) ? products.length : 0,
      categories: Array.isArray(categories) ? categories.length : 0,
    },
  });
}