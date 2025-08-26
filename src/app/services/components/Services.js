"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const cards = [
    {
      id: 1,
      title: "Robotic Automation",
      text: "Quis autem vel eum iure reprehenderit rui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum rui.",
      icon: "https://html.designingmedia.com/artelligence/assets/images/service-reboticon.png"
    },
    {
      id: 2,
      title: "Machine learning",
      text: "Suir autem vel eum iure reprehenderit rui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum rui.",
      icon: "https://html.designingmedia.com/artelligence/assets/images/service-learningicon.png"
    },
    {
      id: 3,
      title: "Education & Science",
      text: "Tuis autem vel eum iure reprehenderit rui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum rui.",
      icon: "https://html.designingmedia.com/artelligence/assets/images/service-scienceicon.png"
    },
    {
      id: 4,
      title: "Predictive Analysis",
      text: "Muis autem vel eum iure reprehenderit rui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum rui.",
      icon: "https://html.designingmedia.com/artelligence/assets/images/service-analysicon.png"
    },
    {
      id: 5,
      title: "Electronics & Technology",
      text: "Nuis autem vel eum iure reprehenderit rui in ea voluptate velit esse quam nihil molestia consequatur, vel illum rui.",
      icon: "https://html.designingmedia.com/artelligence/assets/images/service-technologyicon.png"
    },
     {
      id: 6,
      title: "Metal and Machining",
      text: "Guis autem vel eum iure reprehenderit rui in ea voluptate velit esse quam nihil molestia consequatur, vel illum rui.",
      icon: "https://html.designingmedia.com/artelligence/assets/images/service-metalicon.png"
    }
  ];

function Services() {
    const [hovered, setHovered] = useState(null);
  return (
    <div className="mt-10  lg:mt-24 mb-4 md:mb-8 lg:mb-36">
      <div>
        <p className="text-[#2BE0F7] uppercase text-[18px] font-serif text-center my-6">
          Services we provide
        </p>
        <p className="text-2xl md:text-3xl lg:text-[38px] xl:text-[42px] text-center mb-4 max-w-200 m-auto font-bold xl:font-extrabold">
          Our Purpose is To Deliver Excellence in Service and Execution
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 p-6 max-w-6xl mx-auto ">
      {cards.map((card) => (
        <motion.div
          key={card.id}
          onMouseEnter={() => setHovered(card.id)}
          onMouseLeave={() => setHovered(null)}
          className={`flex flex-row justify-center items-center  gap-4 md:gap-6 border-b-[2px] border-[#2BE0f7] rounded-2xl p-2 sm:p-4 md:p-6 shadow-md cursor-pointer transition-all duration-300 hover:translate-y-1.5   ${
            hovered === card.id
              ? "bg-gradient-to-r from-cyan-700 to-cyan-600 text-white"
              : "bg-white"
          }`}
        >
          <div
            className={`flex items-center justify-center w-20 h-20 rounded-full bg-cyan-100 shrink-0`}
          >
            <img className="w-40 p-4" src={card.icon}/>
          </div>
          <div>
            <h3
              className={`font-bold text-xl mb-2 ${
                hovered === card.id ? "text-white" : "text-gray-900"
              }`}
            >
              {card.title}
            </h3>
            <p
              className={`mb-3 text-sm sm:text-[16px] ${
                hovered === card.id ? "text-white/90" : "text-gray-600"
              }`}
            >
              {card.text}
            </p>
            
             <p className=" text-sm sm:text-base text-[#2BE0F7] font-serif "> READ MORE</p> 
           
          </div>
        </motion.div>
      ))}
    </div>
    </div>
  );
}

export default Services;
