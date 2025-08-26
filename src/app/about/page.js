import About from "../components/About"
import AboutBanner from "../components/AboutBanner"
import AboutStats from "../components/AboutStats"
import Faq from "../components/Faq"


function page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-white to-emerald-100  ">
        <AboutBanner/>
        <About/>
        <AboutStats/>
        <Faq/>
    </div>
  )
}

export default page
