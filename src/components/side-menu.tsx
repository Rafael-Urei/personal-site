"use client";

import { useSideMenu } from "@/contexts/side-menu-context";
import { X } from "lucide-react";
import Link from "next/link";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: var(--paper-color);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  transition: 300ms ease-in-out;
  box-shadow: 1px 30px 30px var(--background-color);
  overflow: hidden;
  color: var(--important-text-color);

  h1 {
    padding: 30px;
  }

  ul {
    font-weight: 500;
    display: flex;
    flex-direction: column;
    list-style: none;
    padding-left: 40px;
    gap: 20px;

    li > a {
      color: var(--important-text-color);
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    position: absolute;
    top: 10px;
    right: 10px;
    color: #fff;
  }
`;

export function SideMenu() {
  const { isOpen, toggleSideMenu } = useSideMenu();
  return (
    <Container className={isOpen ? "open-menu" : "close-menu"}>
      <h1>Menu</h1>
      <ul>
        <li>
          <Link href="#sobre">Sobre</Link>
        </li>
        <li>
          <Link href="#skills">Skills</Link>
        </li>
        <li>
          <Link href="#projetos">Projetos</Link>
        </li>
        <li>
          <Link href="#contatos">Contatos</Link>
        </li>
      </ul>
      <button onClick={toggleSideMenu}>
        <X></X>
      </button>
    </Container>
  );
}
