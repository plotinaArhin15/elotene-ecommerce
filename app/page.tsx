"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Menu, X, User } from "lucide-react"
import { EnhancedCart } from "@/components/enhanced-cart"
import { AuthModal } from "@/components/auth-modal"
import { useAuth } from "@/contexts/auth-context"
import { useCart } from "@/contexts/cart-context"
import { useRouter } from "next/navigation"
import Link from "next/link"

interface Product {
  id: string
  name: string
  price: number
  image: string
  description: string
  colors: string[]
}

const products: Product[] = [
  {
    id: "1",
    name: "Heritage Terracotta Tote",
    price: 350.0,
    image: "/images/bag-orange.jpeg",
    description:
      "The warmth of clay. The spirit of home. Hand-detailed in denim and Kente — bold, earthy, and timeless.",
    colors: ["Terracotta", "Forest Green", "Crimson Red"],
  },
  {
    id: "2",
    name: "Heritage Cerulean Tote",
    price: 380.0,
    image: "/images/bag-denim.jpeg",
    description: "Blue that breathes. Calm, weightless, grounded in craft. A balance of denim ease and quiet grace.",
    colors: ["Cerulean Blue", "Sunset Orange", "Golden Yellow"],
  },
  {
    id: "3",
    name: "Heritage Obsidian Tote",
    price: 370.0,
    image: "/images/bag-green.jpeg",
    description: "Dark as depth. Strong as silence. Lasting form and power — heritage refined to its core.",
    colors: ["Obsidian Black", "Royal Gold", "Crimson Red"],
  },
]

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const { isAuthenticated } = useAuth()
  const { addToCart, totalItems } = useCart()
  const router = useRouter()

  const handleAuthClick = () => {
    if (isAuthenticated) {
      router.push("/profile")
    } else {
      setIsAuthModalOpen(true)
    }
  }

  const navLinks = [
    { href: "/", label: "Home", isExternal: false },
    { href: "/#products", label: "Collection", isExternal: false },
    { href: "/about", label: "About", isExternal: true },
    { href: "/values", label: "Our Values", isExternal: true },
    { href: "/terms", label: "Terms", isExternal: true },
    { href: "/privacy", label: "Privacy", isExternal: true },
    { href: "/shipping", label: "Shipping", isExternal: true },
    { href: "/returns", label: "Returns", isExternal: true },
    { href: "/contact", label: "Contact", isExternal: true },
  ]

  const handleNavClick = (href: string, isExternal: boolean) => {
    setIsMobileMenuOpen(false)
    if (!isExternal && href.startsWith("/#")) {
      const element = document.querySelector(href.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-cream-200 sticky top-0 z-40 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <img
                  src="/images/logo.jpeg"
                  alt="elotène"
                  className="h-10 w-auto"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = "none"
                    const textLogo = target.nextElementSibling as HTMLElement
                    if (textLogo) textLogo.style.display = "block"
                  }}
                />
                <div className="text-2xl font-bold text-stone-800 hidden" style={{ fontFamily: "serif" }}>
                  elotène
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-4">
              {navLinks.map((link) =>
                link.isExternal ? (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-stone-700 hover:text-amber-600 font-medium transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-stone-700 hover:text-amber-600 font-medium transition-colors text-sm"
                    onClick={(e) => {
                      if (link.href.startsWith("/#")) {
                        e.preventDefault()
                        handleNavClick(link.href, false)
                      }
                    }}
                  >
                    {link.label}
                  </a>
                ),
              )}
            </nav>

            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm" onClick={handleAuthClick} className="relative bg-transparent">
                <User className="h-4 w-4" />
                {isAuthenticated && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"></span>
                )}
              </Button>

              <Button variant="outline" size="sm" onClick={() => setIsCartOpen(true)} className="relative">
                <ShoppingCart className="h-4 w-4" />
                {totalItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                    {totalItems}
                  </Badge>
                )}
              </Button>

              <Button
                variant="outline"
                size="sm"
                className="lg:hidden bg-transparent"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 animate-fade-in">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />

          <div className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl animate-slide-in-right">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b border-cream-200 bg-cream-50">
                <div className="flex items-center space-x-2">
                  <img src="/images/logo.jpeg" alt="elotène" className="h-8 w-auto" />
                  <span className="text-xl font-bold text-stone-800" style={{ fontFamily: "serif" }}>
                    Menu
                  </span>
                </div>
                <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen(false)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <nav className="flex-1 overflow-y-auto p-4">
                <div className="space-y-2">
                  {navLinks.map((link, index) =>
                    link.isExternal ? (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-3 rounded-lg text-stone-700 hover:bg-amber-50 hover:text-amber-600 font-medium transition-all duration-200 border border-transparent hover:border-amber-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                        style={{
                          animationDelay: `${index * 0.05}s`,
                          animation: "slide-in-left 0.3s ease-out forwards",
                          opacity: 0,
                        }}
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-3 rounded-lg text-stone-700 hover:bg-amber-50 hover:text-amber-600 font-medium transition-all duration-200 border border-transparent hover:border-amber-200"
                        onClick={(e) => {
                          if (link.href.startsWith("/#")) {
                            e.preventDefault()
                          }
                          handleNavClick(link.href, false)
                        }}
                        style={{
                          animationDelay: `${index * 0.05}s`,
                          animation: "slide-in-left 0.3s ease-out forwards",
                          opacity: 0,
                        }}
                      >
                        {link.label}
                      </a>
                    ),
                  )}
                </div>
              </nav>

              <div className="p-4 border-t border-cream-200 bg-cream-50">
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent"
                    onClick={() => {
                      setIsMobileMenuOpen(false)
                      handleAuthClick()
                    }}
                  >
                    <User className="h-4 w-4 mr-2" />
                    {isAuthenticated ? "My Profile" : "Login / Sign Up"}
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent"
                    onClick={() => {
                      setIsMobileMenuOpen(false)
                      setIsCartOpen(true)
                    }}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Cart {totalItems > 0 && `(${totalItems})`}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="py-16 lg:py-24 bg-gradient-to-br from-cream-50 to-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-stone-800 mb-6 leading-tight tracking-wide">
                  ROOTED. RARE. ROYAL.
                </h1>
                <p className="text-lg md:text-xl text-stone-600 mb-8 leading-relaxed max-w-lg">
                  Discover our collection of handcrafted tote bags celebrating African heritage through contemporary
                  design. Each piece tells a story of tradition, artistry, and cultural pride.
                </p>
                <Button
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  onClick={() => handleNavClick("#products", false)}
                >
                  Shop Collection
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
                <div className="text-center sm:text-left">
                  <h3 className="font-semibold text-stone-800 mb-2">Handcrafted</h3>
                  <p className="text-sm text-stone-600">Made with traditional techniques</p>
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="font-semibold text-stone-800 mb-2">Authentic</h3>
                  <p className="text-sm text-stone-600">Genuine African patterns</p>
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="font-semibold text-stone-800 mb-2">Premium</h3>
                  <p className="text-sm text-stone-600">High-quality materials</p>
                </div>
              </div>
            </div>

            <div className="relative animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <div className="aspect-square lg:aspect-[4/3] relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/images/hero-new.jpeg"
                  alt="elotène - Rooted. Rare. Royal."
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-200 rounded-full opacity-20 -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-cream-200 rounded-full opacity-30 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Our Heritage Collection</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Each tote bag is a masterpiece, handcrafted with traditional African patterns that tell stories of our
              rich cultural heritage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card
                key={product.id}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm border-cream-200 animate-fade-in-scale"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="aspect-[3/4] relative bg-cream-50">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-contain p-4"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-stone-800 mb-2">{product.name}</h3>
                  <p className="text-stone-600 mb-4 text-sm italic">{product.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.colors.map((color) => (
                      <Badge key={color} variant="secondary" className="text-xs bg-cream-100 text-stone-700">
                        {color}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-amber-600">₵{product.price.toFixed(2)}</span>
                    <Button
                      onClick={() =>
                        addToCart({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          image: product.image,
                        })
                      }
                      className="bg-stone-800 hover:bg-stone-700"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cart */}
      {isCartOpen && <EnhancedCart onClose={() => setIsCartOpen(false)} />}

      {/* Auth Modal */}
      {isAuthModalOpen && <AuthModal onClose={() => setIsAuthModalOpen(false)} />}
    </div>
  )
}
