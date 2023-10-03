"use client";

import Image from "next/image";
import Link from "next/link";
import "./header.sass";
import { NavItem } from "./nav-item";

const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projetos",
    href: "/projects",
  },
  {
    label: "Sobre",
    href: "/about",
  },
  {
    label: "Experiência",
    href: "/experience",
  },
  {
    label: "Resume",
    href: "/resume",
  },
  {
    label: "Contato",
    href: "/contato",
  },
];

export const Header = () => {
  return (
    <header className="header-container">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image
            width={58}
            height={49}
            src="/images/logo.svg"
            alt="Ziembick Logo"
          />
        </Link>
        <nav>
          {NAV_ITEMS.map((item) => (
            <NavItem {...item} key={item.label} />
          ))}
        </nav>
      </div>
    </header>
  );
};
