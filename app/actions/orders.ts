"use server"

import type { Order } from "@/types/order"

// Server-side order management using in-memory storage
// In production, this would use a real database
const orders: Order[] = []

// Get all orders
export async function getOrders(): Promise<Order[]> {
  return orders
}

// Save order
export async function saveOrder(order: Order): Promise<{ success: boolean; message: string }> {
  try {
    orders.push(order)
    console.log("Order saved successfully:", order.orderNumber)
    return { success: true, message: "Order saved successfully" }
  } catch (error) {
    console.error("Error saving order:", error)
    return { success: false, message: "Failed to save order" }
  }
}

// Get order by ID
export async function getOrderById(orderId: string): Promise<Order | null> {
  try {
    return orders.find((order) => order.id === orderId) || null
  } catch (error) {
    console.error("Error getting order:", error)
    return null
  }
}

// Update order status
export async function updateOrderStatus(
  orderId: string,
  status: Order["status"],
  paymentStatus?: Order["paymentStatus"],
): Promise<{ success: boolean; message: string }> {
  try {
    const orderIndex = orders.findIndex((order) => order.id === orderId)

    if (orderIndex === -1) {
      return { success: false, message: "Order not found" }
    }

    orders[orderIndex].status = status
    if (paymentStatus) {
      orders[orderIndex].paymentStatus = paymentStatus
    }

    console.log("Order status updated:", orders[orderIndex].orderNumber)
    return { success: true, message: "Order status updated" }
  } catch (error) {
    console.error("Error updating order status:", error)
    return { success: false, message: "Failed to update order status" }
  }
}
