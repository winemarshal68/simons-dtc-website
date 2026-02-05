import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Simons DtC Consulting",
  description:
    "Laura Simons brings over 27 years of experience in the wine and hospitality industry to the DTC realm.",
};

function QuoteIcon() {
  return (
    <svg
      width="40"
      height="32"
      viewBox="0 0 40 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto mb-4"
    >
      <path
        d="M0 32V19.2C0 15.467 0.533 12.267 1.6 9.6C2.667 6.933 4.267 4.8 6.4 3.2C8.533 1.6 11.2 0.533 14.4 0L16 4.8C13.067 5.6 10.933 7.067 9.6 9.2C8.267 11.333 7.6 13.867 7.6 16.8H16V32H0ZM24 32V19.2C24 15.467 24.533 12.267 25.6 9.6C26.667 6.933 28.267 4.8 30.4 3.2C32.533 1.6 35.2 0.533 38.4 0L40 4.8C37.067 5.6 34.933 7.067 33.6 9.2C32.267 11.333 31.6 13.867 31.6 16.8H40V32H24Z"
        fill="#EC5800"
        opacity="0.7"
      />
    </svg>
  );
}

const testimonials = [
  {
    quote:
      "Laura did an amazing job managing our migration to a new e-commerce platform. She also had great insight into our sales planning and email strategy which led to significant year-over-year growth. She was a pleasure to work with; her calm nature and attention to detail were welcomed.",
    name: "Sarah McCrea",
    location: "St. Helena, CA",
  },
  {
    quote:
      "Laura\u2019s dedication to her clients and to her work is truly inspiring. Her direct-to-consumer knowledge is deep and her attitude, positive. She is an expert communicator and a pleasure to work with, start to finish.",
    name: "Natalie Williams",
    location: "Napa, CA",
  },
  {
    quote:
      "Laura handles all her interactions with professionalism and kindness. She is dedicated to finding creative solutions that benefit all parties and works to ensure clients are not only satisfied but also eagerly looking forward to working with her again.",
    name: "Whitney MacDonald",
    location: "Napa, CA",
  },
];

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center justify-center">
        <Image
          src="/images/hero-about.jpg"
          alt="A large table with plates of food, and 8 arms extended into the frame cheering with wine."
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gray-600/30" />
        <div className="relative z-10 bg-white/80 px-10 py-10 md:px-16 md:py-14 max-w-[620px] mx-4 text-center">
          <h1 className="font-heading text-4xl md:text-[56px] font-bold text-navy-dark">
            About
          </h1>
        </div>
      </section>

      {/* Bio Section */}
      <section className="bg-white py-16">
        <div className="max-w-site mx-auto px-4">
          <h2 className="font-heading text-[26px] font-bold text-center mb-10 tracking-wide">
            The highest level of experience in all things DTC
          </h2>

          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            {/* Profile Photo */}
            <div className="flex-shrink-0 mx-auto md:mx-0">
              <Image
                src="/images/profile.png"
                alt="Laura Simons"
                width={313}
                height={370}
                className="w-[280px] md:w-[313px] h-auto"
              />
            </div>

            {/* Bio Text */}
            <div className="flex-1">
              <h3 className="font-heading text-[26px] font-bold tracking-[0.03em] mb-1">
                LAURA SIMONS
              </h3>
              <p className="font-heading text-lg font-bold mb-6">Owner</p>

              <div className="font-body text-base leading-[1.5] space-y-4 text-gray-800">
                <p>
                  Laura Simons brings over 27 years of experience in the wine
                  and hospitality industry to the DTC realm. After graduating
                  from Penn State University with a degree in Advertising &amp;
                  Communications, Laura made her way out west to San Francisco
                  for a position at an advertising agency. After leaving that
                  world looking for something she was more passionate about,
                  Laura began a career in fine dining with a focus on wine
                  education. She became a Certified Sommelier through the Court
                  of Master Sommeliers in 2006, which inspired her to move to
                  the Napa Valley to find her place in the wine world. She
                  managed the hospitality and DTC operations at distinguished
                  wineries such as Groth, Nickel &amp; Nickel, Eleven Eleven and
                  Long Meadow Ranch. Her expertise in DTC technology, sales
                  strategy, club and hospitality programming, virtual
                  experiences, email marketing, and metrics has led to
                  double-digit sales growth for those with whom she has worked.
                </p>
                <p>
                  Laura has lived in the Napa Valley for over 17 years, and
                  spends her free time enjoying the exquisite wine &amp; food
                  culture surrounding her. She finds pure joy in spending time
                  with her two dogs, Oliver and Shelby.
                </p>
              </div>

              <div className="mt-8">
                <a
                  href="https://calendly.com/simons-dtc/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-body-bold bg-navy text-white px-10 py-4 text-base border border-navy-dark hover:bg-white hover:text-navy-dark transition-colors"
                >
                  Book A Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-site mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="text-center px-4">
                <QuoteIcon />
                <p className="font-body text-base leading-[1.8] text-gray-700 mb-6">
                  {t.quote}
                </p>
                <p className="font-heading text-xl font-bold">{t.name}</p>
                <p className="font-heading text-xl">{t.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
