"use client";

import "./knownTechs.sass";
import { SectionTitle } from "@/app/components/section-title";
import { KnownTech } from "./known-tech";
import { TbBrandNextjs } from "react-icons/tb";

export const KnownTechs = () => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="competências" title="Habilidades" />
      <div className="brandContainer">
        {Array.from({ length: 8 }).map((_, index) => (
          <KnownTech
            key={index}
            tech={{
              icon: <TbBrandNextjs />,
              name: "Next.js",
              startDate: "2021-01-01",
            }}
          />
        ))}
      </div>
    </section>
  );
};
