"use client";
import { motion } from "framer-motion";
import { FiChevronsRight } from "react-icons/fi";
export default function AboutBanner() {
  return (
    <div className="flex flex-col lg:flex-row -gap-10 px-4 md:px-8 mb-6">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="pl-4 w-full lg:w-[60%] flex justify-center items-center lg:items-start flex-col md:text-left"
      >
        <p className="text-2xl sm:text-4xl md:text-[42px] xl:text-6xl text-center  lg:text-start font-bold mb-4">
          About Us
        </p>
        <p className="text-base sm:text-lg text-gray-700 font-serif">
          Ruis autem vel eum iure reprehenderit aui in ea voluptate velit esse
          ruam nihil molestiae conseuatur.
        </p>
        <div className="flex gap-4 justify-between items-center mt-6 w-full ">
          <button className="text-sm md:text-lg font-medium relative flex items-center justify-between pl-5 pr-2 py-3 rounded-full text-[#FFFFFF] shadow-lg bg-gradient-to-r rounded-bl-none from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-800 transition">
            <span className="mr-4">About</span>
            <div>
            <FiChevronsRight className="-mr-4" size={24} color="white" />
            </div>
            <span className="ml-6 pr-4 text-[#16d6ef]"> Home</span>
          </button>
        </div>
      </motion.div>
      <div className="w-full lg:w-[55%] flex justify-center items-center">
        <img
          src="https://html.designingmedia.com/artelligence/assets/images/sub-bannerimage.png"
          alt="AI Business"
          className="w-full lg:max-w-full h-auto  mt-4 lg:mt-20"
        />
      </div>
    </div>
  );
}
