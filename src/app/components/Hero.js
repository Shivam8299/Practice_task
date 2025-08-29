"use client";

import React from "react";
import { motion } from "framer-motion";
import Buttion from "./Buttion";

function Hero() {
  return (
    <div className=" max-w-[1600px] m-auto flex flex-col lg:flex-row items-center md:items-start justify-center lg:justify-between px-4  xl:px-20 2xl:px-40 3xl:px-60  gap-12 py-12">
      {/* Image Section */}
      <div className="relative w-full lg:w-1/2 flex  justify-center">
        {/* Main Image */}
        <img
          className="w-full rounded-2xl sm:p-20 lg:p-0"
          src="https://html.designingmedia.com/artelligence/assets/images/about-image1.png"
          alt="Main about us"
        />

        {/* Overlay Image */}
        <img
          className="absolute -bottom-10 right-0 lg:-bottom-27 lg:-right-10 w-48 sm:w-65 lg:w-60 rounded-2xl shadow-xl"
          src="https://html.designingmedia.com/artelligence/assets/images/about-image2.png"
          alt="Overlay"
        />
      </div>

      {/* Text Section with Animation */}
      <motion.div
        className="mt-16 md:mt-0 w-full lg:w-1/2 px-2 md:px-4 text-center md:text-left"
        initial={{ opacity: 0, x: -100 }} // start left
        whileInView={{ opacity: 1, x: 0 }} // animate to normal position
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }} // trigger once, when 20% visible
      >
        <p className="text-xl text-teal-400 text-center lg:text-start">ABOUT US</p>
        <p className="text-center lg:text-start text-2xl md:text-3xl lg:text-4xl xl:text-[42px] 2xl:text-[46px] font-bold my-2 leading-snug text-[#262626]">
          Empowering People By Keeping Them Well
        </p>
        <p className="text-[#787878] text-[18px] text-center lg:text-start">
          Repellendus autem ruibusdam et aut officiis debitis aut re
          necessitatibus saepe eveniet ut et voluptates repudianda sint et
          molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
          delectus.
        </p>

        {/* Block 1 */}
        <div className="flex flex-col lg:flex-row mt-6 gap-4 items-center justify-between lg:items-start ">
          <img
            className="w-16 md:w-20 lg:w-[55px]"
            src="https://html.designingmedia.com/artelligence/assets/images/about-customer.png"
            alt="Customer satisfaction"
          />
          <div>
            <p className="text-lg md:text-xl lg:text-[20px] text-center lg:text-start font-semibold text-black font-serif">
              100% Customers Satisfaction
            </p>
            <p className="text-[#787878] text-[18px] font-serif">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
              sint.
            </p>
          </div>
        </div>

        {/* Block 2 */}
        <div className="flex flex-col lg:flex-row mt-6 pt-16 md:pt-2 gap-4 items-center justify-between lg:items-start ">
          <img
            className="w-16 md:w-20 lg:w-[55px]"
            src="https://html.designingmedia.com/artelligence/assets/images/about-quality.png"
            alt="Quality assurance"
          />
          <div>
            <p className="text-lg md:text-xl text-center lg:text-start lg:text-[20px] font-semibold text-black font-serif">
              Quality Assurance Guarantee
            </p>
            <p className="text-[#787878] text-[18px] font-serif mb-4 md:mb-6">
              Velit officia consequat duis enim velit mollie assu omnis dolor
              repellendus.
            </p>
          </div>
        </div>
       <div className="w-full flex justify-center lg:justify-start mt-4 ">
          <Buttion text="Read More"/>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
