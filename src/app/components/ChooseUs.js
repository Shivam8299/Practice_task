

function ChooseUs() {
  return (
    <div className="flex flex-col md:flex-row gap-10">
        <div className="w-full max-h-screen md:w-1/2  px-3 md:px-6">
            <img className="relative lg:bottom-25" src="https://html.designingmedia.com/artelligence/assets/images/choose-image.png"/>
        </div>
        <div className=" px-3 md:px-6 w-full md:max-w-1/3">
            <p className="text-lg text-center md:text-start mb-4 md:text-medium md:font-medium text-[#2BE0f7]">Why Choose Us</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-center md:text-start font-bold leading-snug mb-4">
          Get Closer Look How Business Develop in AI Data Analysis
        </h2>
        <p className="text-gray-600 mb-6">
            Consectetur adipiscing elit sed do eiusmod tempor in labore et dolore magna aliqua ruis ipsum suspendisse ultrices gravida sit amet.
        </p>
        <div>
            <div className="flex gap-2 items-center mb-2">
                <span className="ml-4 flex items-center justify-center pb-1 w-9 h-9 rounded-full  bg-white text-2xl text-gray-600">&gt;</span>
            <p className="text-sm font-medium text-gray-600"> Quis autem vel eum iure reprehenderit aui</p>
            </div>
            <div className="flex gap-2 items-center mb-2">
                <span className="ml-4 flex items-center justify-center pb-1 w-9 h-9 rounded-full  bg-white text-2xl text-gray-600">&gt;</span>
            <p className="text-sm font-medium text-gray-600"> Quis autem vel eum iure reprehenderit aui</p>
            </div>
            <div className="flex gap-2 items-center mb-2">
                <span className="ml-4 flex items-center justify-center pb-1 w-9 h-9 rounded-full  bg-white text-2xl text-gray-600">&gt;</span>
            <p className="text-sm font-medium text-gray-600"> Quis autem vel eum iure reprehenderit aui</p>
            </div>
            <button className="relative flex items-center justify-between px-6 py-3 rounded-full rounded-bl-none bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white shadow-lg mt-8 mx-auto md:mx-0">
          <span>Read More</span>
          <span className="ml-4 flex items-center justify-center w-10 h-10 rounded-full bg-white text-2xl text-gray-600">
            &gt;
          </span>
        </button>
        </div>
        </div>

    </div>
  )
}

export default ChooseUs