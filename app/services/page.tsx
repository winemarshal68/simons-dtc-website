export default function Services() {
  const services = [
    {
      title: 'Fractional DTC Leadership',
      description: 'Strategic leadership for your DTC operations without the full-time commitment. Get expert guidance on demand.',
    },
    {
      title: 'Club Processing & Strategy',
      description: 'Streamline your wine club operations with optimized processing, member retention strategies, and growth planning.',
    },
    {
      title: 'Metrics & Analytics',
      description: 'Data-driven insights to understand customer behavior, track performance, and identify growth opportunities.',
    },
    {
      title: 'Corporate Gifting Programs',
      description: 'Develop and manage corporate gifting initiatives that build B2B relationships and recurring revenue.',
    },
    {
      title: 'Staff Training',
      description: 'Elevate your team\'s DTC sales skills with targeted training on customer service, product knowledge, and conversion techniques.',
    },
    {
      title: 'Club Creation & Optimization',
      description: 'Design compelling wine club programs that attract members and drive long-term loyalty.',
    },
    {
      title: 'eCommerce Platform Migration',
      description: 'Seamlessly transition to modern DTC platforms with minimal disruption and maximum ROI.',
    },
    {
      title: 'Hospitality Planning',
      description: 'Create memorable tasting room experiences that convert visitors into club members and brand advocates.',
    },
    {
      title: 'Subscription & Allocation Management',
      description: 'Build excitement and exclusivity around limited releases with strategic allocation programs.',
    },
    {
      title: 'Outbound Sales Programming',
      description: 'Proactive sales strategies that reach customers where they are and drive conversions.',
    },
    {
      title: 'DTC Sales Strategies',
      description: 'Comprehensive sales frameworks tailored to your winery\'s unique positioning and customer base.',
    },
    {
      title: 'Club Member Retention',
      description: 'Proven tactics to reduce churn and increase lifetime customer value through engagement and satisfaction.',
    },
    {
      title: 'SMS Messaging',
      description: 'Direct, timely communication with customers through targeted text campaigns that drive action.',
    },
    {
      title: 'Referral & Loyalty Programs',
      description: 'Turn satisfied customers into brand ambassadors with structured referral and rewards initiatives.',
    },
    {
      title: 'Email Marketing',
      description: 'Sophisticated email campaigns that nurture relationships, promote releases, and boost sales.',
    },
    {
      title: 'Customer Journey Mapping',
      description: 'Understand and optimize every touchpoint in the customer experience from discovery to loyalty.',
    },
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-wine-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-wine-900 mb-6">
            Services
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            Comprehensive DTC consulting services designed to drive measurable growth for your winery.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white p-8 rounded-lg border border-gray-200 hover:border-wine-300 hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold text-wine-900 mb-3">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-wine-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Let's Build Your Strategy
          </h2>
          <p className="text-xl text-wine-200 mb-8">
            Every winery is unique. Let's discuss which services will deliver the greatest impact for your business.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-wine-900 px-8 py-4 rounded-md hover:bg-wine-50 transition-colors font-medium"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
