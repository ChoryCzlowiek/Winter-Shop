import React from "react";
import styled from "styled-components";
import OrderForm from "../components/molecules/OrderForm/OrderForm";
import Title from "../components/atoms/Title/Title";

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.blue};
  text-align: center;
  padding: 2rem 5rem;
`;

const ClientDataTemplate = () => (
  <StyledWrapper>
    <Title orange>Wprowadź swoje dane do zamówienia</Title>
    <OrderForm></OrderForm>
  </StyledWrapper>
);

export default ClientDataTemplate;
