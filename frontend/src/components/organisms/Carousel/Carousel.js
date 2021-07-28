import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Title from "../../atoms/Title/Title";
import ButtonIcon from "../../atoms/ButtonIcon/ButtonIcon";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { fetchCategories } from "../../../actions/index";

const StyledWrapper = styled.div`
  padding: 2rem 2rem;
  text-align: center;

  @media (min-width: 768px) {
    padding: 3rem 2rem;
  }
`;

const StyledInnerWrapper = styled.div`
  margin: 2rem 0 0 0;
  display: flex;
  height: 50vh;

  @media (min-width: 768px) {
    height: 70vh;
    justify-content: center;
  }
`;

const StyledButtonIcon = styled(ButtonIcon)`
  flex-basis: 10%;
  align-self: center;
  color: ${({ theme }) => theme.blue};

  &:hover {
    color: ${({ theme }) => theme.orange};
  }

  @media (min-width: 768px) {
    flex-basis: 15%;
  }
`;

const StyledImg = styled.div`
  flex-grow: 1;
  background-image: url(data:image/jpeg;base64,${({ activeImg }) => activeImg});
  background-size: cover;
  background-position: center;
  position: relative;
  cursor: pointer;

  @media (min-width: 768px) {
    flex-grow: 0;
    flex-basis: 25%;
  }
`;

const StyledTitle = styled(Title)`
  position: absolute;
  top: 60%;
  left: 0;
  right: 0;
  height: 10vh;
  background-color: ${({ theme }) => theme.dirtyWhite};
  text-align: center;
  line-height: 10vh;
  opacity: 0.7;
`;

class Carousel extends Component {
  state = {
    counter: 0,
    redirect: false,
  };

  componentDidMount() {
    this.props.fetchCategoriesData();
  }

  getNextCategory = () => {
    if (this.state.counter === this.props.categories.length - 1) {
      this.setState({ counter: 0 });
    } else {
      this.setState((prevState) => ({ counter: prevState.counter + 1 }));
    }
  };

  getPreviousCategory = () => {
    if (this.state.counter === 0) {
      this.setState({ counter: 7 });
    } else {
      this.setState((prevState) => ({ counter: prevState.counter - 1 }));
    }
  };

  redirectToCategoryView = () => {
    this.setState({ redirect: true });
  };

  render() {
    const { categories } = this.props;

    if (!categories) {
      return <div />;
    }

    if (this.state.redirect) {
      return <Redirect to={`/${categories[this.state.counter].Name}`} />;
    }

    return (
      <StyledWrapper>
        <Title small category>
          Kategorie produktów
        </Title>
        <StyledInnerWrapper>
          <StyledButtonIcon
            big
            icon={faArrowLeft}
            onClick={this.getPreviousCategory}
          ></StyledButtonIcon>
          <StyledImg
            activeImg={categories[this.state.counter].Photo}
            onClick={this.redirectToCategoryView}
          >
            <StyledTitle small>
              {categories[this.state.counter].Name}
            </StyledTitle>
          </StyledImg>
          <StyledButtonIcon
            big
            icon={faArrowRight}
            onClick={this.getNextCategory}
          ></StyledButtonIcon>
        </StyledInnerWrapper>
      </StyledWrapper>
    );
  }
}

const mapStateToProps = ({ categories }) => ({ categories });

const mapDispatchToProps = (dispatch) => ({
  fetchCategoriesData: () => dispatch(fetchCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);
