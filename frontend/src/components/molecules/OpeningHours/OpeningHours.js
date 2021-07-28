import React from "react";
import styled from "styled-components";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import Title from "../../atoms/Title/Title";

const StyledHoursWrapper = styled.div`
  padding: 3rem 0;

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

const OpeningHours = () => (
  <StyledHoursWrapper>
    <StyledTitle orange category small>
      Godziny otwarcia:
    </StyledTitle>
    <StyledParagraph>Poniedziałek: 10:00 - 18:00</StyledParagraph>
    <StyledParagraph>Wtorek: 10:00 - 18:00</StyledParagraph>
    <StyledParagraph>Środa: 10:00 - 18:00</StyledParagraph>
    <StyledParagraph>Czwartek: 10:00 - 18:00</StyledParagraph>
    <StyledParagraph>Piątek: 10:00 - 18:00</StyledParagraph>
    <StyledParagraph>Sobota: 10:00 - 18:00</StyledParagraph>
    <StyledParagraph>Niedziela: nieczynne</StyledParagraph>
  </StyledHoursWrapper>
);

export default OpeningHours;
