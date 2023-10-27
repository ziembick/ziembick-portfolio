import { TechBadge } from "@/app/components/tech-badge";
import Image from "next/image";
import "./projectCard.sass";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import { SectionTitle } from "@/app/components/section-title";

export const ProjectCard = () => {
  return (
    <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
      <Image
        width={420}
        height={304}
        src="/images/bookwise.jpg"
        alt="Imagem"
        className="image-class lg:min-h-full object-cover rounded-lg w-full h-[200px] sm:h-[300px] lg:w-[450px]"
      />
      <div className="main-content">
        <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
          <Image
            width={20}
            height={20}
            alt=""
            src="/images/icons/project-title-icon.svg"
          />
          Bookwise
        </h3>
        <p className="text-gray-400 my-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo mollitia
          rem temporibus tempore distinctio adipisci! At ad qui fugiat.
          Aspernatur hic eum iusto nesciunt mollitia aut adipisci a reiciendis
          iste!
        </p>
        <div className="tech-badge flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
        </div>
      </div>
    </div>
  );
};
