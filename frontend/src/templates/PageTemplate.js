import React from "react";
import PropTypes from "prop-types";
import Header from "../components/organisms/Header/Header";
import Footer from "../components/organisms/Footer/Footer";

const PageTemplate = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

PageTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageTemplate;
