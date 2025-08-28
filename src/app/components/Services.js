"use client";

import Buttion from "./Buttion";
import { motion } from "framer-motion";

function Services() {
  let services = [
  {
    title: "Robotic Automation",
    image: "https://html.designingmedia.com/artelligence/assets/images/service-reboticon.png"
  },
  {
    title: "Machine Learning",
    image: "https://html.designingmedia.com/artelligence/assets/images/service-learningicon.png"
  },
  {
    title: "Education & Science",
    image: "https://html.designingmedia.com/artelligence/assets/images/service-scienceicon.png"
  },
  {
    title: "Predictive Analysis",
    image: "https://html.designingmedia.com/artelligence/assets/images/service-analysicon.png"
  }
]

  return (
    <div className="flex flex-col lg:flex-row justify-between gap-14 items-center bg-cyan-50 my-12 px-4 md:px-6 lg:px-10 py-12">
      {/* LEFT SECTION */}
      <motion.div 
      initial={{ opacity: 0, x: -100 }} // start hidden & from right
      whileInView={{ opacity: 1, x: 0 }} // animate to visible & normal position
      transition={{ duration: 1, ease: "easeOut" }} // smooth animation
      viewport={{ once: true, amount: 0.3 }}
      className="w-full lg:w-1/2 lg:ml-13 flex flex-col justify-center text-center lg:text-left">
        <p className="text-[#2BE0f7] text-lg lg:text-xl mb-2 text-center lg:text-start">
          SERVICES WE PROVIDE
        </p>
        <h2 className="text-2xl md:text-[32] md:px-20 lg:px-0 lg::text-[42px] lg:text-[38px] text-[#262626] font-bold leading-snug mb-4 ">
          Our Purpose is To Deliver Excellence in Service and Execution
        </h2>
        <p className="text-[#787878] mb-6  text-[18px]">
          Repellendus autem ruibusdam et aut officiis debitis aut re
          necessitatibus saepe eveniet ut et voluptates repudianda sint et
          molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
          delectus.
        </p>
        <div className="flex justify-center lg:justify-start w-full">
          <Buttion text="Read More"/>
        </div>
      </motion.div>

      {/* RIGHT SECTION - CARDS */}
      <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-0 mt-10 md:mt-4 px-4 md:px-8 ">
        {services.map((item, i) =>
          i % 2 !== 0 ? (
            <div
              key={i}
              className="rounded-3xl md:w-auto  lg:w-55 md:h-70 lg:h-80 border-b-[2px] border-cyan-600 p-6 shadow-lg bg-white lg:mt-8 hover:text-white hover:bg-gradient-to-r from-[#012038] to-[#099fbb] transition-transform duration-300 hover:-translate-y-2 flex flex-col justify-center items-center text-center"
            >
              <img
                className="rounded-full w-20 h-20 mb-4 p-4 hover:bg-white bg-[#b0e7f1]"
                src={item.image}
                alt={item}
              />
              <h3 className="text-[20px] font-semibold mb-2">{item.title}</h3>
              <p className="text-base mb-3  text-[#787878]">
                Autem vel eum iure reprehea rui in ea volutae velit...
              </p>
              <p className="text-[#2BE0f7]">Read More</p>
            </div>
          ) : (
            <div
              key={i}
              className=" md:h-70 lg:w-55 lg:h-80 rounded-3xl p-5 shadow-md bg-white hover:text-white hover:bg-gradient-to-r from-[#012038] to-[#099fbb] flex flex-col justify-center items-center text-center border-b-[2px] border-cyan-600 transition-transform duration-300 hover:-translate-y-2"
            >
              <img
                className="rounded-full w-20 h-20 mb-4 p-4 hover:bg-white bg-[#b0e7f1]"
                src={item.image}
                alt={item}
              />
              <h3 className="text-[20px] font-semibold mb-2font-serif ">{item.title}</h3>
              <p className="text-base mb-3 font-serif text-[#787878]">
                Autem vel eum iure reprehea rui in ea volutae velit...
              </p>
              <p className="text-[#2BE0f7] font-serif">Read More</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Services;
