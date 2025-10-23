"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import { useRouter } from "next/navigation"

interface EnhancedCartProps {
  onClose: () => void
}

export function EnhancedCart({ onClose }: EnhancedCartProps) {
  const { items, updateQuantity, totalPrice, totalItems } = useCart()
  const router = useRouter()

  const handleCheckout = () => {
    onClose()
    router.push("/checkout")
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-md max-h-[90vh] flex flex-col">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 border-b">
          <CardTitle className="text-lg font-semibold flex items-center">
            <ShoppingBag className="h-5 w-5 mr-2" />
            Shopping Cart ({totalItems})
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col pt-4">
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-stone-500">
              <ShoppingBag className="h-16 w-16 mb-4 opacity-20" />
              <p className="text-lg font-medium">Your cart is empty</p>
              <p className="text-sm mt-2">Add some beautiful tote bags to get started!</p>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-cream-50">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-16 h-16 rounded object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm truncate">{item.name}</h4>
                      <p className="text-amber-600 font-semibold text-sm">₵{item.price.toFixed(2)}</p>
                      {item.color && <p className="text-xs text-stone-500">{item.color}</p>}
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="h-8 w-8 p-0"
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="h-8 w-8 p-0"
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t pt-4 space-y-4">
                <div className="flex justify-between items-center text-lg">
                  <span className="font-semibold">Subtotal:</span>
                  <span className="font-bold text-amber-600">₵{totalPrice.toFixed(2)}</span>
                </div>
                <p className="text-xs text-stone-500 text-center">
                  Shipping calculated at checkout • Free shipping on orders over 500 pieces
                </p>
                <Button
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded-full"
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </Button>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
