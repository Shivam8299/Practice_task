"use client"; 
import Buttion from "./components/Buttion";
import ChooseUs from "./components/ChooseUs";
import Hero from "./components/Hero";
import Services from "./components/Services";
import CaseSudies from "./components/CaseSudies";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import BannerHome from "./components/BannerHome";

function Page() {
  return (
    <div className="min-h-screen max-w-[2000px] m-auto  py-4">
      <BannerHome />
      <Hero />
      <Services />
      <ChooseUs />
      <CaseSudies/>
      <Testimonials/>
      <Faq/>
    </div>
  );
}

export default Page;
