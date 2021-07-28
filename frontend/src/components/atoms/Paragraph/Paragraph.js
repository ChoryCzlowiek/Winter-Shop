import styled from "styled-components";

const Paragraph = styled.p`
  font-size: ${({ theme, big }) => (big ? theme.fontSize.m : theme.fontSize.s)};
  font-family: ${({ theme, big }) =>
    big ? theme.textFontBold : "RobotoRegular"};
`;

export default Paragraph;
