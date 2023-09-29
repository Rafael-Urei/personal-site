import { styled } from "styled-components";

const Container = styled.div`
  background-color: var(--button-color);
  height: 1px;
  width: 100vw;
  opacity: 10%;
`;

export function Divider() {
  return <Container></Container>;
}
