"use client"

import React from "react";

function Hero() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 md:px-12 lg:px-20 gap-16 py-12">
      {/* Image Section */}
      <div className="relative w-full lg:w-1/2 flex justify-center">
        {/* Main Image */}
        <img
          className=" w-full rounded-2xl"
          src="https://html.designingmedia.com/artelligence/assets/images/about-image1.png"
          alt="Main about us"
        />

        {/* Overlay Image */}
        <img
          className="absolute bottom-0 right-3 lg:-bottom-18 lg:-right-14  w-32 md:w-40  rounded-2xl shadow-xl"
          src="https://html.designingmedia.com/artelligence/assets/images/about-image2.png"
          alt="Overlay"
        />
      </div>

      {/* Text Section */}
      <div className="mt-16 md:mt-0 w-full lg:w-1/2 px-2 md:px-6 text-center md:text-left">
        <p className="text-xl text-[#2BE0f7] text-center lg:text-start">ABOUT US</p>
        <p className="text-2xl md:text-3xl lg:text-4xl font-bold my-4 leading-snug">
          Empowering People By Keeping Them Well
        </p>
        <p className="text-gray-600 text-base lg:text-lg">
          Repellendus autem ruibusdam et aut officiis debitis aut re
          necessitatibus saepe eveniet ut et voluptates repudianda sint et
          molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
          delectus.
        </p>

        {/* Block 1 */}
        <div className="flex flex-col lg:flex-row mt-6 gap-4 items-center justify-between lg:items-start ">
          <img
            className="w-16 md:w-20 lg:w-24"
            src="https://html.designingmedia.com/artelligence/assets/images/about-customer.png"
            alt="Customer satisfaction"
          />
          <div>
            <p className="text-lg md:text-xl lg:text-2xl text-center lg:text-start font-semibold text-black">
              100% Customers Satisfaction
            </p>
            <p className="text-gray-600 text-base lg:text-lg">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
              sint.
            </p>
          </div>
        </div>

        {/* Block 2 */}
        <div className="flex flex-col lg:flex-row mt-6 gap-4 items-center justify-between lg:items-start">
          <img
            className="w-16 md:w-20 lg:w-24"
            src="https://html.designingmedia.com/artelligence/assets/images/about-quality.png"
            alt="Quality assurance"
          />
          <div>
            <p className="text-lg md:text-xl text-center lg:text-start lg:text-2xl font-semibold text-black">
              Quality Assurance Guarantee
            </p>
            <p className="text-gray-600 text-base lg:text-lg">
              Velit officia consequat duis enim velit mollie assu omnis dolor
              repellendus.
            </p>
          </div>
        </div>

        {/* Button */}
        <button className="relative flex items-center justify-between px-6 py-3 rounded-full rounded-bl-none bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white shadow-lg mt-8 mx-auto md:mx-0">
          <span>Read More</span>
          <span className="ml-4 flex items-center justify-center w-10 h-10 rounded-full bg-white text-2xl text-gray-600">
            &gt;
          </span>
        </button>
      </div>
    </div>
  );
}

export default Hero;
