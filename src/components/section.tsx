"use client";

import { styled } from "styled-components";

type Props = {
  title: string;
};

const TagSection = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  min-height: 300px;
  padding: 0px 40px;

  > h1 {
    font-size: 14px;
    font-weight: 700;
  }
`;

export function Section({ title }: Props) {
  return (
    <TagSection>
      <h1>{title}</h1>
    </TagSection>
  );
}
