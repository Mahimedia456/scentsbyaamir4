import { del, list, put } from "@vercel/blob";

const PRODUCTS_BLOB_PATH = "scents-cache/products.json";
const CATEGORIES_BLOB_PATH = "scents-cache/categories.json";

function hasBlobToken() {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN);
}

export const blobPaths = {
  products: PRODUCTS_BLOB_PATH,
  categories: CATEGORIES_BLOB_PATH,
};

export async function readBlobJson(pathname, fallback = []) {
  try {
    if (!hasBlobToken()) {
      return fallback;
    }

    const result = await list({
      prefix: pathname,
      limit: 1,
      token: process.env.BLOB_READ_WRITE_TOKEN,
    });

    const blob = result.blobs.find((item) => item.pathname === pathname);

    if (!blob?.url) {
      return fallback;
    }

    const response = await fetch(blob.url, {
      cache: "no-store",
    });

    if (!response.ok) {
      return fallback;
    }

    return await response.json();
  } catch (error) {
    console.error("[readBlobJson]", error.message);
    return fallback;
  }
}

export async function writeBlobJson(pathname, data) {
  if (!hasBlobToken()) {
    throw new Error("BLOB_READ_WRITE_TOKEN is missing.");
  }

  try {
    await del(pathname, {
      token: process.env.BLOB_READ_WRITE_TOKEN,
    });
  } catch {
    // Ignore missing blob delete errors.
  }

  const body = JSON.stringify(data, null, 2);

  const blob = await put(pathname, body, {
    access: "public",
    contentType: "application/json",
    token: process.env.BLOB_READ_WRITE_TOKEN,
  });

  return blob;
}