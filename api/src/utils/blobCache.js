import { del, get, put } from "@vercel/blob";

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
      console.warn("[readBlobJson] BLOB_READ_WRITE_TOKEN is missing.");
      return fallback;
    }

    const blob = await get(pathname, {
      token: process.env.BLOB_READ_WRITE_TOKEN,
    });

    if (!blob?.url) {
      return fallback;
    }

    const response = await fetch(blob.url, {
      cache: "no-store",
      headers: blob.downloadUrl
        ? {}
        : {
            Authorization: `Bearer ${process.env.BLOB_READ_WRITE_TOKEN}`,
          },
    });

    if (!response.ok) {
      console.warn("[readBlobJson] Failed to fetch blob:", response.status);
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
    // Ignore delete errors when file does not exist yet.
  }

  const body = JSON.stringify(data, null, 2);

  const blob = await put(pathname, body, {
    access: "private",
    contentType: "application/json",
    token: process.env.BLOB_READ_WRITE_TOKEN,
    allowOverwrite: true,
  });

  return blob;
}