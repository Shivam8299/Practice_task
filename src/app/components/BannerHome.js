"use client"
import { motion } from "framer-motion";
import Buttion from "./Buttion";

export default function BannerHome () {
    return (
        <div className="flex flex-col lg:flex-row px-4 md:px-8 mb-6 lg:mb-20">
        <div className="pl-4  w-full lg:w-[45%] flex justify-center items-center flex-col text-center md:text-left">
          <p className="text-[30px] sm:text-3xl md:text-[42px] lg:text-[48px] xl:text-[66px]  text-center lg:text-start font-bold mb-4">
            Bring Force of Artificial Intelligence To Business
          </p>
          <p className="text-[14px] text-center lg:text-start sm:text-lg lg:text-[20px] text-gray-700 font-serif lg:mr-10 xl:mr-20">
            Quis autem vel eum iure reprehenderit aui in ea voluptate velit esse
            ruam nihil molestiae conseuatur.
          </p>
          <div className="flex gap-4 justify-center lg:justify-start mt-6 w-full ">
            <Buttion text="Read More" />
            <Buttion text="Contact Us" />
          </div>
        </div>
        <motion.div
          className="w-full lg:w-[55%] flex justify-center items-center lg:relative lg:right-10 xl:right-25 lg:top-2"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src="https://html.designingmedia.com/artelligence/assets/images/banner-image.png"
            alt="AI Business"
            className="w-full lg:max-w-full h-auto  mt-4 lg:mt-20"
          />
        </motion.div>
      </div>
    )
}