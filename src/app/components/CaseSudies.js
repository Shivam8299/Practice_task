"use client";

import { motion } from "framer-motion";
import Buttion from "./Buttion";
import { FiChevronRight } from "react-icons/fi";

function CaseStudies() {
  const data = [
    {
      title: "Robot Technology",
      description: "Officia deserunt mollitia animi nobis",
      image:
        "https://html.designingmedia.com/artelligence/assets/images/case-image1.png",
    },
    {
      title: "User Research",
      description: "Eum iure reprehenderit velit esse",
      image:
        "https://html.designingmedia.com/artelligence/assets/images/case-image2.png",
    },
    {
      title: "Machine Learning",
      description: "Duis aute iure dolor in reprehenderit",
      image:
        "https://html.designingmedia.com/artelligence/assets/images/case-image3.png",
    },
    {
      title: "Data Science",
      description: "Numquam eius modi tema incidunt labore",
      image:
        "https://html.designingmedia.com/artelligence/assets/images/case-image4.png",
    },
    {
      title: "Artificial Intelligence",
      description: "Molestiae non recusandae delectus",
      image:
        "https://html.designingmedia.com/artelligence/assets/images/case-image5.png",
    },
    {
      title: "BI Execution",
      description: "Exercitation ullamco laboris nisa",
      image:
        "https://html.designingmedia.com/artelligence/assets/images/case-image6.png",
    },
  ];

  // Variants for animation
  const cardVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2, // stagger effect
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="px-4 md:px-8 lg:px-16 py-10 lg:py-20 xl:py-25 bg-white ">
      <p className="text-[#2BE0f7] text-[18px] md:text-[20px] font-medium text-center uppercase tracking-wide">
        Case Study
      </p>
      <p className="text-2xl md:text-3xl lg:text-[38px] font-semibold lg:font-bold text-[#262626] text-center py-3">
        Explore Our Case Studies
      </p>

      {/* case study Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 lg:px-10 xl:px-16 px-5">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="relative h-80 lg:h-85 w-auto rounded-2xl shadow-lg overflow-hidden group transition-transform duration-300 hover:-translate-y-2"
            style={{ backgroundImage: `url(${item.image})` }}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300"></div>

            {/* Content */}
            <div className="absolute bottom-0 p-4 text-white z-10">
              <button className="text-xs md:text-sm font-semibold px-3 py-1 bg-gradient-to-r from-gray-500 to-gray-700 rounded-lg">
                {item.title}
              </button>
              <p className="mt-3 text-[20px] md:text-lg font-semibold leading-snug">
                {item.description}
              </p>

              {/* Arrow Button */}
              <span className="mt-4 flex items-center justify-center w-9 h-9 rounded-full bg-white text-xl text-gray-700 ">
                <FiChevronRight />
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-10">
        <Buttion text={"View All"} />
      </div>
    </div>
  );
}

export default CaseStudies;
