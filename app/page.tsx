import Image from "next/image";
import Link from "next/link";

const servicesCol1 = [
  "Club Processing",
  "Metrics & Analytics",
  "Corporate Gifting",
  "Data Segmentation",
  "Website Content Management",
  "Staff Training",
];

const servicesCol2 = [
  "Club Creation",
  "eCommerce Platform Migration",
  "Hospitality Planning",
  "Virtual Experience Programming",
  "Subscription & Allocation Creation",
  "Outbound Sales Programming",
];

const servicesCol3 = [
  "DTC Sales",
  "Club Member Retention",
  "Email Marketing",
  "Social Media",
  "SMS Messaging",
  "Referral & Loyalty Programs",
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center">
        {/* Background image */}
        <Image
          src="/images/hero-home.jpg"
          alt="Wine and cheese"
          fill
          className="object-cover"
          priority
        />
        {/* Gray overlay */}
        <div className="absolute inset-0 bg-gray-600/40" />

        {/* Content overlay box */}
        <div className="relative z-10 bg-white/80 px-8 py-12 md:px-16 md:py-16 max-w-[750px] mx-4 text-center">
          <h1 className="font-heading text-3xl md:text-[52px] md:leading-tight font-bold text-navy-dark mb-6">
            GROW YOUR DIRECT-TO-CONSUMER BUSINESS
          </h1>
          <p className="font-body text-lg md:text-[23px] md:leading-normal text-navy-dark tracking-wide mb-8">
            Innovative strategies and services to achieve DTC sales growth and
            customer engagement.
          </p>
          <a
            href="https://calendly.com/simons-dtc/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-body-bold bg-navy text-white px-8 py-3 text-base border border-navy-dark hover:bg-white hover:text-navy-dark transition-colors"
          >
            Book A Consultation
          </a>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="bg-navy py-12">
        <div className="max-w-site mx-auto px-4">
          <p className="font-body text-white text-center text-lg mb-10 tracking-wide">
            Innovative strategies and services to achieve DTC sales growth and
            customer engagement.
          </p>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-site mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Column 1 */}
            <div className="space-y-2">
              {servicesCol1.map((s) => (
                <p key={s} className="font-body text-base leading-relaxed">
                  {s}
                </p>
              ))}
            </div>
            {/* Column 2 */}
            <div className="space-y-2">
              {servicesCol2.map((s) => (
                <p key={s} className="font-body text-base leading-relaxed">
                  {s}
                </p>
              ))}
            </div>
            {/* Column 3 */}
            <div className="space-y-2">
              {servicesCol3.map((s) => (
                <p key={s} className="font-body text-base leading-relaxed">
                  {s}
                </p>
              ))}
            </div>
          </div>

          {/* More Info button */}
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-block font-body-bold bg-navy text-white px-8 py-3 text-base border border-navy-dark hover:bg-white hover:text-navy-dark transition-colors"
            >
              More Info
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="relative py-20">
        {/* Background image with overlay */}
        <Image
          src="/images/contact-bg.jpg"
          alt="Grapes"
          fill
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-white/60" />

        <div className="relative z-10 max-w-site mx-auto px-4">
          <h2 className="font-heading text-[30px] font-bold text-center mb-10 tracking-wide">
            CONTACT
          </h2>

          <form
            className="max-w-lg mx-auto space-y-4"
            action="https://formspree.io/f/placeholder"
            method="POST"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="sr-only" htmlFor="firstName">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name *"
                  required
                  className="w-full font-body border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-navy"
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name *"
                  required
                  className="w-full font-body border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-navy"
                />
              </div>
            </div>
            <div>
              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email *"
                required
                className="w-full font-body border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-navy"
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="company">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Company *"
                required
                className="w-full font-body border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-navy"
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Message *"
                required
                rows={5}
                className="w-full font-body border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-navy resize-none"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="font-body-bold bg-navy text-white px-10 py-2.5 text-base border border-navy-dark hover:bg-white hover:text-navy-dark transition-colors"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
