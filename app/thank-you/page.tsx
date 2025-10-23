"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Package, Mail, Phone } from "lucide-react"
import Link from "next/link"
import type { Order } from "@/types/order"
import { getOrderById } from "@/app/actions/orders"

export default function ThankYouPage() {
  const searchParams = useSearchParams()
  const [order, setOrder] = useState<Order | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadOrder = async () => {
      const orderId = searchParams.get("orderId")
      if (orderId) {
        // Try to get from server first
        let orderData = await getOrderById(orderId)

        // If not found on server, try localStorage
        if (!orderData) {
          const localOrder = localStorage.getItem(`order_${orderId}`)
          if (localOrder) {
            orderData = JSON.parse(localOrder)
          }
        }

        setOrder(orderData)
      }
      setLoading(false)
    }

    loadOrder()
  }, [searchParams])

  if (loading) {
    return (
      <div className="min-h-screen bg-cream-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
      </div>
    )
  }

  if (!order) {
    return (
      <div className="min-h-screen bg-cream-50 flex items-center justify-center p-4">
        <Card className="max-w-md w-full p-8 text-center">
          <h2 className="text-2xl font-bold text-stone-800 mb-4">Order Not Found</h2>
          <Link href="/">
            <Button className="bg-amber-600 hover:bg-amber-700">Return to Home</Button>
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
          <div className="flex justify-center items-center h-16">
            <img src="/images/logo.jpeg" alt="elotène" className="h-10 w-auto" />
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Success Message */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-stone-800 mb-2">Thank You, {order.customerName}!</h1>
          <p className="text-lg text-stone-600">Your order has been received and is being processed.</p>
        </div>

        {/* Order Details Card */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6 pb-6 border-b">
              <div>
                <p className="text-sm text-stone-500">Order Number</p>
                <p className="text-xl font-bold text-amber-600">{order.orderNumber}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-stone-500">Order Date</p>
                <p className="font-semibold">{new Date(order.createdAt).toLocaleDateString()}</p>
              </div>
            </div>

            {/* Order Items */}
            <div className="mb-6">
              <h3 className="font-semibold text-stone-800 mb-4 flex items-center">
                <Package className="h-5 w-5 mr-2" />
                Order Summary
              </h3>
              <div className="space-y-3">
                {order.items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 pb-3 border-b border-cream-200">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-16 h-16 rounded object-cover"
                    />
                    <div className="flex-1">
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-stone-500">Quantity: {item.quantity}</p>
                    </div>
                    <p className="font-semibold">₵{(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-2 mt-4 pt-4 border-t border-stone-200">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>₵{order.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Shipping</span>
                  <span>{order.shipping === 0 ? "FREE" : `₵${order.shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-lg font-bold pt-2 border-t border-stone-200">
                  <span>Total</span>
                  <span className="text-amber-600">₵{order.total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Delivery Info */}
            <div className="bg-cream-50 rounded-lg p-4">
              <h3 className="font-semibold text-stone-800 mb-3">Delivery Information</h3>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="text-stone-500">Name:</span>{" "}
                  <span className="font-medium">{order.customerName}</span>
                </p>
                <p>
                  <span className="text-stone-500">Email:</span> <span className="font-medium">{order.email}</span>
                </p>
                <p>
                  <span className="text-stone-500">Phone:</span> <span className="font-medium">{order.phone}</span>
                </p>
                <p>
                  <span className="text-stone-500">Address:</span>{" "}
                  <span className="font-medium">{order.shippingAddress}</span>
                </p>
                <p>
                  <span className="text-stone-500">Payment Method:</span>{" "}
                  <span className="font-medium">{order.paymentMethod}</span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What's Next */}
        <Card className="bg-gradient-to-br from-amber-50 to-cream-50">
          <CardContent className="p-6">
            <h3 className="font-semibold text-stone-800 mb-4">What Happens Next?</h3>
            <div className="space-y-3 text-sm text-stone-600">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-amber-600 mt-0.5" />
                <p>
                  We'll send payment instructions to <strong>{order.email}</strong> and <strong>{order.phone}</strong>
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-amber-600 mt-0.5" />
                <p>Please complete payment and send proof to: elotene.business@gmail.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <Package className="h-5 w-5 text-amber-600 mt-0.5" />
                <p>Your order will be shipped within 1-2 business days after payment confirmation</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Link href="/" className="flex-1">
            <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">Continue Shopping</Button>
          </Link>
          <Link href="/contact" className="flex-1">
            <Button variant="outline" className="w-full bg-transparent">
              Contact Support
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
