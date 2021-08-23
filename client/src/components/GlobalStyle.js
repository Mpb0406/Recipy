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
        font-size: 1.3rem;
        border-radius: 5rem;
        cursor: pointer;
    }

    h1 {
        font-size: 3.8rem;
        font-weight: 700;
        color: #343036;
    }

    body::-webkit-scrollbar {
        width: 0.6rem;
        background-color: transparent;
        margin-right: 0.2rem;
    }

    body::-webkit-scrollbar-track {
        background-color: transparent;
        margin-right: 0.2rem;
    }

    body::-webkit-scrollbar-thumb {
        background-color: #343036;
        border-radius: 1rem;
        padding-right: 0.2rem;
    }

`;

export default GlobalStyle;