"use client";

import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function OurTeam() {
  const data = [
    {
      title: "Joseph Carrion",
      description: "Recudia",
      image:
        "https://html.designingmedia.com/artelligence/assets/images/team-image1.png",
    },
    {
      title: "Leon Brown",
      description: "Deserunt",
      image:
        "https://html.designingmedia.com/artelligence/assets/images/team-image2.png",
    },
    {
      title: "Eric Steele",
      description: "Molestiae",
      image:
        "https://html.designingmedia.com/artelligence/assets/images/team-image3.png",
    },
    {
      title: "Byron Hanson",
      description: "Tenetur",
      image:
        "https://html.designingmedia.com/artelligence/assets/images/team-image4.png",
    },
    {
      title: "Rene Luckey",
      description: "Perferendis",
      image:
        "https://html.designingmedia.com/artelligence/assets/images/team-image5.png",
    },
    {
      title: "Lyle Meadows",
      description: "Eveniet",
      image:
        "https://html.designingmedia.com/artelligence/assets/images/team-image6.png",
    },
  ];

  // Variants for animation
  const cardVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1, 
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="px-4 md:px-8 lg:px-16 py-15 bg-white mt-4 md:mt-6  ">
      <p className="text-[#2BE0f7] text-[18px] md:text-lg font-medium text-center uppercase tracking-wide">
        Our Staff
      </p>
      <p className="text-2xl md:text-3xl lg:text-[38px] font-semibold lg:font-bold text-[#262626] text-center py-3">
        Our Team Members
      </p>

      {/* case study Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 lg:px-10 px-5">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className=" h-auto w-auto rounded-3xl shadow-lg"
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Overlay */}
            <div className="w-full">
              <img src={item.image} alt="item" className="mb-6" />
            </div>
            <p className="text-xl lg:text-2xl text-center font-semibold">
              {item.title}
            </p>
            <p className=" text-[20px] text-center md:text-lg text-gray-700">
              {item.description}{" "}
            </p>
            <div className="flex pt-2 pb-6  gap-2 justify-center">
              <FaFacebookF
                className="text-white  hover:-translate-y-2 duration-300 p-2 rounded-full transition cursor-pointer bg-cyan-800"
                size={36}
              />
              <FaTwitter
                className="text-white  hover:-translate-y-2 duration-300 p-2 rounded-full transition cursor-pointer bg-cyan-800"
                size={36}
              />
              <FaLinkedinIn
                className="text-white  hover:-translate-y-2 duration-300 p-2 rounded-full transition cursor-pointer bg-cyan-800"
                size={36}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default OurTeam;
