import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  margin: 0.5rem 0;
  padding: 0.5rem 1rem;
  border: 2px solid ${({ theme }) => theme.blue};
  transition: 0.5s;

  &:focus {
    outline: none;
    border: 4px solid ${({ theme }) => theme.orange};
    border-radius: 2rem;
  }
`;

export default Input;
