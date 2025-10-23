"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
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

      {/* About Section */}
      <section className="py-16 bg-gradient-to-br from-cream-100 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-stone-800 mb-8">About Eloténe</h1>
          </div>

          <div className="prose prose-lg max-w-none text-stone-600 space-y-6">
            <p className="text-lg leading-relaxed">
              Eloténe is more than just a name — it carries pieces of who we are. To us, Eloténe represents the meeting
              point between our roots and our vision: where African heritage and modern style come together to create
              something beautiful and elegant. Simply put, the fusion of African roots and Western sophistication.
            </p>

            <p className="text-lg leading-relaxed">
              Started Eloténe in 2025, with one goal in mind: to make tote bags that feel special — not just in how they
              look, but in how they're made. To make bags that could be worn every day, that told a unique story. So we
              turned to what we know and love: the strength of denim, the symbolism of African Kente, and the value of
              working with our hands.
            </p>

            <p className="text-lg leading-relaxed">
              Every Eloténe bag is made with care, using sustainable materials and traditional craftsmanship. We work
              closely with local artisans who understand the power of process — people who know that good things take
              time.
            </p>

            <p className="text-lg leading-relaxed font-semibold text-center text-amber-700">
              Just thoughtful design and honest work!
            </p>

            <p className="text-lg leading-relaxed">
              What we're building is slow, intentional, and rooted in something real. Our bags are made to last — not
              just in durability, but in meaning. We believe in owning fewer things but better ones. Pieces that grow
              with you, carry your story, and never go out of style.
            </p>

            <p className="text-lg leading-relaxed text-center font-semibold text-amber-600">
              This is Eloténe. Be a part of our story!
            </p>
          </div>

          <div className="text-center mt-12">
            <Link href="/#products">
              <Button
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-3 rounded-full"
              >
                Shop Our Collection
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
