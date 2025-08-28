"use client"
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
  }
];


import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { motion } from "framer-motion";
import Buttion from "../../components/Buttion";

function FaqQuestions() {
     const [openIndex, setOpenIndex] = useState(null);
    
      const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };
  return (
    <div className="w-full px-2 md:px-6 lg:max-w-[75%] m-auto py-10 ">
        <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="text-lg lg:text-xl uppercase text-center  mb-4 md:text-medium md:font-medium text-[#2BE0f7] font-serif">
          faq,s
        </p>
        <p className="text-2xl md:text-3xl lg:text-[38px]  text-center  font-bold leading-snug mb-6 lg:mb-8 font-serif">
          Frequently Asked Questions
        </p>

        <div className="w-full mx-auto lg:mr-10 ">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white mb-6 shadow-md rounded-2xl p-4 flex items-center justify-between ${
                openIndex === index
                  ? "border-b-[2px] border-cyan-600"
                  : "border-none"
              }`}
            >
              <div className="p-2 ">
                <h2 onClick={() => toggleFAQ(index)} className="text-[20px] text-[#262626] cursor-pointer font-semibold py-2">{faq.question}</h2>
                {openIndex === index && (
                  <p className="text-gray-500 text-base  lg:text-[18px] mt-4 border-l-2 border-cyan-400 leading-relaxed pl-2">
                    {faq.answer}
                  </p>
                )}
              </div>
              <button
                onClick={() => toggleFAQ(index)}
                className="w-8 h-8 md:w-11 md:h-11 rounded-full bg-gradient-to-b from-cyan-400 to-blue-900 flex items-center justify-center text-white shadow-md"
              >
                {openIndex === index ? (
                  <Minus className="h-5 w-5 m-3 " />
                ) : (
                  <Plus className="h-5 w-5" />
                )}
              </button>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default FaqQuestions