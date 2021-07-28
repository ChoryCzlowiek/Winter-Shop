import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import Button from "../../atoms/Button/Button";

const StyledWrapper = styled.div`
  margin: 2rem 0;

  @media (min-width: 768px) {
    margin: 3rem 0;
  }

  @media (min-width: 1280px) {
    margin: 10rem 0;
    flex-basis: 50%;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0.5rem 0;
  color: ${({ theme, price }) => (price ? theme.blue : theme.black)};

  @media (min-width: 768px) {
    margin: 1rem 0;
  }
`;

const StyledButton = styled(Button)`
  margin: 2rem 0 4rem;
`;

const StyledDescriptionWrapper = styled.div`
  font-size: ${({ theme }) => theme.fontSize.m};
`;

class ProductInfo extends Component {
  addItemToBasket = (productID, price) => {
    axios
      .post("http://localhost:5000/api/basket/addProduct", {
        ProductID: productID,
        Price: price,
      })
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };

  render() {
    const { category, name, price, description, productID } = this.props;

    return (
      <StyledWrapper>
        <StyledParagraph big>Kategoria: {category}</StyledParagraph>
        <StyledParagraph big>Nazwa: {name}</StyledParagraph>
        <StyledParagraph price big>
          Cena: {price}zł
        </StyledParagraph>
        <StyledButton
          secondary
          onClick={() => this.addItemToBasket(productID, price)}
        >
          Dodaj do koszyka
        </StyledButton>
        <StyledDescriptionWrapper
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </StyledWrapper>
    );
  }
}

export default ProductInfo;
