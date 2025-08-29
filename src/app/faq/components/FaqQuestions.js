"use client";
const faqs = [
  {
    question: "Modi tempora incidunt ut labore et dolore magnam aliquam?",
    answer:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet voluta repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus maiores alias consequatur aut perferendis doloribus asperiores repellat",
  },
  {
    question: "Duis aute irure dolor in reprehenderit in voluptate velit esse?",
    answer:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet voluta repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus maiores alias consequatur aut perferendis doloribus asperiores repellat",
  },
  {
    question: "Porro quisquam est qui dolorem ipsum quia dolor sit amet?",
    answer:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet voluta repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus maiores alias consequatur aut perferendis doloribus asperiores repellat",
  },
  {
    question: "Consequatur aut perferendis doloribus asperiores repellat?",
    answer:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet voluta repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus maiores alias consequatur aut perferendis doloribus asperiores repellat",
  },
  {
    question: "Autem vel eum iure reprehenderit qui in ea voluptate velit?",
    answer:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet voluta repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus maiores alias consequatur aut perferendis doloribus asperiores repellat",
  },
];

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function FaqQuestions() {
   const [openIndexes, setOpenIndexes] = useState([]);

  const toggleFAQ = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };
  return (
    <div className="w-full flex flex-col items-center justify-center px-4 my-6 lg:my-16">
      <p className="text-lg lg:text-xl uppercase text-center lg:text-start mb-4 md:text-medium md:font-medium text-teal-400 font-serif">
          faq,s
        </p>
        <p className="text-2xl md:text-3xl lg:text-[38px] xl:text-[42px] xl:font-extrabold text-center lg:text-start font-bold leading-snug mb-6  lg:mb-10 font-serif">
          Frequently Asked Questions
        </p>
      <div className="w-full  lg:max-w-[700px] xl:max-w-[800px] 2xl:max-w-[1000px]">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white mb-6 shadow-md rounded-2xl p-4 w-full"
          >
            {/* Question */}
            <div className="flex items-center justify-between">
              <h2 className=" text-base lg:text-[20px] font-medium  md:font-semibold py-2">{faq.question}</h2>
              <button
                onClick={() => toggleFAQ(index)}
                className="w-8 h-8 md:w-11 md:h-11 ml-4 sm:ml-2 rounded-full bg-teal-400 flex items-center justify-center text-white shadow-md"
              >
                {openIndexes.includes(index) ? (
                  <Minus className="h-5 w-5 m-2" />
                ) : (
                  <Plus className="h-5 w-5 m-2" />
                )}
              </button>
            </div>

            {/* Answer */}
            <AnimatePresence>
              {openIndexes.includes(index) && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-500 text-sm sm:text-base lg:text-[20px] mt-4 border-l-2 border-cyan-400 pl-2">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FaqQuestions;
