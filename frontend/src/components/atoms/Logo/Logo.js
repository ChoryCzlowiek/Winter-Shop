import styled from "styled-components";

const Logo = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-family: ${({ theme }) => theme.titleFont};
  line-height: 1;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

export default Logo;
