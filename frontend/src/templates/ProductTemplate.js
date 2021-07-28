import React from "react";
import PropTypes from "prop-types";

const ProductTemplate = ({ children }) => <>{children}</>;

ProductTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProductTemplate;
