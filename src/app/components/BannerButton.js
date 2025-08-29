"use client"
import { FiChevronsRight } from "react-icons/fi";
function BannerButton( {text1, text2,text3, page}) {
  console.log(page)
  return (
    <div className="flex gap-4 justify-between items-center mt-6 w-full ">
          <button className="text-sm md:text-lg m-auto lg:m-0 font-medium relative flex items-center justify-between pl-5 pr-2 py-3 rounded-full text-[#FFFFFF] shadow-lg bg-gradient-to-r rounded-bl-none from-teal-900 to-emerald-300 hover:from-teal-600 hover:to-emerald-800 transition">
            <span className=" ml-3 mr-3">{text1}</span>
            <div>
            <FiChevronsRight className="-mr-4" size={24} color="white" />
            </div>
            <span className={`ml-6 pr-4 ${page !== "true" ? "text-[#262626]" :"" } `}>{text2}</span>
            {page === "true" && <div>
             <FiChevronsRight className="-mr-4" size={24} color="white" />
            </div>}
            {page === "true" &&<span className="ml-6 pr-4 text-[#262626] mr-4">{text3}</span>}
          </button>
        </div>
  )
}

export default BannerButton