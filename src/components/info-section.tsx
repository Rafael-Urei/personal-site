import { styled } from "styled-components";

const TagDiv = styled.div`
  display: flex;
  justify-content: center;
  height: 175px;
  width: 100%;
  font-size: 14px;
  font-weight: 700;
  color: var(--important-text-color);
`;

export function Info() {
  return (
    <TagDiv>
      Ferramentas utilizadas no site: Next.JS, React, TypeScript e Styled
      Components.
    </TagDiv>
  );
}
