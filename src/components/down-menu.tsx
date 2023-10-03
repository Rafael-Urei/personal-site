import { MenuProps } from "@/types/menu-types";
import { ReactNode } from "react";
import { styled } from "styled-components";

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  background-color: #000;
  width: 100%;
  height: 65px;
  position: fixed;
  bottom: 0;

  div {
    display: flex;
    flex-direction: column;
    gap: 6px;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: transparent;
      border: none;
      color: #fff;
    }

    p {
      font-size: 0.7rem;
      color: #fff;
    }
  }
`;

export function DownMenu({ children }: MenuProps) {
  return <Menu>{children}</Menu>;
}
