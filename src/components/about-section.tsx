"use client";

import { styled } from "styled-components";

const Div = styled.section`
  display: flex;
  gap: 115px;
  height: 400px;
  width: 100%;

  > picture {
    display: flex;
    flex: 1;
    background-color: var(--paper-color);
    border-radius: 20px;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 520px;

    h2 {
      font-size: 13px;
      font-weight: 600;
    }

    h1 {
      font-size: 36px;
      letter-spacing: 10px;
      font-weight: 700;
      text-align: center;
      color: var(--important-text-color);

      span {
        position: relative;
      }

      span::before {
        content: "";
        height: 4px;
        width: 100%;
        background-color: #75acff;
        position: absolute;
        bottom: 0px;
        border-radius: 8px;
      }

      span ~ span::before {
        background-color: #13c557;
      }
    }
    p {
      font-size: 12px;
      color: var(--paragraph-color);
      font-weight: 500;
    }
  }
`;

export function AboutSection() {
  return (
    <Div>
      <picture></picture>
      <div>
        <h2>Desenvolvedor Web Front-End Júnior e Artista 2D/3D.</h2>
        <h1>
          A <span>PADAWAN</span> ABOUT TO BECOME <span>JEDI</span>.
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </Div>
  );
}
