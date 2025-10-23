"use server"

import type { Order } from "@/types/order"

export async function sendOrderConfirmationEmail(order: Order): Promise<{ success: boolean; message: string }> {
  try {
    // In production, use a service like SendGrid, Resend, or Nodemailer
    // For now, we'll simulate sending an email
    console.log("Sending order confirmation email to:", order.email)
    console.log("Order details:", order)

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // In a real implementation, you would use an email service:
    /*
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [{
          to: [{ email: order.email }],
          subject: `Order Confirmation - ${order.orderNumber}`,
        }],
        from: { email: 'noreply@elotene.com', name: 'Eloténe' },
        content: [{
          type: 'text/html',
          value: generateEmailHTML(order),
        }],
      }),
    });
    */

    return {
      success: true,
      message: "Confirmation email sent successfully",
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      message: "Failed to send confirmation email",
    }
  }
}

function generateEmailHTML(order: Order): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #d97706; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background-color: #f9f9f9; }
          .order-item { border-bottom: 1px solid #ddd; padding: 10px 0; }
          .total { font-size: 20px; font-weight: bold; color: #d97706; margin-top: 20px; }
          .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Thank You for Your Order!</h1>
          </div>
          <div class="content">
            <h2>Order #${order.orderNumber}</h2>
            <p>Dear ${order.customerName},</p>
            <p>Thank you for shopping with Eloténe! Your order has been received and is being processed.</p>
            
            <h3>Order Details:</h3>
            ${order.items
              .map(
                (item) => `
              <div class="order-item">
                <strong>${item.name}</strong> x ${item.quantity}<br>
                ₵${(item.price * item.quantity).toFixed(2)}
              </div>
            `,
              )
              .join("")}
            
            <div class="total">
              <p>Subtotal: ₵${order.subtotal.toFixed(2)}</p>
              <p>Shipping: ₵${order.shipping.toFixed(2)}</p>
              <p>Total: ₵${order.total.toFixed(2)}</p>
            </div>
            
            <h3>Shipping Address:</h3>
            <p>${order.shippingAddress}</p>
            
            <h3>Payment Method:</h3>
            <p>${order.paymentMethod}</p>
          </div>
          <div class="footer">
            <p>If you have any questions, please contact us at elotene.business@gmail.com</p>
            <p>&copy; 2025 Eloténe. All rights reserved.</p>
          </div>
        </div>
      </body>
    </html>
  `
}
