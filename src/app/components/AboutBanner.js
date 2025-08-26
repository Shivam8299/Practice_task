"use client";
import { motion } from "framer-motion";
import BannerButton from "./BannerButton";
export default function AboutBanner({about, details, img}) {
  return (
    <div className="flex flex-col md:flex-row -gap-10 px-2 mb-6">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="pl-6 lg:pl-8 w-full lg:w-[60%] flex justify-center items-center lg:items-start flex-col md:text-left mt-6 lg:mt-14"
      >
        <p className="text-2xl sm:text-4xl md:text-[42px] xl:text-6xl text-center  lg:text-start font-bold mb-4">
          {about}
        </p>
        <p className="text-base sm:text-lg text-gray-700 font-serif">
          {details}
        </p>
        <div className="text-center lg:text-start">
          <BannerButton text1="About" text2="Home" />
        </div>
      </motion.div>
      <div className=" w-full  md:w-[55%] md:flex md:justify-center md:items-center pl-[30%] md:pl-0">
        <img
          src={img}
          alt="AI Business"
          className="w-full lg:max-w-full h-auto  mt-4 lg:mt-20"
        />
      </div>
    </div>
  );
}
