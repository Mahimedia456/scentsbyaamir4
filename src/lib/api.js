const API_BASE = (
  import.meta.env.VITE_API_BASE_URL || "http://localhost:4000/api"
).replace(/\/+$/, "");

export async function apiFetch(path, options = {}) {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const url = `${API_BASE}${cleanPath}`;

  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...(options.headers || {}),
    },
  });

  const json = await response.json().catch(() => null);

  if (!response.ok) {
    const message =
      json?.message ||
      json?.error?.message ||
      `API request failed with status ${response.status}`;

    throw new Error(message);
  }

  return json;
}