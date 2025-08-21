import React from "react";

function Buttion({text}) {
  return (
    <button className="text-sm md:text-base font-serif relative flex items-center justify-between px-6 py-2 rounded-full text-white shadow-lg bg-gradient-to-r rounded-bl-none from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 transition">
      <span>{text}</span>
      <span className="ml-4 flex items-center justify-center w-9 h-9 rounded-full bg-white text-xl text-gray-600">
        &gt;
      </span>
    </button>
  );
}

export default Buttion;
