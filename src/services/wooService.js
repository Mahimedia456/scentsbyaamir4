import { apiFetch } from "../lib/api";

function buildQuery(params = {}) {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      searchParams.set(key, value);
    }
  });

  const query = searchParams.toString();
  return query ? `?${query}` : "";
}

export async function fetchWooProducts(params = {}) {
  const query = buildQuery(params);
  const json = await apiFetch(`/woo/products${query}`);

  return {
    products: json.data || [],
    pagination: json.pagination || null,
    source: json.source || null,
  };
}

export async function fetchWooProductBySlug(slug) {
  if (!slug) {
    throw new Error("Product slug is required.");
  }

  const json = await apiFetch(`/woo/products/slug/${slug}`);
  return json.data;
}

export async function fetchWooProductById(id) {
  if (!id) {
    throw new Error("Product ID is required.");
  }

  const json = await apiFetch(`/woo/products/${id}`);
  return json.data;
}

export async function fetchWooCategories(params = {}) {
  const query = buildQuery(params);
  const json = await apiFetch(`/woo/categories${query}`);

  return {
    categories: json.data || [],
    source: json.source || null,
  };
}

export async function createWooOrder(payload) {
  const json = await apiFetch("/woo/orders", {
    method: "POST",
    body: JSON.stringify(payload),
  });

  return json.data;
}

export async function fetchWooOrders(params = {}) {
  const query = buildQuery(params);
  const json = await apiFetch(`/woo/orders${query}`);

  return {
    orders: json.data || [],
    pagination: json.pagination || null,
    source: json.source || null,
  };
}

export async function trackWooOrder({ orderNumber, email }) {
  const query = buildQuery({ orderNumber, email });
  const json = await apiFetch(`/woo/orders/track${query}`);

  return json.data;
}

export async function getSyncStatus() {
  const json = await apiFetch("/sync/status");
  return json.data;
}

export async function syncWooAll(token) {
  return apiFetch("/sync/all", {
    method: "POST",
    headers: {
      "x-sync-token": token,
    },
  });
}

export async function syncWooProducts(token) {
  return apiFetch("/sync/products", {
    method: "POST",
    headers: {
      "x-sync-token": token,
    },
  });
}

export async function syncWooCategories(token) {
  return apiFetch("/sync/categories", {
    method: "POST",
    headers: {
      "x-sync-token": token,
    },
  });
}