"use client"

import type React from "react"
import { X } from "lucide-react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Smartphone, Building2, Lock, AlertCircle } from "lucide-react"
import Link from "next/link"
import { useCart } from "@/contexts/cart-context"
import { useRouter } from "next/navigation"
import type { ShippingInfo, Order } from "@/types/order"
import { saveOrder } from "@/app/actions/orders"

type PaymentMethod = "vodafone" | "airteltigo" | "bank"

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart()
  const router = useRouter()
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("vodafone")
  const [error, setError] = useState<string>("")

  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    region: "",
  })

  const shipping =
    totalPrice >= 500
      ? 0
      : shippingInfo.city?.toLowerCase().includes("accra") || shippingInfo.city?.toLowerCase().includes("tema")
      ? 15
      : shippingInfo.region?.toLowerCase().includes("greater accra")
      ? 25
      : 35

  const total = totalPrice + shipping

  const isFormValid =
    shippingInfo.firstName &&
    shippingInfo.lastName &&
    shippingInfo.email &&
    shippingInfo.phone &&
    shippingInfo.address &&
    shippingInfo.city &&
    shippingInfo.region

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!isFormValid || items.length === 0) {
      setError("Please fill in all required fields")
      return
    }

    setIsProcessing(true)
    console.log("Starting checkout process...")

  try {
      // Generate order
      const orderNumber = `ELO${Date.now().toString().slice(-8)}`
      const orderId = `order_${Date.now()}`

      console.log("Creating order:", { orderNumber, orderId })

      const order: Order = {
        id: orderId,
        orderNumber,
        customerName: `${shippingInfo.firstName} ${shippingInfo.lastName}`,
        email: shippingInfo.email,
        phone: shippingInfo.phone,
        shippingAddress: `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.region}`,
        items: items.map((item) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          image: item.image,
        })),
        subtotal: totalPrice,
        shipping,
        total,
        paymentMethod:
          paymentMethod === "vodafone"
            ? "Vodafone Cash"
            : paymentMethod === "airteltigo"
              ? "AirtelTigo Money"
              : "Bank Transfer",
        paymentStatus: "pending",
        status: "pending",
        createdAt: new Date().toISOString(),
      }

      // Save order
      {/* Provider-specific instructions: MTN removed from this build. */}

      // If payment method is bank, just save order and show instructions
      if (paymentMethod === "bank") {
        const res = await saveOrder(order)
        if (res.success) {
          clearCart()
          router.push(`/thank-you?page=bank&order=${order.id}`)
        } else {
          setError(res.message || "Failed to save order")
        }
        return
      }

      // For mobile money options, use Paystack initialization API
      const initializeResp = await fetch("/api/paystack/initialize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          order,
          email: shippingInfo.email,
          amount: total,
          phone: shippingInfo.phone,
        }),
      })

      const initResult = await initializeResp.json()

      if (!initializeResp.ok || !initResult.success) {
        console.error("Paystack init failed:", initResult)
        setError(initResult.message || "Failed to initialize payment. Please try again.")
        return
      }

      // Clear cart and redirect user to Paystack authorization URL
      clearCart()
      if (initResult.authorizationUrl) {
        window.location.href = initResult.authorizationUrl
      } else {
        setError("Payment gateway did not return a redirect URL.")
      }
    } catch (error) {
      console.error("Checkout error:", error)
      const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred"
      setError(errorMessage)
    } finally {
      setIsProcessing(false)
    }
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-cream-50 flex items-center justify-center p-4">
        <Card className="max-w-md w-full text-center p-8">
          <h2 className="text-2xl font-bold text-stone-800 mb-4">Your cart is empty</h2>
          <p className="text-stone-600 mb-6">Add some items to your cart before checking out.</p>
          <Link href="/">
            <Button className="bg-amber-600 hover:bg-amber-700">Continue Shopping</Button>
          </Link>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/images/logo.jpeg" alt="elotène" className="h-10 w-auto" />
            </Link>
            <Link href="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Checkout Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-stone-800 mb-8">Secure Checkout</h1>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3">
            <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-semibold text-red-800 mb-1">Error</h3>
              <p className="text-sm text-red-700">{error}</p>
            </div>
            <button onClick={() => setError("")} className="text-red-400 hover:text-red-600">
              <X className="h-4 w-4" />
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Shipping Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Shipping Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1">First Name *</label>
                      <Input
                        required
                        value={shippingInfo.firstName}
                        onChange={(e) => setShippingInfo({ ...shippingInfo, firstName: e.target.value })}
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1">Last Name *</label>
                      <Input
                        required
                        value={shippingInfo.lastName}
                        onChange={(e) => setShippingInfo({ ...shippingInfo, lastName: e.target.value })}
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">Email Address *</label>
                    <Input
                      type="email"
                      required
                      value={shippingInfo.email}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, email: e.target.value })}
                      placeholder="john.doe@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">Phone Number *</label>
                    <Input
                      required
                      value={shippingInfo.phone}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, phone: e.target.value })}
                      placeholder="0XX XXX XXXX"
                    />
                    <p className="text-xs text-stone-500 mt-1">
                      This number will be used for Mobile Money payment if selected
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">Delivery Address *</label>
                    <Input
                      required
                      value={shippingInfo.address}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                      placeholder="House number, street name, area"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1">City *</label>
                      <Input
                        required
                        value={shippingInfo.city}
                        onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                        placeholder="e.g., Accra, Kumasi"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1">Region *</label>
                      <Input
                        required
                        value={shippingInfo.region}
                        onChange={(e) => setShippingInfo({ ...shippingInfo, region: e.target.value })}
                        placeholder="e.g., Greater Accra"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card>
                <CardHeader>
                  <CardTitle>Payment Method</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-3">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("vodafone")}
                      className={`p-4 border rounded-lg text-left transition-all ${
                        paymentMethod === "vodafone"
                          ? "border-amber-500 bg-amber-50 ring-2 ring-amber-500"
                          : "border-stone-200 hover:border-stone-300"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                          <Smartphone className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <div className="font-medium">Vodafone Cash</div>
                          <div className="text-sm text-stone-500">Payment via Vodafone Cash</div>
                        </div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod("airteltigo")}
                      className={`p-4 border rounded-lg text-left transition-all ${
                        paymentMethod === "airteltigo"
                          ? "border-amber-500 bg-amber-50 ring-2 ring-amber-500"
                          : "border-stone-200 hover:border-stone-300"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                          <Smartphone className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <div className="font-medium">AirtelTigo Money</div>
                          <div className="text-sm text-stone-500">Payment via AirtelTigo Money</div>
                        </div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod("bank")}
                      className={`p-4 border rounded-lg text-left transition-all ${
                        paymentMethod === "bank"
                          ? "border-amber-500 bg-amber-50 ring-2 ring-amber-500"
                          : "border-stone-200 hover:border-stone-300"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <Building2 className="h-5 w-5 text-amber-600" />
                        <div>
                          <div className="font-medium">Bank Transfer</div>
                          <div className="text-sm text-stone-500">Direct bank deposit</div>
                        </div>
                      </div>
                    </button>
                  </div>

                  {/* Provider-specific instructions: MTN removed from this build. */}

                  {(paymentMethod === "vodafone" || paymentMethod === "airteltigo") && (
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-stone-700">
                      After placing your order, we'll send payment instructions to your phone and email.
                    </div>
                  )}

                  {paymentMethod === "bank" && (
                    <div className="bg-stone-50 border border-stone-200 rounded-lg p-4">
                      <p className="text-sm text-stone-700 mb-2">
                        <strong>Bank Transfer Details:</strong>
                      </p>
                      <div className="text-sm text-stone-600 space-y-1">
                        <p>
                          <strong>Bank:</strong> GCB Bank Limited
                        </p>
                        <p>
                          <strong>Account Name:</strong> Eloténe Ghana Ltd
                        </p>
                        <p className="mt-3 text-amber-700">
                          Please send proof of payment to: elotene.business@gmail.com with your order number
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Button
                type="submit"
                disabled={!isFormValid || isProcessing}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-4 text-lg rounded-full"
              >
                {isProcessing ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Processing Order...</span>
                    </div>
                  ) : (
                    `Place Order - ₵${total.toFixed(2)}`
                  )}
              </Button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center space-x-3 pb-3 border-b border-cream-200">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-12 h-12 rounded object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{item.name}</p>
                        <p className="text-xs text-stone-500">Qty: {item.quantity}</p>
                      </div>
                      <p className="text-sm font-semibold">₵{(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 pt-4 border-t border-stone-200">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>₵{totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? "FREE" : `₵${shipping.toFixed(2)}`}</span>
                  </div>
                  {totalPrice >= 500 && (
                    <p className="text-xs text-green-600">🎉 You've qualified for free shipping!</p>
                  )}
                  <div className="flex justify-between text-lg font-bold pt-2 border-t border-stone-200">
                    <span>Total</span>
                    <span className="text-amber-600">₵{total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="bg-cream-50 rounded-lg p-3 text-xs text-stone-600">
                  <Lock className="h-3 w-3 inline mr-1" />
                  Your information is secure and encrypted
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
