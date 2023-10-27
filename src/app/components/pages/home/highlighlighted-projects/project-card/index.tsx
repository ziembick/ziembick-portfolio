import { TechBadge } from "@/app/components/tech-badge";
import Image from "next/image";
import "./projectCard.sass";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import { SectionTitle } from "@/app/components/section-title";

export const ProjectCard = () => {
  return (
    <div className="project-card">
      <Image
        width={420}
        height={304}
        src="/images/bookwise.jpg"
        alt="Imagem"
        className="image-class"
      />
    </div>
  );
};
