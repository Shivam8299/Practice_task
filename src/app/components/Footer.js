"use client";

import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

function Footer() {
  return (
    <footer className="bg-[#292929] py-12 md:pt-16 lg:pt-25 px-6 md:px-10 lg:px-20">
      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div>
          <h2 className="text-2xl text-center lg:text-start sm:text-3xl font-bold text-white mb-6">
            Artelligence
          </h2>
          <p className="text-gray-300 text-center lg:text-start text-sm leading-relaxed mb-6">
            Ruis aute irure dolor in reprehenderit in volu velit ese ciu nulla
            pariatur excepteur sint oc aecat curidatat nona...
          </p>
          <div className="flex space-x-4 justify-center">
            <FaFacebookF className="text-gray-200 border border-gray-400 p-2 rounded-full hover:bg-white hover:text-[#1877f2] transition cursor-pointer" size={36} />
            <FaTwitter className="text-gray-200 border border-gray-400 p-2 rounded-full hover:bg-white hover:text-[#1DA1F2] transition cursor-pointer" size={36} />
            <FaLinkedinIn className="text-gray-200 border border-gray-400 p-2 rounded-full hover:bg-white hover:text-[#0A66C2] transition cursor-pointer" size={36} />
          </div>
        </div>

        {/* Useful Links part */}
        <div  className="hidden md:block md:ml-8 lg:ml-0">
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6">
            Useful Links
          </h3>
          <ul className="space-y-2 text-gray-300">
            {["Home", "About", "Services", "Project", "Contact Us"].map((item, i) => (
              <li key={i} className="flex items-center gap-2 hover:text-white transition cursor-pointer">
                <FiChevronRight /> <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Services part  */}
        <div className="hidden lg:block">
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6">
            Our Services
          </h3>
          <ul className="space-y-2 text-gray-300">
            {["AI Development", "Data Analysis", "Machine Learning", "Robotics", "Consulting"].map((item, i) => (
              <li key={i} className="flex items-center gap-2 hover:text-white transition cursor-pointer">
                <FiChevronRight /> <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl text-center md:text-start font-semibold text-white mb-6">
            Contact Us
          </h3>
          <p className="text-gray-300 mb-2">📞 +61 3 8376 6284</p>
          <p className="text-gray-300 mb-2">📧 Info@Artelligence.com</p>
          <p className="text-gray-300">🏢 121 King Street, Melbourne 3000 Australia</p>
        </div>
      </div>

      <div className="mt-20 border-t border-gray-600 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Artelligence. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
