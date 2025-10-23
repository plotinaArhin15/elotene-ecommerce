import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { verifyPaystackPayment } from "@/lib/paystack"
import { updateOrderStatus } from "@/app/actions/orders"

export async function GET(req: NextRequest) {
  try {
    // Get reference from URL params
    const { searchParams } = new URL(req.url)
    const reference = searchParams.get("reference")
    const orderId = reference?.split("-")[0] // We stored orderId as first part of reference

    if (!reference || !orderId) {
      return NextResponse.json(
        { success: false, message: "Missing payment reference or order ID" },
        { status: 400 }
      )
    }

    // Verify payment with Paystack
    const verification = await verifyPaystackPayment(reference)

    if (verification.success) {
      // Payment successful - update order status
      await updateOrderStatus(orderId, "processing", "completed")
      
      // Redirect to thank you page
      return NextResponse.redirect(
        `${process.env.NEXT_PUBLIC_APP_BASE_URL}/thank-you?order=${orderId}&status=success`
      )
    } else {
      // Payment failed - update order status and redirect
      await updateOrderStatus(orderId, "pending", "failed")
      
      return NextResponse.redirect(
        `${process.env.NEXT_PUBLIC_APP_BASE_URL}/thank-you?order=${orderId}&status=failed`
      )
    }
  } catch (error) {
    console.error("/api/paystack/verify error:", error)
    return NextResponse.json(
      { success: false, message: error instanceof Error ? error.message : "Server error" },
      { status: 500 }
    )
  }
}