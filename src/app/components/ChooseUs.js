
"use client"; 

import { motion } from "framer-motion";
import Buttion from "./Buttion";

function ChooseUs() {
  return (
    <div className="flex flex-col md:flex-row gap-10 mb-6 md:items-center">
      {/* Left Image */}
      <div className="w-full max-h-screen md:w-1/2 px-3 md:px-6">
        <img
          className="relative lg:bottom-25"
          src="https://html.designingmedia.com/artelligence/assets/images/choose-image.png"
          alt="Choose Us"
        />
      </div>

      {/* Right Content with Animation */}
      <motion.div
        className="px-3 md:px-6 w-full md:max-w-1/3"
        initial={{ opacity: 0, x: -100 }} // start hidden & from right
        whileInView={{ opacity: 1, x: 0 }} // animate to visible & normal position
        transition={{ duration: 0.8, ease: "easeOut" }} // smooth animation
        viewport={{ once: true, amount: 0.3 }} // only once, trigger when 30% visible
      >
        <p className="text-lg text-center md:text-start mb-4 md:text-medium md:font-medium text-[#2BE0f7] font-serif">
          Why Choose Us
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-center md:text-start font-bold leading-snug mb-4 font-serif">
          Get Closer Look How Business Develop in AI Data Analysis
        </h2>
        <p className="text-[#787878] mb-6 font-serif">
          Consectetur adipiscing elit sed do eiusmod tempor in labore et dolore
          magna aliqua ruis ipsum suspendisse ultrices gravida sit amet.
        </p>

        <div>
          <div className="flex gap-2 items-center mb-2">
            <span className="ml-4 flex items-center justify-center pb-1 w-9 h-9 rounded-full text-white bg-[#b0e7f1] text-2xl ">
              &gt;
            </span>
            <p className="text-sm font-medium text-[#787878] font-serif">
              Quis autem vel eum iure reprehenderit aui
            </p>
          </div>
          <div className="flex gap-2 items-center mb-2">
            <span className="ml-4 flex items-center justify-center pb-1 w-9 h-9 rounded-full bg-[#b0e7f1] text-2xl text-white">
              &gt;
            </span>
            <p className="text-sm font-medium text-[#787878] font-serif">
              Quis autem vel eum iure reprehenderit aui
            </p>
          </div>
          <div className="flex gap-2 items-center mb-5">
            <span className="ml-4 flex items-center justify-center pb-1 w-9 h-9 rounded-full bg-[#b0e7f1] text-2xl text-white">
              &gt;
            </span>
            <p className="text-sm font-medium text-[#787878] font-serif">
              Quis autem vel eum iure reprehenderit aui
            </p>
          </div>
        <div className="w-full flex justify-center md:justify-start mt-4">
          <Buttion text="Read More"/>
        </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ChooseUs;
