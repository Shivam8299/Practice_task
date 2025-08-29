"use client"
import AboutBanner from "../components/AboutBanner"
import Information from "./Components/Information"
import Map from "./Components/Map"
function page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-white to-emerald-100">
        <AboutBanner
                text="Contact"
                about="Contact Us"
                details="Ruis autem vel eum iure reprehenderit aui in ea voluptate velit esse
                  ruam nihil molestiae conseuatur."
                img="https://html.designingmedia.com/artelligence/assets/images/sub-bannerimage.png"
                />
        <Information/>
        <Map/>
    </div>
  )
}

export default page