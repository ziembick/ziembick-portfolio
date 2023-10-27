import { About } from "./components/pages/home/about";
import { HeroSection } from "./components/pages/home/hero-section";
import { HighLightedProjects } from "./components/pages/home/highlighlighted-projects";
import { ProjectCard } from "./components/pages/home/highlighlighted-projects/project-card";
import { KnownTechs } from "./components/pages/home/known-techs";
import { WorkExperience } from "./components/pages/home/work-experience";


export default async function Home() {
  return (
    <>
    <HeroSection />
    <About />
    <KnownTechs />
    <WorkExperience />
    <HighLightedProjects />
    </>
  )
}
