import { HorizontalDivider } from "@/app/components/divider/horizontal";
import { SectionTitle } from "@/app/components/section-title";
import { ProjectCard } from "./project-card";
import "./highlight.sass";
import { Link } from "@/app/components/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import Image from "next/image";

export const HighLightedProjects = () => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="competências" title="Projetos em Destaque" />
      <HorizontalDivider />
      <div>
        <ProjectCard />
      </div>
    </section>
  );
};
