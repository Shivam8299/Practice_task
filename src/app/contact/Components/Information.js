"use client";

const cards = [
  {
    id: 1,
    title: "Location:",
    text: "121 King Street, Melbourne Victoria 3000 Australia",
    icon: "https://html.designingmedia.com/artelligence/assets/images/contact-location.png",
  },
  {
    id: 2,
    title: "Phone:",
    text: `(+61 3 8376 6284-(+800 2345 6789`,
    icon: "https://html.designingmedia.com/artelligence/assets/images/contact-phone.png",
  },
  {
    id: 3,
    title: "Education & Science",
    text: "info@artelligence.com artelligence@gmail.com",
    icon: "https://html.designingmedia.com/artelligence/assets/images/contact-email.png",
  },
];
import { useState } from "react";
import { motion } from "framer-motion";
import Buttion from "@/app/components/Buttion";
function Information() {
  const [hovered, setHovered] = useState(null);
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-12 px-2 md:px-6 lg:px-20 pb-10 ">
      <div className=" w-full lg:max-w-[40%]">
        <p className="text-[#2BE0f7] text-lg lg:text-2xl mb-2 text-center lg:text-start">
          our details
        </p>
        <h2 className="text-2xl md:text-[42px]  text-[#262626] font-bold leading-snug mb-4 ">
          Contact Information
        </h2>
        {cards.map((card) => (
          <motion.div
            key={card.id}
            onMouseEnter={() => setHovered(card.id)}
            onMouseLeave={() => setHovered(null)}
            className="flex flex-row my-10 items-center  gap-4 md:gap-6 border-r-[2px] border-cyan-600 rounded-2xl p-2 sm:p-4 md:p-6 shadow-sm bg-gradient-to-bl from-teal-50 to-bg-white "
          >
            <div
              className={`flex items-center justify-center w-26 h-26 rounded-full bg-cyan-800 shrink-0 hover:transition-all hover:-translate-y-2 duration-300`}
            >
              <img className=" p-4" src={card.icon} />
            </div>
            <div>
              <h3 className={`font-bold text-xl mb-2 text-gray-900`}>
                {card.title}
              </h3>
              <p className={`mb-3 text-base sm:text-[18px] text-[#787878] `}>
            
                {(card.id === 2) ? (card.text.split("-").map((part, index) => (
                <p className="mb-1" key={index}>{part})</p>))) : card.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-6 relative z-10 w-full lg:w-1/2 flex flex-col items-center bg-white rounded-3xl border-b-[2px] border-[#2BE0f7]">
        <p className="text-2xl pt-10 md:text-3xl text-center md:text-start font-bold leading-snug mb-2 font-serif">
          Need any Help!
        </p>
        <p className="text-gray-500 mt-4 text-lg border-cyan-400 pl-4 mb-4">
          Eiusmod tempor in labore et dolore magna aliqua ruis ultrices gravida
          sit amet.
        </p>
        <form className="w-full px-2 md:px-4 lg:px-8">
          <input
            className="p-3 outline-none border border-cyan-200 rounded-xl w-full mb-4"
            placeholder="Your name:"
          />
          <input
            className="p-3 outline-none border border-cyan-200 rounded-xl w-full mb-4"
            placeholder="Email:"
          />
          <input
            className="p-3 outline-none border border-cyan-200 rounded-xl w-full mb-4"
            placeholder="Phone:"
          />
          <textarea
            className="p-3 outline-none border border-cyan-200 rounded-xl w-full mb-4"
            rows="5"
            placeholder="Message"
          ></textarea>
        </form>
        <div className="mb-8">
          <Buttion text="Submit Now" />
        </div>
      </div>
      <div>
        <img
          className=" hidden absolute lg:block lg:right-24 "
          src="https://html.designingmedia.com/artelligence/assets/images/faq-image.png"
        />
      </div>
    </div>
  );
}

export default Information;
