"use client";

function Services() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-10 bg-cyan-50 my-12 px-4 lg:px-16 py-12">
      {/* LEFT SECTION */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-center md:text-left">
        <p className="text-[#2BE0f7] text-lg lg:text-xl mb-2">SERVICES WE PROVIDE</p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug mb-4">
          Our Purpose is To Deliver Excellence in Service and Execution
        </h2>
        <p className="text-gray-600 mb-6">
          Repellendus autem ruibusdam et aut officiis debitis aut re
          necessitatibus saepe eveniet ut et voluptates repudianda sint et
          molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
          delectus.
        </p>
       <button className="relative flex items-center justify-between px-6 py-3 rounded-full rounded-bl-none bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white shadow-lg mt-8 mx-auto md:mx-0">
          <span>Read More</span>
          <span className="ml-4 flex items-center justify-center w-10 h-10 rounded-full bg-white text-2xl text-gray-600">
            &gt;
          </span>
        </button>
      </div>

      {/* RIGHT SECTION - CARDS */}
      <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {["Robotic Automation", "Machine Learning", "Education & Science", "Predictive Analysis"].map(
          (title, i) => (
            <div
              key={i}
              className="rounded-3xl p-6 shadow-md bg-white hover:text-white hover:bg-gradient-to-r from-[#012038] to-[#099fbb] hover:translate-1.5  flex flex-col justify-center items-center text-center transition-all duration-500"
            >
              <img
                className="rounded-full w-20 h-20 mb-4 p-4 bg-white"
                src="https://html.designingmedia.com/artelligence/assets/images/service-reboticon.png"
                alt={title}
              />
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-sm mb-3">Autem vel eum iure reprehea rui in ea volutae velit...</p>
              <p className="text-[#2BE0f7]">Read More</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Services;
