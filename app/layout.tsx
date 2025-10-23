import type React from "react"
import { Raleway } from "next/font/google"
import type { Metadata } from "next"
import Script from "next/script"
import { AuthProvider } from "@/contexts/auth-context"
import { CartProvider } from "@/contexts/cart-context"
import "./globals.css"

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-raleway",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Eloténe - Rooted. Rare. Royal.",
  description: "Handcrafted tote bags celebrating African heritage through contemporary design.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={raleway.variable}>
      <body className={raleway.className}>
        <AuthProvider>
          <CartProvider>{children}</CartProvider>
        </AuthProvider>
        <Script src="//code.tidio.co/vup4wffqvu2eosu9uwnizjwh79w1qexd.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
