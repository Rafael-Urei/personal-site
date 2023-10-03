"use client";

import { FigmaIcon } from "@/icons/figma";
import { InstagramIcon } from "@/icons/instagram";
import Link from "next/link";
import { styled } from "styled-components";

const TagFooter = styled.footer`
  display: flex;
  justify-content: center;
  gap: 210px;
  height: 125px;
  width: 100%;
  background-color: #0d0625;
  padding: 35px 0px;

  @media (max-width: 1300px) {
    height: 200px;
    padding: 0%;
    gap: 10px;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
  color: var(--important-text-color);

  h1 {
    font-size: 14px;
  }

  div {
    display: flex;
    gap: 10px;
    font-size: 12px;
    a {
      text-decoration: none;
      background-color: transparent;
      border: none;
      cursor: pointer;
      font-weight: 500;
      color: var(--important-text-color);
    }
  }
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export function Footer() {
  return (
    <TagFooter id="contatos">
      <Container>
        <h1>Site Coding e Design feitos por mim</h1>
        <div>
          <FigmaIcon />
          <Link
            href="https://www.figma.com/file/XvLry5nEYL4kEiWYOqbD3Q/Personal-Site?type=design&node-id=3-171&mode=design&t=1xqFORQi5tQkYqrk-0"
            target="_blank"
          >
            Figma (Design do Site)
          </Link>
        </div>
      </Container>
      <Container>
        <h1>Contatos:</h1>
        <div>
          <InstagramIcon />
          <LinksContainer>
            <Link
              href="https://www.instagram.com/rafaelss.exe/?hl=en"
              target="_blank"
            >
              Instagram
            </Link>
            -
            <Link href="#" target="_blank">
              rafaelss.dev@gmail.com
            </Link>
          </LinksContainer>
        </div>
      </Container>
    </TagFooter>
  );
}
