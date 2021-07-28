import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import ButtonIcon from "../../atoms/ButtonIcon/ButtonIcon";
import Logo from "../../atoms/Logo/Logo";
import ListItem from "../../atoms/ListItem/ListItem";
import { faShoppingCart, faHamburger } from "@fortawesome/free-solid-svg-icons";

const StyledWrapper = styled.div`
  width: 100%;
  padding: 0.5rem 2rem;
  background-color: ${({ theme }) => theme.dirtyWhite};
  border-bottom: 2px solid ${({ theme }) => theme.grey};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: -0.02%;
  z-index: 999;

  @media (min-width: 1280px) {
    position: relative;
    flex-wrap: wrap;
    padding: 0 2rem;
  }
`;

const StyledLogo = styled(Logo)`
  flex-grow: 1;
  text-decoration: none;
  color: ${({ theme }) => theme.black};

  @media (min-width: 1280px) {
    padding: 0.5rem 0 1rem;
  }
`;

const StyledButtonIcon = styled(ButtonIcon)`
  margin: 0 0 0 2rem;
  color: ${({ theme, isMenuVisible }) =>
    isMenuVisible ? theme.blue : theme.black};
  transition: 1s;

  @media (min-width: 1280px) {
    display: none;
  }
`;

const StyledNavWrapper = styled.ul`
  list-style: none;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  text-align: center;
  transform: translateX(
    ${({ isMenuVisible }) => (isMenuVisible ? "0" : "-100%")}
  );
  transition: 1s;
  background-color: ${({ theme }) => theme.dirtyWhite};
  display: flex;
  flex-direction: column;

  @media (min-width: 1280px) {
    position: relative;
    transform: translateX(0);
    flex-direction: row;
    justify-content: space-between;
    padding: 0 2rem;
    border-top: 2px solid ${({ theme }) => theme.grey};
  }
`;

const StyledListItem = styled(ListItem)`
  margin: 0.5rem 3rem;
  padding: 0.5rem 0;
  text-decoration: none;
  transition: 0.5s;

  @media (min-width: 768px) {
    margin: 1rem 15rem;
    padding: 1rem 0;
  }

  @media (min-width: 1280px) {
    margin: 0;
  }
`;

class Header extends Component {
  state = {
    isMenuVisible: false,
  };

  showMenu = () => {
    this.setState((prevState) => ({ isMenuVisible: !prevState.isMenuVisible }));
  };

  render() {
    return (
      <StyledWrapper>
        <StyledLogo as={NavLink} to="/">
          Winter
          <br />
          Shop
        </StyledLogo>
        <NavLink to="/basket">
          <ButtonIcon icon={faShoppingCart}></ButtonIcon>
        </NavLink>
        <StyledButtonIcon
          icon={faHamburger}
          big
          isMenuVisible={this.state.isMenuVisible}
          onClick={this.showMenu}
        ></StyledButtonIcon>
        <StyledNavWrapper isMenuVisible={this.state.isMenuVisible}>
          <StyledListItem as={NavLink} to="/">
            Strona Główna
          </StyledListItem>
          <StyledListItem as={NavLink} to="/Narty">
            Narty
          </StyledListItem>
          <StyledListItem as={NavLink} to="/Buty%20Narciarskie">
            Buty Narciarskie
          </StyledListItem>
          <StyledListItem as={NavLink} to="/Odzież%20Narciarska%20Męska">
            Odzież Narciarska Męska
          </StyledListItem>
          <StyledListItem as={NavLink} to="/Odzież%20Narciarska%20Damska">
            Odzież Narciarska Damska
          </StyledListItem>
          <StyledListItem as={NavLink} to="/Dzieci">
            Dzieci
          </StyledListItem>
          <StyledListItem as={NavLink} to="/Kaski">
            Kaski
          </StyledListItem>
          <StyledListItem as={NavLink} to="/Gogle">
            Gogle
          </StyledListItem>
          <StyledListItem as={NavLink} to="/Akcesoria">
            Akcesoria
          </StyledListItem>
          <StyledListItem as={NavLink} to="/contact">
            Kontakt
          </StyledListItem>
        </StyledNavWrapper>
      </StyledWrapper>
    );
  }
}

export default Header;
