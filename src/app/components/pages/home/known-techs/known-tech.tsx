import { getRelativeTimeString } from "@/app/utils/get-relative-time";
import { ReactNode } from "react";
import "./knownTechs.sass";

type KnownTechProps = {
  tech: {
    icon: ReactNode;
    name: string;
    startDate: string;
  };
};

export const KnownTech = ({ tech }: KnownTechProps) => {
  const relativeTime = getRelativeTimeString(
    new Date(tech.startDate),
    "pt-BR"
  ).replace("há ", "");
  return (
    <div className="container-path">
      <div className="teste">
        <p className="font-medium">{tech.name}</p>
        {tech.icon}
      </div>
      <span className="relativeTime">{relativeTime} de experiência</span>
    </div>
  );
};
