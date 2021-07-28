import styled from "styled-components";

const ListItem = styled.li`
  font-family: ${({ theme }) => theme.textBoldFont};
  color: ${({ theme }) => theme.blue};
  background-color: ${({ theme }) => theme.dirtyWhite};
  text-transform: uppercase;
  border: 2px solid ${({ theme }) => theme.blue};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.orange};
  }

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: ${({ theme }) => theme.blue};
  }

  @media (min-width: 1280px) {
    margin: 0;
    border: none;
    color: ${({ theme }) => theme.black};
    font-family: ${({ theme }) => theme.titleFont};
  }
`;

export default ListItem;
