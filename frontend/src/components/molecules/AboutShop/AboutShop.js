import React from "react";
import styled from "styled-components";
import Title from "../../atoms/Title/Title";
import Paragraph from "../../atoms/Paragraph/Paragraph";

const StyledWrapper = styled.div`
  padding: 2rem 2rem;
  text-align: center;

  @media (min-width: 768px) {
    padding: 3rem 2rem;
  }

  @media (min-width: 1280px) {
    padding: 3rem 4rem;
  }
`;

const StyledParagraph = styled(Paragraph)`
  padding: 1.5rem 0 0 0;
`;

const AboutShop = () => (
  <StyledWrapper>
    <Title small category>
      Winter Shop - spełnienie Twoich marzeń
    </Title>
    <StyledParagraph>
      Nasz sklep zimowy Winter Shop istnieje na rynku już od 15 lat. Sprzedajemy
      sprzęt narciarski dla każdego, zarówno początkującego, jak i
      profesjonalnego narciarza. Nasi pracownicy to prawdziwi fachowcy, oraz
      przede wszystkim pasjonaci zimowego szaleństwa, i chętnie starają się
      dzielić swoją rozległą wiedzą z zakresu sprzętu narciarskiego z każdym
      zainteresowanym klientem kupującym w naszym sklepie. Sklep Winter Shop
      oferuję markowy sprzęt najlepszej jakości, od akcesorii takie jak: kaski,
      gogle narciarskie, buty, oraz przede wszystkim: narty. W naszym
      asortymencie znajdują się najlpopularniejsze, najbardziej niezawodne
      marki: Salomon, Uvex, Head, Dragon oraz wiele innych znajdujących się w
      sklepie Winter Shop.
    </StyledParagraph>
  </StyledWrapper>
);

export default AboutShop;
