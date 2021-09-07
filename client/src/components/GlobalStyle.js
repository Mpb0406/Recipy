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

    span {
        color: #3B7C0B;
    }

    p {
        font-size: 1.2rem;
        font-weight: 500;
    }

    .nav-icon {
        height: 1.5rem;
        margin-right: 0.5rem;
    }

    body::-webkit-scrollbar {
        width: 1rem;
        background-color: transparent;
    }

    body::-webkit-scrollbar-track {
        background-color: transparent;
        border: 2px solid transparent;
    }

    body::-webkit-scrollbar-thumb {
        border: 4px solid rgba(0, 0, 0, 0);
        background-clip: padding-box;
        border-radius: 9999px;
        background-color: #696969;
        &:hover {
            background-color: #343036;
        }
    }

`;

export default GlobalStyle;
