import AboutBanner from "../components/AboutBanner"
import ChooseUs from "../components/ChooseUs"
import Faq from "../components/Faq"
import Services from "./components/Services"

function page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-white to-emerald-100">
        <AboutBanner
        text= "Services"
        about="Our Services"
        details="Ruis autem vel eum iure reprehenderit aui in ea voluptate velit esse
          ruam nihil molestiae conseuatur."
        img="https://html.designingmedia.com/artelligence/assets/images/sub-bannerimage.png"
        />
        <Services/>
        <ChooseUs/>
        <Faq/>
    </div>
  )
}

export default page