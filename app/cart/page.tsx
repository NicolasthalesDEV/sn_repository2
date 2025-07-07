"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Home, Eye, Minus, Plus, Trash2 } from "lucide-react"

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: "1", name: "1.100 Cash", price: 5.0, quantity: 1 },
    { id: "2", name: "500 Cash", price: 2.5, quantity: 1 },
  ])

  const updateQuantity = (id: string, change: number) => {
    setCartItems((items) =>
      items.map((item) => (item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item)),
    )
  }

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="min-h-screen bg-[#0a1628] text-white flex flex-col">
      <div className="flex-grow">
        {/* Header */}
        <header className="flex items-center justify-between p-6 border-b border-gray-800">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-white hover:text-gray-300">
              <div className="w-10 h-10 bg-[#1e3a5f] rounded-full flex items-center justify-center">
                <Home className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-lg">Home</div>
                <div className="text-sm text-gray-400 flex items-center gap-1">
                  <ArrowLeft className="w-3 h-3" />
                  Return
                </div>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xl font-semibold">Checkout</span>
            <div className="w-10 h-10 bg-[#1e3a5f] rounded-full flex items-center justify-center">
              <Eye className="w-5 h-5" />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id} className="bg-[#1a2332] border-gray-700 p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <h3 className="text-lg font-medium text-white">{item.name}</h3>
                      <div className="flex items-center gap-2 text-gray-400">
                        <span className="text-sm">Qty:</span>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="w-8 h-8 bg-transparent border-gray-600 text-white hover:bg-gray-700"
                            onClick={() => updateQuantity(item.id, -1)}
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="w-8 h-8 bg-transparent border-gray-600 text-white hover:bg-gray-700"
                            onClick={() => updateQuantity(item.id, 1)}
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="bg-purple-600 px-4 py-2 rounded-md">
                        <span className="font-semibold">{(item.price * item.quantity).toFixed(2)} USD</span>
                      </div>
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-8 h-8 bg-red-600 border-red-600 text-white hover:bg-red-700"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Basket Summary */}
            <div className="lg:col-span-1">
              <Card className="bg-[#1a2332] border-gray-700 p-6 sticky top-8">
                <h2 className="text-2xl font-bold text-white mb-6">Your Basket</h2>

                <div className="flex justify-between items-center mb-6">
                  <span className="text-gray-400 text-lg">Total</span>
                  <span className="text-2xl font-bold text-white">{total.toFixed(2)} USD</span>
                </div>

                <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 mb-4">
                  Proceed to checkout ▶
                </Button>

                <p className="text-gray-400 text-sm text-center mb-4">
                  You will be redirected to our payment gateway to complete your purchase
                </p>

                <div className="text-center">
                  <Link href="/products" className="text-purple-400 hover:text-purple-300 font-medium">
                    ◀ Continue shopping
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#0f1419] border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <Image src="/sn-logo-new.png" alt="SN Network" width={80} height={80} className="mb-4" />
              <p className="text-gray-400 text-sm max-w-md">
                Join the ultimate gaming network and connect with players worldwide. Experience premium gaming like
                never before.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-white">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/cart" className="hover:text-white">
                    Cart
                  </Link>
                </li>
                <li>
                  <Link href="/auth/sign-in" className="hover:text-white">
                    Sign In
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">© 2024 SN Network. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
