"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { X, Send, Bot, User } from "lucide-react"
import { useState } from "react"

interface ChatbotProps {
  onClose: () => void
}

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
}

export function Chatbot({ onClose }: ChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content:
        "Hello! I'm your elotène assistant. I can help you with product details, shipping info, returns policy, care instructions, and more. What would you like to know?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const getResponse = (userInput: string): string => {
    const inputLower = userInput.toLowerCase()

    if (
      inputLower.includes("product") ||
      inputLower.includes("bag") ||
      inputLower.includes("tote") ||
      inputLower.includes("collection")
    ) {
      return "We have 3 beautiful tote bags:\n\nHeritage Terracotta Tote - ₵350 (traditional patterns in greens & reds)\nArtisan Denim Collection - ₵380 (four distinct pattern squares)\nRoyal Forest Tote - ₵370 (diagonal geometric patterns)\n\nAll bags are 42×35×12cm and handcrafted with traditional techniques!"
    }

    if (
      inputLower.includes("ship") ||
      inputLower.includes("deliver") ||
      inputLower.includes("cost") ||
      inputLower.includes("time")
    ) {
      return "Shipping Info:\n\nAccra & Tema: 1-2 days (₵15)\nGreater Accra: 2-3 days (₵25)\nOther regions: 3-5 days (₵35)\nInternational: 7-14 days\n\nFREE shipping on orders over ₵500!\n\nWe accept mobile money, bank transfer, and cash on delivery."
    }

    if (inputLower.includes("return") || inputLower.includes("refund") || inputLower.includes("exchange")) {
      return "Important: All sales are FINAL - no returns or exchanges.\n\nThe only exception is if we made a mistake (wrong item sent or verified defect from our handling).\n\nPlease check your order carefully before purchasing! If you have questions, ask me first or contact eloténe@gmail.com"
    }

    if (
      inputLower.includes("care") ||
      inputLower.includes("clean") ||
      inputLower.includes("wash") ||
      inputLower.includes("maintain")
    ) {
      return "Care Instructions:\n\nSpot clean with mild soap & water\nAir dry only\nStore in cool, dry place\n\nNO machine washing\nAvoid prolonged sun exposure\nNo harsh chemicals\n\nUse fabric protector spray for extra durability!"
    }

    if (
      inputLower.includes("size") ||
      inputLower.includes("dimension") ||
      inputLower.includes("fit") ||
      inputLower.includes("capacity")
    ) {
      return "Size Details:\n\nDimensions: 42cm × 35cm × 12cm\nHandle drop: 25cm\nMax weight: 3kg\n\nFits perfectly:\n13 inch laptops\nA4 documents\nWater bottles\nDaily essentials\n\nWont fit 15+ inch laptops comfortably"
    }

    if (
      inputLower.includes("contact") ||
      inputLower.includes("phone") ||
      inputLower.includes("email") ||
      inputLower.includes("hours")
    ) {
      return "Contact Us:\n\nEmail: eloténe@gmail.com (24hr response)\nPhone: +233 XX XXX XXXX\nLocation: Accra, Ghana\n\nBusiness Hours:\nMon-Fri: 9AM-6PM\nSat: 10AM-4PM\nSun: Closed"
    }

    if (
      inputLower.includes("story") ||
      inputLower.includes("about") ||
      inputLower.includes("brand") ||
      inputLower.includes("heritage")
    ) {
      return "About elotène:\n\nWe are ROOTED. RARE. ROYAL.\n\nFounded in 2025 by Samuel & Plotina, elotène fuses African heritage with modern style. Each bag is handcrafted using traditional techniques and authentic patterns.\n\nSocial Impact: 2% of every sale supports Sickle Cell Foundation!\n\nWe believe in fewer, better things that tell your story."
    }

    if (inputLower.includes("price") || inputLower.includes("cost") || inputLower.includes("cedi")) {
      return "Pricing (Ghana Cedis):\n\nHeritage Terracotta: ₵350\nArtisan Denim: ₵380\nRoyal Forest: ₵370\n\nShipping: ₵15-35 (FREE over ₵500)\nPayment: Mobile money, bank transfer, cash on delivery"
    }

    if (inputLower.includes("color") || inputLower.includes("colour") || inputLower.includes("available")) {
      return "Available Colors:\n\nHeritage Terracotta:\nTerracotta, Forest Green, Crimson Red\n\nArtisan Denim:\nDenim Blue, Sunset Orange, Golden Yellow\n\nRoyal Forest:\nForest Green, Royal Gold, Crimson Red"
    }

    return "I'm here to help! I can assist with:\n\nProduct details & colors\nShipping & delivery\nReturns policy\nCare instructions\nSize guide\nContact info\nBrand story\n\nWhat specific question do you have about our elotène tote bags?"
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
    }

    setMessages((prev) => [...prev, userMessage])
    const userInput = input.trim()
    setInput("")
    setIsLoading(true)

    setTimeout(() => {
      const response = getResponse(userInput)
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response,
      }
      setMessages((prev) => [...prev, assistantMessage])
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-md h-96 flex flex-col">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg font-semibold">elotène Assistant</CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col">
          <div className="flex-1 overflow-y-auto space-y-4 mb-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start space-x-2 ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {message.role === "assistant" && (
                  <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <Bot className="h-3 w-3 text-amber-600" />
                  </div>
                )}
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                    message.role === "user" ? "bg-stone-800 text-white" : "bg-stone-100 text-stone-800"
                  }`}
                  style={{ whiteSpace: "pre-line" }}
                >
                  {message.content}
                </div>
                {message.role === "user" && (
                  <div className="w-6 h-6 rounded-full bg-stone-800 flex items-center justify-center flex-shrink-0">
                    <User className="h-3 w-3 text-white" />
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start space-x-2">
                <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center">
                  <Bot className="h-3 w-3 text-amber-600" />
                </div>
                <div className="bg-stone-100 text-stone-800 px-3 py-2 rounded-lg text-sm">Typing...</div>
              </div>
            )}
          </div>
          <form onSubmit={handleSubmit} className="flex space-x-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about our tote bags..."
              className="flex-1"
              disabled={isLoading}
            />
            <Button type="submit" size="sm" disabled={isLoading || !input.trim()}>
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
