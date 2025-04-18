import LogoShowcase from "./sections/LogoShowcase"
import NavBar from "./components/NavBar"
import Hero from "./sections/Hero"
import Showcase from "./sections/Showcase"
import FeatureCards from "./sections/FeatureCards"
import Experience from "./sections/Experience"
import TechStack from "./sections/TechStack"
import Testimonials from "./sections/Testimonials"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Showcase />
      <LogoShowcase />
      <FeatureCards />
      <Experience />
      <TechStack />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App