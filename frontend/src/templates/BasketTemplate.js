import React from "react";
import PropTypes from "prop-types";
import BasketBox from "../components/organisms/BasketBox/BasketBox";

const BasketTemplate = ({ children }) => <BasketBox>{children}</BasketBox>;

BasketTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BasketTemplate;
