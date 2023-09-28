import { styled } from "styled-components";
import projects from "@/db";

const TagSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 100px;
  width: 100%;
  min-height: 300px;
  padding: 0px 40px;

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
  padding: 0px 40px;
  gap: 100px;

  picture {
    display: flex;
    width: 440px;
    height: 220px;
    background-color: var(--paper-color);
    border-radius: 8px;
  }

  div {
    display: flex;
    width: 620px;
    flex-direction: column;
    gap: 10px;
    font-size: 12px;
    font-weight: 500;
    color: var(--paragraph-color);
  }

  h2 {
    font-size: 14px;
    font-weight: 700;
    color: var(--important-text-color);
  }
`;

const InvertedPaper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  padding: 0px 40px;
  gap: 100px;

  picture {
    display: flex;
    width: 440px;
    height: 220px;
    background-color: var(--paper-color);
    border-radius: 8px;
  }

  div {
    display: flex;
    width: 620px;
    flex-direction: column;
    gap: 10px;
    font-size: 12px;
    font-weight: 500;
    color: var(--paragraph-color);
  }

  h2 {
    font-size: 14px;
    font-weight: 700;
    color: var(--important-text-color);
  }
`;

export function Projects() {
  return (
    <TagSection>
      <h1>Projetos</h1>
      {projects.map((project) => {
        if (project.inverted) {
          return (
            <InvertedPaper key={project.id}>
              <picture></picture>
              <div>
                <h2>{project.title}</h2>
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
              <picture></picture>
              <div>
                <h2>{project.title}</h2>
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
