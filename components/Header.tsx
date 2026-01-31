"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-2xl font-serif font-bold text-wine-800">
            Simon's DTC
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-wine-700 transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-wine-700 transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-wine-700 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-wine-700 transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block py-2 text-gray-700 hover:text-wine-700">
              Home
            </Link>
            <Link href="/services" className="block py-2 text-gray-700 hover:text-wine-700">
              Services
            </Link>
            <Link href="/about" className="block py-2 text-gray-700 hover:text-wine-700">
              About
            </Link>
            <Link href="/contact" className="block py-2 text-gray-700 hover:text-wine-700">
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
