"use client"

import { useEffect, useRef } from "react"
import { SHOPIFY_CONFIG, SHOPIFY_PRODUCTS } from "@/lib/shopify-config"

interface ShopifyBuyButtonProps {
  productKey: keyof typeof SHOPIFY_PRODUCTS
  containerId: string
}

declare global {
  interface Window {
    ShopifyBuy?: any
  }
}

export function ShopifyBuyButton({ productKey, containerId }: ShopifyBuyButtonProps) {
  const isInitialized = useRef(false)

  useEffect(() => {
    if (isInitialized.current) return

    function loadScript() {
      if (document.querySelector(`script[src="${SHOPIFY_CONFIG.sdkUrl}"]`)) {
        if (window.ShopifyBuy?.UI) {
          initShopify()
        }
        return
      }

      const script = document.createElement("script")
      script.async = true
      script.src = SHOPIFY_CONFIG.sdkUrl
      script.onload = initShopify
      document.head.appendChild(script)
    }

    function initShopify() {
      if (!window.ShopifyBuy) return

      const client = window.ShopifyBuy.buildClient({
        domain: SHOPIFY_CONFIG.domain,
        storefrontAccessToken: SHOPIFY_CONFIG.storefrontAccessToken,
      })

      window.ShopifyBuy.UI.onReady(client).then((ui: any) => {
        ui.createComponent("product", {
          id: SHOPIFY_PRODUCTS[productKey],
          node: document.getElementById(containerId),
          moneyFormat: "GH₵{{amount}}",
          options: {
            product: {
              styles: {
                product: {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0",
                    "margin-bottom": "0",
                  },
                },
                button: {
                  "font-family": "Raleway, sans-serif",
                  "font-weight": "600",
                  "background-color": "#d97706",
                  ":hover": {
                    "background-color": "#b45309",
                  },
                  "border-radius": "9999px",
                  padding: "12px 32px",
                },
              },
              contents: {
                img: false,
                title: false,
                price: false,
              },
              text: {
                button: "Add to Cart",
              },
            },
            cart: {
              styles: {
                button: {
                  "font-family": "Raleway, sans-serif",
                  "font-weight": "600",
                  "background-color": "#d97706",
                  ":hover": {
                    "background-color": "#b45309",
                  },
                  "border-radius": "0.5rem",
                },
              },
              text: {
                total: "Subtotal",
                button: "Checkout",
              },
            },
            toggle: {
              styles: {
                toggle: {
                  "font-family": "Raleway, sans-serif",
                  "background-color": "#d97706",
                  ":hover": {
                    "background-color": "#b45309",
                  },
                },
                count: {
                  "font-size": "14px",
                },
              },
            },
            modalProduct: {
              contents: {
                img: false,
                imgWithCarousel: true,
                button: false,
                buttonWithQuantity: true,
              },
              styles: {
                product: {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0",
                    "margin-bottom": "0",
                  },
                },
              },
              text: {
                button: "Add to Cart",
              },
            },
          },
        })

        isInitialized.current = true
      })
    }

    loadScript()
  }, [productKey, containerId])

  return <div id={containerId} className="shopify-buy-button-container" />
}
