export const SHOPIFY_CONFIG = {
  domain: "x6pg7u-kp.myshopify.com",
  storefrontAccessToken: "0f8a7385692af80810b14390d17eba19",
  sdkUrl: "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js",
}

export const SHOPIFY_PRODUCTS = {
  "heritage-terracotta": "12060658172222",
  "heritage-cerulean": "12060658336062",
  "heritage-obsidian": "12060658172222",
}

export type ShopifyProduct = keyof typeof SHOPIFY_PRODUCTS
