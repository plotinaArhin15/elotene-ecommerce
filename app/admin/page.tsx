"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Package, DollarSign, Clock, CheckCircle, Eye } from "lucide-react"
import type { Order } from "@/types/order"
import { getOrders } from "@/app/actions/orders"
import Link from "next/link"

export default function AdminDashboard() {
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)

  useEffect(() => {
    loadOrders()
  }, [])

  const loadOrders = async () => {
    const data = await getOrders()
    setOrders(data.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()))
    setLoading(false)
  }

  const stats = {
    total: orders.length,
    pending: orders.filter((o) => o.status === "pending").length,
    completed: orders.filter((o) => o.status === "completed").length,
    revenue: orders.reduce((sum, o) => (o.paymentStatus === "completed" ? sum + o.total : sum), 0),
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "processing":
        return "bg-blue-100 text-blue-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-stone-100 text-stone-800"
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-cream-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-stone-800">Admin Dashboard</h1>
            <Link href="/">
              <Button variant="outline" size="sm">
                View Store
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-stone-500">Total Orders</p>
                  <p className="text-3xl font-bold text-stone-800">{stats.total}</p>
                </div>
                <Package className="h-10 w-10 text-amber-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-stone-500">Pending</p>
                  <p className="text-3xl font-bold text-yellow-600">{stats.pending}</p>
                </div>
                <Clock className="h-10 w-10 text-yellow-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-stone-500">Completed</p>
                  <p className="text-3xl font-bold text-green-600">{stats.completed}</p>
                </div>
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-stone-500">Revenue</p>
                  <p className="text-3xl font-bold text-amber-600">₵{stats.revenue.toFixed(2)}</p>
                </div>
                <DollarSign className="h-10 w-10 text-amber-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Orders Table */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-cream-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-stone-500 uppercase">Order #</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-stone-500 uppercase">Customer</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-stone-500 uppercase">Date</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-stone-500 uppercase">Total</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-stone-500 uppercase">Payment</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-stone-500 uppercase">Status</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-stone-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  {orders.map((order) => (
                    <tr key={order.id} className="hover:bg-cream-50">
                      <td className="px-4 py-4 text-sm font-medium">{order.orderNumber}</td>
                      <td className="px-4 py-4 text-sm">
                        <div>
                          <p className="font-medium">{order.customerName}</p>
                          <p className="text-stone-500">{order.email}</p>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm">{new Date(order.createdAt).toLocaleDateString()}</td>
                      <td className="px-4 py-4 text-sm font-semibold">₵{order.total.toFixed(2)}</td>
                      <td className="px-4 py-4 text-sm">
                        <Badge className={getStatusColor(order.paymentStatus)}>{order.paymentStatus}</Badge>
                      </td>
                      <td className="px-4 py-4 text-sm">
                        <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
                      </td>
                      <td className="px-4 py-4 text-sm">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setSelectedOrder(order)}
                          className="flex items-center"
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Order Detail Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Order Details - {selectedOrder.orderNumber}</CardTitle>
              <Button variant="ghost" size="sm" onClick={() => setSelectedOrder(null)}>
                ✕
              </Button>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-stone-500">Customer</p>
                  <p className="font-semibold">{selectedOrder.customerName}</p>
                  <p className="text-sm text-stone-600">{selectedOrder.email}</p>
                  <p className="text-sm text-stone-600">{selectedOrder.phone}</p>
                </div>
                <div>
                  <p className="text-sm text-stone-500">Shipping Address</p>
                  <p className="text-sm">{selectedOrder.shippingAddress}</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Order Items</h3>
                <div className="space-y-2">
                  {selectedOrder.items.map((item) => (
                    <div key={item.id} className="flex justify-between items-center p-2 bg-cream-50 rounded">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-stone-500">Qty: {item.quantity}</p>
                      </div>
                      <p className="font-semibold">₵{(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>₵{selectedOrder.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Shipping</span>
                  <span>₵{selectedOrder.shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span className="text-amber-600">₵{selectedOrder.total.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
