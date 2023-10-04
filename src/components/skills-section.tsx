"use client";

import { styled } from "styled-components";
import { useIcons } from "@/hooks/useIcons";

const TagSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 100px;
  width: 100%;
  min-height: 300px;
  padding: 0px 40px;
  line-height: 120%;

  > h1 {
    font-size: 14px;
    font-weight: 700;
    align-self: center;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;

  h2,
  p {
    font-weight: 700;
    font-size: 14px;
  }

  p {
    font-weight: 500;
    color: var(--paragraph-color);
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
  }

  @media (max-width: 1300px) {
    div {
      flex-direction: column;
    }
  }
`;

const Item = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

export function SkillsSection() {
  const { icons } = useIcons();
  return (
    <TagSection id="skills">
      <h1>Skills</h1>
      <Container>
        <h2>Soft Skills</h2>
        <p>
          Sou uma pessoa resiliente, com princípios éticos, com inteligẽncia
          emocional, flexível, empático, colaborativo, gosto de aprender mais e
          mais, também sou positivo e relativamente criativo.
        </p>
      </Container>
      <Container>
        <h2>Hard Skills</h2>
        <div>
          {icons.map((icon) => {
            return (
              <Item key={icon.id} type="button" title={icon.title}>
                {icon.icon}
              </Item>
            );
          })}
          <p>Inglês: Avançado</p>
          <p>Russo: Básico</p>
        </div>
      </Container>
    </TagSection>
  );
}
