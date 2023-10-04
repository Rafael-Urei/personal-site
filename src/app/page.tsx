"use client";

import { AboutSection } from "@/components/about-section";
import styles from "./page.module.css";
import { SkillsSection } from "@/components/skills-section";
import { Projects } from "@/components/projects";
import { ArtsSection } from "@/components/arts-section";
import { Footer } from "@/components/footer";
import { Info } from "@/components/info-section";
import { Divider } from "@/components/divider";
import { DownMenu } from "@/components/down-menu";
import { Github, HomeIcon, Linkedin, MenuIcon } from "lucide-react";
import Link from "next/link";
import { SideMenu } from "@/components/side-menu";
import { useSideMenu } from "@/contexts/side-menu-context";

export default function Home() {
  const { toggleSideMenu } = useSideMenu();
  return (
    <>
      <SideMenu />
      <main className={styles.main}>
        <AboutSection />
        <Divider />
        <SkillsSection />
        <Divider />
        <Projects />
        <Divider />
        <ArtsSection />
        <Divider />
      </main>
      <Info />
      <Divider />
      <Footer></Footer>
      <DownMenu>
        <div>
          <button type="button" onClick={toggleSideMenu}>
            <MenuIcon />
          </button>
          <p>Menu</p>
        </div>
        <div>
          <button type="button">
            <Link href="https://github.com/Rafael-Urei" target="_blank">
              <Github />
            </Link>
          </button>
          <p>GitHub</p>
        </div>
        <div>
          <button type="button">
            <Link href="#inicio">
              <HomeIcon />
            </Link>
          </button>
          <p>Início</p>
        </div>
        <div>
          <button type="button">
            <Link
              href="https://www.linkedin.com/in/rafael-souza-390513275/"
              target="_blank"
            >
              <Linkedin />
            </Link>
          </button>
          <p>Linkedin</p>
        </div>
      </DownMenu>
    </>
  );
}
