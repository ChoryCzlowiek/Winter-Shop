import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Title from "../components/atoms/Title/Title";

const StyledFlexWrapper = styled.div`
  padding: 0 0.5rem;
  display: flex;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    padding: 0 4rem;
    justify-content: space-between;
  }
`;

const CategoryTemplate = ({ children, title }) => (
  <div>
    <Title small category>
      {title}
    </Title>
    <StyledFlexWrapper>{children}</StyledFlexWrapper>
  </div>
);

CategoryTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CategoryTemplate;
