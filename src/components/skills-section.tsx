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
  padding-bottom: 70px;

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
`;

const Item = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

export function SkillsSection() {
  const { icons } = useIcons();
  return (
    <TagSection>
      <h1>Skills</h1>
      <Container>
        <h2>Soft Skills</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
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
        </div>
      </Container>
    </TagSection>
  );
}
