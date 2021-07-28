import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../theme/GlobalStyle';
import theme from '../theme/mainTheme';

const MainTemplate = ({children}) => (

    <>
    <GlobalStyle></GlobalStyle>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>

);

MainTemplate.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MainTemplate;