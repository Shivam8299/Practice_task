"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Buttion from "./Buttion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Pages", path: "/pages" },
    { name: "Contact us", path: "/contact" },
  ];

  return (
    <nav className="w-full relative z-50">
      {/* Navbar Main */}
      <div className="flex justify-between items-center mx-4 mb-8 md:mx-8 lg:mx-10 my-4">
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold">Artelligence</p>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6 text-gray-600">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`transition ${
                  pathname === item.path ? "text-green-600 font-semibold" : "hover:text-teal-600"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Buttion text={"Let's Talk"} />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Side Drawer */}
      <div
        className={`lg:hidden fixed top-0 right-0  w-64 h-auto pb-10 bg-white shadow-lg border-l transform transition-transform duration-300 ease-in-out z-50
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          className="absolute top-4 right-4 p-2 text-gray-700"
          onClick={() => setMenuOpen(false)}
        >
          <X size={24} />
        </button>

        <div className="flex flex-col mt-16 gap-6 mx-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`transition text-lg ${
                pathname === item.path ? "bg-green-600 font-semibold text-white rounded px-6" : "hover:text-teal-600 px-6"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              { item.name}
            </Link>
          ))}
          <p className={`transition text-lg  hover:font-semibold hover:text-teal-600 px-6 "`}>Let's Talk</p>
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
