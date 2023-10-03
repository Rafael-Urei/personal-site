import Image from "next/image";
import Link from "next/link";
import { styled } from "styled-components";
import arte1 from "../../public/arte1.jpg";
import woman from "../../public/woman.jpg";
import gwen from "../../public/gwen.jpg";
import { ArtStationIcon } from "@/icons/artstation";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px 40px;
  gap: 40px;

  article {
    display: flex;
    justify-content: space-between;
  }
`;
const Title = styled.section`
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  text-align: center;
`;

const SubTitle = styled.h2`
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  color: var(--important-text-color);

  a {
    color: var(--important-text-color);
  }
`;

export function ArtsSection() {
  return (
    <Section id="artes">
      <Title>Artes</Title>
      <div>
        <SubTitle>
          <Link
            href="https://www.artstation.com/rafael_urei"
            target="_blank"
            rel="external"
            title="Site do meu portfólio de arte"
          >
            <ArtStationIcon />
          </Link>
        </SubTitle>
      </div>
    </Section>
  );
}
