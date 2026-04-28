"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">

        {/* LOGO */}
        <Link href="/" className="text-lg font-bold text-blue-700">
          Myra City Hospital
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-6 text-gray-700 font-medium">

          <Link href="/">Home</Link>

          {/* MEDICINE */}
          <div className="group relative">
            <span className="cursor-pointer hover:text-blue-600">
              Gastro Medicine
            </span>
            <div className="absolute hidden group-hover:block bg-white shadow-lg p-4 mt-2 w-64">
              <Link href="/gastro-medicine/acid-reflux-treatment-lucknow" className="block py-1">Acid Reflux</Link>
              <Link href="/gastro-medicine/ibs-treatment-lucknow" className="block py-1">IBS</Link>
              <Link href="/gastro-medicine/fatty-liver-treatment-lucknow" className="block py-1">Fatty Liver</Link>
            </div>
          </div>

          {/* SURGERY */}
          <div className="group relative">
            <span className="cursor-pointer hover:text-blue-600">
              Gastro Surgery
            </span>
            <div className="absolute hidden group-hover:block bg-white shadow-lg p-4 mt-2 w-64">
              <Link href="/gastro-surgery/liver-surgery-lucknow" className="block py-1">Liver Surgery</Link>
              <Link href="/gastro-surgery/gallbladder-surgery-lucknow" className="block py-1">Gallbladder</Link>
              <Link href="/gastro-surgery/hernia-surgery-lucknow" className="block py-1">Hernia</Link>
            </div>
          </div>

          <Link href="/critical-care">Critical Care</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>

        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          {/* DESKTOP CTA */}
          <button className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-lg">
            Call Now
          </button>

          {/* MOBILE HAMBURGER */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <span className="block w-6 h-0.5 bg-blue-700"></span>
            <span className="block w-6 h-0.5 bg-blue-700"></span>
            <span className="block w-6 h-0.5 bg-blue-700"></span>
          </button>

        </div>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-md">
          <div className="flex flex-col p-4 space-y-3">

            <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>

            <div>
              <p className="font-semibold text-blue-700">Gastro Medicine</p>
              <div className="pl-3 text-sm space-y-1">
                <Link href="/gastro-medicine/acid-reflux-treatment-lucknow">Acid Reflux</Link>
                <Link href="/gastro-medicine/ibs-treatment-lucknow">IBS</Link>
                <Link href="/gastro-medicine/fatty-liver-treatment-lucknow">Fatty Liver</Link>
              </div>
            </div>

            <div>
              <p className="font-semibold text-blue-700">Gastro Surgery</p>
              <div className="pl-3 text-sm space-y-1">
                <Link href="/gastro-surgery/liver-surgery-lucknow">Liver Surgery</Link>
                <Link href="/gastro-surgery/gallbladder-surgery-lucknow">Gallbladder</Link>
                <Link href="/gastro-surgery/hernia-surgery-lucknow">Hernia</Link>
              </div>
            </div>

            <Link href="/critical-care">Critical Care</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>

            <button className="bg-blue-600 text-white py-2 rounded-lg mt-3">
              Call Now
            </button>

          </div>
        </div>
      )}

    </header>
  );
}