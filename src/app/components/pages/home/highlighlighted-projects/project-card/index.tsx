import { TechBadge } from "@/app/components/tech-badge";
import Image from "next/image";
import "./projectCard.sass";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";

export const ProjectCard = () => {
  return (
    <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
      <div className="">
        <Image
          width={420}
          height={304}
          src="/images/bookwise.jpg"
          alt="Imagem"
          className="lg:min-h-full object-cover rounded-lg"
        />
      </div>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          nulla dignissimos iure harum ullam ratione eum qui omnis culpa,
          suscipit sapiente minima quod nesciunt eius nemo ipsum sint? Earum,
          nulla!
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
          <TechBadge name="Next.JS" />
          <TechBadge name="Next.JS" />
          <TechBadge name="Next.JS" />
          <TechBadge name="Next.JS" />
          <TechBadge name="Next.JS" />

        </div>
        <Link href="/projects/book-wise" className="flex items-center gap-2 text-sm">
          Ver projeto
          <HiArrowNarrowRight size={18} />
        </Link>
      </div>
    </div>
  );
};
