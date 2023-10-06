'use client'


import Image from "next/image";
import Typewriter from "typewriter-effect";
import "./hero.sass";

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
          <button>Conheça meu portfolio →</button>
        </div>
        <div className="image-container">
          <img src="/images/home.png" alt="home" />
        </div>
      </div>
    </section>
  );
};
