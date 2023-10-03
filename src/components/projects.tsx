import Image from "next/image";
import { styled } from "styled-components";
import projects from "@/db";
import Link from "next/link";

const TagSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 100px;
  width: 100%;
  min-height: 300px;

  > h1 {
    font-size: 14px;
    font-weight: 700;
    align-self: center;
  }
`;

const Paper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 40px;
  gap: 100px;
  line-height: 120%;

  picture {
    display: flex;
    width: 440px;
    height: 220px;
    background-color: var(--paper-color);
    border-radius: 8px;
    position: relative;
    transition: 300ms ease-in-out;
    cursor: pointer;
  }

  div {
    display: flex;
    width: 620px;
    flex-direction: column;
    gap: 10px;
    font-size: 12px;
    font-weight: 500;
    color: var(--paragraph-color);

    a {
      text-decoration: none;
    }
  }

  h2 {
    font-size: 14px;
    font-weight: 700;
    color: var(--important-text-color);
  }

  @media (max-width: 1300px) {
    flex-direction: column;

    picture {
      width: 350px;
    }

    div {
      width: auto;
    }
  }
`;

const InvertedPaper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-between;
  padding: 0px 40px;
  gap: 100px;
  line-height: 120%;

  picture {
    display: flex;
    width: 440px;
    height: 220px;
    background-color: var(--paper-color);
    border-radius: 8px;
    position: relative;
    transition: 300ms ease-in-out;
    cursor: pointer;
  }

  div {
    display: flex;
    width: 620px;
    flex-direction: column;
    gap: 10px;
    font-size: 12px;
    font-weight: 500;
    color: var(--paragraph-color);

    a {
      text-decoration: none;
    }
  }

  h2 {
    font-size: 14px;
    font-weight: 700;
    color: var(--important-text-color);
  }

  @media (max-width: 1300px) {
    flex-direction: column;

    picture {
      width: 350px;
    }

    div {
      width: auto;
    }
  }
`;

export function Projects() {
  return (
    <TagSection id="projetos">
      <h1>Projetos</h1>
      {projects.map((project) => {
        if (project.inverted) {
          return (
            <InvertedPaper key={project.id}>
              <picture>
                <Image
                  src={project.img.src}
                  alt={project.img.alt}
                  fill
                  style={{ objectFit: "cover", borderRadius: "8px" }}
                />
              </picture>
              <div>
                <Link href={project.url} target="_blank" rel="external">
                  <h2>{project.title}</h2>
                </Link>
                <p>
                  <strong>Ferramentas utilizadas:</strong> {project.tools}
                </p>
                <h3>Descrição:</h3>
                <p>{project.description}</p>
              </div>
            </InvertedPaper>
          );
        } else {
          return (
            <Paper key={project.id}>
              <picture>
                <Image
                  src={project.img.src}
                  alt={project.img.alt}
                  fill
                  style={{ objectFit: "cover", borderRadius: "8px" }}
                />
              </picture>
              <div>
                <Link href={project.url} target="_blank" rel="external">
                  <h2>{project.title}</h2>
                </Link>
                <p>
                  <strong>Ferramentas utilizadas:</strong> {project.tools}
                </p>
                <h3>Descrição:</h3>
                <p>{project.description}</p>
              </div>
            </Paper>
          );
        }
      })}
    </TagSection>
  );
}
