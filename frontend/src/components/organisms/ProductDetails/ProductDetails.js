import React from "react";
import styled from "styled-components";
import Title from "../../atoms/Title/Title";
import ProductInfo from "../../molecules/ProductInfo/ProductInfo";

const StyledWrapper = styled.div`
  padding: 2rem 0.5rem;

  @media (min-width: 768px) {
    padding: 2rem 4rem;
  }
`;

const StyledFlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (min-width: 1280px) {
    margin: 3rem 0;
    flex-wrap: nowrap;
    justify-content: space-between;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  border: 2px solid grey;

  @media (min-width: 1280px) {
    width: 40%;
    height: 60vh;
  }
`;

const StyledProductInfo = styled(ProductInfo)`
  margin: 3rem 0;
`;

const ProductDetails = ({
  category,
  name,
  price,
  img,
  description,
  productID,
}) => (
  <StyledWrapper>
    <Title small>{name}</Title>
    <StyledFlexWrapper>
      <StyledImg src={`data:image/jpeg;base64,${img}`}></StyledImg>
      <StyledProductInfo
        category={category}
        name={name}
        price={price}
        img={img}
        description={description}
        productID={productID}
      />
    </StyledFlexWrapper>
  </StyledWrapper>
);

export default ProductDetails;
