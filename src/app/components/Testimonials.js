"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Peter Johns",
    role: "Head of Informatics at EBI",
    text: "Quisquam est, qui dolorem ipsum quia dolor sit amet conse aetur, adipisci velit, sed ruia non numquam eius modi temor incidunt ut labore et dolore magnam alieuam zuaerat voluta tem nostrum exercitationem",
    image: "https://html.designingmedia.com/artelligence/assets/images/testimonial-image.png",
  },
  {
    id: 1,
    name: "Peter Johns",
    role: "Head of Informatics at EBI",
    text: "Quisquam est, qui dolorem ipsum quia dolor sit amet conse aetur, adipisci velit, sed ruia non numquam eius modi temor incidunt ut labore et dolore magnam alieuam zuaerat voluta tem nostrum exercitationem",
    image: "https://html.designingmedia.com/artelligence/assets/images/testimonial-image.png",
  },
];

function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  const prevSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      setFade(true);
    }, 500);
  };

  const nextSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      setFade(true);
    }, 500);
  };

  // ✅ Auto scroll sirf ek bar jab page load ho
  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 2000); // 2s ke baad ek bar slide hoga

    return () => clearTimeout(timer);
  }, []);

  const { name, role, text, image } = testimonials[current];

  return (
    <div className="bg-[#EAFCFE] mx-4 py-6 md:py-10 lg:py-14">
      {/* Heading */}
      <div className="text-center">
        <p className="text-[#2BE0f7] text-sm md:text-lg font-medium uppercase tracking-wide">
          Testimonials
        </p>
        <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#262626] py-3 mb-3">
          Hear it From Our Clients
        </p>
      </div>

      {/* Testimonial Card */}
      <div className="flex justify-center items-center mx-auto px-6 relative max-w-4xl">
        <div
          className={`bg-white relative w-full p-6 md:p-10 lg:p-14 rounded-3xl shadow-lg 
          transition-all duration-500 ease-in-out border-b-[2px] border-[#2d99a8]
          ${fade ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
        >
          {/* Image */}
          <img
            className="hidden sm:block absolute -left-8 md:-left-14 lg:-left-16 xl:-left-20 top-1/2 -translate-y-1/2 
                       w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36"
            src={image}
            alt={name}
          />

          {/* Text */}
          <p className="text-base md:text-lg lg:text-xl text-gray-600 lg:ml-12 md:ml-10 font-serif leading-relaxed">
            “{text}”
          </p>

          <p className="text-[#2BE0f7] my-4 text-lg font-semibold lg:ml-12 md:ml-10">
            {name}
          </p>
          <p className="text-lg text-gray-600 lg:ml-12 md:ml-10">{role}</p>

          {/* Navigation Arrows */}
          <div className="absolute inset-y-0 -right-6 flex items-center flex-col justify-center gap-6">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-[#2BE0f7]/20 hover:bg-[#2BE0f7] transition"
            >
              <ChevronLeft className="w-8 h-8 text-[#26d5ec] hover:text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-[#2BE0f7]/20 hover:bg-[#2BE0f7] transition"
            >
              <ChevronRight className="w-8 h-8 text-[#2BE0f7] hover:text-white" />
            </button>
          </div>
        </div>
      </div>
      {/* <div className="mt-16  flex gap-10 lg:gap-12 xl:gap-15 flex-wrap justify-center">
        <img src="https://html.designingmedia.com/artelligence/assets/images/partner1.png"/>
        <img src="https://html.designingmedia.com/artelligence/assets/images/partner2.png"/>
        <img src=" https://html.designingmedia.com/artelligence/assets/images/partner3.png"/>
        <img src="https://html.designingmedia.com/artelligence/assets/images/partner4.png"/>
        <img src="https://html.designingmedia.com/artelligence/assets/images/partner5.png"/>
      </div> */}
 

<div className="mt-26 flex gap-10 lg:gap-12 xl:gap-15 flex-wrap justify-center">
  <motion.img
    src="https://html.designingmedia.com/artelligence/assets/images/partner1.png"
    initial={{ y: 40, opacity: 0 }}
    animate={{ y: -40, opacity: 1 }}
    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
  />
  <motion.img
    src="https://html.designingmedia.com/artelligence/assets/images/partner2.png"
    initial={{ y: 40, opacity: 0 }}
    animate={{ y: -40, opacity: 1 }}
    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: 0.3 }}
  />
  <motion.img
    src="https://html.designingmedia.com/artelligence/assets/images/partner3.png"
    initial={{ y: 40, opacity: 0 }}
    animate={{ y: -40, opacity: 1 }}
    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: 0.6 }}
  />
  <motion.img
    src="https://html.designingmedia.com/artelligence/assets/images/partner4.png"
    initial={{ y: 40, opacity: 0 }}
    animate={{ y: -40, opacity: 1 }}
    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: 0.9 }}
  />
  <motion.img
    src="https://html.designingmedia.com/artelligence/assets/images/partner5.png"
    initial={{ y: 40, opacity: 0 }}
    animate={{ y: -40, opacity: 1 }}
    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: 1.2 }}
  />
</div>

    </div>
  );
}

export default Testimonials;

