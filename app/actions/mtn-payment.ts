"use server"

// MTN payment functions deprecated. These placeholders preserve the API
// so other parts of the app don't break, but they return a failure response
// indicating MTN integration was removed.

export async function processMTNPayment(
  amount: number,
  phoneNumber: string,
  orderId: string,
  customerName: string,
): Promise<{ success: boolean; message: string; referenceId?: string }> {
  console.warn("processMTNPayment called but MTN integration has been removed.")
  return {
    success: false,
    message: "MTN Mobile Money integration has been removed from this project.",
  }
}

export async function verifyMTNPayment(referenceId: string): Promise<{ success: boolean; message: string }> {
  console.warn("verifyMTNPayment called but MTN integration has been removed.")
  return {
    success: false,
    message: "MTN Mobile Money integration has been removed from this project.",
  }
}
