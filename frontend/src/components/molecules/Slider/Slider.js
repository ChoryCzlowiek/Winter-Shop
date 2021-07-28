import React, { Component } from "react";
import styled from "styled-components";
import slider2 from "../../../assets/images/slider/slider2.jpg";
import slider1 from "../../../assets/images/slider/slider1.jpg";
import slider3 from "../../../assets/images/slider/slider3.jpg";

const StyledSliderWrapper = styled.div`
  height: 70vh;
  width: 100%;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;

  @media (min-width: 1280px) {
    height: 90vh;
  }
`;

class Slider extends Component {
  state = {
    img: slider1,
  };

  changeSlider = () => {
    let counter = 0;
    const imgs = [slider1, slider2, slider3];

    setInterval(() => {
      counter++;
      if (counter >= imgs.length) {
        counter = 0;
      }
      this.setState(() => ({ img: imgs[counter] }));
    }, 3000);
  };

  componentDidMount() {
    this.changeSlider();
  }

  render() {
    return <StyledSliderWrapper img={this.state.img}></StyledSliderWrapper>;
  }
}

export default Slider;
