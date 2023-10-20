import { TechBadge } from "@/app/components/tech-badge";
import Image from "next/image";
import "./experience.sass";

export const ExperienceItem = () => {
  return (
    <div className="experience-container md:gap-10">
      <div className="experience">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            src="https://media.graphassets.com/Q4lS2mPkT4Kw3BHM6Ba5"
            width={40}
            height={40}
            className="rounded-full"
            alt="Logo da empresa Workwolf"
          />
        </div>
        <div className="w-[1px] h-[100px] bg-blue-800"></div>
      </div> 
      <div className="text-container container sm:text-base">
        <a
          href="https://www.linkedin.com/company/workwolf"
          target="_blank"
          className="text-gray-500 hover:text-emerald-500 transition-colors"
        >
          @ Workwolf
        </a>
        <h4 className="text-gray-400">Desenvolvedor Front-End</h4>
        <span className="text-gray-500">out 2022 0 momento (6meses) </span>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nihil
          laborum officiis veniam magnam porro.
        </p>
      </div>
    </div>
  );
};
