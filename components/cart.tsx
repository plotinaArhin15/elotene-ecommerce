"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { X, Plus, Minus, CreditCard } from "lucide-react"

interface CartItem {
  id: string
  name: string
  price: number
  image: string
  quantity: number
}

interface CartProps {
  items: CartItem[]
  onClose: () => void
  onUpdateQuantity: (id: string, quantity: number) => void
  onCheckout: () => void
  total: number
}

export function Cart({ items, onClose, onUpdateQuantity, onCheckout, total }: CartProps) {
  const handleCheckout = () => {
    // Open the Ghana-specific checkout instead of showing alert
    onCheckout()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-md h-96 flex flex-col">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg font-semibold">Shopping Cart</CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col">
          {items.length === 0 ? (
            <div className="flex-1 flex items-center justify-center text-stone-500">Your cart is empty</div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3 p-2 border rounded-lg">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-12 h-12 rounded object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{item.name}</h4>
                      <p className="text-amber-600 font-semibold">₵{item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm" onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <Button variant="outline" size="sm" onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-semibold">Total:</span>
                  <span className="font-bold text-lg text-amber-600">₵{total.toFixed(2)}</span>
                </div>
                <Button className="w-full bg-stone-800 hover:bg-stone-700" onClick={handleCheckout}>
                  <CreditCard className="h-4 w-4 mr-2" />
                  Checkout
                </Button>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
