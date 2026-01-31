import Link from "next/link";

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-wine-50 to-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-wine-900 mb-6 leading-tight">
              Elevate Your Wine DTC Sales
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Strategic consulting and proven expertise to drive direct-to-consumer growth for wineries in Napa and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-block bg-wine-700 text-white px-8 py-4 rounded-md hover:bg-wine-800 transition-colors text-center font-medium"
              >
                Get Started
              </Link>
              <Link
                href="/services"
                className="inline-block border-2 border-wine-700 text-wine-700 px-8 py-4 rounded-md hover:bg-wine-50 transition-colors text-center font-medium"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-wine-900 mb-4">
              Built on Experience. Driven by Results.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Over 27 years of wine industry expertise, translating into measurable DTC growth for your winery.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-wine-50 rounded-lg">
              <div className="text-wine-700 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-wine-900 mb-3">Double-Digit Growth</h3>
              <p className="text-gray-700">
                Proven strategies that have consistently delivered significant sales increases for premium wineries.
              </p>
            </div>

            <div className="p-8 bg-wine-50 rounded-lg">
              <div className="text-wine-700 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-wine-900 mb-3">Certified Expertise</h3>
              <p className="text-gray-700">
                Led by a Certified Sommelier with deep experience at distinguished Napa wineries.
              </p>
            </div>

            <div className="p-8 bg-wine-50 rounded-lg">
              <div className="text-wine-700 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-wine-900 mb-3">Full-Stack Solutions</h3>
              <p className="text-gray-700">
                From technology implementation to club strategy, hospitality planning to email marketing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-wine-900 mb-12 text-center">
            Comprehensive DTC Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              'Fractional DTC Leadership',
              'Club Processing & Strategy',
              'Metrics & Analytics',
              'eCommerce Platform Migration',
              'Email Marketing',
              'Customer Journey Mapping',
              'Hospitality Planning',
              'Staff Training',
              'SMS Messaging',
            ].map((service) => (
              <div key={service} className="bg-white p-6 rounded-lg border border-gray-200 hover:border-wine-300 transition-colors">
                <h3 className="font-semibold text-wine-900">{service}</h3>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-block bg-wine-700 text-white px-8 py-4 rounded-md hover:bg-wine-800 transition-colors font-medium"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-wine-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Grow Your DTC Sales?
          </h2>
          <p className="text-xl text-wine-200 mb-8">
            Let's discuss how we can help elevate your winery's direct-to-consumer strategy.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-wine-900 px-8 py-4 rounded-md hover:bg-wine-50 transition-colors font-medium"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
