import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonIcon = styled(FontAwesomeIcon)`
  font-size: ${({ theme, big }) => (big ? theme.fontSize.l : theme.fontSize.m)};
  color: ${({ theme, blue }) => (blue ? theme.blue : theme.black)};
  cursor: pointer;

  @media (min-width: 768px) {
    font-size: ${({ theme, big }) =>
      big ? theme.fontSize.xxl : theme.fontSize.l};
  }
`;

export default ButtonIcon;
