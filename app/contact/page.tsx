"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Mail, Phone, MapPin, Send } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
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

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Get in Touch</h1>
            <p className="text-lg text-stone-600">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-stone-800 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-800 mb-1">Email</h3>
                      <p className="text-stone-600">elotene.business@gmail.com</p>
                      <p className="text-sm text-stone-500">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-800 mb-1">Phone</h3>
                      <p className="text-stone-600">+233 055 327 8054, +233 054 389 7068</p>
                      <p className="text-sm text-stone-500">Mon-Fri 9AM-6PM (GMT)</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-800 mb-1">Location</h3>
                      <p className="text-stone-600">Accra, Ghana</p>
                      <p className="text-sm text-stone-500">Serving customers nationwide</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-cream-50 rounded-lg p-6 border border-cream-200">
                <h2 className="text-xl font-bold text-stone-800 mb-4">Business Hours</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-stone-600">Monday - Friday</span>
                    <span className="font-semibold text-stone-800">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-600">Saturday</span>
                    <span className="font-semibold text-stone-800">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-600">Sunday</span>
                    <span className="font-semibold text-stone-800">Closed</span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h2 className="text-xl font-bold text-stone-800 mb-4">Follow Us</h2>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center text-white hover:bg-stone-700 transition-colors"
                  >
                    <span className="text-sm font-bold">IG</span>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center text-white hover:bg-stone-700 transition-colors"
                  >
                    <span className="text-sm font-bold">FB</span>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center text-white hover:bg-stone-700 transition-colors"
                  >
                    <span className="text-sm font-bold">TW</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-cream-50 rounded-lg p-8 border border-cream-200">
              <h2 className="text-2xl font-bold text-stone-800 mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-stone-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-stone-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-stone-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="order">Order Question</option>
                    <option value="shipping">Shipping & Delivery</option>
                    <option value="product">Product Information</option>
                    <option value="refund">Refund Request</option>
                    <option value="wholesale">Wholesale Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-stone-800 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-stone-800 mb-2">How long does shipping take?</h3>
                  <p className="text-stone-600 text-sm">
                    Delivery times vary by location: 1-2 days for Accra & Tema, 2-3 days for Greater Accra, and 3-5 days
                    for other regions.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-stone-800 mb-2">Can I return my tote bag?</h3>
                  <p className="text-stone-600 text-sm">
                    All sales are final. We only offer refunds if there was an error on our part, such as sending the
                    wrong item.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-stone-800 mb-2">What payment methods do you accept?</h3>
                  <p className="text-stone-600 text-sm">
                    We accept mobile money, bank transfers, and cash on delivery for orders within Ghana.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-stone-800 mb-2">Are your bags handmade?</h3>
                  <p className="text-stone-600 text-sm">
                    Yes! Each elotène tote bag is handcrafted using traditional techniques and features authentic
                    African patterns.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-stone-800 mb-2">Do you offer wholesale pricing?</h3>
                  <p className="text-stone-600 text-sm">
                    Yes, we offer wholesale pricing for bulk orders. Please contact us directly to discuss your
                    requirements.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-stone-800 mb-2">How do I care for my tote bag?</h3>
                  <p className="text-stone-600 text-sm">
                    Spot clean with mild soap and water, air dry only. Avoid machine washing and prolonged sun exposure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
