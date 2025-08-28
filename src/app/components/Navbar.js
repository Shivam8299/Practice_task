"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Buttion from "./Buttion";
import { FaCaretDown } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPage, setShowPage] = useState(false)
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
    <nav className="w-full mt-2 lg:mt-0 relative z-50 bg-gradient-to-br from-teal-100 to-emerald-50 border border-teal-100">
      {/* Navbar Main */}
      <div className="flex justify-between items-center mx-4 mb-8 md:mx-8 lg:mx-10 my-4">
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold cursor-pointer">Artelligence</p>

        {/* Desktop Menu */}
        <ul className="hidden xl:ml-6 lg:flex gap-6 xl:gap-10 mt-2 xl:text-[18px] text-gray-600">
          <li>
              <Link
                href="/"
                className={`transition ${pathname === '/' ? "text-green-600 font-semibold" : "hover:text-teal-600"}`}>
                Home
              </Link>
          </li>
          <li>
              <Link
                onClick={()=>setShowPage(false)}
                href="/about"
                className={`transition ${pathname === '/about' ? "text-green-600 font-semibold" : "hover:text-teal-600"}`}>
                About
              </Link>
          </li>
          <li>
              <Link
                onClick={()=>setShowPage(false)}
                href="/services"
                className={`transition ${pathname === '/services' ? "text-green-600 font-semibold" : "hover:text-teal-600"}`}>
                Services
              </Link>
          </li>
          <li>
              <Link
                onClick={()=>setShowPage(false)}
                href="/projects"
                className={`transition ${pathname === '/projects' ? "text-green-600 font-semibold" : "hover:text-teal-600"}`}>
                Projects
              </Link>
          </li>
          <div className="flex gap-1 items-center hover:text-teal-600 relative" >
            <li>
              <Link
                href=""
                onClick={()=>setShowPage(!showPage)}
                className={`transition ${showPage ? "text-green-600 font-semibold" : "hover:text-teal-600"}`}>
                Pages 
              </Link>
          </li>
          <FaCaretDown className={`transition ${showPage ? "text-green-600 font-semibold" : "hover:text-teal-600"}`}  />
          </div>
          
        { showPage && <div className="p-5 w-48 bg-green-100 rounded-md  absolute lg:right-70 xl:right-90 top-15">
            <ul className="flex flex-col gap-2 items-start justify-center">
              <li>
              <Link
                href="/teams"
                onClick={()=>setShowPage(false)}
                className={`transition px-5 py-1 rounded ${pathname === '/teams' ? "text-white bg-green-500  " : "hover:text-teal-600"}`}>
                Teams
              </Link>
          </li>
          <li>
              <Link
                onClick={()=>setShowPage(false)}
                href="/faq"
                className={`transition px-6 py-1 rounded ${pathname === '/faq' || showPage ? "text-white bg-green-500" : "hover:text-teal-600"}`}>
                Faq's
              </Link>
          </li>
            </ul>
        </div>}
          <li>
              <Link
                onClick={()=>setShowPage(false)}
                href="/contact"
                className={`transition ${pathname === '/contact' ? "text-green-600 font-semibold" : "hover:text-teal-600 "}`}>
                Contact us
              </Link>
          </li>
        </ul>

        {/* CTA Button */}
        <div onClick={()=>setShowPage(false)} className="hidden lg:block  ">
          <Buttion  text={"Let's Talk"} />
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

        <div>
          <ul className="flex flex-col mt-16 gap-6 mx-6 mb-5">
          <li>
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className={`transition ${pathname === '/' ? "text-green-600 font-semibold" : "hover:text-teal-600"}`}>
                Home
              </Link>
          </li>
          <li>
              <Link
                onClick={() => setMenuOpen(false)}
                href="/about"
                className={`transition ${pathname === '/about' ? "text-green-600 font-semibold" : "hover:text-teal-600"}`}>
                About
              </Link>
          </li>
          <li>
              <Link
                href="/services"
                onClick={() => setMenuOpen(false)}
                className={`transition ${pathname === '/services' ? "text-green-600 font-semibold" : "hover:text-teal-600"}`}>
                Services
              </Link>
          </li>
          <li>
              <Link
                href="/projects"
                onClick={() => setMenuOpen(false)}
                className={`transition ${pathname === '/projects' ? "text-green-600 font-semibold" : "hover:text-teal-600"}`}>
                Projects
              </Link>
          </li>
          <div className="flex gap-1 items-center">
            <li>
              <Link
                href=""
                onClick={()=>setShowPage(!showPage)}
                className={`transition ${showPage ? "text-green-600 font-semibold" : "hover:text-teal-600"}`}>
                Pages 
              </Link>
          </li>
          <FaCaretDown className="hover:text-teal-600" />
          </div>
          {showPage && <li>
              <Link
                onClick={() => setMenuOpen(false)}
                href="/teams"
                className={`transition ${pathname === '/teams' ? "text-green-600 font-semibold" : "hover:text-teal-600"}`}>
                Teams
              </Link>
          </li>}
          {showPage && <li>
              <Link
                onClick={() => setMenuOpen(false)}
                href="/faq"
                className={`transition ${pathname === '/faq' ? "text-green-600 font-semibold" : "hover:text-teal-600"}`}>
                Faq's
              </Link>
          </li>}
          <li>
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className={`transition ${pathname === '/contact' ? "text-green-600 font-semibold" : "hover:text-teal-600 "}`}>
                Contact us
              </Link>
          </li>
        </ul>
          <p  onClick={() => setMenuOpen(false)} className={`transition  hover:font-semibold hover:text-teal-600 px-6 cursor-pointer "`}>Let's Talk</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;



