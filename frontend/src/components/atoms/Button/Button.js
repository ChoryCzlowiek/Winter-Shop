import styled, { css } from "styled-components";

const Button = styled.button`
  padding: 0.3rem 1rem;
  font-family: ${({ theme }) => theme.titleFont};
  color: ${({ theme }) => theme.blue};
  border: 2px solid ${({ theme }) => theme.blue};
  border-radius: 3rem;
  box-shadow: 0 0 10px 4px ${({ theme }) => theme.blue};
  cursor: pointer;
  transition: 1s;

  &:hover {
    color: ${({ theme }) => theme.orange};
    box-shadow: 0 0 10px 4px ${({ theme }) => theme.orange};
    background-color: ${({ theme }) => theme.blue};
  }

  &:focus {
    outline: none;
  }

  ${({ secondary }) =>
    secondary &&
    css`
      color: ${({ theme }) => theme.orange};
      border: 2px solid ${({ theme }) => theme.orange};
      box-shadow: 0 0 10px 4px ${({ theme }) => theme.orange};

      &:hover {
        color: ${({ theme }) => theme.blue};
        box-shadow: 0 0 10px 4px ${({ theme }) => theme.blue};
        background-color: ${({ theme }) => theme.orange};
      }
    `}

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export default Button;
