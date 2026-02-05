import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Services | Simons DtC Consulting",
  description:
    "DTC consulting services: operations, projects, and strategies for wineries.",
};

function OperationsIcon() {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Concentric orange circles as the Operations section heading."
    >
      <circle cx="40" cy="40" r="38" stroke="#EC5800" strokeWidth="2" opacity="0.3" />
      <circle cx="40" cy="40" r="28" stroke="#EC5800" strokeWidth="2" opacity="0.5" />
      <circle cx="40" cy="40" r="18" stroke="#EC5800" strokeWidth="2" opacity="0.7" />
      <circle cx="40" cy="40" r="8" fill="#EC5800" />
    </svg>
  );
}

function ProjectsIcon() {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Orange layered squares as the Projects section heading."
    >
      <rect x="20" y="30" width="40" height="30" fill="#EC5800" opacity="0.3" rx="2" />
      <rect x="15" y="22" width="40" height="30" fill="#EC5800" opacity="0.5" rx="2" />
      <rect x="25" y="15" width="40" height="30" fill="#EC5800" opacity="0.8" rx="2" />
    </svg>
  );
}

function StrategiesIcon() {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Orange pixelated triangle as the Strategies section heading."
    >
      <polygon points="40,8 72,68 8,68" fill="#EC5800" opacity="0.3" />
      <polygon points="40,18 62,60 18,60" fill="#EC5800" opacity="0.5" />
      <polygon points="40,28 52,52 28,52" fill="#EC5800" opacity="0.8" />
    </svg>
  );
}

const serviceCategories = [
  {
    icon: <OperationsIcon />,
    title: "Operations",
    description:
      "Do you need help with your day-to-day DTC sales needs? DTC leadership while someone is on leave? We can help manage ongoing website content updates, process your wine club shipments, create analytics reports for review, process corporate gifting orders, host virtual experiences, or assist with staff training in sales and hospitality.",
  },
  {
    icon: <ProjectsIcon />,
    title: "Projects",
    description:
      "Let us help with your large projects like creating a new club, migration to a new eCommerce platform, implementing or refreshing hospitality programs, establishing a corporate virtual tasting channel, creating a subscription or allocation program, or developing an outbound sales channel.",
  },
  {
    icon: <StrategiesIcon />,
    title: "Strategies",
    description:
      "Let\u2019s build strategies to take your brand to the next level of direct-to-consumer sales and engagement through club member retention, sales-generating email campaigns, customer journey mapping, effective SMS messaging, an engaging social media presence, and dynamic referral and loyalty programs.",
  },
];

const serviceKeywords = [
  "Fractional DTC Leadership",
  "Club Processing",
  "Metrics & Analytics",
  "Corporate Gifting",
  "Staff Training",
  "Club Creation",
  "eCommerce Platform Migration",
  "Hospitality Planning",
  "Subscription & Allocation Creation",
  "Outbound Sales Programming",
  "DTC Sales Strategies",
  "Club Member Retention",
  "SMS Messaging",
  "Referral & Loyalty Programs",
  "Email Marketing",
  "Customer Journey Mapping",
  "Website Content Updates",
];

export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center justify-center">
        <Image
          src="/images/hero-services.jpg"
          alt="People sitting around a wood table eating, drinking wine and laughing."
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gray-600/30" />
        <div className="relative z-10 bg-white/80 px-10 py-10 md:px-16 md:py-14 max-w-[620px] mx-4 text-center">
          <h1 className="font-heading text-4xl md:text-[56px] font-bold text-navy-dark">
            Services
          </h1>
        </div>
      </section>

      {/* Service Keywords Bar */}
      <section className="bg-white py-10">
        <div className="max-w-site mx-auto px-4 text-center">
          <p className="font-body text-lg leading-relaxed">
            {serviceKeywords.map((kw, i) => (
              <span key={kw}>
                {i > 0 && (
                  <span className="text-accent-orange font-bold mx-1">|</span>
                )}
                {kw}
              </span>
            ))}
          </p>
        </div>
      </section>

      {/* Three Service Cards */}
      <section className="bg-white pb-16">
        <div className="max-w-site mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceCategories.map((cat) => (
              <div key={cat.title} className="text-center px-4">
                <div className="flex justify-center mb-4">{cat.icon}</div>
                <h2 className="font-heading text-xl font-bold mb-4">
                  {cat.title}
                </h2>
                <p className="font-body text-base leading-[1.8] text-gray-700">
                  {cat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-12">
        <div className="max-w-site mx-auto px-4 text-center">
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
    </div>
  );
}
