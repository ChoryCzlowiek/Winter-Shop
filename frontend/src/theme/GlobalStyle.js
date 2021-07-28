import { createGlobalStyle } from "styled-components";
import PottaOne from "../assets/fonts/PottaOne-Regular.ttf";
import RobotoRegular from "../assets/fonts/Roboto-Regular.ttf";
import RobotoBold from "../assets/fonts/Roboto-Bold.ttf";

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'PottaOne';
    src: url(${PottaOne}) format('truetype');
}

@font-face {
    font-family: 'RobotoRegular';
    src: url(${RobotoRegular}) format('truetype');
}

@font-face {
    font-family: 'RobotoBold';
    src: url(${RobotoBold}) format('truetype');
}

*, *::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    font-family: 'RobotoRegular';
    color: rgb(41, 41, 41);
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

`;

export default GlobalStyle;
