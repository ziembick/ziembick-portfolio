import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";
import "./about.sass";
import { Button } from "@/app/components/button";

export const About = () => {
  return (
    <section className="sectionAbout">
      <Image width={320} height={320} src="/images/about.svg" alt="About img" />
      <div className="abountContent">
        <div className="container aboutDescription">
          <h2>Deixe-me apresentar</h2>
          <p>
            Sou um desenvolvedor front-end apaixonado por projetar e codificar.
            Minha especialidade é a criação de interfaces e funcionalidades para
            aplicativos da web usando React.js e Next.js.
            <br />
            Você pode conhecer mais sobre o meu perfil e o meu trabalho
            navegando pelo website.
          </p>
        </div>
        <div className="aboutButton">
          <a href="/contact" className="w-max shadow-button">
            <Button>Entre em contato <HiArrowNarrowRight size={15} /></Button>
          </a>
          <a href="/about">
            <button>Ler mais</button>
          </a>
        </div>
      </div>
    </section>
  );
};
