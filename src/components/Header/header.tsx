"use client";

import styled from "styled-components";
import { Nav } from "./nav";

const Tagheader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--background-color);
  padding: 25px 80px;
  margin-bottom: 34px;
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
    height: 24px;
    width: 100px;
    padding: 5px 14px;
    border: none;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 700;
    color: #000000;
    text-align: center;
    cursor: pointer;
  }
`;

export function Header() {
  return (
    <Tagheader>
      <Logo>Rafael</Logo>
      <Nav></Nav>
      <Buttons>
        <button type="button">Github</button>
        <button type="button">Linkedin</button>
      </Buttons>
    </Tagheader>
  );
}
