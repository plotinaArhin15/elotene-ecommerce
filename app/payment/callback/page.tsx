"use client"

import { useEffect, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Loader2, CheckCircle, XCircle } from "lucide-react"
import { verifyPaystackPayment } from "@/lib/paystack"
import { updateOrderStatus } from "@/app/actions/orders"
import { sendOrderConfirmationEmail } from "@/app/actions/email"
import { useCart } from "@/contexts/cart-context"
import { getOrderById } from "@/app/actions/orders"

export default function PaymentCallbackPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const { clearCart } = useCart()
  const [status, setStatus] = useState<"verifying" | "success" | "failed">("verifying")

  useEffect(() => {
    const verifyPayment = async () => {
      const reference = searchParams.get("reference")
      const orderId = localStorage.getItem("pending_order_id")

      if (!reference || !orderId) {
        setStatus("failed")
        return
      }

      try {
        const result = await verifyPaystackPayment(reference)

        if (result.success) {
          // Update order status
          await updateOrderStatus(orderId, "processing", "completed")

          // Get order details and send email
          const order = await getOrderById(orderId)
          if (order) {
            await sendOrderConfirmationEmail(order)
          }

          // Clear cart and redirect
          clearCart()
          localStorage.removeItem("pending_order_id")
          setStatus("success")

          setTimeout(() => {
            router.push(`/thank-you?orderId=${orderId}`)
          }, 2000)
        } else {
          await updateOrderStatus(orderId, "pending", "failed")
          setStatus("failed")
        }
      } catch (error) {
        console.error("Payment verification error:", error)
        setStatus("failed")
      }
    }

    verifyPayment()
  }, [searchParams, router, clearCart])

  return (
    <div className="min-h-screen bg-cream-50 flex items-center justify-center p-4">
      <Card className="max-w-md w-full p-8 text-center">
        {status === "verifying" && (
          <>
            <Loader2 className="h-16 w-16 animate-spin text-amber-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-stone-800 mb-2">Verifying Payment</h2>
            <p className="text-stone-600">Please wait while we confirm your payment...</p>
          </>
        )}

        {status === "success" && (
          <>
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-stone-800 mb-2">Payment Successful!</h2>
            <p className="text-stone-600">Redirecting to your order confirmation...</p>
          </>
        )}

        {status === "failed" && (
          <>
            <XCircle className="h-16 w-16 text-red-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-stone-800 mb-2">Payment Failed</h2>
            <p className="text-stone-600 mb-4">
              There was an issue processing your payment. Please try again or contact support.
            </p>
            <button
              onClick={() => router.push("/checkout")}
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-full"
            >
              Try Again
            </button>
          </>
        )}
      </Card>
    </div>
  )
}
