export default function Contact() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-wine-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-wine-900 mb-6">
            Let's Connect
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            Ready to discuss how we can help grow your winery's direct-to-consumer sales? Get in touch.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-wine-900 mb-8">
                Get in Touch
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-wine-900 mb-2">Location</h3>
                  <p className="text-gray-700">Napa, California</p>
                </div>

                <div>
                  <h3 className="font-semibold text-wine-900 mb-2">Email</h3>
                  <a
                    href="mailto:info@simonsdtc.com"
                    className="text-wine-700 hover:text-wine-800 transition-colors"
                  >
                    info@simonsdtc.com
                  </a>
                </div>

                <div className="pt-8">
                  <h3 className="font-semibold text-wine-900 mb-4">Connect</h3>
                  <a
                    href="https://www.linkedin.com/in/laura-simons-241b8b9/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-wine-700 hover:text-wine-800 transition-colors"
                  >
                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Services Overview */}
            <div className="bg-wine-50 p-8 rounded-lg">
              <h2 className="text-2xl font-serif font-bold text-wine-900 mb-6">
                How We Can Help
              </h2>

              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-wine-700 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Strategic DTC leadership and planning</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-wine-700 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Wine club optimization and growth</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-wine-700 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Technology platform implementation</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-wine-700 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Email marketing and customer engagement</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-wine-700 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Analytics and performance metrics</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-wine-700 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Staff training and development</span>
                </li>
              </ul>

              <div className="mt-8 pt-8 border-t border-wine-200">
                <p className="text-sm text-gray-600 italic">
                  "Laura's expertise in DTC technology, sales strategy, club and hospitality programming has led to double-digit sales growth for those she has worked with."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
