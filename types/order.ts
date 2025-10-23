export interface OrderItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

export interface ShippingInfo {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  city: string
  region: string
}

export interface Order {
  id: string
  orderNumber: string
  customerName: string
  email: string
  phone: string
  shippingAddress: string
  items: OrderItem[]
  subtotal: number
  shipping: number
  total: number
  paymentMethod: string
  paymentStatus: "pending" | "completed" | "failed"
  status: "pending" | "processing" | "completed" | "cancelled"
  createdAt: string
  paymentReference?: string
  paymentAuthorizationUrl?: string
}

export interface PaymentResponse {
  success: boolean
  message: string
  authorizationUrl?: string
  reference?: string
  orderId?: string
}
