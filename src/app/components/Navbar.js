"use client";

import Link from "next/link";

function Navbar() {
  return (
    <div>
      <div className="flex bg-gradient-to-br from-teal-50  to-emerald-50 justify-between py-2 px-6 mt-4">
        <p className="text-gray-600">
          <span className="text-2xl font-semibold ">envato</span>market
        </p>
        <button className="text-sm py-2 px-6 bg-[#82B440] text-white rounded-md">
          Buy Now
        </button>
      </div>
      <div className="flex justify-between mx-14 my-4 items-center ">
        <p className="text-4xl font-bold mr-15 mt-0">Artelligence</p>
        <ul className="w-full text-gray-600 font-semibold flex gap-6 justify-between max-w-150 mt-2">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/contact">Projects</Link>
        </li>
        <li>
            <Link href="/contact">Pages</Link>
        </li>
        <li>
          <Link href="/contact">Contact us</Link>
        </li>
      </ul>
      <div>
        <button className="relative flex items-center justify-between px-6 py-2 rounded-full rounded-bl-none text-white shadow-lg  bg-gradient-to-r cursor-pointer from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700">
  <span>Let's Talk</span>
  <span className="ml-4 flex items-center justify-center pb-1 w-11 h-11 rounded-full  bg-white text-2xl text-gray-600">
    &gt;
  </span>
</button>

      </div>
      </div>
    </div>
  );
}

export default Navbar;
