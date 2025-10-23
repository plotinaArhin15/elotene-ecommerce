"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, RotateCcw, Mail } from "lucide-react"
import Link from "next/link"

export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-cream-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="/images/logo.jpeg"
                alt="elotène"
                className="h-10 w-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = "none"
                  const textLogo = target.nextElementSibling as HTMLElement
                  if (textLogo) textLogo.style.display = "block"
                }}
              />
              <div className="text-2xl font-bold text-stone-800 hidden" style={{ fontFamily: "serif" }}>
                elotène
              </div>
            </Link>
            <Link href="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Returns & Refunds Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4 flex items-center justify-center">
              <RotateCcw className="h-8 w-8 mr-3 text-amber-600" />
              Returns & Refunds Policy
            </h1>
            <p className="text-lg text-stone-600">About Returns and Getting Your Money Back</p>
          </div>

          <div className="prose prose-lg max-w-none text-stone-600 space-y-8">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <p className="text-lg leading-relaxed font-medium text-stone-700 mb-4">
                Thanks for shopping with Eloténe. Before you buy, please take a moment to understand our policy on
                returns and refunds.
              </p>
            </div>

            {/* No Returns Policy */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h2 className="text-xl font-bold text-red-800 mb-4">All Sales Are Final</h2>
              <div className="space-y-3 text-stone-600">
                <p>
                  Because our tote bags are uniquely crafted and designed, <strong>all sales are final</strong>. We
                  cannot accept returns or exchanges.
                </p>
                <p>Once it leaves us, we cannot take it back and resell it while guaranteeing its perfect condition.</p>
                <p className="font-semibold text-red-700">
                  We generally do not offer refunds. Buying from us means you fully agree with these terms.
                </p>
              </div>
            </div>

            {/* Exception Cases */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h2 className="text-xl font-bold text-green-800 mb-4">The Only Exception</h2>
              <p className="text-stone-600 mb-4">The only exception is if we made a clear mistake, such as:</p>
              <ul className="space-y-2 text-stone-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Sending you the wrong item</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>
                    A verified problem with the product that was definitely our fault during handling or packing
                  </span>
                </li>
              </ul>
            </div>

            {/* Important Reminder */}
            <div className="bg-cream-50 border border-cream-200 rounded-lg p-6">
              <h2 className="text-xl font-bold text-stone-800 mb-4">Before You Buy</h2>
              <p className="text-stone-600">
                We sincerely encourage you to <strong>check your order details carefully before paying</strong>. If you
                have any questions at all, please ask us first.
              </p>
            </div>

            {/* Refund Process */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h2 className="text-xl font-bold text-blue-800 mb-4">If a Refund is Approved</h2>
              <p className="text-stone-600 mb-4">If we agree that a refund is due because it was our error:</p>
              <div className="space-y-3 text-stone-600">
                <div className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                    1
                  </span>
                  <p>We will let you know once we have checked your request and decided to approve it.</p>
                </div>
                <div className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                    2
                  </span>
                  <p>
                    If approved, we will process the refund back to your original payment method within{" "}
                    <strong>10 business days</strong>.
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                    3
                  </span>
                  <p>
                    Remember, it might take your bank or payment provider a few extra days for the refund to show in
                    your account.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact for Issues */}
            <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 text-center">
              <h2 className="text-xl font-bold text-stone-800 mb-4">Still Have Not Seen Your Refund?</h2>
              <p className="text-stone-600 mb-4">
                Have not seen your refund after <strong>15 business days</strong> since we approved it?
              </p>
              <div className="flex items-center justify-center space-x-2 text-amber-600 font-semibold">
                <Mail className="h-5 w-5" />
                <span>Give us a call at elotene.business@gmail.com</span>
              </div>
              <p className="text-stone-600 mt-2">We will be sure to look into it.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
