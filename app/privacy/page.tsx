"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Mail } from "lucide-react"
import Link from "next/link"

export default function PrivacyPage() {
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

      {/* Privacy Policy Section */}
      <section className="py-16 bg-gradient-to-br from-cream-50 to-cream-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Privacy Policy</h1>
            <p className="text-sm text-stone-500 italic">Last Updated: July 13, 2025</p>
          </div>

          <div className="prose prose-lg max-w-none text-stone-600 space-y-8">
            {/* Your Trust Matters */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-amber-800 mb-4">Your Trust Matters</h2>
              <p className="text-stone-700 leading-relaxed">
                At Eloténe, we handcraft tote bags, not data empires. This policy explains what we collect and why,
                plain and simple.
              </p>
            </div>

            {/* What We Collect */}
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-cream-200">
              <h2 className="text-xl font-bold text-stone-800 mb-4 flex items-center">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  1
                </span>
                What We Collect
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <div>
                    <strong className="text-stone-800">Order Details:</strong>
                    <span className="text-stone-600">
                      {" "}
                      Your name, address, phone number, email to ship your tote and send order updates.
                    </span>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <div>
                    <strong className="text-stone-800">Payment Info:</strong>
                    <span className="text-stone-600">
                      {" "}
                      We never see your card details. Payments are processed securely by our payment providers.
                    </span>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <div>
                    <strong className="text-stone-800">Browsing Data:</strong>
                    <span className="text-stone-600">
                      {" "}
                      Basic info like device type to make our website work properly on your phone or laptop.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* How We Use It */}
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-cream-200">
              <h2 className="text-xl font-bold text-stone-800 mb-4 flex items-center">
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  2
                </span>
                How We Use It
              </h2>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span className="text-stone-600">To stitch, pack, and ship your order</span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span className="text-stone-600">To reply when you message us at elotene.business@gmail.com</span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span className="text-stone-600">
                    To send optional updates about new designs, only if you subscribe
                  </span>
                </div>
              </div>
            </div>

            {/* Who We Share With */}
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-cream-200">
              <h2 className="text-xl font-bold text-stone-800 mb-4 flex items-center">
                <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  3
                </span>
                Who We Share With
              </h2>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span className="text-stone-600">
                    <strong>Courier Partners</strong> – just your name and address to deliver your bag.
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span className="text-stone-600">
                    <strong>Payment Processors</strong> – strictly for transaction purposes.
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span className="text-stone-600 font-semibold">
                    Never sold to advertisers or third-party marketers.
                  </span>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-cream-200">
              <h2 className="text-xl font-bold text-stone-800 mb-4 flex items-center">
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  4
                </span>
                Your Rights
              </h2>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span className="text-stone-600">Request access to data we hold about you.</span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span className="text-stone-600">
                    Ask us to delete your account info. Order records kept for 3 years per tax laws.
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span className="text-stone-600">
                    Unsubscribe from emails anytime via the link in every newsletter.
                  </span>
                </div>
              </div>
            </div>

            {/* Questions */}
            <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 text-center">
              <h2 className="text-xl font-bold text-stone-800 mb-4">Questions?</h2>
              <p className="text-stone-600 mb-4">Reach our data lead at:</p>
              <div className="space-y-2">
                <p className="font-semibold text-stone-800">Eloténe</p>
                <div className="flex items-center justify-center space-x-2 text-amber-600 font-semibold">
                  <Mail className="h-5 w-5" />
                  <span>elotene.business@gmail.com</span>
                </div>
                <p className="text-stone-500 italic text-sm">We respond within 72 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
