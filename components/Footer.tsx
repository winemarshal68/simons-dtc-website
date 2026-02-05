import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/laura-simons-241b8b9/",
    icon: "/images/linkedin.png",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/prowinewoman",
    icon: "/images/instagram.png",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/laura.simons.967/",
    icon: "/images/facebook.png",
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-site mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left column - Contact info */}
          <div className="space-y-2">
            <Link href="/" className="font-heading text-lg block">
              Simons DTC Consulting
            </Link>
            <p className="font-body text-sm text-accent-pale-blue">Napa, CA</p>
            <p className="font-body text-sm">
              <a
                href="mailto:laura@simonsdtc.com"
                className="text-accent-pale-blue hover:text-accent-light-blue transition-colors"
              >
                laura@simonsdtc.com
              </a>
            </p>
            <p className="font-body text-sm">
              <a
                href="tel:707-927-6096"
                className="text-accent-pale-blue hover:text-accent-light-blue transition-colors"
              >
                707-927-6096
              </a>
            </p>
            <p className="font-body text-xs text-accent-pale-blue mt-6 pt-4">
              &copy; {new Date().getFullYear()} by SIMONS DTC CONSULTING
            </p>
          </div>

          {/* Right column - Menu + Social */}
          <div>
            <h4 className="font-heading text-base font-bold mb-4 tracking-wider">
              MENU
            </h4>
            <nav className="space-y-2 mb-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block font-body text-sm text-accent-pale-blue hover:text-accent-light-blue transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Social icons */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <Image
                    src={social.icon}
                    alt={social.label}
                    width={32}
                    height={32}
                    className="w-8 h-8 opacity-80 hover:opacity-100 transition-opacity"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
