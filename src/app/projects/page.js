"use client"
import AboutBanner from "../components/AboutBanner"
import CaseStudies from "../components/CaseSudies"
import Faq from "../components/Faq"
import Testimonials from "../components/Testimonials"

function page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-white to-emerald-100">
        <AboutBanner
                text="Projects"
                about="Our Projects"
                details="Ruis autem vel eum iure reprehenderit aui in ea voluptate velit esse
                  ruam nihil molestiae conseuatur."
                img="https://html.designingmedia.com/artelligence/assets/images/sub-bannerimage.png"
                />
        <CaseStudies/>
        <Testimonials/>
        <Faq/>
    </div>
  )
}

export default page