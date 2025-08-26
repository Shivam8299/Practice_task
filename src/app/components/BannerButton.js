"use client"
import { FiChevronsRight } from "react-icons/fi";
function BannerButton( {text1, text2}) {
  return (
    <div className="flex gap-4 justify-between items-center mt-6 w-full ">
          <button className="text-sm md:text-lg font-medium relative flex items-center justify-between pl-5 pr-2 py-3 rounded-full text-[#FFFFFF] shadow-lg bg-gradient-to-r rounded-bl-none from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-800 transition">
            <span className="mr-4">{text1}</span>
            <div>
            <FiChevronsRight className="-mr-4" size={24} color="white" />
            </div>
            <span className="ml-6 pr-4 text-[#16d6ef]">{text2}</span>
          </button>
        </div>
  )
}

export default BannerButton