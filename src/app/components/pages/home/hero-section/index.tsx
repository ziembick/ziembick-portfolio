"use client";

import Image from "next/image";
import Typewriter from "typewriter-effect";
import "./hero.sass";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Span } from "@/app/components/span";

export const HeroSection = () => {
  return (
    <section className="section-container">
      <div className="hero-section-container">
        <div className="container hero-section">
          <p>Olá, meu nome é</p>
          <h1>Paulo Ziembick</h1>
          <h2>
            <Typewriter
              options={{
                strings: ["Front-end Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <button>
            <a href="#" className="btn2">
              <Span className="spn2">Conheça meu portfolio  <HiArrowNarrowRight size={18} style={{marginLeft: '10px'}}/></Span>
            </a>
          </button>
        </div>
        <div className="image-container">
          <Image
            width={512}
            height={512}
            src="/images/01.png"
            alt="Hero section Img"
          />
        </div>
      </div>
    </section>
  );
};
