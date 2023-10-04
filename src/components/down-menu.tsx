import { MenuProps } from "@/types/menu-types";
import { styled } from "styled-components";

const Menu = styled.div`
  display: none;
  align-items: center;
  justify-content: space-between;
  padding: 0px 50px;
  background-color: #000;
  width: 100%;
  height: 65px;
  position: fixed;
  bottom: 0;
  z-index: 2;

  @media (max-width: 1300px) {
    display: flex;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 3px;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: transparent;
      border: none;
      color: var(--important-text-color);
    }

    p {
      font-size: 0.7rem;
      color: var(--important-text-color);
      font-weight: 500;
    }

    a {
      text-decoration: none;
      color: var(--important-text-color);
    }
  }
`;

export function DownMenu({ children }: MenuProps) {
  return <Menu>{children}</Menu>;
}
