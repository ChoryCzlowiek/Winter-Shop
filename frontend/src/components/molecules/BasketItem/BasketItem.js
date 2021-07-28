import React from "react";
import styled from "styled-components";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import ButtonIcon from "../../atoms/ButtonIcon/ButtonIcon";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem;
`;

const StyledImg = styled.img`
  width: 15%;
`;

const StyledInnerWrapper = styled.div`
  flex-grow: 1;
  display: flex;
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0 2rem;
`;

const BasketItem = ({ name, price, img }) => (
  <StyledWrapper>
    <StyledImg src={img}></StyledImg>
    <StyledInnerWrapper>
      <StyledParagraph big>{name}</StyledParagraph>
      <StyledParagraph big>{price}zł</StyledParagraph>
      <ButtonIcon icon={faTrashAlt} blue></ButtonIcon>
    </StyledInnerWrapper>
  </StyledWrapper>
);

export default BasketItem;
