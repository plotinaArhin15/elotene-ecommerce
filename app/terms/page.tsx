"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-cream-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="/images/logo.jpeg"
                alt="eloténe"
                className="h-10 w-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = "none"
                  const textLogo = target.nextElementSibling as HTMLElement
                  if (textLogo) textLogo.style.display = "block"
                }}
              />
              <div className="text-2xl font-bold text-stone-800 hidden" style={{ fontFamily: "serif" }}>
                eloténe
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

      {/* Terms of Service Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Terms of Service</h1>
            <p className="text-sm text-stone-500 italic">Effective: July 13, 2025</p>
          </div>

          <div className="prose prose-lg max-w-none text-stone-600 space-y-8">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <p className="text-lg leading-relaxed text-stone-700">
                Welcome to Eloténe. These Terms of Service ("Terms") form a legally binding agreement between you ("you"
                or "customer") and Eloténe ("we," "us," or "our") governing your access to our website, purchases, and
                related services. By visiting, registering, or buying from Eloténe, you accept these terms in full.
              </p>
            </div>

            {/* Section 1 */}
            <div className="bg-cream-50 p-6 rounded-lg border border-cream-200">
              <h2 className="text-xl font-bold text-stone-800 mb-4 flex items-center">
                <span className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  1
                </span>
                Overview
              </h2>
              <p className="text-stone-600">
                These terms apply to Eloténe's website, products, and services. Any separate, signed agreement between
                you and Eloténe (for bespoke services, collaborations, or wholesale) will supersede any inconsistent
                provision in these Terms.
              </p>
            </div>

            {/* Section 2 */}
            <div className="bg-cream-50 p-6 rounded-lg border border-cream-200">
              <h2 className="text-xl font-bold text-stone-800 mb-4 flex items-center">
                <span className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  2
                </span>
                Acceptance & Binding Agreement
              </h2>
              <p className="text-stone-600">
                By browsing, registering, ordering, or otherwise using our site, you confirm that you have read,
                understood, and agree to be legally bound by these Terms. In specific situations, we may require
                explicit written or electronic acceptance.
              </p>
            </div>

            {/* Section 3 */}
            <div className="bg-cream-50 p-6 rounded-lg border border-cream-200">
              <h2 className="text-xl font-bold text-stone-800 mb-4 flex items-center">
                <span className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  3
                </span>
                Electronic Communications
              </h2>
              <p className="text-stone-600">
                When you interact with Eloténe online or via email, you consent to electronic communications. Digital
                delivery of notices, invoices, or agreements satisfies any legal requirement for written communications.
              </p>
            </div>

            {/* Section 4 - Intellectual Property */}
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h2 className="text-xl font-bold text-stone-800 mb-4 flex items-center">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  4
                </span>
                Ownership & Intellectual Property
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-stone-800 mb-2">4.1. Eloténe Intellectual Property</h3>
                  <p className="text-stone-600 mb-3">
                    Eloténe (including its affiliates, licensors, and suppliers) owns and retains all right, title, and
                    interest in and to the following, collectively referred to as the "Eloténe Intellectual Property":
                  </p>
                  <ul className="space-y-2 text-stone-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>
                        <strong>(a) The Website & Content:</strong> The Eloténe website (eloténe.com), its entire
                        content, including but not limited to text, graphics, logos, button icons, images, audio clips,
                        digital downloads, data compilations, software, and the selection, arrangement, and "look and
                        feel" of the website.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>
                        <strong>(b) Product Designs & Branding:</strong> All product designs, patterns, colorways,
                        concepts, trademarks, service marks, trade dress, logos, and all other brand identifiers
                        associated with Eloténe products.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>
                        <strong>(c) Marketing Materials:</strong> All advertising, promotional materials, product
                        photographs, descriptions, and catalogues.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>
                        <strong>(d) General Intangibles:</strong> All patents, copyrights, trade secrets, and other
                        intellectual property rights inherent in the foregoing.
                      </span>
                    </li>
                  </ul>
                  <p className="text-stone-600 mt-3">
                    All Eloténe Intellectual Property is protected by copyright, trademark, and other laws of Ghana and
                    international treaties. No rights are granted to you except for the limited licenses explicitly
                    stated in these Terms.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-stone-800 mb-2">4.2. Your Ownership of the Physical Product</h3>
                  <p className="text-stone-600">
                    Upon your purchase of a physical Eloténe tote bag, you become the owner of that individual physical
                    item. This ownership is limited to the physical object itself and does not include any intellectual
                    property rights. You may resell, gift, or otherwise transfer ownership of the physical bag.
                  </p>
                </div>

                <div className="bg-red-50 p-4 rounded border border-red-200">
                  <h3 className="font-semibold text-red-800 mb-2">4.3. Strictly Prohibited Acts</h3>
                  <p className="text-stone-600 mb-3">
                    As a condition of your access and use, you agree that you will not, and will not permit any third
                    party to, under any circumstances:
                  </p>
                  <ul className="space-y-2 text-stone-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>
                        <strong>(a) Misrepresentation:</strong> Represent, imply, or suggest that any Eloténe design is
                        your own original creation or that you are affiliated with, endorsed by, or sponsored by
                        Eloténe.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>
                        <strong>(b) Reproduction & Creation of Derivative Works:</strong> Copy, reproduce, modify,
                        adapt, create derivative works from, scan, or 3D-model any Eloténe product or its design for any
                        purpose, whether commercial or non-commercial.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>
                        <strong>(c) Commercial Exploitation:</strong> Use any Eloténe Intellectual Property (including
                        product images from our website) in connection with the sale of any other product or service, or
                        for any other commercial purpose, without a separate written license agreement from Eloténe.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>
                        <strong>(d) Removal of Branding:</strong> Intentionally remove, alter, obscure, or counterfeit
                        any Eloténe trademark, tag, logo, or other proprietary designation on the product or its
                        packaging.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>
                        <strong>(e) Reverse Engineering:</strong> Disassemble, decompile, or reverse engineer any
                        Eloténe product to discover its design, construction, or source ideas.
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-stone-800 mb-2">4.4. Limited License for Personal Use</h3>
                  <p className="text-stone-600">
                    You are granted a limited, non-exclusive, non-transferable, and revocable license to display product
                    images from our website solely for the purpose of facilitating your personal, non-commercial
                    consideration of a purchase. This license terminates automatically upon any violation of these Terms
                    or at the discretion of Eloténe.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-stone-800 mb-2">4.5. Commercial Resale & Licensing</h3>
                  <p className="text-stone-600">
                    Any commercial resale, wholesale, or bulk distribution of Eloténe products, or any use of Eloténe
                    Intellectual Property for promotional or collaborative purposes, requires a separate, prior written
                    agreement or license from Eloténe. Please contact us at{" "}
                    <a href="mailto:elotene.business@gmail.com" className="text-amber-600 hover:underline">
                      elotene.business@gmail.com
                    </a>{" "}
                    to discuss such arrangements.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div className="bg-cream-50 p-6 rounded-lg border border-cream-200">
              <h2 className="text-xl font-bold text-stone-800 mb-4 flex items-center">
                <span className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  5
                </span>
                Orders & Payments
              </h2>
              <ul className="space-y-2 text-stone-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>
                    <strong>Order Finality:</strong> An order is considered final once payment has cleared. We may
                    cancel or refuse orders where fraud or misuse is suspected.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>
                    <strong>Currency:</strong> All displayed prices are in Ghanaian Cedis (GHS) unless otherwise stated.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span className="font-semibold text-green-700">
                    <strong>Corporate Social Responsibility:</strong> Two percent (2%) of gross sale price (before
                    deductions) of each purchase will be allocated to support a Sickle Cell Foundation/Agenda chosen by
                    Eloténe. We will publish periodic summaries of these contributions.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Payment methods, taxes, duties, and shipping fees (if any) will be displayed at checkout.</span>
                </li>
              </ul>
            </div>

            {/* Section 6 */}
            <div className="bg-cream-50 p-6 rounded-lg border border-cream-200">
              <h2 className="text-xl font-bold text-stone-800 mb-4 flex items-center">
                <span className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  6
                </span>
                Quality & Craftsmanship
              </h2>
              <p className="text-stone-600">
                Eloténe products are manufactured with high-quality materials and craftsmanship. Each product is covered
                by the limited warranty outlined in Section 14.
              </p>
            </div>

            {/* Section 7 */}
            <div className="bg-cream-50 p-6 rounded-lg border border-cream-200">
              <h2 className="text-xl font-bold text-stone-800 mb-4 flex items-center">
                <span className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  7
                </span>
                Product Use, Limitations & Care
              </h2>
              <p className="text-stone-600 mb-3">Eloténe totes are designed for personal and light commercial use.</p>
              <p className="text-stone-600 mb-3">
                <strong>Maximum recommended load:</strong> 3 kg per bag. This is a guideline; Eloténe is not liable for
                damage resulting from misuse, including but not limited to overloading, regardless of the weight.
              </p>
              <p className="font-semibold text-stone-700 mb-3">We are not liable for damage resulting from:</p>
              <ul className="space-y-2 text-stone-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-stone-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Prolonged sun exposure causing colour fade.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-stone-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Improper cleaning or use of harsh chemicals.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-stone-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Abrasive wear from rough surfaces (normal wear and tear).</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-stone-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Misuse, deliberate abuse, or any customer-made modifications.</span>
                </li>
              </ul>
            </div>

            {/* Sections 8-13 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-cream-50 p-6 rounded-lg border border-cream-200">
                <h2 className="text-lg font-bold text-stone-800 mb-3 flex items-center">
                  <span className="bg-amber-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-xs font-bold mr-3">
                    8
                  </span>
                  Registration & Account Security
                </h2>
                <p className="text-sm text-stone-600">
                  If you register an account, you must provide accurate details and keep your credentials confidential.
                  You are responsible for all activities under your account.
                </p>
              </div>

              <div className="bg-cream-50 p-6 rounded-lg border border-cream-200">
                <h2 className="text-lg font-bold text-stone-800 mb-3 flex items-center">
                  <span className="bg-amber-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-xs font-bold mr-3">
                    9
                  </span>
                  No Unsolicited Ideas
                </h2>
                <p className="text-sm text-stone-600">
                  Eloténe does not accept or consider unsolicited creative ideas, suggestions, or materials. If you send
                  us such materials, you agree that they are non-confidential and Eloténe may use them without
                  compensation.
                </p>
              </div>

              <div className="bg-cream-50 p-6 rounded-lg border border-cream-200">
                <h2 className="text-lg font-bold text-stone-800 mb-3 flex items-center">
                  <span className="bg-amber-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-xs font-bold mr-3">
                    10
                  </span>
                  Newsletter & Sharing
                </h2>
                <p className="text-sm text-stone-600">
                  You may forward Eloténe's electronic newsletter in its original form to others. Sharing altered
                  marketing materials or re-using our content for commercial gain requires prior permission.
                </p>
              </div>

              <div className="bg-cream-50 p-6 rounded-lg border border-cream-200">
                <h2 className="text-lg font-bold text-stone-800 mb-3 flex items-center">
                  <span className="bg-amber-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-xs font-bold mr-3">
                    11
                  </span>
                  Third Party Links & Services
                </h2>
                <p className="text-sm text-stone-600">
                  Our site may link to third-party websites. Eloténe does not control and is not responsible for their
                  content, privacy practices, or services.
                </p>
              </div>
            </div>

            {/* Section 12 */}
            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <h2 className="text-xl font-bold text-stone-800 mb-4 flex items-center">
                <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  12
                </span>
                Responsible Use & Website Rules (Prohibited Conduct)
              </h2>
              <p className="text-stone-600 mb-3">You agree not to:</p>
              <ul className="space-y-2 text-stone-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>
                    Copy, scrape, download, or re-use our product images, design files, or creative assets for any
                    purpose other than personal viewing.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>
                    Introduce malware or malicious code, attempt to disrupt site functionality, or probe for
                    vulnerabilities.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>
                    Perform automated data harvesting, bots, or any systematic data-collection activity without consent.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Place fraudulent orders or use false payment information.</span>
                </li>
              </ul>
              <p className="text-stone-600 mt-3 font-semibold">
                We monitor for abuse and will take action — including account suspension, order cancellation, IP
                blocking, and legal remedies.
              </p>
            </div>

            {/* Section 13 */}
            <div className="bg-cream-50 p-6 rounded-lg border border-cream-200">
              <h2 className="text-xl font-bold text-stone-800 mb-4 flex items-center">
                <span className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  13
                </span>
                Modification, Suspension & Termination of Service
              </h2>
              <p className="text-stone-600">
                Eloténe may modify, restrict, suspend, or discontinue any aspect of the site or services at any time
                without liability. We will not be responsible for any loss relating to changes or discontinuance.
              </p>
            </div>

            {/* Section 14 */}
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h2 className="text-xl font-bold text-stone-800 mb-4 flex items-center">
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  14
                </span>
                Limited Warranty & Limitation of Liability
              </h2>
              <div className="space-y-3 text-stone-600">
                <div>
                  <strong className="text-stone-800">Limited Product Warranty:</strong> Eloténe warrants that its
                  products will be free from material defects in workmanship and materials for a period of one (1) year
                  from the date of purchase. Your exclusive remedy for a breach of this warranty is, at our option, the
                  repair or replacement of the product.
                </div>
                <div>
                  <strong className="text-stone-800">Website "As Is":</strong> The website and content are provided "as
                  is." Except where prohibited by law, Eloténe disclaims all warranties (express or implied) for the
                  website, including merchantability and fitness for a particular purpose.
                </div>
                <div>
                  <strong className="text-stone-800">Maximum Liability:</strong> To the fullest extent permitted by law,
                  Eloténe's aggregate liability for any claim related to a purchase will not exceed the total price you
                  paid for the relevant product. We are not liable for indirect, incidental, or consequential damages.
                </div>
                <div className="text-sm italic">
                  These limitations shall not apply to (i) liability for death or personal injury caused by our
                  negligence; (ii) fraud or fraudulent misrepresentation; or (iii) any other liability that cannot be
                  excluded or limited under applicable law.
                </div>
              </div>
            </div>

            {/* Section 15 */}
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h2 className="text-xl font-bold text-stone-800 mb-4 flex items-center">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  15
                </span>
                Dispute Resolution & Contact for Complaints
              </h2>
              <p className="text-stone-600 mb-3">If a dispute arises:</p>
              <ol className="space-y-2 text-stone-600">
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">
                    1
                  </span>
                  <span>
                    Please contact customer support by email first:{" "}
                    <a href="mailto:elotene.business@gmail.com" className="text-blue-600 hover:underline">
                      elotene.business@gmail.com
                    </a>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">
                    2
                  </span>
                  <span>
                    If unresolved, follow up via our hotline:{" "}
                    <a href="tel:+233553278054" className="text-blue-600 hover:underline">
                      +233 055 327 8054
                    </a>
                  </span>
                </li>
              </ol>
            </div>

            {/* Sections 16-28 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-cream-50 p-6 rounded-lg border border-cream-200">
                <h2 className="text-lg font-bold text-stone-800 mb-3 flex items-center">
                  <span className="bg-amber-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-xs font-bold mr-3">
                    16
                  </span>
                  Privacy & Data Protection
                </h2>
                <p className="text-sm text-stone-600">
                  We respect your privacy and process personal data in accordance with our Privacy Policy. We do not
                  send unsolicited commercial emails.
                </p>
              </div>

              <div className="bg-cream-50 p-6 rounded-lg border border-cream-200">
                <h2 className="text-lg font-bold text-stone-800 mb-3 flex items-center">
                  <span className="bg-amber-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-xs font-bold mr-3">
                    17
                  </span>
                  Accessibility
                </h2>
                <p className="text-sm text-stone-600">
                  Eloténe is committed to digital accessibility. If you experience an accessibility barrier, contact us
                  and we will work to resolve the issue.
                </p>
              </div>

              <div className="bg-cream-50 p-6 rounded-lg border border-cream-200">
                <h2 className="text-lg font-bold text-stone-800 mb-3 flex items-center">
                  <span className="bg-amber-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-xs font-bold mr-3">
                    18
                  </span>
                  Export Controls & Legal Compliance
                </h2>
                <p className="text-sm text-stone-600">
                  You may not access or use our site in jurisdictions where it would violate local law. You are
                  responsible for compliance with applicable export, import, and customs regulations.
                </p>
              </div>

              <div className="bg-cream-50 p-6 rounded-lg border border-cream-200">
                <h2 className="text-lg font-bold text-stone-800 mb-3 flex items-center">
                  <span className="bg-amber-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-xs font-bold mr-3">
                    19
                  </span>
                  Assignment
                </h2>
                <p className="text-sm text-stone-600">
                  You may not assign or transfer your rights or obligations under these Terms without Eloténe's prior
                  written consent.
                </p>
              </div>

              <div className="bg-cream-50 p-6 rounded-lg border border-cream-200">
                <h2 className="text-lg font-bold text-stone-800 mb-3 flex items-center">
                  <span className="bg-amber-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-xs font-bold mr-3">
                    20
                  </span>
                  Breach, Remedies & Enforcement
                </h2>
                <p className="text-sm text-stone-600">
                  If you breach these Terms, we may suspend or terminate your access, cancel orders, block your IP, and
                  pursue legal remedies.
                </p>
              </div>

              <div className="bg-cream-50 p-6 rounded-lg border border-cream-200">
                <h2 className="text-lg font-bold text-stone-800 mb-3 flex items-center">
                  <span className="bg-amber-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-xs font-bold mr-3">
                    21
                  </span>
                  Force Majeure
                </h2>
                <p className="text-sm text-stone-600">
                  Eloténe is not liable for delays or failures resulting from events beyond our reasonable control, such
                  as natural disasters, strikes, or internet outages.
                </p>
              </div>

              <div className="bg-cream-50 p-6 rounded-lg border border-cream-200">
                <h2 className="text-lg font-bold text-stone-800 mb-3 flex items-center">
                  <span className="bg-amber-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-xs font-bold mr-3">
                    22
                  </span>
                  Indemnification
                </h2>
                <p className="text-sm text-stone-600">
                  You agree to indemnify, defend and hold Eloténe harmless from claims, damages, losses, and expenses
                  arising from your breach of these Terms.
                </p>
              </div>

              <div className="bg-cream-50 p-6 rounded-lg border border-cream-200">
                <h2 className="text-lg font-bold text-stone-800 mb-3 flex items-center">
                  <span className="bg-amber-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-xs font-bold mr-3">
                    23
                  </span>
                  No Waiver
                </h2>
                <p className="text-sm text-stone-600">
                  Our failure to enforce any right is not a waiver of that right or any other provision of these Terms.
                </p>
              </div>

              <div className="bg-cream-50 p-6 rounded-lg border border-cream-200">
                <h2 className="text-lg font-bold text-stone-800 mb-3 flex items-center">
                  <span className="bg-amber-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-xs font-bold mr-3">
                    24
                  </span>
                  Governing Language
                </h2>
                <p className="text-sm text-stone-600">
                  These terms are drafted and shall be interpreted in English. All communications must be in English.
                </p>
              </div>

              <div className="bg-cream-50 p-6 rounded-lg border border-cream-200">
                <h2 className="text-lg font-bold text-stone-800 mb-3 flex items-center">
                  <span className="bg-amber-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-xs font-bold mr-3">
                    25
                  </span>
                  Entire Agreement
                </h2>
                <p className="text-sm text-stone-600">
                  These Terms, together with our Privacy and Cookie Policies, constitute the entire agreement between
                  you and Eloténe.
                </p>
              </div>

              <div className="bg-cream-50 p-6 rounded-lg border border-cream-200">
                <h2 className="text-lg font-bold text-stone-800 mb-3 flex items-center">
                  <span className="bg-amber-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-xs font-bold mr-3">
                    26
                  </span>
                  Updates & Policy Changes
                </h2>
                <p className="text-sm text-stone-600">
                  We may update these terms from time to time. All updates will be posted on this page. Your continued
                  use means you accept the revised terms.
                </p>
              </div>

              <div className="bg-cream-50 p-6 rounded-lg border border-cream-200">
                <h2 className="text-lg font-bold text-stone-800 mb-3 flex items-center">
                  <span className="bg-amber-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-xs font-bold mr-3">
                    27
                  </span>
                  Governing Law & Jurisdiction
                </h2>
                <div className="space-y-2 text-sm text-stone-600">
                  <p>
                    These terms are governed by the laws of Ghana. Any dispute shall be subject to the exclusive
                    jurisdiction of the courts of Ghana, except where mandatory law provides otherwise (for example, a
                    consumer may have the right to bring proceedings in their local jurisdiction).
                  </p>
                  <p>
                    If any part or provision of these Terms is found by a court to be invalid or unenforceable, it will
                    be modified to the maximum extent permissible to give effect to the intent of these Terms. The other
                    provisions will not be affected.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 28 - Contact */}
            <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 text-center">
              <h2 className="text-xl font-bold text-stone-800 mb-4">Contact Information</h2>
              <div className="space-y-2">
                <p className="font-semibold text-stone-800">Eloténe</p>
                <p className="text-stone-600">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:elotene.business@gmail.com" className="text-amber-600 hover:underline">
                    elotene.business@gmail.com
                  </a>
                </p>
                <p className="text-stone-600">
                  <strong>Hotline:</strong>{" "}
                  <a href="tel:+233553278054" className="text-amber-600 hover:underline">
                    +233 055 327 8054
                  </a>
                </p>
                <p className="text-stone-600">
                  <strong>Address:</strong> Accra, Ghana
                </p>
              </div>
            </div>

            <div className="text-center pt-8 border-t border-cream-200">
              <p className="text-stone-500 italic font-medium">
                By using Eloténe, you acknowledge that you have read, understood, and agree to be bound by these Terms
                of Service.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
