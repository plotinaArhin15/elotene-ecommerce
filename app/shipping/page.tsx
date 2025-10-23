"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Truck, Clock, Package } from "lucide-react"
import Link from "next/link"

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-cream-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
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
            </Link>
            <Link href="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Shipping Information Section */}
      <section className="py-16 bg-gradient-to-br from-cream-50 to-cream-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4 flex items-center justify-center">
              <Truck className="h-8 w-8 mr-3 text-amber-600" />
              Shipping Information
            </h1>
            <p className="text-lg text-stone-600">Fast, reliable delivery for your elotène tote bags</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Delivery Times */}
            <Card className="bg-white/80 backdrop-blur-sm border-cream-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-amber-600 mr-3" />
                  <h2 className="text-xl font-bold text-stone-800">Delivery Times</h2>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-cream-200">
                    <span className="font-medium text-stone-700">Accra & Tema</span>
                    <span className="text-amber-600 font-semibold">1-2 days</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-cream-200">
                    <span className="font-medium text-stone-700">Greater Accra Region</span>
                    <span className="text-amber-600 font-semibold">2-3 days</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-cream-200">
                    <span className="font-medium text-stone-700">Other Regions</span>
                    <span className="text-amber-600 font-semibold">3-5 days</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium text-stone-700">International</span>
                    <span className="text-amber-600 font-semibold">7-14 days</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Shipping Costs */}
            <Card className="bg-white/80 backdrop-blur-sm border-cream-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Package className="h-6 w-6 text-amber-600 mr-3" />
                  <h2 className="text-xl font-bold text-stone-800">Shipping Costs</h2>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-cream-200">
                    <span className="font-medium text-stone-700">Accra & Tema</span>
                    <span className="text-amber-600 font-semibold">₵15-35</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-cream-200">
                    <span className="font-medium text-stone-700">Greater Accra Region</span>
                    <span className="text-amber-600 font-semibold">₵30-50</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-cream-200">
                    <span className="font-medium text-stone-700">Other Regions</span>
                    <span className="text-amber-600 font-semibold">₵35-50</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium text-stone-700">Orders over 500</span>
                    <span className="text-green-600 font-semibold">FREE</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Shipping Info */}
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-cream-200">
            <h2 className="text-xl font-bold text-stone-800 mb-4">Important Shipping Notes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-stone-700 mb-2">📦 Packaging</h3>
                <p className="text-stone-600 text-sm">
                  All bags are carefully wrapped in protective packaging to ensure they arrive in perfect condition.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-stone-700 mb-2">🏠 Delivery</h3>
                <p className="text-stone-600 text-sm">
                  We deliver to your doorstep. Please ensure someone is available to receive the package.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-stone-700 mb-2">💳 Payment</h3>
                <p className="text-stone-600 text-sm">
                  Cash, Mobile Money and Bank Payments allowed. Unfortunately, we do not consider Payment on Delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
