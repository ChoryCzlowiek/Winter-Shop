import React from "react";
import styled from "styled-components";
import Paragraph from "../../atoms/Paragraph/Paragraph";

const StyledWrapper = styled.div`
  margin: 1rem 0;
  cursor: pointer;

  @media (min-width: 768px) {
    margin: 2rem 0;
  }

  @media (min-width: 1280px) {
    flex-basis: 22%;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  border: 2px solid grey;
  margin: 0 0 0.5rem;

  @media (min-width: 768px) {
    margin: 0 0 1rem;
  }
`;

const StyledTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledParagraph = styled(Paragraph)`
  @media (min-width: 1280px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

const StyledNameParagraph = styled(StyledParagraph)`
  flex-basis: 70%;
  @media (min-width: 1280px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

const ProductCard = ({ img, name, price, productID, clickMe }) => (
  <StyledWrapper onClick={() => clickMe(productID)}>
    <StyledImg src={img}></StyledImg>
    <StyledTextWrapper>
      <StyledNameParagraph>{name}</StyledNameParagraph>
      <StyledParagraph big>{price} zł</StyledParagraph>
    </StyledTextWrapper>
  </StyledWrapper>
);

export default ProductCard;
