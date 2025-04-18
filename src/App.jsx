import LogoShowcase from "./sections/LogoShowcase"
import NavBar from "./components/NavBar"
import Hero from "./sections/Hero"
import Showcase from "./sections/Showcase"
import FeatureCards from "./sections/FeatureCards"
import Experience from "./sections/Experience"

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Showcase />
      <LogoShowcase />
      <FeatureCards />
      <Experience />
    </>
  )
}

export default App