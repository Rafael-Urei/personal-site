"use client";

import { AboutSection } from "@/components/about-section";
import styles from "./page.module.css";
import { SkillsSection } from "@/components/skills-section";
import { Projects } from "@/components/projects";
import { ArtsSection } from "@/components/arts-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <AboutSection />
        <SkillsSection />
        <Projects />
        <ArtsSection />
      </main>
      <Footer></Footer>
    </>
  );
}
