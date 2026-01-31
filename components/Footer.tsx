export default function Footer() {
  return (
    <footer className="bg-wine-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Simon's DTC Consulting</h3>
            <p className="text-wine-200">
              Wine DTC sales consulting and strategy experts based in Napa, CA.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-wine-200">
              <li>
                <a href="/services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Location</h4>
            <p className="text-wine-200">Napa, California</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-wine-800 text-center text-wine-300 text-sm">
          <p>&copy; {new Date().getFullYear()} Simon's DTC Consulting LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
