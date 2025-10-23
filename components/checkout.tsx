"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { X, Smartphone, Building } from "lucide-react"

interface CartItem {
  id: string
  name: string
  price: number
  image: string
  quantity: number
}

interface CheckoutProps {
  items: CartItem[]
  total: number
  onClose: () => void
  onOrderComplete: () => void
}

type PaymentMethod = "momo" | "transfer"

export function Checkout({ items, total, onClose, onOrderComplete }: CheckoutProps) {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("momo")
  const [selectedProvider, setSelectedProvider] = useState("vodafone")
  const [isProcessing, setIsProcessing] = useState(false)
  const [copiedField, setCopiedField] = useState<string | null>(null)

  const [customerInfo, setCustomerInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    region: "",
  })

  const shippingCost =
    total >= 500
      ? 0
      : customerInfo.city?.toLowerCase().includes("accra") || customerInfo.city?.toLowerCase().includes("tema")
        ? 15
        : customerInfo.region?.toLowerCase().includes("greater accra")
          ? 25
          : 35

  const finalTotal = total + shippingCost

  const momoProviders = [
    { id: "vodafone", name: "Vodafone Cash", color: "bg-red-500" },
    { id: "airteltigo", name: "AirtelTigo Money", color: "bg-blue-500" },
  ]

  const bankDetails = {
    accountName: "Eloténe Ghana Ltd",
    accountNumber: "1234567890123",
    bank: "GCB Bank Limited",
    branch: "Accra Main Branch",
    sortCode: "280101",
  }

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(field)
    setTimeout(() => setCopiedField(null), 2000)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Generate order number
    const orderNumber = `ELO${Date.now().toString().slice(-6)}`

    // Show success message based on payment method
    let successMessage = ""
    switch (paymentMethod) {
      case "momo":
        successMessage = `Order #${orderNumber} placed! You'll receive a Mobile Money prompt on ${customerInfo.phone} shortly. Please complete the payment to confirm your order.`
        break
      case "transfer":
        successMessage = `Order #${orderNumber} placed! Please transfer ₵${finalTotal.toFixed(2)} to our bank account and send proof to eloténe@gmail.com with your order number.`
        break
    }

    alert(successMessage)
    setIsProcessing(false)
    onOrderComplete()
    onClose()
  }

  const isFormValid =
    customerInfo.firstName &&
    customerInfo.lastName &&
    customerInfo.email &&
    customerInfo.phone &&
    customerInfo.address &&
    customerInfo.city &&
    customerInfo.region

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="text-xl font-semibold">Checkout</CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Order Summary */}
          <div className="bg-cream-50 rounded-lg p-4 border border-cream-200">
            <h3 className="font-semibold text-stone-800 mb-3">Order Summary</h3>
            <div className="space-y-2">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span>
                    {item.name} × {item.quantity}
                  </span>
                  <span>₵{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="border-t border-cream-300 pt-2 mt-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>₵{total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Shipping</span>
                  <span>{shippingCost === 0 ? "FREE" : `₵${shippingCost.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between font-semibold text-lg border-t border-cream-300 pt-2 mt-2">
                  <span>Total</span>
                  <span className="text-amber-600">₵{finalTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Customer Information */}
            <div>
              <h3 className="font-semibold text-stone-800 mb-4">Customer Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">First Name *</label>
                  <Input
                    required
                    value={customerInfo.firstName}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, firstName: e.target.value })}
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Last Name *</label>
                  <Input
                    required
                    value={customerInfo.lastName}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, lastName: e.target.value })}
                    placeholder="Your last name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Email *</label>
                  <Input
                    type="email"
                    required
                    value={customerInfo.email}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Phone Number *</label>
                  <Input
                    required
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                    placeholder="0XX XXX XXXX"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-stone-700 mb-1">Delivery Address *</label>
                  <Input
                    required
                    value={customerInfo.address}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                    placeholder="House number, street name, area"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">City *</label>
                  <Input
                    required
                    value={customerInfo.city}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, city: e.target.value })}
                    placeholder="e.g., Accra, Kumasi, Tema"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Region *</label>
                  <Input
                    required
                    value={customerInfo.region}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, region: e.target.value })}
                    placeholder="e.g., Greater Accra, Ashanti"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method Selection */}
            <div>
              <h3 className="font-semibold text-stone-800 mb-4">Payment Method</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod("momo")}
                  className={`p-4 border rounded-lg text-left transition-colors ${
                    paymentMethod === "momo"
                      ? "border-amber-500 bg-amber-50"
                      : "border-stone-200 hover:border-stone-300"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Smartphone className="h-5 w-5 text-amber-600" />
                    <div>
                      <div className="font-medium">Mobile Money</div>
                      <div className="text-sm text-stone-500">Vodafone, AirtelTigo</div>
                    </div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod("transfer")}
                  className={`p-4 border rounded-lg text-left transition-colors ${
                    paymentMethod === "transfer"
                      ? "border-amber-500 bg-amber-50"
                      : "border-stone-200 hover:border-stone-300"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Building className="h-5 w-5 text-amber-600" />
                    <div>
                      <div className="font-medium">Bank Transfer</div>
                      <div className="text-sm text-stone-500">Direct bank deposit</div>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Payment Method Details */}
            {paymentMethod === "momo" && (
              <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                <h4 className="font-medium text-stone-800 mb-3">Select Mobile Money Provider</h4>
                <div className="space-y-2">
                  {momoProviders.map((provider) => (
                    <label key={provider.id} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="momoProvider"
                        value={provider.id}
                        checked={selectedProvider === provider.id}
                        onChange={(e) => setSelectedProvider(e.target.value)}
                        className="text-amber-600"
                      />
                      <div className={`w-4 h-4 rounded-full ${provider.color}`}></div>
                      <span className="text-stone-700">{provider.name}</span>
                    </label>
                  ))}
                </div>
                <p className="text-sm text-stone-600 mt-3">
                  You'll receive a payment prompt on your phone after placing the order.
                </p>
              </div>
            )}

            {paymentMethod === "transfer" && (
              <div className="bg-stone-50 rounded-lg p-4 border border-stone-200">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-medium text-stone-800">Bank Transfer Details</h4>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(bankDetails.accountName, "accountName")}
                  >
                    Copy Account Name
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-stone-600">Account Name</label>
                    <div className="flex items-center justify-between bg-white p-2 rounded border">
                      <span className="text-sm font-mono">{bankDetails.accountName}</span>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-stone-600">Account Number</label>
                    <div className="flex items-center justify-between bg-white p-2 rounded border">
                      <span className="text-sm font-mono">{bankDetails.accountNumber}</span>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-stone-600">Bank</label>
                    <div className="flex items-center justify-between bg-white p-2 rounded border">
                      <span className="text-sm">{bankDetails.bank}</span>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-stone-600">Sort Code</label>
                    <div className="flex items-center justify-between bg-white p-2 rounded border">
                      <span className="text-sm font-mono">{bankDetails.sortCode}</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-stone-600 mt-3">
                  Transfer ₵{finalTotal.toFixed(2)} and send proof of payment to eloténe@gmail.com with your order
                  number.
                </p>
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={!isFormValid || isProcessing}
              className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg"
            >
              {isProcessing ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Processing Order...</span>
                </div>
              ) : (
                  `Place Order - ₵${finalTotal.toFixed(2)}`
                )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
