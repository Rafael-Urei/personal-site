import Image from "next/image";
import Link from "next/link";
import { styled } from "styled-components";
import arte1 from "../../public/arte1.jpg";
import woman from "../../public/woman.jpg";
import gwen from "../../public/gwen.jpg";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px 40px;
  gap: 40px;
  padding-bottom: 70px;

  ul {
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

const Paper = styled.article`
  min-width: 200px;
  width: 300px;
  height: 130px;
  border-radius: 8px;
  background-color: var(--paper-color);
  position: relative;
  cursor: pointer;
  transition: 200ms;

  &:hover {
    width: 600px;
    height: 230px;
  }
`;

export function ArtsSection() {
  return (
    <Section>
      <Title>Artes</Title>
      <div>
        <SubTitle>
          <Link
            href="https://www.artstation.com/rafael_urei"
            target="_blank"
            rel="external"
            title="Site do meu portfólio de arte"
          >
            ArtStation
          </Link>
        </SubTitle>
      </div>
      <ul>
        <Paper>
          <Image
            src={arte1}
            alt="Arte do Lanspre, um bebê Grifo olhando sua mãe voar em um campo aberto cheio de grama e algumas montanhas ao fundo."
            fill
            style={{ objectFit: "cover", borderRadius: "8px" }}
          ></Image>
        </Paper>
        <Paper>
          <Image
            src={woman}
            alt="Estatua de pedra representando o rosto de uma mulher, em um fundo escuro"
            fill
            style={{ objectFit: "cover", borderRadius: "8px" }}
          ></Image>
        </Paper>
        <Paper>
          <Image
            src={gwen}
            alt="Arte da Gwen Stacy, Mulher Aranha do universo de Miles Morales"
            fill
            style={{
              objectFit: "cover",
              borderRadius: "8px",
            }}
          ></Image>
        </Paper>
      </ul>
    </Section>
  );
}
