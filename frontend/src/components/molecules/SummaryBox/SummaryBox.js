import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import Button from "../../atoms/Button/Button";

const StyledSummaryWrapper = styled.div`
  background-color: ${({ theme }) => theme.dirtyWhite};
  margin: 1rem 3rem 3rem;
  padding: 1rem;
  border: 2px solid ${({ theme }) => theme.grey};
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-areas:
    "products cost"
    "shipment shipmentCost"
    "line line"
    "summary summaryCost"
    ". button";

  @media (min-width: 768px) {
    margin: 3rem 10rem 8rem;
  }

  @media (min-width: 1280px) {
    margin: 0;
    width: 30%;
    max-height: 40vh;
  }
`;

const StyledParagraph = styled(Paragraph)`
  grid-area: ${({ gridArea }) => gridArea};
  justify-self: ${({ right }) => (right ? "end" : "start")};

  @media (min-width: 1280px) {
    margin: 0.5rem 0;
  }
`;

const StyledLine = styled.div`
  margin: 1rem 0.5rem;
  grid-area: line;
  height: 2px;
  background-color: ${({ theme }) => theme.grey};
`;

const StyledButton = styled(Button)`
  grid-area: button;
`;

class SummaryBox extends Component {
  state = {
    redirect: false,
  };

  redirectToOrderView() {
    if (this.countTotalPrice() > 0) {
      this.setState({ redirect: true });
    } else {
      alert("Koszyk jest pusty!");
    }
  }

  countTotalPrice() {
    const totalPrice = this.props.basket.reduce((acc, obj) => {
      return acc + obj.TotalPrice;
    }, 0);

    return totalPrice;
  }

  countProductsQuantity() {
    const quantity = this.props.basket.reduce((acc, obj) => {
      return acc + obj.Quantity;
    }, 0);

    return quantity;
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/order" />;
    }

    return (
      <StyledSummaryWrapper>
        <StyledParagraph big gridArea="products">
          {this.countProductsQuantity()} produkty
        </StyledParagraph>
        <StyledParagraph big gridArea="cost" right>
          {this.countTotalPrice()} zł
        </StyledParagraph>
        <StyledParagraph big gridArea="shipment">
          Wysyłka
        </StyledParagraph>
        <StyledParagraph big gridArea="shipmentCost" right>
          10 zł
        </StyledParagraph>
        <StyledLine></StyledLine>
        <StyledParagraph big gridArea="summary">
          Razem
        </StyledParagraph>
        <StyledParagraph big gridArea="summaryCost" right>
          {this.countTotalPrice() + 10} zł
        </StyledParagraph>
        <StyledButton secondary onClick={() => this.redirectToOrderView()}>
          Zamów
        </StyledButton>
      </StyledSummaryWrapper>
    );
  }
}

const mapStateToProps = ({ basket }) => ({ basket });

export default connect(mapStateToProps)(SummaryBox);
