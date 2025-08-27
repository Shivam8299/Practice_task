"use client"

import AboutBanner from "../components/AboutBanner"
import Faq from "../components/Faq"
import OurTeam from "./components/OurTeam"

function page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-white to-emerald-100">
            <AboutBanner
                    page = "true"
                    text = "Pages"
                    text3="Team"
                    about="Our Team"
                    details="Ruis autem vel eum iure reprehenderit aui in ea voluptate velit esse
                      ruam nihil molestiae conseuatur."
                    img="https://html.designingmedia.com/artelligence/assets/images/sub-bannerimage.png"
                    />
                    <OurTeam/>
                    <Faq/>
        </div>
  )
}

export default page