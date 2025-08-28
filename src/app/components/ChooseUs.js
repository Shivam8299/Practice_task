"use client"; 
import { motion } from "framer-motion";
import Buttion from "./Buttion";
import { FiChevronRight } from "react-icons/fi";

function ChooseUs() {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-4 lg:gap-0 mb-6  lg:mb-12 md:items-center lg:px-10  ">
      {/* Left Image */}
      <div className="w-full md:w-150 max-h-screen lg:w-1/2 px-3 lg:px-0">
        <img
          className=""
          src="https://html.designingmedia.com/artelligence/assets/images/choose-image.png"
          alt="Choose Us"
        />
      </div>

      {/* Right Content with Animation */}
      <motion.div
        className="px-3  md:px-6 w-full lg:w-[38%] lg:mt-10"
        initial={{ opacity: 0, x: -100 }} // start hidden & from right
        whileInView={{ opacity: 1, x: 0 }} // animate to visible & normal position
        transition={{ duration: 0.8, ease: "easeOut" }} // smooth animation
        viewport={{ once: true, amount: 0.3 }} // only once, trigger when 30% visible
      >
        <p className="text-lg uppercase text-center lg:text-start mb-4 md:text-medium md:font-medium text-[#2BE0f7]">
          Why Choose Us
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-[38px] text-center lg:text-start font-bold leading-snug mb-4">
          Get Closer Look How Business Develop in AI Data Analysis
        </h2>
        <p className="text-[#787878] mb-6 text-[18px] text-center lg:text-start">
          Consectetur adipiscing elit sed do eiusmod tempor in labore et dolore
          magna aliqua ruis ipsum suspendisse ultrices gravida sit amet.
        </p>

        <div>
          <div className="flex gap-2 items-center justify-center mb-2">
            <span className=" hidden lg:flex ml-4 items-center justify-center w-8 h-8 rounded-full text-white bg-[#b0e7f1] text-2xl ">
              <FiChevronRight size={25}/>
            </span>
            <p className="text-[18px] font-[18px] text-[#787878] ">
              Quis autem vel eum iure reprehenderit aui
            </p>
          </div>
          <div className="flex gap-2 items-center justify-center mb-2">
            <span className="ml-4 hidden lg:flex items-center justify-center w-8 h-8 rounded-full bg-[#b0e7f1] text-2xl text-white">
              <FiChevronRight size={25}/>
            </span>
            <p className="text-[18px]  font-[18px] text-[#787878] ">
              Quis autem vel eum iure reprehenderit aui
            </p>
          </div>
          <div className="flex gap-2 items-center justify-center mb-5">
            <span className="ml-4 hidden lg:flex justify-center items-center w-8 h-8 rounded-full bg-[#b0e7f1] text-2xl text-white">
             <FiChevronRight size={25}/>
            </span>
            <p className="text-[18px] font-[18px] text-[#787878] ">
              Quis autem vel eum iure reprehenderit aui
            </p>
          </div>
        <div className="w-full flex justify-center lg:justify-start mt-4">
          <Buttion text="Read More"/>
        </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ChooseUs;
