import React from "react";
import styled from "styled-components";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import Title from "../../atoms/Title/Title";

const StyledContactWrapper = styled.div`
  padding: 0 0 3rem 0;

  @media (min-width: 1280px) {
    padding: 0;
  }
`;

const StyledTitle = styled(Title)`
  margin: 0 0 1rem 0;
`;

const StyledParagraph = styled(Paragraph)`
  padding: 0.2rem 0;
`;

const ContactBox = () => (
  <StyledContactWrapper>
    <StyledTitle orange category small>
      Dane Firmy:
    </StyledTitle>
    <StyledParagraph big>Winter Shop</StyledParagraph>
    <StyledParagraph>ul. Wyszogradzka 40b</StyledParagraph>
    <StyledParagraph>05-231 Warszawa</StyledParagraph>
    <StyledParagraph>+48 661 231 213</StyledParagraph>
    <StyledParagraph>+48 661 231 214</StyledParagraph>
    <StyledParagraph>pomoc@wintershop.pl</StyledParagraph>
  </StyledContactWrapper>
);

export default ContactBox;
