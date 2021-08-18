import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #F0F7FF;
    }

    html {
        font-family: Poppins;
    }

`;

export default GlobalStyle;