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

        <div>
          <h4>Todos os Projetos</h4>
          <div>
            <button>Projetos</button>
            <div className="cube-container">
              <div className="cube">
                <div className="face front">
                  <img src="/images/html-cube.svg" alt="Cube Html" />
                </div>
                <div className="face back">
                  <img src="/images/css.svg" alt="Cube Css" />
                </div>
                <div className="face right">
                  <img src="/images/javascript.svg" alt="Cube JS" />
                </div>
                <div className="face left">
                  <img src="/images/react.svg" alt="Cube React" />
                </div>
                <div className="face top">
                  <img src="/images/typescript.svg" alt="Cube React" />
                </div>
                <div className="face bottom">
                  <img src="/images/next-js.svg" alt="Cube React" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
