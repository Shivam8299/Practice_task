

import React from "react";
import { FiChevronRight } from "react-icons/fi";

function Buttion({ text }) {
  return (
    <button className="text-sm md:text-lg font-medium cursor-pointer relative flex items-center justify-between pl-5 pr-2 py-1 rounded-full text-[#FFFFFF] shadow-lg bg-gradient-to-r rounded-bl-none from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-800 transition">
      <span className="  sm:ml-4 -mr-3">{text}</span>
      <span className="ml-6 flex items-center justify-center w-12 h-12 rounded-full bg-white text-xl text-gray-600">
        <FiChevronRight /> 
      </span>
    </button>
  );
}

export default Buttion;


