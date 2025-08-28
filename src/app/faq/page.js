"use client";
import AboutBanner from "../components/AboutBanner";
import ChooseUs from "../components/ChooseUs";
import Testimonials from "../components/Testimonials";
import FaqQuestions from "./components/FaqQuestions";
function page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-white to-emerald-100">
      <AboutBanner
        page="true"
        text="Pages"
        text3="Faq's"
        about="FAQ'S"
        details="Ruis autem vel eum iure reprehenderit aui in ea voluptate velit esse
                            ruam nihil molestiae conseuatur."
        img="https://html.designingmedia.com/artelligence/assets/images/sub-bannerimage.png"
      />
      <FaqQuestions/>
      <ChooseUs/>
      <div className=" my-6 lg:mt-25">
        <Testimonials/>
      </div>
    </div>
  );
}

export default page;
