"use client"
import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { motion } from "framer-motion";
import Buttion from "./Buttion";

const faqs = [
  {
    question: "Antis unde omnis istye natus error?",
    answer:
      "Labore et dolore magna aliqua quis ipsum suspendis seultrices gravida risus commo ddolore.",
  },
  {
    question: "Sed ut perspiciatis unde omnis iste?",
    answer:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  },
  {
    question: "Why do we use it?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content.",
  },
  {
    question: "Where can I get some?",
    answer:
      "There are many variations of passages of Lorem Ipsum available.",
  },
];

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col lg:flex-row px-2 md:px-6 lg:px-16 py-4 md:py-6 lg:py-12 bg-gradient-to-br from-teal-50 to-emerald-50 gap-4 lg:gap-14">
      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="text-lg lg:text-xl uppercase text-center lg:text-start mb-4 md:text-medium md:font-medium text-[#2BE0f7] font-serif">
          faq,s
        </p>
        <p className="text-2xl md:text-3xl lg:text-[38px]  text-center lg:text-start font-bold leading-snug mb-6 lg:mb-4 font-serif">
          Frequently Asked Questions
        </p>

        <div className="w-full mx-auto lg:mr-10 ">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white mb-6 shadow-md rounded-2xl p-4 flex items-start justify-between ${
                openIndex === index
                  ? "border-b-[2px] border-[#2BE0f7]"
                  : "border-none"
              }`}
            >
              <div className="p-2 ">
                <h2 className="text-[20px] font-semibold py-2">{faq.question}</h2>
                {openIndex === index && (
                  <p className="text-gray-500  text-base mt-4 border-l-2 border-cyan-400 pl-2">
                    {faq.answer}
                  </p>
                )}
              </div>
              <button
                onClick={() => toggleFAQ(index)}
                className="w-8 h-8 md:w-11 md:h-11 rounded-full bg-gradient-to-b from-cyan-400 to-blue-900 flex items-center justify-center text-white shadow-md"
              >
                {openIndex === index ? (
                  <Minus className="h-5 w-5" />
                ) : (
                  <Plus className="h-5 w-5" />
                )}
              </button>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Contact Form */}
      <div className="mt-6 relative z-10 w-full lg:w-1/2 flex flex-col items-center bg-white rounded-3xl border-b-[2px] border-[#2BE0f7]">
        <p className="text-2xl pt-10 md:text-3xl text-center md:text-start font-bold leading-snug mb-2 font-serif">
          Need any Help!
        </p>
        <p className="text-gray-500 mt-4 text-lg border-cyan-400 pl-4 mb-4">
          Eiusmod tempor in labore et dolore magna aliqua ruis ultrices gravida sit amet.
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
          <Buttion text="Submit Now"/>
        </div>
      </div>
      <div>
        <img className=" hidden absolute lg:block lg:right-24 " src="https://html.designingmedia.com/artelligence/assets/images/faq-image.png"/>
      </div>
    </div>
  );
}

export default Faq;
