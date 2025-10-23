import type { PaymentResponse } from "@/types/order"

const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY || ""
const PAYSTACK_PUBLIC_KEY = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || ""

export interface PaystackPaymentData {
  email: string
  amount: number // in pesewas (GHS * 100)
  reference: string
  metadata: {
    orderId: string
    customerName: string
    phone: string
  }
  callback_url?: string
}

export async function initializePaystackPayment(data: PaystackPaymentData): Promise<PaymentResponse> {
  try {
    // Debug logging
    console.log("Environment check:")
    console.log("- PAYSTACK_SECRET_KEY exists:", !!process.env.PAYSTACK_SECRET_KEY)
    console.log("- PAYSTACK_SECRET_KEY length:", process.env.PAYSTACK_SECRET_KEY?.length || 0)
    console.log("- Key starts with 'sk_':", process.env.PAYSTACK_SECRET_KEY?.startsWith("sk_"))
    console.log("Payment amount (pesewas):", data.amount)

    if (!PAYSTACK_SECRET_KEY) {
      console.error("PAYSTACK_SECRET_KEY is not configured")
      return {
        success: false,
        message: "Payment gateway is not configured. Please contact support.",
      }
    }

    const response = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    console.log("Paystack API status:", response.status)

    const result = await response.json()
    console.log("Paystack API response:", result)

    if (result.status) {
      return {
        success: true,
        message: "Payment initialized successfully",
        authorizationUrl: result.data.authorization_url,
        reference: result.data.reference,
      }
    } else {
      return {
        success: false,
        message: result.message || "Failed to initialize payment. Please try again.",
      }
    }
  } catch (error) {
    console.error("Paystack initialization error:", error)
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Failed to connect to payment gateway. Please check your internet connection.",
    }
  }
}

export async function verifyPaystackPayment(reference: string): Promise<{ success: boolean; data?: any }> {
  try {
    if (!PAYSTACK_SECRET_KEY) {
      console.error("PAYSTACK_SECRET_KEY is not configured")
      return { success: false }
    }

    const response = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
      },
    })

    const result = await response.json()
    console.log("Paystack verification response:", result)

    if (result.status && result.data.status === "success") {
      return {
        success: true,
        data: result.data,
      }
    } else {
      return {
        success: false,
      }
    }
  } catch (error) {
    console.error("Paystack verification error:", error)
    return {
      success: false,
    }
  }
}

export { PAYSTACK_PUBLIC_KEY }
