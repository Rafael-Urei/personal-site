"use client";

import styled from "styled-components";
import { Nav } from "./nav";
import Link from "next/link";
import { Gabriela, Saira_Stencil_One } from "next/font/google";
import { MenuIcon } from "lucide-react";

const gabriela = Gabriela({ weight: "400", subsets: ["latin"] });

const Tagheader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--background-color);
  padding: 25px 280px;
  margin-bottom: 34px;

  @media (max-width: 1300px) {
    padding: 30px 20px;
    margin: 0;

    a,
    div {
      display: none;
    }
  }
`;

const Logo = styled.a`
  height: 30px;
  width: 100px;
  font-weight: 600;
  font-size: 30px;
  color: var(--important-text-color);
  text-align: center;
`;

const Buttons = styled.div`
  width: 150px;
  display: flex;
  gap: 24px;

  > button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--button-color);
    height: 34px;
    width: 100px;
    padding: 5px 14px;
    border: none;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 700;
    text-align: center;
    cursor: pointer;
    transition: 300ms ease-in-out;

    a {
      text-decoration: none;
      color: #fff;
      transition: 300ms ease-in-out;
    }

    &:hover {
      background-color: #fff;
      a {
        color: var(--background-color);
      }
    }
  }
`;

const Menu = styled.button`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  color: aliceblue;
  border: none;
  outline: none;
  position: absolute;
`;

export function Header() {
  return (
    <Tagheader id="inicio">
      <Menu>
        <MenuIcon />
      </Menu>
      <Logo className={gabriela.className}>Rafael</Logo>
      <Nav></Nav>
      <Buttons>
        <button type="button">
          <Link href="https://github.com/Rafael-Urei" target="_blank">
            Github
          </Link>
        </button>
        <button type="button">
          <Link
            href="https://www.linkedin.com/in/rafael-souza-390513275/"
            target="_blank"
          >
            Linkedin
          </Link>
        </button>
      </Buttons>
    </Tagheader>
  );
}
