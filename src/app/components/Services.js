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
    <div className="flex flex-col md:flex-row justify-between items-center bg-cyan-50 my-12 px-4 md:px-6 lg:px-40 py-12">
      {/* LEFT SECTION */}
      <motion.div 
      initial={{ opacity: 0, x: -100 }} // start hidden & from right
      whileInView={{ opacity: 1, x: 0 }} // animate to visible & normal position
      transition={{ duration: 1, ease: "easeOut" }} // smooth animation
      viewport={{ once: true, amount: 0.3 }}
      className="w-full md:w-1/2 lg:w-1/3 lg:ml-13 flex flex-col justify-center md:text-left">
        <p className="text-[#2BE0f7] text-lg lg:text-xl mb-2 text-center md:text-start font-serif">
          SERVICES WE PROVIDE
        </p>
        <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold leading-snug mb-4 font-serif">
          Our Purpose is To Deliver Excellence in Service and Execution
        </h2>
        <p className="text-[#787878] mb-6 font-serif text-sm ">
          Repellendus autem ruibusdam et aut officiis debitis aut re
          necessitatibus saepe eveniet ut et voluptates repudianda sint et
          molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
          delectus.
        </p>
        <div className="flex justify-center md:justify-start w-full">
          <Buttion text="Read More"/>
        </div>
      </motion.div>

      {/* RIGHT SECTION - CARDS */}
      <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 mt-10 md:mt-4 ">
        {services.map((item, i) =>
          i % 2 !== 0 ? (
            <div
              key={i}
              className="rounded-3xl md:w-50 md:h-70 border-b-[2px] border-[#2BE0f7] p-6 shadow-lg bg-white md:mt-8 hover:text-white hover:bg-gradient-to-r from-[#012038] to-[#099fbb] hover:translate-1.5 flex flex-col justify-center items-center text-center transition-all duration-500"
            >
              <img
                className="rounded-full w-20 h-20 mb-4 p-4 hover:bg-white bg-[#b0e7f1]"
                src={item.image}
                alt={item}
              />
              <h3 className="text-lg font-semibold mb-2 font-serif">{item.title}</h3>
              <p className="text-sm mb-3 font-serif text-[#787878]">
                Autem vel eum iure reprehea rui in ea volutae velit...
              </p>
              <p className="text-[#2BE0f7] font-serif">Read More</p>
            </div>
          ) : (
            <div
              key={i}
              className=" md:w-50 md:h-70 rounded-3xl p-6 shadow-md bg-white hover:text-white hover:bg-gradient-to-r from-[#012038] to-[#099fbb] hover:translate-1.5 flex flex-col justify-center items-center text-center transition-all duration-500  border-b-[2px] border-[#2BE0f7]"
            >
              <img
                className="rounded-full w-20 h-20 mb-4 p-4 hover:bg-white bg-[#b0e7f1]"
                src={item.image}
                alt={item}
              />
              <h3 className="text-lg font-semibold mb-2 font-serif">{item.title}</h3>
              <p className="text-sm mb-3 font-serif text-[#787878]">
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
