export const WP_BASE =
  process.env.NEXT_PUBLIC_WP_API ||
  "http://localhost/wordpress/index.php?rest_route=/wp/v2";

async function fetchAPI(url) {
  console.log("[Next.js API Call] →", url); // 👈 Debug log

  const res = await fetch(url);

  if (!res.ok) {
    console.error("[Next.js API Error]", res.status, res.statusText);
    throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();
  console.log("[Next.js API Response] →", data); // 👈 Debug log
  return data;
}

export async function fetchPosts(page = 1, per_page = 10) {
  return fetchAPI(
    `${WP_BASE}/articles&_embed&page=${page}&per_page=${per_page}`
  );
}

export async function fetchPostById(id) {
  return fetchAPI(`${WP_BASE}/articles/${id}&_embed`);
}

export async function fetchCategories() {
  return fetchAPI(`${WP_BASE}/categories`);
}

export async function fetchPostsByCategory(catId) {
  return fetchAPI(`${WP_BASE}/articles?categories=${catId}&_embed`);
}
