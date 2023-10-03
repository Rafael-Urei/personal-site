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
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    line-height: 120%;
    width: 520px;

    h2 {
      font-size: 13px;
      font-weight: 600;
    }

    h1 {
      font-size: 36px;
      letter-spacing: 10px;
      line-height: 120%;
      font-weight: 700;
      text-align: center;
      color: var(--important-text-color);

      p {
        font-size: 10px;
      }

      span {
        position: relative;
      }

      span::before {
        content: "";
        height: 4px;
        width: 100%;
        background-color: #fff;
        border: 2px solid #75acff;
        filter: drop-shadow(0px 0px 4px #00c3ff);
        position: absolute;
        bottom: 0px;
        border-radius: 8px;
      }

      span ~ span::before {
        background-color: #fff;
        border: 2px solid #13c557;
        filter: drop-shadow(0px 0px 3px #13c557);
      }
    }
    p {
      font-size: 12px;
      color: var(--paragraph-color);
      font-weight: 500;

      span {
        font-weight: 700;
        color: var(--button-color);
      }
    }
  }

  @media (max-width: 1300px) {
    flex-direction: column;
    align-items: center;
    height: 600px;
    gap: 50px;

    picture {
      height: 100%;
      width: 100%;
    }

    > div {
      height: auto;
      width: auto;
      padding: 0px 10px;
      gap: 10px;

      h1 {
        font-size: 30px;
      }
    }
  }
`;

export function AboutSection() {
  return (
    <Div id="sobre">
      <picture></picture>
      <div>
        <h2>Desenvolvedor Web Front-End Júnior e Artista 2D/3D.</h2>
        <h1>
          A <span>PADAWAN</span> ABOUT TO BECOME <span>JEDI</span>{" "}
          <p>or a Sith...</p>
        </h1>
        <p>
          <span>&#60;p&#62;</span> Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
          <span>&#60;/p&#62;</span>
        </p>
      </div>
    </Div>
  );
}
