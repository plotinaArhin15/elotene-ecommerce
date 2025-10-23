"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ValuesPage() {
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

      {/* Core Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Eloténe Core Values</h1>
            <p className="text-lg text-stone-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Authenticity */}
            <div className="bg-gradient-to-br from-amber-50 to-cream-50 p-8 rounded-lg border border-amber-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <h2 className="text-2xl font-bold text-stone-800">Authenticity</h2>
              </div>
              <p className="text-stone-600 leading-relaxed">
                We are committed to honouring the rich heritage of African kente. We ensure that every Eloténe tote bag
                features genuine kente patterns and is crafted using traditional techniques, celebrating the artistry
                and cultural significance of the designs.
              </p>
            </div>

            {/* Quality */}
            <div className="bg-gradient-to-br from-stone-50 to-cream-50 p-8 rounded-lg border border-stone-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-stone-800 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">Q</span>
                </div>
                <h2 className="text-2xl font-bold text-stone-800">Quality</h2>
              </div>
              <p className="text-stone-600 leading-relaxed">
                We believe in creating products that last. We meticulously select high-quality denim and partner with
                skilled artisans to ensure that each tote bag is durable, well-made, and able to withstand daily use.
              </p>
            </div>

            {/* Sustainability */}
            <div className="bg-gradient-to-br from-green-50 to-cream-50 p-8 rounded-lg border border-green-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <h2 className="text-2xl font-bold text-stone-800">Sustainability</h2>
              </div>
              <p className="text-stone-600 leading-relaxed">
                We are dedicated to minimizing our environmental impact. We source materials responsibly and aim to use
                sustainable practices throughout our production process, ensuring that our tote bags are not only
                beautiful but also kind to the planet.
              </p>
            </div>

            {/* Community */}
            <div className="bg-gradient-to-br from-blue-50 to-cream-50 p-8 rounded-lg border border-blue-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <h2 className="text-2xl font-bold text-stone-800">Community</h2>
              </div>
              <p className="text-stone-600 leading-relaxed">
                We believe in the power of connection and shared values. Our community is at the heart of Eloténe. We
                celebrate the artistry of our artisans, the stories behind our designs, and the people who choose to
                carry our bags.
              </p>
            </div>

            {/* Excellence */}
            <div className="bg-gradient-to-br from-purple-50 to-cream-50 p-8 rounded-lg border border-purple-200 md:col-span-2">
              <div className="flex items-center mb-4 justify-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">E</span>
                </div>
                <h2 className="text-2xl font-bold text-stone-800">Excellence</h2>
              </div>
              <p className="text-stone-600 leading-relaxed text-center">
                We are committed to excellence in every aspect of our work. We strive for the highest standards in
                craftsmanship, materials, and customer experience. We meticulously source the finest jeans material and
                authentic African Kente patterns, ensuring that each tote bag is a testament to quality and artistry.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-cream-50 rounded-lg p-8 border border-cream-200">
              <h3 className="text-xl font-bold text-stone-800 mb-4">These Values Drive Everything We Do</h3>
              <p className="text-stone-600 mb-6">
                From the selection of materials to the final stitch, every Eloténe tote bag embodies these core
                principles.
              </p>
              <Link href="/#products">
                <Button
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-3 rounded-full"
                >
                  Experience Our Values
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
