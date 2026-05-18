import fs from "fs/promises";
import path from "path";

const rootDir = process.cwd();
const dataDir = path.join(rootDir, "data");

export const cacheFiles = {
  products: path.join(dataDir, "products.json"),
  categories: path.join(dataDir, "categories.json"),
};

export async function readJsonCache(filePath, fallback = []) {
  try {
    const raw = await fs.readFile(filePath, "utf8");
    const parsed = JSON.parse(raw);

    return parsed;
  } catch {
    return fallback;
  }
}

export async function writeJsonCache(filePath, data) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf8");

  return data;
}