"use client";
import Buttion from "./Buttion";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiChevronRight } from "react-icons/fi";

function About() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between px-2 sm:px-4 md:px-12 lg:px-20 gap-16 lg:py-12">
        {/* Image Section */}
        <div className="relative w-full md:max-w-md lg:w-1/2 flex justify-center px-3">
          {/* Main Image */}
          <img
            className="w-full rounded-2xl z-1"
            src="https://html.designingmedia.com/artelligence/assets/images/aboutpage-image.png"
            alt="Main about us"
          />

          {/* Overlay Image */}
          <img
            className="absolute -left-2 bottom-4 md:-left-6 lg:-left-8  md:-bottom-7 lg:-bottom-8 w-20 md:w-25 lg:w-32  rounded-2xl shadow-xl"
            src="https://html.designingmedia.com/artelligence/assets/images/aboutpage-image2.png"
            alt="Overlay"
          />
        </div>

        {/* Text Section with Animation */}
        <motion.div
          className="w-full lg:w-1/2 px-2 md:px-4 lg:px-0 xl:px-6 text-center md:text-left"
          initial={{ opacity: 0, x: -100 }} // start left
          whileInView={{ opacity: 1, x: 0 }} // animate to normal position
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }} // trigger once, when 20% visible
        >
          <p className="text-xl text-[#2BE0f7] text-center lg:text-start">
            ABOUT US
          </p>
          <p className="text-2xl text-center lg:text-start md:text-[32px] lg:text-[38px] md:px-20 lg:px-0 font-bold my-2 leading-snug text-[#262626]">
            Empowering People By Keeping Them Well
          </p>
          <p className="text-[#787878] text-[14px] md:text-[16px] lg:text-[18px] text-center lg:text-start leading-relaxed">
            Repellendus autem ruibusdam et aut officiis debitis aut re
            necessitatibus saepe eveniet ut et voluptates repudianda sint et
            molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
            delectus.
          </p>
          <div className="flex gap-2 items-center justify-center lg:justify-start mb-4 mt-4">
            <span className=" hidden lg:flex  items-center justify-center w-7 h-7 rounded-full text-white bg-[#b0e7f1] text-2xl ">
              <FiChevronRight size={25} />
            </span>
            <p className="text-[16px] text-gray-600 lg:text-black font-medium ">
              Quis autem vel eum iure reprehenderit aui
            </p>
          </div>
          <div className="flex gap-2 items-center justify-center lg:justify-start mb-4">
            <span className="hidden lg:flex items-center justify-center w-7 h-7 rounded-full bg-[#b0e7f1] text-2xl text-white">
              <FiChevronRight size={25} />
            </span>
            <p className="text-base font-medium  text-gray-600 lg:text-black ">
              Quis autem vel eum iure reprehenderit aui
            </p>
          </div>
          <div className="flex gap-2 items-center justify-center lg:justify-start mb-8">
            <span className=" hidden lg:flex justify-center items-center w-7 h-7 rounded-full bg-[#b0e7f1] text-2xl text-white">
              <FiChevronRight size={25} />
            </span>
            <p className="text-base font-medium text-gray-600 lg:text-black">
              Quis autem vel eum iure reprehenderit aui
            </p>
          </div>
          <div className="w-full flex justify-center lg:justify-start mt-4 ">
            <Buttion text="Read More" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
