import React from "react";
import styled from "styled-components";
import img1 from "../../../assets/images/collage/collage1.jpg";
import img2 from "../../../assets/images/collage/collage3.jpg";
import img3 from "../../../assets/images/collage/collage4.jpg";
import img4 from "../../../assets/images/collage/collage5.jpg";
import img5 from "../../../assets/images/collage/collage7.jpg";
import portrait1 from "../../../assets/images/collage/collage2-por.jpg";
import portrait2 from "../../../assets/images/collage/collage6-por.jpg";

const StyledGridWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: repeat(5, 30vh);
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "portrait1 img1"
    "portrait1 img2"
    "img3 img3"
    "portrait2 img4"
    "portrait2 img5";

  @media (min-width: 1280px) {
    grid-template-rows: repeat(2, 30vh);
    grid-template-columns: repeat(6, 1fr);
    grid-template-areas:
      "portrait1 img1 img1 img2 img2 portrait2"
      "portrait1 img3 img4 img4 img5 portrait2 ";
  }
`;

const StyledImg = styled.div`
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
  grid-area: ${({ gridArea }) => gridArea};
  border: 1px solid ${({ theme }) => theme.grey};
`;

const Collage = () => (
  <StyledGridWrapper>
    <StyledImg gridArea="img1" img={img1}></StyledImg>
    <StyledImg gridArea="img2" img={img2}></StyledImg>
    <StyledImg gridArea="img3" img={img3}></StyledImg>
    <StyledImg gridArea="img4" img={img4}></StyledImg>
    <StyledImg gridArea="img5" img={img5}></StyledImg>
    <StyledImg gridArea="portrait1" img={portrait1}></StyledImg>
    <StyledImg gridArea="portrait2" img={portrait2}></StyledImg>
  </StyledGridWrapper>
);

export default Collage;
