import { HorizontalDivider } from "@/app/components/divider/horizontal";
import { SectionTitle } from "@/app/components/section-title";
import { ProjectCard } from "./project-card";
import "./highlight.sass";
import { Link } from "@/app/components/link";
import { HiArrowNarrowRight } from "react-icons/hi";

export const HighLightedProjects = () => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="competências" title="Projetos em Destaque" />
      <HorizontalDivider />
      <div className="project-container">
        <ProjectCard />
        <HorizontalDivider />
        <ProjectCard />
        <HorizontalDivider />   

        <p>
          <span>Se interessou?</span>
          <Link href="/projects" className="inline-flex">
            Ver todos
            <HiArrowNarrowRight size={18}/>
          </Link>
        </p>     
      </div>
    </section>
  );
};
