import About from "../components/About";
import AboutBanner from "../components/AboutBanner";
import AboutStats from "../components/AboutStats";
import Faq from "../components/Faq";

function page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-white to-emerald-100">
      <AboutBanner
        text = "About"
        about="About Us"
        details="Ruis autem vel eum iure reprehenderit aui in ea voluptate velit esse
          ruam nihil molestiae conseuatur."
        img="https://html.designingmedia.com/artelligence/assets/images/sub-bannerimage.png"
      />
      <About />
      <AboutStats />
      <Faq />
    </div>
  );
}

export default page;
