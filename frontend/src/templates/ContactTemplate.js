import React from "react";
import styled from "styled-components";
import MessageForm from "../components/molecules/MessageForm/MessageForm";
import Title from "../components/atoms/Title/Title";
import ContactBox from "../components/molecules/ContactBox/ContactBox";
import OpeningHours from "../components/molecules/OpeningHours/OpeningHours";

const StyledWrapper = styled.div`
  text-align: center;
`;

const StyledFlexWrapper = styled.div`
  @media (min-width: 1280px) {
    display: flex;
    justify-content: space-space-between;
    align-items: baseline;
  }
`;

const ContactTemplate = () => (
  <StyledWrapper>
    <Title>Kontakt</Title>
    <StyledFlexWrapper>
      <MessageForm />
      <div>
        <ContactBox />
        <OpeningHours />
      </div>
    </StyledFlexWrapper>
  </StyledWrapper>
);
export default ContactTemplate;
