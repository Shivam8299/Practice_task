"use client";
import { motion } from "framer-motion";
import BannerButton from "./BannerButton";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
export default function AboutBanner({ text,text3, about, details, img, page}) {
  
  const pathname = usePathname();
   const [mounted, setMounted] = useState(false);

 useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div className="max-w-[1600px] flex flex-col md:flex-row gap-4 md:gap-0 px-2 mb-6 pt-8 m-auto ">
      <motion.div
        key={mounted ? pathname : "static"} 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="pl-5 lg:pl-10 xl:pl-15 w-full md:w-[50%] 2xl:w-[60%] 3xl:w-[65%] flex justify-center lg:text-start flex-col "
      >
        <p className=" xl:pl-20 3xl:pl-26  text-[30px] sm:text-4xl md:text-[42px] lg:text-[66px] text-center lg:text-start  font-bold mb-4">
          {about}
        </p>
        <p className="xl:pl-20 3xl:pl-26 text-[14px] sm:text-lg lg:text-[20px] text-center lg:text-start text-gray-700 font-serif">
          {details}
        </p>
        <div className="xl:pl-20 3xl:pl-26  text-center lg:text-start">
          <BannerButton text1="Home" text2={text} text3={text3} page={page} />
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
