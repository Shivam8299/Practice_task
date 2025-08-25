"use client"; // required for framer-motion in Next.js App Router

import { motion } from "framer-motion";
import Buttion from "./components/Buttion";
import ChooseUs from "./components/ChooseUs";
import Hero from "./components/Hero";
import Services from "./components/Services";
import CaseSudies from "./components/CaseSudies";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Faq from "./components/Faq";

function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-white to-emerald-100 py-4 ">
      <div className="flex flex-col lg:flex-row -gap-10 px-4 md:px-8 mb-6">
        <div className="pl-4 w-full lg:w-[60%] flex justify-center items-center flex-col text-center md:text-left">
          <p className="text-2xl sm:text-4xl md:text-[42px] xl:text-6xl text-center lg:text-start font-bold mb-4">
            Bring Force of Artificial Intelligence To Business
          </p>
          <p className="text-base sm:text-lg text-gray-700 font-serif">
            Quis autem vel eum iure reprehenderit aui in ea voluptate velit esse
            ruam nihil molestiae conseuatur.
          </p>
          <div className="flex gap-4 justify-center mt-6 w-full ">
            <Buttion text="Read More" />
            <Buttion text="Contact Us" />
          </div>
        </div>
        <motion.div
          className="w-full lg:w-[55%] flex  justify-center items-center"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src="https://html.designingmedia.com/artelligence/assets/images/banner-image.png"
            alt="AI Business"
            className="w-full lg:max-w-full h-auto  mt-4 lg:mt-25"
          />
        </motion.div>
      </div>

      {/* Other Sections */}
      <Hero />
      <Services />
      <ChooseUs />
      <CaseSudies/>
      <Testimonials/>
      <Faq/>
      <Footer/>
    </div>
  );
}

export default Page;
