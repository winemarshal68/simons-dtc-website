export default function About() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-wine-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-wine-900 mb-6">
            About Simon's DTC
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            Founded in 2021 to help wineries optimize their direct sales channels with fresh ideas, streamlined operations, and strategic technology implementation.
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-wine-900 mb-8">Laura Simons</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-xl leading-relaxed">
              Laura Simons brings over 27 years of wine and hospitality industry experience to the DTC realm.
            </p>

            <p className="leading-relaxed">
              After graduating from Penn State University with a degree in Advertising & Communications, Laura moved to San Francisco for a position at an advertising agency, then began a career in fine dining with a focus on wine education.
            </p>

            <p className="leading-relaxed">
              She became a Certified Sommelier through the Court of Master Sommeliers in 2006, which inspired her to move to the Napa Valley. There, she managed hospitality and DTC operations at distinguished wineries including Groth, Nickel & Nickel, Eleven Eleven, and Long Meadow Ranch.
            </p>

            <p className="leading-relaxed">
              Laura's expertise spans DTC technology, sales strategy, club and hospitality programming, virtual experiences, email marketing, and analytics—consistently driving double-digit sales growth for the wineries she's worked with.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-wine-900 mb-12 text-center">
            Core Expertise
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-xl font-bold text-wine-900 mb-3">Technology & Platforms</h3>
              <p className="text-gray-700">
                Deep knowledge of DTC technology solutions, platform migrations, and system optimization.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-xl font-bold text-wine-900 mb-3">Sales Strategy</h3>
              <p className="text-gray-700">
                Proven frameworks for driving revenue through strategic sales planning and execution.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-xl font-bold text-wine-900 mb-3">Club & Hospitality</h3>
              <p className="text-gray-700">
                Comprehensive club program design and tasting room experience optimization.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-xl font-bold text-wine-900 mb-3">Email Marketing</h3>
              <p className="text-gray-700">
                Sophisticated campaigns that nurture customer relationships and drive conversions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-xl font-bold text-wine-900 mb-3">Metrics & Analytics</h3>
              <p className="text-gray-700">
                Data-driven insights that inform strategy and measure success.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-xl font-bold text-wine-900 mb-3">Virtual Experiences</h3>
              <p className="text-gray-700">
                Engaging digital touchpoints that connect customers with your brand remotely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notable Experience */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-wine-900 mb-8 text-center">
            Notable Experience
          </h2>

          <div className="space-y-6 text-center">
            <p className="text-xl text-gray-700">
              DTC leadership roles at distinguished Napa Valley wineries:
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-2xl font-serif text-wine-800">
              <span>Groth</span>
              <span className="text-gray-400">•</span>
              <span>Nickel & Nickel</span>
              <span className="text-gray-400">•</span>
              <span>Eleven Eleven</span>
              <span className="text-gray-400">•</span>
              <span>Long Meadow Ranch</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-wine-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-wine-200 mb-8">
            Ready to elevate your winery's DTC performance?
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-wine-900 px-8 py-4 rounded-md hover:bg-wine-50 transition-colors font-medium"
          >
            Start the Conversation
          </a>
        </div>
      </section>
    </div>
  );
}
