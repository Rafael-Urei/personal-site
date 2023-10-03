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
import {
  Contact,
  FileSearch,
  FolderGit2,
  HomeIcon,
  Instagram,
  Linkedin,
  MenuIcon,
  Puzzle,
} from "lucide-react";

export default function Home() {
  return (
    <>
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
          <button type="button">
            <Instagram />
          </button>
          <p>Instagram</p>
        </div>
        <div>
          <button type="button">
            <HomeIcon />
          </button>
          <p>Início</p>
        </div>
        <div>
          <button type="button">
            <Linkedin />
          </button>
          <p>Linkedin</p>
        </div>
      </DownMenu>
    </>
  );
}
