"use client";

import { FaMicrochip } from "react-icons/fa6";
import { FaRegSmileBeam } from "react-icons/fa";
import { MdOutlineMonitor } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";

export default function AboutStats() {
  const stats = [
    {
      id: 1,
      image : "https://html.designingmedia.com/artelligence/assets/images/counter-image1.png",
      value: "398+",
      label: "Completed Projects",
    },
    {
      id: 2,
      image:"https://html.designingmedia.com/artelligence/assets/images/counter-image2.png",
      value: "120+",
      label: "Satisfied Clients",
    },
    {
      id: 3,
      image:"https://html.designingmedia.com/artelligence/assets/images/counter-image3.png",
      value: "86%",
      label: "Website Analysis",
    },
    {
      id: 4,
      image:"https://html.designingmedia.com/artelligence/assets/images/counter-image4.png",
      value: "240+",
      label: "Support Done",
    },
  ];

  return (
    <div className="py-12 px-3 mt-8 max-w-[1600px] m-auto ">
      <div className="grid grid-cols-2  md:grid-cols-4 gap-4 lg:gap-6 max-w-6xl mx-auto mb-8">
        {stats.map((item) => (
          <div
            key={item.id}
            className="bg-white border-b-[2px] border-teal-600 hover:-translate-y-2 rounded-3xl shadow-md lg:p-8 px-2 py-4 md:px-4 md:py-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
          >
            <img
                className="rounded-full w-24 h-24 mb-4 p-4 hover:bg-white bg-teal-400"
                src={item.image}
                alt={item}
              />
            <h3 className="text-[24px] md:text-3xl font-bold text-gray-900">{item.value}</h3>
            <p className="text-gray-600 mt-1 md:mt-2 text-[14px] md:text-lg">{item.label}</p>
          </div>
        ))}
      </div>
      <div className=" w-full py-12 flex justify-center">
        <img  src="https://html.designingmedia.com/artelligence/assets/images/image-vediosession.png" />
      </div>
    </div>
  );
}
