import { About } from "./components/pages/home/about";
import { HeroSection } from "./components/pages/home/hero-section";
import { KnownTechs } from "./components/pages/home/known-techs";
import { WorkExperience } from "./components/pages/home/work-experience";


export default async function Home() {
  return (
    <>
    <HeroSection />
    <About />
    <KnownTechs />
    <WorkExperience />
    </>
  )
}
