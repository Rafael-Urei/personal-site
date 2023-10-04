import { styled } from "styled-components";

const TagNav = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  list-style: none;

  > li > a {
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    color: var(--important-text-color);
    transition: 300ms ease-in-out;

    &:hover {
      color: #fff;
    }
  }

  @media (max-width: 1300px) {
    display: none;
  }
`;

export function Nav() {
  return (
    <TagNav>
      <li>
        <a href="#inicio">INÍCIO</a>
      </li>
      <li>
        <a href="#sobre">SOBRE</a>
      </li>
      <li>
        <a href="#skills">SKILLS</a>
      </li>
      <li>
        <a href="#projetos">PROJETOS</a>
      </li>
      <li>
        <a href="#contatos">CONTATOS</a>
      </li>
    </TagNav>
  );
}
