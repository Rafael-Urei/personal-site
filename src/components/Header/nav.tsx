import { styled } from "styled-components";

const TagNav = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  list-style: none;

  > li > a {
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    color: var(--important-text-color);
  }
`;

export function Nav() {
  return (
    <TagNav>
      <li>
        <a href="#">Inicio</a>
      </li>
      <li>
        <a href="#">Sobre</a>
      </li>
      <li>
        <a href="#">Skills</a>
      </li>
      <li>
        <a href="#">Projetos</a>
      </li>
      <li>
        <a href="#">Contatos</a>
      </li>
    </TagNav>
  );
}
