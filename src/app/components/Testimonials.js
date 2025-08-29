"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    id: 2,
    name: "Peter Johns",
    role: "Head of Informatics at EBI",
    text: "Quisquam est, qui dolorem ipsum quia dolor sit amet conse aetur, adipisci velit, sed ruia non numquam eius modi temor incidunt ut labore et dolore magnam alieuam zuaerat voluta tem nostrum exercitationem",
    image: "https://html.designingmedia.com/artelligence/assets/images/testimonial-image.png",
  },
];

function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const intervalRef = useRef(null);

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // ✅ Auto scroll every 10s
  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 10000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const { name, role, text, image } = testimonials[current];

  return (
    <div className="md:px-16 lg:px-0 mx-4 py-6 md:py-10 lg:py-16 overflow-hidden">
      {/* Heading */}
      <div className="text-center">
        <p className="text-teal-400 text-[18px] md:text-lg lg:text-[20px] font-medium uppercase tracking-wide">
          Testimonials
        </p>
        <p className="text-2xl md:text-3xl lg:text-[38px] font-semibold text-[#262626] py-3 mb-3">
          Hear it From Our Clients
        </p>
      </div>

      {/* Testimonial Wrapper */}
      <div className="flex justify-center items-center mx-auto px-4 relative lg:max-w-4xl 2xl:max-w-5xl">
        
        {/* Testimonial Card */}
        <AnimatePresence mode="popLayout" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            initial={{ x: direction > 0 ? 800 : -800, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? -880 : 880, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="bg-white relative w-full p-6 md:p-10 lg:p-14 rounded-3xl shadow-lg 
                       border-b-[2px] border-teal-400 overflow-visible"
          >
            {/* Image */}
            <img
              className="hidden sm:block absolute -left-8 md:-left-14 lg:-left-16 xl:-left-20 
                         top-1/2 -translate-y-1/2 w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36"
              src={image}
              alt={name}
            />

            {/* Text */}
            <p className="text-[20px] md:text-lg lg:text-xl text-gray-600 lg:ml-12 md:ml-10 leading-relaxed">
              “{text}”
            </p>

            <p className="text-[#2BE0f7] my-4 text-lg lg:ml-12 md:ml-10">
              {name}
            </p>
            <p className="text-lg text-gray-600 lg:ml-12 md:ml-10">{role}</p>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows - FIXED, not moving with card */}
        <div className="absolute inset-y-0 -right-4 flex items-center flex-col justify-center gap-6 z-20">
          <button
            onClick={() => {
              prevSlide();
              startAutoSlide();
            }}
            className="p-2 rounded-full bg-teal-400 hover:bg-teal-600 transition"
          >
            <ChevronLeft className="w-8 h-8 lg:w-9 lg:h-9 text-white" />
          </button>
          <button
            onClick={() => {
              nextSlide();
              startAutoSlide();
            }}
            className="p-2 rounded-full bg-teal-400 hover:bg-teal-600 transition"
          >
            <ChevronRight className="w-8 h-8 lg:w-9 lg:h-9  text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;


