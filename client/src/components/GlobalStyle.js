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

    button {
        padding: 1rem;
        font-weight: 500;
        font-size: 1.2rem;
        border-radius: 5rem;
        cursor: pointer;
    }

    h1 {
        font-size: 3.8rem;
        font-weight: 700;
    }

`;

export default GlobalStyle;