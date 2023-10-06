import { Header } from "./components/header";
import { About } from "./components/pages/home/about";
import { HeroSection } from "./components/pages/home/hero-section";

export default async function Home() {
  return (
    <>
    <HeroSection />
    <About />
    </>
  )
}
