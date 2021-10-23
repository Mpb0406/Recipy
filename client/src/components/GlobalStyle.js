import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #F0F7FF;
        font-family: Poppins;
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

    a {
        text-decoration: none;
        color: #343036;
        transition: all 0.3s ease;
        &:hover {
            color: #3B7C0B;
        }
    }

    .nav-icon {
        height: 1.5rem;
        margin-right: 0.5rem;
    }

    .add-item {
        height: 2rem;
    }

    .link-button {
        color: #fff;
        font-size: 1.3rem;
        font-weight: 400;
        text-decoration: none;
        padding: .8rem 1.5rem;
        border-radius: 5rem;
        background-color: #3B7C0B;
        border: 3px solid #3B7C0B;
        margin: 3rem;
        transition: all 0.5s ease;
        
        &:hover {
            background-color: transparent;
            border: 3px solid #3B7C0B;
            color: #3B7C0B
        }
    }

    .text-input {
        padding: 0.3rem;
        font-size: 1.2rem;
        font-family: Poppins;
    }

    label {
        font-size: 0.8rem;
        font-weight: 500;
        color: #969696;
        margin: 0.3rem 0 1.2rem;
    }

    textarea {
        font-family: Poppins;
        padding: 0.3rem;
        font-size: 1.2rem;
    }

    .form-title {
        margin: 1rem 3rem;
        font-size: 3rem;
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
        border: 3px solid rgba(0, 0, 0, 0);
        background-clip: padding-box;
        border-radius: 9999px;
        background-color: #696969;
        &:hover {
            background-color: #343036;
        }
    }

    

`;

export default GlobalStyle;
