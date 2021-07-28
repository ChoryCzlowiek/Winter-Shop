import React from "react";
import Slider from "../components/molecules/Slider/Slider";
import AboutShop from "../components/molecules/AboutShop/AboutShop";
import Collage from "../components/molecules/Collage/Collage";
import Carousel from "../components/organisms/Carousel/Carousel";

const HomeTemplate = () => (
  <>
    <Slider />
    <AboutShop />
    <Collage />
    <Carousel />
  </>
);

export default HomeTemplate;
