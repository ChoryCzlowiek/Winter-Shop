import styled, { css } from "styled-components";

const Title = styled.h1`
  margin: 1rem 0;
  font-family: ${({ theme }) => theme.titleFont};
  font-size: ${({ theme, small }) =>
    small ? theme.fontSize.m : theme.fontSize.l};
  color: ${({ orange, theme }) => (orange ? theme.orange : "rgb(41, 41, 41)")};
  position: relative;

  ${({ category }) =>
    category &&
    css`
      margin: 1rem 0 2rem 0;
      text-align: center;

      &::after {
        content: "";
        position: absolute;
        top: 110%;
        left: 50%;
        width: 40vw;
        height: 3px;
        transform: translateX(-50%);
        background-color: ${({ theme }) => theme.grey};
      }
    `}

  @media (min-width: 768px) {
    font-size: ${({ theme, small }) =>
      small ? theme.fontSize.xl : theme.fontSize.xxl};

    ${({ category }) =>
      category &&
      css`
        &::after {
          width: 20vw;
          height: 4px;
        }
      `}
  }

  @media (min-width: 1280px) {
    ${({ category }) =>
      category &&
      css`
        &::after {
          width: 10vw;
          height: 4px;
        }
      `}
  }
`;

export default Title;
