import React from "react";
import styled from "styled-components";
import OpeningHours from "../../molecules/OpeningHours/OpeningHours";
import ContactBox from "../../molecules/ContactBox/ContactBox";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import Map from "../../../assets/images/Map.png";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.blue};
  text-align: center;

  @media (min-width: 1280px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 7rem 0 0;
  }
`;

const StyledImg = styled.img`
  height: 50vh;
  width: 100%;

  @media (min-width: 1280px) {
    flex-basis: 30%;
  }
`;

const StyledOpeningHours = styled(OpeningHours)`
  @media (min-width: 1280px) {
    flex-basis: 25%;
  }
`;

const StyledContactBox = styled(ContactBox)`
  @media (min-width: 1280px) {
    flex-basis: 25%;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0 0 1rem 0;

  @media (min-width: 1280px) {
    margin: 1rem 0;
    flex-basis: 100%;
  }
`;

const Footer = () => (
  <StyledWrapper>
    <StyledImg src={Map}></StyledImg>
    <StyledOpeningHours />
    <StyledContactBox footer />
    <StyledParagraph>© All rights reserved.</StyledParagraph>
  </StyledWrapper>
);

export default Footer;
