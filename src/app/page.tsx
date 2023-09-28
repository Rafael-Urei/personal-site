"use client";

import { Sobre } from "@/components/sobre";
import styles from "./page.module.css";
import { Section } from "@/components/section";

export default function Home() {
  return (
    <main className={styles.main}>
      <Sobre></Sobre>
      <Section title="Skills"></Section>
    </main>
  );
}
