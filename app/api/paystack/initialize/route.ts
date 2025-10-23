import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { initializePaystackPayment } from "@/lib/paystack"
import { saveOrder } from "@/app/actions/orders"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    // Basic validation
    const { order, email, amount, phone } = body
    if (!order || !email || !amount) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 })
    }

    // Prepare Paystack data - Paystack expects amount in pesewas (cents)
    const paystackData = {
      email,
      amount: Math.round(Number(amount) * 100),
      reference: `${order.id}-${Date.now()}`,
      metadata: {
        orderId: order.id,
        customerName: order.customerName,
        phone: phone || "",
      },
      callback_url: `${process.env.NEXT_PUBLIC_APP_BASE_URL || ""}/payment/callback/page`,
    }

    const result = await initializePaystackPayment(paystackData)

    if (!result.success) {
      return NextResponse.json({ success: false, message: result.message || "Failed to initialize payment" }, { status: 500 })
    }

    // Attach payment reference and authorization URL to order and save
    order.paymentReference = result.reference
    order.paymentAuthorizationUrl = result.authorizationUrl

    await saveOrder(order)

    return NextResponse.json({ success: true, authorizationUrl: result.authorizationUrl, reference: result.reference })
  } catch (error) {
    console.error("/api/paystack/initialize error:", error)
    return NextResponse.json({ success: false, message: error instanceof Error ? error.message : "Server error" }, { status: 500 })
  }
}
