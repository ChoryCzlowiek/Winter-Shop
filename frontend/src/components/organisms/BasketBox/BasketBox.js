import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import SummaryBox from "../../molecules/SummaryBox/SummaryBox";
import Title from "../../atoms/Title/Title";
import Button from "../../atoms/Button/Button";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1280px) {
    flex-direction: row;
    margin: 5rem;
  }
`;

const StyledProductsWrapper = styled.div`
  text-align: center;

  @media (min-width: 1280px) {
    flex-basis: 80%;
  }
`;

const StyledPreviousButton = styled(Button)`
  margin: 1rem 0;

  @media (min-width: 768px) {
    margin: 3rem 0;
  }
`;

class BasketBox extends Component {
  state = {
    redirect: false,
  };

  redirectToHomeView() {
    this.setState({ redirect: true });
  }

  render() {
    const { children } = this.props;

    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

    return (
      <>
        <Title small category>
          Koszyk
        </Title>
        <StyledWrapper>
          <StyledProductsWrapper>
            {children}
            <StyledPreviousButton onClick={() => this.redirectToHomeView()}>
              Wróć do zakupów
            </StyledPreviousButton>
          </StyledProductsWrapper>
          <SummaryBox />
        </StyledWrapper>
      </>
    );
  }
}

BasketBox.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BasketBox;
