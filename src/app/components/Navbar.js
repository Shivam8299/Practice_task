"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // install lucide-react if not already
import Buttion from "./Buttion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full">
      {/* Top Strip */}
      {/* <div className="flex bg-gradient-to-br from-teal-50 to-emerald-50 justify-between items-center py-2 px-6 mt-4">
        <p className="text-gray-600">
          <span className="text-2xl font-semibold">envato</span>market
        </p>
        <button className="text-sm py-2 px-6 bg-[#82B440] text-white rounded-md hover:bg-[#6fa136] transition">
          Buy Now
        </button>
      </div> */}

      {/* Navbar Main */}
      <div className="flex justify-between items-center mx-4 mb-8 md:mx-8 lg:mx-10 my-4">
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold">Artelligence</p>
        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6 text-gray-700 font-semibold">
          <li><Link href="/" className="hover:text-teal-600 transition">Home</Link></li>
          <li><Link href="/about" className="hover:text-teal-600 transition">About</Link></li>
          <li><Link href="/services" className="hover:text-teal-600 transition">Services</Link></li>
          <li><Link href="/projects" className="hover:text-teal-600 transition">Projects</Link></li>
          <li><Link href="/pages" className="hover:text-teal-600 transition">Pages</Link></li>
          <li><Link href="/contact" className="hover:text-teal-600 transition">Contact</Link></li>
        </ul>

        {/* CTA Button */}
        <div className="hidden sm:block">
          <Buttion text={"Let's Talk"}/>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col items-center gap-4 py-6 bg-gradient-to-br from-teal-50 to-emerald-50 shadow-md">
          <Link href="/" className="hover:text-teal-600 transition" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" className="hover:text-teal-600 transition" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/services" className="hover:text-teal-600 transition" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="/projects" className="hover:text-teal-600 transition" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link href="/pages" className="hover:text-teal-600 transition" onClick={() => setMenuOpen(false)}>Pages</Link>
          <Link href="/contact" className="hover:text-teal-600 transition" onClick={() => setMenuOpen(false)}>Contact</Link>

          {/* Mobile CTA */}
          <button className="mt-4 flex items-center justify-between px-6 py-2 rounded-full text-white shadow-lg bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 transition">
            <span>Let's Talk</span>
            <span className="ml-4 flex items-center justify-center w-9 h-9 rounded-full bg-white text-xl text-gray-600">
              &gt;
            </span>
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

