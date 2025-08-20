import Hero from "./components/Hero";
import Services from "./components/Services";

function page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-white to-emerald-100 ">
      <div className="flex flex-col md:flex-row px-8 gap-10 mb-6 ">
      <div className="lg:px-10 w-full md:w-1/2 flex justify-center items-center flex-col text-center md:text-left">
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold lg:font-extrabold leading-snug mb-4">
          Bring Force of Artificial Intelligence To Business
        </p>
        <p className="text-base sm:text-lg text-gray-700">
          Quis autem vel eum iure reprehenderit aui in ea voluptate velit esse
          ruam nihil molestiae conseuatur.
        </p>
        <div className="flex gap-4 mt-6 w-full ">
          <button className="relative flex items-center justify-between px-6 py-2 rounded-full rounded-bl-none  bg-gradient-to-r cursor-pointer from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700  text-white shadow-lg">
            <span>Read More</span>
            <span className="ml-4 flex items-center justify-center pb-1 w-11 h-11 rounded-full  bg-white text-2xl text-gray-600">
              &gt;
            </span>
          </button>
          <button className="relative flex items-center justify-between px-6 py-2 rounded-full rounded-bl-none  bg-gradient-to-r cursor-pointer from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white shadow-lg">
            <span>Contact Us</span>
            <span className="ml-4 flex items-center justify-center pb-1 w-11 h-11 rounded-full  bg-white text-2xl text-gray-600">
              &gt;
            </span>
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img
          src="https://html.designingmedia.com/artelligence/assets/images/banner-image.png"
          alt="AI Business"
          className="max-w-full h-auto"
        />
      </div>
    </div>
    <Hero/>
    <Services/>
    </div>
  );
}

export default page;
