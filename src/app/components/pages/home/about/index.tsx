import Image from "next/image";
import { HiPaperAirplane, HiArrowNarrowRight } from "react-icons/hi";
import { cn } from "@/app/lib/utils";
import "./about.sass";
import { Button } from "@/app/components/button";
import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandWhatsapp,
} from "react-icons/tb";

const MOCK_CONTACTS = [
  {
    url: "https://github.com.br/ziembick",
    icon: <TbBrandGithub />,
  },
  {
    url: "https://www.linkedin.com/in/paulo-ziembick-482971115/",
    icon: <TbBrandLinkedin />,
  },
  {
    url: "https://youtube.com.br",
    icon: <TbBrandWhatsapp />,
  },
];

export const About = () => {
  return (
    <section className="sectionAbout">
      <section>
        <Image
          width={320}
          height={320}
          src="/images/about.svg"
          alt="About img"
        />
        <div className="abountContent">
          <div className="container aboutDescription">
            <h2>Deixe-me apresentar</h2>
            <p>
              Sou um desenvolvedor front-end apaixonado por projetar e
              codificar. Minha especialidade é a criação de interfaces e
              funcionalidades para aplicativos da web usando React.js e Next.js.
              <br />
              Você pode conhecer mais sobre o meu perfil e o meu trabalho
              navegando pelo website.
            </p>
          </div>
          <div className="text-2xl text-gray-600 flex items-center h-20 gap-3 contacts">
            {MOCK_CONTACTS.map((contact, index) => (
              <a
                href={contact.url}
                key={`contact-${index}`}
                target="_blank"
                className="hover:text-gray-100 transition-colors"
              >
                {contact.icon}
              </a>
            ))}
          </div>

          <div className="aboutButton">
            <a href="/contact" className="w-max shadow-button">
              <Button>
                Entre em contato <HiPaperAirplane size={15} />
              </Button>
            </a>

            <a href="/about">
              <button
                className={cn(
                  "py-3 px-4 rounded-lg text-gray-50 flex items-center justify-center gap-2 hover:bg-emerald-500 transition-all disabled:opacity-50"
                )}
              >
                Ler mais <HiArrowNarrowRight size={15} />
              </button>
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};
