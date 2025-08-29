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
    <nav className="w-full max-w-[1500px] m-auto pt-2 sm:pt-3 2xl:pt-4 lg:mt-0 relative z-50 ">
      {/* Navbar Main */}
      <div className="flex justify-between  items-center mx-4 mb-8 md:mx-8 lg:mx-10 my-4">
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold cursor-pointer xl:text-start">Artelligence</p>

        {/* Desktop Menu */}
        <ul className="hidden xl:ml-6 lg:flex gap-6 xl:gap-10 mt-2 xl:text-[18px] text-gray-600 ">
          <li>
              <Link
                href="/"
                className={`transition ${pathname === '/' ? "text-teal-500 font-semibold" : "hover:text-teal-600"}`}>
                Home
              </Link>
          </li>
          <li>
              <Link
                onClick={()=>setShowPage(false)}
                href="/about"
                className={`transition ${pathname === '/about' ? "text-teal-500 font-semibold" : "hover:text-teal-600"}`}>
                About
              </Link>
          </li>
          <li>
              <Link
                onClick={()=>setShowPage(false)}
                href="/services"
                className={`transition ${pathname === '/services' ? "text-teal-500 font-semibold" : "hover:text-teal-600"}`}>
                Services
              </Link>
          </li>
          <li>
              <Link
                onClick={()=>setShowPage(false)}
                href="/projects"
                className={`transition ${pathname === '/projects' ? "text-teal-500 font-semibold" : "hover:text-teal-600"}`}>
                Projects
              </Link>
          </li>
          <div className="flex gap-1 items-center hover:text-teal-600 relative" >
            <li>
              <Link
                href=""
                onClick={()=>setShowPage(!showPage)}
                className={`transition ${showPage ? "text-teal-500 font-semibold" : "hover:text-teal-600"}`}>
                Pages 
              </Link>
          </li>
          <FaCaretDown className={`transition ${showPage ? "text-teal-500 font-semibold" : "hover:text-teal-600"}`}  />
          </div>
          
        { showPage && <div className="w-30 bg-white  absolute lg:right-80 xl:right-100 2xl:right-130 top-20">
            <ul className="w-full flex flex-col">
              <li>
              <Link
                href="/teams"
                onClick={()=>setShowPage(false)}
                className={`transition px-5 py-1 block hover:bg-teal-400 hover:text-white ${pathname === '/teams' ? "text-white bg-teal-400" : "text-grey-600"}`}>
                Teams
              </Link>
          </li>
          <li>
              <Link
                onClick={()=>setShowPage(false)}
                href="/faq"
                className={`transition px-6 py-1 hover:bg-teal-400 hover:text-white block ${pathname === '/faq' || showPage ? "text-white bg-teal-400 " : "hover:text-teal-600"}`}>
                Faq's
              </Link>
          </li>
            </ul>
        </div>}
          <li>
              <Link
                onClick={()=>setShowPage(false)}
                href="/contact"
                className={`transition ${pathname === '/contact' ? "text-teal-500 font-semibold" : "hover:text-teal-600 "}`}>
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
          {menuOpen ? <X size={35} /> : <Menu size={35} />}
        </button>
      </div>

      {/* Mobile Side Drawer */}
      <div
        className={`lg:hidden fixed top-17 right-0  w-45 sm:w-60 h-auto pb-3 bg-white shadow-lg  transform transition-transform duration-500 ease-in-out z-50 
        ${menuOpen ? "translate-x-0 right-6" : "translate-x-full"}`}
      >
        <div>
          <ul className="w-full flex flex-col ">
          <li>
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className={`transition w-full pl-5 py-2 block ${pathname === '/' ? "text-white bg-teal-400 " : "text-gray-600"}`}>
                Home
              </Link>
          </li>
          <li>
              <Link
                onClick={() => setMenuOpen(false)}
                href="/about"
                className={`transition pl-5 py-2 block  ${pathname === '/about' ? "text-white bg-teal-400  " : "text-gray-600"}`}>
                About
              </Link>
          </li>
          <li>
              <Link
                href="/services"
                onClick={() => setMenuOpen(false)}
                className={`transition pl-5 py-2 block ${pathname === '/services' ? "text-white bg-teal-400  " : "text-gray-600"}`}>
                Services
              </Link>
          </li>
          <li>
              <Link
                href="/projects"
                onClick={() => setMenuOpen(false)}
                className={`transition pl-5 py-2 block ${pathname === '/projects' ? "text-white bg-teal-400  " : "text-gray-600"}`}>
                Projects
              </Link>
          </li>
          <div className={`flex gap-1 items-center py-1  ${(pathname === '/teams' || pathname === '/faq') || showPage ? "text-white bg-teal-400 " : "text-gray-600"} `}>
            <li>
              <Link
                href=""
                onClick={()=>setShowPage(!showPage)}
                className={`transition pl-5 py-2 block ${pathname === '/teams' || pathname === '/faq' || showPage  ? "text-white bg-teal-400 " : "text-gray-600"}`}>
                Pages 
              </Link>
          </li>
          <FaCaretDown className="hover:text-teal-600" />
          </div>
          {showPage && <li>
              <Link
                onClick={() => {setMenuOpen(false),setShowPage(false)}}
                
                href="/teams"
                className={`transition pl-5 py-2 block ${pathname === '/teams' ? "text-white bg-teal-400  " : " text-gray-600"}`}>
                Teams
              </Link>
          </li>}
          {showPage && <li>
              <Link
                onClick={() => {setMenuOpen(false),setShowPage(false)}}
                href="/faq"
                className={`transition pl-5 py-2 block ${pathname === '/faq' ? "text-white bg-teal-400 " : "text-gray-600"}`}>
                Faq's
              </Link>
          </li>}
          <li>
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className={`transition pl-5 py-2 block ${pathname === '/contact' ? "text-white bg-teal-400 font-semibold " : "text-gray-600"}`}>
                Contact us
              </Link>
          </li>
          <li>
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className={`transition pl-5 py-2 block text-gray-600"}`}>
                Let's Talk
              </Link>
          </li>
        </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;



